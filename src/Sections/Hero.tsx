import { site } from "../data/site";

export default function Hero() {
  return (
    <section className="wrap hero" id="home" aria-labelledby="hero-title">
      <div>
        <p className="status"><span className="dot" aria-hidden="true" />Open to IT internships</p>
        <h1 id="hero-title">{site.name}</h1>
        <p className="lead">
          I’m a fourth-year IT student who builds web apps with Laravel and React and designs
          the interfaces in Figma. I’m looking for an internship where I can do both on a real team.
        </p>
        <div className="actions">
          <a href="#projects" className="btn primary">View projects</a>
          <a href="#contact" className="btn">Contact me</a>
          {site.resume && <a href={site.resume} className="btn" download>Download resume</a>}
        </div>
      </div>
      <figure className="portrait">
        <img src="/images/profile.jpeg" width={300} height={300} alt="Portrait of Niel Franz Pampolina" fetchPriority="high" />
        <dl>
          <div><dt>Studying</dt><dd>BS Information Technology, National University–Laguna</dd></div>
          <div><dt>Based in</dt><dd>Calamba, Laguna, Philippines</dd></div>
          <div><dt>Focus</dt><dd>Web development and UI/UX design</dd></div>
        </dl>
      </figure>
    </section>
  );
}
