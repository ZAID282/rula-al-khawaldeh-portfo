import React from 'react';
import SectionWrapper from './SectionWrapper';
import { PROFILE_SUMMARY, REPORTS_STATS } from '../constants';
import { motion } from 'framer-motion';
import { Star, Users, Calendar, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <SectionWrapper id="about" title="نبذة عني" subtitle="line">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <p className="text-lg leading-relaxed text-gray-700 text-justify">
            {PROFILE_SUMMARY}
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 flex items-center gap-4">
              <div className="bg-blue-100 p-3 rounded-full text-primary">
                <Calendar size={24} />
              </div>
              <div>
                <h4 className="font-bold text-gray-900">+25 سنة</h4>
                <p className="text-sm text-gray-600">خبرة تعليمية</p>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 flex items-center gap-4">
              <div className="bg-green-100 p-3 rounded-full text-green-600">
                <Users size={24} />
              </div>
              <div>
                <h4 className="font-bold text-gray-900">قيادة</h4>
                <p className="text-sm text-gray-600">فرق تربوية</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-primary"
        >
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
            <Award className="text-yellow-500" />
            تقارير الأداء السنوية
          </h3>
          <div className="space-y-4">
            {REPORTS_STATS.map((stat, index) => (
              <div key={index} className="relative">
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700">عام {stat.year}</span>
                  <span className="text-sm font-bold text-primary">{stat.score}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <motion.div 
                    className="bg-primary h-2.5 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: stat.score }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                  ></motion.div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default About;