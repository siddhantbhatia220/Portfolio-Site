import { motion } from 'framer-motion';
import { BookOpen, Mic, Video, ExternalLink } from 'lucide-react';

const writings = [
  {
    title: 'Advanced React Performance Patterns',
    platform: 'Dev.to',
    type: 'article',
    description: 'Deep dive into memoization, code splitting, and render optimization',
    views: '42K',
    link: '#',
  },
  {
    title: 'Building Scalable Design Systems',
    platform: 'Medium',
    type: 'article',
    description: 'Architecture principles for enterprise-grade component libraries',
    views: '28K',
    link: '#',
  },
  {
    title: 'TypeScript Best Practices in 2024',
    platform: 'Personal Blog',
    type: 'article',
    description: 'Modern TypeScript patterns for safer, more maintainable code',
    views: '35K',
    link: '#',
  },
];

const talks = [
  {
    title: 'The Future of Frontend Performance',
    event: 'React Summit 2023',
    type: 'talk',
    description: 'Keynote on emerging performance optimization techniques',
    audience: '5K+',
    link: '#',
  },
  {
    title: 'Building Developer Tools That Developers Love',
    event: 'JSConf EU',
    type: 'talk',
    description: 'Workshop on creating intuitive, powerful CLI tools',
    audience: '800+',
    link: '#',
  },
  {
    title: 'Advanced TypeScript for React Developers',
    event: 'Frontend Masters',
    type: 'workshop',
    description: '4-hour deep dive into TypeScript patterns and best practices',
    audience: '2K+',
    link: '#',
  },
];

const podcasts = [
  {
    title: 'The Modern Web Podcast',
    episode: 'Performance at Scale',
    type: 'podcast',
    description: 'Discussion on optimizing large-scale React applications',
    link: '#',
  },
  {
    title: 'DevTools FM',
    episode: 'Building Better DX',
    type: 'podcast',
    description: 'Exploring developer experience and tooling innovation',
    link: '#',
  },
];

const getIcon = (type: string) => {
  switch (type) {
    case 'article':
      return BookOpen;
    case 'talk':
    case 'workshop':
      return Mic;
    case 'podcast':
      return Video;
    default:
      return BookOpen;
  }
};

export const WritingSection = () => {
  return (
    <section id="writing" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-4 gradient-text">
            Writing & Speaking
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Sharing knowledge through articles, talks, and podcasts
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-16">
          {/* Articles */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-3xl font-heading font-bold mb-8 text-primary flex items-center gap-3">
              <BookOpen className="text-accent" />
              Articles
            </h3>
            <div className="space-y-4">
              {writings.map((item, index) => (
                <motion.a
                  key={item.title}
                  href={item.link}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card p-6 rounded-xl hover-lift group flex items-start justify-between gap-4 block"
                >
                  <div className="flex-1">
                    <h4 className="text-xl font-heading font-semibold mb-2 group-hover:text-primary transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-accent font-medium text-sm mb-2">{item.platform}</p>
                    <p className="text-foreground/80 text-sm mb-3">{item.description}</p>
                    <p className="text-muted-foreground text-xs">{item.views} views</p>
                  </div>
                  <ExternalLink size={20} className="text-muted-foreground group-hover:text-accent transition-colors flex-shrink-0" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Talks & Workshops */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-3xl font-heading font-bold mb-8 text-primary flex items-center gap-3">
              <Mic className="text-accent" />
              Conference Talks & Workshops
            </h3>
            <div className="space-y-4">
              {talks.map((item, index) => (
                <motion.a
                  key={item.title}
                  href={item.link}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="glass-card p-6 rounded-xl hover-lift group flex items-start justify-between gap-4 block"
                >
                  <div className="flex-1">
                    <h4 className="text-xl font-heading font-semibold mb-2 group-hover:text-primary transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-accent font-medium text-sm mb-2">{item.event}</p>
                    <p className="text-foreground/80 text-sm mb-3">{item.description}</p>
                    <p className="text-muted-foreground text-xs">{item.audience} attendees</p>
                  </div>
                  <ExternalLink size={20} className="text-muted-foreground group-hover:text-accent transition-colors flex-shrink-0" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Podcasts */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <h3 className="text-3xl font-heading font-bold mb-8 text-primary flex items-center gap-3">
              <Video className="text-accent" />
              Podcast Appearances
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {podcasts.map((item, index) => (
                <motion.a
                  key={item.title}
                  href={item.link}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="glass-card p-6 rounded-xl hover-lift group"
                >
                  <h4 className="text-lg font-heading font-semibold mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-accent font-medium text-sm mb-2">{item.episode}</p>
                  <p className="text-foreground/80 text-sm">{item.description}</p>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
