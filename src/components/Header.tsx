
import React, { useState, useEffect, RefObject } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  getSectionRef: (sectionId: string) => RefObject<HTMLDivElement> | null;
}

const Header: React.FC<HeaderProps> = ({ getSectionRef }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const sectionRef = getSectionRef(sectionId);
    if (sectionRef?.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/math.png" 
              alt="Easy Math Logo" 
              className="h-10"
            />
          </a>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="text-easymath-blue hover:text-easymath-dark-blue font-medium transition-colors relative group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-easymath-yellow group-hover:w-full transition-all duration-300"></span>
            </a>
            <a 
              href="#features" 
              onClick={(e) => { e.preventDefault(); scrollToSection('features'); }}
              className="text-easymath-blue hover:text-easymath-dark-blue font-medium transition-colors relative group"
            >
              Why Us
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-easymath-yellow group-hover:w-full transition-all duration-300"></span>
            </a>
            <a 
              href="#testimonials" 
              onClick={(e) => { e.preventDefault(); scrollToSection('testimonials'); }}
              className="text-easymath-blue hover:text-easymath-dark-blue font-medium transition-colors relative group"
            >
              Success Stories
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-easymath-yellow group-hover:w-full transition-all duration-300"></span>
            </a>
            <a 
              href="#benefits" 
              onClick={(e) => { e.preventDefault(); scrollToSection('benefits'); }}
              className="text-easymath-blue hover:text-easymath-dark-blue font-medium transition-colors relative group"
            >
              Benefits
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-easymath-yellow group-hover:w-full transition-all duration-300"></span>
            </a>
            <a 
              href="#contact" 
              onClick={(e) => { e.preventDefault(); scrollToSection('demo-form'); }}
              className="text-easymath-blue hover:text-easymath-dark-blue font-medium transition-colors relative group"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-easymath-yellow group-hover:w-full transition-all duration-300"></span>
            </a>
          </nav>
          
          <a 
            href="#demo-form" 
            onClick={(e) => { e.preventDefault(); scrollToSection('demo-form'); }}
            className="hidden md:block btn-primary"
          >
            Book Free Demo
          </a>
          
          <button 
            className="md:hidden text-easymath-blue"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 right-0 shadow-lg animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a 
              href="#" 
              className="text-easymath-blue font-medium py-2 px-4 rounded-lg hover:bg-easymath-light-blue transition-colors"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); setMobileMenuOpen(false); }}
            >
              Home
            </a>
            <a 
              href="#features" 
              className="text-easymath-blue font-medium py-2 px-4 rounded-lg hover:bg-easymath-light-blue transition-colors"
              onClick={(e) => { e.preventDefault(); scrollToSection('features'); }}
            >
              Why Us
            </a>
            <a 
              href="#testimonials" 
              className="text-easymath-blue font-medium py-2 px-4 rounded-lg hover:bg-easymath-light-blue transition-colors"
              onClick={(e) => { e.preventDefault(); scrollToSection('testimonials'); }}
            >
              Success Stories
            </a>
            <a 
              href="#benefits" 
              className="text-easymath-blue font-medium py-2 px-4 rounded-lg hover:bg-easymath-light-blue transition-colors"
              onClick={(e) => { e.preventDefault(); scrollToSection('benefits'); }}
            >
              Benefits
            </a>
            <a 
              href="#contact" 
              className="text-easymath-blue font-medium py-2 px-4 rounded-lg hover:bg-easymath-light-blue transition-colors"
              onClick={(e) => { e.preventDefault(); scrollToSection('demo-form'); }}
            >
              Contact
            </a>
            <a 
              href="#demo-form" 
              className="btn-primary text-center"
              onClick={(e) => { e.preventDefault(); scrollToSection('demo-form'); }}
            >
              Book Free Demo
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
