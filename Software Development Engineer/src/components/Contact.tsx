import { Mail, Linkedin, Github, Code2, Twitter, ExternalLink } from 'lucide-react';

const Contact = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      username: '@Kansal-ji',
      url: 'https://github.com/Kansal-ji',
      icon: <Github size={24} />,
      color: 'from-gray-600 to-gray-700',
      hoverColor: 'hover:border-gray-400',
    },
    {
      name: 'LinkedIn',
      username: 'Yash Kansal',
      url: 'https://www.linkedin.com/in/yash-kansal-829343297/',
      icon: <Linkedin size={24} />,
      color: 'from-blue-600 to-blue-700',
      hoverColor: 'hover:border-blue-400',
    },
    {
      name: 'LeetCode',
      username: '@KANSALJI_KJ',
      url: 'https://leetcode.com/u/KANSALJI_KJ/',
      icon: <Code2 size={24} />,
      color: 'from-orange-600 to-orange-700',
      hoverColor: 'hover:border-orange-400',
    },
    {
      name: 'X (Twitter)',
      username: '@kansal_cse',
      url: 'https://x.com/kansal_cse',
      icon: <Twitter size={24} />,
      color: 'from-cyan-700 to-cyan-800',
      hoverColor: 'hover:border-cyan-400',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Let's Connect</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Open to exciting opportunities and collaborations. Feel free to reach out!
          </p>
        </div>

        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700 p-8 lg:p-12 mb-12">
          <div className="text-center mb-8">
            <div className="inline-block p-4 bg-blue-500/20 rounded-full mb-4">
              <Mail size={32} className="text-blue-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Get In Touch</h3>
            <p className="text-gray-400">
              If you’re looking for a motivated developer with strong problem-solving skills, let’s connect.
            </p>
          </div>

          <div className="flex justify-center">
            <a
              href="maito:yashkansal.cse@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-200 text-lg"
            >
              <ExternalLink size={20} />
              Connect With Me
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`bg-gray-800/50 backdrop-blur-sm rounded-xl border-2 border-gray-700 ${link.hoverColor} p-6 transition-all duration-300 hover:scale-105 group`}
            >
              <div className="flex flex-col items-center text-center">
                <div
                  className={`p-4 bg-gradient-to-br ${link.color} rounded-full mb-4 group-hover:scale-110 transition-transform`}
                >
                  <div className="text-white">{link.icon}</div>
                </div>
                <h4 className="font-bold text-white mb-1">{link.name}</h4>
                <p className="text-sm text-gray-400">{link.username}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-4">
            I’m open to software engineering roles, internships, full-time roles and collaborative projects.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Full Stack Development', 'Real-Time Systems', 'Cloud Architecture', 'AI/ML Models'].map(
              (interest, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-full text-sm text-gray-300"
                >
                  {interest}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
