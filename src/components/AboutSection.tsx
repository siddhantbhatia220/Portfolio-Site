import { motion } from 'framer-motion';
import { Code2, Zap, Users } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

const currently = [
  { label: 'Studying', value: 'BECSe @ Chitkara University' },
  { label: 'Learning', value: 'Advanced React patterns & Next.js' },
  { label: 'Exploring', value: 'Cloud technologies & DevOps' },
];

const highlights = [
  {
    icon: Code2,
    title: 'Multi-Language Proficiency',
    description: 'Strong foundation in C, C++, Java, and modern web technologies',
  },
  {
    icon: Zap,
    title: 'Modern Frameworks',
    description: 'Building scalable applications with React, Angular, and Next.js',
  },
  {
    icon: Users,
    title: 'Continuous Learning',
    description: 'Always exploring new technologies and best practices',
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUp}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-8 gradient-text">
            About Me
          </h2>

          <div className="glass-card p-8 md:p-12 mb-12 rounded-2xl">
            <p className="text-lg md:text-xl text-foreground/90 leading-relaxed mb-6">
              I'm a <span className="text-primary font-semibold">2nd year BECSe student</span> at{' '}
              <span className="text-accent font-semibold">Chitkara University</span>, passionate about building
              modern web applications and solving complex problems. My journey in tech spans{' '}
              <span className="text-accent font-semibold">multiple programming languages</span> and{' '}
              <span className="text-accent font-semibold">cutting-edge frameworks</span>.
            </p>
            <p className="text-lg md:text-xl text-foreground/90 leading-relaxed mb-6">
              With proficiency in <span className="text-primary font-semibold">C, C++, Java, HTML, CSS, JavaScript, and SQL</span>,
              I've built a strong foundation in both programming fundamentals and web technologies. I specialize in modern
              frameworks like <span className="text-accent font-semibold">React, Angular, and Next.js</span>, creating
              responsive and performant applications.
            </p>
            <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">
              I'm constantly learning and exploring new technologies, working on personal projects, and contributing to
              open source. I believe in writing clean, maintainable code and building solutions that make a real impact.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="glass-card p-6 rounded-xl hover-lift"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="glass-card p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-heading font-bold mb-6 text-primary">Currently</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {currently.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  <p className="text-sm text-accent font-semibold mb-1">{item.label}</p>
                  <p className="text-foreground/90">{item.value}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
