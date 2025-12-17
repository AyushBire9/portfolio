import { motion } from "framer-motion";
import { Heart, HeartCrack, HeartPulse } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          {/* Logo/Name */}
          <div className="flex items-center gap-2">
            <span className="text-lg font-display font-bold text-gradient">
              Ayush
            </span>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            © {currentYear} Made with{" "}
            <Heart className="w-4 h-4 text-primary fill-primary" /> All rights reserved.
          </p>

          {/* Back to top */}
          <a
            href="#"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            Back to top ↑
          </a>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
