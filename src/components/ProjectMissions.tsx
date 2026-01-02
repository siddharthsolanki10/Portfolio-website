
import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { CheckCircle2, Clock, Target, ExternalLink } from 'lucide-react';

const missions = [
  {
    id: '01',
    title: 'Kidolio',
    subtitle: 'Child management platform built for BOLT Hackathon.',
    status: 'MISSION COMPLETED (LIVE)',
    type: 'completed-live',
    image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: '02',
    title: 'Appwrite Blog Platform',
    subtitle: 'Full-featured blogging with auth and image uploads.',
    status: 'MISSION COMPLETED (LIVE)',
    type: 'completed-live',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: '03',
    title: 'Twitter Clone',
    subtitle: 'Real-time social engagement and bookmarking.',
    status: 'MISSION COMPLETED',
    type: 'completed',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: '04',
    title: 'SwiftCart',
    subtitle: 'A modern, high-speed e-commerce frontier.',
    status: 'MISSION COMPLETED',
    type: 'completed',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: '05',
    title: 'YouTube Clone',
    subtitle: 'Scaling the heights of full-stack video platforms.',
    status: 'CHALLENGE ACCEPTED',
    type: 'progress',
    image: 'https://images.unsplash.com/photo-1533750516457-a7f992034fec?q=80&w=1200&auto=format&fit=crop'
  }
];

export const ProjectMissions: React.FC = () => {
  return (
    <section className="bg-[#0a0a0c] py-64 overflow-hidden relative">
      <div className="container mx-auto px-8 relative z-10">
        <div className="text-center mb-48">
          <p className="text-orange-500 font-inter text-[10px] tracking-[0.8em] uppercase mb-4 opacity-60">The Portfolio</p>
          <h2 className="text-white font-cinzel text-5xl md:text-7xl mb-4 tracking-[0.2em]">MISSIONS</h2>
          <div className="w-48 h-[1px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent mx-auto"></div>
        </div>

        <div className="space-y-[40vh]">
          {missions.map((mission, idx) => (
            <MissionItem key={idx} mission={mission} index={idx} />
          ))}
        </div>
      </div>
      
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(20,20,25,1),transparent)] pointer-events-none"></div>
    </section>
  );
};

const MissionItem: React.FC<{ mission: any; index: number }> = ({ mission, index }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          end: "bottom 15%",
          toggleActions: "play none none reverse",
        }
      });

      tl.fromTo(".mission-shutter", 
        { scaleY: 1 },
        { scaleY: 0, duration: 1.2, ease: "power4.inOut", transformOrigin: "top" }
      )
      .fromTo(".mission-image",
        { scale: 1.3, filter: 'blur(20px) brightness(0.2)' },
        { scale: 1, filter: 'blur(0px) brightness(0.8)', duration: 1.8, ease: "power2.out" },
        0.2
      )
      .fromTo(".mission-text-reveal",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power2.out", stagger: 0.1 },
        0.5
      );
    }, containerRef);

    return () => ctx.revert();
  }, [index]);

  const getStatusColor = () => {
    if (mission.type === 'completed-live') return 'text-green-500 border-green-500/20 bg-green-500/5';
    if (mission.type === 'completed') return 'text-amber-400 border-amber-400/20 bg-amber-400/5';
    return 'text-orange-500 border-orange-500/20 bg-orange-500/5';
  };

  const getStatusIcon = () => {
    if (mission.type.includes('completed')) return <CheckCircle2 size={14} />;
    if (mission.type === 'progress') return <Target size={14} className="animate-spin-slow" />;
    return <Clock size={14} />;
  };

  return (
    <div ref={containerRef} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-16 items-center relative group`}>
      {/* Visual Asset */}
      <div className="w-full md:w-3/5 relative overflow-hidden aspect-video border border-zinc-800 shadow-2xl bg-zinc-950">
        <img 
          src={mission.image} 
          alt={mission.title}
          className="mission-image w-full h-full object-cover transition-all duration-1000 grayscale group-hover:grayscale-0 group-hover:brightness-100 opacity-60 group-hover:opacity-100"
        />
        
        <div className="mission-shutter absolute inset-0 bg-zinc-950 z-20"></div>
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
        
        {/* Background "Stamp" text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
          <p className="mission-text-reveal text-white/[0.03] group-hover:text-white/[0.08] font-cinzel text-6xl md:text-9xl tracking-[0.4em] uppercase transition-all duration-1000 group-hover:scale-110">
            {mission.type === 'progress' ? 'TRACKING' : 'MISSION'}
          </p>
        </div>
      </div>
      
      {/* Contextual Narrative */}
      <div className="w-full md:w-2/5 flex flex-col justify-center">
        <div className="mission-text-reveal space-y-6">
          <div className="flex items-center gap-4">
            <span className="w-8 h-[1px] bg-orange-500/50"></span>
            <span className="text-orange-500 font-inter text-[10px] tracking-[0.5em] uppercase">JOURNAL ENTRY {mission.id}</span>
          </div>
          
          <h3 className="text-4xl md:text-6xl font-cinzel text-white uppercase tracking-widest leading-tight group-hover:text-orange-50/90 transition-colors">
            {mission.title}
          </h3>
          
          <p className="text-zinc-400 font-serif italic text-xl md:text-2xl leading-relaxed max-w-lg">
            "{mission.subtitle}"
          </p>
          
          <div className="pt-8 flex flex-wrap gap-4">
            {/* Enhanced Status Badge */}
            <div className={`inline-flex items-center gap-3 px-6 py-3 border backdrop-blur-md transition-all duration-500 group-hover:shadow-[0_0_20px_rgba(0,0,0,0.5)] ${getStatusColor()}`}>
               <div className="relative">
                 <div className={`absolute inset-0 blur-sm opacity-50 ${mission.type.includes('completed') ? 'bg-current' : ''} animate-pulse`}></div>
                 {getStatusIcon()}
               </div>
               <span className="font-inter text-[10px] tracking-[0.3em] font-bold uppercase">
                 {mission.status}
               </span>
            </div>

            {mission.type === 'completed-live' && (
              <button className="flex items-center gap-2 px-6 py-3 border border-zinc-800 text-zinc-500 hover:text-white hover:border-zinc-500 transition-all font-inter text-[10px] tracking-[0.3em] uppercase">
                <ExternalLink size={12} />
                Visit Site
              </button>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </div>
  );
};
