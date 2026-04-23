import { useState } from "react";
import { Mail, MapPin, Phone, Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useScrollReveal } from "../hooks/useScrollReveal";
import emailjs from "emailjs-com";
import ResumeDownloadButton from "./ResumeDownloadButton";

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const sectionRef = useScrollReveal();

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { name: "", email: "", message: "" };

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
      valid = false;
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format.";
      valid = false;
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message cannot be empty.";
      valid = false;
    } else if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters long.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;

    setStatus("sending");
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        e.target as HTMLFormElement,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 4000);
      })
      .catch(() => {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 4000);
      });
  };

  const inputBase =
    "mt-1 block w-full rounded-md bg-dark-300 text-white placeholder-gray-500 " +
    "px-4 py-2.5 border transition-all duration-300 outline-none " +
    "focus:ring-2 focus:ring-accent-primary/20 ";

  const inputClass = (field: keyof typeof errors) =>
    inputBase + (errors[field]
      ? "border-red-500 focus:border-red-500"
      : "border-accent-primary/20 focus:border-accent-primary");

  return (
    <section id="contact" className="py-24 bg-dark-200">
      <div ref={sectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Get in Touch</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Let's discuss how we can work together on your next AI project.
          </p>
          <ResumeDownloadButton
            label="Download My CV"
            className="inline-flex items-center px-6 py-3 mt-8 bg-dark-100 border-2 border-accent-primary text-white rounded-lg hover:bg-accent-primary/10 transition-all duration-300 group"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Form card — matches SkillCategory / Expertise card style */}
          <div className="bg-dark-100 p-8 rounded-lg border border-accent-primary/20 hover:border-accent-primary hover:shadow-lg hover:shadow-accent-primary/5 transition-all duration-300">
            <form className="space-y-5" onSubmit={sendEmail}>

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={inputClass("name")}
                  placeholder="Your name"
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                    <AlertCircle className="h-3 w-3" /> {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={inputClass("email")}
                  placeholder="your@email.com"
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                    <AlertCircle className="h-3 w-3" /> {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={inputClass("message")}
                  placeholder="What would you like to discuss?"
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                    <AlertCircle className="h-3 w-3" /> {errors.message}
                  </p>
                )}
              </div>

              {/* Submit — matches app button style */}
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-md
                  bg-accent-primary hover:bg-accent-secondary text-white font-medium text-sm
                  shadow-sm hover:scale-105 disabled:opacity-60 disabled:cursor-not-allowed
                  transition-all duration-300"
              >
                {status === "sending" ? (
                  <><Loader2 className="h-4 w-4 animate-spin" /> Sending…</>
                ) : (
                  <><Send className="h-4 w-4" /> Send Message</>
                )}
              </button>

              {status === "success" && (
                <p className="flex items-center justify-center gap-2 text-sm text-green-400">
                  <CheckCircle className="h-4 w-4" /> Message sent — I'll get back to you soon!
                </p>
              )}
              {status === "error" && (
                <p className="flex items-center justify-center gap-2 text-sm text-red-400">
                  <AlertCircle className="h-4 w-4" /> Failed to send. Please try again.
                </p>
              )}

            </form>
          </div>

          {/* Contact details — each card mirrors Expertise card style */}
          <div className="space-y-4 stagger">
            {[
              {
                Icon: Mail,
                label: "Email",
                content: (
                  <a href="mailto:ahmed-bellaaj@outlook.com"
                    className="text-gray-400 hover:text-accent-primary transition-colors duration-300">
                    ahmed-bellaaj@outlook.com
                  </a>
                ),
              },
              {
                Icon: Phone,
                label: "Phone",
                content: <p className="text-gray-400">+33 7 44 40 45 01</p>,
              },
              {
                Icon: FaWhatsapp,
                label: "WhatsApp",
                content: (
                  <a href="https://wa.me/21693280380" target="_blank" rel="noopener noreferrer"
                    className="text-gray-400 hover:text-accent-primary transition-colors duration-300">
                    Message on WhatsApp
                  </a>
                ),
              },
              {
                Icon: MapPin,
                label: "Location",
                content: <p className="text-gray-400">Paris, France</p>,
              },
            ].map(({ Icon, label, content }) => (
              <div key={label}
                className="group flex items-start space-x-4 p-6 bg-dark-100 rounded-lg
                  border border-accent-primary/20 hover:border-accent-primary
                  hover:shadow-lg hover:shadow-accent-primary/5
                  transition-all duration-300">
                <Icon className="h-6 w-6 text-accent-primary mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-accent-primary transition-colors duration-300">
                    {label}
                  </h3>
                  {content}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
