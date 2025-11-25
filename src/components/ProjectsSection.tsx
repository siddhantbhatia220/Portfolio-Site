import { motion } from 'framer-motion';
import { ExternalLink, Github, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'EcoVoyage - A Green APP',
    role: 'Full-Stack Developer',
    description: 'Smart AI-powered commuting and greener choices application promoting sustainable transportation',
    achievements: [
      'Integrated AI to suggest eco-friendly commute routes',
      'Carbon footprint tracking with real-time analytics',
      'Gamification features to encourage green habits',
    ],
    tech: ['React', 'Next.js', 'TypeScript', 'AI/ML APIs', 'Tailwind CSS'],
    metrics: { features: '15+', users: 'Beta', impact: 'Green' },
    github: 'https://github.com/siddhantbhatia220',
    live: '#',
  },
  {
    title: 'AICommuter - A Commuting APP',
    role: 'Developer',
    description: 'Intelligent commuting application that optimizes routes and provides real-time traffic updates',
    achievements: [
      'Real-time route optimization using AI',
      'Multi-modal transport integration',
      'User-friendly interface with smooth animations',
    ],
    tech: ['React', 'JavaScript', 'Google Maps API', 'CSS', 'HTML'],
    metrics: { routes: '100+', accuracy: '95%', rating: '4.5/5' },
    github: 'https://github.com/siddhantbhatia220',
    live: '#',
  },
  {
    title: 'E-commerce Platform',
    role: 'Frontend Developer',
    description: 'Modern responsive e-commerce website with cart functionality and payment integration',
    achievements: [
      'Fully responsive design for all devices',
      'Shopping cart with local storage',
      'Clean UI with modern design patterns',
    ],
    tech: ['React', 'Tailwind CSS', 'JavaScript', 'HTML', 'CSS'],
    metrics: { pages: '10+', responsive: '100%', performance: 'Fast' },
    github: 'https://github.com/siddhantbhatia220',
    live: '#',
  },
  {
    title: 'Portfolio Website',
    role: 'Designer & Developer',
    description: 'Personal portfolio with advanced animations and modern design aesthetics',
    achievements: [
      'Framer Motion for smooth animations',
      'Dark theme with glassmorphism effects',
      'Fully responsive and accessible',
    ],
    tech: ['React', 'Next.js', 'Framer Motion', 'Tailwind CSS', 'TypeScript'],
    metrics: { sections: '10+', animations: '50+', lighthouse: '98' },
    github: 'https://github.com/siddhantbhatia220',
    live: '#',
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-4 gradient-text">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Flagship work that demonstrates technical excellence and measurable impact
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="glass-card p-8 rounded-2xl hover-lift group"
            >
              <div className="mb-4">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-2xl font-heading font-bold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-2">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github size={20} />
                    </motion.a>
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                  </div>
                </div>
                <p className="text-accent font-semibold text-sm mb-3">{project.role}</p>
                <p className="text-foreground/90 mb-4">{project.description}</p>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-primary mb-3 flex items-center gap-2">
                  <TrendingUp size={16} />
                  Key Achievements
                </h4>
                <ul className="space-y-2">
                  {project.achievements.map((achievement, i) => (
                    <li key={i} className="flex gap-2 text-sm text-foreground/80">
                      <span className="text-accent">▹</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
                {Object.entries(project.metrics).map(([key, value]) => (
                  <div key={key} className="text-center">
                    <p className="text-2xl font-heading font-bold text-primary mb-1">{value}</p>
                    <p className="text-xs text-muted-foreground capitalize">{key}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button
            variant="outline"
            size="lg"
            className="border-primary/50 text-primary hover:bg-primary/10 font-semibold"
          >
            <Github className="mr-2" size={20} />
            View More on GitHub
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
