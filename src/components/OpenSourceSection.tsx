import { motion } from 'framer-motion';
import { Star, GitFork, Download, ExternalLink } from 'lucide-react';

const openSourceProjects = [
  {
    name: 'react-performance-kit',
    description: 'Collection of React hooks and utilities for performance optimization',
    stats: { stars: 12400, forks: 890, downloads: '450K/month' },
    link: '#',
  },
  {
    name: 'dev-tools-cli',
    description: 'CLI tool for scaffolding and managing modern web projects',
    stats: { stars: 8200, forks: 520, downloads: '125K/month' },
    link: '#',
  },
  {
    name: 'design-system-utils',
    description: 'Utilities for building accessible, themeable design systems',
    stats: { stars: 5600, forks: 340, downloads: '80K/month' },
    link: '#',
  },
  {
    name: 'typescript-patterns',
    description: 'TypeScript implementations of common design patterns',
    stats: { stars: 9800, forks: 650, downloads: '200K/month' },
    link: '#',
  },
];

const contributions = [
  { project: 'React', prs: 8, impact: 'Performance improvements in reconciliation' },
  { project: 'Next.js', prs: 12, impact: 'Image optimization enhancements' },
  { project: 'Tailwind CSS', prs: 5, impact: 'New utility classes and variants' },
  { project: 'Vite', prs: 6, impact: 'Build optimization and plugin API' },
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
            Building tools and contributing to the developer community
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
                      <span className="font-medium">{project.stats.stars.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <GitFork size={16} className="text-primary" />
                      <span className="font-medium">{project.stats.forks.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Download size={16} className="text-secondary" />
                      <span className="font-medium">{project.stats.downloads}</span>
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
            <h3 className="text-3xl font-heading font-bold mb-8 text-primary">Major Contributions</h3>
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
                    <p className="text-accent font-semibold mb-1 text-sm">{contrib.prs} Pull Requests Merged</p>
                    <p className="text-foreground/80 text-sm">{contrib.impact}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Stats Summary */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-12 glass-card p-8 rounded-2xl"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { label: 'Total Stars', value: '36K+' },
                { label: 'Monthly Downloads', value: '855K+' },
                { label: 'Total Forks', value: '2.4K+' },
                { label: 'Contributors', value: '180+' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="text-center"
                >
                  <p className="text-4xl font-heading font-bold gradient-text mb-2">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
