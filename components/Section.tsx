import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const Section: React.FC<SectionProps> = ({ children, className = '', id }) => {
  return (
    <motion.section 
      id={id} 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% " }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className={`py-20 md:py-32 px-6 max-w-screen-xl mx-auto ${className}`}
    >
      {children}
    </motion.section>
  );
};