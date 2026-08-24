import { useState } from "react";

import {
  ArrowUpRight,
  ExternalLink,
  Sparkles,
  X,
  Building2,
  CheckCircle2,
  Code2,
  Database,
  Server,
  ShieldCheck,
  Zap,
} from "lucide-react";

import {
  FaGithub,
  FaLaravel,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiMysql,
  SiMongodb,
  SiRedis,
  SiTailwindcss,
  SiExpress,
  SiJavascript,
  SiPhp,
} from "react-icons/si";

const PortfolioSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
   

{
  id: 1,
  title: "Patna Zoo",
  shortTitle: "Patna Zoo",
  category: "Government",
  description:
    "A government digital platform for Patna Zoo, providing visitors with information about wildlife, animals, plants, attractions, facilities, visitor guidelines, programs and online services.",
  image:
    "https://images.unsplash.com/photo-1535338454770-8be927b5a00b?auto=format&fit=crop&w=1400&q=85",
  technologies: [
    "Laravel",
    "PHP",
    "MySQL",
    "REST API",
    "JavaScript",
  ],
  contributions: [
    "Backend Development",
    "REST API Development",
    "Database Management",
    "Dynamic Content Management",
    "Admin Panel Integration",
    "Bug Fixing & Optimization",
  ],
  live: "https://patnazoo.bihar.gov.in/",
  github: "#",
  government: true,
  status: "Completed",
},

{
  id: 2,
  title: "SC/ST Residential School",
  shortTitle: "SC/ST Residential School",
  category: "Government",
  description:
    "A Bihar Government residential school management platform designed to manage school-related information, student services, residential facilities and digital administrative operations.",
  image:
    "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1400&q=85",
  technologies: [
    "Laravel",
    "PHP",
    "MySQL",
    "Redis",
    "REST API",
  ],
  contributions: [
    "Backend Development",
    "REST API Development",
    "Database Management",
    "Business Logic",
    "Authentication & Security",
    "Application Optimization",
  ],
  live: "https://bars.bihar.gov.in/",
  government: true,
  status: "Completed",
},

 
{
  id: 3,
  title: "Ramratan",
  shortTitle: "Ramratan",
  category: "E-commerce",
  description:
    "A complete e-commerce platform developed for Ramratan with product management, online shopping functionality, customer experience and business management features.",
  image:
    "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1400&q=85",
  technologies: [
    "Laravel",
    "PHP",
    "MySQL",
    "JavaScript",
  ],
  contributions: [
    "E-commerce Development",
    "Backend Development",
    "Product Management",
    "Database Management",
    "REST API",
    "Responsive UI",
  ],
  live: "https://ramratan.co.in/",
  github: "#",
  government: false,
  status: "Completed",
},


{
  id: 4,
  title: "Pharmaride",
  shortTitle: "Pharmaride",
  category: "E-commerce",
  description:
    "An online pharmacy e-commerce platform designed for browsing healthcare products, managing products and providing a smooth online shopping experience.",
  image:
    "https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&w=1400&q=85",
  technologies: [
    "Laravel",
    "PHP",
    "MySQL",
    "JavaScript",
  ],
  contributions: [
    "E-commerce Development",
    "Backend Development",
    "Product Management",
    "Database Management",
    "API Development",
    "Order Management",
  ],
  live: "https://pharmaride.in/",
  github: "#",
  government: false,
  status: "Completed",
},


{
  id: 5,
  title: "Literavally School",
  shortTitle: "Literavally",
  category: "Education",
  description:
    "A professional school website designed to present academic information, school facilities, activities, programs and other important information for students and parents.",
  image:
    "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1400&q=85",
  technologies: [
    "React.js",
    "JavaScript",
    "Tailwind CSS",
  ],
  contributions: [
    "Frontend Development",
    "Responsive UI",
    "Website Development",
    "Component Development",
    "Interactive Sections",
    "Performance Optimization",
  ],
  live: "https://www.literavalleyschool.in/",
  github: "#",
  government: false,
  status: "Completed",
},


{
  id: 6,
  title: "Weddings72",
  shortTitle: "Weddings72",
  category: "Wedding Platform",
  description:
    "A modern wedding-focused website platform designed with an engaging user interface, responsive layouts and service-focused sections for wedding-related requirements.",
  image:
    "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1400&q=85",
  technologies: [
    "React.js",
    "JavaScript",
    "Tailwind CSS",
  ],
  contributions: [
    "Frontend Development",
    "Responsive Design",
    "UI Development",
    "Interactive Sections",
    "Component Development",
    "SEO Friendly Structure",
  ],
  live: "https://www.weddings72.in/",
  github: "#",
  government: false,
  status: "Completed",
},
  ];


  const getTechIcon = (tech) => {
    const iconClass = "text-base";

    switch (tech) {
      case "React.js":
        return <FaReact className={`${iconClass} text-cyan-500`} />;

      case "Laravel":
        return <FaLaravel className={`${iconClass} text-red-500`} />;

      case "Node.js":
        return <FaNodeJs className={`${iconClass} text-green-600`} />;

      case "MySQL":
        return <SiMysql className={`${iconClass} text-blue-600`} />;

      case "MongoDB":
        return <SiMongodb className={`${iconClass} text-green-600`} />;

      case "Redis":
        return <SiRedis className={`${iconClass} text-red-500`} />;

      case "Tailwind CSS":
        return (
          <SiTailwindcss
            className={`${iconClass} text-cyan-500`}
          />
        );

      case "Express.js":
        return (
          <SiExpress
            className={`${iconClass} text-slate-700`}
          />
        );

      case "JavaScript":
        return (
          <SiJavascript
            className={`${iconClass} text-yellow-500`}
          />
        );

      case "PHP":
        return (
          <SiPhp
            className={`${iconClass} text-indigo-500`}
          />
        );

      default:
        return (
          <Code2
            size={15}
            className="text-slate-400"
          />
        );
    }
  };



  const ProjectCard = ({ project, index }) => {
    return (
      <article
        className="
          group relative overflow-hidden
          rounded-[2rem]
          border border-slate-200
          bg-white
          shadow-sm
          transition-all duration-500
          hover:-translate-y-2
          hover:border-blue-200
          hover:shadow-2xl
          hover:shadow-slate-900/10
        "
      >
        {/* Top Gradient */}
        <div
          className={`
            h-1 w-full
            ${
              project.government
                ? index === 0
                  ? "bg-gradient-to-r from-orange-500 via-red-500 to-orange-400"
                  : "bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600"
                : "bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600"
            }
          `}
        />

        {/* Image */}
        <div className="relative h-56 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="
              h-full w-full object-cover
              transition-transform duration-700
              group-hover:scale-110
            "
          />

          {/* Overlay */}
          <div
            className="
              absolute inset-0
              bg-gradient-to-t
              from-slate-950/80
              via-slate-950/10
              to-transparent
            "
          />

          {/* Category */}
          <span
            className={`
              absolute left-4 top-4
              rounded-full
              px-3 py-1.5
              text-[10px]
              font-bold
              shadow-lg
              ${
                project.government
                  ? "bg-orange-500 text-white"
                  : "bg-white/95 text-blue-600"
              }
            `}
          >
            {project.government
              ? "Government Project"
              : project.category}
          </span>

          {/* Status */}
          <span
            className="
              absolute bottom-4 right-4
              rounded-full
              bg-slate-950/70
              px-3 py-1.5
              text-[10px]
              font-bold
              text-white
              backdrop-blur
            "
          >
            ● {project.status}
          </span>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-7">
          {/* Title */}
          <div className="flex items-start justify-between gap-3">
            <div>
              {project.government && (
                <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.18em] text-orange-500">
                  Bihar Government
                </p>
              )}

              <h3
                className="
                  text-lg
                  font-extrabold
                  leading-snug
                  text-slate-900
                  sm:text-xl
                "
              >
                {project.government
                  ? project.shortTitle
                  : project.title}
              </h3>
            </div>

            <ArrowUpRight
              size={20}
              className="
                shrink-0
                text-slate-300
                transition-all duration-300
                group-hover:-translate-y-1
                group-hover:translate-x-1
                group-hover:text-blue-600
              "
            />
          </div>

          {/* Description */}
          <p
            className="
              mt-4
              line-clamp-3
              text-sm
              leading-6
              text-slate-500
            "
          >
            {project.description}
          </p>

          {/* Technologies */}
          <div className="mt-5 flex flex-wrap gap-2">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="
                  inline-flex
                  items-center
                  gap-1.5
                  rounded-lg
                  border border-slate-200
                  bg-slate-50
                  px-2.5 py-1.5
                  text-[10px]
                  font-bold
                  text-slate-600
                "
              >
                {getTechIcon(tech)}
                {tech}
              </span>
            ))}

            {project.technologies.length > 4 && (
              <span
                className="
                  rounded-lg
                  bg-blue-50
                  px-2.5 py-1.5
                  text-[10px]
                  font-bold
                  text-blue-600
                "
              >
                +{project.technologies.length - 4}
              </span>
            )}
          </div>

          {/* Bottom */}
          <div
            className="
              mt-6
              flex
              items-center
              justify-between
              border-t
              border-slate-100
              pt-5
            "
          >
            <button
              onClick={() => setSelectedProject(project)}
              className="
                text-xs
                font-bold
                text-slate-600
                transition-colors
                hover:text-blue-600
              "
            >
              View Details
            </button>

            <div className="flex items-center gap-2">
              <a
                href={project.github}
                aria-label={`${project.title} GitHub`}
                className="
                  flex h-9 w-9
                  items-center justify-center
                  rounded-lg
                  border border-slate-200
                  text-slate-500
                  transition-all
                  hover:bg-slate-50
                  hover:text-slate-900
                "
              >
                <FaGithub size={16} />
              </a>

              <a
                href={project.live}
                aria-label={`${project.title} live demo`}
                className="
                  flex h-9 w-9
                  items-center justify-center
                  rounded-lg
                  bg-blue-600
                  text-white
                  transition-all
                  hover:-translate-y-0.5
                  hover:bg-blue-700
                "
              >
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>
      </article>
    );
  };

  return (
    <section
      id="portfolio"
      className="
        relative
        overflow-hidden
        bg-slate-50
        px-5
        py-20
        sm:px-8
        md:px-10
        md:py-24
        lg:px-14
        xl:px-20
      "
    >
      {/* =====================================================
          BACKGROUND
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
            bg-blue-500/5
            blur-3xl
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
            bg-purple-500/5
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
        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="mx-auto max-w-3xl text-center">
          <div
            className="
              mb-4
              inline-flex
              items-center
              gap-2
              rounded-full
              border border-blue-100
              bg-blue-50
              px-4 py-2
              text-sm
              font-semibold
              text-blue-600
            "
          >
            <Sparkles size={15} />
            My Portfolio
          </div>

          <h2
            className="
              text-3xl
              font-extrabold
              tracking-tight
              text-slate-900
              sm:text-4xl
              md:text-5xl
            "
          >
            Projects I've{" "}
            <span
              className="
                bg-gradient-to-r
                from-blue-600
                via-indigo-600
                to-purple-600
                bg-clip-text
                text-transparent
              "
            >
              Worked On
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-base
              leading-7
              text-slate-500
              md:text-lg
            "
          >
            A collection of real-world applications and professional
            projects built using modern frontend, backend and
            full-stack technologies.
          </p>
        </div>

        {/* =====================================================
            GOVERNMENT PROJECTS
        ====================================================== */}

        <div className="mt-16">
          {/* Section Header */}
          <div
            className="
              flex
              flex-col
              gap-5
              md:flex-row
              md:items-end
              md:justify-between
            "
          >
            <div>
              <div
                className="
                  mb-3
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border border-orange-200
                  bg-orange-50
                  px-4 py-2
                  text-xs
                  font-bold
                  uppercase
                  tracking-wider
                  text-orange-600
                "
              >
                <Building2 size={14} />
                Professional Experience
              </div>

              <h3
                className="
                  text-2xl
                  font-extrabold
                  text-slate-900
                  sm:text-3xl
                "
              >
                Bihar Government Projects
              </h3>

              <p
                className="
                  mt-2
                  max-w-2xl
                  text-sm
                  leading-6
                  text-slate-500
                  sm:text-base
                "
              >
                Worked on two Bihar Government digital projects,
                contributing to backend development, APIs, database
                management and application functionality.
              </p>
            </div>

            {/* Counter */}
            <div
              className="
                flex
                w-fit
                items-center
                gap-3
                rounded-2xl
                border border-slate-200
                bg-white
                px-4 py-3
                shadow-sm
              "
            >
              <div
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-xl
                  bg-orange-50
                  text-orange-600
                "
              >
                <Building2 size={22} />
              </div>

              <div>
                <p className="text-xl font-extrabold text-slate-900">
                  02
                </p>

                <p
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-wider
                    text-slate-400
                  "
                >
                  Government Projects
                </p>
              </div>
            </div>
          </div>

          {/* Government Cards */}
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {projects
              .filter((project) => project.government)
              .map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                />
              ))}
          </div>

          {/* Experience Highlight */}
          <div
            className="
              mt-6
              rounded-2xl
              border border-slate-200
              bg-white
              p-6
              shadow-sm
            "
          >
            <div
              className="
                flex
                flex-col
                gap-5
                sm:flex-row
                sm:items-center
                sm:justify-between
              "
            >
              <div>
                <p
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-wider
                    text-slate-400
                  "
                >
                  Experience Highlight
                </p>

                <h4
                  className="
                    mt-1
                    text-lg
                    font-bold
                    text-slate-900
                  "
                >
                  Experience with government-level applications
                </h4>
              </div>

              <div className="flex flex-wrap gap-2">
                {[
                  "Scalable Applications",
                  "REST APIs",
                  "Database Management",
                  "Backend Development",
                  "Production Support",
                ].map((item) => (
                  <span
                    key={item}
                    className="
                      rounded-full
                      bg-slate-100
                      px-3 py-2
                      text-[11px]
                      font-semibold
                      text-slate-600
                    "
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            OTHER PROJECTS
        ====================================================== */}

        <div className="mt-20">
          {/* Other Projects Header */}
          <div className="mb-8 text-center">
            <div
              className="
                mb-3
                inline-flex
                items-center
                gap-2
                rounded-full
                border border-blue-100
                bg-blue-50
                px-4 py-2
                text-xs
                font-bold
                uppercase
                tracking-wider
                text-blue-600
              "
            >
              <Code2 size={14} />
              Development Work
            </div>

            <h3
              className="
                text-2xl
                font-extrabold
                text-slate-900
                sm:text-3xl
              "
            >
              Other Projects
            </h3>

            <p
              className="
                mx-auto
                mt-2
                max-w-2xl
                text-sm
                leading-6
                text-slate-500
              "
            >
              Selected frontend, backend and full-stack projects
              demonstrating my technical skills.
            </p>
          </div>

          {/* Exactly 4 Other Projects */}
          <div className="grid gap-6 sm:grid-cols-2">
            {projects
              .filter((project) => !project.government)
              .map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                />
              ))}
          </div>
        </div>

        {/* =====================================================
            TECHNICAL STRENGTHS
        ====================================================== */}

        <div className="mt-20">
          <div className="mb-7 text-center">
            <p
              className="
                text-xs
                font-bold
                uppercase
                tracking-[0.2em]
                text-blue-600
              "
            >
              What I Bring
            </p>

            <h3
              className="
                mt-2
                text-2xl
                font-extrabold
                text-slate-900
              "
            >
              Technical Strengths
            </h3>
          </div>

          <div
            className="
              grid
              gap-4
              sm:grid-cols-2
              lg:grid-cols-4
            "
          >
            {[
              {
                icon: Server,
                title: "Backend Development",
                text: "Scalable backend systems and APIs.",
              },
              {
                icon: Database,
                title: "Database Management",
                text: "Efficient database design and queries.",
              },
              {
                icon: ShieldCheck,
                title: "Secure Applications",
                text: "Authentication and secure API development.",
              },
              {
                icon: Zap,
                title: "Performance",
                text: "Optimization and reliable application performance.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="
                    rounded-2xl
                    border border-slate-200
                    bg-white
                    p-6
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-blue-200
                    hover:shadow-lg
                  "
                >
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
                    "
                  >
                    <Icon size={21} />
                  </div>

                  <h4
                    className="
                      mt-4
                      font-bold
                      text-slate-900
                    "
                  >
                    {item.title}
                  </h4>

                  <p
                    className="
                      mt-2
                      text-xs
                      leading-5
                      text-slate-500
                    "
                  >
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* =====================================================
            CTA
        ====================================================== */}

        <div
          className="
            mt-14
            flex
            flex-col
            items-center
            justify-between
            gap-6
            rounded-3xl
            bg-gradient-to-r
            from-slate-900
            via-indigo-950
            to-blue-950
            px-6 py-9
            text-center
            md:flex-row
            md:px-10
            md:text-left
          "
        >
          <div>
            <p
              className="
                text-sm
                font-semibold
                text-blue-300
              "
            >
              Have a project in mind?
            </p>

            <h3
              className="
                mt-2
                text-xl
                font-bold
                text-white
                sm:text-2xl
              "
            >
              Let's build something amazing together.
            </h3>
          </div>

          <a
            href="#contact"
            className="
              inline-flex
              items-center
              gap-2
              rounded-xl
              bg-white
              px-6 py-3
              text-sm
              font-bold
              text-slate-900
              transition-all
              hover:-translate-y-1
              hover:shadow-xl
            "
          >
            Start a Conversation
            <ArrowUpRight size={17} />
          </a>
        </div>
      </div>

      {/* =====================================================
          PROJECT DETAILS MODAL
      ====================================================== */}

      {selectedProject && (
        <div
          className="
            fixed
            inset-0
            z-[100]
            flex
            items-center
            justify-center
            bg-slate-950/70
            p-5
            backdrop-blur-sm
          "
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="
              relative
              max-h-[90vh]
              w-full
              max-w-2xl
              overflow-y-auto
              rounded-3xl
              bg-white
              shadow-2xl
            "
            onClick={(event) => event.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={() => setSelectedProject(null)}
              className="
                absolute
                right-4
                top-4
                z-10
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                bg-white/95
                text-slate-600
                shadow-lg
                transition
                hover:text-slate-900
              "
            >
              <X size={20} />
            </button>

            {/* Image */}
            <div className="h-64 overflow-hidden sm:h-80">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-6 sm:p-8">
              {/* Badges */}
              <div className="flex flex-wrap gap-2">
                <span
                  className="
                    rounded-full
                    bg-blue-50
                    px-3 py-1.5
                    text-xs
                    font-bold
                    text-blue-600
                  "
                >
                  {selectedProject.category}
                </span>

                {selectedProject.government && (
                  <span
                    className="
                      rounded-full
                      bg-orange-50
                      px-3 py-1.5
                      text-xs
                      font-bold
                      text-orange-600
                    "
                  >
                    Government Project
                  </span>
                )}

                <span
                  className="
                    rounded-full
                    bg-emerald-50
                    px-3 py-1.5
                    text-xs
                    font-bold
                    text-emerald-600
                  "
                >
                  ● {selectedProject.status}
                </span>
              </div>

              {/* Title */}
              <h3
                className="
                  mt-4
                  text-2xl
                  font-extrabold
                  text-slate-900
                "
              >
                {selectedProject.title}
              </h3>

              {/* Description */}
              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-slate-500
                  sm:text-base
                "
              >
                {selectedProject.description}
              </p>

              {/* Contributions */}
              <div className="mt-7">
                <h4
                  className="
                    text-sm
                    font-bold
                    text-slate-900
                  "
                >
                  Key Contributions
                </h4>

                <div
                  className="
                    mt-3
                    grid
                    gap-2
                    sm:grid-cols-2
                  "
                >
                  {selectedProject.contributions.map((item) => (
                    <div
                      key={item}
                      className="
                        flex
                        items-center
                        gap-2
                        rounded-lg
                        bg-slate-50
                        px-3 py-2.5
                        text-xs
                        font-semibold
                        text-slate-600
                      "
                    >
                      <CheckCircle2
                        size={14}
                        className="shrink-0 text-emerald-500"
                      />

                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="mt-6">
                <h4
                  className="
                    text-sm
                    font-bold
                    text-slate-900
                  "
                >
                  Technology Stack
                </h4>

                <div
                  className="
                    mt-3
                    flex
                    flex-wrap
                    gap-2
                  "
                >
                  {selectedProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="
                        inline-flex
                        items-center
                        gap-1.5
                        rounded-lg
                        border border-slate-200
                        bg-slate-50
                        px-3 py-2
                        text-xs
                        font-semibold
                        text-slate-600
                      "
                    >
                      {getTechIcon(tech)}
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Buttons */}
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={selectedProject.live}
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-xl
                    bg-blue-600
                    px-5 py-3
                    text-sm
                    font-bold
                    text-white
                    transition
                    hover:bg-blue-700
                  "
                >
                  Live Project
                  <ExternalLink size={16} />
                </a>

                <a
                  href={selectedProject.github}
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-xl
                    border border-slate-200
                    px-5 py-3
                    text-sm
                    font-bold
                    text-slate-700
                    transition
                    hover:bg-slate-50
                  "
                >
                  <FaGithub size={16} />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PortfolioSection;