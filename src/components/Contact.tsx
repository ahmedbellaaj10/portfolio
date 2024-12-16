import { useState } from "react";
import { Mail, MapPin, Phone, FileDown } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import emailjs from "emailjs-com";

export default function Contact() {
  const sectionRef = useScrollReveal();

  // State for form inputs and errors
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Reset error on change
  };

  // Validate form inputs
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
    if (!validateForm()) return; // Stop submission if validation fails

    emailjs
      .sendForm(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,   // Access Service ID
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,  // Access Template ID
          e.target as HTMLFormElement,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY    // Access Public Key
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" }); // Clear form
        },
        (error) => {
          console.error("Error sending email:", error.text);
          alert("Failed to send message. Please try again later.");
        }
      );
  };

  return (
    <section id="contact" className="py-24 bg-dark-200">
      <div ref={sectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Get in Touch</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Let’s discuss how we can work together on your next data project!
          </p>
          <a
            href="./media/ahmed-belaaj-cv.pdf"
            download
            className="inline-flex items-center px-6 py-3 mt-8 bg-dark-100 border-2 border-accent-primary text-white rounded-lg hover:bg-accent-primary/10 transition-all duration-300 group"
          >
            <FileDown className="h-5 w-5 mr-2 group-hover:animate-bounce" />
            Download My CV
          </a>
        </div>

        {/* Contact Form and Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-dark-100 p-8 rounded-lg border border-accent-primary/20">
            <form className="space-y-6" onSubmit={sendEmail}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`mt-1 block w-full rounded-md bg-dark-300 text-white ${
                    errors.name ? "border-red-500" : "border-accent-primary/20"
                  }`}
                  placeholder="Your name"
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`mt-1 block w-full rounded-md bg-dark-300 text-white ${
                    errors.email ? "border-red-500" : "border-accent-primary/20"
                  }`}
                  placeholder="your@email.com"
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className={`mt-1 block w-full rounded-md bg-dark-300 text-white ${
                    errors.message ? "border-red-500" : "border-accent-primary/20"
                  }`}
                  placeholder="Your message"
                />
                {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
              </div>
              <button
                type="submit"
                className="w-full bg-accent-primary text-white py-2 px-4 rounded-md hover:bg-accent-secondary transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Details */}
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <Mail className="h-6 w-6 text-accent-primary" />
              <div>
                <h3 className="text-lg font-medium text-white">Email</h3>
                <a
                  href="mailto:ahmed-bellaaj@outlook.com"
                  className="text-gray-400 hover:text-accent-primary transition"
                >
                  ahmed-bellaaj@outlook.com
                </a>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Phone className="h-6 w-6 text-accent-primary" />
              <div>
                <h3 className="text-lg font-medium text-white">Phone</h3>
                <p className="text-gray-400">+33 7 44 40 45 07</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Phone className="h-6 w-6 text-accent-primary" />
              <div>
                <h3 className="text-lg font-medium text-white">WhatsApp</h3>
                <a
                  href="https://wa.me/21693280380"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-accent-primary transition"
                >
                  Message on WhatsApp
                </a>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <MapPin className="h-6 w-6 text-accent-primary" />
              <div>
                <h3 className="text-lg font-medium text-white">Location</h3>
                <p className="text-gray-400">Paris, France</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
