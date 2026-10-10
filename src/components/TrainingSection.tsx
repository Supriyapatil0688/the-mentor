import React, { useState } from 'react';
import { GraduationCap, MessageSquare, Briefcase, Award, CheckCircle2, Users, ArrowRight } from 'lucide-react';
import trainingWorkshopImg from '../assets/images/training_workshop_1791625642501.jpg';
import { TiltCard } from './InteractiveEffects';
import { startDirectWhatsAppChat } from '../utils/whatsapp';

interface TrainingSectionProps {
  onInquireTraining: () => void;
}

export const TrainingSection: React.FC<TrainingSectionProps> = ({ onInquireTraining }) => {
  const [imgLoaded, setImgLoaded] = useState(false);

  const programs = [
    {
      title: 'Soft Skills & Workplace Etiquette',
      icon: GraduationCap,
      description: 'Cultivate emotional intelligence, professional demeanor, team collaboration, and active listening for modern corporate environments.',
      modules: ['Active Listening & Empathy', 'Cross-functional Collaboration', 'Conflict Management & Composure']
    },
    {
      title: 'Corporate Communication & Fluency',
      icon: MessageSquare,
      description: 'Overcome hesitation in spoken English, refine vocal clarity, and master structured verbal expression in meetings and client calls.',
      modules: ['Spoken Fluency Drills', 'Business Email & Memo Writing', 'Telephone & Video Call Etiquette']
    },
    {
      title: 'Interview Mastery & Mock Panels',
      icon: Briefcase,
      description: 'Intensive simulation of HR and technical interview rounds with video-recorded feedback, body language coaching, and answer structuring.',
      modules: ['STAR Method Behavioral Answers', 'Handling Stress & Curveball Questions', 'Salary Negotiation Readiness']
    },
    {
      title: 'Career Development & Presentation',
      icon: Award,
      description: 'Equip aspiring professionals with persuasive presentation abilities, high-impact PowerPoint structuring, and career roadmapping.',
      modules: ['Deck Structure & Visual Storytelling', 'Stage & Online Presentation Confidence', 'Resume & Profile Architecture']
    }
  ];

  return (
    <section id="training" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-bold tracking-[0.2em] text-emerald-700 uppercase mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-600" />
            <span>LEARNING & TALENT READINESS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Empowering Aspirants with Soft Skills & Professional Training
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Technical knowledge opens doors, but soft skills secure careers. Since 2006, THE MENTOR has conducted focused training programs that transform job aspirants into confident, articulate corporate contributors.
          </p>
        </div>

        {/* 2-Column Split: Programs Grid & Workshop Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          
          {/* Programs Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {programs.map((prog, idx) => {
              const Icon = prog.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200/90 hover:border-emerald-300 hover:bg-white transition-all duration-200 shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-3">
                      <Icon className="w-4 h-4 stroke-[2]" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900 tracking-tight mb-2">
                      {prog.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      {prog.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-200/60 space-y-1.5">
                    {prog.modules.map((mod, mIdx) => (
                      <div key={mIdx} className="flex items-center gap-2 text-[11px] text-slate-700">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                        <span>{mod}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Realistic Workshop Photography */}
          <div className="lg:col-span-5">
            <TiltCard maxTilt={4} className="rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-white">
              <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
                <img
                  src={trainingWorkshopImg}
                  alt="THE MENTOR soft skills and corporate communication workshop in progress"
                  referrerPolicy="no-referrer"
                  onLoad={() => setImgLoaded(true)}
                  className={`w-full h-full object-cover transition-transform duration-500 hover:scale-105 ${
                    imgLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                />
                
                {/* Contrast scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-4 left-4 right-4 text-white text-xs">
                  <div className="font-bold text-sm text-white">Interactive Training Sessions</div>
                  <div className="text-slate-200 text-[11px]">
                    Imparting communication, soft skills, and interview readiness
                  </div>
                </div>
              </div>

              <div className="p-5 bg-white space-y-2">
                <div className="text-xs text-slate-500 mb-2 italic">
                  Note: Batch schedules, institutional cohorts, and corporate workshops are scheduled upon direct consultation.
                </div>
                <button
                  onClick={onInquireTraining}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-xl transition-colors shadow-xs"
                >
                  <span>Inquire About Training Batches</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  onClick={() => startDirectWhatsAppChat('Corporate Soft Skills Training Batch Inquiry')}
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100/80 rounded-xl transition-colors border border-emerald-200"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-600 fill-emerald-100" />
                  <span>Chat on WhatsApp for Batch Details</span>
                </button>
              </div>
            </TiltCard>
          </div>

        </div>

      </div>
    </section>
  );
};
