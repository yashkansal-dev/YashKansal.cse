import { Building2, Calendar, MapPin } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';

const Experience = () => {
  const experiences = [
    {
      role: 'Software Engineer (SWE) Intern',
      company: 'Neoveda Technologies Pvt Ltd',
      program: '',
      location: 'Remote',
      duration: 'Feb 2026 – May 2026',
      description: [
        'Optimized core database indexes and pipelines within CRM systems, reducing client data retrieval latency by 25%',
        'Developed and enhanced an ATS (Applicant Tracking System), streamlining recruitment pipelines and candidate tracking',
        'Contributed to Knovia-AI, an AI-driven employability and talent intelligence platform for skill assessment, role-fitment analysis, and personalized learning pathways',
      ],
      skills: ['CRM Systems', 'Database Optimization', 'ATS', 'AI Platforms', 'Talent Intelligence'],
      badge: 'database optimization • recruitment systems • AI-driven talent intelligence',
    },
    {
      role: 'Salesforce Developer Intern',
      company: 'SmartBridge',
      program: 'Agentblazer Champion Program',
      location: 'Virtual',
      duration: 'May 2025 – Jul 2025',
      description: [
        'Engineered Salesforce CRM features including organizational setup, data management, security, and process automation',
        'Deployed custom business workflows and applications using Apex and Lightning Web Components (LWC)',
        'Received Salesforce Superbadges including Apex Specialist and Object Relationships',
        'Recognized as an Agentblazer Champion for strong technical and platform proficiency',
      ],
      skills: ['Salesforce', 'Apex', 'Lightning Web Components', 'CRM Architecture', 'Process Automation'],
      badge: 'CRM engineering • enterprise automation • low-code + code hybrid expertise',
    },
    {
      role: 'Cyber Risk & Regulatory Launchpad Trainee',
      company: 'PwC Acceleration Centers in India (Bangalore & Kolkata)',
      program: 'Cyber Risk & Regulatory Launchpad Program',
      location: 'Remote',
      duration: 'Nov 2024 – Jul 2025',
      description: [
        'Completed PwC’s structured Cyber Risk & Regulatory Launchpad Program with practical exposure to enterprise cyber risk management, regulatory compliance, and governance frameworks',
        'Worked through 10+ industry-aligned compliance modules following PwC advisory consulting standards',
        'Gained hands-on exposure to cybersecurity fundamentals, risk assessment, and enterprise compliance practices',
        'Earned PwC-issued digital badges in Programming Fundamentals (Python), Prompt Engineering, and Cyber Security',
      ],
      skills: ['Cyber Security Fundamentals', 'Python Programming', 'Prompt Engineering', 'Risk & Compliance Awareness', 'Enterprise Technology Foundations'],
      badge: 'cybersecurity foundations • python programming • applied prompt engineering',
    },
    {
      role: 'Full Stack Developer Intern',
      company: 'TBI',
      program: 'Technology Business Incubator, Graphic Era University',
      location: 'On-site',
      duration: 'Apr 2024 – Jun 2024',
      description: [
        'Built end-to-end features including registration, scheduling, Razorpay payments, and automated certificate generation',
        'Deployed web applications on Vercel, achieving less than 1s load times',
        'Handled 500+ concurrent users during live institutional events',
        'Collaborated with non-technical stakeholders to translate requirements into scalable solutions',
      ],
      skills: ['React', 'Node.js', 'MongoDB', 'Razorpay API', 'Vercel', 'Performance Optimization'],
      badge: 'production systems • performance optimization • real-world traffic handling',
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Work Experience</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Professional experience building production systems and enterprise solutions
            </p>
          </div>
        </RevealOnScroll>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <RevealOnScroll key={index} delay={index * 0.1} width="100%">
              <div
                className="bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700 p-8 lg:p-12 hover:border-gray-600 transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{exp.role}</h3>
                    <div className="flex flex-col gap-2 text-gray-400">
                      <div className="flex items-center gap-2">
                        <Building2 size={18} className="text-blue-400" />
                        <span className="text-lg font-medium text-blue-400">{exp.company}</span>
                        {exp.program && <span className="text-gray-500">•</span>}
                        {exp.program && <span className="text-gray-400">{exp.program}</span>}
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-sm">
                        <div className="flex items-center gap-2">
                          <Calendar size={16} />
                          <span>{exp.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin size={16} />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {exp.description.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-gray-300 flex items-start">
                      <span className="text-green-500 mr-3 mt-1.5">▸</span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1.5 bg-green-500/10 border border-green-500/30 rounded-lg text-sm font-medium text-green-400"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-700">
                  <p className="text-sm text-gray-400 italic">{exp.badge}</p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
