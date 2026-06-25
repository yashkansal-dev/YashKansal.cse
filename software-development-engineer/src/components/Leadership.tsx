import { Users, Calendar, Globe } from 'lucide-react';

const Leadership = () => {
  const activities = [
    {
      title: 'Arambh 3.0',
      description: 'Organized flagship technical event',
      type: 'Event Organization',
    },
    {
      title: 'Graph-E-Thon 2024',
      description: '72-hour national-level hackathon',
      type: 'Hackathon',
    },
    {
      title: 'AUTOCOM-2024',
      description: 'International conference on Automation & Computation',
      type: 'Conference',
    },
    {
      title: 'CYBERCOM-2024',
      description: 'International conference on Cybersecurity & Computing',
      type: 'Conference',
    },
  ];

  return (
    <section id="leadership" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Leadership & Community
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Building tech communities and organizing impactful events
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-green-500/10 to-green-600/5 backdrop-blur-sm rounded-2xl border border-green-500/30 p-8 lg:p-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-green-500/20 rounded-lg">
                <Users size={32} className="text-green-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Co-Dev Club</h3>
                <p className="text-green-400 font-medium">Core Team Member (2023 – Present)</p>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed mb-6">
              Active core team member contributing to technical community building, event
              organization, and fostering collaboration among students and technology enthusiasts.
            </p>

            <div className="space-y-4 mb-6">
              <h4 className="text-lg font-semibold text-white flex items-center gap-2">
                <Calendar size={20} className="text-green-400" />
                Major Events Organized
              </h4>
              <div className="grid gap-3">
                {activities.map((activity, index) => (
                  <div
                    key={index}
                    className="bg-gray-800/50 rounded-lg p-4 border border-gray-700"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h5 className="font-bold text-white mb-1">{activity.title}</h5>
                        <p className="text-sm text-gray-400">{activity.description}</p>
                      </div>
                      <span className="px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full text-xs font-medium text-green-400 whitespace-nowrap">
                        {activity.type}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <a
              href="https://www.linkedin.com/company/co-dev-club/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors"
            >
              <Globe size={20} />
              Visit Co-Dev Club
            </a>
          </div>

          <div className="flex flex-col justify-between">
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700 p-8 mb-6">
              <h3 className="text-2xl font-bold text-white mb-4">Impact & Contributions</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1">▸</span>
                  <span className="text-gray-300">
                    Organized <span className="text-white font-semibold">Graph-E-Thon 2024</span>, a
                    72-hour national-level hackathon attracting participants from across India
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1">▸</span>
                  <span className="text-gray-300">
                    Contributed to organizing international conferences including{' '}
                    <span className="text-white font-semibold">AUTOCOM-2024</span> and{' '}
                    <span className="text-white font-semibold">CYBERCOM-2024</span>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1">▸</span>
                  <span className="text-gray-300">
                    Mentored students and facilitated technical workshops on web development and
                    competitive programming
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1">▸</span>
                  <span className="text-gray-300">
                    Fostered collaboration between academia and industry through networking events
                  </span>
                </li>
              </ul>
            </div>

            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
