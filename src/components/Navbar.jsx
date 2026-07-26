import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi";
import { navLinks, personal } from "../data/resumeData";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? "glass py-3 shadow-lg shadow-black/20" : "bg-transparent py-5"
        }`}
      >
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 sm:px-8">
          <Link
            to="hero"
            smooth
            duration={600}
            className="font-display cursor-pointer text-lg font-semibold tracking-tight sm:text-xl"
          >
            <span className="gradient-text">Aniket.dev</span>
          </Link>

          <ul className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  smooth
                  duration={600}
                  spy
                  offset={-90}
                  onSetActive={() => setActive(link.to)}
                  className={`font-mono relative cursor-pointer text-sm transition-colors hover:text-primary ${
                    active === link.to ? "text-primary" : "text-muted"
                  }`}
                >
                  {link.name}
                  {active === link.to && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute -bottom-1.5 left-0 h-[2px] w-full bg-gradient-to-r from-primary to-accent"
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            to="contact"
            smooth
            duration={600}
            className="hidden cursor-pointer rounded-full bg-gradient-to-r from-primary to-secondary px-5 py-2 text-sm font-medium text-white shadow-lg shadow-primary/20 transition-transform hover:scale-105 lg:inline-block"
          >
            Let's Talk
          </Link>

          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="text-text focus:outline-none focus-visible:ring-2 focus-visible:ring-primary lg:hidden"
          >
            {open ? <FiX size={26} /> : <FiMenu size={26} />}
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="glass fixed inset-x-0 top-[64px] z-40 overflow-hidden lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 py-6">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.to}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={link.to}
                    smooth
                    duration={600}
                    offset={-70}
                    onClick={() => setOpen(false)}
                    className="font-mono block cursor-pointer py-3 text-base text-muted hover:text-primary"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
              <li className="pt-2">
                <a
                  href={`https://wa.me/${personal.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-full bg-gradient-to-r from-primary to-secondary px-5 py-2.5 text-sm font-medium text-white"
                >
                  Let's Talk
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
