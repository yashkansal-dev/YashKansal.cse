import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';
import { RevealOnScroll } from './RevealOnScroll';

const Projects = () => {
  const projects = [
    {
      title: 'CodeSync',
      description: 'Real-time Collaborative Online IDE',
      details: [
        'Built a collaborative coding platform supporting 5+ concurrent users with live code sync',
        'Implemented real-time chat, audio, and video using Socket.IO and WebRTC',
        'Designed a multi-language code execution engine with custom I/O handling',
        'Maintained <300ms latency for real-time collaboration under moderate bandwidth',
        'Successfully handled 100+ code submissions during testing',
      ],
      tech: ['React.js', 'Node.js', 'Socket.IO', 'WebRTC'],
      year: '2025',
      github: 'https://codesync-com.vercel.app/',
      image: '/images/welcome.png',
    },
    {
      title: 'SmartSched',
      description: 'AI-Based Timetable Scheduling System',
      details: [
        'Designed a Genetic Algorithm-based optimizer achieving 100% conflict-free schedules',
        'Processed constraints from 200+ faculty and course datasets using structured CSVs',
        'Reduced manual timetable creation time by 90% for 3000+ students',
        'Blended algorithmic intelligence with real-world administrative constraints',
      ],
      tech: ['Python', 'Genetic Algorithms', 'Pandas', 'MERN Stack'],
      year: '2024',
      github: 'https://smartsched.netlify.app/',
      image: '/images/Analytics-Reports.png',
    },
    {
      title: 'AidLink',
      description: 'Crisis Assistance & Response Platform',
      details: [
        'Connected users and responders within a 2km radius during emergencies',
        'Architected backend systems to handle 150+ concurrent sessions',
        'Integrated 3+ verified news APIs for real-time crisis updates',
        'Focused on reliability and fast response during simulated disaster scenarios',
      ],
      tech: ['React.js', 'Node.js', 'News APIs', 'Geolocation'],
      year: '2024',
      github: 'https://aid-link.netlify.app/',
      image: '/images/AidLink.png',
    },
    {
      title: 'SparkBook',
      description: 'Social Media Platform (Instagram-Inspired)',
      details: [
        'Implemented image posting, likes, comments, user profiles, and dynamic feeds',
        'Achieved ~100ms API response time for core social interactions',
        'Integrated live news feeds using external APIs with 60-second refresh cycles',
        'Onboarded 100+ test users with 500+ posts during MVP testing',
      ],
      tech: ['MERN Stack', 'REST APIs', 'Tailwind CSS'],
      year: '2023',
      github: 'https://github.com/yashkansal-dev/SparkBook',
      image: '/images/Sparkbook.png',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Production-ready applications showcasing real-world problem solving
            </p>
          </div>
        </RevealOnScroll>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <RevealOnScroll key={index} delay={index * 0.1} width="100%">
              <div
                className="
                  group
                  bg-gray-800/40
                  rounded-2xl
                  border border-gray-700
                  overflow-hidden
                  transition-all duration-300
                  hover:border-blue-600/60
                  hover:shadow-2xl hover:shadow-blue-600/10
                  hover:-translate-y-1
                "
              >
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* LEFT CONTENT */}
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-4">
                      <h3 className="text-3xl md:text-4xl font-bold text-white">
                        {project.title}
                      </h3>
                      <span className="text-sm text-gray-400 font-medium">
                        {project.year}
                      </span>
                    </div>

                    <p className="text-xl text-blue-400 mb-6 font-medium">
                      {project.description}
                    </p>

                    <ul className="space-y-3 mb-8">
                      {project.details.map((detail, detailIndex) => (
                        <li
                          key={detailIndex}
                          className="text-gray-300 flex items-start"
                        >
                          <span className="text-blue-500 mr-3 mt-1.5">▸</span>
                          <span className="leading-relaxed">{detail}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="
                            px-4 py-2
                            bg-gray-700/50
                            border border-gray-600
                            rounded-lg
                            text-sm font-medium text-gray-300
                            transition-colors
                            group-hover:bg-gray-700
                          "
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          flex items-center gap-2
                          px-6 py-3
                          bg-blue-600 hover:bg-blue-700
                          text-white rounded-lg
                          font-medium transition-colors
                        "
                      >
                        <Github size={20} />
                        View Code
                      </a>

                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          flex items-center gap-2
                          px-6 py-3
                          border-2 border-gray-600
                          hover:border-gray-400
                          text-white rounded-lg
                          font-medium transition-colors
                        "
                      >
                        <ExternalLink size={20} />
                        Learn More
                      </a>
                    </div>
                  </div>

                  {/* RIGHT IMAGE */}
                  {project.image && (
                    <div className="h-64 lg:h-auto overflow-hidden bg-gray-800 relative">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="
                          object-cover
                          transition-transform duration-500
                          group-hover:scale-105
                        "
                      />
                    </div>
                  )}
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll delay={0.2}>
          <div className="mt-12 text-center">
            <a
              href="https://github.com/yashkansal-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center gap-2
                px-8 py-3
                border-2 border-blue-600
                hover:bg-blue-600
                text-white rounded-lg
                font-medium transition-colors
              "
            >
              <Github size={20} />
              View All Projects on GitHub
            </a>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default Projects;
