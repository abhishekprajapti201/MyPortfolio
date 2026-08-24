import { useEffect, useState } from "react";
import {
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaEnvelope,
  FaDownload,
  FaArrowRight,
} from "react-icons/fa";
import Abhishekimg from "../assets/photos/AbhishekMain.jpeg";


const HeroSection = () => {
  const [text, setText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = [
    "Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "Freelancer"
  ];


  useEffect(() => {
    const currentRole = roles[currentIndex];
    let timeout;

    if (!isDeleting) {
      if (text.length < currentRole.length) {
        timeout = setTimeout(() => {
          setText(currentRole.substring(0, text.length + 1));
        }, 85);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 1800);
      }
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => {
          setText(currentRole.substring(0, text.length - 1));
        }, 45);
      } else {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % roles.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [text, currentIndex, isDeleting]);



  const handleDownloadCV = () => {
    const link = document.createElement("a");

    link.href = "/cv/Abhishek_Prajapati_Resume.pdf";
    link.download = "/cv/Abhishek_Prajapati_Resume.pdf";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  /* =========================================================
     CONTACT
  ========================================================= */

  const handleContact = () => {
    const contactSection = document.getElementById("contact");

    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        w-full
        overflow-hidden
        bg-gradient-to-br
        from-slate-50
        via-white
        to-blue-50
      "
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">

        <div
          className="
            absolute
            -left-32
            top-10
            h-80
            w-80
            rounded-full
            bg-blue-400/10
            blur-3xl
          "
        />

        <div
          className="
            absolute
            -right-32
            bottom-10
            h-96
            w-96
            rounded-full
            bg-purple-400/10
            blur-3xl
          "
        />

        {/* Subtle grid */}

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(90deg, #0f172a 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

      </div>

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          grid
          min-h-screen
          max-w-7xl
          grid-cols-1
          items-center
          gap-12
          px-5
          py-24
          sm:px-8
          md:px-12
          lg:grid-cols-2
          lg:gap-16
          lg:px-16
          xl:px-20
        "
      >

        {/* ===================================================
            LEFT CONTENT
        ==================================================== */}

        <div className="order-2 lg:order-1">

          {/* Badge */}

          <div
            className="
              mb-6
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
            <span className="h-2 w-2 rounded-full bg-blue-600 animate-pulse" />

            Available for opportunities
          </div>

          {/* Heading */}

          <h1
            className="
              text-4xl
              font-black
              leading-[1.08]
              tracking-tight
              text-slate-900
              sm:text-5xl
              md:text-6xl
              lg:text-6xl
              xl:text-7xl
            "
          >
            Hello, I'm

            <span
              className="
                mt-3
                block
                bg-gradient-to-r
                from-blue-600
                via-indigo-600
                to-purple-600
                bg-clip-text
                text-transparent
              "
            >
              Abhishek Prajapati
            </span>
          </h1>

          {/* Typing */}

          <div
            className="
              mt-7
              flex
              min-h-[40px]
              items-center
              gap-2
              text-lg
              sm:text-xl
              md:text-2xl
            "
          >
            <span className="font-medium text-slate-500">
              I'm a
            </span>

            <span className="font-bold text-blue-600">
              {text}
              <span className="ml-1 inline-block h-6 w-[2px] translate-y-1 bg-blue-600 animate-pulse" />
            </span>
          </div>

          {/* Description */}

          <p
            className="
              mt-6
              max-w-xl
              text-sm
              leading-7
              text-slate-500
              sm:text-base
              md:text-lg
            "
          >
            I build modern, scalable and user-friendly web
            applications using powerful frontend and backend
            technologies. I transform ideas into reliable and
            engaging digital experiences.
          </p>

          {/* =================================================
              CTA
          ================================================== */}

          <div
            className="
              mt-8
              flex
              flex-col
              gap-3
              sm:flex-row
            "
          >

            {/* Download */}

            <button
              type="button"
              onClick={handleDownloadCV}
              className="
                group
                inline-flex
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-gradient-to-r
                from-blue-600
                to-indigo-600
                px-6
                py-3.5
                text-sm
                font-bold
                text-white
                shadow-lg
                shadow-blue-500/20
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-xl
                hover:shadow-blue-500/30
              "
            >
              <FaDownload
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-y-1
                "
              />

              Download CV
            </button>

            {/* Contact */}

            <button
              type="button"
              onClick={handleContact}
              className="
                group
                inline-flex
                items-center
                justify-center
                gap-2
                rounded-xl
                border
                border-slate-200
                bg-white
                px-6
                py-3.5
                text-sm
                font-bold
                text-slate-700
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-blue-200
                hover:text-blue-600
                hover:shadow-lg
              "
            >
              Contact Me

              <FaArrowRight
                size={13}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </button>

          </div>

          {/* =================================================
              SOCIAL
          ================================================== */}

          <div className="mt-9">

            <p
              className="
                mb-4
                text-xs
                font-bold
                uppercase
                tracking-[0.2em]
                text-slate-400
              "
            >
              Connect with me
            </p>

            <div className="flex gap-3">

              <a
                href="https://github.com/abhishekprajapti201"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-slate-200
                  bg-white
                  text-slate-500
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-slate-900
                  hover:text-white
                  hover:shadow-lg
                "
              >
                <FaGithub size={19} />
              </a>

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-slate-200
                  bg-white
                  text-slate-500
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-blue-600
                  hover:text-white
                  hover:shadow-lg
                "
              >
                <FaLinkedinIn size={18} />
              </a>

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-slate-200
                  bg-white
                  text-slate-500
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-sky-500
                  hover:text-white
                  hover:shadow-lg
                "
              >
                <FaTwitter size={18} />
              </a>

              <a
                href="mailto:developerabhi2026@gmail.com"
                aria-label="Email"
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-slate-200
                  bg-white
                  text-slate-500
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-red-500
                  hover:text-white
                  hover:shadow-lg
                "
              >
                <FaEnvelope size={18} />
              </a>

            </div>

          </div>

        </div>

        {/* ===================================================
            RIGHT IMAGE
        ==================================================== */}

        <div
          className="
            order-1
            flex
            items-center
            justify-center
            lg:order-2
          "
        >

          <div
            className="
              relative
              h-[330px]
              w-[330px]
              sm:h-[390px]
              sm:w-[390px]
              md:h-[460px]
              md:w-[460px]
              lg:h-[500px]
              lg:w-[500px]
            "
          >

            {/* Glow */}

            <div
              className="
                absolute
                inset-5
                rounded-full
                bg-gradient-to-br
                from-blue-400/20
                via-indigo-400/10
                to-purple-400/20
                blur-3xl
              "
            />

            {/* Outer ring */}

            <div
              className="
                absolute
                inset-0
                rounded-full
                border
                border-blue-200/70
              "
            />

            {/* =================================================
                IMAGE
            ================================================== */}

            <div
              className="
                absolute
                inset-5
                flex
                items-center
                justify-center
                overflow-hidden
                rounded-full
                border-[6px]
                border-white
                bg-white
                shadow-2xl
                shadow-blue-900/10
              "
            >

              <img
                src={Abhishekimg}
                alt="Abhishek Prajapati - Full Stack Developer"
                className="
                  h-full
                  w-full
                  object-contain
                  object-center
                "
              />

            </div>

            {/* =================================================
                TOP BADGE
            ================================================== */}

            <div
              className="
                absolute
                right-0
                top-8
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-2xl
                border
                border-white
                bg-white
                text-2xl
                shadow-xl
                sm:right-1
                sm:top-10
                sm:h-16
                sm:w-16
              "
            >
              🚀
            </div>

            {/* =================================================
                BOTTOM BADGE
            ================================================== */}

            <div
              className="
                absolute
                bottom-8
                left-0
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-2xl
                border
                border-white
                bg-white
                text-2xl
                shadow-xl
                sm:bottom-10
                sm:h-16
                sm:w-16
              "
            >
              💻
            </div>

            {/* =================================================
                EXPERIENCE
            ================================================== */}

            <div
              className="
                absolute
                bottom-10
                right-0
                hidden
                rounded-2xl
                border
                border-white
                bg-white
                px-5
                py-3
                shadow-xl
                sm:block
              "
            >
              <p className="text-xl font-black text-slate-900">
                1+
              </p>

              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Years Experience
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default HeroSection;