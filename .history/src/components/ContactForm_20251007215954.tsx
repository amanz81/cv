'use client';
import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Option 1: Using EmailJS (you'll need to set up an account)
      // const emailjs = (await import('@emailjs/browser')).default;
      // await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData, 'YOUR_PUBLIC_KEY');
      
      // Option 2: Using a simple API endpoint (recommended for production)
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-16 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-800 mb-4 flex items-center justify-center">
            <span className="bg-slate-800 w-2 h-10 mr-4 rounded-full"></span>
            Get in Touch
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Looking for DevOps consultation or interested in discussing infrastructure solutions? 
            I'd love to hear about your project and how I can help bring your vision to life.
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <p className="text-slate-600 mb-6">
              For the best experience, please use our dedicated contact form:
            </p>
            <a 
              href="/contact.html"
              className="inline-block bg-gradient-to-r from-slate-700 to-slate-800 text-white px-8 py-3 rounded-lg hover:from-slate-800 hover:to-slate-900 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Open Contact Form
            </a>
          </div>
          
          <div className="text-center">
            <p className="text-slate-600 mb-4">Or contact me directly:</p>
            <a 
              href="mailto:assaf.manzur@gmail.com"
              className="text-blue-600 hover:text-blue-800 font-medium text-lg"
            >
              assaf.manzur@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm; 