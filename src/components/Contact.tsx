
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram } from 'lucide-react';
import { toast } from "react-hot-toast";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "saaeddarwish1@gmail.com",
      copyToClipboard: true
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "+1 (403) 796-7596",
      link: "tel:+14037967596"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "Calgary, Alberta, Canada"
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      name: "GitHub",
      url: "https://github.com/Saaed-Darwish",
      color: "hover:text-slate-200"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      name: "LinkedIn",
      url: "https://linkedin.com/in/saaed-darwish-7b3709339/",
      color: "hover:text-blue-400"
    },
    {
      icon: <Instagram className="w-6 h-6" />,
      name: "Instagram",
      url: "https://www.instagram.com/cooookieeeeeeeee/",
      color: "hover:text-blue-400"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-slate-800 relative overflow-hidden">
      {/* Parallax background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute top-2/3 right-1/5 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-slate-900/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-slate-700/50">
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>

            <form action="https://formsubmit.co/saaeddarwish1@gmail.com" method="POST" className="space-y-6">
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="box" />
              <input type="hidden" name="_next" value="https://yourdomain.com/thank-you" />

              <p className="hidden">
                <label>Don’t fill this out: <input name="_honey" /></label>
              </p>

              {/* Name + Email fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name">Name</label>
                  <input type="text" name="name" required />
                </div>
                <div>
                  <label htmlFor="email">Email</label>
                  <input type="email" name="email" required />
                </div>
              </div>

              <div>
                <label htmlFor="subject">Subject</label>
                <input type="text" name="subject" required />
              </div>

              <div>
                <label htmlFor="message">Message</label>
                <textarea name="message" rows={5} required />
              </div>

              <button type="submit" className="...">
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={info.title}
                    href={info.copyToClipboard ? undefined : info.link}
                    onClick={(e) => {
                      if (info.copyToClipboard) {
                        e.preventDefault(); // prevent mailto:
                        navigator.clipboard.writeText(info.value)
                          .then(() => toast.success("Email copied to clipboard!"))
                          .catch(() => toast.error("Failed to copy email."));
                      }
                    }}
                    className="flex items-center space-x-4 p-4 bg-slate-900/80 backdrop-blur-sm rounded-lg shadow-md hover:bg-slate-800/80 transition-all duration-200 transform hover:-translate-y-1 border border-slate-700/50 cursor-pointer"
                    title={info.copyToClipboard ? "Copy email to clipboard" : undefined}
                  >
                    <div className="text-blue-400">
                      {info.icon}
                    </div>
                    <div>
                      <div className="font-medium text-white">{info.title}</div>
                      <div className="text-slate-300">{info.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold text-white mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-slate-900/80 backdrop-blur-sm rounded-lg shadow-md hover:bg-slate-800/80 transition-all duration-200 transform hover:-translate-y-1 text-slate-400 ${social.color} border border-slate-700/50`}
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-900/40 to-purple-900/40 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50">
              <h4 className="text-xl font-bold text-white mb-3">Let's Collaborate!</h4>
              <p className="text-slate-300 leading-relaxed">
                I'm always open to discussing new opportunities, interesting projects,
                or potential collaborations. Whether you have a specific project in mind
                or just want to connect, don't hesitate to reach out!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
