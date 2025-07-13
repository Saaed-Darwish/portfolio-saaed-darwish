import React from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { toast } from 'react-hot-toast';

const Hero = () => {
  return <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
    {/* Animated background elements */}
    <div className="absolute inset-0 opacity-20">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
      <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
    </div>

    <div className="container mx-auto px-6 text-center relative z-10">
      <div className="animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-scale-in my-0 py-[10px]">
          Saaed Darwish
        </h1>
        <h2 className="text-2xl md:text-3xl text-gray-300 mb-8 animate-fade-in animation-delay-300">
          Software Engineering Student at University of Calgary
        </h2>
        <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto animate-fade-in animation-delay-500">
          Software Engineering student at University of Calgary, passionate about creating innovative solutions
          and exploring cutting-edge technologies across multiple programming languages. Building the future,
          one line of code at a time
        </p>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-12 animate-fade-in animation-delay-700">
          <a href="https://github.com/Saaed-Darwish" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110" title="Open GitHub in new tab.">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://linkedin.com/in/saaed-darwish-7b3709339/" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110" title="Open LinkedIn in new tab.">
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            onClick={() => {
              navigator.clipboard.writeText('saaeddarwish1@gmail.com')
                .then(() => toast.success("Email copied to clipboard!"))
                .catch(() => toast.error("Failed to copy email."));
            }}
            className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110 cursor-pointer"
            title="Copy email to clipboard"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in animation-delay-1000">
          <button onClick={() => document.getElementById('projects')?.scrollIntoView({
            behavior: 'smooth'
          })} className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
            View My Work
          </button>
          <button onClick={() => document.getElementById('contact')?.scrollIntoView({
            behavior: 'smooth'
          })} className="px-8 py-3 border-2 border-white/30 rounded-full font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300 transform hover:scale-105">
            Get In Touch
          </button>
        </div>
      </div>
    </div>

    {/* Scroll indicator */}
    <div className="absolute bottom-8 inset-x-0 mx-auto w-fit animate-bounce">
      <ChevronDown className="w-8 h-8 text-white/60" />
    </div>
  </section>;
};
export default Hero;