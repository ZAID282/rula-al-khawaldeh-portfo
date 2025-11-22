import React from 'react';
import SectionWrapper from './SectionWrapper';
import { EXPERIENCE_DATA } from '../constants';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <SectionWrapper id="experience" title="الخبرات المهنية" subtitle="line" className="bg-gray-50">
      <div className="relative container mx-auto px-4">
        {/* Vertical Line */}
        <div className="absolute right-8 md:right-1/2 w-0.5 h-full bg-gray-300 transform -translate-x-1/2"></div>

        <div className="space-y-12">
          {EXPERIENCE_DATA.map((item, index) => (
            <div key={item.id} className={`relative flex flex-col md:flex-row gap-8 items-center ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            }`}>
              
              {/* Dot */}
              <div className="absolute right-8 md:right-1/2 transform translate-x-1/2 md:-translate-x-px w-4 h-4 bg-primary rounded-full border-4 border-white shadow-md z-10"></div>

              {/* Content */}
              <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border-r-4 border-primary"
                >
                  <div className="flex items-center gap-2 mb-2 text-primary">
                    <Briefcase size={18} />
                    <span className="text-sm font-bold">{item.period}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{item.role}</h3>
                  <h4 className="text-md text-gray-600 mb-4 font-medium">{item.institution}</h4>
                  
                  <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm">
                    {item.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                </motion.div>
              </div>
              
              {/* Empty space for alternate side layout */}
              <div className="hidden md:block w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Experience;