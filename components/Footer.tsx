import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-gray-400 py-8 text-center">
      <div className="container mx-auto px-4">
        <p className="flex items-center justify-center gap-2 text-sm">
          تم التصميم والتطوير بكل <Heart size={14} className="text-red-500 fill-red-500" /> بواسطة المحفظة الشخصية
        </p>
        <p className="mt-2 text-xs opacity-50">
          &copy; {new Date().getFullYear()} رلى الخوالدة. جميع الحقوق محفوظة.
        </p>
      </div>
    </footer>
  );
};

export default Footer;