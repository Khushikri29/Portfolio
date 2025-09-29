import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Internship from "./components/Internship";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans bg-gray-50 text-gray-900">
      <Navbar />
      <Hero />
      <About />
      <Internship />
      <Projects />
      <Certifications />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
