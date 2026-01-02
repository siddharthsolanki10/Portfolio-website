
import React, { useEffect, useRef, useState } from 'react';
// Changed from named import to default import for gsap
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { IntroScene } from './components/IntroScene';
import { CharacterStory } from './components/CharacterStory';
import { Chronicles } from './components/Chronicles';
import { SkillsInventory } from './components/SkillsInventory';
import { ProjectMissions } from './components/ProjectMissions';
import { SymbolicCinematic } from './components/SymbolicCinematic';
import { LastRide } from './components/LastRide';
import { CampfireFinal } from './components/CampfireFinal';
import { AudioPlayer } from './components/AudioPlayer';
import { ProductionGrounds } from './components/ProductionGrounds';
import SEO from './SEO';

gsap.registerPlugin(ScrollTrigger);

const App: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    if (!isStarted) return;

    // Refresh triggers after a short delay to ensure layout is settled
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [isStarted]);

  if (!isStarted) {
    return (
      <div className="h-screen w-screen flex flex-col items-center justify-center bg-[#0a0a0c] text-white p-8">
        <h1 className="text-4xl md:text-6xl font-cinzel mb-8 tracking-[0.4em] text-center">THE LONG ROAD</h1>
        <p className="text-orange-500/60 font-inter text-[10px] tracking-[0.5em] mb-12 uppercase">A Tale of Siddharth Solanki</p>
        <button 
          onClick={() => setIsStarted(true)}
          className="px-12 py-4 border border-zinc-700 hover:border-orange-500 hover:text-orange-500 transition-all duration-700 font-cinzel tracking-[0.3em] text-sm group relative overflow-hidden"
        >
          <span className="relative z-10">START JOURNEY</span>
          <div className="absolute inset-0 bg-orange-500/5 translate-y-full group-hover:translate-y-0 transition-transform duration-700"></div>
        </button>
        <p className="mt-8 text-zinc-600 font-inter text-[10px] tracking-[0.2em] uppercase">Experience with Sound Recommended</p>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="film-grain bg-[#0a0a0c] min-h-screen">
      <SEO />
      <AudioPlayer />
      <div className="fog-overlay" />
      
      <main className="relative">
        <IntroScene />
        <CharacterStory />
        <Chronicles />
        <ProductionGrounds />
        <SkillsInventory />
        <ProjectMissions />
        <SymbolicCinematic />
        <LastRide />
        <CampfireFinal />
      </main>

      <footer className="h-24 flex flex-col items-center justify-center bg-black border-t border-zinc-900 text-zinc-600 font-inter text-[9px] tracking-[0.3em] uppercase relative z-50">
        <p>© 2024 Siddharth Solanki • Ahmedabad</p>
        <p className="mt-2 text-zinc-800">Built with Honor and Persistence</p>
      </footer>
    </div>
  );
};

export default App;
