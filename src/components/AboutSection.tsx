import React from 'react';
import { Building2, Calendar, MapPin, Users, Award, Shield, CheckCircle2 } from 'lucide-react';
import { TiltCard } from './InteractiveEffects';

export const AboutSection: React.FC = () => {
  const companyFacts = [
    { label: 'Founded', value: '2006', icon: Calendar, note: '18+ years of industry consistency' },
    { label: 'Headquarters', value: 'Nagpur, Maharashtra', icon: MapPin, note: 'North Ambazari Road, Daga Layout' },
    { label: 'Industry', value: 'Staffing & Recruiting', icon: Building2, note: 'Permanent & Contractual Solutions' },
    { label: 'Company Size', value: '11–50 Employees', icon: Users, note: 'Dedicated recruitment consultants' },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-bold tracking-[0.2em] text-emerald-700 uppercase mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-600" />
            <span>ABOUT THE MENTOR</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Committed to Career Advancement & Corporate Staffing
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Established in 2006 in Nagpur, THE MENTOR operates at the intersection of talent discovery, career preparation, and corporate manpower fulfillment across India.
          </p>
        </div>

        {/* 2-Column Split: Narrative & Core Facts */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          
          {/* Narrative Overview */}
          <div className="lg:col-span-7 space-y-6 text-slate-600 leading-relaxed text-sm sm:text-base">
            <p>
              <strong className="text-slate-900 font-semibold">THE MENTOR</strong> is a premier recruitment and training services company founded in 2006. With deep roots in Nagpur, Maharashtra, we have continuously catered to diverse manpower requirements for organizations across the country while actively preparing job aspirants with vital soft skills training.
            </p>
            
            <p>
              Our organizational mission centers on two foundational pillars: empowering candidates through practical, interview-focused communication training, and providing employers with thoroughly pre-screened talent ready to create day-one productivity.
            </p>

            <div className="pt-2">
              <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">
                Core Organizational Strengths
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  '18+ Years Continuous Industry Grounding',
                  'Rigorous Candidate Screening & Verification',
                  'Practical Corporate Soft Skills Training',
                  'Tailored Permanent & Contractual Staffing',
                  'Headquartered in Nagpur with Pan-India Placements',
                  'Transparent, Ethical Recruitment Practices'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Structured Fact Cards Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {companyFacts.map((fact, index) => {
              const Icon = fact.icon;
              return (
                <TiltCard
                  key={index}
                  maxTilt={3}
                  className="p-5 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-xs hover:border-emerald-300 hover:bg-white transition-all duration-200"
                >
                  <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 text-emerald-700 flex items-center justify-center mb-3 shadow-xs">
                    <Icon className="w-4 h-4 stroke-[2]" />
                  </div>
                  <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1">
                    {fact.label}
                  </div>
                  <div className="text-base font-bold text-slate-900 mb-1">
                    {fact.value}
                  </div>
                  <div className="text-xs text-slate-500">
                    {fact.note}
                  </div>
                </TiltCard>
              );
            })}
          </div>

        </div>

        {/* Established Timeline Strip */}
        <div className="p-8 rounded-2xl bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-emerald-950/40 to-transparent pointer-events-none" />
          
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <div className="text-3xl font-extrabold text-white tabular-nums mb-1">2006</div>
              <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-2">Foundation</div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Established in Nagpur to address the regional and national shortage of workplace-ready talent.
              </p>
            </div>

            <div>
              <div className="text-3xl font-extrabold text-white tabular-nums mb-1">Pan-India</div>
              <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-2">Manpower Reach</div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Expanded talent recruitment networks across Maharashtra, Pune, Mumbai, Thane, and central India.
              </p>
            </div>

            <div>
              <div className="text-3xl font-extrabold text-white tabular-nums mb-1">11–50</div>
              <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-2">Core Team</div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Experienced talent recruiters and corporate soft skills trainers dedicated to candidate success.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
