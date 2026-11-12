<<<<<<< HEAD
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
=======

import { useState } from "react";
import "./App.css";

function App() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const projects = [
    {
      title: "Paete Budget Hub",
      category: "Web Application",
      description:
        "A departmental budget workflow system designed to improve budget preparation, finance review, and approval for the Municipality of Paete.",
      technologies: ["Laravel", "PHP", "MySQL"],
      status: "Academic Project",
    },
    {
      title: "CheckPoint",
      category: "Public Transportation",
      description:
        "A transportation information project designed to help commuters access live bus arrival information in the Philippines.",
      technologies: ["UI/UX", "Web Development"],
      status: "Academic Project",
    },
    {
      title: "FurSure",
      category: "UI/UX Design",
      description:
        "A mobile app concept connecting people with adoptable pets, animal rescue opportunities, and nearby shelters.",
      technologies: ["Figma", "Prototyping"],
      status: "Academic Project",
    },
    {
      title: "CanteenTrack",
      category: "Business Management System",
      description:
        "A planned cafeteria monitoring system for tracking sales, expenses, and monthly profitability.",
      technologies: ["React", "TypeScript", "Database Design"],
      status: "In Progress",
    },
  ];

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "PHP",
    "Laravel",
    "MySQL",
    "Firebase",
    "Figma",
    "Git",
    "GitHub",
  ];

  return (
    <main data-theme={theme}>
      <nav className="navbar">
        <a href="#home" className="logo">
          NIEL FRANZ <span>Pampolina.</span>
        </a>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <button
          className="theme-button"
          onClick={() =>
            setTheme(theme === "light" ? "dark" : "light")
          }
          aria-label="Toggle color theme"
        >
          {theme === "light" ? "☾" : "☀"}
        </button>
      </nav>

      <section className="hero section-container" id="home">
        <div className="hero-content">
          <p className="eyebrow">HELLO, I'M</p>

          <h1>
            Niel Franz
            <br />
            <span>Pampolina.</span>
          </h1>

          <h2>IT Student & Aspiring Full-Stack Developer</h2>

          <p className="hero-description">
            I enjoy designing and building digital experiences
            through technology, creativity, and continuous learning.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="button-primary">
              Explore My Projects ↗
            </a>

            <a href="#contact" className="button-secondary">
              Contact Me
            </a>
          </div>
        </div>

        <div className="profile-container">
          <img
            src="/images/900ABE66-5801-4F10-BD82-293D31088D60_4_5005_c.jpeg"
            alt="Portrait of Niel Franz Pampolina"
            className="profile-image"
          />
        </div>
      </section>

      <section className="section-container about" id="about">
        <p className="eyebrow">GET TO KNOW ME</p>
        <h2 className="section-title">About Me</h2>

        <p className="section-description">
          I am a fourth-year Bachelor of Science in Information
          Technology student at National University–Laguna.
          I am interested in full-stack development, web
          technologies, and UI/UX design. I enjoy turning ideas
          into practical digital solutions while continuously
          improving my technical skills.
        </p>
      </section>

      <section className="section-container" id="skills">
        <p className="eyebrow">WHAT I WORK WITH</p>
        <h2 className="section-title">Technical Skills</h2>

        <div className="skills-grid">
          {skills.map((skill) => (
            <div className="skill-item" key={skill}>
              {skill}
            </div>
          ))}
        </div>
      </section>

      <section className="section-container" id="projects">
        <p className="eyebrow">MY RECENT WORK</p>
        <h2 className="section-title">Featured Projects</h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-top">
                <span>{project.category}</span>
                <span className="project-status">
                  {project.status}
                </span>
              </div>

              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="technology-list">
                {project.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-container contact" id="contact">
        <p className="eyebrow">LET'S CONNECT</p>
        <h2 className="section-title">
          Have a project in mind?
        </h2>

        <p className="section-description">
          I am open to internship opportunities, collaboration,
          and learning experiences.
        </p>

        <a
          href="mailto:YOUR_EMAIL@example.com"
          className="button-primary"
        >
          Get in Touch ↗
        </a>
      </section>

      <footer className="footer">
        <p>© 2026 Niel Franz Pampolina. Built with React & TypeScript.</p>
      </footer>
    </main>
  );
}

export default App;
>>>>>>> 040dc3464fbce2e2b7226faa0c592f596a97793e
