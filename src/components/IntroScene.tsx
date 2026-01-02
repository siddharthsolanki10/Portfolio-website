
import React, { useLayoutEffect, useRef } from 'react';
// Changed from named import to default import for gsap
import gsap from 'gsap';

export const IntroScene: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=120%", // Tighter scroll for the first hook
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        }
      });

      tl.to(textRef.current, {
        opacity: 1,
        y: -30,
        duration: 1,
      })
      .to(".scroll-hint", {
        opacity: 1,
        duration: 0.5,
      });

      gsap.to(".bg-image", {
        scale: 1.15,
        filter: "blur(0px)",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      <div className="bg-image absolute inset-0 opacity-40">
        <img 
          src="https://images.unsplash.com/photo-1533154683836-84ea7a0bc310?q=80&w=2000&auto=format&fit=crop" 
          alt="Dusty Frontier"
          className="w-full h-full object-cover blur-[4px]"
        />
      </div>
      
      <div ref={textRef} className="z-10 text-center opacity-0 px-6">
        <p className="text-orange-500 font-inter text-[10px] tracking-[0.8em] uppercase mb-6 opacity-80">ACT I • THE BEGINNING</p>
        <h2 className="text-xl md:text-3xl italic text-zinc-400 mb-6 max-w-3xl mx-auto leading-relaxed font-serif">
          "In a world full of shortcuts…"
        </h2>
        <h1 className="text-4xl md:text-8xl font-cinzel text-white tracking-[0.2em] mb-12 uppercase leading-tight">
          THE LONG ROAD.
        </h1>
        <div className="scroll-hint opacity-0 mt-12 flex flex-col items-center">
          <p className="text-[10px] font-inter tracking-[0.4em] uppercase text-zinc-500 mb-6">↓ Scroll to Ride</p>
          <div className="w-[1px] h-24 bg-gradient-to-b from-orange-500 to-transparent"></div>
        </div>
      </div>
    </section>
  );
};
