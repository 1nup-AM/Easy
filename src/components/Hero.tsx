
import React, { useState, useEffect, RefObject } from 'react';
import { ArrowRight, CheckCircle, ChevronDown } from 'lucide-react';

interface HeroProps {
  demoFormRef: RefObject<HTMLDivElement>;
}

const Hero: React.FC<HeroProps> = ({ demoFormRef }) => {
  const [count, setCount] = useState(0);
  const targetCount = 10000;
  const duration = 2500; // ms
  const interval = 20; // ms
  
  useEffect(() => {
    // Start counter animation after component mounts
    const incrementPerInterval = Math.ceil(targetCount / (duration / interval));
    let currentCount = 0;
    
    if (currentCount === targetCount) return;
    
    const timer = setInterval(() => {
      currentCount += incrementPerInterval;
      if (currentCount >= targetCount) {
        currentCount = targetCount;
        clearInterval(timer);
      }
      setCount(currentCount);
    }, interval);
    
    return () => clearInterval(timer);
  }, []);

  const scrollToDemo = () => {
    if (demoFormRef.current) {
      demoFormRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen pt-20 pb-16 flex items-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-easymath-light-blue/30 to-white/30 -z-10"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="inline-block bg-easymath-blue/10 text-easymath-blue px-4 py-1 rounded-full text-sm font-medium">
              CBSE, JEE, & IB Math Coaching
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-easymath-blue leading-tight">
              Struggling with Math? <br />
              <span className="text-easymath-dark-blue">Let's Make It Easy!</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-lg">
              Learn from the best mentors and ace your exams with our personalized coaching approach. Join thousands of successful students!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button onClick={scrollToDemo} className="btn-primary text-center flex items-center justify-center gap-2 group">
                Book Your Free Demo Class Now!
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
              </button>
            </div>
            
            <div className="flex flex-wrap gap-x-6 gap-y-2 pt-2">
              <div className="flex items-center gap-2">
                <CheckCircle className="text-easymath-blue" size={18} />
                <span className="text-gray-700">Live Online & Offline Classes</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-easymath-blue" size={18} />
                <span className="text-gray-700">Expert Math Mentors</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-easymath-blue" size={18} />
                <span className="text-gray-700">Exam-Focused Strategies</span>
              </div>
            </div>
          </div>
          
          <div className="relative animate-fade-in animate-delay-200">
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-easymath-yellow/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-easymath-blue/20 rounded-full blur-3xl"></div>
            
            <div className="glass-container p-2 md:p-4 relative z-10 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1">
              <img 
                src="/lovable-uploads/e36df940-c56d-48c8-a7f1-eb06d3037675.png" 
                alt="Kavita Rana - Math Mentor" 
                className="w-full h-auto rounded-lg"
              />
              
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 glass-container px-6 py-3 text-center whitespace-nowrap animate-bounce-light">
                <div className="counter-value">{count.toLocaleString()}+</div>
                <div className="counter-label">Students Improved Their Scores!</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-light">
          <button 
            onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex flex-col items-center text-easymath-blue opacity-80 hover:opacity-100 transition-opacity"
          >
            <span className="text-sm font-medium mb-1">Discover More</span>
            <ChevronDown size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
