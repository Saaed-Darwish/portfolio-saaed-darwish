
import React from 'react';
import { BookOpen, Award, Coffee, Heart } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: <BookOpen className="w-8 h-8" />, value: "3+", label: "Years of Study" },
    { icon: <Award className="w-8 h-8" />, value: "15+", label: "Projects Completed" },
    { icon: <Coffee className="w-8 h-8" />, value: "∞", label: "Cups of Coffee" },
    { icon: <Heart className="w-8 h-8" />, value: "100%", label: "Passion for Code" }
  ];

  return (
    <section className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Parallax background elements */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-1/4 right-1/3 w-80 h-80 bg-green-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/5 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-3000"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Image and stats */}
          <div className="space-y-8">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop&crop=face" 
                alt="Profile"
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-8 -right-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-xl shadow-lg">
                <div className="text-2xl font-bold">CS Student</div>
                <div className="text-sm opacity-90">Always Learning</div>
              </div>
            </div>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 mt-12">
              {stats.map((stat, index) => (
                <div 
                  key={stat.label}
                  className="text-center p-4 bg-slate-800/80 backdrop-blur-sm rounded-lg hover:bg-slate-700/80 transition-colors duration-200 animate-fade-in border border-slate-700/50"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="text-blue-400 mb-2 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-slate-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right side - Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                About Me
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mb-8"></div>
            </div>
            
            <div className="space-y-4 text-slate-300 text-lg leading-relaxed">
              <p>
                I'm a passionate Computer Science student with a love for creating innovative 
                solutions and exploring the endless possibilities of technology. My journey 
                started with curiosity about how things work and has evolved into a deep 
                appreciation for elegant code and user-centered design.
              </p>
              
              <p>
                Throughout my academic journey, I've worked with diverse programming languages 
                and frameworks, from building responsive web applications to developing mobile 
                apps and experimenting with artificial intelligence. Each project teaches me 
                something new and fuels my excitement for what's possible.
              </p>
              
              <p>
                When I'm not coding, you can find me contributing to open-source projects, 
                attending tech meetups, or exploring the latest developments in software 
                engineering. I believe in continuous learning and the power of technology 
                to make a positive impact on the world.
              </p>
            </div>
            
            <div className="bg-slate-800/60 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50">
              <h3 className="text-xl font-bold text-white mb-3">Currently Focused On</h3>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Advanced React patterns and performance optimization</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span>Machine Learning and AI applications</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Cloud architecture and DevOps practices</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <span>Contributing to open-source projects</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
