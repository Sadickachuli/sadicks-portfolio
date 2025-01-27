import { useState } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const templateParams = {
      name: name,
      email: email,
      message: message,
      my_name: "Sadick", // Your name
    };

    emailjs
      .send(
        "service_30nc7pj",    // Replace with your EmailJS service ID
        "template_24xbgb8",   // Replace with your EmailJS template ID
        templateParams,
        "3GMI_6tyXvS7vs32e"   // Replace with your EmailJS user ID
      )
      .then(
        (response) => {
          toast.success("Message sent successfully!", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: true,
          });
        },
        (error) => {
          toast.error("Failed to send message. Please try again.", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: true,
          });
        }
      );
  };

  return (
    <article className="bg-secondary/50 padd py-12">
      <ToastContainer /> {/* Toast notifications container */}
      <section className="text-6xl font-sans text-center pb-10">
        <p className="text-primary">Let's get in touch!</p>
      </section>

      {/* Contact Form Section */}
      <section className="flex justify-center items-center mb-12">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 w-full max-w-lg px-4"
        >
          <div className="p-1 rounded-full border border-primary flex items-center">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your Name"
              onChange={(e) => setName(e.target.value)}
              value={name}
              className="p-4 px-6 w-full bg-transparent text-lg outline-none"
              required
            />
          </div>
          <div className="p-1 rounded-full border border-primary flex items-center">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="p-4 px-6 w-full bg-transparent text-lg outline-none"
              required
            />
          </div>
          <div className="p-1 rounded-full border border-primary flex items-center">
            <textarea
              name="message"
              id="message"
              placeholder="Your Message"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              className="p-4 px-6 w-full bg-transparent text-lg outline-none resize-none"
              rows={4}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-primary text-black py-4 px-10 rounded-full mt-4"
          >
            Submit
          </button>
        </form>
      </section>

      {/* Footer Section */}
      <section className="flex justify-between text-gray-500 pt-12 border-t border-primary/30 px-8">
        <div className="relative group overflow-hidden">
          <p className="group-hover:bottom-full group-hover:-translate-y-full transition-all duration-200">
            Cookies and Privacy
          </p>
          <p className="text-primary absolute top-full left-0 group-hover:-translate-y-full transition-all duration-200">
            Cookies and Privacy
          </p>
        </div>
        <p>Copyright &copy; 2025. Sadick - All Rights Reserved</p>
      </section>
    </article>
  );
}
