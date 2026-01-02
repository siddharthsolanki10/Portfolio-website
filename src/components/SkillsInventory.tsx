
import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { Target, Zap, Shield, GitBranch, Layout, CodepenIcon, Database, Cpu } from 'lucide-react';

const skills = [
  { name: 'React.js', symbol: 'The Revolver', icon: <Zap size={48} />, desc: '88% Mastery. Fast, modular, and deadly accurate on the frontend.' },
  { name: 'JavaScript', symbol: 'The Rifle', icon: <Target size={48} />, desc: '90% Mastery. The weapon I trust when logic gets rough.' },
  { name: 'Tailwind CSS', symbol: 'The Armor', icon: <Shield size={48} />, desc: '92% Mastery. Protecting the UI with precision and style.' },
  { name: 'Node / Express', symbol: 'The Engine', icon: <Cpu size={48} />, desc: 'Forging the backbone of powerful applications.' },
  { name: 'MongoDB', symbol: 'The Vault', icon: <Database size={48} />, desc: 'Securely housing the data that matters.' },
  { name: 'Figma', symbol: 'The Blueprint', icon: <Layout size={48} />, desc: '82% Mastery. Visualizing the frontier before it is built.' },
  { name: 'Framer Motion', symbol: 'The Spurs', icon: <CodepenIcon size={48} />, desc: 'Adding the kick and momentum to every interaction.' },
  { name: 'Git & GitHub', symbol: 'The Trail', icon: <GitBranch size={48} />, desc: '85% Mastery. Tracking every step of the long road.' },
];

export const SkillsInventory: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    // We use a small timeout to ensure the DOM is painted and widths are accurate
    const timer = setTimeout(() => {
      let ctx = gsap.context(() => {
        if (!scrollRef.current || !containerRef.current) return;

        const scrollWidth = scrollRef.current.scrollWidth;
        const windowWidth = window.innerWidth;
        const amountToScroll = scrollWidth - windowWidth;

        // Master Timeline for this section
        const masterTl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            pin: true,
            start: "top top",
            // Reduced scroll distance for less space
            end: () => `+=${amountToScroll + 300}`,
            scrub: 1,
            invalidateOnRefresh: true,
            anticipatePin: 1,
          },
        });

        // 1. First, reveal the cards as we pin
        masterTl.fromTo(".skill-card", 
          { 
            y: 100, 
            rotationX: -20, 
            opacity: 0 
          }, 
          { 
            y: 0, 
            rotationX: 0, 
            opacity: 1, 
            stagger: 0.1, 
            duration: 0.5, 
            ease: "power2.out" 
          }
        );

        // 2. Then, scroll them horizontally
        masterTl.to(scrollRef.current, {
          x: -amountToScroll,
          ease: "none",
          duration: 2, // Relative duration in the scrub timeline
        }, "-=0.2"); // Start slighty before reveal ends for cinematic flow

      }, containerRef);

      return () => ctx.revert();
    }, 50); // Short delay to prevent 0-width calculations

    return () => clearTimeout(timer);
  }, []);

  return (
    <section 
      ref={containerRef} 
      className="h-screen bg-[#0a0a0c] overflow-hidden flex flex-col justify-center relative z-20"
      style={{ isolation: 'isolate' }}
    >
      <div className="px-12 mb-8 z-30">
        <h2 className="text-zinc-600 font-inter text-xs tracking-[0.5em] uppercase mb-2">Inventory</h2>
        <h3 className="text-3xl md:text-5xl font-cinzel text-white tracking-widest">Tools of the Trade</h3>
      </div>
      
      <div className="perspective-1000 w-full">
        <div 
          ref={scrollRef} 
          className="flex gap-12 px-12 items-center w-max py-10"
        >
          {skills.map((skill, i) => (
            <div 
              key={i} 
              className="skill-card min-w-[320px] md:min-w-[420px] aspect-[4/5] bg-zinc-900/30 border border-zinc-800 p-12 flex flex-col items-center justify-center text-center group transition-all duration-500 backdrop-blur-sm relative overflow-hidden hover:border-orange-500/30"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="text-orange-500/20 group-hover:text-orange-500 transition-all duration-700 mb-10 transform group-hover:scale-110 group-hover:rotate-3">
                {skill.icon}
              </div>
              
              <div className="relative z-10">
                <h4 className="text-zinc-500 font-inter text-[10px] tracking-[0.4em] uppercase mb-2">
                  {skill.symbol}
                </h4>
                <h5 className="text-2xl md:text-3xl font-cinzel text-white mb-6 tracking-wide">
                  {skill.name}
                </h5>
                <p className="text-zinc-400 italic font-serif leading-relaxed text-base opacity-80">
                  "{skill.desc}"
                </p>
              </div>

              <div className="absolute top-0 -left-full w-1/2 h-full bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-[-25deg] group-hover:left-[150%] transition-all duration-1000" />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .perspective-1000 { 
          perspective: 1000px; 
          transform-style: preserve-3d;
        }
      `}</style>
    </section>
  );
};
