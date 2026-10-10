import React, { useState, useEffect } from 'react';
import { TheMentorLogo } from './TheMentorLogo';
import { Menu, X, MessageSquare, Phone, Briefcase, Users } from 'lucide-react';
import { COMPANY_PHONE_DISPLAY, COMPANY_PHONE_TEL, startDirectWhatsAppChat } from '../utils/whatsapp';
import { MagneticButton } from './InteractiveEffects';

interface NavbarProps {
  onSelectRole: (role: 'jobseeker' | 'employer') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onSelectRole }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'recruitment', 'training', 'jobs', 'employers', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About Us', href: '#about', id: 'about' },
    { name: 'Recruitment', href: '#recruitment', id: 'recruitment' },
    { name: 'Training', href: '#training', id: 'training' },
    { name: 'Jobs', href: '#jobs', id: 'jobs' },
    { name: 'For Employers', href: '#employers', id: 'employers' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/90 py-2 sm:py-2.5'
          : 'bg-white/90 backdrop-blur-sm border-b border-slate-100 py-3 sm:py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Brand Zone: Original THE MENTOR uploaded logo */}
          <a
            href="#home"
            className="flex items-center shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-lg p-0.5"
            aria-label="THE MENTOR - Home"
          >
            <TheMentorLogo size={scrolled ? 'sm' : 'md'} />
          </a>

          {/* Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium text-slate-700">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`transition-colors whitespace-nowrap shrink-0 relative py-1 hover:text-slate-900 ${
                    isActive ? 'text-emerald-700 font-semibold' : 'text-slate-600'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-600 rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Action Zone: Direct WhatsApp CTA & Phone */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            {/* Clickable Phone Number */}
            <a
              href={`tel:${COMPANY_PHONE_TEL}`}
              className="hidden xl:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-700 hover:text-emerald-700 hover:bg-slate-100 rounded-lg transition-colors whitespace-nowrap"
              title="Call THE MENTOR"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-600" />
              <span>{COMPANY_PHONE_DISPLAY}</span>
            </a>

            {/* Direct WhatsApp CTA Button */}
            <MagneticButton
              onClick={() => startDirectWhatsAppChat('Navbar Header Inquiry')}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 active:scale-95 shadow-sm rounded-xl transition-all whitespace-nowrap"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-white/20" />
              <span>WhatsApp Inquiry</span>
            </MagneticButton>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => startDirectWhatsAppChat('Mobile Header')}
              className="p-2 text-emerald-600 hover:text-emerald-700 rounded-lg"
              title="Chat on WhatsApp"
            >
              <MessageSquare className="w-5 h-5 fill-emerald-100" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === link.id
                    ? 'bg-emerald-50 text-emerald-800 font-semibold'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col gap-2">
            <a
              href={`tel:${COMPANY_PHONE_TEL}`}
              className="flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-slate-800 bg-slate-100 rounded-xl"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-600" />
              <span>Call: {COMPANY_PHONE_DISPLAY}</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                startDirectWhatsAppChat('Mobile Navigation');
              }}
              className="flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-sm"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chat on WhatsApp (+91 95792 27711)</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
