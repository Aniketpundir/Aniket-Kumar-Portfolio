import { motion } from "framer-motion";
import { FiAward, FiCheckCircle } from "react-icons/fi";
import { HiOutlineAcademicCap } from "react-icons/hi2";
import { education, certifications } from "../data/resumeData";

const highlights = [
  "Shipped production features across two internships and Job (Bluestock Fintech, Velora Global Ventures)",
  "Built and shipped 6+ independent front-end and full-stack projects",
  "Comfortable owning a feature end-to-end: UI, API, and database",
];

export default function Education() {
  return (
    <section id="education" className="relative py-15 sm:py-25">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <p className="eyebrow mb-3">05 · Education & Certifications</p>
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Foundations & <span className="gradient-text">credentials</span>
          </h2>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Education timeline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
            className="gradient-border rounded-2xl p-6 sm:p-7 lg:col-span-2"
          >
            <h3 className="font-display mb-6 flex items-center gap-2 text-lg font-semibold text-text">
              <HiOutlineAcademicCap className="text-primary" /> Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, i) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.45, delay: i * 0.1 }}
                  className="relative border-l-2 border-white/10 pl-5"
                >
                  <span className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full bg-gradient-to-r from-primary to-accent" />
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="font-medium text-text">{edu.degree}</p>
                    <span className="font-mono text-xs text-accent">{edu.period}</span>
                  </div>
                  <p className="text-sm text-muted">{edu.institute}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications + highlights */}
          <div className="flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="gradient-border rounded-2xl p-6 sm:p-7"
            >
              <h3 className="font-display mb-5 flex items-center gap-2 text-lg font-semibold text-text">
                <FiAward className="text-primary" /> Certifications
              </h3>
              <div className="space-y-3">
                {certifications.map((cert) => (
                  <div key={cert.title} className="rounded-xl bg-white/5 p-4">
                    <p className="text-sm font-medium text-text">{cert.title}</p>
                    <p className="font-mono mt-1 text-xs text-accent">{cert.issuer}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="gradient-border rounded-2xl p-6 sm:p-7"
            >
              <h3 className="font-display mb-5 text-lg font-semibold text-text">Highlights</h3>
              <ul className="space-y-3">
                {highlights.map((h) => (
                  <li key={h} className="flex gap-2.5 text-sm leading-relaxed text-muted">
                    <FiCheckCircle className="mt-0.5 shrink-0 text-accent" />
                    {h}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
