
import React, { useState } from 'react';
import { Check, Send, Sparkles } from 'lucide-react';
import { toast } from 'sonner';

const DemoForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    class: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name || !formData.phone || !formData.class) {
      toast.error('Please fill in all fields');
      return;
    }

    try {
      const response = await fetch("https://formsubmit.co/ajax/info@easymath.in", {
        method:"POST",
        headers:{
          "Content-Type":"application/json",
          Accept:"application/json"
        },
        body:JSON.stringify(formData)
      });
      if (response.ok) {
        toast.success("Your free demo class has been booked!");
        setFormSuccess(true);
        setFormData({name:"",phone:"",class:""});

        setTimeout(() => setFormSuccess(false), 5000);
      } else{
        toast.error("Something went wrong. Try again!");
      }
    } catch (err) {
      toast.error("Submission failed.");
    } finally{
      setIsSubmitting(false);
    }
  };
  
  return (
    <section id="demo-form" className="py-20 bg-easymath-off-white relative">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-easymath-light-blue/30 to-transparent -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-easymath-light-blue/30 to-transparent -z-10"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="section-title">Start Your Math Journey Today</h2>
            <p className="section-subtitle">
              Book a free demo class and experience our teaching methodology firsthand.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden animate-fade-in transform transition-all duration-500 hover:shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="bg-easymath-blue p-8 md:p-10 text-white">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Sparkles size={20} className="text-easymath-yellow" />
                  Why Try Our Free Demo?
                </h3>
                
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 group">
                    <div className="bg-easymath-yellow rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                      <Check className="text-easymath-blue" size={14} />
                    </div>
                    <span>Experience our interactive teaching style</span>
                  </li>
                  <li className="flex items-start gap-3 group">
                    <div className="bg-easymath-yellow rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                      <Check className="text-easymath-blue" size={14} />
                    </div>
                    <span>Get a personalized assessment of your current level</span>
                  </li>
                  <li className="flex items-start gap-3 group">
                    <div className="bg-easymath-yellow rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                      <Check className="text-easymath-blue" size={14} />
                    </div>
                    <span>Learn practical tips to improve your math skills</span>
                  </li>
                  <li className="flex items-start gap-3 group">
                    <div className="bg-easymath-yellow rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                      <Check className="text-easymath-blue" size={14} />
                    </div>
                    <span>Ask questions directly to our expert teachers</span>
                  </li>
                </ul>
                
                <div className="mt-8 p-4 bg-white/10 rounded-lg flex items-center gap-3 hover:bg-white/15 transition-all cursor-pointer shadow-sm">
                  <div className="bg-easymath-yellow rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 animate-pulse-soft">
                    <span className="text-easymath-blue font-bold">10</span>
                  </div>
                  <div>
                    <div className="font-medium">Limited Slots Available!</div>
                    <div className="text-sm text-white/80">Only 10 free slots left this week</div>
                  </div>
                </div>
              </div>
              
              <div className="p-8 md:p-10">
                <h3 className="text-2xl font-bold text-easymath-blue mb-6">Book Your Free Class</h3>
                
                {formSuccess ? (
                  <div className="h-full flex flex-col items-center justify-center py-8 text-center animate-fade-in">
                    <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                      <Check size={32} className="text-green-600" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-800 mb-2">Booking Successful!</h4>
                    <p className="text-gray-600 mb-4">We'll contact you shortly to confirm your demo class details.</p>
                    <p className="text-sm text-gray-500">Thank you for choosing Easy Math.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 font-medium mb-1">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="form-input w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-easymath-blue focus:ring focus:ring-easymath-blue/20 transition-all"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-gray-700 font-medium mb-1">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="form-input w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-easymath-blue focus:ring focus:ring-easymath-blue/20 transition-all"
                        placeholder="Your phone number"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="class" className="block text-gray-700 font-medium mb-1">Class</label>
                      <select
                        id="class"
                        name="class"
                        value={formData.class}
                        onChange={handleChange}
                        className="form-input w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-easymath-blue focus:ring focus:ring-easymath-blue/20 transition-all"
                        required
                      >
                        <option value="">Select your class</option>
                        <option value="9">Class 9</option>
                        <option value="10">Class 10</option>
                        <option value="11">Class 11</option>
                        <option value="12">Class 12</option>
                      </select>
                    </div>
                    
                    <button
                      type="submit"
                      className="btn-primary w-full flex items-center justify-center group"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-easymath-dark-blue" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing...
                        </>
                      ) : (
                        <>
                          Claim Your Free Class Now!
                          <Send size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoForm;
