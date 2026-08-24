import { useState } from "react";
import {
  ArrowUp,
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  Code2,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const currentYear = new Date().getFullYear();

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email.trim()) return;

    setSubscribed(true);
    setEmail("");

    setTimeout(() => {
      setSubscribed(false);
    }, 4000);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const quickLinks = [
    {
      label: "Home",
      href: "#home",
    },
    {
      label: "About",
      href: "#about",
    },
    {
      label: "Services",
      href: "#services",
    },
    {
      label: "Portfolio",
      href: "#portfolio",
    },
    {
      label: "Contact",
      href: "#contact",
    },
  ];

  const services = [
    "Frontend Development",
    "Backend Development",
    "Full Stack Development",
    "API Development",
    "Database Development",
    "Web Applications",
  ];

  const socialLinks = [
    {
      icon: FaGithub,
      href: "https://github.com/",
      label: "GitHub",
    },
    {
      icon: FaLinkedinIn,
      href: "https://linkedin.com/",
      label: "LinkedIn",
    },
    {
      icon: FaInstagram,
      href: "https://instagram.com/",
      label: "Instagram",
    },
    {
      icon: FaFacebookF,
      href: "https://facebook.com/",
      label: "Facebook",
    },
    {
      icon: FaTwitter,
      href: "https://twitter.com/",
      label: "Twitter",
    },
  ];

  return (
    <footer className="relative overflow-hidden bg-slate-950 text-white">

      {/* =====================================================
          TOP DECORATIVE LINE
      ====================================================== */}

      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />

      {/* =====================================================
          BACKGROUND EFFECTS
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">

        <div
          className="
            absolute
            -left-40
            top-20
            h-[400px]
            w-[400px]
            rounded-full
            bg-blue-600/10
            blur-[100px]
          "
        />

        <div
          className="
            absolute
            -right-40
            bottom-20
            h-[400px]
            w-[400px]
            rounded-full
            bg-purple-600/10
            blur-[100px]
          "
        />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 md:px-10 lg:px-14 xl:px-20">

        {/* =====================================================
            CTA BANNER
        ====================================================== */}

        <div className="relative -mt-1 overflow-hidden rounded-b-[2rem] border-x border-b border-white/10 bg-white/[0.03] px-6 py-10 backdrop-blur-sm sm:px-10">

          <div className="relative z-10 flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">

            <div className="max-w-2xl">

              <div className="mb-3 flex items-center gap-2">

                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />

                <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-300">
                  Available for projects
                </span>

              </div>

              <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl md:text-4xl">
                Have an idea?
                <span className="ml-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Let's build it.
                </span>
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-6 text-slate-400">
                Let's turn your idea into a modern, scalable and
                high-performing digital product.
              </p>

            </div>

            <a
              href="#contact"
              className="
                group
                inline-flex
                shrink-0
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-white
                px-6
                py-3.5
                text-sm
                font-bold
                text-slate-950
                shadow-xl
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-blue-50
              "
            >
              Start a Project

              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>

          </div>

        </div>

        {/* =====================================================
            MAIN FOOTER
        ====================================================== */}

        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_1fr_1.2fr]">

          {/* ===================================================
              BRAND
          ==================================================== */}

          <div>

            {/* Logo */}

            <a
              href="#home"
              className="group inline-flex items-center gap-3"
            >

              <div className="relative flex h-11 w-11 items-center justify-center">

                <div
                  className="
                    absolute
                    inset-0
                    rotate-45
                    rounded-xl
                    bg-gradient-to-br
                    from-blue-500
                    to-purple-600
                    transition-transform
                    duration-500
                    group-hover:rotate-90
                  "
                />

                <span className="relative z-10 text-lg font-black text-white">
                  A
                </span>

              </div>

              <div>

                <p className="text-xl font-extrabold tracking-tight">
                  Abhishek
                </p>

                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
                  Full Stack Developer
                </p>

              </div>

            </a>

            <p className="mt-6 max-w-sm text-sm leading-7 text-slate-400">
              I create modern web applications with clean architecture,
              powerful backend systems and professional user interfaces.
            </p>

            {/* Social Icons */}

            <div className="mt-7 flex flex-wrap gap-2">

              {socialLinks.map((social) => {

                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="
                      group
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-white/10
                      bg-white/[0.04]
                      text-slate-400
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:border-blue-500/40
                      hover:bg-blue-500
                      hover:text-white
                    "
                  >
                    <Icon
                      size={16}
                      className="transition-transform duration-300 group-hover:scale-110"
                    />
                  </a>
                );

              })}

            </div>

          </div>

          {/* ===================================================
              QUICK LINKS
          ==================================================== */}

          <div>

            <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-white">
              Quick Links
            </h3>

            <div className="mt-6 space-y-3">

              {quickLinks.map((link) => (

                <a
                  key={link.label}
                  href={link.href}
                  className="
                    group
                    flex
                    w-fit
                    items-center
                    gap-2
                    text-sm
                    text-slate-400
                    transition-colors
                    duration-300
                    hover:text-blue-400
                  "
                >

                  <span className="h-px w-0 bg-blue-400 transition-all duration-300 group-hover:w-4" />

                  {link.label}

                </a>

              ))}

            </div>

          </div>

          {/* ===================================================
              SERVICES
          ==================================================== */}

          <div>

            <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-white">
              Services
            </h3>

            <div className="mt-6 space-y-3">

              {services.map((service) => (

                <a
                  key={service}
                  href="#services"
                  className="
                    group
                    flex
                    items-center
                    gap-2
                    text-sm
                    text-slate-400
                    transition-colors
                    duration-300
                    hover:text-blue-400
                  "
                >

                  <Code2
                    size={13}
                    className="text-slate-600 transition-colors group-hover:text-blue-400"
                  />

                  {service}

                </a>

              ))}

            </div>

          </div>

          {/* ===================================================
              CONTACT / NEWSLETTER
          ==================================================== */}

          <div>

            <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-white">
              Get In Touch
            </h3>

            <div className="mt-6 space-y-4">

              {/* Email */}

              <a
                href="mailto:yourmail@gmail.com"
                className="group flex items-center gap-3"
              >

                <div
                  className="
                    flex
                    h-9
                    w-9
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    bg-blue-500/10
                    text-blue-400
                    transition-colors
                    group-hover:bg-blue-500
                    group-hover:text-white
                  "
                >
                  <Mail size={16} />
                </div>

                <span className="truncate text-sm text-slate-400 transition-colors group-hover:text-white">
                  developerabhi2026@gmail.com
                </span>

              </a>

              {/* Phone */}

              <a
                href="tel:+919235279546"
                className="group flex items-center gap-3"
              >

                <div
                  className="
                    flex
                    h-9
                    w-9
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    bg-emerald-500/10
                    text-emerald-400
                    transition-colors
                    group-hover:bg-emerald-500
                    group-hover:text-white
                  "
                >
                  <Phone size={16} />
                </div>

                <span className="text-sm text-slate-400 transition-colors group-hover:text-white">
                  +91 9235279546
                </span>

              </a>

              {/* Location */}

              <div className="flex items-center gap-3">

                <div
                  className="
                    flex
                    h-9
                    w-9
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    bg-purple-500/10
                    text-purple-400
                  "
                >
                  <MapPin size={16} />
                </div>

                <span className="text-sm text-slate-400">
                  India
                </span>

              </div>

            </div>

            {/* Newsletter */}

            <div className="mt-7">

              <p className="mb-3 text-xs font-semibold text-slate-500">
                Stay updated
              </p>

              {subscribed ? (

                <div
                  className="
                    flex
                    items-center
                    gap-2
                    rounded-xl
                    border
                    border-emerald-500/20
                    bg-emerald-500/10
                    px-4
                    py-3
                    text-sm
                    text-emerald-300
                  "
                >
                  <CheckCircle2 size={16} />

                  Thanks for subscribing!
                </div>

              ) : (

                <form
                  onSubmit={handleSubscribe}
                  className="
                    flex
                    overflow-hidden
                    rounded-xl
                    border
                    border-white/10
                    bg-white/[0.04]
                    p-1
                    focus-within:border-blue-500/50
                  "
                >

                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email"
                    required
                    className="
                      min-w-0
                      flex-1
                      bg-transparent
                      px-3
                      py-2
                      text-sm
                      text-white
                      outline-none
                      placeholder:text-slate-600
                    "
                  />

                  <button
                    type="submit"
                    aria-label="Subscribe"
                    className="
                      flex
                      h-9
                      w-9
                      shrink-0
                      items-center
                      justify-center
                      rounded-lg
                      bg-blue-600
                      text-white
                      transition-all
                      duration-300
                      hover:bg-blue-500
                      hover:shadow-lg
                      hover:shadow-blue-500/20
                    "
                  >
                    <Send size={15} />
                  </button>

                </form>

              )}

            </div>

          </div>

        </div>

        {/* =====================================================
            TECHNOLOGY STRIP
        ====================================================== */}

        <div
          className="
            flex
            flex-col
            gap-4
            border-y
            border-white/10
            py-6
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >

          <p className="text-xs font-medium text-slate-500">
            Built with modern technologies
          </p>

          <div className="flex flex-wrap items-center gap-2">

            {[
              "React.js",
              "Laravel",
              "Node.js",
              "MySQL",
              "Tailwind CSS",
            ].map((tech) => (

              <span
                key={tech}
                className="
                  rounded-lg
                  border
                  border-white/10
                  bg-white/[0.03]
                  px-3
                  py-1.5
                  text-[10px]
                  font-bold
                  text-slate-500
                  transition-colors
                  hover:border-blue-500/30
                  hover:text-blue-400
                "
              >
                {tech}
              </span>

            ))}

          </div>

        </div>

        {/* =====================================================
            BOTTOM FOOTER
        ====================================================== */}

        <div
          className="
            flex
            flex-col
            gap-5
            py-7
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >

          <div className="text-center sm:text-left">

            <p className="text-xs text-slate-500">
              © {currentYear}{" "}
              <span className="font-semibold text-slate-300">
                Abhishek Prajapati
              </span>
              . All rights reserved.
            </p>

          </div>

          <div className="flex items-center justify-center gap-5">

            <a
              href="#home"
              className="
                text-xs
                text-slate-500
                transition-colors
                hover:text-white
              "
            >
              Privacy Policy
            </a>

            <a
              href="#home"
              className="
                text-xs
                text-slate-500
                transition-colors
                hover:text-white
              "
            >
              Terms
            </a>

            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="
                group
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-xl
                border
                border-white/10
                bg-white/[0.04]
                text-slate-400
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-blue-500/40
                hover:bg-blue-500
                hover:text-white
              "
            >

              <ArrowUp
                size={17}
                className="transition-transform duration-300 group-hover:-translate-y-1"
              />

            </button>

          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;