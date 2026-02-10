import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Code2, FileType } from 'lucide-react';
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

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      { threshold: 0.6 }
    );

    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#achievements', label: 'Achievements' },
    { href: '#contact', label: 'Contact' },
  ];

  const resumeLink =
    'https://drive.google.com/file/d/1pBkZstZ-biEEUcMxF5JgUv9e2fRKADYw/view?usp=drive_link';

  const linkBase =
    'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200';

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg'
        : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#home" className="text-xl font-bold text-white">
            YK
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-2">
            {navLinks.map(link => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <motion.a
                  key={link.href}
                  href={link.href}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.96 }}
                  className={`${linkBase} ${isActive
                    ? 'bg-blue-600/20 text-blue-400'
                    : 'text-gray-300 hover:bg-blue-600/15 hover:text-blue-400'
                    }`}
                >
                  {link.label}
                </motion.a>
              );
            })}
          </div>

          {/* Desktop Icons */}
          <div className="hidden md:flex items-center space-x-2">
            {[
              { href: resumeLink, icon: <FileType size={20} />, label: 'Resume' },
              { href: 'https://github.com/yashkansal-dev', icon: <Github size={20} />, label: 'GitHub' },
              {
                href: 'https://www.linkedin.com/in/yashkansal-dev/',
                icon: <Linkedin size={20} />,
                label: 'LinkedIn',
              },
              {
                href: 'https://x.com/yashkansal_dev',
                icon: <X size={20} />,
                label: 'X',
              },
              {
                href: 'https://leetcode.com/u/YashKansal-dev/',
                icon: <Code2 size={20} />,
                label: 'LeetCode',
              },
            ].map(item => (
              <motion.a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="
                  p-2 rounded-lg text-gray-300
                  transition-all duration-200
                  hover:bg-blue-600/15 hover:text-blue-400
                "
                title={item.label}
              >
                {item.icon}
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="
                p-2 rounded-lg text-gray-300
                hover:bg-blue-600/15 hover:text-blue-400
                transition-all
              "
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="md:hidden bg-gray-900/95 backdrop-blur-sm"
        >
          <div className="px-3 pt-3 pb-4 space-y-1">
            {navLinks.map(link => (
              <motion.a
                key={link.href}
                href={link.href}
                whileTap={{ scale: 0.96 }}
                onClick={() => setIsOpen(false)}
                className="
                  block px-4 py-2 rounded-lg
                  text-gray-300 hover:bg-blue-600/15 hover:text-blue-400
                  transition-all
                "
              >
                {link.label}
              </motion.a>
            ))}

            {/* Mobile Icons */}
            <div className="flex items-center gap-3 px-4 pt-3">
              {[FileType, Github, Linkedin, Code2].map((Icon, i) => (
                <div className="flex items-center gap-3 px-4 pt-3">
                  {[
                    { href: resumeLink, Icon: FileType, label: 'Resume' },
                    { href: 'https://github.com/yashkansal-dev', Icon: Github, label: 'GitHub' },
                    {
                      href: 'https://www.linkedin.com/in/yashkansal-dev/',
                      Icon: Linkedin,
                      label: 'LinkedIn',
                    },
                    {
                      href: 'https://x.com/yashkansal_dev',
                      Icon: X,
                      label: 'X',
                    },
                    {
                      href: 'https://leetcode.com/u/YashKansal-dev/',
                      Icon: Code2,
                      label: 'LeetCode',
                    },
                  ].map(item => (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileTap={{ scale: 0.85 }}
                      className="p-2 rounded-lg text-gray-300 hover:bg-blue-600/15 hover:text-blue-400"
                      title={item.label}
                    >
                      <item.Icon size={20} />
                    </motion.a>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
