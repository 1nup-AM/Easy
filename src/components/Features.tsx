
import React, { RefObject } from 'react';
import { Zap, Users, Target, ArrowRight } from 'lucide-react';

interface FeaturesProps {
  demoFormRef: RefObject<HTMLDivElement>;
}

const Features: React.FC<FeaturesProps> = ({ demoFormRef }) => {
  const scrollToDemo = () => {
    if (demoFormRef.current) {
      demoFormRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="features" className="py-20 bg-easymath-off-white relative">
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-64 h-64 bg-easymath-blue/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-10 left-10 w-48 h-48 bg-easymath-yellow/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="section-title">Why Choose Easy Math?</h2>
          <p className="section-subtitle">
            We combine effective teaching methodologies with personalized attention to help you excel in mathematics.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="feature-card animate-fade-in animate-delay-100 transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
            <div className="h-14 w-14 rounded-xl bg-easymath-blue/10 flex items-center justify-center mb-4">
              <Zap className="text-easymath-blue" size={28} />
            </div>
            <h3 className="text-xl font-bold text-easymath-blue mb-3">Hybrid Learning</h3>
            <p className="text-gray-600">
              Flexibility to attend classes online or offline based on your convenience. Get the same quality education anywhere.
            </p>
            <div className="mt-4 h-1 w-16 bg-easymath-yellow rounded"></div>
          </div>
          
          {/* Feature 2 */}
          <div className="feature-card animate-fade-in animate-delay-200 transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
            <div className="h-14 w-14 rounded-xl bg-easymath-blue/10 flex items-center justify-center mb-4">
              <Users className="text-easymath-blue" size={28} />
            </div>
            <h3 className="text-xl font-bold text-easymath-blue mb-3">Personalized Learning</h3>
            <p className="text-gray-600">
              Every student learns differently. We create tailored study plans that address your specific strengths and areas for improvement.
            </p>
            <div className="mt-4 h-1 w-16 bg-easymath-yellow rounded"></div>
          </div>
          
          {/* Feature 3 */}
          <div className="feature-card animate-fade-in animate-delay-300 transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
            <div className="h-14 w-14 rounded-xl bg-easymath-blue/10 flex items-center justify-center mb-4">
              <Target className="text-easymath-blue" size={28} />
            </div>
            <h3 className="text-xl font-bold text-easymath-blue mb-3">Exam-Oriented</h3>
            <p className="text-gray-600">
              Our teaching methodology focuses on boosting your scores with smart strategies and targeted practice for competitive exams.
            </p>
            <div className="mt-4 h-1 w-16 bg-easymath-yellow rounded"></div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <button onClick={scrollToDemo} className="btn-primary inline-flex items-center gap-2 group">
            Experience Our Difference
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;
