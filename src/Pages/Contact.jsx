import { FiClock } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { BiPhone } from "react-icons/bi";
import { BiMap } from "react-icons/bi";
import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  // Simple validation
  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = "Enter a valid email";
    if (!form.message.trim() || form.message.length < 10)
      newErrors.message = "Message must be at least 10 characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Submit to Formspree
  const handleContactSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
      setErrors({});
    } catch (error) {
      alert("Something went wrong. Try again!");
    }
  };
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/xgvronjl", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setSubmitted(true);
        setEmail("");
      } else {
        alert("Something went wrong. Try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Error submitting form");
    }
  };
  return (
    <>
      <section className="bg-[#0a8a43] text-white py-16 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-white/90">
              Get in touch with our team of experts. We're here to help with all
              your accounting needs.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          {/* Contact Form */}
          <div className="bg-wite p-8 rounded-lg shadow-md border col-span-3 border-gray-300">
            <h2 className="text-[32px] w-1/2 pb-5 max-md:w-full leading-[30px] font-semibold">
              <span className="text-[#0a8a43]">Get in Touch</span> with us
              <span className="text-[#0a8a43]"> Today!</span>
            </h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Subject *
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Message *
                </label>
                <textarea
                  rows="5"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#0a8a43] text-white py-3 rounded hover:bg-black transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8 col-span-2">
            <div className="flex items-start gap-5 p-4 border border-gray-300 rounded-lg">
              <div className="p-3 rounded-lg bg-gray-200 flex items-center justify-center">
                {/* <MapPin className="w-6 h-6 text-blue-900 mr-4" /> */}
                <BiMap size={28} />
              </div>
              <div className="text-gray-700">
                <p className="font-medium text-black">Office Location</p>
                <p>123 Business St, Suite 100</p>
                <p>New York, NY 10001</p>
              </div>
            </div>

            <div className="flex items-start p-4 border border-gray-300 rounded-lg gap-5">
              <div className="p-3 rounded-lg bg-gray-200 flex items-center justify-center">
                {/* <MapPin className="w-6 h-6 text-blue-900 mr-4" /> */}
                <BiPhone size={28} />
              </div>
              <div className="text-gray-700">
                <p className="font-medium text-black">Phone</p>
                <p>(555) 123-4567</p>
              </div>
            </div>

            <div className="flex items-start p-4 border border-gray-300 rounded-lg gap-5">
              <div className="p-3 rounded-lg bg-gray-200 flex items-center justify-center">
                {/* <MapPin className="w-6 h-6 text-blue-900 mr-4" /> */}
                <FiMail size={28} />
              </div>
              <div className="text-gray-700">
                <p className="font-medium text-black">Email</p>
                <p>info@accountingconsultants.com</p>
              </div>
            </div>

            <div className="flex items-start p-4 border border-gray-300 rounded-lg gap-5">
              <div className="p-3 rounded-lg bg-gray-200 flex items-center justify-center">
                {/* <MapPin className="w-6 h-6 text-blue-900 mr-4" /> */}
                <FiClock size={28} />
              </div>
              <div className="text-gray-700">
                <p className="font-medium text-black">Business Hours</p>
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 2:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Visit Our Office
          </h2>
          <div className="aspect-video w-full max-w-5xl mx-auto rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0a8a43] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Prefer to Talk Directly?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Give us a call and speak with one of our accounting professionals
            today
          </p>
          <a href="tel:5551234567">
            <button className="bg-accent hover:bg-accent/90 text-lg px-8">
              Call (555) 123-4567
            </button>
          </a>
        </div>
      </section>

      <section className="py-20 px-6 md:px-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Stay Updated with{" "}
            <span className="text-[#0a8a43]">Henry Young & Co.</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-10">
            Subscribe to our newsletter to get insights on business growth, tax
            tips, and financial strategies from our experts — straight to your
            inbox.
          </p>

          {/* Form */}
          {!submitted ? (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-xl mx-auto"
            >
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full sm:flex-1 py-3 px-5 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 placeholder-gray-400"
              />
              <button
                type="submit"
                className="bg-[#0a8a43] hover:bg-black text-white font-semibold py-3 px-8 rounded-full transition-all duration-300"
              >
                Subscribe
              </button>
            </form>
          ) : (
            <p className="text-green-600 text-lg font-medium mt-6 h-[50px]">
              Thanks for subscribing! You’ll hear from us soon.
            </p>
          )}
        </div>
      </section>
    </>
  );
};

export default Contact;
