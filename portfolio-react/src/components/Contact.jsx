import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

export default function Contact() {
  const formRef = useRef(null);

  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = (formData) => {
    const newErrors = {};

    if (!formData.name || !formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email || !formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid";
    }

    if (!formData.subject || !formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message || !formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    return newErrors;
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData);

    const validationErrors = validateForm(data);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setIsSending(true);
      setStatus("");

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
        formRef.current.reset();
        setErrors({}); // Clear errors on success
      } catch (error) {
        console.error("EmailJS Error:", error);
        setStatus("error");
      } finally {
        setIsSending(false);
      }
    }
  };

  return (
    <section
      id="contact"
      className="scroll-mt-15 py-6 transition-colors sm:py-8"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-4xl">
            Let’s work together
          </h2>
        </div>

        <div className="mt-12 grid gap-8 lg:mt-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-colors dark:border-zinc-800 dark:bg-[#111111] sm:p-8 lg:p-6">
            <h3 className="text-xl font-semibold text-slate-950 dark:text-white">
              Get in touch
            </h3>

            <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400 lg:mt-2 lg:leading-6">
              I’d love to hear from you. The fastest way to reach me is through
              email or LinkedIn.
            </p>

            <div className="mt-8 space-y-5 lg:mt-4 lg:space-y-3">
              <a
                href="mailto:autirushikesh758@gmail.com"
                className="group flex items-start gap-4 rounded-2xl border border-slate-200 p-4 transition-all duration-300 hover:border-slate-300 hover:bg-slate-50 dark:border-zinc-800 dark:hover:border-zinc-700 dark:hover:bg-zinc-900 lg:gap-3 lg:p-3"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-700 transition-colors duration-300 group-hover:bg-slate-900 group-hover:text-white dark:bg-zinc-800 dark:text-slate-300 dark:group-hover:bg-white dark:group-hover:text-slate-950">
                  <FaEnvelope size={20} />
                </div>

                <div className="min-w-0">
                  <p className="font-medium text-slate-900 dark:text-white">
                    Email
                  </p>

                  <p className="mt-1 break-all text-sm text-slate-600 dark:text-slate-400">
                    autirushikesh758@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="https://linkedin.com/in/rushikesh-auti"
                target="_blank"
                rel="noreferrer"
                className="group flex items-start gap-4 rounded-2xl border border-slate-200 p-4 transition-all duration-300 hover:border-slate-300 hover:bg-slate-50 dark:border-zinc-800 dark:hover:border-zinc-700 dark:hover:bg-zinc-900 lg:gap-3 lg:p-3"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-700 transition-colors duration-300 group-hover:bg-slate-900 group-hover:text-white dark:bg-zinc-800 dark:text-slate-300 dark:group-hover:bg-white dark:group-hover:text-slate-950">
                  <FaLinkedin size={20} />
                </div>

                <div className="min-w-0">
                  <p className="font-medium text-slate-900 dark:text-white">
                    LinkedIn
                  </p>

                  <p className="mt-1 break-all text-sm text-slate-600 dark:text-slate-400">
                    linkedin.com/in/rushikesh-auti
                  </p>
                </div>
              </a>

              <a
                href="https://github.com/rushikesh-auti"
                target="_blank"
                rel="noreferrer"
                className="group flex items-start gap-4 rounded-2xl border border-slate-200 p-4 transition-all duration-300 hover:border-slate-300 hover:bg-slate-50 dark:border-zinc-800 dark:hover:border-zinc-700 dark:hover:bg-zinc-900 lg:gap-3 lg:p-3"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-700 transition-colors duration-300 group-hover:bg-slate-900 group-hover:text-white dark:bg-zinc-800 dark:text-slate-300 dark:group-hover:bg-white dark:group-hover:text-slate-950">
                  <FaGithub size={20} />
                </div>

                <div className="min-w-0">
                  <p className="font-medium text-slate-900 dark:text-white">
                    GitHub
                  </p>

                  <p className="mt-1 break-all text-sm text-slate-600 dark:text-slate-400">
                    github.com/rushikesh-auti
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-4 rounded-2xl border border-slate-200 p-4 dark:border-zinc-800 lg:gap-3 lg:p-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-700 dark:bg-zinc-800 dark:text-slate-300">
                  <FaMapMarkerAlt size={20} />
                </div>

                <div>
                  <p className="font-medium text-slate-900 dark:text-white">
                    Location
                  </p>

                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                    Pune, Maharashtra, India
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-colors dark:border-zinc-800 dark:bg-[#111111] sm:p-8 lg:p-6">
            <h3 className="text-xl font-semibold text-slate-950 dark:text-white">
              Send a message
            </h3>

            <form
              ref={formRef}
              onSubmit={sendEmail}
              className="mt-6 space-y-5 lg:mt-4 lg:space-y-3"
            >
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300 lg:mb-1"
                >
                  Full Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  required
                  autoComplete="name"
                  className={`w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-slate-900 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white dark:placeholder:text-zinc-500 dark:focus:border-white lg:py-2 ${
                    errors.name ? "border-red-500" : ""
                  }`}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name && (
                  <p
                    id="name-error"
                    className="mt-1 text-sm text-red-600 dark:text-red-400"
                    role="alert"
                  >
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300 lg:mb-1"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  required
                  autoComplete="email"
                  className={`w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-slate-900 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white dark:placeholder:text-zinc-500 dark:focus:border-white lg:py-2 ${
                    errors.email ? "border-red-500" : ""
                  }`}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && (
                  <p
                    id="email-error"
                    className="mt-1 text-sm text-red-600 dark:text-red-400"
                    role="alert"
                  >
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300 lg:mb-1"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Enter subject"
                  required
                  className={`w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-slate-900 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white dark:placeholder:text-zinc-500 dark:focus:border-white lg:py-2 ${
                    errors.subject ? "border-red-500" : ""
                  }`}
                  aria-invalid={!!errors.subject}
                  aria-describedby={errors.subject ? "subject-error" : undefined}
                />
                {errors.subject && (
                  <p
                    id="subject-error"
                    className="mt-1 text-sm text-red-600 dark:text-red-400"
                    role="alert"
                  >
                    {errors.subject}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300 lg:mb-1"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Write your message..."
                  required
                  className={`w-full resize-none rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-slate-900 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white dark:placeholder:text-zinc-500 dark:focus:border-white lg:py-2 ${
                    errors.message ? "border-red-500" : ""
                  }`}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "message-error" : undefined}
                />
                {errors.message && (
                  <p
                    id="message-error"
                    className="mt-1 text-sm text-red-600 dark:text-red-400"
                    role="alert"
                  >
                    {errors.message}
                  </p>
                )}
              </div>
              {status === "success" && (
                <div
                  role="status"
                  className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700 dark:border-emerald-900 dark:bg-emerald-950/40 dark:text-emerald-400"
                  aria-live="polite"
                >
                  Message sent successfully! I’ll get back to you soon.
                </div>
              )}

              {status === "error" && (
                <div
                  role="alert"
                  className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700 dark:border-red-900 dark:bg-red-950/40 dark:text-red-400"
                  aria-live="assertive"
                >
                  Something went wrong. Please try again or contact me directly
                  by email.
                </div>
              )}

              <button
                type="submit"
                disabled={isSending}
                className="inline-flex w-full items-center justify-center rounded-xl bg-slate-950 px-6 py-3 font-medium text-white transition-all duration-300 hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200 lg:py-2"
              >
                {isSending ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}