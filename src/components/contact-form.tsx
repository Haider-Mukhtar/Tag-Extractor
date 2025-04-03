import { Github, Linkedin, Twitter } from 'lucide-react';
import { useState } from "react";
import SpotlightCard from "./ui/spot-light-card"

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    setErrors({ ...errors, [e.target.id]: "" }); // Clear error on change
  };

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation checks
    let newErrors = {
      name: formData.name.trim() === "" ? "Full Name is required." : "",
      email: formData.email.trim() === "" ? "Email is required." : !validateEmail(formData.email) ? "Invalid email format" : "",
      subject: formData.subject.trim() === "" ? "Subject is required." : "",
      message: formData.message.trim() === "" ? "Message is required." : "",
    };

    setErrors(newErrors);

    // If any error exists, stop submission
    if (Object.values(newErrors).some(error => error !== "")) return;

    // Log data
    console.log("Form Submitted:", formData);

    // Clear form after successful submission
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <SpotlightCard className="custom-spotlight-card mb-10" spotlightColor="rgba(255, 255, 255, 0.2)">
      <div className="lg:grid grid-cols-3">
        {/* Text Content */}
        <div className="text-base md:text-lg text-white space-y-4 mb-6 lg:my-auto">
          <p className="text-xl md:text-2xl lg:text-4xl font-semibold">
            Get in Touch
          </p>
          <p>
            We’d love to hear from you! Whether you have questions, feedback, or suggestions, feel free to reach out. Our team is here to help and ensure you get the best experience with YT Tags Extractor.
          </p>
          <p>
            If you need support or have any inquiries about our tool, don’t hesitate to contact us. We’ll get back to you as soon as possible!
          </p>
          {/* Social Links */}
          <div className='my-4 flex gap-6 items-center justify-center'>
            <a href='#' className='rounded-xl border border-white/10 hover:border-white/50 text-white bg-white/20 backdrop-blur-lg aspect-square w-12 flex justify-center items-center hover:scale-105 duration-300 drop-shadow-2xl shadow-blue-500'>
              <Twitter className='size-5' />
            </a>
            <a href='#' target='_blank' className='rounded-xl border border-white/10 hover:border-white/50 text-white bg-white/20 backdrop-blur-lg aspect-square w-12 flex justify-center items-center hover:scale-105 duration-300 drop-shadow-2xl shadow-blue-500'>
              <Github className='size-5' />
            </a>
            <a href='#' className='rounded-xl border border-white/10 hover:border-white/50 text-white bg-white/20 backdrop-blur-lg aspect-square w-12 flex justify-center items-center hover:scale-105 duration-300'>
              <Linkedin className='size-5' />
            </a>
          </div>
        </div>
        {/* Form */}
        <div className="lg:pl-6 col-span-2 space-y-3 borde">
          {/* Name Input Field */}
          <div className="space-y-0.5">
            <label htmlFor="name" className="text-base font-medium text-white">
              Full Name&nbsp;<span className="text-red-600">*</span>&nbsp;
              {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
            </label>
            <input
              id="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter Your Name"
              className="flex-grow px-4 py-3 w-full rounded-lg border border-white/20 bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#0000B6] transition-all text-white"
            />
          </div>
          {/* Email Input Field */}
          <div className="space-y-0.5">
            <label htmlFor="email" className="text-base font-medium text-white">
              Email Address&nbsp;<span className="text-red-600">*</span>&nbsp;
              {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
            </label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter Your Email"
              className="flex-grow px-4 py-3 w-full rounded-lg border border-white/20 bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#0000B6] transition-all text-white"
            />
          </div>
          {/* Subject Input Field */}
          <div className="space-y-0.5">
            <label htmlFor="subject" className="text-base font-medium text-white">
              Subject&nbsp;<span className="text-red-600">*</span>&nbsp;
              {errors.subject && <span className="text-red-500 text-sm">{errors.subject}</span>}
            </label>
            <input
              id="subject"
              type="text"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Enter Subject"
              className="flex-grow px-4 py-3 w-full rounded-lg border border-white/20 bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#0000B6] transition-all text-white"
            />
          </div>
          {/* Message Input Field */}
          <div className="space-y-0.5">
            <label htmlFor="message" className="text-base font-medium text-white">
              Message&nbsp;<span className="text-red-600">*</span>&nbsp;
              {errors.message && <span className="text-red-500 text-sm">{errors.message}</span>}
            </label>
            <textarea
              id="message"
              typeof="text"
              rows={6}
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter Message"
              className="flex-grow px-4 py-3 w-full rounded-lg border border-white/20 bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#0000B6] transition-all text-white"
            />
          </div>
          {/* Submit Btn */}
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-white/20 border border-white/60 text-white px-6 md:px-8 py-3 rounded-lg hover:opacity-90 disabled:opacity-50 hover:border-white/50 transition-all duration-300 flex items-center justify-center gap-2 w-full"
            >
              Submit
          </button>
        </div>
      </div>
    </SpotlightCard>
  )
}

export default ContactForm