"use client";

import { useEffect, useState, useRef } from "react";

const integrations = [
  { name: "GitHub", category: "Version Control", logo: "github" },
  { name: "Slack", category: "Communication", logo: "slack" },
  { name: "Stripe", category: "Payments", logo: "stripe" },
  { name: "PostgreSQL", category: "Database", logo: "postgresql" },
  { name: "Redis", category: "Cache", logo: "redis" },
  { name: "AWS", category: "Cloud", logo: "aws" },
  { name: "MongoDB", category: "Database", logo: "mongodb" },
  { name: "Vercel", category: "Hosting", logo: "vercel" },
  { name: "Figma", category: "Design", logo: "figma" },
  { name: "Linear", category: "Project Management", logo: "linear" },
  { name: "Notion", category: "Documentation", logo: "notion" },
  { name: "OpenAI", category: "AI/ML", logo: "openai" },
];

export function IntegrationsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="integrations" ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-16 lg:mb-24 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
            <span className="w-8 h-px bg-foreground/30" />
            Integrations
            <span className="w-8 h-px bg-foreground/30" />
          </span>
          <h2 className="text-4xl lg:text-6xl font-display tracking-tight mb-6">
            Works with everything
            <br />
            you already use.
          </h2>
          <p className="text-xl text-muted-foreground">
            200+ pre-built integrations. Connect your entire stack in minutes.
          </p>
        </div>

      </div>
      
      {/* Full-width marquees outside container */}
      <div className="w-full mb-6">
        <div className="flex gap-6 marquee">
          {[...Array(2)].map((_, setIndex) => (
            <div key={setIndex} className="flex gap-6 shrink-0">
              {integrations.map((integration) => (
                <div
                  key={`${integration.name}-${setIndex}`}
                  className="shrink-0 px-8 py-6 border border-foreground/10 hover:border-foreground/30 hover:bg-foreground/[0.02] transition-all duration-300 group"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <img
                      src={`https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/${integration.logo}/light.svg`}
                      alt=""
                      aria-hidden="true"
                      className="size-7 object-contain"
                    />
                    <div className="text-lg font-medium group-hover:translate-x-1 transition-transform">
                      {integration.name}
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground">{integration.category}</div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      
      {/* Reverse marquee */}
      <div className="w-full">
        <div className="flex gap-6 marquee-reverse">
          {[...Array(2)].map((_, setIndex) => (
            <div key={setIndex} className="flex gap-6 shrink-0">
              {[...integrations].reverse().map((integration) => (
                <div
                  key={`${integration.name}-reverse-${setIndex}`}
                  className="shrink-0 px-8 py-6 border border-foreground/10 hover:border-foreground/30 hover:bg-foreground/[0.02] transition-all duration-300 group"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <img
                      src={`https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/${integration.logo}/light.svg`}
                      alt=""
                      aria-hidden="true"
                      className="size-7 object-contain"
                    />
                    <div className="text-lg font-medium group-hover:translate-x-1 transition-transform">
                      {integration.name}
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground">{integration.category}</div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
