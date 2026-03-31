import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Send, Facebook, Instagram, Linkedin, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser'; // 1. Make sure to: npm install @emailjs/browser

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    // 2. The EmailJS Integration
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      service: formData.service,
      message: formData.message,
    };

    emailjs.send(
      'service_8sp4nr2', 
      'template_bn0jxbr', 
      templateParams, 
      'S8anc0PYxPmDnhbhH'
    )
    .then((response) => {
       console.log('SUCCESS!', response.status, response.text);
       setIsSending(false);
       setSubmitted(true);
       setFormData({ name: '', email: '', phone: '', service: '', message: '' });
       setTimeout(() => setSubmitted(false), 5000);
    })
    .catch((err) => {
       console.error('FAILED...', err);
       setIsSending(false);
       alert("Opps! Something went wrong. Please try again or email directly.");
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="pt-32 pb-20">
      <div className="section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6">Get in Touch</h1>
            <p className="text-xl text-gray-600 mb-12">
              Have questions or ready to get started? Fill out the form below and I’ll get back to you shortly.
            </p>

            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="bg-slate-50 p-4 rounded-xl text-gold">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-navy">Phone</h4>
                  <p className="text-gray-600">775-560-9148</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="bg-slate-50 p-4 rounded-xl text-gold">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-navy">Email</h4>
                  <p className="text-gray-600">bookkeepingbynalini@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="bg-slate-50 p-4 rounded-xl text-gold">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-navy">Location</h4>
                  <p className="text-gray-600">Sparks, Nevada, United States</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h4 className="text-lg font-bold text-navy mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="https://web.facebook.com/profile.php?id=61583864663666" target="_blank" rel="noopener noreferrer" className="bg-navy text-white p-3 rounded-lg hover:bg-gold hover:text-navy transition-all">
                  <Facebook size={20} />
                </a>
                <a href="https://www.instagram.com/bookkeepingbynalini/" target="_blank" rel="noopener noreferrer" className="bg-navy text-white p-3 rounded-lg hover:bg-gold hover:text-navy transition-all">
                  <Instagram size={20} />
                </a>
                <a href="https://www.linkedin.com/in/bookkeepingbynalini" target="_blank" rel="noopener noreferrer" className="bg-navy text-white p-3 rounded-lg hover:bg-gold hover:text-navy transition-all">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100"
          >
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="bg-green-100 text-green-600 p-4 rounded-full mb-6">
                  <Send size={40} />
                </div>
                <h3 className="text-2xl font-bold text-navy mb-2">Message Sent!</h3>
                <p className="text-gray-600">Thank you for reaching out. Nalini will get back to you shortly.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-navy font-bold hover:text-gold underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-navy mb-2">Name</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-gold transition-colors"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-navy mb-2">Email</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-gold transition-colors"
                      placeholder="email@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-navy mb-2">Phone</label>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-gold transition-colors"
                      placeholder="775-000-0000"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-navy mb-2">Service Interested In</label>
                    <select 
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-gold transition-colors bg-white"
                    >
                      <option value="">Select a service</option>
                      <option value="QuickBooks Setup">QuickBooks Setup</option>
                      <option value="Cleanup / Catch-up">Cleanup / Catch-up</option>
                      <option value="Monthly Categorization">Monthly Categorization</option>
                      <option value="Bank Reconciliation">Bank Reconciliation</option>
                      <option value="Financial Reports">Financial Reports</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-navy mb-2">Message</label>
                  <textarea 
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-gold transition-colors"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <div className="bg-slate-50 p-4 rounded-lg text-xs text-gray-500 border border-gray-100">
                  This site is protected by reCAPTCHA and the Google 
                  <a href="#" className="text-navy hover:underline mx-1">Privacy Policy</a> and 
                  <a href="#" className="text-navy hover:underline mx-1">Terms of Service</a> apply.
                </div>

                <button 
                  type="submit" 
                  disabled={isSending}
                  className="w-full btn-accent py-4 text-lg flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSending ? (
                    <>Sending... <Loader2 size={18} className="ml-2 animate-spin" /></>
                  ) : (
                    <>Send Message <Send size={18} className="ml-2" /></>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}