import React, { useEffect, useRef } from "react";
// Changed from named import to default import for gsap
import gsap from "gsap";

export const Chronicles: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const panels = gsap.utils.toArray<HTMLElement>(".chronicle-panel");

    panels.forEach((panel) => {
      gsap.fromTo(
        panel,
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          scrollTrigger: {
            trigger: panel,
            start: "top 70%",
            end: "top 30%",
            scrub: true,
          },
        },
      );
    });
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-black">
      <div className="container mx-auto px-8 max-w-4xl">
        <div className="mb-16 text-center">
          <h2 className="text-zinc-600 font-inter text-xs tracking-[0.5em] uppercase mb-4">
            The Chronicles
          </h2>
          <h3 className="text-4xl font-cinzel text-white tracking-widest">
            Paths Traveled
          </h3>
        </div>

        <div className="space-y-20">
          {/* Experience */}
          <div className="chronicle-panel border-l border-orange-500/20 pl-8 md:pl-16">
            <span className="text-orange-500 font-inter text-[10px] tracking-[0.4em] uppercase">
              The Apprenticeship
            </span>
            <h4 className="text-2xl font-cinzel text-white mt-2 mb-4">
              BACKEND DEVELOPER INTERN
            </h4>
            <p className="text-zinc-500 font-inter text-xs tracking-widest mb-6">
              DEVSTREE IT SERVICES • AHMEDABAD • AUGUST 2025 - PRESENT
            </p>
            <ul className="space-y-4 text-zinc-400 font-serif italic text-lg leading-relaxed">
              <li>
                "Developing and maintaining REST APIs using Node.js, Express,
                and NestJS."
              </li>
              <li>
                "Designing and managing databases using MongoDB and SQL with
                expertise in containerization and Docker."
              </li>
              <li>
                "Implementing authentication and authorization using JWT and
                role-based access control."
              </li>
              <li>
                "Working with Grafana for monitoring, logging, and observability
                in production environments."
              </li>
            </ul>
          </div>

          {/* Education */}
          <div className="chronicle-panel border-l border-zinc-800 pl-8 md:pl-16">
            <span className="text-zinc-600 font-inter text-[10px] tracking-[0.4em] uppercase">
              The Foundation
            </span>
            <h4 className="text-2xl font-cinzel text-white mt-2 mb-4">
              B.TECH IN COMPUTER ENGINEERING
            </h4>
            <p className="text-zinc-500 font-inter text-xs tracking-widest mb-6">
              SILVER OAK UNIVERSITY • AUGUST 2023 – AUGUST 2027
            </p>
            <p className="text-zinc-400 font-serif italic text-lg leading-relaxed">
              "A journey into the core of logic and system architecture.
              Building scalable backend systems and learning production-level
              system design principles."
            </p>
          </div>

          <div className="chronicle-panel border-l border-zinc-900 pl-8 md:pl-16">
            <span className="text-zinc-800 font-inter text-[10px] tracking-[0.4em] uppercase">
              Previous Camps
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-4">
              <div>
                <h5 className="text-zinc-300 font-cinzel text-lg mb-2">
                  HSC (XII - PCM)
                </h5>
                <p className="text-zinc-600 text-xs font-inter tracking-widest">
                  PULKIT MADHYAMIK SHALA • JUNAGADH
                </p>
              </div>
              <div>
                <h5 className="text-zinc-300 font-cinzel text-lg mb-2">
                  SSC (X)
                </h5>
                <p className="text-zinc-600 text-xs font-inter tracking-widest">
                  MANAS SCHOOL • JUNAGADH
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
