import React, { useState, useRef } from 'react';
import { ArrowRight, MapPin, Building2, Briefcase, Award, MessageSquare } from 'lucide-react';
import { MagneticButton, TiltCard } from './InteractiveEffects';
import { COMPANY_PHONE_DISPLAY, startDirectWhatsAppChat } from '../utils/whatsapp';
import heroTeamImage from '../assets/images/hero_indian_team_1791625627585.jpg';

interface HeroProps {
  onFindJobClick: () => void;
  onHireTalentClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onFindJobClick, onHireTalentClick }) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [mouseCoord, setMouseCoord] = useState({ x: 50, y: 50 });
  const [imgLoaded, setImgLoaded] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMouseCoord({ x, y });
  };

  return (
    <section
      id="home"
      ref={heroRef}
      onMouseMove={handleMouseMove}
      className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50"
    >
      {/* Subtle cursor-following spotlight overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-60 transition-opacity duration-500"
        style={{
          background: `radial-gradient(800px circle at ${mouseCoord.x}% ${mouseCoord.y}%, rgba(16, 185, 129, 0.08), rgba(2, 132, 199, 0.04) 50%, transparent 80%)`,
        }}
      />

      {/* Subtle background ambient grid */}
      <div 
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `linear-gradient(#0F172A 1px, transparent 1px), linear-gradient(to right, #0F172A 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Small label: RECRUITMENT & TRAINING */}
            <div className="flex items-center gap-2 mb-4 text-xs font-bold tracking-[0.2em] text-emerald-700 uppercase">
              <span className="w-2 h-2 rounded-full bg-emerald-600 inline-block" />
              <span>RECRUITMENT & TRAINING</span>
              <span className="text-slate-300 font-light" aria-hidden="true">·</span>
              <span className="text-slate-500 font-medium tracking-normal normal-case">Est. 2006 · Nagpur, Maharashtra</span>
            </div>

            {/* Main Heading: “Your Career, Our Commitment” */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6 text-balance">
              Your Career, <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-emerald-700 via-teal-700 to-slate-900 bg-clip-text text-transparent">
                Our Commitment
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mb-8">
              We are a leading training and recruitment services company. We cater to manpower requirements across the country and impart soft skills training to job aspirants.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              {/* Primary button: “Find a Job” */}
              <MagneticButton
                onClick={onFindJobClick}
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 text-sm font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-200"
              >
                <Briefcase className="w-4 h-4" />
                <span>Find a Job</span>
                <ArrowRight className="w-4 h-4 ml-0.5" />
              </MagneticButton>

              {/* Secondary button: “Hire Talent” */}
              <MagneticButton
                onClick={onHireTalentClick}
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 text-sm font-semibold text-slate-800 hover:text-slate-900 bg-white hover:bg-slate-50 border border-slate-300 hover:border-slate-400 rounded-xl shadow-sm transition-all duration-200"
              >
                <Building2 className="w-4 h-4 text-slate-500" />
                <span>Hire Talent</span>
              </MagneticButton>

              {/* Direct WhatsApp Quick Button */}
              <button
                onClick={() => startDirectWhatsAppChat('Hero Section')}
                className="inline-flex items-center gap-2 px-4 py-3.5 text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100/80 border border-emerald-200 rounded-xl transition-colors"
                title="Direct WhatsApp Helpline"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600 fill-emerald-100" />
                <span>WhatsApp: {COMPANY_PHONE_DISPLAY}</span>
              </button>
            </div>

            {/* Trust and Regional Adjacency Strip */}
            <div className="pt-6 border-t border-slate-200/80 grid grid-cols-3 gap-4 max-w-lg">
              <div>
                <div className="text-xl sm:text-2xl font-bold text-slate-900 tabular-nums">2006</div>
                <div className="text-xs text-slate-500 font-medium">Founded Year</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-slate-900">Nagpur</div>
                <div className="text-xs text-slate-500 font-medium">Headquarters</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-slate-900">Pan-India</div>
                <div className="text-xs text-slate-500 font-medium">Manpower Reach</div>
              </div>
            </div>

          </div>

          {/* Right Column: High-quality Realistic Photograph & Floating Glass Card */}
          <div className="lg:col-span-5 relative">
            <TiltCard className="rounded-2xl overflow-hidden shadow-2xl border border-slate-200/80 bg-white group">
              <div className="relative aspect-[16/10] sm:aspect-[4/3] lg:aspect-[16/11] overflow-hidden bg-slate-100">
                
                {/* Fallback container if image loading */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center transition-opacity duration-300 ${
                    imgLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'
                  }`}
                >
                  <div className="flex flex-col items-center text-slate-400 p-6 text-center">
                    <Building2 className="w-10 h-10 mb-2 stroke-[1.5]" />
                    <span className="text-xs font-medium">THE MENTOR Recruitment Hub</span>
                  </div>
                </div>

                <img
                  src={heroTeamImage}
                  alt="THE MENTOR professional corporate team collaborating in a modern Indian office"
                  referrerPolicy="no-referrer"
                  onLoad={() => setImgLoaded(true)}
                  className={`w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 ${
                    imgLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                />

                {/* Subtle contrast gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />

                {/* Bottom image location tag */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white/90 text-xs drop-shadow-md pointer-events-none">
                  <div className="flex items-center gap-1.5 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Nagpur & Pan-India Corporate Hub</span>
                  </div>
                </div>
              </div>
            </TiltCard>

            {/* Floating Glassmorphism Card: “Connecting Talent with Opportunities” */}
            <div className="absolute -bottom-6 -left-6 sm:-left-8 max-w-[280px] sm:max-w-xs bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-xl p-4 shadow-xl z-10 transition-transform duration-300 hover:-translate-y-1">
              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-lg bg-emerald-50 text-emerald-700 shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 tracking-tight uppercase mb-0.5">
                    Connecting Talent with Opportunities
                  </h4>
                  <p className="text-[11px] text-slate-600 leading-snug">
                    Over 18 years bridging corporate staffing requirements with trained talent.
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Top-Right Accent Card */}
            <div className="hidden sm:block absolute -top-5 -right-5 bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-xl px-3.5 py-2.5 shadow-lg z-10">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-blue-600" />
                <span className="text-xs font-semibold text-slate-800">11–50 HR Specialists</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
