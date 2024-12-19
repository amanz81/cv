import React from 'react';

const Summary = () => {
  return (
    <section className="mb-16 bg-white rounded-2xl shadow-xl p-8 transform hover:scale-[1.02] transition-transform duration-300">
      <h2 className="text-3xl font-bold mb-6 text-slate-800 flex items-center">
        <span className="bg-slate-800 w-2 h-8 mr-4 rounded-full"></span>
        Professional Summary
      </h2>
      <p className="text-lg text-slate-700 leading-relaxed">
        A seasoned DevOps professional with over 14 years of experience leading and managing complex 
        technical projects in production and non-production environments. Known for driving innovation, 
        fostering team collaboration, and implementing robust systems to improve operational efficiency. 
        Proven expertise in cloud architecture, automation, and team leadership, with a strong focus on 
        delivering scalable, secure solutions.
      </p>
    </section>
  );
};

export default Summary; 