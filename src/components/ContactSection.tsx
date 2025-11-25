import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const socialLinks = [
  { icon: Github, href: 'https://github.com/siddhantbhatia220', label: 'GitHub', color: 'hover:text-primary' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/siddhant-bhatia-48142a338', label: 'LinkedIn', color: 'hover:text-accent' },
  { icon: Twitter, href: 'https://twitter.com/siddhantbhatia', label: 'Twitter', color: 'hover:text-secondary' },
  { 
    icon: Mail, 
    href: 'mailto:your.actual.email@gmail.com', // UPDATE THIS
    label: 'Email', 
    color: 'hover:text-primary' 
  },
];

export const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: 'Error',
        description: 'Please fill in all fields',
        variant: 'destructive',
      });
      return;
    }

    setIsSubmitting(true);
    
    // TODO: Integrate EmailJS, Formspree, or your own backend here.
    // Currently simulating network request
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: 'Message Sent (Demo)',
      description: "This form is currently in demo mode. Please email me directly.",
    });
    
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-4 gradient-text">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            I'm always interested in hearing about new projects and opportunities
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-heading font-bold mb-4 text-primary">Get in Touch</h3>
                <p className="text-foreground/80 mb-6">
                  Whether you have a project in mind, want to collaborate, or just want to say hi,
                  I'd love to hear from you. Drop me a message and I'll get back to you as soon as possible.
                </p>
                <a
                  href="mailto:siddhant@example.com"
                  className="text-accent hover:text-accent/80 transition-colors font-medium flex items-center gap-2"
                >
                  <Mail size={20} />
                  siddhant@example.com
                </a>
              </div>

              <div>
                <h4 className="text-lg font-heading font-semibold mb-4">Follow Me</h4>
                <div className="flex gap-4">
                  {socialLinks.map(({ icon: Icon, href, label, color }) => (
                    <motion.a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className={`glass-card p-4 rounded-lg text-foreground/60 ${color} transition-all`}
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon size={24} />
                    </motion.a>
                  ))}
                </div>
              </div>

              <div className="glass-card p-6 rounded-xl">
                <h4 className="text-lg font-heading font-semibold mb-3 text-primary">
                  Currently Available For
                </h4>
                <ul className="space-y-2 text-foreground/80">
                  <li className="flex items-center gap-2">
                    <span className="text-accent">▹</span>
                    Internships
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-accent">▹</span>
                    Freelance Projects
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-accent">▹</span>
                    Open Source Collaboration
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <form onSubmit={handleSubmit} className="glass-card p-8 rounded-2xl space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    className="bg-background/50 border-primary/20 focus:border-primary"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                    className="bg-background/50 border-primary/20 focus:border-primary"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project or just say hi..."
                    rows={6}
                    className="bg-background/50 border-primary/20 focus:border-primary resize-none"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      <Send className="mr-2" size={20} />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};