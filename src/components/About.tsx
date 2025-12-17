import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import BlurText from "./BlurText";
import { Code2, Palette, Rocket, Sparkles } from "lucide-react";

const skills = [
  { icon: Code2, label: "Development", description: "React, TypeScript, Node.js" },
  { icon: Palette, label: "Design", description: "UI/UX, Figma, Motion" },
  { icon: Rocket, label: "Performance", description: "Fast, SEO, Accessible" },
  { icon: Sparkles, label: "Innovation", description: "AI, Web3, Creative Tech" },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
      
      <div className="container px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text content */}
          <div ref={ref}>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-primary font-medium mb-4 block"
            >
              About Me
            </motion.span>
            
            <BlurText
              text="Crafting Digital"
              className="text-4xl md:text-5xl font-display font-bold mb-2"
              as="h2"
              delay={0.1}
            />
            <BlurText
              text="Experiences"
              className="text-4xl md:text-5xl font-display font-bold text-gradient mb-8"
              as="h2"
              delay={0.2}
            />

            <motion.div
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="space-y-4 text-muted-foreground leading-relaxed"
            >
              <p>
                I'm a passionate full-stack developer with over 1 years of experience 
                building modern web applications. I specialize in creating seamless 
                user experiences that blend aesthetics with functionality.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, 
                contributing to open-source projects, or sharing knowledge with the 
                developer community.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex gap-12 mt-10"
            >
              {[
                { value: "10+", label: "Projects" },
                { value: "1+", label: "Years" },
                { value: "1+", label: "Clients" },
              ].map((stat, index) => (
                <div key={index}>
                  <span className="text-3xl md:text-4xl font-display font-bold text-primary">
                    {stat.value}
                  </span>
                  <p className="text-muted-foreground text-sm mt-1">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Skills grid */}
          <div className="grid grid-cols-2 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                className="glass-card p-6 group hover:border-primary/30 transition-colors duration-300"
              >
                <skill.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-display font-semibold text-foreground mb-1">
                  {skill.label}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
