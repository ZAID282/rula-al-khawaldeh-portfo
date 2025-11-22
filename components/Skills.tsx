import React from 'react';
import SectionWrapper from './SectionWrapper';
import { SKILLS_DATA } from '../constants';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const Skills: React.FC = () => {
  return (
    <SectionWrapper id="skills" title="المهارات والقدرات" subtitle="line">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {SKILLS_DATA.map((skillGroup, groupIndex) => (
          <motion.div
            key={groupIndex}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: groupIndex * 0.2 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:border-primary/30 transition-colors group"
          >
            <div className="bg-gray-50 p-4 border-b border-gray-100 group-hover:bg-blue-50 transition-colors">
              <h3 className="text-lg font-bold text-center text-primary">{skillGroup.category}</h3>
            </div>
            <div className="p-6">
              <ul className="space-y-3">
                {skillGroup.items.map((skill, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="text-green-500 flex-shrink-0 mt-1" size={18} />
                    <span className="text-gray-700">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Skills;