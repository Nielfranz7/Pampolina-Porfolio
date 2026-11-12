import { site } from "../data/site";
import ThemeToggle from "./ThemeToggle";

const links = [
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Projects", "#projects"],
  ["Contact", "#contact"],
];

export default function Navbar() {
  return (
    <header className="nav">
      <div className="wrap nav-inner">
        <a href="#home" className="logo">{site.name}</a>
        <nav aria-label="Primary">
          {links.map(([label, href]) => (
            <a key={href} href={href}>{label}</a>
          ))}
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
