import React, { useEffect, useState } from "react";
import {
  Menu,
  X,
  Home,
  User,
  Briefcase,
  Code2,
  Mail,
  Moon,
  Sun,
  ArrowUpRight,
} from "lucide-react";

const NAV_ITEMS = [
  {
    id: "home",
    label: "Home",
    icon: Home,
  },
  {
    id: "about",
    label: "About",
    icon: User,
  },
  {
    id: "portfolio",
    label: "Portfolio",
    icon: Code2,
  },
  {
    id: "services",
    label: "Services",
    icon: Briefcase,
  },
  {
    id: "contact",
    label: "Contact",
    icon: Mail,
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isDark, setIsDark] = useState(false);



  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      setIsScrolled(scrollY > 20);

      let currentSection = "home";

      NAV_ITEMS.forEach((item) => {
        const section = document.getElementById(item.id);

        if (section) {
          const sectionTop = section.offsetTop - 150;
          const sectionBottom =
            sectionTop + section.offsetHeight;

          if (
            scrollY >= sectionTop &&
            scrollY < sectionBottom
          ) {
            currentSection = item.id;
          }
        }
      });

      setActiveSection(currentSection);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

 
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  /* =========================================================
     DARK MODE
  ========================================================= */

  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme");

    if (savedTheme === "dark") {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;

    setIsDark(newTheme);

    if (newTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("portfolio-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("portfolio-theme", "light");
    }
  };

  /* =========================================================
     SCROLL TO SECTION
  ========================================================= */

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);

    if (!element) return;

    const navbarOffset = 80;

    const elementPosition =
      element.getBoundingClientRect().top +
      window.scrollY -
      navbarOffset;

    window.scrollTo({
      top: elementPosition,
      behavior: "smooth",
    });

    setActiveSection(sectionId);
    setIsOpen(false);
  };

  return (
    <>
      {/* =====================================================
          NAVBAR
      ====================================================== */}

      <header
        className={`
          fixed left-0 right-0 top-0 z-50
          transition-all duration-300
          ${
            isScrolled
              ? "px-3 pt-3 sm:px-5 lg:px-8"
              : "px-0 pt-0"
          }
        `}
      >
        <nav
          className={`
            mx-auto max-w-7xl
            transition-all duration-300
            ${
              isScrolled
                ? `
                  rounded-2xl
                  border border-slate-200/70
                  bg-white/85
                  shadow-lg shadow-slate-900/5
                  backdrop-blur-xl
                  dark:border-slate-700/60
                  dark:bg-slate-900/85
                `
                : `
                  border-b border-transparent
                  bg-transparent
                `
            }
          `}
        >
          <div className="flex h-[72px] items-center justify-between px-4 sm:px-6 lg:px-7">

            {/* =================================================
                LOGO
            ================================================== */}

            <button
              onClick={() => scrollToSection("home")}
              className="group flex items-center gap-3"
              aria-label="Go to home"
            >
              {/* Logo Mark */}

              <div className="relative flex h-10 w-10 items-center justify-center">

                <div
                  className="
                    absolute inset-0
                    rotate-45 rounded-xl
                    bg-gradient-to-br
                    from-blue-600
                    via-indigo-600
                    to-purple-600
                    transition-all duration-500
                    group-hover:rotate-[135deg]
                  "
                />

                <span
                  className="
                    relative z-10
                    text-lg font-extrabold
                    text-white
                  "
                >
                  A
                </span>

              </div>

              {/* Logo Text */}

              <div className="hidden sm:block">
                <span
                  className="
                    block text-xl font-extrabold
                    tracking-tight
                    text-slate-900
                    dark:text-white
                  "
                >
                  Abhishek
                </span>

                <span
                  className="
                    block -mt-1 text-[9px]
                    font-semibold uppercase
                    tracking-[0.25em]
                    text-blue-600
                    dark:text-blue-400
                  "
                >
                  Developer
                </span>
              </div>
            </button>

            {/* =================================================
                DESKTOP NAVIGATION
            ================================================== */}

            <div className="hidden items-center gap-1 md:flex">

              {NAV_ITEMS.map((item) => {
                const Icon = item.icon;
                const isActive =
                  activeSection === item.id;

                return (
                  <button
                    key={item.id}
                    onClick={() =>
                      scrollToSection(item.id)
                    }
                    className={`
                      group relative
                      flex items-center gap-2
                      rounded-xl px-4 py-2.5
                      text-sm font-semibold
                      transition-all duration-300
                      ${
                        isActive
                          ? `
                            text-blue-600
                            dark:text-blue-400
                          `
                          : `
                            text-slate-600
                            hover:text-blue-600
                            dark:text-slate-300
                            dark:hover:text-blue-400
                          `
                      }
                    `}
                  >
                    <Icon
                      size={17}
                      strokeWidth={2}
                      className={`
                        transition-transform duration-300
                        ${
                          isActive
                            ? "scale-110"
                            : "group-hover:scale-110"
                        }
                      `}
                    />

                    <span>{item.label}</span>

                    {/* Active line */}

                    <span
                      className={`
                        absolute
                        bottom-0 left-1/2
                        h-[2px]
                        -translate-x-1/2
                        rounded-full
                        bg-gradient-to-r
                        from-blue-600
                        to-purple-600
                        transition-all duration-300
                        ${
                          isActive
                            ? "w-6 opacity-100"
                            : "w-0 opacity-0"
                        }
                      `}
                    />
                  </button>
                );
              })}
            </div>

            {/* =================================================
                RIGHT ACTIONS
            ================================================== */}

            <div className="flex items-center gap-2">

              {/* Theme */}

              <button
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="
                  group flex h-10 w-10
                  items-center justify-center
                  rounded-xl
                  border border-slate-200
                  bg-white
                  text-slate-600
                  transition-all duration-300
                  hover:-translate-y-0.5
                  hover:border-blue-200
                  hover:bg-blue-50
                  hover:text-blue-600
                  dark:border-slate-700
                  dark:bg-slate-800
                  dark:text-slate-300
                  dark:hover:border-slate-600
                  dark:hover:bg-slate-700
                  dark:hover:text-blue-400
                "
              >
                {isDark ? (
                  <Sun
                    size={18}
                    className="transition-transform duration-300 group-hover:rotate-45"
                  />
                ) : (
                  <Moon
                    size={18}
                    className="transition-transform duration-300 group-hover:-rotate-12"
                  />
                )}
              </button>

              {/* Hire Me */}

              <button
                onClick={() =>
                  scrollToSection("contact")
                }
                className="
                  group hidden
                  items-center gap-2
                  rounded-xl
                  bg-gradient-to-r
                  from-blue-600
                  to-indigo-600
                  px-5 py-2.5
                  text-sm font-bold
                  text-white
                  shadow-md
                  shadow-blue-600/20
                  transition-all duration-300
                  hover:-translate-y-0.5
                  hover:shadow-lg
                  hover:shadow-blue-600/30
                  md:flex
                "
              >
                <span>Hire Me</span>

                <ArrowUpRight
                  size={16}
                  className="
                    transition-transform duration-300
                    group-hover:translate-x-0.5
                    group-hover:-translate-y-0.5
                  "
                />
              </button>

              {/* Mobile Menu */}

              <button
                onClick={() => setIsOpen(!isOpen)}
                aria-label={
                  isOpen
                    ? "Close menu"
                    : "Open menu"
                }
                aria-expanded={isOpen}
                className="
                  flex h-10 w-10
                  items-center justify-center
                  rounded-xl
                  border border-slate-200
                  bg-white
                  text-slate-700
                  transition-all duration-300
                  hover:border-blue-200
                  hover:bg-blue-50
                  hover:text-blue-600
                  dark:border-slate-700
                  dark:bg-slate-800
                  dark:text-slate-200
                  dark:hover:bg-slate-700
                  md:hidden
                "
              >
                {isOpen ? (
                  <X size={22} />
                ) : (
                  <Menu size={22} />
                )}
              </button>

            </div>
          </div>

          {/* =================================================
              MOBILE MENU
          ================================================== */}

          <div
            className={`
              overflow-hidden
              transition-all duration-300
              md:hidden
              ${
                isOpen
                  ? "max-h-[500px] opacity-100"
                  : "max-h-0 opacity-0"
              }
            `}
          >
            <div
              className="
                border-t border-slate-200/70
                px-4 pb-5 pt-3
                dark:border-slate-700
              "
            >

              {/* Mobile Items */}

              <div className="space-y-1">

                {NAV_ITEMS.map((item) => {
                  const Icon = item.icon;
                  const isActive =
                    activeSection === item.id;

                  return (
                    <button
                      key={item.id}
                      onClick={() =>
                        scrollToSection(item.id)
                      }
                      className={`
                        flex w-full
                        items-center gap-3
                        rounded-xl
                        px-4 py-3
                        text-left
                        transition-all duration-300
                        ${
                          isActive
                            ? `
                              bg-blue-50
                              text-blue-600
                              dark:bg-blue-500/10
                              dark:text-blue-400
                            `
                            : `
                              text-slate-600
                              hover:bg-slate-50
                              hover:text-blue-600
                              dark:text-slate-300
                              dark:hover:bg-slate-800
                              dark:hover:text-blue-400
                            `
                        }
                      `}
                    >
                      <Icon size={19} />

                      <span className="font-semibold">
                        {item.label}
                      </span>

                      {isActive && (
                        <span className="ml-auto h-2 w-2 rounded-full bg-blue-600 dark:bg-blue-400" />
                      )}
                    </button>
                  );
                })}

              </div>

              {/* Mobile Hire */}

              <button
                onClick={() =>
                  scrollToSection("contact")
                }
                className="
                  mt-4 flex w-full
                  items-center justify-center
                  gap-2 rounded-xl
                  bg-gradient-to-r
                  from-blue-600
                  to-indigo-600
                  px-5 py-3
                  text-sm font-bold
                  text-white
                  shadow-lg
                  shadow-blue-600/20
                  transition-all duration-300
                  hover:shadow-xl
                "
              >
                <span>Let's Work Together</span>

                <ArrowUpRight size={17} />
              </button>

            </div>
          </div>
        </nav>
      </header>

      {/* =====================================================
          MOBILE MENU BACKDROP
      ====================================================== */}

      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="
            fixed inset-0 z-40
            bg-slate-900/20
            backdrop-blur-[2px]
            md:hidden
          "
        />
      )}
    </>
  );
};

export default Navbar;