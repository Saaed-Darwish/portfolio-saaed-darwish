
import React from 'react';
import { ExternalLink, Github, Code, Database, Globe, HardDrive, Gamepad2 } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Divinity",
      description: "A full-stack community building application with user authentication, matchmaking, forums, and ChatGPT integration.",
      image: "/images/divinityCover.png",
      technologies: ["React", "Java", "MySQL", "Aurora & RDS", "railway", "netlify"],
      liveUrl: "https://portfolio-divinity.netlify.app",
      category: "Full-Stack"
    },
    {
      title: "Lotion",
      description: "A note taking app that uses local storage. This used to use AWS lambda and google authentication with terraform. These were stripped from the project to not incur costs",
      image: "/images/lotionCover.png",
      technologies: ["React", "Google Auth", "Terraform", "AWS Lambda", "netlify"],
      githubUrl: "https://github.com/Saaed-Darwish/lotion-aws-30149694",
      liveUrl: "https://lotion-note-app.netlify.app",
      category: "Web App"
    },
    {
      title: "ML-Powered Chat Sentiment Analysis",
      description: "An intelligent ML model trained on thousands of tweets to detect sentiment analysis to provide real-time chat moderation support.",
      image: "/images/sbmspCover.png",
      technologies: ["Python", "SciKit-Learn", "Models", "GridSearch", "Pandas"],
      googledriveUrl: "https://drive.google.com/drive/folders/1-d1AZA0-4U6pbV6ZFvpfBANueSexxBif?usp=drive_link",
      liveUrl: "https://colab.research.google.com/drive/1_UK_1ntX3BI0wHX6OzL3rOho7dQ0VTWT",
      category: "AI/ML"
    },
    {
      title: "AI Model for Alzheimer's Disease",
      description: "AI sequential model using tensorFlow and keras to predict the probability of risk of obtaining Alzheimer's Disease. Built during a mini-hackathon.",
      image: "/images/aiadCover.png",
      technologies: ["Python", "TensorFlow", "Keras", "GridSearch", "AI"],
      githubUrl: "https://github.com/Saaed-Darwish/Alzheimer-Disease-ML-Predictor-Minihackathon/tree/main",
      liveUrl: "https://github.com/Saaed-Darwish/Alzheimer-Disease-ML-Predictor-Minihackathon/blob/main/alzheimers_risk_predictions.csv",
      category: "AI/ML"
    },
    {
      title: "Rhythm Game on an Embedded System",
      description: "Interactive rhythm game for an embedded system built for the personal project at the end of EIE pogram by Garmin. Won 1st place in industry choice.",
      image: "/images/eieCover.png",
      technologies: ["IAR", "C", "Embedded Systems"],
      githubUrl: "https://github.com/Saaed-Darwish/razor_sam3u2/blob/Rhythm-Project/firmware_common/application/user_app1.c",
      category: "Game"
    },
    {
      title: "Wordle",
      description: "A recreation of the game wordle by The New York Times, done entirely by simple html + css + javascript.",
      image: "/images/wordleCover.png",
      technologies: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
      githubUrl: "https://github.com/Saaed-Darwish/wordle",
      liveUrl: "https://saaed-darwish.github.io/wordle/",
      category: "Game"
    }
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Full-Stack":
        return <Globe className="w-4 h-4" />;
      case "AI/ML":
        return <Code className="w-4 h-4" />;
      case "Game":
        return <Gamepad2 className="w-4 h-4" />;
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
                    {
                      project.githubUrl ?
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors duration-200"
                        >
                          <Github className="w-5 h-5" />
                        </a> : <></>
                    }
                    {
                      project.googledriveUrl ?
                        <a
                          href={project.googledriveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors duration-200"
                        >
                          <HardDrive className="w-4 h-4" />
                        </a> : <></>
                    }
                    {
                      project.liveUrl ?
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors duration-200"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a> : <></>
                    }
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
                  {
                    project.githubUrl ?
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-slate-400 hover:text-white transition-colors duration-200"
                      >
                        <Github className="w-4 h-4" />
                        <span className="text-sm">Code</span>
                      </a> : <></>
                  }
                  {
                    project.googledriveUrl ?
                      <a
                        href={project.googledriveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-slate-400 hover:text-white transition-colors duration-200"
                      >
                        <HardDrive className="w-4 h-4" />
                        <span className="text-sm">Google Drive</span>
                      </a> : <></>
                  }
                  {
                    project.liveUrl ?
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-slate-400 hover:text-white transition-colors duration-200"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span className="text-sm">Live Demo</span>
                      </a> : <></>
                  }
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
