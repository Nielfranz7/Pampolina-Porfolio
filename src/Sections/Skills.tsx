import { skills } from "../data/site";

export default function Skills() {
  return (
    <section className="wrap section" id="skills" aria-labelledby="skills-title">
      <h2 id="skills-title">Skills</h2>
      <dl className="skills">
        {skills.map((s) => (
          <div key={s.group}>
            <dt>{s.group}</dt>
            <dd>{s.items.join(", ")}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
