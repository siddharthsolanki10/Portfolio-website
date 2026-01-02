
import React, { useLayoutEffect, useRef } from 'react';
// Changed from named import to default import for gsap
import gsap from 'gsap';

export const SymbolicCinematic: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=200%", // Reduced from 300% to keep transitions tighter
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        }
      });

      // Rapid but meaningful transitions
      tl.fromTo(".step-learning", { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 1 })
        .to(".step-learning", { opacity: 0, y: -30, duration: 1 }, "+=0.5")

      .fromTo(".step-focus", { opacity: 0, scale: 1.1 }, { opacity: 1, scale: 1, duration: 1 })
      .to(".step-focus", { opacity: 0, duration: 1 }, "+=0.5")

      .fromTo(".step-struggles", { opacity: 0 }, { opacity: 1, duration: 1 })
      .to(".step-struggles", { opacity: 0, duration: 1 }, "+=0.5")

      .fromTo(".step-discipline", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1 })
      .to(".final-action-text", { opacity: 1, y: 0, duration: 1 }, "-=0.2");

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="h-screen bg-black flex items-center justify-center overflow-hidden relative border-y border-zinc-900/50">
      <div className="z-10 w-full max-w-lg text-center px-8 relative h-64">
        
        <div className="step-learning absolute inset-0 flex flex-col items-center justify-center opacity-0">
          <div className="icon mb-6 w-12 h-16 border-2 border-orange-500 rounded-sm relative shadow-[0_0_20px_rgba(255,77,0,0.2)]">
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-4 h-1 bg-orange-500"></div>
            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-4 h-1 bg-orange-500"></div>
          </div>
          <p className="text-zinc-500 font-inter text-[10px] tracking-[0.5em] uppercase mb-2">LOADING THE PATH</p>
          <h4 className="text-3xl md:text-4xl font-cinzel text-white tracking-widest">LEARNING</h4>
        </div>

        <div className="step-focus absolute inset-0 flex flex-col items-center justify-center opacity-0">
          <div className="crosshair w-24 h-24 border border-zinc-800 rounded-full flex items-center justify-center mb-6 relative">
            <div className="w-1 h-8 bg-zinc-800 absolute"></div>
            <div className="w-8 h-1 bg-zinc-800 absolute"></div>
            <div className="w-2 h-2 bg-orange-500 rounded-full shadow-[0_0_15px_#ff4d00]"></div>
          </div>
          <p className="text-zinc-500 font-inter text-[10px] tracking-[0.5em] uppercase mb-2">STEADYING THE EYE</p>
          <h4 className="text-3xl md:text-4xl font-cinzel text-white tracking-widest">FOCUS</h4>
        </div>

        <div className="step-struggles absolute inset-0 flex flex-col items-center justify-center opacity-0">
          <p className="text-zinc-500 font-inter text-[10px] tracking-[0.5em] uppercase mb-2">THROUGH THE DUST</p>
          <h4 className="text-3xl md:text-4xl font-cinzel text-white tracking-widest">STRUGGLES</h4>
        </div>

        <div className="step-discipline absolute inset-0 flex flex-col items-center justify-center opacity-0">
          <div className="w-48 h-[2px] bg-zinc-900 mb-6 overflow-hidden">
            <div className="bar w-full h-full bg-orange-500 shadow-[0_0_10px_#ff4d00]"></div>
          </div>
          <p className="text-zinc-500 font-inter text-[10px] tracking-[0.5em] uppercase mb-2">HOLSTERING THE WILL</p>
          <h4 className="text-3xl md:text-4xl font-cinzel text-white tracking-widest">DISCIPLINE</h4>
        </div>

      </div>

      <div className="final-action-text absolute bottom-24 opacity-0 transform translate-y-10 text-center px-6">
        <h3 className="text-xl md:text-3xl font-cinzel text-zinc-400 italic tracking-wide">
          "The long road is the only one worth riding."
        </h3>
      </div>
    </section>
  );
};
