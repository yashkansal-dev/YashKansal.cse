const Footer = () => {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Left — copyright */}
          <p className="text-gray-400 text-sm">
            Copyright © 2026
          </p>

          {/* Right — branding */}
          <p className="text-gray-400 text-sm">
            Design &amp; Development by{' '}
            <a
              href="https://www.linkedin.com/in/yashkansal-dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-brand-link"
            >
              Yash Kansal
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
