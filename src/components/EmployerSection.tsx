import React, { useState } from 'react';
import { Building2, ShieldCheck, Users, Briefcase, MessageSquare, CheckCircle2 } from 'lucide-react';
import { sendEmployerWhatsAppInquiry, COMPANY_PHONE_DISPLAY, startDirectWhatsAppChat } from '../utils/whatsapp';

interface EmployerSectionProps {
  preselectedService?: string;
}

export const EmployerSection: React.FC<EmployerSectionProps> = ({ preselectedService }) => {
  const [companyName, setCompanyName] = useState('');
  const [contactPerson, setContactPerson] = useState('');
  const [phone, setPhone] = useState('');
  const [serviceType, setServiceType] = useState(
    preselectedService || 'Permanent Recruitment'
  );
  const [positionsCount, setPositionsCount] = useState('1 - 5 Positions');
  const [preferredLocation, setPreferredLocation] = useState('Nagpur');
  const [requirements, setRequirements] = useState('');
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [hasOpenedWhatsApp, setHasOpenedWhatsApp] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!companyName.trim()) newErrors.companyName = 'Company name is required';
    if (!contactPerson.trim()) newErrors.contactPerson = 'Contact person name is required';
    if (!phone.trim() || phone.replace(/\D/g, '').length < 10) {
      newErrors.phone = 'Valid 10-digit phone number is required';
    }
    if (!requirements.trim()) {
      newErrors.requirements = 'Please describe your staffing or training requirement';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    sendEmployerWhatsAppInquiry({
      companyName: companyName.trim(),
      contactPerson: contactPerson.trim(),
      phone: phone.trim(),
      serviceType,
      positionsCount,
      preferredLocation,
      requirements: requirements.trim(),
    });

    setHasOpenedWhatsApp(true);
  };

  return (
    <section id="employers" className="py-20 bg-slate-50 border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-bold tracking-[0.2em] text-emerald-700 uppercase mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-600" />
            <span>FOR CORPORATE EMPLOYERS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Build Your High-Performance Workforce
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Partner with THE MENTOR to streamline permanent recruitment, deploy dependable staffing solutions, or upskill your workforce with focused corporate training.
          </p>
        </div>

        {/* 2-Column Split: Offerings & Direct WhatsApp Inquiry Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Employer Benefits & WhatsApp Connect */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-sm space-y-5">
              <h3 className="text-lg font-bold text-slate-900 tracking-tight flex items-center gap-2">
                <Building2 className="w-5 h-5 text-emerald-600" />
                <span>Why Enterprises Trust THE MENTOR</span>
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 uppercase">Pre-Vetted & Assessed Talent</h4>
                    <p className="text-xs text-slate-600 leading-relaxed mt-0.5">
                      Every candidate undergoes thorough background and communication assessment prior to client presentation.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Users className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 uppercase">Pan-India Sourcing Infrastructure</h4>
                    <p className="text-xs text-slate-600 leading-relaxed mt-0.5">
                      Headquartered in Nagpur with active talent pipelines across Pune, Mumbai, Thane, and central India.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Briefcase className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 uppercase">Dedicated Account Coordination</h4>
                    <p className="text-xs text-slate-600 leading-relaxed mt-0.5">
                      A single recruitment consultant coordinates interviews, salary discussions, and joining confirmations.
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct Helpline / WhatsApp */}
              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                <div>
                  <span className="text-slate-500 block">Direct Employer Line:</span>
                  <a
                    href="tel:+919579227711"
                    className="font-bold text-emerald-700 hover:text-emerald-800 transition-colors"
                  >
                    {COMPANY_PHONE_DISPLAY}
                  </a>
                </div>

                <button
                  onClick={() => startDirectWhatsAppChat('Employer Direct Chat')}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 rounded-lg border border-emerald-200 transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-600 fill-emerald-100" />
                  <span>Chat on WhatsApp</span>
                </button>
              </div>
            </div>

            {/* Corporate Guarantee Card */}
            <div className="p-5 rounded-2xl bg-emerald-950 text-emerald-100 text-xs leading-relaxed">
              <div className="font-bold text-white text-sm mb-1">Corporate Response Guarantee</div>
              <p>
                All employer staffing briefs are reviewed by our senior recruitment team in Nagpur within 24 business hours.
              </p>
            </div>
          </div>

          {/* Right Column: Direct WhatsApp Employer Inquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-md">
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="border-b border-slate-100 pb-3 mb-2">
                <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                  Submit Staffing or Training Requirement
                </h3>
                <p className="text-xs text-slate-500">
                  Fill in your details below to send a prefilled WhatsApp inquiry directly to our corporate desk.
                </p>
              </div>

              {hasOpenedWhatsApp && (
                <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-900 text-xs flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong>WhatsApp link launched!</strong>
                    <p className="text-[11px] text-emerald-800 mt-0.5">
                      Review the formatted requirement in WhatsApp and tap Send to connect with our team.
                    </p>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Company Name */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Organization / Company Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="e.g. Acme Tech Solutions"
                    className={`w-full px-3 py-2 text-sm rounded-lg border ${
                      errors.companyName ? 'border-red-400 bg-red-50/20' : 'border-slate-300'
                    } focus:outline-none focus:ring-1 focus:ring-emerald-500`}
                  />
                  {errors.companyName && (
                    <span className="text-[11px] text-red-600 mt-0.5 block">{errors.companyName}</span>
                  )}
                </div>

                {/* Contact Person */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Contact Person & Role <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={contactPerson}
                    onChange={(e) => setContactPerson(e.target.value)}
                    placeholder="e.g. Priya Sharma, HR Lead"
                    className={`w-full px-3 py-2 text-sm rounded-lg border ${
                      errors.contactPerson ? 'border-red-400 bg-red-50/20' : 'border-slate-300'
                    } focus:outline-none focus:ring-1 focus:ring-emerald-500`}
                  />
                  {errors.contactPerson && (
                    <span className="text-[11px] text-red-600 mt-0.5 block">{errors.contactPerson}</span>
                  )}
                </div>

                {/* Direct Phone */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Direct WhatsApp / Phone <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. 9822334455"
                    className={`w-full px-3 py-2 text-sm rounded-lg border ${
                      errors.phone ? 'border-red-400 bg-red-50/20' : 'border-slate-300'
                    } focus:outline-none focus:ring-1 focus:ring-emerald-500`}
                  />
                  {errors.phone && (
                    <span className="text-[11px] text-red-600 mt-0.5 block">{errors.phone}</span>
                  )}
                </div>

                {/* Service Type */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Service Requirement
                  </label>
                  <select
                    value={serviceType}
                    onChange={(e) => setServiceType(e.target.value)}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  >
                    <option value="Permanent Recruitment">Permanent Recruitment</option>
                    <option value="Contractual Staffing">Contractual Staffing</option>
                    <option value="Executive Search">Executive Search</option>
                    <option value="Corporate Soft Skills Training">Corporate Soft Skills Training</option>
                    <option value="Comprehensive Manpower Consultation">Comprehensive Manpower Consultation</option>
                  </select>
                </div>

                {/* Positions Count */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Estimated Openings / Cohort Size
                  </label>
                  <select
                    value={positionsCount}
                    onChange={(e) => setPositionsCount(e.target.value)}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  >
                    <option value="1 - 3 Positions">1 - 3 Positions</option>
                    <option value="4 - 10 Positions">4 - 10 Positions</option>
                    <option value="11 - 25 Positions">11 - 25 Positions</option>
                    <option value="25+ Bulk Hiring">25+ Bulk Hiring</option>
                    <option value="Corporate Training Cohort">Corporate Training Cohort</option>
                  </select>
                </div>

                {/* Preferred Location */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Deployment Location(s)
                  </label>
                  <input
                    type="text"
                    value={preferredLocation}
                    onChange={(e) => setPreferredLocation(e.target.value)}
                    placeholder="e.g. Nagpur / Pune / Mumbai"
                    className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  />
                </div>
              </div>

              {/* Requirement Notes */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Role Description & Skill Requirements <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows={3}
                  value={requirements}
                  onChange={(e) => setRequirements(e.target.value)}
                  placeholder="Specify key skills, job roles, experience level, or specific training needs..."
                  className={`w-full px-3 py-2 text-sm rounded-lg border ${
                    errors.requirements ? 'border-red-400 bg-red-50/20' : 'border-slate-300'
                  } focus:outline-none focus:ring-1 focus:ring-emerald-500`}
                />
                {errors.requirements && (
                  <span className="text-[11px] text-red-600 mt-0.5 block">{errors.requirements}</span>
                )}
              </div>

              <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-xs text-slate-600">
                <span className="font-semibold text-slate-800">Direct WhatsApp Transmission:</span> Clicking the button below opens WhatsApp to <strong>{COMPANY_PHONE_DISPLAY}</strong> with this exact requirement formatted. You can review before hitting send.
              </div>

              {/* Submit Button */}
              <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <span className="text-[11px] text-slate-400">
                  Strict corporate confidentiality maintained.
                </span>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 active:scale-95 rounded-xl shadow-sm transition-all"
                >
                  <MessageSquare className="w-4 h-4 fill-white/20" />
                  <span>Send Inquiry on WhatsApp</span>
                </button>
              </div>
            </form>

          </div>

        </div>

      </div>
    </section>
  );
};
