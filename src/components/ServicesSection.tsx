import React, { useState } from 'react';
import { UserCheck, Users2, GraduationCap, Compass, ArrowUpRight, Check, Sparkles } from 'lucide-react';
import { TiltCard } from './InteractiveEffects';

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const services = [
    {
      id: 1,
      title: 'Recruitment Services',
      subtitle: 'Permanent & Executive Hiring',
      description: 'End-to-end hiring solutions for companies across industries. We identify, screen, and deliver verified candidates aligned with your business culture.',
      icon: UserCheck,
      accentColor: 'text-blue-600 bg-blue-50 border-blue-200',
      tag: 'Corporate Hiring',
      features: [
        'End-to-end candidate screening & validation',
        'Industry-tailored talent sourcing across India',
        'Accelerated turnaround times for critical roles',
        'Executive search & leadership placements'
      ],
      actionText: 'Hire for this Service',
    },
    {
      id: 2,
      title: 'Staffing Solutions',
      subtitle: 'Flexible & Reliable Manpower',
      description: 'Flexible and reliable manpower support for businesses. Scale your project workforce up or down seamlessly with compliant temporary and contract personnel.',
      icon: Users2,
      accentColor: 'text-emerald-600 bg-emerald-50 border-emerald-200',
      tag: 'Workforce Agility',
      features: [
        'Contractual and project-based staffing',
        'Payroll administration & statutory compliance',
        'On-demand workforce ramp-ups across Maharashtra',
        'Pre-vetted operational & technical associates'
      ],
      actionText: 'Request Staffing',
    },
    {
      id: 3,
      title: 'Training & Development',
      subtitle: 'Soft Skills & Interview Readiness',
      description: 'Soft skills and career training for job aspirants. We bridge the critical gap between academic education and corporate workplace expectations.',
      icon: GraduationCap,
      accentColor: 'text-amber-600 bg-amber-50 border-amber-200',
      tag: 'Skills Empowerment',
      features: [
        'Business communication & workplace etiquette',
        'Comprehensive mock interviews & feedback',
        'Confidence building & vocal presentation skills',
        'Corporate induction training cohorts'
      ],
      actionText: 'Explore Training Modules',
    },
    {
      id: 4,
      title: 'Career Guidance',
      subtitle: 'Strategic Mentorship & Direction',
      description: 'Helping individuals build successful career paths. Strategic counseling to unlock career potential, identify market strengths, and target ideal roles.',
      icon: Compass,
      accentColor: 'text-teal-600 bg-teal-50 border-teal-200',
      tag: 'Personal Mentorship',
      features: [
        'Professional resume & LinkedIn optimization',
        'Skill-gap analysis and targeted upskilling roadmaps',
        'Direct connection to verified job openings',
        'Ongoing mentorship for career transitions'
      ],
      actionText: 'Get Career Advice',
    },
  ];

  return (
    <section id="recruitment" className="py-20 bg-white border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-bold tracking-[0.2em] text-emerald-700 uppercase mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-600" />
            <span>WHAT WE DELIVER</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Specialized Manpower & Career Solutions
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Headquartered in Nagpur with pan-India execution, THE MENTOR bridges the gap between ambitious corporate enterprises and prepared, skilled professionals.
          </p>
        </div>

        {/* 4 Premium Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isHovered = activeCard === index;

            return (
              <TiltCard
                key={service.id}
                maxTilt={5}
                className="group flex flex-col justify-between bg-slate-50/70 hover:bg-white border border-slate-200/90 hover:border-emerald-300 rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div>
                  {/* Top Icon & Tag */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`p-3 rounded-xl border ${service.accentColor} transition-transform duration-300 group-hover:scale-110 shadow-xs`}>
                      <Icon className="w-6 h-6 stroke-[1.8]" />
                    </div>
                    <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Card Title & Subtitle */}
                  <h3 className="text-xl font-bold text-slate-900 tracking-tight group-hover:text-emerald-800 transition-colors mb-1">
                    {service.title}
                  </h3>
                  <div className="text-xs font-medium text-emerald-700 mb-3">
                    {service.subtitle}
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Key Features List */}
                  <div className="space-y-2.5 pt-4 border-t border-slate-200/70 mb-6">
                    {service.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-700">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Interactive Action Button */}
                <button
                  onClick={() => onSelectService(service.title)}
                  className="w-full mt-2 inline-flex items-center justify-between px-4 py-2.5 text-xs font-semibold text-slate-800 bg-white group-hover:bg-emerald-700 group-hover:text-white border border-slate-200 group-hover:border-emerald-700 rounded-xl transition-all duration-200 shadow-xs"
                >
                  <span>{service.actionText}</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </TiltCard>
            );
          })}
        </div>

        {/* Adjacency Trust Strip */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center shrink-0">
              <Sparkles className="w-6 h-6 text-emerald-400" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">Need a Customized Hiring or Corporate Training Plan?</h4>
              <p className="text-xs sm:text-sm text-slate-300">
                Talk directly with our recruitment consultants in Nagpur for customized candidate sourcing.
              </p>
            </div>
          </div>
          <button
            onClick={() => onSelectService('Recruitment Services')}
            className="shrink-0 px-5 py-2.5 text-xs sm:text-sm font-semibold text-slate-900 bg-white hover:bg-emerald-400 rounded-xl transition-colors shadow-sm"
          >
            Consult Our Team
          </button>
        </div>

      </div>
    </section>
  );
};
