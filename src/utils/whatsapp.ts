/**
 * Reusable WhatsApp integration for THE MENTOR (+91 95792 27711)
 * Pattern: https://wa.me/919579227711?text=ENCODED_MESSAGE
 */

export const COMPANY_PHONE_RAW = '919579227711';
export const COMPANY_PHONE_DISPLAY = '+91 95792 27711';
export const COMPANY_PHONE_TEL = '+919579227711';

/**
 * Open WhatsApp directly with encoded message
 */
export const openWhatsApp = (message: string) => {
  const url = `https://wa.me/${COMPANY_PHONE_RAW}?text=${encodeURIComponent(message.trim())}`;
  window.open(url, '_blank', 'noopener,noreferrer');
};

export interface JobInquiryData {
  name: string;
  phone: string;
  jobTitle: string;
  experience: string;
  qualification: string;
  currentLocation: string;
  note?: string;
}

export const sendJobWhatsAppInquiry = (data: JobInquiryData) => {
  const message = `Hello THE MENTOR Team,

I would like to apply/inquire regarding the position: *${data.jobTitle}*.

• Name: ${data.name}
• Contact Phone: ${data.phone}
• Position Applied: ${data.jobTitle}
• Total Experience: ${data.experience}
• Qualification: ${data.qualification}
• Current City: ${data.currentLocation}${data.note ? `\n• Notes: ${data.note}` : ''}

Please review my profile and guide me on the next recruitment steps. Thank you!`;

  openWhatsApp(message);
};

export interface EmployerInquiryData {
  companyName: string;
  contactPerson: string;
  phone: string;
  serviceType: string;
  positionsCount: string;
  preferredLocation: string;
  requirements: string;
}

export const sendEmployerWhatsAppInquiry = (data: EmployerInquiryData) => {
  const message = `Hello THE MENTOR Team,

I would like to submit a corporate staffing/recruitment requirement.

• Organization: ${data.companyName}
• Contact Person: ${data.contactPerson}
• Phone: ${data.phone}
• Service Type: ${data.serviceType}
• Openings / Volume: ${data.positionsCount}
• Target Location: ${data.preferredLocation}
• Requirements Details:
${data.requirements}

Please connect with us to discuss candidate profiles and commercial terms.`;

  openWhatsApp(message);
};

export interface GeneralInquiryData {
  name: string;
  phone: string;
  inquiryType: string;
  message: string;
}

export const sendGeneralWhatsAppInquiry = (data: GeneralInquiryData) => {
  const message = `Hello THE MENTOR Team,

I would like to make an inquiry.

• Name: ${data.name}
• Phone: ${data.phone}
• Inquiry Type: ${data.inquiryType}
• Message:
${data.message}

Please contact me regarding this inquiry. Thank you!`;

  openWhatsApp(message);
};

export const startDirectWhatsAppChat = (context: string = 'General Inquiry') => {
  const message = `Hello THE MENTOR Team,\n\nI am contacting you from the website regarding: ${context}.\nPlease connect with me.`;
  openWhatsApp(message);
};
