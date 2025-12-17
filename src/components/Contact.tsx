import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import BlurText from "./BlurText";
import { Mail, MapPin, Github, Linkedin, Twitter, ArrowUpRight, Instagram, Facebook } from "lucide-react";

const socialLinks = [
  { icon: Github, label: "GitHub", href: "https://github.com/AyushBire9", username: "@AyushBire9" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/ayush-bire-a018a8236/", username: "/in/Ayush Bire" },
  { icon: Instagram, label: "Instagram", href: "https://instagram.com", username: "Ayush__bire" },
  { icon: Facebook, label: "Facebook", href: "https://facebook.com", username: "Ayush Bire" },
];

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-[100px] animate-glow pointer-events-none" />

      <div className="container px-6" ref={ref}>
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-primary font-medium mb-4 block"
            >
              Get in Touch
            </motion.span>

            <BlurText
              text="Let's Work"
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-2"
              as="h2"
            />
            <BlurText
              text="Together"
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gradient"
              as="h2"
              delay={0.1}
            />
          </div>

          {/* Contact info card */}
          <motion.div
            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
            animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="glass-card p-8 md:p-12"
          >
            <div className="grid md:grid-cols-2 gap-12">
              {/* Left column */}
              <div>
                <h3 className="text-xl font-display font-semibold mb-6">
                  Ready to start a project?
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  I'm always excited to collaborate on new projects and ideas. 
                  Whether you have a question or just want to say hi, feel free to reach out!
                </p>

                {/* Email */}
                <a
                  href="mailto:ayushbire123@gmail.com"
                  className="flex items-center gap-3 group mb-4"
                >
                  <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium group-hover:text-primary transition-colors">
                      ayushbire123@gmail.com
                    </p>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-full bg-primary/10">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium">Nagpur, India</p>
                  </div>
                </div>
              </div>

              {/* Right column - Social links */}
              <div>
                <h3 className="text-xl font-display font-semibold mb-6">
                  Connect with me
                </h3>
                <div className="space-y-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                      className="flex items-center justify-between p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors group"
                    >
                      <div className="flex items-center gap-3">
                        <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                        <div>
                          <p className="font-medium text-sm">{social.label}</p>
                          <p className="text-xs text-muted-foreground">{social.username}</p>
                        </div>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="mt-12 text-center"
            >
              <a
                href="mailto:hello@developer.com"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:scale-105 transition-transform duration-300 glow-accent"
              >
                <Mail className="w-5 h-5" />
                Send me an email
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
