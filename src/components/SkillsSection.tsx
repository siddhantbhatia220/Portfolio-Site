import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const skillCategories = [
  {
    name: 'All',
    skills: [],
  },
  {
    name: 'Languages',
    skills: [
      'C', 'C++', 'Java', 'JavaScript', 'HTML5', 'CSS3', 'SQL',
    ],
  },
  {
    name: 'Frameworks',
    skills: [
      'React', 'Angular', 'Next.js', 'Tailwind CSS', 'Bootstrap',
      'Framer Motion', 'Redux', 'React Router',
    ],
  },
  {
    name: 'Tools & Other',
    skills: [
      'Git', 'GitHub', 'VS Code', 'Postman',
      'MySQL', 'MongoDB', 'REST APIs', 'Responsive Design',
      'Figma', 'Chrome DevTools',
    ],
  },
];

const allSkills = skillCategories
  .slice(1)
  .flatMap(cat => cat.skills.map(skill => ({ skill, category: cat.name })));

export const SkillsSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const displayedSkills = activeFilter === 'All'
    ? allSkills
    : allSkills.filter(item => item.category === activeFilter);

  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-4 gradient-text">
            Skills & Technologies
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit built over years of hands-on experience
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {skillCategories.map((category) => (
            <button
              key={category.name}
              onClick={() => setActiveFilter(category.name)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                activeFilter === category.name
                  ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/30'
                  : 'glass-card text-foreground/70 hover:text-foreground hover:bg-primary/10'
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div layout className="max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            >
              {displayedSkills.map((item, index) => (
                <motion.div
                  key={`${item.skill}-${activeFilter}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.03 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="glass-card p-4 rounded-xl text-center cursor-default group"
                >
                  <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:from-primary/40 group-hover:to-accent/40 transition-all">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <p className="font-medium text-foreground/90 group-hover:text-primary transition-colors">
                    {item.skill}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">{item.category}</p>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Expertise Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 glass-card p-8 rounded-2xl max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-heading font-bold mb-6 text-center gradient-text">
            Learning Focus
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Web Development', desc: 'Building responsive, modern web applications with latest frameworks' },
              { title: 'Problem Solving', desc: 'Strong foundation in data structures and algorithms' },
              { title: 'Best Practices', desc: 'Clean code, version control, and collaborative development' },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="text-center"
              >
                <h4 className="text-xl font-heading font-semibold mb-2 text-primary">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
