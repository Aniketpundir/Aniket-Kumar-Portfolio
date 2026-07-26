import { useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { projects } from "../data/resumeData";

const images = import.meta.glob("../assets/projects/*.png", { eager: true, import: "default" });

function getImage(key) {
  const match = Object.entries(images).find(([path]) => path.includes(`/${key}.png`));
  return match ? match[1] : null;
}

function ProjectCard({ project, index }) {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: py * -8, y: px * 8 });
  };

  const resetTilt = () => setTilt({ x: 0, y: 0 });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: (index % 3) * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTilt}
      style={{
        transform: `perspective(900px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: "transform 0.15s ease-out",
      }}
      className="gradient-border group flex flex-col overflow-hidden rounded-2xl"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-black/30">
        {getImage(project.image) && (
          <img
            src={getImage(project.image)}
            alt={`${project.name} screenshot`}
            loading="lazy"
            className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/10 to-transparent opacity-70 transition-opacity group-hover:opacity-90" />
        <div className="absolute bottom-3 left-4 flex flex-wrap gap-1.5">
          {project.tech.slice(0, 3).map((t) => (
            <span
              key={t}
              className="font-mono glass rounded-full px-2.5 py-0.5 text-[10px] text-accent"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-lg font-semibold text-text">{project.name}</h3>
        <p className="font-mono mt-0.5 text-xs text-primary">{project.subtitle}</p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{project.description}</p>

        <ul className="mt-4 space-y-1.5">
          {project.features.slice(0, 2).map((f) => (
            <li key={f} className="flex gap-2 text-xs text-muted">
              <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-accent" />
              {f}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="glass flex flex-1 items-center justify-center gap-2 rounded-full py-2 text-xs font-medium text-text transition-colors hover:text-primary"
          >
            <FiGithub /> Code
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-secondary py-2 text-xs font-medium text-white transition-transform hover:scale-105"
          >
            <FiExternalLink /> Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const techFilters = useMemo(() => {
    const set = new Set();
    projects.forEach((p) => p.tech.forEach((t) => set.add(t)));
    return ["All", ...Array.from(set)];
  }, []);
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All" ? projects : projects.filter((p) => p.tech.includes(filter));

  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <p className="eyebrow mb-3">03 · Projects</p>
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Things I've <span className="gradient-text">built</span>
          </h2>
        </motion.div>

        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {techFilters.map((t) => (
            <button
              key={t}
              onClick={() => setFilter(t)}
              className={`font-mono rounded-full px-4 py-1.5 text-xs transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                filter === t
                  ? "bg-gradient-to-r from-primary to-secondary text-white"
                  : "glass text-muted hover:text-text"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project, i) => (
            <ProjectCard project={project} index={i} key={project.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
