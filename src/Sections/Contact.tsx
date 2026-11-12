import { site } from "../data/site";

export default function Contact() {
  return (
    <section className="wrap section" id="contact" aria-labelledby="contact-title">
      <h2 id="contact-title">Contact</h2>
      <p className="lead">
        I’m available for an IT internship and happy to talk about web development, UI/UX, or QA roles.
      </p>
      <div className="actions">
        {site.email && <a href={`mailto:${site.email}`} className="btn primary">Email me</a>}
        {site.linkedin && <a href={site.linkedin} className="btn" target="_blank" rel="noreferrer">LinkedIn</a>}
        {site.github && <a href={site.github} className="btn" target="_blank" rel="noreferrer">GitHub</a>}
      </div>
    </section>
  );
}
