
import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
// Changed from named import to default import for gsap
import gsap from 'gsap';

export const AudioPlayer: React.FC = () => {
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const labelRef = useRef<HTMLParagraphElement>(null);
  const MAX_VOLUME = 0.2;

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Initial play attempts (triggered by component mount after "Start Journey" click)
    audio.volume = 0;
    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise.then(() => {
        gsap.to(audio, { volume: MAX_VOLUME, duration: 3, ease: "power1.inOut" });
      }).catch(error => {
        console.log("Autoplay blocked. User interaction required.");
      });
    }

    // Tab Visibility API: Cinematic Auto-Fade
    const handleVisibility = () => {
      if (document.hidden) {
        gsap.to(audio, { volume: 0, duration: 1, onComplete: () => audio.pause() });
      } else {
        if (!isMuted) {
          audio.play();
          gsap.to(audio, { volume: MAX_VOLUME, duration: 2 });
        }
      }
    };

    document.addEventListener('visibilitychange', handleVisibility);
    return () => document.removeEventListener('visibilitychange', handleVisibility);
  }, []);

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (!isMuted) {
      // Fade Out to Mute
      gsap.to(audio, { 
        volume: 0, 
        duration: 0.8, 
        onComplete: () => {
          audio.muted = true;
          setIsMuted(true);
        } 
      });
    } else {
      // Unmute and Fade In
      audio.muted = false;
      setIsMuted(false);
      gsap.to(audio, { volume: MAX_VOLUME, duration: 1.5 });
    }

    // Text Shuffle Animation for the label
    if (labelRef.current) {
      gsap.fromTo(labelRef.current, 
        { opacity: 0, y: 5 }, 
        { opacity: 1, y: 0, duration: 0.4 }
      );
    }
  };

  return (
    <div className="fixed bottom-10 left-10 z-[100] flex items-center gap-5">
      <button 
        onClick={toggleMute}
        className="group relative flex items-center justify-center w-12 h-12 bg-black/40 border border-white/5 rounded-full backdrop-blur-xl hover:border-orange-500/50 transition-all duration-500"
        aria-label={isMuted ? "Unmute" : "Mute"}
      >
        <div className={`absolute inset-0 rounded-full bg-orange-500/5 scale-0 group-hover:scale-100 transition-transform duration-700`} />
        {isMuted ? (
          <VolumeX size={18} className="text-zinc-500 group-hover:text-orange-500" />
        ) : (
          <Volume2 size={18} className="text-orange-500 animate-pulse" />
        )}
      </button>

      <div className="flex flex-col">
        <div className="flex gap-[2px] h-3 items-end mb-1">
          {[...Array(6)].map((_, i) => (
            <div 
              key={i} 
              className={`w-[2px] bg-orange-500/40 transition-all duration-500 ${!isMuted ? 'animate-music-bar' : 'h-[2px]'}`}
              style={{ 
                animationDelay: `${i * 0.15}s`,
                height: !isMuted ? '100%' : '2px',
                opacity: !isMuted ? 0.8 : 0.2
              }}
            />
          ))}
        </div>
        <p 
          ref={labelRef}
          className="text-[9px] font-inter tracking-[0.4em] uppercase text-zinc-500 pointer-events-none select-none"
        >
          {isMuted ? 'Chronicle Muted' : 'The Long Trail'}
        </p>
      </div>
      
      <audio 
        ref={audioRef} 
        loop 
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3" 
      />

      <style>{`
        @keyframes music-bar {
          0%, 100% { height: 2px; }
          50% { height: 12px; }
        }
        .animate-music-bar {
          animation: music-bar 1.2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};
