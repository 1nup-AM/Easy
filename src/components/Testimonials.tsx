
import React, { useState, useEffect, RefObject } from 'react';
import { ChevronLeft, ChevronRight, Star, ArrowRight } from 'lucide-react';

interface TestimonialsProps {
  demoFormRef: RefObject<HTMLDivElement>;
}

const testimonials = [
  {
    id: 1,
    name: "Shruti Aggarwal",
    role: "Class 9",
    quote: "I improved from 65% to 95% in just 3 months! The personalized attention from teachers made all the difference.",
    before: 65,
    after: 95,
    stars: 5
  },
  {
    id: 2,
    name: "Rahul Verma",
    role: "JEE Aspirant",
    quote: "Easy Math helped me crack JEE with a 98 percentile! The problem-solving techniques I learned were invaluable.",
    before: 70,
    after: 98,
    stars: 5
  },
  {
    id: 3,
    name: "Priya Sharma",
    role: "Class 10",
    quote: "Math was my weakest subject, but now it's my strongest! Regular practice and guidance helped me achieve 92%.",
    before: 58,
    after: 92,
    stars: 5
  }
];

const Testimonials: React.FC<TestimonialsProps> = ({ demoFormRef }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };
  
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isPaused]);
  
  const scrollToDemo = () => {
    if (demoFormRef.current) {
      demoFormRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <section id="testimonials" className="py-20 bg-white relative">
      {/* Decorative elements */}
      <div className="absolute left-0 top-0 w-full h-20 bg-gradient-to-b from-easymath-off-white to-transparent"></div>
      <div className="absolute left-0 bottom-0 w-full h-20 bg-gradient-to-t from-easymath-off-white to-transparent"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="section-title">Student Success Stories</h2>
          <p className="section-subtitle">
            Don't just take our word for it. Hear what our students have to say about their experience with Easy Math.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-5 md:-translate-x-10 z-10">
            <button 
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-white shadow-md hover:bg-easymath-light-blue transition-colors text-easymath-blue"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
          </div>
          
          <div className="overflow-hidden">
            <div 
              className="transition-all duration-500 ease-in-out transform flex"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id}
                  className="min-w-full px-4"
                >
                  <div className="glass-card p-8 rounded-2xl shadow-lg transform transition-all duration-500 hover:shadow-xl">
                    <div className="flex justify-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i}
                          size={20}
                          className={i < testimonial.stars ? "text-easymath-yellow fill-easymath-yellow" : "text-gray-300"}
                        />
                      ))}
                    </div>
                    
                    <blockquote className="text-xl md:text-2xl text-center text-gray-700 mb-8 italic">
                      "{testimonial.quote}"
                    </blockquote>
                    
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                      <div className="text-center sm:text-left">
                        <h4 className="font-bold text-easymath-blue text-lg">{testimonial.name}</h4>
                        <p className="text-gray-600">{testimonial.role}</p>
                      </div>
                      
                      <div className="bg-easymath-off-white p-4 rounded-xl shadow-sm">
                        <div className="flex items-center gap-4">
                          <div className="text-center">
                            <div className="text-gray-500 text-sm font-medium">Before</div>
                            <div className="text-2xl font-bold text-easymath-blue">{testimonial.before}%</div>
                          </div>
                          
                          <div className="w-12 h-0.5 bg-gray-200 relative">
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-easymath-dark-blue">
                              →
                            </div>
                          </div>
                          
                          <div className="text-center">
                            <div className="text-gray-500 text-sm font-medium">After</div>
                            <div className="text-2xl font-bold text-easymath-yellow">{testimonial.after}%</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-5 md:translate-x-10 z-10">
            <button 
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-white shadow-md hover:bg-easymath-light-blue transition-colors text-easymath-blue"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
          
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentIndex === index 
                    ? 'bg-easymath-blue w-6' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        <div className="text-center mt-12">
          <button onClick={scrollToDemo} className="btn-primary inline-flex items-center gap-2 group">
            Join Our Winning Students – Enroll Today!
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
