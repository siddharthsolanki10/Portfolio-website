
import React, { useEffect, useRef } from 'react';
// Changed from named import to default import for gsap
import gsap from 'gsap';

export const LastRide: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=80%", // Reduced from 100% to eliminate excessive scroll
        pin: true,
        scrub: 1,
      }
    });

    // Color grading shift from Warm to Cold
    tl.to(overlayRef.current, {
      backgroundColor: "rgba(10, 15, 30, 0.8)", // Cold deep blue
      duration: 2
    })
    .to(".sunset-gradient", {
      opacity: 0,
      duration: 2
    }, 0);

    const lines = gsap.utils.toArray('.final-story-line');
    lines.forEach((line: any, i) => {
      tl.fromTo(line, 
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1 },
        i * 1.5 + 0.5
      ).to(line, { opacity: 0, y: -20, duration: 1 }, "+=1");
    });

    // Silhouette riding into distance
    tl.to(".rider-final", {
      scale: 0.4,
      opacity: 0.05,
      y: -50,
      duration: 5
    }, 0);

  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen bg-[#1a0f0a] overflow-hidden py-24">
      {/* Background gradients */}
      <div className="sunset-gradient absolute inset-0 bg-gradient-to-b from-orange-900/40 via-transparent to-transparent"></div>
      <div ref={overlayRef} className="absolute inset-0 bg-black/40 pointer-events-none transition-colors duration-1000"></div>
      
      <div className="container mx-auto px-8 relative z-20 min-h-screen flex items-center justify-center">
        <div className="max-w-2xl text-center w-full">
          <div className="final-story-line flex items-center justify-center opacity-0 px-8 py-16">
            <p className="text-2xl md:text-4xl italic text-zinc-100 font-serif leading-relaxed">
              "I wasn't perfect.<br/>But I built with honesty."
            </p>
          </div>

          <div className="final-story-line flex items-center justify-center opacity-0 px-8 py-16">
            <p className="text-2xl md:text-4xl italic text-zinc-100 font-serif leading-relaxed">
              "Every line of code.<br/>Every design.<br/>Earned the right way."
            </p>
          </div>

          <div className="final-story-line flex flex-col items-center justify-center opacity-0 px-8 py-16">
            <h2 className="text-4xl md:text-7xl font-cinzel text-white uppercase tracking-[0.2em] mb-6">
              This is my last ride.
            </h2>
            <p className="text-orange-500 font-inter text-sm tracking-[0.6em] uppercase">
              But not the end.
            </p>
          </div>
        </div>
      </div>

      <div className="rider-final absolute bottom-[10%] left-1/2 -translate-x-1/2 w-full max-w-2xl opacity-20 pointer-events-none transition-all">
        <img 
          src="https://www.transparentpng.com/download/cowboy/silhouette-riding-horse-cowboy-transparent-png-3.png" 
          alt="Distant Rider"
          className="silhouette w-full transform scale-x-[-1]"
        />
      </div>

      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-30"></div>
    </section>
  );
};
