import { motion } from "framer-motion";
import { FiBriefcase } from "react-icons/fi";
import { experience } from "../data/resumeData";

export default function Experience() {
  return (
    <section id="experience" className="relative py-14 sm:py-25">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <p className="eyebrow mb-3">04 · Experience</p>
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Where I've <span className="gradient-text">worked</span>
          </h2>
        </motion.div>

        <div className="relative pl-9 sm:pl-12">
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            style={{ originY: 0 }}
            className="absolute left-3 top-1 h-full w-[2px] bg-gradient-to-b from-primary via-secondary to-accent sm:left-4"
          />

          <div className="space-y-12">
            {experience.map((job, i) => (
              <motion.div
                key={job.company}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, delay: i * 0.15 }}
                className="relative"
              >
                <span className="glass glow-primary absolute -left-9 top-1 flex h-8 w-8 items-center justify-center rounded-full text-primary sm:-left-12 sm:h-9 sm:w-9">
                  <FiBriefcase size={14} />
                </span>

                <div className="gradient-border rounded-2xl p-6 sm:p-7">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-display text-lg font-semibold text-text sm:text-xl">
                      {job.role}
                    </h3>
                    <span className="font-mono rounded-full bg-white/5 px-3 py-1 text-xs text-accent">
                      {job.period}
                    </span>
                  </div>
                  <p className="mt-1 text-sm font-medium text-primary">{job.company}</p>

                  <ul className="mt-4 space-y-2.5">
                    {job.points.map((point) => (
                      <li key={point} className="flex gap-2.5 text-sm leading-relaxed text-muted">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-primary to-accent" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
