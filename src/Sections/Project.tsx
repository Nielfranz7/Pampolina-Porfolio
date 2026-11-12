import { projects } from "../data/site";

export default function Project() {
  return (
    <section className="wrap section" id="projects" aria-labelledby="projects-title">
      <h2 id="projects-title">Projects</h2>
      <div className="projects">
        {projects.map((p) => (
          <article className="project" key={p.title}>
            <div className="project-meta">
              <h3>{p.title}</h3>
              <p>{p.role}</p>
              <small>{p.status}</small>
            </div>
            <div>
              <p>{p.summary}</p>
              <ul className="stack">
                {p.stack.map((t) => <li key={t}>{t}</li>)}
              </ul>
              {p.href && <a href={p.href} className="text-link" target="_blank" rel="noreferrer">View project</a>}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
