
import React from 'react';
import { motion } from 'framer-motion';
import { Download, MapPin, Calendar, Building } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const Resume = () => {
  const experiences = [
    {
      title: 'Frontend Engineer',
      company: 'Skinstric AI',
      location: 'Australia (Remote)',
      period: '2025 - Present',
      description: [
        'Architected real-time skin analysis platform using OpenAI Vision API and Next.js, achieving 98% detection accuracy across diverse skin conditions.',
        'Developed responsive UI with TailwindCSS and GSAP animations, implementing dynamic skincare recommendation cards with 60% improved engagement.',
        'Optimized performance using Next.js Server Components and Lottie animations, achieving sub-2-second analysis time for skin condition detection.',
        'Built custom animation system using GSAP timeline for seamless user experience during skin analysis processing, increasing user retention by 40%.',
        'Implemented efficient image processing pipeline combining OpenAI Vision API with 4D Mini model for enhanced accuracy in skin tone and texture analysis.'
      ]
    },
    {
      title: 'Frontend Developer & Support Staff',
      company: 'Frontend Simplified',
      location: 'Australia (Remote)',
      period: '2025 - Present',
      description: [
        'Selected as peer mentor after achieving top 5% performance in cohort, providing debugging support and code reviews for 20+ students across React and Next.js projects.',
        'Created and led workshops on modern frontend optimization techniques, helping students improve their portfolio project load times by an average of 50%.',
        'Developed comprehensive learning resources for React component architecture and TypeScript, resulting in 70% of mentored students successfully implementing type-safe applications.',
        'Initiated weekly pair programming sessions focused on accessibility and SEO best practices, leading to 90% of mentored students achieving WCAG compliance in their projects.',
        'Built and shared reusable component library using ShadCN/UI, reducing development time for student projects by 40% and improving code consistency.',
        'Led study groups on deployment strategies and CI/CD, resulting in 85% of students successfully implementing automated deployment pipelines for their portfolio projects.'
      ]
    },
  ];

  const education = [
    {
      degree: 'Certificate in Computer Science',
      school: 'Full Stack Engineering Institute',
      period: '2025',
      description: '3.9 GPA - Completed intensive program covering full stack development, algorithms, and data structures with hands-on projects using React, Node.js, and databases.'
    }
  ];

  const certifications = [
    'Udemy - Ultimate 2025 Full Stack Developer Bootcamp',
  ];

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Resume.pdf';
    link.download = 'Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Resume</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            My professional journey and educational background in frontend development and software engineering.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-full glow-effect"
            onClick={handleDownload}
          >
            <Download className="w-5 h-5 mr-2" />
            Download Resume
          </Button>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-8 flex items-center">
                <Building className="w-6 h-6 mr-3 text-blue-400" />
                Professional Experience
              </h3>
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="glass-effect rounded-xl p-6"
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-semibold text-white">{exp.title}</h4>
                        <p className="text-blue-400 font-medium">{exp.company}</p>
                      </div>
                      <div className="flex flex-col md:items-end mt-2 md:mt-0">
                        <div className="flex items-center text-gray-400 text-sm">
                          <Calendar className="w-4 h-4 mr-1" />
                          {exp.period}
                        </div>
                        <div className="flex items-center text-gray-400 text-sm">
                          <MapPin className="w-4 h-4 mr-1" />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-gray-300 text-sm flex items-start">
                          <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Education & Certifications */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6">Education</h3>
              {education.map((edu, index) => (
                <div key={index} className="glass-effect rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-white mb-2">{edu.degree}</h4>
                  <p className="text-blue-400 font-medium mb-2">{edu.school}</p>
                  <div className="flex items-center text-gray-400 text-sm mb-3">
                    <Calendar className="w-4 h-4 mr-1" />
                    {edu.period}
                  </div>
                  <p className="text-gray-300 text-sm">{edu.description}</p>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6">Certifications</h3>
              <div className="glass-effect rounded-xl p-6">
                <ul className="space-y-3">
                  {certifications.map((cert, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.4 }}
                      viewport={{ once: true }}
                      className="text-gray-300 text-sm flex items-center"
                    >
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                      {cert}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
