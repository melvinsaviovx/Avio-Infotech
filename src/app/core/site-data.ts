export const SITE = {
  name: 'Avio Infotech',
  shortName: 'AVIO',
  phone: '+91 8903650625',
  tel: '+918903650625',
  address: 'Appattuvilai, Thuckalay, Kanniyakumari, Tamil Nadu 629175, India',
  // Enter a verified company inbox to enable email-compose CTA on contact screen.
  email: '',
  archovexaUrl: 'https://archovexa-website.vercel.app',
} as const;

export interface Service {
  id: string;
  name: string;
  short: string;
  summary: string;
  description: string;
  deliverables: string[];
  icon: string;
}

export const SERVICES: Service[] = [
  {id:'custom-software', name:'Custom Software', short:'Solutions with purpose.', summary:'Purpose-built platforms and business applications that fit the way you work.', description:'From internal workflows to customer-facing applications, we design software around the real-world problems it needs to solve.', deliverables:['Business platforms','Workflow applications','APIs & integrations','Legacy modernization'], icon:''},
  {id:'web-mobile', name:'Web & Mobile', short:'Experiences that stay.', summary:'Considered digital experiences that feel effortless across screens.', description:'Thoughtful interfaces meet robust engineering. We focus on accessible, responsive experiences that people actually enjoy using.', deliverables:['Web applications','Mobile experiences','Responsive websites','User experience engineering'], icon:''},
  {id:'cloud', name:'Cloud & Integration', short:'Infrastructure with intention.', summary:'Scalable cloud foundations and joined-up systems for the next stage of growth.', description:'We help simplify infrastructure, modernize deployments and connect the platforms your business depends on.', deliverables:['Cloud architecture','System integration','Deployment pipelines','Platform modernization'], icon:''},
  {id:'ai-automation', name:'AI & Automation', short:'Make room for better work.', summary:'Intelligent workflows designed to remove repetitive work and surface insight.', description:'We explore practical automation and applied AI where they can reduce friction, make sense of information, or help teams move faster.', deliverables:['Process automation','Applied AI workflows','Business intelligence integrations','Intelligent assistants'], icon:''},
  {id:'security-consulting', name:'Security & Consulting', short:'Confidence, engineered.', summary:'Technical guidance and secure-by-design thinking for digital operations.', description:'The right foundations matter. We bring a security-conscious perspective to architecture, planning and technology decisions.', deliverables:['Technical advisory','Architecture reviews','Security-minded engineering','Technology roadmaps'], icon:''},
];

export const PRINCIPLES = [
  { title: 'Clarity first.', description: 'Understand the problem before prescribing a solution. The best technology starts with the right question.' },
  { title: 'Quality by design.', description: 'Beautifully considered experiences are backed by sound foundations and deliberate engineering.' },
  { title: 'Built to evolve.', description: 'Digital products are never truly finished. We design for the realities of tomorrow, not only the needs of today.' },
];

export const LEADERS = [
  { name: 'Melvin Savio V X', role: 'CEO & Co-Founder', image: 'https://avioinfotech.in/melvin.jpg', imageDescription: 'Melvin Savio V X', bio: 'Focused on the direction of the business, meaningful innovation, and delivering technology that creates tangible value.'},
  { name: 'Shalvin Savio V X', role: 'CTO & Co-Founder', image: 'https://avioinfotech.in/shalvin.jpeg', imageDescription: 'Shalvin Savio V X', bio: 'Focused on the engineering direction, scalable systems, and turning thoughtful ideas into dependable digital solutions.'},
];
