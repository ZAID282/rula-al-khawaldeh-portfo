import React from 'react';
import SectionWrapper from './SectionWrapper';
import { EDUCATION_DATA } from '../constants';
import { motion } from 'framer-motion';
import { BookOpen, Award } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <SectionWrapper id="education" title="المؤهلات العلمية" subtitle="line">
      <div className="max-w-4xl mx-auto space-y-6">
        {EDUCATION_DATA.map((edu, index) => (
          <motion.div
            key={edu.id}
            initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-lg shadow-md border-r-4 border-secondary flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
          >
            <div className="flex items-start gap-4">
              <div className="bg-blue-50 p-3 rounded-full text-primary mt-1 md:mt-0">
                <BookOpen size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800">{edu.degree}</h3>
                <p className="text-gray-600 mt-1">{edu.institution}</p>
                {edu.details && (
                  <div className="flex items-center gap-1 text-sm text-primary font-medium mt-2">
                    <Award size={14} />
                    <span>{edu.details}</span>
                  </div>
                )}
              </div>
            </div>
            <div className="bg-gray-100 px-4 py-2 rounded-full font-bold text-gray-700 whitespace-nowrap mr-auto md:mr-0">
              {edu.year}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Education;