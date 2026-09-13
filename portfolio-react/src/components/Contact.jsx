import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

const initialErrors = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function Contact() {
  const formRef = useRef(null);

  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState("");
  const [errors, setErrors] = useState(initialErrors);

  const validateForm = (formData) => {
    const newErrors = {};

    const name = formData.name?.trim();
    const email = formData.email?.trim();
    const subject = formData.subject?.trim();
    const message = formData.message?.trim();

    // Name validation
    if (!name) {
      newErrors.name = "Name is required.";
    } else if (name.length < 2) {
      newErrors.name = "Name must be at least 2 characters.";
    }

    // Email validation
    if (!email) {
      newErrors.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    // Subject validation
    if (!subject) {
      newErrors.subject = "Subject is required.";
    } else if (subject.length < 3) {
      newErrors.subject = "Subject must be at least 3 characters.";
    }

    // Message validation
    if (!message) {
      newErrors.message = "Message is required.";
    } else if (message.length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
    } else if (message.length > 1000) {
      newErrors.message = "Message cannot exceed 1000 characters.";
    }

    return newErrors;
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    if (!formRef.current) return;

    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData);

    const validationErrors = validateForm(data);

    setErrors(validationErrors);
    setStatus("");

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setIsSending(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        },
      );

      setStatus("success");
      setErrors(initialErrors);
      formRef.current.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
    } finally {
      setIsSending(false);
    }
  };

  const inputClass = (field) =>
    `w-full rounded-xl border bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-all duration-200 placeholder:text-slate-400 focus:ring-2 dark:bg-zinc-950 dark:text-white dark:placeholder:text-zinc-500 ${
      errors[field]
        ? "border-red-500 focus:border-red-500 focus:ring-red-500/10 dark:border-red-500"
        : "border-slate-300 focus:border-slate-950 focus:ring-slate-950/10 dark:border-zinc-700 dark:focus:border-white dark:focus:ring-white/10"
    }`;

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="scroll-mt-15 bg-slate-50 py-5 sm:py-5 lg:py-5"
    >
      <div className="section-shell">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="contact-title"
            className="mt-4 text-3xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-4xl"
          >
            Let&apos;s work together
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-400">
            Have a project, opportunity, or just want to connect? Feel free to
            send me a message. I&apos;d be happy to hear from you.
          </p>
        </div>

        {/* Contact Content */}
        <div className="section-content-grid mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Contact Information */}
          <div className="surface-card p-6 dark:border-zinc-800 dark:bg-[#111111] sm:p-8">
            <div>
              <h3 className="text-xl font-semibold text-slate-950 dark:text-white">
                Contact information
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                The best way to reach me is through email or LinkedIn. You can
                also explore my GitHub to see my projects and development work.
              </p>
            </div>

            <div className="mt-8 space-y-3">
              {/* Email */}
              <a
                href="mailto:autirushikesh758@gmail.com"
                className="group flex items-center gap-4 rounded-2xl border border-slate-200 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50 hover:shadow-sm dark:border-zinc-800 dark:hover:border-zinc-700 dark:hover:bg-zinc-900"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-700 transition-colors group-hover:bg-slate-900 group-hover:text-white dark:bg-zinc-800 dark:text-slate-300 dark:group-hover:bg-white dark:group-hover:text-slate-950">
                  <FaEnvelope size={19} />
                </div>

                <div className="min-w-0">
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">
                    Email
                  </p>

                  <p className="mt-1 break-all text-sm text-slate-600 dark:text-slate-400">
                    autirushikesh758@gmail.com
                  </p>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/rushikesh-auti"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-slate-200 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50 hover:shadow-sm dark:border-zinc-800 dark:hover:border-zinc-700 dark:hover:bg-zinc-900"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-700 transition-colors group-hover:bg-slate-900 group-hover:text-white dark:bg-zinc-800 dark:text-slate-300 dark:group-hover:bg-white dark:group-hover:text-slate-950">
                  <FaLinkedin size={19} />
                </div>

                <div className="min-w-0">
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">
                    LinkedIn
                  </p>

                  <p className="mt-1 break-all text-sm text-slate-600 dark:text-slate-400">
                    linkedin.com/in/rushikesh-auti
                  </p>
                </div>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/rushikesh-auti"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-slate-200 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50 hover:shadow-sm dark:border-zinc-800 dark:hover:border-zinc-700 dark:hover:bg-zinc-900"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-700 transition-colors group-hover:bg-slate-900 group-hover:text-white dark:bg-zinc-800 dark:text-slate-300 dark:group-hover:bg-white dark:group-hover:text-slate-950">
                  <FaGithub size={19} />
                </div>

                <div className="min-w-0">
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">
                    GitHub
                  </p>

                  <p className="mt-1 break-all text-sm text-slate-600 dark:text-slate-400">
                    github.com/rushikesh-auti
                  </p>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-4 rounded-2xl border border-slate-200 p-4 dark:border-zinc-800">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-700 dark:bg-zinc-800 dark:text-slate-300">
                  <FaMapMarkerAlt size={19} />
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">
                    Location
                  </p>

                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                    Pune, Maharashtra, India
                  </p>
                </div>
              </div>
            </div>

            {/* Availability */}
            <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 dark:border-emerald-900/50 dark:bg-emerald-950/20">
              <div className="flex items-start gap-3">
                <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-500" />

                <div>
                  <p className="text-sm font-semibold text-emerald-800 dark:text-emerald-400">
                    Open to opportunities
                  </p>

                  <p className="mt-1 text-xs leading-5 text-emerald-700/80 dark:text-emerald-500/80">
                    Available for software development roles, internships, and
                    interesting projects.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="surface-card p-6 dark:border-zinc-800 dark:bg-[#111111] sm:p-8">
            <div>
              <h3 className="text-xl font-semibold text-slate-950 dark:text-white">
                Send a message
              </h3>

              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                Fill out the form below and I&apos;ll get back to you as soon as
                possible.
              </p>
            </div>

            <form
              ref={formRef}
              onSubmit={sendEmail}
              noValidate
              className="mt-7 space-y-5"
            >
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300"
                >
                  Full Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  autoComplete="name"
                  maxLength={80}
                  required
                  className={inputClass("name")}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />

                {errors.name && (
                  <p
                    id="name-error"
                    className="mt-1.5 flex items-center gap-1 text-xs text-red-600 dark:text-red-400"
                    role="alert"
                  >
                    <AlertCircle size={13} />
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                  maxLength={120}
                  required
                  className={inputClass("email")}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />

                {errors.email && (
                  <p
                    id="email-error"
                    className="mt-1.5 flex items-center gap-1 text-xs text-red-600 dark:text-red-400"
                    role="alert"
                  >
                    <AlertCircle size={13} />
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="What would you like to discuss?"
                  maxLength={120}
                  required
                  className={inputClass("subject")}
                  aria-invalid={Boolean(errors.subject)}
                  aria-describedby={
                    errors.subject ? "subject-error" : undefined
                  }
                />

                {errors.subject && (
                  <p
                    id="subject-error"
                    className="mt-1.5 flex items-center gap-1 text-xs text-red-600 dark:text-red-400"
                    role="alert"
                  >
                    <AlertCircle size={13} />
                    {errors.subject}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Write your message..."
                  maxLength={1000}
                  required
                  className={`${inputClass("message")} resize-none`}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={
                    errors.message ? "message-error" : undefined
                  }
                />

                {errors.message && (
                  <p
                    id="message-error"
                    className="mt-1.5 flex items-center gap-1 text-xs text-red-600 dark:text-red-400"
                    role="alert"
                  >
                    <AlertCircle size={13} />
                    {errors.message}
                  </p>
                )}

                <p className="mt-1.5 text-right text-xs text-slate-400 dark:text-zinc-500">
                  Maximum 1000 characters
                </p>
              </div>

              {/* Success Message */}
              {status === "success" && (
                <div
                  role="status"
                  aria-live="polite"
                  className="flex items-start gap-3 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700 dark:border-emerald-900/50 dark:bg-emerald-950/30 dark:text-emerald-400"
                >
                  <CheckCircle2 className="mt-0.5 shrink-0" size={18} />

                  <div>
                    <p className="font-semibold">Message sent successfully!</p>
                    <p className="mt-0.5 text-xs opacity-90">
                      Thanks for reaching out. I&apos;ll get back to you soon.
                    </p>
                  </div>
                </div>
              )}

              {/* Error Message */}
              {status === "error" && (
                <div
                  role="alert"
                  aria-live="assertive"
                  className="flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 dark:border-red-900/50 dark:bg-red-950/30 dark:text-red-400"
                >
                  <AlertCircle className="mt-0.5 shrink-0" size={18} />

                  <div>
                    <p className="font-semibold">
                      Unable to send your message.
                    </p>

                    <p className="mt-0.5 text-xs opacity-90">
                      Please try again or contact me directly by email.
                    </p>
                  </div>
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={isSending}
                className="btn-primary w-full disabled:cursor-not-allowed disabled:translate-y-0 disabled:opacity-60"
              >
                {isSending ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={17} />
                    Send Message
                  </>
                )}
              </button>

              <p className="text-center text-xs text-slate-400 dark:text-zinc-500">
                Your information is only used to respond to your message.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
