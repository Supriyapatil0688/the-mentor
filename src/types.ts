export type JobLocation = 'Nagpur' | 'Pune' | 'Thane' | 'Nashik' | 'Mumbai' | 'Remote / Hybrid' | string;

export interface JobListing {
  id: string;
  title: string;
  department: string;
  location: JobLocation;
  qualification: string;
  experience: string;
  employmentType: 'Full-time' | 'Contract' | 'Part-time' | 'Internship';
  description: string;
  keyResponsibilities: string[];
  requirements: string[];
  isDemoSample: boolean;
  status: 'active' | 'closed';
  postedDate: string;
  openingsCount?: number;
}

export interface CandidateApplication {
  id: string;
  jobId: string;
  jobTitle: string;
  fullName: string;
  email: string;
  phone: string;
  currentLocation: string;
  totalExperience: string;
  currentCtc?: string;
  expectedCtc?: string;
  noticePeriod?: string;
  qualification: string;
  resumeFileName?: string;
  resumeFileSize?: string;
  coverNote?: string;
  status: 'New' | 'Under Review' | 'Shortlisted' | 'Interview Scheduled' | 'Hired' | 'Rejected';
  appliedAt: string;
}

export interface EmployerInquiry {
  id: string;
  companyName: string;
  contactPerson: string;
  workEmail: string;
  phone: string;
  serviceType: 'Permanent Recruitment' | 'Contractual Staffing' | 'Executive Search' | 'Corporate Soft Skills Training' | 'Comprehensive Manpower Consultation';
  positionsCount: string;
  preferredLocation: string;
  requirementsNotes: string;
  status: 'New' | 'Contacted' | 'In Progress' | 'Fulfilled' | 'Archived';
  submittedAt: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  status: 'Unread' | 'Replied' | 'Archived';
  receivedAt: string;
}
