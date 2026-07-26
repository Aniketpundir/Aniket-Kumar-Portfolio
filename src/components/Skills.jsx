import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { FiSearch } from "react-icons/fi";
import { skills } from "../data/resumeData";

export default function Skills() {
  const [query, setQuery] = useState("");

  const categories = useMemo(() => ["All", ...skills.map((s) => s.category)], []);
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = skills
    .filter((group) => activeCategory === "All" || group.category === activeCategory)
    .map((group) => ({
      ...group,
      items: group.items.filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase())
      ),
    }))
    .filter((group) => group.items.length > 0);

  return (
    <section id="skills" className="relative py-10 sm:py-15">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <p className="eyebrow mb-3">02 · Skills</p>
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Tools I <span className="gradient-text">reach for</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="mb-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-between"
        >
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-mono rounded-full px-4 py-1.5 text-xs transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                  activeCategory === cat
                    ? "bg-gradient-to-r from-primary to-secondary text-white"
                    : "glass text-muted hover:text-text"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="glass flex w-full max-w-xs items-center gap-2 rounded-full px-4 py-2 sm:w-64">
            <FiSearch className="text-muted" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search a skill..."
              aria-label="Search skills"
              className="w-full bg-transparent text-sm text-text placeholder:text-muted focus:outline-none"
            />
          </div>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: gi * 0.08 }}
              whileHover={{ y: -6 }}
              className="gradient-border group rounded-2xl p-6 transition-shadow hover:shadow-2xl hover:shadow-primary/10"
            >
              <h3 className="font-display mb-5 text-lg font-semibold text-text">
                {group.category}
              </h3>
              <div className="space-y-4">
                {group.items.map((item, i) => (
                  <div key={item.name}>
                    <div className="mb-1.5 flex items-center justify-between text-sm">
                      <span className="text-muted group-hover:text-text transition-colors">
                        {item.name}
                      </span>
                      <span className="font-mono text-xs text-accent">{item.level}%</span>
                    </div>
                    <div className="skill-progress-track h-1.5 w-full overflow-hidden rounded-full">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.level}%` }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 1, delay: i * 0.08, ease: "easeOut" }}
                        className="h-full rounded-full bg-gradient-to-r from-primary via-secondary to-accent"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
          {filtered.length === 0 && (
            <p className="col-span-full text-center text-muted">No skills match "{query}".</p>
          )}
        </div>
      </div>
    </section>
  );
}
