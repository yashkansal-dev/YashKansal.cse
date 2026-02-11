import { useState, useEffect } from 'react';
import { Home, User, Wrench, FolderOpen, Briefcase, Award, Mail, Github, Linkedin, Code2, FileType } from 'lucide-react';
import { motion } from 'framer-motion';

const sections = [
  'home',
  'about',
  'skills',
  'projects',
  'experience',
  'achievements',
  'contact',
];

const navItems = [
  { href: '#home', label: 'Home', icon: Home },
  { href: '#about', label: 'About', icon: User },
  { href: '#skills', label: 'Skills', icon: Wrench },
  { href: '#projects', label: 'Projects', icon: FolderOpen },
  { href: '#experience', label: 'Experience', icon: Briefcase },
  { href: '#achievements', label: 'Achievements', icon: Award },
  { href: '#contact', label: 'Contact', icon: Mail },
];

const resumeLink =
  'https://drive.google.com/file/d/1pBkZstZ-biEEUcMxF5JgUv9e2fRKADYw/view?usp=drive_link';

/* Custom X (Twitter) logo — renders the 𝕏 mark instead of the old bird */
const XIcon = ({ size = 22 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4l6.5 8L4 20h2l5.5-6.8L16 20h4l-6.8-8.5L19.5 4H18l-5 6.2L9 4H4z" />
  </svg>
);

const socialIcons = [
  { href: resumeLink, icon: FileType, label: 'Resume', custom: false },
  { href: 'https://github.com/yashkansal-dev', icon: Github, label: 'GitHub', custom: false },
  { href: 'https://www.linkedin.com/in/yashkansal-dev/', icon: Linkedin, label: 'LinkedIn', custom: false },
  { href: 'https://leetcode.com/u/YashKansal-dev/', icon: Code2, label: 'LeetCode', custom: false },
  { href: 'https://x.com/yashkansal_dev', icon: XIcon, label: 'X', custom: true },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');

  // Active section observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.35 }
    );

    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ─── Top header bar: Social icons (right) ─── */}
      <div className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex items-center justify-end">
          {/* Social icons — top-right */}
          <div className="pointer-events-auto flex items-center gap-3">
            {socialIcons.map(item => (
              <motion.a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                className="
                  p-2.5 rounded-xl text-gray-400
                  transition-all duration-200
                  hover:bg-white/10 hover:text-white
                  hover:shadow-[0_0_16px_rgba(255,255,255,0.08)]
                "
                title={item.label}
              >
                {item.custom
                  ? <item.icon size={22} />
                  : <item.icon size={22} strokeWidth={1.8} />
                }
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* ─── Bottom fixed navigation pill ─── */}
      <nav
        className="
          fixed bottom-6 z-50
          left-1/2 -translate-x-1/2
          bg-gray-900/80 backdrop-blur-xl
          border border-white/10
          rounded-full
          shadow-2xl shadow-black/40
          px-2 py-2
        "
      >
        <div className="flex items-center gap-1">
          {navItems.map(item => {
            const isActive = activeSection === item.href.replace('#', '');
            const Icon = item.icon;
            return (
              <motion.a
                key={item.href}
                href={item.href}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.92 }}
                className={`
                  relative flex items-center gap-1.5
                  px-3 py-2 rounded-full
                  text-xs font-semibold
                  transition-all duration-200
                  ${isActive
                    ? 'bg-blue-600/90 text-white shadow-lg shadow-blue-600/25'
                    : 'text-gray-400 hover:text-white hover:bg-white/10'
                  }
                `}
                title={item.label}
              >
                <Icon size={15} strokeWidth={2.2} />
                <span className="hidden sm:inline">{item.label}</span>
              </motion.a>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
