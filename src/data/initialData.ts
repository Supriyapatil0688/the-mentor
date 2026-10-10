import { JobListing, CandidateApplication, EmployerInquiry, ContactMessage } from '../types';

export const INITIAL_JOBS: JobListing[] = [
  {
    id: 'job-101',
    title: 'Technical Support Engineer',
    department: 'IT & Technical Services',
    location: 'Nagpur',
    qualification: 'B.E. / B.Tech / BCA / B.Sc (IT / CS) or equivalent',
    experience: '1 - 3 Years',
    employmentType: 'Full-time',
    description: 'Diagnose and resolve L1/L2 technical issues, manage ticket queues, support enterprise networks, and provide prompt customer assistance.',
    keyResponsibilities: [
      'Provide L1/L2 technical support via ticketing system, phone, and email',
      'Troubleshoot Windows/Linux OS, network connectivity, and hardware issues',
      'Escalate unresolved incidents to tier-3 infrastructure teams with detailed logs',
      'Maintain accurate documentation of user issues and resolution steps'
    ],
    requirements: [
      'Hands-on experience with networking fundamentals (TCP/IP, DNS, DHCP)',
      'Familiarity with remote desktop tools and ticketing systems (Jira/ServiceNow)',
      'Strong analytical thinking and pleasant customer-facing communication',
      'Comfortable working rotational shifts if required'
    ],
    isDemoSample: true,
    status: 'active',
    postedDate: '2026-10-04',
    openingsCount: 4
  },
  {
    id: 'job-102',
    title: 'Customer Support Executive',
    department: 'Customer Operations & BPO',
    location: 'Nagpur',
    qualification: 'Graduate in any discipline (B.Com / BA / BBA / B.Sc)',
    experience: '0 - 2 Years (Freshers welcome with good communication)',
    employmentType: 'Full-time',
    description: 'Manage inbound queries, resolve customer grievances with empathy and speed, and uphold exceptional brand satisfaction benchmarks.',
    keyResponsibilities: [
      'Handle inbound calls, emails, and live chats from end customers',
      'Provide clear product and service walkthroughs and answer queries',
      'Log customer feedback and escalate complex inquiries to team leads',
      'Maintain strict first-contact resolution (FCR) targets'
    ],
    requirements: [
      'Fluent spoken and written English and Hindi communication skills',
      'Patient, active listener with positive problem-solving mindset',
      'Basic computer literacy and fast typing speed (30+ WPM)',
      'Training completed in soft skills and telephone etiquette is a plus'
    ],
    isDemoSample: true,
    status: 'active',
    postedDate: '2026-10-06',
    openingsCount: 6
  },
  {
    id: 'job-103',
    title: 'HR Recruiter',
    department: 'Human Resources & Talent Acquisition',
    location: 'Nagpur',
    qualification: 'MBA in HR / BBA / Graduate with recruitment experience',
    experience: '1 - 3 Years',
    employmentType: 'Full-time',
    description: 'Lead sourcing, candidate screening, interview coordination, and pipeline management for IT and non-IT manpower requirements.',
    keyResponsibilities: [
      'Source profiles through job boards (Naukri, Indeed, LinkedIn) and database screening',
      'Conduct preliminary telephonic rounds to assess communication and culture fit',
      'Coordinate interview schedules between hiring managers and shortlisted candidates',
      'Manage candidate onboarding pipelines and follow up until successful joining'
    ],
    requirements: [
      'Proven track record in end-to-end talent acquisition or recruitment consultancy',
      'Knowledge of Boolean search strings and portal screening techniques',
      'Strong negotiation, interpersonal, and stakeholder management skills',
      'High target orientation and proactive work ethic'
    ],
    isDemoSample: true,
    status: 'active',
    postedDate: '2026-10-01',
    openingsCount: 2
  },
  {
    id: 'job-104',
    title: 'PPT Expert / Presentation Designer',
    department: 'Design & Corporate Communications',
    location: 'Nagpur',
    qualification: 'Graduate with design proficiency / certifications',
    experience: '2 - 4 Years',
    employmentType: 'Full-time',
    description: 'Transform raw corporate data and concepts into compelling, visual, executive-level PowerPoint decks, pitch materials, and reports.',
    keyResponsibilities: [
      'Design high-impact pitch decks, quarterly business reviews, and training presentations',
      'Translate complex statistics and frameworks into intuitive charts and infographics',
      'Ensure strict adherence to corporate brand guidelines and typography standards',
      'Work closely with executive leadership to produce polished presentation assets'
    ],
    requirements: [
      'Expertise in Microsoft PowerPoint (advanced animations, master slides, vector icons)',
      'Working knowledge of Figma, Adobe Illustrator, or Canva is advantageous',
      'Eye for typography, visual hierarchy, spatial balance, and color harmony',
      'Strong portfolio demonstrating high-end corporate deck design'
    ],
    isDemoSample: true,
    status: 'active',
    postedDate: '2026-10-08',
    openingsCount: 2
  },
  {
    id: 'job-105',
    title: 'Full Stack Web Developer',
    department: 'Software Engineering',
    location: 'Pune',
    qualification: 'B.E. / B.Tech (CS/IT) or MCA',
    experience: '2 - 4 Years',
    employmentType: 'Full-time',
    description: 'Build and maintain responsive modern web applications using React, TypeScript, Node.js, and cloud database technologies.',
    keyResponsibilities: [
      'Develop modular frontend user interfaces with React and Tailwind CSS',
      'Design RESTful API endpoints and backend microservices',
      'Collaborate on database schema design, indexing, and query optimization',
      'Participate in code reviews, CI/CD pipelines, and agile sprints'
    ],
    requirements: [
      'Proficiency in React.js, TypeScript, and modern JavaScript (ES6+)',
      'Backend experience with Node.js/Express or Python/FastAPI',
      'Hands-on experience with SQL/PostgreSQL or NoSQL databases',
      'Clean coding practices and Git version control discipline'
    ],
    isDemoSample: true,
    status: 'active',
    postedDate: '2026-10-02',
    openingsCount: 3
  },
  {
    id: 'job-106',
    title: 'Corporate Soft Skills Trainer',
    department: 'Training & Development',
    location: 'Nagpur',
    qualification: 'Post Graduate / Master in English / Psychology / Management',
    experience: '3 - 6 Years',
    employmentType: 'Full-time',
    description: 'Deliver dynamic corporate training modules covering interpersonal communication, business etiquette, interview readiness, and leadership.',
    keyResponsibilities: [
      'Conduct interactive training sessions for job aspirants and college graduates',
      'Facilitate mock interviews, group discussions, and verbal aptitude bootcamps',
      'Design tailored training curriculum and interactive activity worksheets',
      'Assess student performance and deliver constructive, personalized feedback'
    ],
    requirements: [
      'Exceptional command over verbal communication and presentation style',
      'Demonstrated experience in corporate training or finishing school coaching',
      'High empathy, stage presence, and ability to inspire diverse learners',
      'Certification in Train-The-Trainer or NLP is an added advantage'
    ],
    isDemoSample: true,
    status: 'active',
    postedDate: '2026-09-28',
    openingsCount: 1
  }
];

export const INITIAL_APPLICATIONS: CandidateApplication[] = [
  {
    id: 'app-901',
    jobId: 'job-101',
    jobTitle: 'Technical Support Engineer',
    fullName: 'Rahul Deshmukh',
    email: 'rahul.deshmukh@example.com',
    phone: '9822314567',
    currentLocation: 'Nagpur',
    totalExperience: '2 Years',
    currentCtc: '3.6 LPA',
    expectedCtc: '4.8 LPA',
    noticePeriod: '15 Days',
    qualification: 'B.E. Computer Technology',
    resumeFileName: 'Rahul_Deshmukh_Technical_Resume.pdf',
    resumeFileSize: '240 KB',
    coverNote: 'Experienced in desktop troubleshooting, active directory, and L1 ticketing.',
    status: 'Shortlisted',
    appliedAt: '2026-10-08T10:30:00Z'
  },
  {
    id: 'app-902',
    jobId: 'job-103',
    jobTitle: 'HR Recruiter',
    fullName: 'Pooja Kulkarni',
    email: 'pooja.kulkarni@example.com',
    phone: '9765412890',
    currentLocation: 'Nagpur',
    totalExperience: '1.5 Years',
    currentCtc: '3.0 LPA',
    expectedCtc: '4.2 LPA',
    noticePeriod: 'Immediate',
    qualification: 'MBA Human Resources',
    resumeFileName: 'Pooja_HR_Recruitment_Profile.pdf',
    resumeFileSize: '310 KB',
    coverNote: 'Extensive sourcing experience on Naukri and LinkedIn for IT staffing requirements.',
    status: 'Interview Scheduled',
    appliedAt: '2026-10-07T14:15:00Z'
  },
  {
    id: 'app-903',
    jobId: 'job-104',
    jobTitle: 'PPT Expert / Presentation Designer',
    fullName: 'Amitabh Sharma',
    email: 'amitabh.sharma@example.com',
    phone: '9422896541',
    currentLocation: 'Pune',
    totalExperience: '3 Years',
    currentCtc: '5.2 LPA',
    expectedCtc: '6.5 LPA',
    noticePeriod: '30 Days',
    qualification: 'B.Sc Multimedia & Animation',
    resumeFileName: 'Amitabh_Sharma_Deck_Portfolio.pdf',
    resumeFileSize: '480 KB',
    coverNote: 'Passionate presentation specialist with portfolio of 80+ executive pitch decks.',
    status: 'Under Review',
    appliedAt: '2026-10-09T09:45:00Z'
  }
];

export const INITIAL_INQUIRIES: EmployerInquiry[] = [
  {
    id: 'inq-501',
    companyName: 'Apex Infotech Solutions',
    contactPerson: 'Sandeep Varma',
    workEmail: 'sandeep.v@apexinfotech.in',
    phone: '9890123450',
    serviceType: 'Permanent Recruitment',
    positionsCount: '5 - 10 Positions',
    preferredLocation: 'Nagpur / Pune',
    requirementsNotes: 'Looking to hire technical support and customer relations executives for our upcoming MIHAN facility expansion.',
    status: 'In Progress',
    submittedAt: '2026-10-08T11:00:00Z'
  },
  {
    id: 'inq-502',
    companyName: 'Vidarbha Logistics & Supply Chain',
    contactPerson: 'Meera Chawla',
    workEmail: 'm.chawla@vidarbhalogistics.com',
    phone: '9923456781',
    serviceType: 'Corporate Soft Skills Training',
    positionsCount: '20+ Employees',
    preferredLocation: 'Nagpur',
    requirementsNotes: 'Require 3-day intensive workshop on business communication and client handling for front-office and operations staff.',
    status: 'New',
    submittedAt: '2026-10-09T16:20:00Z'
  }
];

export const INITIAL_CONTACT_MESSAGES: ContactMessage[] = [
  {
    id: 'msg-301',
    name: 'Anjali Bawankar',
    email: 'anjali.b@gmail.com',
    phone: '9860112233',
    subject: 'Inquiry regarding soft skills training batches',
    message: 'Hello, I recently completed my graduation in Nagpur and want to enroll in the interview preparation and communication course. Kindly share details of the next cohort.',
    status: 'Unread',
    receivedAt: '2026-10-09T17:40:00Z'
  }
];
