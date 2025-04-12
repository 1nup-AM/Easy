
import React, { RefObject } from 'react';
import { Sparkles, Clock, BrainCircuit, ArrowRight } from 'lucide-react';

interface BenefitsProps {
  demoFormRef: RefObject<HTMLDivElement>;
}

const Benefits: React.FC<BenefitsProps> = ({ demoFormRef }) => {
  const scrollToDemo = () => {
    if (demoFormRef.current) {
      demoFormRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="benefits" className="py-20 bg-easymath-blue text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-white/5 animate-pulse-soft"></div>
      <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-white/5 animate-pulse-soft"></div>
      <div className="absolute top-1/4 right-1/4 w-20 h-20 rounded-full bg-easymath-yellow/10 animate-float"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Unlock Your Full Math Potential
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Our coaching approach focuses on building strong foundations and advanced problem-solving techniques.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Benefit 1 */}
          <div className="p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 transition-all duration-300 hover:transform hover:scale-105 hover:bg-white/15 animate-fade-in animate-delay-100">
            <div className="h-14 w-14 rounded-full bg-white/20 flex items-center justify-center mb-4">
              <Sparkles className="text-easymath-yellow" size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              Live Interactive Classes
            </h3>
            <p className="text-white/80">
              Engage directly with our expert faculty in real-time. Ask questions, solve problems together, and get instant feedback.
            </p>
          </div>
          
          {/* Benefit 2 */}
          <div className="p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 transition-all duration-300 hover:transform hover:scale-105 hover:bg-white/15 animate-fade-in animate-delay-200">
            <div className="h-14 w-14 rounded-full bg-white/20 flex items-center justify-center mb-4">
              <Clock className="text-easymath-yellow" size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              Daily Doubt Solving
            </h3>
            <p className="text-white/80">
              Never let a doubt linger. Get your questions answered promptly through our dedicated doubt-solving sessions.
            </p>
          </div>
          
          {/* Benefit 3 */}
          <div className="p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 transition-all duration-300 hover:transform hover:scale-105 hover:bg-white/15 animate-fade-in animate-delay-300">
            <div className="h-14 w-14 rounded-full bg-white/20 flex items-center justify-center mb-4">
              <BrainCircuit className="text-easymath-yellow" size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              AI-Powered Performance Tracking
            </h3>
            <p className="text-white/80">
              Monitor your progress with advanced analytics. Identify weak areas and track improvement with our intelligent reporting system.
            </p>
          </div>
        </div>
        
        <div className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold text-white mb-4">
              How Easy Math Helps You Improve
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3 group hover:bg-white/5 p-3 rounded-lg transition-all">
                <div className="bg-easymath-yellow text-easymath-blue rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform">1</div>
                <div>
                  <h4 className="font-medium text-white">Diagnostic Assessment</h4>
                  <p className="text-white/80">We identify your strengths and areas of improvement</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 group hover:bg-white/5 p-3 rounded-lg transition-all">
                <div className="bg-easymath-yellow text-easymath-blue rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform">2</div>
                <div>
                  <h4 className="font-medium text-white">Personalized Learning Plan</h4>
                  <p className="text-white/80">Customized study roadmap based on your goals</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 group hover:bg-white/5 p-3 rounded-lg transition-all">
                <div className="bg-easymath-yellow text-easymath-blue rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform">3</div>
                <div>
                  <h4 className="font-medium text-white">Concept Mastery</h4>
                  <p className="text-white/80">Build strong foundations with clear explanations</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 group hover:bg-white/5 p-3 rounded-lg transition-all">
                <div className="bg-easymath-yellow text-easymath-blue rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform">4</div>
                <div>
                  <h4 className="font-medium text-white">Practice & Problem Solving</h4>
                  <p className="text-white/80">Apply concepts with targeted practice problems</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 group hover:bg-white/5 p-3 rounded-lg transition-all">
                <div className="bg-easymath-yellow text-easymath-blue rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform">5</div>
                <div>
                  <h4 className="font-medium text-white">Regular Assessments</h4>
                  <p className="text-white/80">Track progress and adjust your learning plan</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center animate-fade-in animate-delay-200">
            <div className="rounded-xl overflow-hidden bg-gradient-to-br from-easymath-light-blue/30 to-white/30 p-1 hover:shadow-2xl hover:from-easymath-light-blue/50 hover:to-white/50 transition-all duration-500">
              <div className="bg-easymath-blue p-6 md:p-8 rounded-lg">
                <div className="mb-6 text-center">
                  <h4 className="text-xl font-bold text-white mb-2">Join Students Who Excel in Math</h4>
                  <p className="text-white/80">Our students consistently achieve top marks</p>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-white/10 rounded-lg p-4 hover:bg-white/15 transition-colors">
                    <div className="text-sm text-white/80 mb-1">Average Score Improvement</div>
                    <div className="flex items-center">
                      <div className="text-2xl font-bold text-white">30%</div>
                      <div className="ml-2 bg-green-500/20 text-green-400 text-xs px-2 py-1 rounded-full">↑ Increase</div>
                    </div>
                  </div>
                  
                  <div className="bg-white/10 rounded-lg p-4 hover:bg-white/15 transition-colors">
                    <div className="text-sm text-white/80 mb-1">Students Achieving 90%+</div>
                    <div className="flex items-center">
                      <div className="text-2xl font-bold text-white">70%</div>
                      <div className="ml-2 bg-green-500/20 text-green-400 text-xs px-2 py-1 rounded-full">↑ Success Rate</div>
                    </div>
                  </div>
                  
                  <div className="bg-white/10 rounded-lg p-4 hover:bg-white/15 transition-colors">
                    <div className="text-sm text-white/80 mb-1">JEE Success Rate</div>
                    <div className="flex items-center">
                      <div className="text-2xl font-bold text-white">85%</div>
                      <div className="ml-2 bg-green-500/20 text-green-400 text-xs px-2 py-1 rounded-full">↑ Top Performer</div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 text-center">
                  <button onClick={scrollToDemo} className="btn-primary inline-flex items-center justify-center w-full gap-2 group">
                    Get Started – Book a Free Class!
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
