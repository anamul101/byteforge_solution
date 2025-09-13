"use client";

import { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const ContactSection = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFocus = (fieldName: string) => {
    setFocusedField(fieldName);
  };

  const handleBlur = () => {
    setFocusedField(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate API call - replace with your actual endpoint
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Here you would typically send the form data to your backend
      console.log('Form submitted:', formData);
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }
  };

  return (
    <section className="w-full py-16 px-4 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Let&apos;s talk about your project. Feel free to ask me any question or let&apos;s do to talk about our future collaboration.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-black p-8 rounded-xl border border-gray-800">
            <h3 className="text-2xl font-bold mb-6 text-[#c831e0]">Get In Touch</h3>
            
            {submitStatus === 'success' && (
              <div className="bg-green-900/30 border border-green-800 text-green-300 p-4 rounded-md mb-6">
                Thank you for your message! We&apos;ll get back to you soon.
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="bg-red-900/30 border border-red-800 text-red-300 p-4 rounded-md mb-6">
                There was an error sending your message. Please try again.
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => handleFocus('name')}
                    onBlur={handleBlur}
                    required
                    className="w-full px-0 py-3 bg-transparent border-0 border-b border-gray-700 focus:border-blue-500 focus:ring-0 outline-none transition-all duration-300"
                    placeholder=" "
                  />
                  <label 
                    htmlFor="name" 
                    className={`absolute left-0 transition-all duration-300 ${
                      focusedField === 'name' || formData.name 
                        ? '-top-5 text-sm text-white' 
                        : 'top-3 text-gray-500'
                    }`}
                  >
                    Name
                  </label>
                </div>
                
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => handleFocus('email')}
                    onBlur={handleBlur}
                    required
                    className="w-full px-0 py-3 bg-transparent border-0 border-b border-gray-700 focus:border-blue-500 focus:ring-0 outline-none transition-all duration-300"
                    placeholder=" "
                  />
                  <label 
                    htmlFor="email" 
                    className={`absolute left-0 transition-all duration-300 ${
                      focusedField === 'email' || formData.email 
                        ? '-top-5 text-sm text-white' 
                        : 'top-3 text-gray-500'
                    }`}
                  >
                    Email
                  </label>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative">
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    onFocus={() => handleFocus('phone')}
                    onBlur={handleBlur}
                    className="w-full px-0 py-3 bg-transparent border-0 border-b border-gray-700 focus:border-blue-500 focus:ring-0 outline-none transition-all duration-300"
                    placeholder=" "
                  />
                  <label 
                    htmlFor="phone" 
                    className={`absolute left-0 transition-all duration-300 ${
                      focusedField === 'phone' || formData.phone 
                        ? '-top-5 text-sm text-white' 
                        : 'top-3 text-gray-500'
                    }`}
                  >
                    Phone Number
                  </label>
                </div>
                
                <div className="relative">
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    onFocus={() => handleFocus('subject')}
                    onBlur={handleBlur}
                    required
                    className="w-full px-0 py-3 bg-transparent border-0 border-b border-gray-700 focus:border-blue-500 focus:ring-0 outline-none transition-all duration-300"
                    placeholder=" "
                  />
                  <label 
                    htmlFor="subject" 
                    className={`absolute left-0 transition-all duration-300 ${
                      focusedField === 'subject' || formData.subject 
                        ? '-top-5 text-sm text-white' 
                        : 'top-3 text-gray-500'
                    }`}
                  >
                    Subject
                  </label>
                </div>
              </div>
              
              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => handleFocus('message')}
                  onBlur={handleBlur}
                  required
                  rows={3}
                  className="w-full px-0 py-3 bg-transparent border-0 border-b border-gray-700 focus:border-blue-500 focus:ring-0 outline-none transition-all duration-300 resize-none"
                  placeholder=" "
                ></textarea>
                <label 
                  htmlFor="message" 
                  className={`absolute left-0 transition-all duration-300 ${
                    focusedField === 'message' || formData.message 
                      ? '-top-5 text-sm text-white' 
                      : 'top-3 text-gray-500'
                  }`}
                >
                  Message
                </label>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
          
          {/* Contact Information */}
          <div className="bg-black p-8 rounded-xl border border-gray-800 h-full">
            <h3 className="text-2xl font-bold mb-6 text-[#c831e0]">Contact Info</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold mb-2 text-blue-400">Let&apos;s Talk.</h4>
                <p className="text-gray-300">
                  office@ustiba.com<br />
                  info@ustiba.com
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2 text-blue-400">Point of Scout(PCI)</h4>
                <p className="text-gray-300">
                  +88 0702644246<br />
                  +88 0716644773
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-2 text-blue-400">Visit Us.</h4>
                <p className="text-gray-300">Vault Team: 8029</p>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-800">
              <h4 className="text-lg font-semibold mb-4 text-blue-400">Office Hours</h4>
              <p className="text-gray-300">
                Monday - Friday: 9:00 AM - 6:00 PM<br />
                Saturday: 10:00 AM - 4:00 PM<br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;