import Navbar from '../Navbar';
import Hero from '../Hero';
import About from '../About';
import Skills from '../Skills';
import Projects from '../Projects';
import Experience from '../Experience';
import Achievements from '../Achievements';
import Leadership from '../Leadership';
import Contact from '../Contact';
import Footer from '../Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Leadership />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
