import React, { useState, useMemo } from 'react';
import { JobListing } from '../types';
import { Search, MapPin, Briefcase, GraduationCap, Clock, ArrowRight, X, MessageSquare, Info, CheckCircle2 } from 'lucide-react';
import { TiltCard } from './InteractiveEffects';
import { sendJobWhatsAppInquiry, COMPANY_PHONE_DISPLAY } from '../utils/whatsapp';

interface JobsSectionProps {
  jobs: JobListing[];
}

export const JobsSection: React.FC<JobsSectionProps> = ({ jobs }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState<string>('Nagpur'); // Default sample location Nagpur
  const [selectedJobForModal, setSelectedJobForModal] = useState<JobListing | null>(null);

  // Job Inquiry Form state
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [experience, setExperience] = useState('1 - 3 Years');
  const [qualification, setQualification] = useState('');
  const [currentCity, setCurrentCity] = useState('');
  const [note, setNote] = useState('');
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [hasTriggeredWhatsApp, setHasTriggeredWhatsApp] = useState(false);

  // Available locations
  const locations = ['All', 'Nagpur', 'Pune', 'Thane', 'Nashik', 'Mumbai'];

  // Filtered jobs
  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const matchesSearch =
        searchQuery.trim() === '' ||
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesLocation =
        selectedLocation === 'All' ||
        job.location.toLowerCase() === selectedLocation.toLowerCase();

      return matchesSearch && matchesLocation;
    });
  }, [jobs, searchQuery, selectedLocation]);

  const handleOpenApplyModal = (job: JobListing) => {
    setSelectedJobForModal(job);
    setFormErrors({});
    setHasTriggeredWhatsApp(false);
    setCurrentCity(job.location === 'Nagpur' ? 'Nagpur' : '');
    setQualification(job.qualification);
  };

  const handleSendWhatsAppInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: Record<string, string> = {};

    if (!fullName.trim()) errors.fullName = 'Please enter your full name';
    if (!phone.trim() || phone.replace(/\D/g, '').length < 10) {
      errors.phone = 'Valid 10-digit phone number is required';
    }
    if (!qualification.trim()) errors.qualification = 'Highest qualification is required';
    if (!currentCity.trim()) errors.currentCity = 'Current city is required';

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    if (!selectedJobForModal) return;

    // Direct WhatsApp Inquiry via encodeURIComponent
    sendJobWhatsAppInquiry({
      name: fullName.trim(),
      phone: phone.trim(),
      jobTitle: selectedJobForModal.title,
      experience,
      qualification: qualification.trim(),
      currentLocation: currentCity.trim(),
      note: note.trim() || undefined,
    });

    setHasTriggeredWhatsApp(true);
  };

  return (
    <section id="jobs" className="py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-bold tracking-[0.2em] text-emerald-700 uppercase mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-600" />
              <span>CAREER OPPORTUNITIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
              Current Job Openings
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Explore positions across technical, support, and corporate disciplines. Connect directly with our Nagpur recruitment desk via WhatsApp.
            </p>
          </div>

          {/* Verification / Demo content badge */}
          <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs self-start md:self-auto">
            <Info className="w-4 h-4 text-amber-600 shrink-0" />
            <span>
              Sample vacancies shown for UI demonstration. Apply to inquire about verified active batches.
            </span>
          </div>
        </div>

        {/* Search & Location Filter Bar */}
        <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-slate-200/90 mb-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            
            {/* Search Input */}
            <div className="md:col-span-5 relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by job title, skill, or role..."
                className="w-full pl-10 pr-4 py-2.5 text-sm bg-slate-50 hover:bg-slate-100/70 focus:bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Location Filter Tabs */}
            <div className="md:col-span-7 flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0">
              <span className="text-xs font-semibold text-slate-500 flex items-center gap-1 mr-1 shrink-0">
                <MapPin className="w-3.5 h-3.5" />
                City:
              </span>
              {locations.map((loc) => {
                const isSelected = selectedLocation === loc;
                return (
                  <button
                    key={loc}
                    onClick={() => setSelectedLocation(loc)}
                    className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                      isSelected
                        ? 'bg-emerald-700 text-white shadow-xs'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900'
                    }`}
                  >
                    {loc}
                  </button>
                );
              })}
            </div>

          </div>
        </div>

        {/* Job Listings Grid */}
        {filteredJobs.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center border border-dashed border-slate-300">
            <Briefcase className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-800 mb-1">No matching positions found</h3>
            <p className="text-sm text-slate-500 mb-4 max-w-md mx-auto">
              We couldn't find openings matching "{searchQuery}" in {selectedLocation}. Try resetting your search filters or send an open inquiry on WhatsApp.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedLocation('All');
              }}
              className="px-4 py-2 text-xs font-semibold text-emerald-700 bg-emerald-50 rounded-lg hover:bg-emerald-100 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredJobs.map((job) => (
              <TiltCard
                key={job.id}
                maxTilt={3}
                className="group flex flex-col justify-between bg-white border border-slate-200/90 hover:border-emerald-500 rounded-2xl p-6 shadow-xs hover:shadow-lg transition-all duration-300"
              >
                <div>
                  {/* Top Meta Header */}
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-3 pb-3 border-b border-slate-100">
                    <span className="font-semibold text-emerald-800">{job.department}</span>
                    {job.isDemoSample && (
                      <span className="text-[11px] text-amber-700 font-medium">Demo Vacancy</span>
                    )}
                  </div>

                  {/* Job Title */}
                  <h3 className="text-lg font-bold text-slate-900 tracking-tight group-hover:text-emerald-700 transition-colors mb-2">
                    {job.title}
                  </h3>

                  {/* Key Metadata: Location, Exp, Qualification */}
                  <div className="space-y-2 mb-4 text-xs text-slate-600">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span className="font-medium text-slate-900">{job.location}</span>
                      <span className="text-slate-300">·</span>
                      <span>{job.employmentType}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span>Experience: <strong className="font-semibold text-slate-800">{job.experience}</strong></span>
                    </div>

                    <div className="flex items-start gap-2">
                      <GraduationCap className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                      <span className="line-clamp-1">Qual: {job.qualification}</span>
                    </div>
                  </div>

                  {/* Description preview */}
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-6">
                    {job.description}
                  </p>
                </div>

                {/* Bottom Action Footer */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <div className="text-[11px] text-slate-400">
                    Open in {job.location}
                  </div>
                  <button
                    onClick={() => handleOpenApplyModal(job)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-slate-900 group-hover:bg-emerald-700 rounded-xl transition-colors shadow-xs"
                  >
                    <span>Apply Now</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </TiltCard>
            ))}
          </div>
        )}

      </div>

      {/* Direct WhatsApp Job Application Modal */}
      {selectedJobForModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            
            {/* Modal Header */}
            <div className="bg-slate-900 px-6 py-5 text-white flex items-center justify-between">
              <div>
                <span className="text-[11px] font-semibold text-emerald-400 uppercase tracking-wider">
                  Apply via Direct WhatsApp Inquiry
                </span>
                <h3 className="text-lg font-bold tracking-tight text-white">
                  {selectedJobForModal.title}
                </h3>
                <div className="flex items-center gap-2 text-xs text-slate-300 mt-0.5">
                  <span>{selectedJobForModal.location}</span>
                  <span>·</span>
                  <span>{selectedJobForModal.experience}</span>
                </div>
              </div>
              <button
                onClick={() => setSelectedJobForModal(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Form */}
            <form onSubmit={handleSendWhatsAppInquiry} className="p-6 space-y-4 max-h-[80vh] overflow-y-auto">
              
              {hasTriggeredWhatsApp && (
                <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-900 text-xs flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong>WhatsApp link launched!</strong>
                    <p className="text-[11px] text-emerald-800 mt-0.5">
                      Please review the prefilled message in WhatsApp and tap Send to transmit your inquiry to THE MENTOR (+91 95792 27711).
                    </p>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Supriya Patil"
                    className={`w-full px-3 py-2 text-sm rounded-lg border ${
                      formErrors.fullName ? 'border-red-400 bg-red-50/30' : 'border-slate-300 focus:border-emerald-500'
                    } focus:outline-none focus:ring-1 focus:ring-emerald-500`}
                  />
                  {formErrors.fullName && (
                    <span className="text-[11px] text-red-600 mt-0.5 block">{formErrors.fullName}</span>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. 9579227711"
                    className={`w-full px-3 py-2 text-sm rounded-lg border ${
                      formErrors.phone ? 'border-red-400 bg-red-50/30' : 'border-slate-300 focus:border-emerald-500'
                    } focus:outline-none focus:ring-1 focus:ring-emerald-500`}
                  />
                  {formErrors.phone && (
                    <span className="text-[11px] text-red-600 mt-0.5 block">{formErrors.phone}</span>
                  )}
                </div>

                {/* Experience */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Total Experience
                  </label>
                  <select
                    value={experience}
                    onChange={(e) => setExperience(e.target.value)}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  >
                    <option value="Fresher (0 Years)">Fresher (0 Years)</option>
                    <option value="1 - 2 Years">1 - 2 Years</option>
                    <option value="2 - 4 Years">2 - 4 Years</option>
                    <option value="4 - 6 Years">4 - 6 Years</option>
                    <option value="6+ Years">6+ Years</option>
                  </select>
                </div>

                {/* Qualification */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Highest Qualification <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={qualification}
                    onChange={(e) => setQualification(e.target.value)}
                    placeholder="e.g. B.E. / B.Tech / MBA / Graduate"
                    className={`w-full px-3 py-2 text-sm rounded-lg border ${
                      formErrors.qualification ? 'border-red-400 bg-red-50/30' : 'border-slate-300 focus:border-emerald-500'
                    } focus:outline-none focus:ring-1 focus:ring-emerald-500`}
                  />
                  {formErrors.qualification && (
                    <span className="text-[11px] text-red-600 mt-0.5 block">{formErrors.qualification}</span>
                  )}
                </div>
              </div>

              {/* Current City */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Current City <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={currentCity}
                  onChange={(e) => setCurrentCity(e.target.value)}
                  placeholder="e.g. Nagpur / Pune / Mumbai"
                  className={`w-full px-3 py-2 text-sm rounded-lg border ${
                    formErrors.currentCity ? 'border-red-400 bg-red-50/30' : 'border-slate-300 focus:border-emerald-500'
                  } focus:outline-none focus:ring-1 focus:ring-emerald-500`}
                />
                {formErrors.currentCity && (
                  <span className="text-[11px] text-red-600 mt-0.5 block">{formErrors.currentCity}</span>
                )}
              </div>

              {/* Message Note */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Brief Note / Skills Overview (Optional)
                </label>
                <textarea
                  rows={2}
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder="Mention your key skills, availability, or immediate notice period..."
                  className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                />
              </div>

              <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-xs text-slate-600">
                <span className="font-semibold text-slate-800">Recruitment Desk:</span> Opening WhatsApp will prepare a prefilled message to <strong>{COMPANY_PHONE_DISPLAY}</strong> with your application details. You will review it in WhatsApp before sending.
              </div>

              {/* Footer Actions */}
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedJobForModal(null)}
                  className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-800"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 active:scale-95 rounded-xl shadow-sm transition-all"
                >
                  <MessageSquare className="w-4 h-4 fill-white/20" />
                  <span>Send Inquiry on WhatsApp</span>
                </button>
              </div>

            </form>

          </div>
        </div>
      )}

    </section>
  );
};
