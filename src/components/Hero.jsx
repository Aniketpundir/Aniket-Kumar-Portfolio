import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Link } from "react-scroll";
import { FiDownload, FiArrowDown } from "react-icons/fi";
import { HiOutlineSparkles } from "react-icons/hi2";
import { personal } from "../data/resumeData";
import profileImg from "../assets/images/profile-alt.jpeg";
import ParticleField from "./ParticleField";

const roles = ["MERN Stack Developer", "React.js Engineer",];

function useTypewriter(words, speed = 70, pause = 1400) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    let timeout;

    if (!deleting && text.length < current.length) {
      timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), speed);
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => setText(current.slice(0, text.length - 1)), speed / 2);
    } else if (deleting && text.length === 0) {
      setDeleting(false);
      setWordIndex((w) => w + 1);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, speed, pause]);

  return text;
}

export default function Hero() {
  const typed = useTypewriter(roles);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 50, damping: 20 });
  const sy = useSpring(my, { stiffness: 50, damping: 20 });
  const blobX = useTransform(sx, (v) => v * 30);
  const blobY = useTransform(sy, (v) => v * 30);
  const cardRotateX = useTransform(sy, (v) => v * -6);
  const cardRotateY = useTransform(sx, (v) => v * 6);

  const handleMouseMove = (e) => {
    const { innerWidth, innerHeight } = window;
    mx.set((e.clientX - innerWidth / 2) / innerWidth);
    my.set((e.clientY - innerHeight / 2) / innerHeight);
  };

  return (
    <section
      id="hero"
      onMouseMove={handleMouseMove}
      className="relative flex min-h-screen items-center overflow-hidden pt-30 pb-5 sm:pt-25"
    >
      <ParticleField count={36} />
      {/* Floating gradient blobs */}
      <motion.div
        style={{ x: blobX, y: blobY }}
        className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-primary/25 blur-[100px]"
      />
      <motion.div
        style={{ x: useTransform(blobX, (v) => -v), y: useTransform(blobY, (v) => -v) }}
        className="pointer-events-none absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-secondary/25 blur-[110px]"
      />
      <div className="pointer-events-none absolute right-1/3 top-1/2 h-56 w-56 rounded-full bg-accent/15 blur-[90px]" />

      {/* Floating decorative shapes */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="pointer-events-none absolute hidden rounded-lg border border-white/10 sm:block"
          style={{
            width: 14 + i * 6,
            height: 14 + i * 6,
            left: `${10 + i * 18}%`,
            top: `${15 + (i % 3) * 25}%`,
          }}
          animate={{ y: [0, -20, 0], rotate: [0, 90, 0] }}
          transition={{ duration: 6 + i, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      <div className="relative z-10 mx-auto grid max-w-6xl gap-14 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-10">
        {/* Left: intro text */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass eyebrow mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5"
          >
            <HiOutlineSparkles className="text-accent" />
            Available for new opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl"
          >
            Hey, I'm <span className="gradient-text">{personal.name.split(" ")[0]}</span>
            <br />
            I build for the web.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="font-mono mt-5 flex h-7 items-center text-base text-muted sm:text-lg"
          >
            <span className="mr-2 text-primary">{">"}</span>
            <span>{typed}</span>
            <span className="ml-0.5 inline-block h-5 w-[2px] animate-pulse bg-accent" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted"
          >
            {personal.tagline} Based in {personal.location}, I turn ideas and
            Figma files into pixel-perfect, performant interfaces.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Link
              to="contact"
              smooth
              duration={600}
              className="group relative inline-flex cursor-pointer items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-primary to-secondary px-6 py-3 text-sm font-medium text-white shadow-lg shadow-primary/30 transition-transform hover:scale-105"
            >
              Hire Me
            </Link>
            <a
              href={personal.resumeFile}
              download
              className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-text transition-transform hover:scale-105 hover:text-primary"
            >
              <FiDownload /> Download Resume
            </a>
          </motion.div>
        </div>

        {/* Right: signature code-editor panel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          style={{ rotateX: cardRotateX, rotateY: cardRotateY, transformPerspective: 1000 }}
          className="gradient-border glow-primary relative mx-auto w-full max-w-md overflow-hidden rounded-2xl shadow-2xl"
        >
          <div className="flex items-center gap-2 border-b border-white/10 bg-black/30 px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-red-400/80" />
            <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
            <span className="h-3 w-3 rounded-full bg-green-400/80" />
            <span className="font-mono ml-3 text-xs text-muted">aniket.dev.js</span>
          </div>

          <div className="p-6 font-mono text-[13px] leading-6 sm:text-sm">
            <p><span className="text-secondary">const</span> <span className="text-accent">developer</span> = {"{"}</p>
            <p className="pl-4">name: <span className="text-primary">"{personal.name}"</span>,</p>
            <p className="pl-4">role: <span className="text-primary">"{personal.role}"</span>,</p>
            <p className="pl-4">stack: [<span className="text-primary">"React"</span>, <span className="text-primary">"Node"</span>, <span className="text-primary">"MongoDB"</span>],</p>
            <p className="pl-4">location: <span className="text-primary">"Muzaffarnagar, IN"</span>,</p>
            <p className="pl-4">
              hireable: <span className="text-accent">true</span>
            </p>
            <p>{"}"}</p>
          </div>

          <div className="relative mx-6 mb-6 overflow-hidden rounded-xl border border-white/10">
            <img
              src={profileImg}
              alt={`${personal.name}, ${personal.role}`}
              className="h-56 w-full object-cover object-top sm:h-64"
              loading="eager"
              width={480}
              height={480}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg/60 via-transparent to-transparent" />
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex"
      >
        <Link to="about" smooth duration={600} className="cursor-pointer">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity }}
            className="glass flex h-10 w-10 items-center justify-center rounded-full text-muted"
          >
            <FiArrowDown />
          </motion.div>
        </Link>
      </motion.div>
    </section>
  );
}
