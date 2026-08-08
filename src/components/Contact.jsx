import { motion } from "framer-motion";
import {
  FiMail,
  FiPhone,
  FiGithub,
  FiLinkedin,
  FiMapPin,
  FiDownload,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { personal } from "../data/resumeData";

const cards = [
  {
    icon: FiMail,
    label: "Email",
    value: personal.email,
    href: `mailto:${personal.email}`,
  },
  {
    icon: FiPhone,
    label: "Mobile",
    value: personal.phone,
    href: `tel:${personal.phone.replace(/\s/g, "")}`,
  },
  {
    icon: FiGithub,
    label: "GitHub",
    value: "@Aniketpundir",
    href: personal.github,
  },
  {
    icon: FiLinkedin,
    label: "LinkedIn",
    value: "i-am-aniket-kumar",
    href: personal.linkedin,
  },
  {
    icon: FiMapPin,
    label: "Location",
    value: personal.location,
    href: null,
  },
  {
    icon: FiDownload,
    label: "Resume",
    value: "Download PDF",
    href: personal.resumeFile,
    download: true,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-15 sm:py-25">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="mb-6 text-center"
        >
          <p className="eyebrow mb-3">06 · Contact</p>
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Let's build something <span className="gradient-text">great</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted">
            Open to freelance work and full-time roles. The fastest
            way to reach me is WhatsApp.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12 flex justify-center"
        >
          <a
            href={`https://wa.me/${personal.whatsapp}?text=${encodeURIComponent(
              "Hi Aniket, I saw your portfolio and would like to connect."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#25D366] to-emerald-500 px-7 py-3.5 font-medium text-white shadow-lg shadow-emerald-500/30 transition-transform hover:scale-105"
          >
            <FaWhatsapp size={20} className="transition-transform group-hover:rotate-12" />
            Chat on WhatsApp
          </a>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, i) => {
            const Icon = card.icon;
            const content = (
              <>
                <span className="glass flex h-11 w-11 items-center justify-center rounded-full text-primary transition-colors group-hover:text-accent">
                  <Icon size={18} />
                </span>
                <div className="min-w-0">
                  <p className="font-mono text-xs uppercase tracking-wide text-muted">
                    {card.label}
                  </p>
                  <p className="truncate text-sm font-medium text-text">{card.value}</p>
                </div>
              </>
            );

            const className =
              "gradient-border group flex items-center gap-4 rounded-2xl p-5 transition-transform hover:-translate-y-1";

            return (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
              >
                {card.href ? (
                  <a
                    href={card.href}
                    download={card.download || undefined}
                    target={card.href.startsWith("http") ? "_blank" : undefined}
                    rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className={className}
                  >
                    {content}
                  </a>
                ) : (
                  <div className={className}>{content}</div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
