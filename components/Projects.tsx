import React from 'react';
import SectionWrapper from './SectionWrapper';
import { PROJECTS_DATA } from '../constants';
import { motion } from 'framer-motion';
import { Vote, Presentation, GraduationCap } from 'lucide-react';

const Projects: React.FC = () => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'election': return <Vote className="w-6 h-6 text-white" />;
      case 'conference': return <Presentation className="w-6 h-6 text-white" />;
      case 'training': return <GraduationCap className="w-6 h-6 text-white" />;
      default: return <Presentation className="w-6 h-6 text-white" />;
    }
  };

  const getColor = (type: string) => {
    switch (type) {
      case 'election': return 'bg-purple-500';
      case 'conference': return 'bg-blue-500';
      case 'training': return 'bg-emerald-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <SectionWrapper id="projects" title="إنجازات ومبادرات" subtitle="line" className="bg-gray-50">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS_DATA.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all cursor-default"
          >
            <div className="p-6">
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${getColor(project.type)} shadow-lg`}>
                {getIcon(project.type)}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{project.title}</h3>
              <div className="inline-block px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full mb-4">
                {project.role}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                {project.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Projects;