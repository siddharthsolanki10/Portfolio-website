
import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

export const ProductionGrounds: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=200%",
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          onRefresh: (self) => {
            // Force recalculation of pin spacing
            self.refresh();
          }
        }
      });

      const lines = gsap.utils.toArray<HTMLElement>('.prod-line');
      
      // Initialize all lines to be invisible except when being animated
      lines.forEach((line) => {
        gsap.set(line, { opacity: 0 });
      });
      
      lines.forEach((line, i) => {
        // Line Fade In and Up
        tl.fromTo(line, 
          { opacity: 0, y: 40, filter: 'blur(10px)' },
          { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1.5 },
          i * 2 // Start time based on index
        )
        // Line Hold and Fade Out (except for the very last point)
        if (i < lines.length - 1) {
          tl.to(line, { opacity: 0, y: -40, filter: 'blur(10px)', duration: 1.5 }, (i * 2) + 1.8);
        }
      });

      // Background ambient light shift
      tl.to(sectionRef.current, {
        backgroundColor: "#0d0d0f",
        duration: 5
      }, 0);

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="min-h-screen w-full bg-[#0a0a0c] flex items-center justify-center overflow-hidden border-y border-white/[0.02]">
      <div ref={containerRef} className="relative w-full max-w-4xl px-8 text-center py-32 flex items-center justify-center">
        
        <div className="prod-line absolute inset-0 flex flex-col items-center justify-center">
          <p className="text-orange-500 font-inter text-[10px] tracking-[0.6em] uppercase mb-6 opacity-60">Transition</p>
          <h2 className="text-2xl md:text-4xl italic text-zinc-100 font-serif leading-relaxed">
            "The tools were ready.<br/>But tools alone don't survive the frontier."
          </h2>
        </div>

        <div className="prod-line absolute inset-0 flex flex-col items-center justify-center">
          <h2 className="text-2xl md:text-4xl italic text-zinc-100 font-serif leading-relaxed">
            I stepped away from the quiet of my own desk...<br/>
            ...and into the iron noise of <span className="text-white not-italic font-cinzel tracking-widest">DEVSTREE IT SERVICES</span>.
          </h2>
        </div>

        <div className="prod-line absolute inset-0 flex flex-col items-center justify-center">
          <p className="text-zinc-500 font-inter text-[10px] tracking-[0.6em] uppercase mb-6">Backend Internship</p>
          <h2 className="text-2xl md:text-4xl italic text-zinc-100 font-serif leading-relaxed">
            APIs weren’t just endpoints anymore.<br/>
            They were promises of uptime.
          </h2>
        </div>

        <div className="prod-line absolute inset-0 flex flex-col items-center justify-center">
          <h2 className="text-2xl md:text-4xl italic text-zinc-100 font-serif leading-relaxed">
            Databases weren’t just tables.<br/>
            They were the collective trust of a user base.
          </h2>
        </div>

        <div className="prod-line absolute inset-0 flex flex-col items-center justify-center">
          <p className="text-orange-500 font-inter text-[10px] tracking-[0.6em] uppercase mb-6">The Lesson</p>
          <h2 className="text-3xl md:text-5xl font-cinzel text-white tracking-widest uppercase mb-8">
            DISCIPLINE.
          </h2>
          <p className="text-zinc-400 font-serif italic text-xl md:text-2xl">
            "Under the gaze of seniors, I learned that<br/>
            Reliability is the only currency that matters."
          </p>
        </div>

      </div>

      {/* Subtle background element: Scanning light */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
         <div className="absolute top-0 left-[-50%] w-[200%] h-[1px] bg-gradient-to-r from-transparent via-orange-500/20 to-transparent animate-scan" />
      </div>

      <style>{`
        @keyframes scan {
          from { top: 0%; }
          to { top: 100%; }
        }
        .animate-scan {
          animation: scan 10s linear infinite;
        }
      `}</style>
    </section>
  );
};
