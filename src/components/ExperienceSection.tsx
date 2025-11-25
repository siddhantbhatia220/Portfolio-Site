import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    company: 'Personal Projects',
    role: 'Full-Stack Developer',
    period: '2023 - Present',
    description: 'Building modern web applications using latest technologies',
    achievements: [
      'Developed responsive e-commerce website with React and Tailwind CSS',
      'Created portfolio website with advanced animations using Framer Motion',
      'Built REST APIs and integrated databases for multiple projects',
    ],
    tech: ['React', 'Next.js', 'JavaScript', 'Tailwind CSS', 'SQL'],
  },
  {
    company: 'Chitkara University',
    role: 'BECSe Student',
    period: '2023 - Present',
    description: 'Learning computer science fundamentals and modern web development',
    achievements: [
      'Maintained strong academic performance in core CS subjects',
      'Active participant in coding competitions and hackathons',
      'Built multiple academic projects using C++, Java, and web technologies',
    ],
    tech: ['C', 'C++', 'Java', 'Data Structures', 'Algorithms'],
  },
  {
    company: 'Open Source Contributions',
    role: 'Contributor',
    period: '2024 - Present',
    description: 'Contributing to open source projects and learning from the community',
    achievements: [
      'Fixed bugs and improved documentation for React-based projects',
      'Collaborated with developers worldwide on GitHub',
      'Learned industry best practices and modern development workflows',
    ],
    tech: ['Git', 'GitHub', 'React', 'Angular', 'TypeScript'],
  },
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-4 gradient-text">
            Projects & Experience
          </h2>
          <p className="text-xl text-muted-foreground mb-16 max-w-2xl">
            Building projects, contributing to open source, and learning continuously
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-secondary" />

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="relative pl-0 md:pl-12 mb-12 last:mb-0"
              >
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-0 top-6 -translate-x-1/2 w-4 h-4 rounded-full bg-primary shadow-lg shadow-primary/50" />

                <div className="glass-card p-6 md:p-8 rounded-2xl hover-lift group">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-heading font-bold mb-1 group-hover:text-primary transition-colors">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 text-accent font-semibold mb-2">
                        <Briefcase size={18} />
                        <span>{exp.company}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar size={16} />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                  </div>

                  <p className="text-foreground/90 mb-4">{exp.description}</p>

                  <ul className="space-y-2 mb-6">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex gap-3 text-foreground/80">
                        <span className="text-primary mt-1">▹</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary border border-primary/20"
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
      </div>
    </section>
  );
};
