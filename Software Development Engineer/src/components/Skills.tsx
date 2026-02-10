import {
  Code2,
  Layers,
  Database,
  Wifi,
  Wrench,
  Cloud,
} from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';

/* ---------- TYPES ---------- */
type SkillColor = 'blue' | 'green' | 'purple' | 'orange' | 'red' | 'teal';

type SkillCategory = {
  title: string;
  skills: string[];
  color: SkillColor;
  icon: React.ElementType;
};

/* ---------- COMPONENT ---------- */
const Skills = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: 'Languages',
      skills: ['C++', 'Python', 'Java', 'C', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'PHP', 'SQL'],
      color: 'blue',
      icon: Code2,
    },
    {
      title: 'Frameworks & Libraries',
      skills: [
        'React.js',
        'Next.js',
        'Node.js',
        'Express',
        'MERN Stack',
        'Tailwind CSS',
        'Material UI',
      ],
      color: 'green',
      icon: Layers,
    },
    {
      title: 'Databases & Tools',
      skills: ['MongoDB', 'SQLite', 'Prisma', 'Firebase', 'Google Cloud', 'Git', 'Linux'],
      color: 'purple',
      icon: Database,
    },
    {
      title: 'Real-Time & APIs',
      skills: ['Socket.IO', 'WebRTC', 'REST APIs', 'Postman'],
      color: 'orange',
      icon: Wifi,
    },
    {
      title: 'Development Tools',
      skills: ['VS Code', 'IntelliJ IDEA', 'Eclipse', 'Docker', 'Jupyter Notebook', 'Google Colab'],
      color: 'red',
      icon: Wrench,
    },
    {
      title: 'Deployment & Cloud',
      skills: ['Vercel', 'Netlify', 'Render', 'AWS', 'Salesforce'],
      color: 'teal',
      icon: Cloud,
    },
  ];

  const colorStyles: Record<
    SkillColor,
    {
      badge: string;
      icon: string;
    }
  > = {
    blue: {
      badge: 'bg-blue-500/10 border-blue-500/30 text-blue-400',
      icon: 'bg-blue-500',
    },
    green: {
      badge: 'bg-green-500/10 border-green-500/30 text-green-400',
      icon: 'bg-green-500',
    },
    purple: {
      badge: 'bg-purple-500/10 border-purple-500/30 text-purple-400',
      icon: 'bg-purple-500',
    },
    orange: {
      badge: 'bg-orange-500/10 border-orange-500/30 text-orange-400',
      icon: 'bg-orange-500',
    },
    red: {
      badge: 'bg-red-500/10 border-red-500/30 text-red-400',
      icon: 'bg-red-500',
    },
    teal: {
      badge: 'bg-teal-500/10 border-teal-500/30 text-teal-400',
      icon: 'bg-teal-500',
    },
  };

  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <RevealOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Technical Stack
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Technologies and tools I use to build scalable, production-ready applications
            </p>
          </div>
        </RevealOnScroll>

        {/* Skill Cards */}
        <RevealOnScroll delay={0.2} width="100%">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              const styles = colorStyles[category.color];

              return (
                <div
                  key={index}
                  className="bg-gray-900/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300"
                >
                  {/* Icon */}
                  <div
                    className={`w-12 h-12 flex items-center justify-center rounded-xl mb-4 ${styles.icon}`}
                  >
                    <Icon className="text-white" size={24} />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-4">
                    {category.title}
                  </h3>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className={`px-3 py-1.5 rounded-lg text-sm font-medium border transition-all duration-200 hover:scale-105 ${styles.badge}`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </RevealOnScroll>

        {/* Core Concepts */}
        <RevealOnScroll delay={0.4} width="100%">
          <div className="mt-14 bg-gray-900/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Core Concepts
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {['Data Structures & Algorithms(DSA)', 'OOPS(Object-Oriented Programming Systems)', 'Database Management System(DBMS)', 'Operating System', 'Scheduling Algorithms', 'System Debugging', 'Cyber Security & Auditing', 'Performance Optimization', 'Logical Reasoning', 'Data Interpretation', 'Real-Time Systems', 'Cloud Computing', 'Cloud Architecture',].map((concept, index) => (
                <span
                  key={index}
                  className="px-6 py-2 bg-gradient-to-r from-blue-600/20 to-green-600/20 border border-blue-500/30 rounded-full text-white font-medium"
                >
                  {concept}
                </span>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default Skills;
