
import React from 'react';

export const CampfireFinal: React.FC = () => {
  return (
    <section className="min-h-[80vh] bg-black flex flex-col items-center justify-center relative px-8 py-16">
      {/* Campfire Visual */}
      <div className="relative mb-12">
        <div className="w-16 h-16 bg-orange-600 rounded-full blur-[40px] animate-pulse"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-12 bg-gradient-to-t from-orange-600 to-transparent blur-[5px] animate-bounce"></div>
        <div className="flex gap-2 mt-4 justify-center">
          <div className="w-12 h-2 bg-zinc-800 rounded-full rotate-[15deg]"></div>
          <div className="w-12 h-2 bg-zinc-800 rounded-full -rotate-[15deg]"></div>
        </div>
      </div>

      <div className="max-w-3xl text-center z-10">
        <p className="text-orange-500 font-inter text-[10px] tracking-[0.6em] uppercase mb-4">Ahmedabad • Gujarat</p>
        <h2 className="text-2xl md:text-4xl italic text-zinc-100 mb-8 font-serif leading-relaxed">
          "If you ride with honor, we’ll build something legendary."
        </h2>
        
        <div className="h-[1px] w-12 bg-zinc-800 mx-auto mb-16"></div>

        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <a href="mailto:solankisiddharth059@gmail.com" className="px-10 py-4 bg-orange-600 text-black font-cinzel tracking-widest hover:bg-orange-500 transition-colors duration-500">
            HIRE ME
          </a>
          <a href="https://linkedin.com/in/siddharth-solanki-225439325" target="_blank" rel="noopener noreferrer" className="px-10 py-4 border border-zinc-700 text-white font-cinzel tracking-widest hover:border-white transition-colors duration-500">
            LINKEDIN
          </a>
          <a href="https://github.com/mrsiddharthsolanki" target="_blank" rel="noopener noreferrer" className="px-10 py-4 border border-zinc-700 text-white font-cinzel tracking-widest hover:border-white transition-colors duration-500">
            GITHUB
          </a>
        </div>
      </div>

      <div className="mt-16 flex gap-12 text-zinc-600 font-inter text-[10px] tracking-[0.4em] uppercase">
        <div className="text-zinc-500">🟢 Available for Opportunities</div>
      </div>

      {/* Subtle fire embers */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(25)].map((_, i) => (
          <div 
            key={i}
            className="absolute bg-orange-500 rounded-full blur-[1px]"
            style={{
              width: Math.random() * 3 + 'px',
              height: Math.random() * 3 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              opacity: Math.random() * 0.4,
              animation: `float ${Math.random() * 8 + 6}s infinite linear`
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes float {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          10% { opacity: 0.4; }
          90% { opacity: 0.4; }
          100% { transform: translateY(-100vh) translateX(${Math.random() * 120 - 60}px); opacity: 0; }
        }
      `}</style>
    </section>
  );
};
