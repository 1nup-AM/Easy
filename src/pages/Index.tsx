
import React, { useEffect, useRef } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import Benefits from '../components/Benefits';
import DemoForm from '../components/DemoForm';
import Footer from '../components/Footer';
import FloatingElements from '../components/FloatingElements';
import WhatsAppButton from '../components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import { ArrowUp } from 'lucide-react';

const Index = () => {
  const [showScrollTop, setShowScrollTop] = React.useState(false);
  
  // References to each section for smooth scrolling
  const featuresRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);
  const demoFormRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Update page title
    document.title = "Easy Math - Premium Math Coaching for CBSE, JEE & IB";
    
    // Setup scroll listener for back-to-top button
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  // Helper to get section refs
  const getSectionRef = (sectionId: string) => {
    switch(sectionId) {
      case 'features': return featuresRef;
      case 'testimonials': return testimonialsRef;
      case 'benefits': return benefitsRef;
      case 'demo-form': return demoFormRef;
      default: return null;
    }
  };
  
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <FloatingElements />
      <Header getSectionRef={getSectionRef} />
      <Hero demoFormRef={demoFormRef} />
      <div ref={featuresRef}>
        <Features demoFormRef={demoFormRef} />
      </div>
      <div ref={testimonialsRef}>
        <Testimonials demoFormRef={demoFormRef} />
      </div>
      <div ref={benefitsRef}>
        <Benefits demoFormRef={demoFormRef} />
      </div>
      <div ref={demoFormRef}>
        <DemoForm />
      </div>
      <Footer />
      <WhatsAppButton />
      
      {/* Scroll to top button */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-20 right-4 h-10 w-10 rounded-full bg-easymath-blue shadow-lg z-40 p-0 hover:bg-easymath-dark-blue transition-all animate-fade-in"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </Button>
      )}
    </div>
  );
};

export default Index;
