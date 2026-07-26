import { motion } from "framer-motion";
import { FiMapPin, FiMail, FiBookOpen } from "react-icons/fi";
import { personal, stats, education } from "../data/resumeData";
import profileAlt from "../assets/images/profile.jpeg";
import Counter from "./Counter";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function About() {
  return (
    <section id="about" className="relative py-14 sm:py-10">
      <div className="mx-auto max-w-6xl px-1 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <p className="eyebrow mb-3">01 · About</p>
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            The person behind the <span className="gradient-text">code</span>
          </h2>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="relative mx-auto w-full max-w-sm"
          >
            <div className="gradient-border glow-secondary overflow-hidden rounded-2xl">
              <img
                src={profileAlt}
                alt={personal.name}
                className="h-full w-full object-cover"
                loading="lazy"
                width={480}
                height={600}
              />
            </div>
            <div className="glass absolute -bottom-6 -right-4 rounded-xl px-5 py-3 sm:-right-8">
              <p className="font-display text-lg font-semibold text-text">{personal.role}</p>
              <p className="font-mono text-xs text-muted">Frontend-leaning · Full-stack ready</p>
            </div>
          </motion.div>

          <div>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="gradient-border rounded-2xl p-6 sm:p-8"
            >
              <p className="leading-relaxed text-muted">{personal.summary}</p>

              <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div className="flex items-center gap-3 text-sm text-text">
                  <FiMapPin className="shrink-0 text-primary" />
                  {personal.location}
                </div>
                <div className="flex items-center gap-3 text-sm text-text">
                  <FiMail className="shrink-0 text-primary" />
                  {personal.email}
                </div>
                <div className="flex items-center gap-3 text-sm text-text sm:col-span-2">
                  <FiBookOpen className="shrink-0 text-primary" />
                  {education[0].degree} · {education[0].institute} ({education[0].period})
                </div>
              </div>
            </motion.div>

            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="glass rounded-xl px-4 py-5 text-center"
                >
                  <p className="font-display text-2xl font-bold text-primary sm:text-3xl">
                    <Counter value={s.value} />
                    {s.suffix}
                  </p>
                  <p className="font-mono mt-1 text-[11px] uppercase tracking-wide text-muted">
                    {s.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
