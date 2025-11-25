import { motion } from 'framer-motion';
import { Star, GitFork, ExternalLink } from 'lucide-react';

const openSourceProjects = [
  {
    name: 'react-utils-kit',
    description: 'A collection of useful React hooks and utilities I built for my projects.',
    stats: { language: 'TypeScript', stars: 'Top Pick' },
    link: '#',
  },
  {
    name: 'student-cli',
    description: 'CLI tool for scaffolding student assignments and projects.',
    stats: { language: 'JavaScript', stars: 'Active' },
    link: '#',
  },
];

const contributions = [
  { project: 'University Projects', prs: 5, impact: 'Collaborated on department website updates' },
  { project: 'Community Docs', prs: 3, impact: 'Improved documentation for learning resources' },
];

export const OpenSourceSection = () => {
  return (
    <section id="opensource" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-4 gradient-text">
            Open Source
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building tools and learning from the developer community
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* My Projects */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mb-16"
          >
            <h3 className="text-3xl font-heading font-bold mb-8 text-primary">My Projects</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {openSourceProjects.map((project, index) => (
                <motion.a
                  key={project.name}
                  href={project.link}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.03 }}
                  className="glass-card p-6 rounded-xl hover-lift group block"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="text-xl font-heading font-semibold group-hover:text-primary transition-colors">
                      {project.name}
                    </h4>
                    <ExternalLink size={18} className="text-muted-foreground group-hover:text-accent transition-colors" />
                  </div>
                  <p className="text-foreground/80 mb-6 text-sm">{project.description}</p>
                  <div className="flex items-center gap-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Star size={16} className="text-accent" />
                      <span className="font-medium">{project.stats.stars}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <GitFork size={16} className="text-primary" />
                      <span className="font-medium">{project.stats.language}</span>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contributions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-3xl font-heading font-bold mb-8 text-primary">Contributions</h3>
            <div className="glass-card p-8 rounded-2xl">
              <div className="grid md:grid-cols-2 gap-6">
                {contributions.map((contrib, index) => (
                  <motion.div
                    key={contrib.project}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="border-l-2 border-primary pl-4"
                  >
                    <h4 className="text-xl font-heading font-semibold mb-2">{contrib.project}</h4>
                    <p className="text-accent font-semibold mb-1 text-sm">{contrib.prs} Pull Requests</p>
                    <p className="text-foreground/80 text-sm">{contrib.impact}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};