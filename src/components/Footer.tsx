import React from 'react';
import { TheMentorLogo } from './TheMentorLogo';
import { Phone, Globe, MapPin, ArrowUpRight, MessageSquare } from 'lucide-react';
import {
  COMPANY_PHONE_DISPLAY,
  COMPANY_PHONE_TEL,
  startDirectWhatsAppChat
} from '../utils/whatsapp';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
          
          {/* Brand & Mission column */}
          <div className="lg:col-span-5 space-y-4">
            {/* Original logo prominently displayed on clean white card */}
            <div className="inline-block">
              <TheMentorLogo size="md" onWhiteCard />
            </div>
            
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm mt-3">
              THE MENTOR is a leading training, recruitment, and staffing consultancy headquartered in Nagpur, Maharashtra. Founded in 2006, catering to manpower requirements across India and imparting vital soft skills to career aspirants.
            </p>

            <div className="pt-1 text-xs text-slate-500 space-y-1">
              <div>Industry: Staffing and Recruiting</div>
              <div>Company Size: 11–50 Employees · Founded: 2006</div>
            </div>
          </div>

          {/* Quick Navigation links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white tracking-wider uppercase">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#home" className="hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#recruitment" className="hover:text-white transition-colors">Recruitment</a>
              </li>
              <li>
                <a href="#training" className="hover:text-white transition-colors">Training Programs</a>
              </li>
              <li>
                <a href="#jobs" className="hover:text-white transition-colors">Job Openings</a>
              </li>
              <li>
                <a href="#employers" className="hover:text-white transition-colors">For Employers</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Services list */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white tracking-wider uppercase">
              Services
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#recruitment" className="hover:text-white transition-colors">Recruitment Services</a>
              </li>
              <li>
                <a href="#recruitment" className="hover:text-white transition-colors">Staffing Solutions</a>
              </li>
              <li>
                <a href="#training" className="hover:text-white transition-colors">Training & Development</a>
              </li>
              <li>
                <a href="#recruitment" className="hover:text-white transition-colors">Career Guidance</a>
              </li>
              <li>
                <a href="#employers" className="hover:text-white transition-colors">Permanent Placement</a>
              </li>
              <li>
                <a href="#employers" className="hover:text-white transition-colors">Contractual Staffing</a>
              </li>
            </ul>
          </div>

          {/* Verified Contact Details & WhatsApp Button */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white tracking-wider uppercase">
              Headquarters
            </h4>
            
            <div className="space-y-2.5 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span className="leading-snug">
                  The Mentor, 11, Daga Layout, Beside Port O’ Gomez, North Ambazari Road, Nagpur, MH 440013
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <a
                  href={`tel:${COMPANY_PHONE_TEL}`}
                  className="hover:text-white text-slate-300 font-semibold transition-colors"
                >
                  {COMPANY_PHONE_DISPLAY}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <a
                  href="http://thementorway.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white text-slate-300 transition-colors inline-flex items-center gap-1"
                >
                  <span>thementorway.com</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => startDirectWhatsAppChat('Footer Button')}
                className="w-full inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow-sm transition-all active:scale-95"
              >
                <MessageSquare className="w-3.5 h-3.5 fill-white/20" />
                <span>Chat on WhatsApp</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} THE MENTOR. All Rights Reserved. Founded 2006 in Nagpur, Maharashtra.
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Nagpur · Pune · Mumbai · Pan-India</span>
            <span className="text-slate-700">·</span>
            <span>Recruitment & Soft Skills Training</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
