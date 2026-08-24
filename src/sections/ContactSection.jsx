import { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Copy,
  Check,
  ArrowUpRight,
  MessageSquare,
  Clock3,
  User,
  AtSign,
  FileText,
  Loader2,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [copied, setCopied] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const contactInfo = {
    email: "developerabhi2026@gmail.com",
    phone: "+91 9235279546",
    location: "India",
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (status.message) {
      setStatus({
        type: "",
        message: "",
      });
    }
  };

  const copyToClipboard = async (value, type) => {
    try {
      await navigator.clipboard.writeText(value);

      setCopied(type);

      setTimeout(() => {
        setCopied("");
      }, 2000);
    } catch (error) {
      console.error("Copy failed:", error);
    }
  };

  const handleEmailSubmit = async (e) => {
    e.preventDefault();

    if (isSending) return;

    setStatus({
      type: "",
      message: "",
    });

    if (formData.phone && !/^[+0-9\s()-]{7,20}$/.test(formData.phone)) {
      setStatus({
        type: "error",
        message: "Please enter a valid phone number.",
      });
      return;
    }

    setIsSending(true);

    try {
      const templateParams = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        subject: formData.subject.trim() || "Project Enquiry",
        message: formData.message.trim(),
      };

      const result = await emailjs.send(
        "service_rkva70g",
        "template_1ckgpyr",
        templateParams,
        {
          publicKey: "qrgEi8oAwpssyMWiG",
        }
      );

      console.log("EmailJS success:", result);

      setStatus({
        type: "success",
        message:
          "Thank you! Your enquiry has been sent successfully. I'll get back to you soon.",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);

      setStatus({
        type: "error",
        message:
          "Unable to send your enquiry. Please try again or contact me directly.",
      });
    } finally {
      setIsSending(false);
    }
  };

  const sendSMS = () => {
    const message =
      "Hello Abhishek, I would like to discuss a project with you.";

    const phoneNumber = contactInfo.phone.replace(/[^\d+]/g, "");

    window.location.href = `sms:${phoneNumber}?body=${encodeURIComponent(
      message
    )}`;
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-slate-50 px-5 py-20 sm:px-8 md:px-10 md:py-24 lg:px-14 xl:px-20"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-20 h-[400px] w-[400px] rounded-full bg-blue-500/5 blur-3xl" />

        <div className="absolute -right-40 bottom-20 h-[400px] w-[400px] rounded-full bg-purple-500/5 blur-3xl" />

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
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-wider text-blue-600">
            <MessageSquare size={14} />
            Get In Touch
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            Let's Build Something{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Amazing
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base md:text-lg">
            Have a project, business idea or development requirement? Send me
            a message and let's discuss how I can help.
          </p>
        </div>

        {/* Main Contact Area */}
        <div className="mt-14 grid gap-7 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Left Contact Information */}
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-slate-950 via-indigo-950 to-blue-950 p-7 text-white shadow-2xl sm:p-9">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />

            <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-purple-500/20 blur-3xl" />

            <div className="relative z-10">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-300">
                Contact Me
              </span>

              <h3 className="mt-3 text-2xl font-extrabold sm:text-3xl">
                Let's talk about your project.
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-300">
                Whether you need a website, web application, backend API or
                complete full-stack solution, feel free to reach out.
              </p>

              {/* Email */}
              <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/20 text-blue-300">
                    <Mail size={20} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Email
                    </p>

                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="mt-1 block truncate text-sm font-semibold text-white transition hover:text-blue-300"
                    >
                      {contactInfo.email}
                    </a>
                  </div>

                  <button
                    type="button"
                    aria-label="Copy email"
                    onClick={() =>
                      copyToClipboard(contactInfo.email, "email")
                    }
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10 text-slate-300 transition hover:bg-white/20 hover:text-white"
                  >
                    {copied === "email" ? (
                      <Check size={16} />
                    ) : (
                      <Copy size={16} />
                    )}
                  </button>
                </div>
              </div>

              {/* Phone */}
              <div className="mt-3 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-300">
                    <Phone size={20} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Phone
                    </p>

                    <a
                      href={`tel:${contactInfo.phone}`}
                      className="mt-1 block text-sm font-semibold text-white transition hover:text-emerald-300"
                    >
                      {contactInfo.phone}
                    </a>
                  </div>

                  <button
                    type="button"
                    aria-label="Copy phone number"
                    onClick={() =>
                      copyToClipboard(contactInfo.phone, "phone")
                    }
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10 text-slate-300 transition hover:bg-white/20 hover:text-white"
                  >
                    {copied === "phone" ? (
                      <Check size={16} />
                    ) : (
                      <Copy size={16} />
                    )}
                  </button>
                </div>
              </div>

              {/* Location */}
              <div className="mt-3 flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-purple-500/20 text-purple-300">
                  <MapPin size={20} />
                </div>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Location
                  </p>

                  <p className="mt-1 text-sm font-semibold text-white">
                    {contactInfo.location}
                  </p>
                </div>
              </div>

              {/* Availability */}
              <div className="mt-8 flex items-center gap-3 rounded-xl border border-emerald-400/20 bg-emerald-400/10 px-4 py-3">
                <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/50" />

                <div className="flex-1">
                  <p className="text-xs font-bold text-emerald-300">
                    Available for new projects
                  </p>

                  <p className="mt-0.5 text-[10px] text-slate-400">
                    Usually replies within 24 hours
                  </p>
                </div>

                <Clock3 size={17} className="text-emerald-300" />
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-900/5 sm:p-9">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
                Send Message
              </p>

              <h3 className="mt-2 text-2xl font-extrabold text-slate-900">
                Tell me about your project
              </h3>
            </div>

            {/* Status Message */}
            {status.message && (
              <div
                className={`mt-6 flex items-start gap-3 rounded-xl border p-4 ${
                  status.type === "success"
                    ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                    : "border-red-200 bg-red-50 text-red-700"
                }`}
              >
                {status.type === "success" ? (
                  <CheckCircle2 className="mt-0.5 shrink-0" size={20} />
                ) : (
                  <AlertCircle className="mt-0.5 shrink-0" size={20} />
                )}

                <p className="text-sm font-medium leading-6">
                  {status.message}
                </p>
              </div>
            )}

            <form onSubmit={handleEmailSubmit} className="mt-7 space-y-5">
              {/* Name + Email */}
              <div className="grid gap-5 sm:grid-cols-2">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-xs font-bold text-slate-700"
                  >
                    Your Name
                  </label>

                  <div className="relative">
                    <User
                      size={17}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      autoComplete="name"
                      placeholder="Please Enter Your Name"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-11 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-xs font-bold text-slate-700"
                  >
                    Email Address
                  </label>

                  <div className="relative">
                    <AtSign
                      size={17}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      autoComplete="email"
                      placeholder="Please Enter your Email"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-11 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                    />
                  </div>
                </div>
              </div>

              {/* Phone + Subject */}
              <div className="grid gap-5 sm:grid-cols-2">
                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-xs font-bold text-slate-700"
                  >
                    Phone Number
                  </label>

                  <div className="relative">
                    <Phone
                      size={17}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      autoComplete="tel"
                      placeholder="Please Enter Your Number"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-11 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-xs font-bold text-slate-700"
                  >
                    Subject
                  </label>

                  <div className="relative">
                    <FileText
                      size={17}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                      id="subject"
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project Discussion"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-11 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                    />
                  </div>
                </div>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-xs font-bold text-slate-700"
                >
                  Your Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="Tell me about your project, requirements, budget or timeline..."
                  className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm leading-6 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                />
              </div>

              {/* Buttons */}
              <div className="flex flex-col gap-3 sm:flex-row">
                <button
                  type="submit"
                  disabled={isSending}
                  className="group inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/25 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
                >
                  {isSending ? (
                    <>
                      <Loader2 size={17} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send
                        size={17}
                        className="transition-transform group-hover:translate-x-1"
                      />
                      Send Email
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={sendSMS}
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-bold text-slate-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
                >
                  <MessageSquare size={17} />
                  Send SMS
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Quick Contact Cards */}
        <div className="mt-7 grid gap-4 sm:grid-cols-3">
          {/* Email */}
          <a
            href={`mailto:${contactInfo.email}`}
            className="group rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
          >
            <div className="flex items-center justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <Mail size={19} />
              </div>

              <ArrowUpRight
                size={17}
                className="text-slate-300 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-blue-600"
              />
            </div>

            <h4 className="mt-4 font-bold text-slate-900">Email Me</h4>

            <p className="mt-1 truncate text-xs text-slate-500">
              {contactInfo.email}
            </p>
          </a>

          {/* SMS */}
          <button
            type="button"
            onClick={sendSMS}
            className="group rounded-2xl border border-slate-200 bg-white p-5 text-left transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-lg"
          >
            <div className="flex items-center justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                <MessageSquare size={19} />
              </div>

              <ArrowUpRight
                size={17}
                className="text-slate-300 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-emerald-600"
              />
            </div>

            <h4 className="mt-4 font-bold text-slate-900">Send SMS</h4>

            <p className="mt-1 text-xs text-slate-500">
              Quick message directly to my phone
            </p>
          </button>

          {/* Call */}
          <a
            href={`tel:${contactInfo.phone}`}
            className="group rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-purple-200 hover:shadow-lg"
          >
            <div className="flex items-center justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-50 text-purple-600">
                <Phone size={19} />
              </div>

              <ArrowUpRight
                size={17}
                className="text-slate-300 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-purple-600"
              />
            </div>

            <h4 className="mt-4 font-bold text-slate-900">Call Me</h4>

            <p className="mt-1 text-xs text-slate-500">
              {contactInfo.phone}
            </p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;