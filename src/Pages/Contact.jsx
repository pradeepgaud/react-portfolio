import React, { useState } from "react";
import {
  Mail,
  User,
  MessageSquare,
  Send,
  Linkedin,
  Github,
  Twitter,
} from "lucide-react";
import emailjs from "@emailjs/browser";

// Custom WhatsApp Icon Component
const WhatsAppIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488" />
  </svg>
);

function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const templateParams = {
      from_name: formData.fullName,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    emailjs
      .send(
        "service_mi4dhum",
        "template_c70rpjn",
        templateParams,
        "zJ3n3KrA2rODsY7P_"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setStatus("Message sent successfully ✅");
          setLoading(false);
          setFormData({ fullName: "", email: "", subject: "", message: "" });
        },
        (err) => {
          console.error("FAILED...", err);
          setStatus("Failed to send message ❌. Try again later.");
          setLoading(false);
        }
      );
  };

  return (
    <div
      id="contact"
      className="min-h-screen bg-black text-white relative overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-96 h-96 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"></div>
        <div className="absolute -bottom-40 -left-32 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-float-delayed"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-gradient-to-r from-indigo-400 to-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-slow"></div>
        <div className="absolute top-1/2 right-1/4 w-60 h-60 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full mix-blend-multiply filter blur-2xl opacity-15 animate-bounce-slow"></div>
      </div>

      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="relative z-10 container mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 animate-fade-in-up">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              CONTACT ME
            </span>
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-4 rounded-full animate-fade-in"></div>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="flex justify-center lg:justify-start mb-8">
              <div className="relative">
                <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 p-1">
                  <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center">
                    <User className="w-16 h-16 text-blue-400" />
                  </div>
                </div>
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-30 blur-lg animate-pulse"></div>
              </div>
            </div>

            <div className="text-center lg:text-left">
              <p className="text-gray-300 text-lg mb-6">Are you ready?</p>

              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                I BUILD{" "}
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  FULL-STACK
                </span>
                <br />
                WEB APPS THAT
                <br />
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  PERFORM
                </span>
              </h2>

              <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-md">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision. Whether you want to
                build a scalable web app or just say hello — I'd love to hear
                from you.
              </p>

              {/* Social Links */}
              <div className="flex gap-4 justify-center lg:justify-start">
                <a
                  href="https://www.linkedin.com/in/pradeepgaud/"
                  className="w-12 h-12 bg-blue-600/20 hover:bg-blue-600/40 border border-blue-500/30 hover:border-blue-400/50 rounded-lg flex items-center justify-center text-blue-400 hover:text-blue-300 transition-all duration-300 hover:transform hover:scale-110"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com/pradeepgaud"
                  className="w-12 h-12 bg-gray-600/20 hover:bg-gray-600/40 border border-gray-500/30 hover:border-gray-400/50 rounded-lg flex items-center justify-center text-gray-400 hover:text-gray-300 transition-all duration-300 hover:transform hover:scale-110"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://x.com/gaur25604?t=R9nUBXrTdik6jO95xQhfNw&s=09"
                  className="w-12 h-12 bg-cyan-600/20 hover:bg-cyan-600/40 border border-cyan-500/30 hover:border-cyan-400/50 rounded-lg flex items-center justify-center text-cyan-400 hover:text-cyan-300 transition-all duration-300 hover:transform hover:scale-110"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="https://wa.me/918824626379?text=Hello%20I%20would%20like%20to%20discuss%20a%20project"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-green-600/20 hover:bg-green-600/40 border border-green-500/30 hover:border-green-400/50 rounded-lg flex items-center justify-center text-green-400 hover:text-green-300 transition-all duration-300 hover:transform hover:scale-110"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="animate-fade-in-up-delayed">
            <div className="relative bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl rounded-3xl p-8 border border-blue-500/20">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-50 blur-sm"></div>
              <div className="absolute inset-[1px] rounded-3xl bg-gradient-to-br from-gray-900/90 via-black/80 to-gray-900/90 backdrop-blur-xl"></div>

              <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
                {/* Name and Email Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300 uppercase tracking-wider">
                      FULL NAME
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4" />
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Steve Milner"
                        className="w-full bg-gray-800/50 border border-gray-700/50 rounded-lg px-10 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300 uppercase tracking-wider">
                      EMAIL ADDRESS
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="hello@gmail.com"
                        className="w-full bg-gray-800/50 border border-gray-700/50 rounded-lg px-10 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300 uppercase tracking-wider">
                    SUBJECT
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4" />
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Your Subject"
                      className="w-full bg-gray-800/50 border border-gray-700/50 rounded-lg px-10 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                      required
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300 uppercase tracking-wider">
                    YOUR MESSAGE
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write Your message"
                    rows="6"
                    className="w-full bg-gray-800/50 border border-gray-700/50 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 resize-none"
                    required
                  ></textarea>
                </div>

                {/* Status message */}
                {status && (
                  <p className="text-center text-sm text-gray-300">{status}</p>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full ${
                    loading
                      ? "bg-gray-600 cursor-not-allowed"
                      : "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  } text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center gap-3`}
                >
                  {loading ? "Sending..." : "Send Me Message"}
                  {!loading && <Send className="w-5 h-5" />}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        @keyframes float-delayed {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-25px) rotate(5deg);
          }
        }
        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(-3deg);
          }
        }
        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0px) scale(1);
          }
          50% {
            transform: translateY(-10px) scale(1.05);
          }
        }
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fade-in-up-delayed {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 10s ease-in-out infinite;
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
        .animate-fade-in-up-delayed {
          animation: fade-in-up-delayed 1s ease-out 0.3s forwards;
          opacity: 0;
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out 0.5s forwards;
          opacity: 0;
        }
        .bg-grid-pattern {
          background-image: linear-gradient(
              rgba(255, 255, 255, 0.1) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.1) 1px,
              transparent 1px
            );
          background-size: 50px 50px;
        }
      `}</style>
    </div>
  );
}

export default Contact;
