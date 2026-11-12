import Navbar from "./components/Navbar";
import Hero from "./Sections/Hero";
import About from "./Sections/About";
import Skills from "./Sections/Skills";
import Project from "./Sections/Project";
import Contact from "./Sections/Contact";
import { site } from "./data/site";

export default function App() {
  return (
    <>
      <a className="skip" href="#about">Skip to content</a>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Project />
        <Contact />
      </main>
      <footer className="wrap footer">© 2026 {site.name}</footer>
    </>
  );
}
