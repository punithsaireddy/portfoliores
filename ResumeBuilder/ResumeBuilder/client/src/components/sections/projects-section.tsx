import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Star, GitFork } from "lucide-react";
import { PROJECTS } from "@/lib/constants";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-slate-800">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 gradient-text">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-blue-500 mx-auto rounded-full"></div>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="project-card bg-slate-900 border-slate-700 overflow-hidden shadow-xl">
                <div className="relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-white">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-slate-700 text-slate-300">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-4 text-sm text-slate-400">
                      <span className="flex items-center">
                        <Star className="mr-1" size={16} />
                        {project.stars}
                      </span>
                      <span className="flex items-center">
                        <GitFork className="mr-1" size={16} />
                        {project.forks}
                      </span>
                    </div>
                    
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <Button
                        asChild
                        className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 interactive-btn morphing-btn"
                      >
                        <a 
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center"
                        >
                          <Github className="mr-2 relative z-10" size={16} />
                          <span className="relative z-10">View Project</span>
                        </a>
                      </Button>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
