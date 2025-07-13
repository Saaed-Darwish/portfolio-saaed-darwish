
import React from 'react';
import { Code, Laptop, Globe, Server, BrainCircuit, Terminal } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Globe className="w-8 h-8" />,
      skills: ["React", "TypeScript", "JavaScript", "HTML/CSS", "Angular"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Backend Development",
      icon: <Server className="w-8 h-8" />,
      skills: ["Java", "Spring Boot", "Python", "C#", ".NET", "RESTful APIs", "SQL", "MySQL", "AWS"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Software",
      icon: <Laptop className="w-8 h-8" />,
      skills: ["Git", "Postman", "Linux", "IAR", "MS Office", "VSCode", "Eclipse", "MPLAB"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Programming Languages",
      icon: <Code className="w-8 h-8" />,
      skills: ["Python", "Java", "C/C++", "Assembly", "C#"],
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Artificial Intelligence",
      icon: <BrainCircuit className="w-8 h-8" />,
      skills: ["PyTorch", "Scikit-learn", "Pandas", "TensorFlow", "Keras"],
      color: "from-indigo-500 to-blue-500"
    },
    {
      title: "Other",
      icon: <Terminal className="w-8 h-8" />,
      skills: ["Docker", "Ansible", "Terraform", "Kubernetes", "Jenkins", "Azure"],
      color: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <section className="py-20 bg-slate-800 relative overflow-hidden">
      {/* Parallax background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/3 left-1/6 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute top-2/3 left-2/3 w-64 h-64 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technical Skills
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            My toolkit of technologies and languages that I use to bring ideas to life
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className="bg-slate-900/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:bg-slate-900/90 animate-fade-in border border-slate-700/50"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className={`p-6 bg-gradient-to-r ${category.color} text-white rounded-t-xl`}>
                <div className="flex items-center space-x-3 mb-4">
                  {category.icon}
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="px-3 py-1 bg-slate-700/70 text-slate-200 rounded-full text-sm font-medium hover:bg-slate-600/70 transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
