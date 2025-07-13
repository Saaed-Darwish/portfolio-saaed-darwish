
import React from 'react';
import { ExternalLink, Github, Code, Database, Globe } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce application with user authentication, product management, shopping cart, and payment integration.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Stripe API", "JWT"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      category: "Full-Stack"
    },
    {
      title: "Task Management App",
      description: "A collaborative project management tool with real-time updates, team collaboration features, and progress tracking.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      technologies: ["Vue.js", "Express.js", "PostgreSQL", "Socket.io", "Docker"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      category: "Web App"
    },
    {
      title: "AI-Powered Chat Bot",
      description: "An intelligent chatbot using natural language processing to provide customer support and answer queries.",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&h=400&fit=crop",
      technologies: ["Python", "TensorFlow", "Flask", "NLP", "OpenAI API"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      category: "AI/ML"
    },
    {
      title: "Mobile Fitness Tracker",
      description: "Cross-platform mobile app for tracking workouts, nutrition, and health metrics with social features.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      technologies: ["React Native", "Firebase", "Redux", "Health APIs"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      category: "Mobile"
    },
    {
      title: "Data Visualization Dashboard",
      description: "Interactive dashboard for visualizing complex datasets with charts, graphs, and real-time data updates.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      technologies: ["D3.js", "React", "Python", "Pandas", "REST API"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      category: "Data Science"
    },
    {
      title: "Blockchain Voting System",
      description: "Secure and transparent voting system built on blockchain technology ensuring vote integrity and anonymity.",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=600&h=400&fit=crop",
      technologies: ["Solidity", "Web3.js", "Ethereum", "React", "MetaMask"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      category: "Blockchain"
    }
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Full-Stack":
        return <Globe className="w-4 h-4" />;
      case "AI/ML":
        return <Code className="w-4 h-4" />;
      case "Data Science":
        return <Database className="w-4 h-4" />;
      default:
        return <Code className="w-4 h-4" />;
    }
  };

  return (
    <section id="projects" className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            A showcase of my recent work spanning various technologies and domains
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden group">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between">
                    <a 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors duration-200"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a 
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors duration-200"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
                
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center space-x-1 px-3 py-1 bg-blue-600 text-white text-sm rounded-full">
                    {getCategoryIcon(project.category)}
                    <span>{project.category}</span>
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-slate-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-2 py-1 bg-slate-700 text-slate-300 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-slate-400 hover:text-white transition-colors duration-200"
                  >
                    <Github className="w-4 h-4" />
                    <span className="text-sm">Code</span>
                  </a>
                  <a 
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-slate-400 hover:text-white transition-colors duration-200"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm">Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
