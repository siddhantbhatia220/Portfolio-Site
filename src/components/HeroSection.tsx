import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
const containerVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};
const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8
    }
  }
};
export const HeroSection = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
    {/* Animated Background Elements */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" animate={{
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.5, 0.3]
      }} transition={{
        duration: 8,
        repeat: Infinity,
        ease: 'easeInOut'
      }} />
      <motion.div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" animate={{
        scale: [1.2, 1, 1.2],
        opacity: [0.3, 0.5, 0.3]
      }} transition={{
        duration: 8,
        repeat: Infinity,
        ease: 'easeInOut',
        delay: 1
      }} />
      <motion.div className="absolute top-1/2 right-1/3 w-64 h-64 bg-accent/20 rounded-full blur-3xl" animate={{
        y: [-20, 20, -20],
        opacity: [0.2, 0.4, 0.2]
      }} transition={{
        duration: 6,
        repeat: Infinity,
        ease: 'easeInOut'
      }} />
    </div>

    {/* Content */}
    <motion.div className="container mx-auto px-4 relative z-10" variants={containerVariants} initial="hidden" animate="visible">
      <div className="max-w-4xl mx-auto text-center">
        <motion.p variants={itemVariants} className="text-primary font-medium text-lg mb-4">
          Hi, I'm
        </motion.p>

        <motion.h1 variants={itemVariants} className="text-6xl md:text-8xl font-heading font-bold mb-6 gradient-text">
          Siddhant Bhatia
        </motion.h1>

        <motion.h2 variants={itemVariants} className="text-2xl md:text-4xl font-heading font-semibold mb-6 text-foreground/90">
          BECSe Student & Full-Stack Developer
        </motion.h2>

        <motion.p variants={itemVariants} className="text-xl md:text-2xl text-muted-foreground mb-8 font-light">
          2nd Year @ Chitkara University
        </motion.p>

        <motion.div variants={itemVariants} className="space-y-3 mb-12 max-w-2xl mx-auto">
          {['Proficient in C, C++, Java, HTML, CSS, JavaScript, SQL', 'Building modern web apps with React, Angular & Next.js', 'Passionate about learning new technologies & problem solving'].map((point, index) => <motion.div key={index} className="flex items-center justify-center gap-3 text-foreground/80" initial={{
            opacity: 0,
            x: -20
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            delay: 1 + index * 0.2
          }}>
            <div className="w-2 h-2 rounded-full bg-primary animate-glow-pulse" />
            <p className="text-base md:text-lg">{point}</p>
          </motion.div>)}
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button size="lg" onClick={scrollToProjects} className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-8 py-6 rounded-lg transition-all hover:shadow-lg hover:shadow-primary/50">
            View Projects
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary/50 text-primary hover:bg-primary/10 font-semibold text-lg px-8 py-6 rounded-lg"
            asChild
          >
            <a href="/Siddhant_Bhatia_CV.pdf" download="Siddhant_Bhatia_CV.pdf">
              Download CV
            </a>
          </Button>
        </motion.div>

        <motion.div variants={itemVariants} className="flex gap-6 justify-center">
          <motion.a
            href="https://github.com/siddhantbhatia220"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-foreground/60 hover:text-primary transition-colors"
            whileHover={{ scale: 1.2, y: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <Github size={28} />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/siddhant-bhatia-48142a338"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-foreground/60 hover:text-primary transition-colors"
            whileHover={{ scale: 1.2, y: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <Linkedin size={28} />
          </motion.a>
          <motion.a
            href="https://twitter.com/siddhantbhatia"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="text-foreground/60 hover:text-primary transition-colors"
            whileHover={{ scale: 1.2, y: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <Twitter size={28} />
          </motion.a>
        </motion.div>
      </div>
    </motion.div>

    {/* Scroll Indicator */}
    <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2" animate={{
      y: [0, 10, 0]
    }} transition={{
      duration: 2,
      repeat: Infinity
    }}>
      <ArrowDown className="text-primary/50" size={32} />
    </motion.div>
  </section>;
};