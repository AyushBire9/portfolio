import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import BlurText from "./BlurText";
import { ArrowUpRight, Github } from "lucide-react";

const projects = [
  {
    title: "QR Menu System",
    description:
      "A QR-based digital menu system that allows users to view restaurant menus on their devices with real-time updates and category-based navigation.",
    tags: ["React", "REST API", "firebase"],
    image:
      "https://images.unsplash.com/photo-1544148103-0773bf10d330?w=800&h=600&fit=crop",
    link: "#",
    github: "#",
  },
  {
    title: "E-Commerce Application",
    description:
      "A full-stack e-commerce application with product listing, user interaction flows, and structured frontend-backend communication.",
    tags: ["React", "Next.js", "REST API", "PostgreSQL"],
    image:
      "src/assets/ecommerce.png",
    link: "#",
    github: "#",
  },
  {
    title: "TechZone",
    description:
      "A modular platform designed to handle multiple technical features with scalable architecture and clean separation of concerns.",
    tags: ["React", "Java", "Python", "PostgreSQL"],
    image:
      "src/assets/techzone.png",
    link: "#",
    github: "#",
  },
  {
    title: "Resume Filtration System",
    description:
      "A system that processes and filters resumes based on keywords and predefined criteria to reduce manual screening effort.",
    tags: ["React", "Python", "Firebase"],
    image:
      "https://static.jobscan.co/blog/uploads/What-is-ATS.jpg",
    link: "#",
    github: "#",
  },
];


const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-32 relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container px-6" ref={ref}>
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-primary font-medium mb-4 block"
          >
            Real Projects

          </motion.span>
          
          <BlurText
            text="Work I’ve Built"
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold"
            as="h2"
          />
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
              animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
              transition={{ delay: 0.2 + index * 0.15, duration: 0.7 }}
              className="group glass-card overflow-hidden"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Links */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <a
                    href={project.github}
                    className="p-2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background transition-colors"
                    aria-label="View on GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={project.link}
                    className="p-2 rounded-full bg-primary text-primary-foreground hover:scale-110 transition-transform"
                    aria-label="View project"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-display font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
