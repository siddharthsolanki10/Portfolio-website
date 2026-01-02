
import React, { useEffect, useRef } from 'react';
// Changed from named import to default import for gsap
import gsap from 'gsap';

export const CharacterStory: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const lines = gsap.utils.toArray<HTMLElement>('.story-line');
    
    lines.forEach((line) => {
      gsap.fromTo(line, 
        { opacity: 0, y: 30 },
        { 
          opacity: 1, y: 0,
          scrollTrigger: {
            trigger: line,
            start: "top 80%",
            end: "top 40%",
            scrub: true,
          }
        }
      );
    });

    // Silhouette parallax
    gsap.to('.rider-silhouette', {
      x: 100,
      scale: 1.05,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1
      }
    });
  }, []);

  return (
    <section ref={sectionRef} className="relative py-32 md:py-64 bg-zinc-950 overflow-hidden">
      <div className="container mx-auto px-8 relative z-10 flex flex-col items-center text-center">
        
        <div className="story-line mb-8">
          <h2 className="text-zinc-500 font-inter text-xs tracking-[0.5em] uppercase mb-4">Ahmedabad, Gujarat</h2>
          <h1 className="text-5xl md:text-8xl font-cinzel text-white tracking-widest mb-4">SIDDHARTH SOLANKI</h1>
          <p className="text-orange-500 font-inter text-sm tracking-[0.3em] uppercase">MERN Stack Developer • Frontend Specialist</p>
        </div>

        <div className="w-16 h-[1px] bg-zinc-800 my-16"></div>
        
        <div className="story-line mb-16 max-w-xl">
          <p className="text-2xl md:text-3xl italic text-zinc-300 font-serif">"Not born with privilege. Built through failure."</p>
        </div>
        
        <div className="story-line mb-16 max-w-xl">
          <p className="text-2xl md:text-3xl italic text-zinc-300 font-serif">"Shaped by persistence in the quiet hours of the night."</p>
        </div>

        <div className="story-line mb-8">
          <h3 className="text-4xl md:text-6xl font-cinzel text-white uppercase tracking-widest">
            Every Skill Earned.
          </h3>
        </div>

        <div className="story-line mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-zinc-500 font-inter tracking-[0.2em] text-[10px] uppercase">
          <div>20+ Projects</div>
          <div>2+ Years Learning</div>
          <div>B.Tech Computer Eng.</div>
          <div>Infinite Passion</div>
        </div>
      </div>

      <div className="rider-silhouette absolute bottom-0 right-0 opacity-10 pointer-events-none w-1/2 md:w-1/3">
         <img 
          src="https://www.transparentpng.com/download/cowboy/silhouette-riding-horse-cowboy-transparent-png-3.png" 
          alt="Rider Silhouette"
          className="silhouette w-full"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-zinc-950"></div>
    </section>
  );
};
