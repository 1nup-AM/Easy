
import React from 'react';
import { Facebook, Instagram, Youtube, MapPin, Phone, Mail, Globe, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-white pt-16 pb-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <img 
              src="/lovable-uploads/math.png" 
              alt="Easy Math Logo" 
              className="h-10 mb-6"
            />
            <p className="text-gray-600 mb-6 max-w-md">
              EasyMath is a premium coaching platform for CBSE students, helping them excel in mathematics through personalized learning.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/easymath_officials/" target='_blank' rel='noopener noreferrer' aria-label='Instagram' className="h-10 w-10 rounded-full bg-easymath-blue/10 flex items-center justify-center text-easymath-blue hover:bg-easymath-blue hover:text-white transition-colors">
                <Instagram size={18} />
              </a>
              <a href="https://www.facebook.com/kavitaranamathstutor" target='_blank' rel='noopener noreferrer' aria-label='Facebook' className="h-10 w-10 rounded-full bg-easymath-blue/10 flex items-center justify-center text-easymath-blue hover:bg-easymath-blue hover:text-white transition-colors">
                <Facebook size={18} />
              </a>
              <a href="https://www.linkedin.com/in/kavitaranamaths/" target='_blank' rel='noopener noreferrer' aria-label='Linkedin' className="h-10 w-10 rounded-full bg-easymath-blue/10 flex items-center justify-center text-easymath-blue hover:bg-easymath-blue hover:text-white transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-easymath-blue mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-easymath-blue transition-colors">About Us</a>
              </li>
              <li>
                <a href="#features" className="text-gray-600 hover:text-easymath-blue transition-colors">Courses</a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-600 hover:text-easymath-blue transition-colors">Testimonials</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-easymath-blue transition-colors">Blog</a>
              </li>
              <li>
                <a href="#demo-form" className="text-gray-600 hover:text-easymath-blue transition-colors">Free Demo Class</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-easymath-blue mb-6">Our Courses</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-easymath-blue transition-colors">CBSE Mathematics (9-10)</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-easymath-blue transition-colors">CBSE Mathematics (11-12)</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-easymath-blue mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-easymath-blue flex-shrink-0 mt-1" size={18} />
                <span className="text-gray-600">Golden Palms, Sector 168, Noida</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="text-easymath-blue flex-shrink-0 mt-1" size={18} />
                <span className="text-gray-600">+91 9560313130</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="text-easymath-blue flex-shrink-0 mt-1" size={18} />
                <a href="https://www.easymath.in/contact/" target='_blank'><span className="text-gray-600">info@easymath.in</span></a>
              </li>
              <li className="flex items-start gap-3">
                <Globe className="text-easymath-blue flex-shrink-0 mt-1" size={18} />
                <a href="https://www.easymath.in/" target='_blank'><span className="text-gray-600">www.easymath.in</span></a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} EasyMath. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-500 hover:text-easymath-blue text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-easymath-blue text-sm">Terms of Service</a>
              <a href="#" className="text-gray-500 hover:text-easymath-blue text-sm">Refund Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
