import { ArrowDown, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section
      id="home"
      className="
        min-h-screen
        flex items-center
        bg-gradient-to-br
        from-gray-900
        via-gray-800
        to-gray-900
        relative
        overflow-hidden
      "
    >
      {/* Background glow accents */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.12),transparent_45%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(16,185,129,0.10),transparent_45%)]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT — TEXT */}
          <div className="text-center lg:text-left">
            <span className="
              inline-block
              px-4 py-2
              mb-6
              rounded-full
              bg-blue-500/10
              border border-blue-500/20
              text-blue-400
              text-sm
              font-medium
            ">
              Software Engineer
            </span>

            <h1 className="
              text-5xl
              sm:text-6xl
              md:text-7xl
              lg:text-8xl
              font-bold
              text-white
              leading-tight
              mb-6
            ">
              YASH
              <br />
              KANSAL
            </h1>

            <p className="text-lg md:text-xl text-gray-300 max-w-xl mb-4">
              Building real-world software that scales, performs, <br></br>and creates impact
            </p>

            <p className="text-gray-400 max-w-xl mb-10">
              Computer Science undergraduate specializing in production-ready web applications,
              real-time systems, and AI-driven solutions
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#projects"
                className="
                  px-8 py-3
                  rounded-lg
                  bg-blue-600
                  hover:bg-blue-700
                  text-white
                  font-medium
                  transition-all
                  duration-300
                "
              >
                View My Work
              </a>

              <a
                href="#contact"
                className="
                  px-8 py-3
                  rounded-lg
                  border-2 border-gray-600
                  hover:border-blue-500
                  text-white
                  font-medium
                  flex items-center gap-2
                  transition-all
                  duration-300
                "
              >
                <Mail size={18} />
                Get In Touch
              </a>
            </div>
          </div>

          {/* RIGHT — IMAGE */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Glow */}
            <div
              className="
                absolute
                -inset-8
                rounded-full
                bg-blue-500/20
                blur-3xl
              "
            />

            {/* Image wrapper */}
            <div
              className="
                relative
                w-64
                h-64
                sm:w-72
                sm:h-72
                lg:w-80
                lg:h-80
                rounded-2xl
                overflow-hidden
                border border-white/10
                shadow-xl
                transition-transform
                duration-500
                hover:scale-105
              "
            >
              <img
                src="/images/ykansal.png"
                alt="Yash Kansal"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-20 flex justify-center">
          <a
            href="#about"
            className="text-gray-400 hover:text-white transition-colors animate-bounce"
          >
            <ArrowDown size={32} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
