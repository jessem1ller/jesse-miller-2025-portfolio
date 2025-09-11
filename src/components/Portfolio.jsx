
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const Portfolio = () => {
  const projects = [{
    title: 'AI Interview Assistant',
    description: 'An AI-powered tool that helps users prepare for interviews by providing personalized questions and feedback.',
    image: '/AIinterviewApp.png',
    tech: ['Next.js', 'Node.js', 'Firebase', 'Tailwind CSS', 'OpenAI API', 'Vapi','TypeScript'],
    github: 'https://github.com/jessem1ller/ai_interview_platform',
    live: 'https://ai-interview-platform-z6xs.vercel.app/'
  }, {
    title: 'Movie Search App',
    description: 'A movie search application that allows users to find information about their favorite films, including ratings, overviews, and images.',
    image: '/MovieSearchScreenshot.png',
    tech: ['Next.js', 'TypeScript', 'TMDB API', 'Tailwind CSS', 'Figma'],
    github: 'https://github.com/jessem1ller/movie_search_app',
    live: 'https://new-movie-search-app.vercel.app/'
  }, {
    title: 'Ultraverse NFT World',
    description: 'A virtual world for buying, selling, and trading NFTs showcasing API routing, state management, skeleton loading, and advanced JavaScript techniques.',
    image: '/UltraverseScreenshot.png',
    tech: ['React', 'TypeScript', 'Node.js', 'Tailwind CSS'],
    github: 'https://github.com/jessem1ller/jesse-internship',
    live: 'https://jesse-internship.vercel.app/'
  }, {
    title: 'Skinstric AI',
    description: 'An AI-powered tool for skin analysis and personalized skincare recommendations, working from Figma design to finished product with smooth animations, camera and file management integration, and advanced routing.',
    image: '/SkinstricScreenshot.png',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel', 'Figma'],
    github: 'https://github.com/jessem1ller/skinstric-ai-internship',
    live: 'https://skinstric-ai-internship.vercel.app/'
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
            A few of my recent projects that demonstrate my skills in frontend development, API routing, state management, and features that make companies money.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="project-card glass-effect rounded-2xl overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  alt={`${project.title} project screenshot`}
                  src={project.image}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button
                    size="sm"
                    variant="secondary"
                    className="p-2"
                    onClick={() => {
                      if (project.github && project.github !== '#') {
                        window.open(project.github, '_blank', 'noopener,noreferrer');
                      } else {
                        toast({ title: "GitHub link not available." });
                      }
                    }}
                  >
                    <Github className="w-4 h-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="secondary"
                    className="p-2"
                    onClick={() => {
                      if (project.live && project.live !== '#') {
                        window.open(project.live, '_blank', 'noopener,noreferrer');
                      } else {
                        toast({ title: "Live site not available." });
                      }
                    }}
                  >
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
                  {project.tech.map(tech => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>;
};
export default Portfolio;
