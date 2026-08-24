import { useState } from "react";
import {
  Code2,
  Server,
  Layers3,
  Database,
  BriefcaseBusiness,
  ArrowUpRight,
  Sparkles,
  CalendarDays,
} from "lucide-react";

import aboutimg from "../assets/photos/abhishek.jpeg";

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState("skills");

  const tabs = [
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "journey", label: "Journey" },
  ];

  const skills = [
    {
      name: "Frontend Development",
      icon: Code2,
      description:
        "Building responsive, modern and interactive user interfaces.",
      technologies: ["React.js", "JavaScript", "HTML5", "CSS3"],
    },
    {
      name: "Backend Development",
      icon: Server,
      description:
        "Developing secure APIs and scalable server-side applications.",
      technologies: ["Node.js", "Express.js", "PHP", "Laravel"],
    },
    {
      name: "Database",
      icon: Database,
      description:
        "Designing reliable database structures and efficient data solutions.",
      technologies: ["MySQL", "MongoDB", "Redis"],
    },
    {
      name: "Full Stack",
      icon: Layers3,
      description:
        "Developing complete applications from frontend to backend.",
      technologies: ["React", "Node", "Laravel", "REST API"],
    },
  ];

  const stats = [
    {
      value: "1+",
      label: "Years Experience",
    },
    {
      value: "15+",
      label: "Projects Completed",
    },
    {
      value: "10+",
      label: "Technologies",
    },
    {
      value: "100%",
      label: "Dedication",
    },
  ];

  const journey = [
    {
      number: "01",
      title: "Started Development",
      description:
        "Built a strong foundation in HTML, CSS, JavaScript and modern web development.",
    },
    {
      number: "02",
      title: "Backend Development",
      description:
        "Focused on APIs, authentication, databases and server-side development.",
    },
    {
      number: "03",
      title: "Full Stack Development",
      description:
        "Started combining frontend and backend technologies to build complete applications.",
    },
  ];

  return (
    <section
      id="about"
      className="
        relative
        overflow-hidden
        bg-gradient-to-b
        from-white
        via-slate-50/70
        to-white
        px-5
        py-20
        sm:px-8
        md:px-12
        lg:px-16
        xl:px-24
      "
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="
            absolute
            -left-40
            top-20
            h-96
            w-96
            rounded-full
            bg-blue-500/10
            blur-3xl
          "
        />

        <div
          className="
            absolute
            -right-40
            bottom-20
            h-96
            w-96
            rounded-full
            bg-purple-500/10
            blur-3xl
          "
        />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(90deg, #0f172a 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* ================= HEADER ================= */}

        <div className="mx-auto mb-14 max-w-3xl text-center md:mb-20">
          <div
            className="
              mb-5
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-blue-100
              bg-blue-50
              px-4
              py-2
              text-xs
              font-bold
              uppercase
              tracking-wider
              text-blue-600
            "
          >
            <Sparkles size={15} />
            About Me
          </div>

          <h2
            className="
              text-3xl
              font-extrabold
              leading-tight
              tracking-tight
              text-slate-900
              sm:text-4xl
              md:text-5xl
            "
          >
            Building Digital Solutions
            <span
              className="
                block
                bg-gradient-to-r
                from-blue-600
                via-indigo-600
                to-purple-600
                bg-clip-text
                text-transparent
              "
            >
              With Code & Creativity
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-sm
              leading-7
              text-slate-500
              sm:text-base
              md:text-lg
            "
          >
            I'm a Full Stack Developer passionate about creating
            high-performance, scalable and user-friendly web applications.
          </p>
        </div>

        {/* ================= MAIN GRID ================= */}

        <div
          className="
            grid
            items-start
            gap-10
            lg:grid-cols-[0.9fr_1.1fr]
            lg:gap-14
            xl:gap-20
          "
        >

          {/* ================= PROFILE ================= */}

         {/* ================= PROFILE IMAGE ================= */}

<div className="relative">
  {/* Glow */}
  <div
    className="
      absolute
      -inset-5
      rounded-[2rem]
      bg-gradient-to-r
      from-blue-500/20
      via-indigo-500/10
      to-purple-500/20
      blur-3xl
    "
  />

  <div
    className="
      relative
      overflow-hidden
      rounded-[2rem]
      border
      border-white
      bg-gradient-to-br
      from-blue-50
      via-white
      to-purple-50
      shadow-2xl
      shadow-blue-900/10
    "
  >
    {/* Image */}
    <div
      className="
        relative
        flex
        min-h-[420px]
        w-full
        items-end
        justify-center
        sm:min-h-[500px]
        md:min-h-[560px]
      "
    >
      <img
        src={aboutimg}
        alt="Abhishek Prajapati"
        className="
          relative
          z-10
          h-auto
          max-h-[560px]
          w-full
          object-contain
          object-bottom
        "
      />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            

      {/* Bottom gradient */}
      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          right-0
          z-20
          h-32
          bg-gradient-to-t
          from-white/80
          to-transparent
        "
      />
    </div>

    {/* Available Badge */}
    <div
      className="
        absolute
        left-5
        top-5
        z-30
        flex
        items-center
        gap-2
        rounded-full
        border
        border-white/70
        bg-white/90
        px-4
        py-2
        text-xs
        font-bold
        text-slate-700
        shadow-lg
        backdrop-blur-md
      "
    >
      <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
      Available for work
    </div>

    {/* Developer Badge */}
    <div
      className="
        absolute
        bottom-5
        right-5
        z-30
        rounded-2xl
        border
        border-white
        bg-white/95
        px-4
        py-3
        shadow-xl
        backdrop-blur-md
      "
    >
      <p className="text-xs font-medium text-slate-400">
        Role
      </p>

      <p className="mt-1 text-sm font-bold text-slate-900">
        Full Stack Developer
      </p>
    </div>
  </div>
</div>

          {/* ================= RIGHT CONTENT ================= */}

          <div>
            <span
              className="
                text-xs
                font-bold
                uppercase
                tracking-[0.2em]
                text-blue-600
              "
            >
              Who I Am
            </span>

            <h3
              className="
                mt-3
                text-3xl
                font-extrabold
                leading-tight
                text-slate-900
                sm:text-4xl
              "
            >
              Developer with a passion for building things that matter.
            </h3>

            <p
              className="
                mt-5
                text-sm
                leading-7
                text-slate-500
                sm:text-base
                sm:leading-8
              "
            >
              I work across frontend and backend development, allowing me
              to understand the complete product lifecycle — from user
              interface and API development to database architecture.
            </p>

            <p
              className="
                mt-4
                text-sm
                leading-7
                text-slate-500
                sm:text-base
                sm:leading-8
              "
            >
              My goal is to build applications that are fast, scalable,
              secure, responsive and easy to maintain.
            </p>

            {/* ================= TABS ================= */}

            <div
              className="
                mt-8
                flex
                w-full
                max-w-lg
                overflow-hidden
                rounded-2xl
                border
                border-slate-200
                bg-slate-100
                p-1
              "
            >
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`
                    flex-1
                    rounded-xl
                    px-3
                    py-3
                    text-xs
                    font-bold
                    transition-all
                    duration-300
                    sm:text-sm
                    ${
                      activeTab === tab.id
                        ? "bg-white text-blue-600 shadow-md"
                        : "text-slate-500 hover:text-slate-900"
                    }
                  `}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* ================= TAB CONTENT ================= */}

            <div className="mt-6">

              {/* SKILLS */}

              {activeTab === "skills" && (
                <div className="grid gap-4 sm:grid-cols-2">
                  {skills.map((skill) => {
                    const Icon = skill.icon;

                    return (
                      <div
                        key={skill.name}
                        className="
                          group
                          rounded-2xl
                          border
                          border-slate-200
                          bg-white
                          p-5
                          shadow-sm
                          transition-all
                          duration-300
                          hover:-translate-y-1
                          hover:border-blue-200
                          hover:shadow-xl
                          hover:shadow-blue-900/5
                        "
                      >
                        <div className="flex items-center justify-between">
                          <div
                            className="
                              flex
                              h-11
                              w-11
                              items-center
                              justify-center
                              rounded-xl
                              bg-blue-50
                              text-blue-600
                              transition-all
                              duration-300
                              group-hover:bg-blue-600
                              group-hover:text-white
                            "
                          >
                            <Icon size={21} />
                          </div>

                          <ArrowUpRight
                            size={18}
                            className="
                              text-slate-300
                              transition-all
                              duration-300
                              group-hover:-translate-y-1
                              group-hover:translate-x-1
                              group-hover:text-blue-600
                            "
                          />
                        </div>

                        <h4 className="mt-4 font-bold text-slate-900">
                          {skill.name}
                        </h4>

                        <p className="mt-2 text-sm leading-6 text-slate-500">
                          {skill.description}
                        </p>

                        <div className="mt-4 flex flex-wrap gap-2">
                          {skill.technologies.map((technology) => (
                            <span
                              key={technology}
                              className="
                                rounded-lg
                                bg-slate-50
                                px-2.5
                                py-1
                                text-[11px]
                                font-semibold
                                text-slate-500
                              "
                            >
                              {technology}
                            </span>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* EXPERIENCE */}

              {activeTab === "experience" && (
                <div
                  className="
                    rounded-2xl
                    border
                    border-slate-200
                    bg-white
                    p-6
                    shadow-sm
                    sm:p-7
                  "
                >
                  <div className="flex gap-4">
                    <div
                      className="
                        flex
                        h-12
                        w-12
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        bg-blue-600
                        text-white
                        shadow-lg
                        shadow-blue-600/20
                      "
                    >
                      <BriefcaseBusiness size={20} />
                    </div>

                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h4 className="text-lg font-bold text-slate-900">
                          Full Stack Developer
                        </h4>

                        <span
                          className="
                            rounded-full
                            bg-blue-50
                            px-3
                            py-1
                            text-xs
                            font-semibold
                            text-blue-600
                          "
                        >
                          2025 - 2026 Completed 
                        </span>
                      </div>

                      <p className="mt-2 font-semibold text-blue-600">
                       Fillip Technologies Pvt.Ltd
                      </p>

                      <p className="mt-3 text-sm leading-7 text-slate-500">
                        Working on modern web applications, backend APIs,
                        database architecture and responsive frontend
                        experiences with a strong focus on scalable
                        solutions.
                      </p>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {[
                          "React.js",
                          "Laravel",
                          "Node.js",
                          "MySQL",
                          "REST API",
                        ].map((tech) => (
                          <span
                            key={tech}
                            className="
                              rounded-lg
                              bg-slate-50
                              px-3
                              py-1.5
                              text-xs
                              font-semibold
                              text-slate-500
                            "
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* JOURNEY */}

              {activeTab === "journey" && (
                <div className="space-y-4">
                  {journey.map((item) => (
                    <div
                      key={item.number}
                      className="
                        group
                        flex
                        gap-4
                        rounded-2xl
                        border
                        border-slate-200
                        bg-white
                        p-5
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:border-blue-200
                        hover:shadow-xl
                      "
                    >
                      <div
                        className="
                          flex
                          h-11
                          w-11
                          shrink-0
                          items-center
                          justify-center
                          rounded-xl
                          bg-blue-50
                          text-sm
                          font-bold
                          text-blue-600
                          transition-all
                          duration-300
                          group-hover:bg-blue-600
                          group-hover:text-white
                        "
                      >
                        {item.number}
                      </div>

                      <div>
                        <h4 className="font-bold text-slate-900">
                          {item.title}
                        </h4>

                        <p className="mt-1 text-sm leading-6 text-slate-500">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* ================= STATS ================= */}

        <div
          className="
            mt-14
            grid
            grid-cols-2
            overflow-hidden
            rounded-3xl
            border
            border-slate-200
            bg-white
            shadow-xl
            shadow-slate-900/5
            md:grid-cols-4
          "
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`
                group
                p-6
                text-center
                transition-all
                duration-300
                hover:bg-blue-50
                md:p-8
                ${
                  index !== 0
                    ? "border-l border-slate-200"
                    : ""
                }
                ${
                  index >= 2
                    ? "border-t border-slate-200 md:border-t-0"
                    : ""
                }
              `}
            >
              <h3
                className="
                  text-3xl
                  font-extrabold
                  text-slate-900
                  transition-colors
                  duration-300
                  group-hover:text-blue-600
                  md:text-4xl
                "
              >
                {stat.value}
              </h3>

              <p className="mt-2 text-xs font-medium text-slate-500 sm:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* ================= CTA ================= */}

        <div
          className="
            relative
            mt-10
            overflow-hidden
            rounded-3xl
            bg-gradient-to-r
            from-slate-950
            via-indigo-950
            to-blue-950
            px-6
            py-8
            shadow-2xl
            md:px-10
          "
        >
          <div
            className="
              absolute
              -right-20
              -top-20
              h-52
              w-52
              rounded-full
              bg-blue-500/20
              blur-3xl
            "
          />

          <div
            className="
              relative
              flex
              flex-col
              items-center
              justify-between
              gap-6
              text-center
              md:flex-row
              md:text-left
            "
          >
            <div>
              <div className="flex items-center justify-center gap-2 text-blue-300 md:justify-start">
                <CalendarDays size={17} />

                <span className="text-sm font-semibold">
                  Let's build something great
                </span>
              </div>

              <h3 className="mt-2 text-xl font-bold text-white md:text-2xl">
                Have an idea? Let's turn it into reality.
              </h3>
            </div>

            <a
              href="#contact"
              className="
                group
                inline-flex
                shrink-0
                items-center
                gap-2
                rounded-xl
                bg-white
                px-6
                py-3
                text-sm
                font-bold
                text-slate-900
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-xl
              "
            >
              Let's Talk

              <ArrowUpRight
                size={17}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                "
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;