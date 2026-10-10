import React, { useState } from 'react';
import { Phone, Globe, MapPin, MessageSquare, ExternalLink, CheckCircle2 } from 'lucide-react';
import {
  COMPANY_PHONE_DISPLAY,
  COMPANY_PHONE_TEL,
  sendGeneralWhatsAppInquiry,
  startDirectWhatsAppChat
} from '../utils/whatsapp';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [inquiryType, setInquiryType] = useState('General Recruitment Inquiry');
  const [message, setMessage] = useState('');

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [hasOpenedWhatsApp, setHasOpenedWhatsApp] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!name.trim()) newErrors.name = 'Please provide your full name';
    if (!phone.trim() || phone.replace(/\D/g, '').length < 10) {
      newErrors.phone = 'Valid 10-digit phone number is required';
    }
    if (!message.trim()) newErrors.message = 'Please write your message or query';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    sendGeneralWhatsAppInquiry({
      name: name.trim(),
      phone: phone.trim(),
      inquiryType,
      message: message.trim(),
    });

    setHasOpenedWhatsApp(true);
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-bold tracking-[0.2em] text-emerald-700 uppercase mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-600" />
            <span>CONNECT WITH US</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Visit Our Nagpur Headquarters or Connect on WhatsApp
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Have an inquiry about candidate recruitment, staffing contracts, or soft skills training? Reach out directly to our Nagpur office or message us on WhatsApp.
          </p>
        </div>

        {/* 2-Column Grid: Contact Information & Direct WhatsApp Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Verified Contact Details & Map Card */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-sm space-y-6">
              <h3 className="text-base font-bold text-slate-900 uppercase tracking-wider">
                Official Contact Information
              </h3>

              {/* Telephone */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                    Telephone & WhatsApp
                  </div>
                  <a
                    href={`tel:${COMPANY_PHONE_TEL}`}
                    className="text-base font-bold text-slate-900 hover:text-emerald-700 transition-colors"
                  >
                    {COMPANY_PHONE_DISPLAY}
                  </a>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Monday to Saturday · 9:30 AM – 6:30 PM IST
                  </p>
                </div>
              </div>

              {/* Official Website */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Globe className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                    Official Portal
                  </div>
                  <a
                    href="http://thementorway.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-blue-700 hover:underline inline-flex items-center gap-1"
                  >
                    <span>thementorway.com</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Official web domain for THE MENTOR
                  </p>
                </div>
              </div>

              {/* Physical Address */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                    Headquarters Address
                  </div>
                  <address className="text-sm font-semibold text-slate-800 not-italic leading-snug mt-0.5">
                    The Mentor, 11, Daga Layout, Beside Port O’ Gomez, North Ambazari Road, Nagpur, Maharashtra 440013.
                  </address>
                </div>
              </div>

              {/* WhatsApp Quick Action Button */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => startDirectWhatsAppChat('Contact Us Direct Button')}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 active:scale-95 rounded-xl transition-all shadow-xs"
                >
                  <MessageSquare className="w-4 h-4 fill-white/20" />
                  <span>Chat on WhatsApp ({COMPANY_PHONE_DISPLAY})</span>
                </button>
              </div>
            </div>

            {/* Embedded Location Card / Map View */}
            <div className="bg-white rounded-2xl p-4 border border-slate-200/90 shadow-sm overflow-hidden">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                  Nagpur Headquarters Map
                </span>
                <a
                  href="https://maps.google.com/?q=North+Ambazari+Road+Nagpur+Maharashtra+440013"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-medium text-emerald-700 hover:underline flex items-center gap-0.5"
                >
                  Open in Maps
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-slate-100 border border-slate-200">
                <iframe
                  title="THE MENTOR Location - North Ambazari Road Nagpur"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.411132717835!2d79.0558!3d21.1354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c0628e833441%3A0x6bbfecdb4e5dc798!2sNorth%20Ambazari%20Rd%2C%20Nagpur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

          </div>

          {/* Right Column: Direct WhatsApp Contact Inquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-md">
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="border-b border-slate-100 pb-3 mb-2">
                <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                  Send WhatsApp Inquiry
                </h3>
                <p className="text-xs text-slate-500">
                  Reach out for recruitment consultation, candidate profiles, or training batches.
                </p>
              </div>

              {hasOpenedWhatsApp && (
                <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-900 text-xs flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong>WhatsApp link launched!</strong>
                    <p className="text-[11px] text-emerald-800 mt-0.5">
                      Review the formatted message in WhatsApp and tap Send to transmit your inquiry to THE MENTOR team.
                    </p>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Your Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Anand Joshi"
                    className={`w-full px-3 py-2 text-sm rounded-lg border ${
                      errors.name ? 'border-red-400 bg-red-50/20' : 'border-slate-300'
                    } focus:outline-none focus:ring-1 focus:ring-emerald-500`}
                  />
                  {errors.name && (
                    <span className="text-[11px] text-red-600 mt-0.5 block">{errors.name}</span>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Phone / WhatsApp Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. 9579227711"
                    className={`w-full px-3 py-2 text-sm rounded-lg border ${
                      errors.phone ? 'border-red-400 bg-red-50/20' : 'border-slate-300'
                    } focus:outline-none focus:ring-1 focus:ring-emerald-500`}
                  />
                  {errors.phone && (
                    <span className="text-[11px] text-red-600 mt-0.5 block">{errors.phone}</span>
                  )}
                </div>
              </div>

              {/* Inquiry Type */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Inquiry Topic
                </label>
                <select
                  value={inquiryType}
                  onChange={(e) => setInquiryType(e.target.value)}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-1 focus:ring-emerald-500"
                >
                  <option value="General Recruitment Inquiry">General Recruitment Inquiry</option>
                  <option value="Soft Skills & Training Programs">Soft Skills & Training Programs</option>
                  <option value="Permanent Staffing Requirements">Permanent Staffing Requirements</option>
                  <option value="Contract & Flexible Manpower">Contract & Flexible Manpower</option>
                  <option value="Career Mentorship & Job Application">Career Mentorship & Job Application</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Your Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="How can THE MENTOR assist your hiring or career progression?"
                  className={`w-full px-3 py-2 text-sm rounded-lg border ${
                    errors.message ? 'border-red-400 bg-red-50/20' : 'border-slate-300'
                  } focus:outline-none focus:ring-1 focus:ring-emerald-500`}
                />
                {errors.message && (
                  <span className="text-[11px] text-red-600 mt-0.5 block">{errors.message}</span>
                )}
              </div>

              <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-xs text-slate-600">
                <span className="font-semibold text-slate-800">Direct WhatsApp Link:</span> Clicking Send Inquiry will launch WhatsApp with a prefilled message addressed to <strong>{COMPANY_PHONE_DISPLAY}</strong>. You can review before sending.
              </div>

              {/* Submit button */}
              <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <span className="text-[11px] text-slate-400">
                  Quick response from our Nagpur desk.
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
