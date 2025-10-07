import React from 'react';

const ContactForm = () => {

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
            I&apos;d love to hear about your project and how I can help bring your vision to life.
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