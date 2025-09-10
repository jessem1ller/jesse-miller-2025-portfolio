
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
const Portfolio = () => {
  const projects = [{
    title: 'E-Commerce Platform',
    description: 'A modern e-commerce platform built with React, Redux, and Stripe integration. Features include product catalog, shopping cart, and secure checkout.',
    image: 'Modern e-commerce website with clean design and shopping interface',
    tech: ['React', 'Redux', 'Node.js', 'Stripe'],
    github: '#',
    live: '#'
  }, {
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
    image: 'Task management dashboard with kanban boards and team collaboration',
    tech: ['React', 'TypeScript', 'Socket.io', 'MongoDB'],
    github: '#',
    live: '#'
  }, {
    title: 'Weather Dashboard',
    description: 'A beautiful weather dashboard with location-based forecasts, interactive maps, and detailed weather analytics.',
    image: 'Weather dashboard with beautiful UI showing forecasts and maps',
    tech: ['Vue.js', 'Chart.js', 'OpenWeather API', 'CSS3'],
    github: '#',
    live: '#'
  }, {
    title: 'Portfolio Website',
    description: 'A responsive portfolio website showcasing creative design, smooth animations, and optimized performance.',
    image: 'Creative portfolio website with modern design and animations',
    tech: ['Next.js', 'Framer Motion', 'Tailwind CSS', 'Vercel'],
    github: '#',
    live: '#'
  }];
  const handleProjectClick = (type, title) => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };
  return <section id="portfolio" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div initial={{
        opacity: 0,
        y: 50
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }} viewport={{
        once: true
      }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Portfolio</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills in frontend development, 
            UI/UX design, and modern web technologies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => <motion.div key={project.title} initial={{
          opacity: 0,
          y: 50
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: index * 0.1,
          duration: 0.6
        }} viewport={{
          once: true
        }} className="project-card glass-effect rounded-2xl overflow-hidden group">
              <div className="relative overflow-hidden">
                <img className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" alt={`${project.title} project screenshot`} src="https://images.unsplash.com/photo-1572177812156-58036aae439c" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button size="sm" variant="secondary" className="p-2" onClick={() => handleProjectClick('github', project.title)}>
                    <Github className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="secondary" className="p-2" onClick={() => handleProjectClick('live', project.title)}>
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map(tech => <span key={tech} className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-medium">
                      {tech}
                    </span>)}
                </div>
              </div>
            </motion.div>)}
        </div>

        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.6,
        duration: 0.6
      }} viewport={{
        once: true
      }} className="text-center mt-12">
          <Button size="lg" variant="outline" className="border-2 border-white/20 text-white hover:bg-white/10 px-8 py-3 rounded-full" onClick={() => handleProjectClick('more', 'projects')}>
            View More Projects
          </Button>
        </motion.div>
      </div>
    </section>;
};
export default Portfolio;
