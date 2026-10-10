import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { JobsSection } from './components/JobsSection';
import { AboutSection } from './components/AboutSection';
import { EmployerSection } from './components/EmployerSection';
import { TrainingSection } from './components/TrainingSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import { INITIAL_JOBS } from './data/initialData';
import { MessageSquare } from 'lucide-react';
import { startDirectWhatsAppChat, COMPANY_PHONE_DISPLAY } from './utils/whatsapp';

export default function App() {
  // Job listings maintained directly in source code
  const [jobs] = useState(INITIAL_JOBS);
  const [preselectedEmployerService, setPreselectedEmployerService] = useState<string | undefined>(undefined);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-slate-50 text-slate-900 selection:bg-emerald-500 selection:text-white">
      {/* Custom Mouse Cursor with trailing ring and interactive hover states */}
      <CustomCursor />

      {/* Sticky Navigation Bar */}
      <Navbar
        onSelectRole={(role) => {
          if (role === 'jobseeker') scrollToSection('jobs');
          if (role === 'employer') scrollToSection('employers');
        }}
      />

      <main>
        {/* 1. Hero Section */}
        <Hero
          onFindJobClick={() => scrollToSection('jobs')}
          onHireTalentClick={() => scrollToSection('employers')}
        />

        {/* 2. Services Section */}
        <ServicesSection
          onSelectService={(serviceName) => {
            if (serviceName.includes('Training')) {
              scrollToSection('training');
            } else {
              setPreselectedEmployerService(serviceName);
              scrollToSection('employers');
            }
          }}
        />

        {/* 3. Current Job Openings Section */}
        <JobsSection jobs={jobs} />

        {/* 4. About THE MENTOR Section */}
        <AboutSection />

        {/* 5. Training and Career Development Section */}
        <TrainingSection
          onInquireTraining={() => {
            setPreselectedEmployerService('Corporate Soft Skills Training');
            scrollToSection('employers');
          }}
        />

        {/* 6. For Employers Section */}
        <EmployerSection preselectedService={preselectedEmployerService} />

        {/* 7. Contact Section */}
        <ContactSection />
      </main>

      {/* 8. Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button for Easy Access */}
      <aside aria-label="WhatsApp quick chat" className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => startDirectWhatsAppChat('Floating Action Button')}
          className="group flex items-center gap-2.5 px-4 py-3 bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
          title={`Chat with THE MENTOR on WhatsApp (${COMPANY_PHONE_DISPLAY})`}
        >
          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
            <MessageSquare className="w-4 h-4 fill-white" />
          </div>
          <span className="hidden sm:inline text-xs font-bold tracking-wide pr-1">
            WhatsApp Us
          </span>
        </button>
      </aside>
    </div>
  );
}
