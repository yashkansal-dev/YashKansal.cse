const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-gray-700">
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            I'm <span className="text-white font-semibold">Yash Kansal</span>, a Computer Science
            undergraduate and full-stack developer passionate about solving real problems through
            technology. I specialize in building production-ready web applications, real-time
            systems, and AI-driven solutions with a strong focus on performance, reliability, and
            user experience.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            From a real-time collaborative IDE (<span className="text-blue-400 font-medium">CodeSync</span>) to an
            AI-based timetable scheduler (<span className="text-blue-400 font-medium">SmartSched</span>) and a
            crisis-response platform (<span className="text-blue-400 font-medium">AidLink</span>), I've worked
            across diverse problem spaces—combining full-stack development, algorithms, and cloud
            deployment to deliver scalable solutions used by hundreds of users.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            I enjoy experimenting with modern stacks like MERN, WebRTC, Socket.IO, cloud services,
            and CRM automation, and I've applied these skills through internships, hackathons, and
            industry programs including <span className="text-green-400 font-medium">PwC Launchpad</span> and{' '}
            <span className="text-green-400 font-medium">Salesforce Agentblazer</span>.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            Beyond code, I'm actively involved in tech communities—organizing hackathons,
            conferences, and collaborating with peers to build and learn together. When I'm not
            coding, you'll find me exploring new technologies, reading, traveling, or contributing
            to developer communities.
          </p>

          <div className="border-t border-gray-700 pt-8">
            <h3 className="text-2xl font-bold text-white mb-4">Core Expertise</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="text-blue-400 font-semibold mb-2">Development</h4>
                <p className="text-gray-300">
                  JavaScript (ES6+), TypeScript, React, Next.js, Node.js, Express, MongoDB, SQL,
                  Python, C++
                </p>
              </div>
              <div>
                <h4 className="text-blue-400 font-semibold mb-2">Real-Time & APIs</h4>
                <p className="text-gray-300">
                  REST APIs, WebRTC, Socket.IO, Real-Time Systems, Distributed Collaboration
                </p>
              </div>
              <div>
                <h4 className="text-blue-400 font-semibold mb-2">AI & Algorithms</h4>
                <p className="text-gray-300">
                  Genetic Algorithms, Data Processing (Pandas), Optimization Techniques, AI-assisted
                  Systems
                </p>
              </div>
              <div>
                <h4 className="text-blue-400 font-semibold mb-2">Cloud & DevOps</h4>
                <p className="text-gray-300">
                  Git/GitHub, Linux, Docker, Firebase, Google Cloud, Vercel, System Design
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
