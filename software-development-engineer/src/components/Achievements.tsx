import {
  CheckCircle,
  Database,
  Shield,
  ShieldCheck,
  Cloud,
  CloudCog,
  Code,
  Trophy,
  Award,
} from 'lucide-react';

/* ---------- TYPES ---------- */
type IconColor =
  | 'blue'
  | 'purple'
  | 'green'
  | 'teal'
  | 'orange'
  | 'red'
  | 'yellow'
  | 'indigo';

type Achievement = {
  title: string;
  organization: string;
  date: string;
  icon: React.ElementType;
  color: IconColor;
};

/* ---------- COMPONENT ---------- */
const Achievements = () => {
  const awsCertifications = [
    'AWS Cloud Practitioner Essentials',
    'Cloud basics, IAM, compute, storage, and networking',
    'AWS ML Engineer Associate – Data Transformation',
    '.NET Workloads on AWS Lambda (Includes Labs)',
    'AWS ML Engineer Associate (1.2) – Data transformation pipelines',
    'AWS Tools to Develop, Run, and Modernize .NET Workloads',
  ];

  const azureCertifications = [
    'Microsoft AZ-400 – Designing & Implementing DevOps Solutions',
    'Built CI/CD pipelines using Azure DevOps, Git repositories, and release workflows',
    'Applied DevOps best practices including infrastructure as code, monitoring, and automation',
  ];

  const otherAchievements: Achievement[] = [
    {
      title: 'MongoDB Advanced Schema Design & AI Agents',
      organization: 'MongoDB',
      date: '2025',
      icon: Database,
      color: 'blue',
    },
    {
      title: 'Introduction to Cybersecurity',
      organization: 'Cisco',
      date: '2025',
      icon: Shield,
      color: 'purple',
    },
    {
      title: 'MongoDB Atlas Networking & Security',
      organization: 'MongoDB',
      date: '2025',
      icon: ShieldCheck,
      color: 'green',
    },
    {
      title: 'Google Cloud Pub/Sub Skill Badge',
      organization: 'Google Cloud',
      date: '2025',
      icon: Cloud,
      color: 'teal',
    },
    {
      title: 'Shortlisted in Coding Assessment – HackOn with Amazon (Season 4)',
      organization: 'Amazon',
      date: '2024',
      icon: Code,
      color: 'red',
    },
    {
      title: 'Runner-up, HACK-O-HOLIC 2.0',
      organization: 'National-level Hackathon',
      date: '2023',
      icon: Trophy,
      color: 'yellow',
    },
    {
      title: 'Semi-finalist, G20 National Symposium',
      organization: 'G20 India',
      date: '2023',
      icon: Award,
      color: 'indigo',
    },
  ];

  const iconColors: Record<IconColor, string> = {
    blue: 'bg-blue-500',
    purple: 'bg-purple-500',
    green: 'bg-green-500',
    teal: 'bg-teal-500',
    orange: 'bg-orange-500',
    red: 'bg-red-500',
    yellow: 'bg-yellow-500',
    indigo: 'bg-indigo-500',
  };

  return (
    <section id="achievements" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Achievements & Certifications
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Industry-validated skills and competitive achievements
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* LEFT COLUMN */}
          <div className="space-y-8">
            {/* AWS */}
            <div className="bg-gradient-to-br from-orange-500/10 to-orange-600/5 backdrop-blur-sm rounded-2xl border border-orange-500/30 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-orange-500">
                  <Award className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">AWS Certifications</h3>
                  <p className="text-orange-400 font-medium">
                    7 Certifications (2025)
                  </p>
                </div>
              </div>

              <ul className="space-y-4">
                {awsCertifications.map((cert, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-2 w-2 h-2 bg-orange-400 rounded-full" />
                    <span className="text-gray-300">{cert}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* AZURE */}
            <div className="bg-gradient-to-br from-cyan-500/10 to-teal-600/5 backdrop-blur-sm rounded-2xl border border-cyan-500/30 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-cyan-500">
                  <CloudCog className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    Azure Certifications
                  </h3>
                  <p className="text-cyan-400 font-medium">
                    Enterprise DevOps (2025)
                  </p>
                </div>
              </div>

              <ul className="space-y-4">
                {azureCertifications.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-2 w-2 h-2 bg-cyan-400 rounded-full" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* ANGULAR (NEW SEPARATE CARD) */}
            <div className="bg-gradient-to-br from-red-500/10 to-rose-600/5 backdrop-blur-sm rounded-2xl border border-red-500/30 p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-red-500">
                  <CheckCircle className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    Angular Web Developer Certification
                  </h3>
                  <p className="text-red-400 font-medium">
                    Infosys (Wingspan) · June 2025
                  </p>
                </div>
              </div>

              <p className="text-gray-300">
                Hands-on certification covering Angular fundamentals, component-based architecture,
                routing, services, forms, and best practices for scalable frontend development.
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-4">
            {otherAchievements.map((achievement, index) => {
              const Icon = achievement.icon;

              return (
                <div
                  key={index}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 p-6 hover:border-gray-600 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-12 h-12 flex items-center justify-center rounded-xl ${
                        iconColors[achievement.color]
                      }`}
                    >
                      <Icon className="text-white" size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white">
                        {achievement.title}
                      </h4>
                      <p className="text-gray-400 text-sm">
                        {achievement.organization}
                      </p>
                      <p className="text-gray-500 text-sm">
                        {achievement.date}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
