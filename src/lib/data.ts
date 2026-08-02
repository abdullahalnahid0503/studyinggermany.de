import tum from "../assets/images/tum.jpg";
import heidelberg from "../assets/images/heidelberg.jpg";
import lmumunich from "../assets/images/lmu-munich.jpg";
import rwthaachen from "../assets/images/rwth-aachen.jpg";
import kit from "../assets/images/kit.jpg";
import tuberlin from "../assets/images/tu-berlin.jpg";
import freeuniversityberlin from "../assets/images/free-university-berlin.jpg";
import universityofhamburg from "../assets/images/university-of-hamburg.jpg";
import universityoffreiburg from "../assets/images/university-of-freiburg.jpg";
import universityofbonn from "../assets/images/university-of-bonn.jpg";
import universityofstuttgard from "../assets/images/university-of-stuttgart.jpg";
import universityOfMannheim from "../assets/images/university-of-mannheim.jpg";
import {
  GraduationCap, FileText, HeartPulse, Plane, Landmark, Home,
  TrendingUp, Briefcase, FileSearch, Users, Hammer, MapPin,
  MessagesSquare, Crown, type LucideIcon,
} from 'lucide-react';

export interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
  premium?: boolean;
}

export const services: Service[] = [
  { title: 'University Admission', description: 'Find, shortlist, and secure offers from German universities matched to your profile.', icon: GraduationCap },
  { title: 'Visa Services', description: 'End-to-end student visa guidance, document prep, and embassy interview coaching.', icon: FileText },
  { title: 'Health Insurance', description: 'Get compliant public or private health insurance coverage from day one.', icon: HeartPulse },
  { title: 'Travel Insurance', description: 'Affordable entry travel insurance for your visa and first weeks in Germany.', icon: Plane },
  { title: 'Blocked Account Assistance', description: 'Open and fund a German blocked account (Sperrkonto) with trusted providers.', icon: Landmark },
  { title: 'Accommodation Support', description: 'Secure student housing, WG rooms, and dorms before you land.', icon: Home },
  { title: 'Investment Guidance', description: 'Smart financial planning for your studies, savings, and future in Germany.', icon: TrendingUp },
  { title: 'Career Preparation', description: 'Build a German-style CV and prep for working student roles and internships.', icon: Briefcase },
  { title: 'CV Review', description: 'Professional, ATS-friendly German CV review and optimization.', icon: FileSearch },
  { title: 'Internship Guidance', description: 'Land Pflichtpraktikum and Werkstudent roles with industry-ready coaching.', icon: Users },
  { title: 'Student Job Assistance', description: 'Navigate the 140 full days / 280 half-days working student allowance.', icon: Hammer },
  { title: 'Airport Pickup', description: 'Warm welcome and safe airport pickup on arrival in Germany.', icon: MapPin },
  { title: 'Settlement Support', description: 'Anmeldung, bank account, SIM card, and city registration made simple.', icon: Home },
  { title: 'German Language Guidance', description: 'Structured path to A1–C1 with certified courses and exam strategy.', icon: MessagesSquare },
  { title: 'One Hour with Billal Mahmud', description: 'Premium private consultation with our lead strategist. Personal roadmap for your Germany journey.', icon: Crown, premium: true },
];

export interface WhyItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const whyGermany: WhyItem[] = [
  { title: 'No or Low Tuition Fees', description: 'Most public universities charge zero tuition, just a semester fee.', icon: GraduationCap },
  { title: 'World-Ranked Universities', description: 'Home to TU9, and dozens of QS top-300 institutions.', icon: TrendingUp },
  { title: 'Strong Economy', description: "Europe's largest economy with unmatched industrial opportunity.", icon: Briefcase },
  { title: 'Part-time Work', description: 'Work up to 140 full or 280 half days alongside your studies.', icon: Hammer },
  { title: 'Post-Study Employment', description: '18-month residence permit to find work after graduation.', icon: Users },
  { title: 'Pathway to PR', description: 'Permanent residency after 21 months with a B1 language certificate.', icon: Home },
  { title: 'Safe Environment', description: 'Consistently ranked among the safest countries in the world.', icon: HeartPulse },
  { title: 'High Quality of Life', description: 'World-class healthcare, transport, and culture.', icon: Plane },
  { title: 'Innovation & Research', description: 'A global leader in engineering, science, and applied research.', icon: FileSearch },
];

export interface University {
  name: string;
  city: string;
  ranking: string;
  programs: string[];
  image: string;
}

export const universities: University[] = [
  {
    name: 'Technical University of Munich',
    city: 'Munich',
    ranking: 'QS #28',
    programs: ['Computer Science', 'Mechanical Eng.', 'Physics'],
    image: tum,
  },
  {
    name: 'Heidelberg University',
    city: 'Heidelberg',
    ranking: 'QS #47',
    programs: ['Medicine', 'Physics', 'Law'],
    image: heidelberg,
  },
  {
    name: 'LMU Munich',
    city: 'Munich',
    ranking: 'QS #54',
    programs: ['Physics', 'Philosophy', 'Biology'],
    image: lmumunich,
  },
  {
    name: 'RWTH Aachen University',
    city: 'Aachen',
    ranking: 'QS #106',
    programs: ['Mechanical Eng.', 'Automotive', 'Robotics'],
    image: rwthaachen,
  },
  {
    name: 'Karlsruhe Institute of Technology',
    city: 'Karlsruhe',
    ranking: 'QS #119',
    programs: ['Informatics', 'Energy Eng.', 'Mechatronics'],
    image: kit,
  },
  {
    name: 'Technical University of Berlin',
    city: 'Berlin',
    ranking: 'QS #154',
    programs: ['Engineering', 'Architecture', 'CS'],
    image: tuberlin,
  },
  {
    name: 'Free University of Berlin',
    city: 'Berlin',
    ranking: 'QS #97',
    programs: ['Political Science', 'Business', 'Natural Sciences'],
    image: freeuniversityberlin,
  },
  {
    name: 'University of Hamburg',
    city: 'Hamburg',
    ranking: 'QS #205',
    programs: ['Physics', 'Business', 'Earth Sciences'],
    image: universityofhamburg,
  },
  {
    name: 'University of Freiburg',
    city: 'Freiburg',
    ranking: 'QS #212',
    programs: ['Environmental', 'Medicine', 'Engineering'],
    image: universityoffreiburg,
  },
  {
    name: 'University of Bonn',
    city: 'Bonn',
    ranking: 'QS #239',
    programs: ['Mathematics', 'Agriculture', 'Law'],
    image: universityofbonn,
  },
  {
    name: 'University of Stuttgart',
    city: 'Stuttgart',
    ranking: 'QS #314',
    programs: ['Automotive', 'Aerospace', 'Civil'],
    image: universityofstuttgard,
  },
    {
  name: 'University of Mannheim',
  city: 'Mannheim',
  ranking: 'QS #425',
  programs: ['Accounting', 'Finance', 'Management'],
   image: universityOfMannheim,
},
];

export const processSteps = [
  { step: 1, title: 'Free Consultation', description: 'Talk to a Germany specialist about your goals and eligibility.', icon: MessagesSquare },
  { step: 2, title: 'Profile Evaluation', description: 'We assess your academics, language, and documents in detail.', icon: FileSearch },
  { step: 3, title: 'University Shortlisting', description: 'Receive a tailored list of best-fit programs and universities.', icon: GraduationCap },
  { step: 4, title: 'Application Submission', description: 'Expert help preparing and submitting strong applications.', icon: FileText },
  { step: 5, title: 'Offer Letter', description: 'Track responses and accept your admission offer.', icon: Briefcase },
  { step: 6, title: 'Visa Processing', description: 'Document checklist, blocked account, and embassy prep.', icon: Plane },
  { step: 7, title: 'Travel to Germany', description: 'Flights, insurance, and airport pickup sorted.', icon: MapPin },
  { step: 8, title: 'Settlement & Career Support', description: 'Anmeldung, housing, jobs, and long-term career planning.', icon: Home },
];

export interface Country { name: string; students: string; code: string; }

export const servedCountries: Country[] = [
  { name: 'Bangladesh', students: '2,400+', code: 'bd' },
  { name: 'India', students: '3,800+', code: 'in' },
  { name: 'Pakistan', students: '1,500+', code: 'pk' },
  { name: 'Nepal', students: '900+', code: 'np' },
  { name: 'Sri Lanka', students: '420+', code: 'lk' },
  { name: 'Indonesia', students: '680+', code: 'id' },
  { name: 'Malaysia', students: '350+', code: 'my' },
  { name: 'Philippines', students: '410+', code: 'ph' },
  { name: 'Vietnam', students: '520+', code: 'vn' },
  { name: 'Nigeria', students: '1,100+', code: 'ng' },
  { name: 'Ghana', students: '380+', code: 'gh' },
  { name: 'Kenya', students: '460+', code: 'ke' },
  { name: 'Egypt', students: '720+', code: 'eg' },
  { name: 'UAE', students: '540+', code: 'ae' },
  { name: 'Saudi Arabia', students: '610+', code: 'sa' },
  { name: 'Turkey', students: '830+', code: 'tr' },
  { name: 'Brazil', students: '490+', code: 'br' },
  { name: 'Germany', students: 'Host Country', code: 'de' },
];

export interface Story {
  name: string;
  country: string;
  university: string;
  program: string;
  quote: string;
  image: string;
}

export const successStories: Story[] = [
  { name: 'Ayesha Rahman', country: 'Bangladesh', university: 'TU Munich', program: 'MSc Computer Science', quote: 'From blocked account to my Studienkolleg admission. They handled every step. Today I work as a Werkstudent at BMW.', image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { name: 'Rahul Sharma', country: 'India', university: 'RWTH Aachen', program: 'MSc Automotive', quote: 'The strategy session re-framed my profile and I got into my dream program with a partial scholarship.', image: 'https://images.pexels.com/photos/5212703/pexels-photo-5212703.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { name: 'Fatima Noor', country: 'Pakistan', university: 'Heidelberg University', program: 'MSc Physics', quote: 'My visa was approved in 4 weeks. The document prep and mock interview made all the difference.', image: 'https://images.pexels.com/photos/5212695/pexels-photo-5212695.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { name: 'David Okafor', country: 'Nigeria', university: 'KIT', program: 'MSc Informatics', quote: 'They helped me open my blocked account, find housing in Karlsruhe, and land a Werkstudent role at SAP.', image: 'https://images.pexels.com/photos/5212656/pexels-photo-5212656.jpeg?auto=compress&cs=tinysrgb&w=600' },
];

export interface BlogPost {
  title: string;
  category: string;
  excerpt: string;
  readTime: string;
  image: string;
  date: string;
}

export const blogPosts: BlogPost[] = [
  { title: 'How to Get Your Germany Student Visa in 2026', category: 'Germany Visa', excerpt: 'A complete step-by-step walkthrough of the visa process, documents, and timeline.', readTime: '8 min', image: 'https://images.pexels.com/photos/7235894/pexels-photo-7235894.jpeg', date: 'Jan 14, 2026' },
  { title: 'Top 10 Public Universities with No Tuition', category: 'Universities', excerpt: 'Compare tuition-free public universities and what makes each unique.', readTime: '6 min', image: 'https://images.pexels.com/photos/29262989/pexels-photo-29262989.jpeg', date: 'Jan 9, 2026' },
  { title: 'DAAD Scholarships: 2026 Application Guide', category: 'Scholarships', excerpt: 'Eligibility, documents, and deadlines for the DAAD scholarship program.', readTime: '10 min', image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800', date: 'Jan 4, 2026' },
  { title: 'Finding Student Accommodation in Berlin', category: 'Accommodation', excerpt: 'WG rooms, dorms, and private flats: where to look and when to apply.', readTime: '7 min', image: 'https://images.pexels.com/photos/8199172/pexels-photo-8199172.jpeg', date: 'Dec 28, 2025' },
  { title: 'APS Certificate Explained for South Asian Students', category: 'APS', excerpt: 'Everything you need to know about the APS verification for India, China, and Vietnam.', readTime: '9 min', image: 'https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=800', date: 'Dec 20, 2025' },
  { title: 'Blocked Account Germany: Providers Compared', category: 'Blocked Account', excerpt: 'Fintiba vs Expatrio vs Coracle: fees, features, and processing.', readTime: '11 min', image: 'https://images.pexels.com/photos/210607/pexels-photo-210607.jpeg?auto=compress&cs=tinysrgb&w=800', date: 'Dec 12, 2025' },
];

export interface Faq { q: string; a: string; }

export const faqs: Faq[] = [
  { q: 'Do I need IELTS to study in Germany?', a: 'Many English-taught programs require IELTS (often 6.0–6.5), but programs taught in German typically require TestDaF or DSH instead. Some universities offer medium-of-instruction certificates in place of IELTS.' },
  { q: 'How much money do I need to study in Germany?', a: 'As of 2026, students need a blocked account with approx. €11,904 per year (≈ €992/month). Tuition is free at most public universities; you only pay a semester contribution of ~€150–350.' },
  { q: 'Can I work while studying in Germany?', a: 'Yes. International students can work 140 full days or 280 half days per year. Student jobs ("Werkstudent") typically pay €12–15/hour and often relate to your field of study.' },
  { q: 'Can my spouse come with me to Germany?', a: 'Yes. For master\'s students or those on a recognized bachelor\'s, a family reunion visa is possible. Your spouse can also apply for a work permit after arrival. Financial proof and accommodation are required.' },
  { q: 'What is APS and do I need it?', a: 'APS verifies academic credentials for applicants from India, China, and Vietnam. It is a mandatory step before applying to most German universities if you\'re from one of these countries.' },
  { q: 'How long does the student visa take?', a: 'Visa processing typically takes 4–8 weeks, though peak seasons can extend this to 12 weeks. We recommend starting 3 months before your intended departure.' },
];

export const consultationTypes = [
  'General Consultation',
  'Visa Consultation',
  'Admission Consultation',
  'Insurance Consultation',
  'Investment Guidance',
  'One Hour with Billal Mahmud',
];
