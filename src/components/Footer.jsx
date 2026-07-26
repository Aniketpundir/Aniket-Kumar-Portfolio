import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { Link } from "react-scroll";
import { personal } from "../data/resumeData";

const socials = [
  { icon: FiGithub, href: personal.github, label: "GitHub" },
  { icon: FiLinkedin, href: personal.linkedin, label: "LinkedIn" },
  { icon: FiMail, href: `mailto:${personal.email}`, label: "Email" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-10">
      <div className="mx-auto flex justify-center  max-w-6xl flex-col items-center gap-6 px-5 sm:flex-row sm:justify-between sm:px-8">
        <Link
          to="hero"
          smooth
          duration={600}
          className="font-display cursor-pointer text-lg font-semibold"
        >
          <span className="gradient-text">Aniket.dev</span>
        </Link>

        <div className="flex items-center gap-4">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              aria-label={s.label}
              className="glass flex h-9 w-9 items-center justify-center rounded-full text-muted transition-colors hover:text-primary"
            >
              <s.icon size={15} />
            </a>
          ))}
        </div>

        <p className="font-mono text-xs text-muted">
          © {new Date().getFullYear()} {personal.name}. Built with React & Tailwind.
        </p>
      </div>
    </footer>
  );
}
