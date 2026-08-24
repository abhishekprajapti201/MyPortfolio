import React, { useState } from "react";
import {
  ArrowUpRight,
  CheckCircle2,
  Code2,
  Database,
  Globe2,
  Layers3,
  Server,
  ShieldCheck,
  Smartphone,
  Zap,
  X,
  Sparkles,
  ChevronRight,
  MessageSquare,
} from "lucide-react";

const ServicesSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 1,
      title: "Frontend Development",
      shortTitle: "Frontend",
      category: "Development",
      description:
        "Modern, responsive and high-performance frontend applications with clean UI, smooth interactions and excellent user experience.",
      icon: Code2,
      gradient: "from-blue-500 to-cyan-500",
      lightBg: "bg-blue-50",
      iconColor: "text-blue-600",

      technologies: [
        "React.js",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
      ],

      features: [
        "Responsive Web Design",
        "React.js Development",
        "Reusable Components",
        "Interactive UI",
        "API Integration",
        "Performance Optimization",
      ],
    },

    {
      id: 2,
      title: "Backend Development",
      shortTitle: "Backend",
      category: "Development",
      description:
        "Secure and scalable backend systems with powerful APIs, business logic, authentication and database integration.",
      icon: Server,
      gradient: "from-indigo-500 to-purple-600",
      lightBg: "bg-indigo-50",
      iconColor: "text-indigo-600",

      technologies: [
        "Laravel",
        "PHP",
        "Node.js",
        "Express.js",
        "REST API",
      ],

      features: [
        "REST API Development",
        "Authentication Systems",
        "Business Logic",
        "Database Integration",
        "API Security",
        "Server Optimization",
      ],
    },

    {
      id: 3,
      title: "Full Stack Development",
      shortTitle: "Full Stack",
      category: "Development",
      description:
        "Complete end-to-end web application development from frontend interface to backend architecture and database.",
      icon: Layers3,
      gradient: "from-violet-500 to-fuchsia-500",
      lightBg: "bg-violet-50",
      iconColor: "text-violet-600",

      technologies: [
        "React.js",
        "Laravel",
        "Node.js",
        "MySQL",
        "MongoDB",
      ],

      features: [
        "Complete Web Applications",
        "Frontend + Backend",
        "REST APIs",
        "Database Architecture",
        "Authentication",
        "Deployment Support",
      ],
    },

    {
      id: 4,
      title: "API Development",
      shortTitle: "APIs",
      category: "Backend",
      description:
        "Reliable REST APIs designed for web applications, mobile applications and third-party integrations.",
      icon: Globe2,
      gradient: "from-emerald-500 to-teal-500",
      lightBg: "bg-emerald-50",
      iconColor: "text-emerald-600",

      technologies: [
        "REST API",
        "Laravel",
        "Node.js",
        "Express.js",
        "JSON",
      ],

      features: [
        "RESTful Architecture",
        "CRUD APIs",
        "Authentication APIs",
        "Third Party Integration",
        "API Validation",
        "Error Handling",
      ],
    },

    {
      id: 5,
      title: "Database Development",
      shortTitle: "Database",
      category: "Backend",
      description:
        "Well-structured and optimized database solutions designed for reliability, scalability and performance.",
      icon: Database,
      gradient: "from-orange-500 to-red-500",
      lightBg: "bg-orange-50",
      iconColor: "text-orange-600",

      technologies: [
        "MySQL",
        "MongoDB",
        "Redis",
        "SQL",
      ],

      features: [
        "Database Design",
        "Complex SQL Queries",
        "Relationships",
        "Indexing",
        "Query Optimization",
        "Data Management",
      ],
    },

    {
      id: 6,
      title: "Authentication & Security",
      shortTitle: "Security",
      category: "Backend",
      description:
        "Secure authentication and authorization systems with protected routes, role management and API security.",
      icon: ShieldCheck,
      gradient: "from-rose-500 to-pink-500",
      lightBg: "bg-rose-50",
      iconColor: "text-rose-600",

      technologies: [
        "JWT",
        "Cookies",
        "Laravel Auth",
        "Middleware",
        "OAuth",
      ],

      features: [
        "Login & Registration",
        "JWT Authentication",
        "Cookie Authentication",
        "Role Based Access",
        "Protected Routes",
        "API Security",
      ],
    },

    {
      id: 7,
      title: "Web Application Development",
      shortTitle: "Web Apps",
      category: "Development",
      description:
        "Professional business applications with scalable architecture, clean code and responsive user interfaces.",
      icon: Zap,
      gradient: "from-yellow-500 to-orange-500",
      lightBg: "bg-yellow-50",
      iconColor: "text-yellow-600",

      technologies: [
        "React.js",
        "Laravel",
        "Node.js",
        "MySQL",
      ],

      features: [
        "Business Applications",
        "Admin Dashboards",
        "Custom Features",
        "API Integration",
        "Responsive UI",
        "Scalable Architecture",
      ],
    },

    {
      id: 8,
      title: "Responsive Website",
      shortTitle: "Responsive",
      category: "Frontend",
      description:
        "Mobile-first websites that provide a consistent and professional experience across mobile, tablet and desktop devices.",
      icon: Smartphone,
      gradient: "from-cyan-500 to-blue-600",
      lightBg: "bg-cyan-50",
      iconColor: "text-cyan-600",

      technologies: [
        "React.js",
        "Tailwind CSS",
        "JavaScript",
        "HTML5",
      ],

      features: [
        "Mobile First Design",
        "Tablet Optimization",
        "Desktop Optimization",
        "Cross Browser Support",
        "Clean UI",
        "Fast Loading",
      ],
    },
  ];

  const categories = [
    "All",
    "Development",
    "Frontend",
    "Backend",
  ];

  const filteredServices =
    activeCategory === "All"
      ? services
      : services.filter(
          (service) => service.category === activeCategory
        );

  return (
    <section
      id="services"
      className="
        relative
        overflow-hidden
        bg-white
        px-5
        py-20
        sm:px-8
        md:px-10
        md:py-24
        lg:px-14
        xl:px-20
      "
    >
      {/* Background */}

      <div className="pointer-events-none absolute inset-0">

        <div
          className="
            absolute
            -left-40
            top-40
            h-[420px]
            w-[420px]
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
            h-[420px]
            w-[420px]
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
            <Sparkles size={14} />

            What I Do
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
            Professional{" "}

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
              Services
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
            I build modern, scalable and user-friendly digital
            solutions that help businesses transform their ideas
            into powerful web applications.
          </p>

        </div>

        {/* =====================================================
            QUICK STATS
        ====================================================== */}

        <div
          className="
            mx-auto
            mt-10
            grid
            max-w-4xl
            grid-cols-2
            overflow-hidden
            rounded-2xl
            border
            border-slate-200
            bg-white
            shadow-sm
            sm:grid-cols-4
          "
        >

          {[
            {
              number: "08+",
              label: "Services",
            },
            {
              number: "02",
              label: "Govt. Projects",
            },
            {
              number: "10+",
              label: "Technologies",
            },
            {
              number: "100%",
              label: "Commitment",
            },
          ].map((item, index) => (

            <div
              key={item.label}
              className={`
                px-4
                py-5
                text-center
                ${
                  index !== 0
                    ? "border-l border-slate-100"
                    : ""
                }
                ${
                  index > 1
                    ? "border-t sm:border-t-0"
                    : ""
                }
              `}
            >

              <p
                className="
                  text-xl
                  font-extrabold
                  text-slate-900
                  sm:text-2xl
                "
              >
                {item.number}
              </p>

              <p
                className="
                  mt-1
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-wider
                  text-slate-400
                  sm:text-xs
                "
              >
                {item.label}
              </p>

            </div>

          ))}

        </div>

        {/* =====================================================
            CATEGORY FILTER
        ====================================================== */}

        <div className="mt-14 flex justify-center">

          <div
            className="
              flex
              max-w-full
              overflow-x-auto
              rounded-xl
              border
              border-slate-200
              bg-slate-50
              p-1
            "
          >

            {categories.map((category) => (

              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`
                  whitespace-nowrap
                  rounded-lg
                  px-5
                  py-2.5
                  text-xs
                  font-bold
                  transition-all
                  duration-300
                  sm:text-sm

                  ${
                    activeCategory === category
                      ? "bg-slate-900 text-white shadow-md"
                      : "text-slate-500 hover:bg-white hover:text-slate-900"
                  }
                `}
              >
                {category}
              </button>

            ))}

          </div>

        </div>

        {/* =====================================================
            SERVICE GRID
        ====================================================== */}

        <div
          className="
            mt-10
            grid
            gap-6
            sm:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-4
          "
        >

          {filteredServices.map((service) => {

            const Icon = service.icon;

            return (
              <article
                key={service.id}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-3xl
                  border
                  border-slate-200
                  bg-white
                  p-6
                  shadow-sm
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:border-blue-200
                  hover:shadow-2xl
                  hover:shadow-slate-900/10
                "
              >

                {/* Decorative glow */}

                <div
                  className={`
                    absolute
                    -right-16
                    -top-16
                    h-36
                    w-36
                    rounded-full
                    bg-gradient-to-br
                    ${service.gradient}
                    opacity-0
                    blur-3xl
                    transition-all
                    duration-500
                    group-hover:opacity-20
                  `}
                />

                {/* Icon */}

                <div
                  className={`
                    relative
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    ${service.lightBg}
                    ${service.iconColor}
                    transition-all
                    duration-500
                    group-hover:scale-110
                    group-hover:rotate-3
                  `}
                >

                  <Icon size={27} />

                </div>

                {/* Number */}

                <span
                  className="
                    absolute
                    right-6
                    top-6
                    text-3xl
                    font-black
                    text-slate-100
                    transition-colors
                    duration-300
                    group-hover:text-blue-50
                  "
                >
                  0{service.id}
                </span>

                {/* Content */}

                <div className="relative mt-6">

                  <p
                    className="
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.18em]
                      text-blue-600
                    "
                  >
                    {service.category}
                  </p>

                  <h3
                    className="
                      mt-2
                      text-xl
                      font-extrabold
                      text-slate-900
                    "
                  >
                    {service.title}
                  </h3>

                  <p
                    className="
                      mt-3
                      line-clamp-3
                      text-sm
                      leading-6
                      text-slate-500
                    "
                  >
                    {service.description}
                  </p>

                  {/* Features */}

                  <div className="mt-5 space-y-2">

                    {service.features
                      .slice(0, 3)
                      .map((feature) => (

                        <div
                          key={feature}
                          className="
                            flex
                            items-center
                            gap-2
                            text-xs
                            font-medium
                            text-slate-600
                          "
                        >

                          <CheckCircle2
                            size={14}
                            className="
                              shrink-0
                              text-emerald-500
                            "
                          />

                          {feature}

                        </div>

                      ))}

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
                      onClick={() =>
                        setSelectedService(service)
                      }
                      className="
                        inline-flex
                        items-center
                        gap-1
                        text-xs
                        font-bold
                        text-slate-700
                        transition-all
                        hover:gap-2
                        hover:text-blue-600
                      "
                    >
                      Explore Service

                      <ArrowUpRight size={15} />

                    </button>

                    <div
                      className="
                        flex
                        h-8
                        w-8
                        items-center
                        justify-center
                        rounded-lg
                        bg-slate-50
                        text-slate-400
                        transition-all
                        group-hover:bg-blue-50
                        group-hover:text-blue-600
                      "
                    >
                      <ChevronRight size={16} />
                    </div>

                  </div>

                </div>

              </article>
            );
          })}

        </div>

        {/* =====================================================
            PROCESS SECTION
        ====================================================== */}

        <div className="mt-20">

          <div className="text-center">

            <p
              className="
                text-xs
                font-bold
                uppercase
                tracking-[0.2em]
                text-blue-600
              "
            >
              My Process
            </p>

            <h3
              className="
                mt-2
                text-2xl
                font-extrabold
                text-slate-900
                sm:text-3xl
              "
            >
              How I Work
            </h3>

          </div>

          <div
            className="
              relative
              mt-10
              grid
              gap-5
              md:grid-cols-4
            "
          >

            {[
              {
                number: "01",
                title: "Understand",
                text: "Understand your requirements, goals and business needs.",
              },
              {
                number: "02",
                title: "Plan",
                text: "Create the right architecture, features and development plan.",
              },
              {
                number: "03",
                title: "Develop",
                text: "Build clean, scalable and responsive applications.",
              },
              {
                number: "04",
                title: "Deliver",
                text: "Test, optimize and deliver a reliable final product.",
              },
            ].map((step) => (

              <div
                key={step.number}
                className="
                  relative
                  rounded-2xl
                  border
                  border-slate-200
                  bg-white
                  p-6
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-lg
                "
              >

                <span
                  className="
                    text-4xl
                    font-black
                    text-slate-100
                  "
                >
                  {step.number}
                </span>

                <h4
                  className="
                    mt-2
                    text-lg
                    font-bold
                    text-slate-900
                  "
                >
                  {step.title}
                </h4>

                <p
                  className="
                    mt-2
                    text-xs
                    leading-6
                    text-slate-500
                  "
                >
                  {step.text}
                </p>

              </div>

            ))}

          </div>

        </div>

        {/* =====================================================
            CTA
        ====================================================== */}

        <div
          className="
            relative
            mt-16
            overflow-hidden
            rounded-[2rem]
            bg-gradient-to-br
            from-slate-950
            via-indigo-950
            to-blue-950
            px-6
            py-10
            text-center
            sm:px-10
            sm:py-12
          "
        >

          <div
            className="
              absolute
              -right-20
              -top-20
              h-64
              w-64
              rounded-full
              bg-blue-500/20
              blur-3xl
            "
          />

          <div
            className="
              absolute
              -bottom-20
              -left-20
              h-64
              w-64
              rounded-full
              bg-purple-500/20
              blur-3xl
            "
          />

          <div className="relative z-10">

            <div
              className="
                mx-auto
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-2xl
                bg-white/10
                text-blue-300
                ring-1
                ring-white/10
              "
            >
              <MessageSquare size={25} />
            </div>

            <p
              className="
                mt-5
                text-xs
                font-bold
                uppercase
                tracking-[0.2em]
                text-blue-300
              "
            >
              Let's Work Together
            </p>

            <h3
              className="
                mx-auto
                mt-3
                max-w-2xl
                text-2xl
                font-extrabold
                text-white
                sm:text-3xl
                md:text-4xl
              "
            >
              Have an idea? Let's turn it into a powerful
              digital product.
            </h3>

            <p
              className="
                mx-auto
                mt-4
                max-w-xl
                text-sm
                leading-6
                text-slate-300
              "
            >
              From frontend interfaces to backend systems,
              I can help build a solution that is fast,
              scalable and professional.
            </p>

            <a
              href="#contact"
              className="
                mt-7
                inline-flex
                items-center
                gap-2
                rounded-xl
                bg-white
                px-6
                py-3
                text-sm
                font-bold
                text-slate-900
                shadow-xl
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-white/20
              "
            >
              Let's Talk

              <ArrowUpRight size={17} />
            </a>

          </div>

        </div>

      </div>

      {/* =====================================================
          SERVICE DETAILS MODAL
      ====================================================== */}

      {selectedService && (

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
          onClick={() => setSelectedService(null)}
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
              p-7
              shadow-2xl
              sm:p-9
            "
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            {/* Close */}

            <button
              onClick={() => setSelectedService(null)}
              className="
                absolute
                right-5
                top-5
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                bg-slate-100
                text-slate-500
                transition
                hover:bg-slate-200
                hover:text-slate-900
              "
            >
              <X size={19} />
            </button>

            {/* Header */}

            <div className="flex items-center gap-4">

              <div
                className={`
                  flex
                  h-14
                  w-14
                  shrink-0
                  items-center
                  justify-center
                  rounded-2xl
                  ${selectedService.lightBg}
                  ${selectedService.iconColor}
                `}
              >

                {React.createElement(
                  selectedService.icon,
                  { size: 27 }
                )}

              </div>

              <div>

                <p
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.2em]
                    text-blue-600
                  "
                >
                  {selectedService.category}
                </p>

                <h3
                  className="
                    mt-1
                    pr-8
                    text-2xl
                    font-extrabold
                    text-slate-900
                  "
                >
                  {selectedService.title}
                </h3>

              </div>

            </div>

            {/* Description */}

            <p
              className="
                mt-6
                text-sm
                leading-7
                text-slate-500
                sm:text-base
              "
            >
              {selectedService.description}
            </p>

            {/* Features */}

            <div className="mt-7">

              <h4
                className="
                  text-sm
                  font-bold
                  text-slate-900
                "
              >
                What's Included
              </h4>

              <div
                className="
                  mt-4
                  grid
                  gap-3
                  sm:grid-cols-2
                "
              >

                {selectedService.features.map(
                  (feature) => (

                    <div
                      key={feature}
                      className="
                        flex
                        items-center
                        gap-3
                        rounded-xl
                        border
                        border-slate-100
                        bg-slate-50
                        px-4
                        py-3
                      "
                    >

                      <CheckCircle2
                        size={17}
                        className="
                          shrink-0
                          text-emerald-500
                        "
                      />

                      <span
                        className="
                          text-xs
                          font-semibold
                          text-slate-600
                        "
                      >
                        {feature}
                      </span>

                    </div>

                  )
                )}

              </div>

            </div>

            {/* Technologies */}

            <div className="mt-7">

              <h4
                className="
                  text-sm
                  font-bold
                  text-slate-900
                "
              >
                Technologies
              </h4>

              <div
                className="
                  mt-3
                  flex
                  flex-wrap
                  gap-2
                "
              >

                {selectedService.technologies.map(
                  (tech) => (

                    <span
                      key={tech}
                      className="
                        rounded-lg
                        border
                        border-slate-200
                        bg-white
                        px-3
                        py-2
                        text-xs
                        font-bold
                        text-slate-600
                      "
                    >
                      {tech}
                    </span>

                  )
                )}

              </div>

            </div>

            {/* Modal CTA */}

            <a
              href="#contact"
              onClick={() =>
                setSelectedService(null)
              }
              className="
                mt-8
                inline-flex
                items-center
                gap-2
                rounded-xl
                bg-gradient-to-r
                from-blue-600
                to-indigo-600
                px-6
                py-3
                text-sm
                font-bold
                text-white
                shadow-lg
                shadow-blue-500/20
                transition-all
                hover:-translate-y-1
              "
            >
              Discuss This Service

              <ArrowUpRight size={17} />
            </a>

          </div>

        </div>

      )}
    </section>
  );
};

export default ServicesSection;