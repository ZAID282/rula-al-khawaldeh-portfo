import React from 'react';
import { motion } from 'framer-motion';

interface SectionWrapperProps {
  children: React.ReactNode;
  id: string;
  className?: string;
  title?: string;
  subtitle?: string;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ children, id, className = "", title, subtitle }) => {
  return (
    <section id={id} className={`py-20 px-4 md:px-8 relative overflow-hidden ${className}`}>
      <div className="max-w-6xl mx-auto relative z-10">
        {(title || subtitle) && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            {title && <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h2>}
            {subtitle && <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;