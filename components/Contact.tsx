import React from 'react';
import SectionWrapper from './SectionWrapper';
import { CONTACT_INFO } from '../constants';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <SectionWrapper id="contact" title="تواصل معي" subtitle="line" className="bg-slate-900 text-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <p className="text-gray-300 text-lg">
            أرحب بالتواصل لمناقشة الفرص التعليمية، الاستشارات الإدارية، أو المبادرات التربوية.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                <Phone className="text-white" size={20} />
              </div>
              <div>
                <h4 className="text-gray-400 text-sm mb-1">رقم الهاتف</h4>
                <p className="text-xl font-bold dir-ltr text-right">{CONTACT_INFO.phone}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                <Mail className="text-white" size={20} />
              </div>
              <div>
                <h4 className="text-gray-400 text-sm mb-1">البريد الإلكتروني</h4>
                <a href={`mailto:${CONTACT_INFO.email}`} className="text-xl font-bold hover:text-primary transition-colors">
                  {CONTACT_INFO.email}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                <MapPin className="text-white" size={20} />
              </div>
              <div>
                <h4 className="text-gray-400 text-sm mb-1">العنوان</h4>
                <p className="text-xl font-bold">{CONTACT_INFO.location}</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-white text-gray-800 rounded-2xl p-8 shadow-2xl"
        >
          <h3 className="text-2xl font-bold mb-6 text-primary">أرسل رسالة</h3>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-gray-700">الاسم</label>
                <input type="text" id="name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none" placeholder="اسمك الكامل" />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-700">البريد الإلكتروني</label>
                <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none" placeholder="example@domain.com" />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium text-gray-700">الموضوع</label>
              <input type="text" id="subject" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none" placeholder="سبب التواصل" />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-gray-700">الرسالة</label>
              <textarea id="message" rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none resize-none" placeholder="اكتب رسالتك هنا..."></textarea>
            </div>
            <button type="submit" className="w-full bg-primary hover:bg-blue-900 text-white font-bold py-3 rounded-lg transition-colors flex items-center justify-center gap-2">
              <span>إرسال</span>
              <Send size={18} />
            </button>
          </form>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;