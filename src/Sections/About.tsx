import { certifications } from "../data/site";

export default function About() {
  return (
    <section className="wrap section" id="about" aria-labelledby="about-title">
      <h2 id="about-title">About</h2>
      <div className="split">
        <div className="prose">
          <p>
            I started in STEM at Trace College and moved into Information Technology at National
            University–Laguna in 2023. Since then I’ve worked on every side of a project: leading
            a thesis team, designing app screens, and testing software before it reaches users.
          </p>
          <p>
            I like work where a clear interface sits on top of a well-organized database, and I
            want to keep growing in both.
          </p>
        </div>
        <div>
          <h3>Certifications</h3>
          <ul className="certs">
            {certifications.map((c) => (
              <li key={c.name}>
                <span>{c.name}</span>
                <small>{c.by}, {c.year}</small>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
