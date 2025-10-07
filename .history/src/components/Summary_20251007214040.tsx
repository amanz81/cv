import React from 'react';

const Summary = () => {
  return (
    <section className="mb-16 bg-white rounded-2xl shadow-xl p-8 transform hover:scale-[1.02] transition-transform duration-300">
      <h2 className="text-3xl font-bold mb-6 text-slate-800 flex items-center">
        <span className="bg-slate-800 w-2 h-8 mr-4 rounded-full"></span>
        About Me
      </h2>
      <div className="space-y-6">
        <p className="text-lg text-slate-700 leading-relaxed">
          A seasoned DevOps professional with over 14 years of experience leading and managing complex 
          technical projects in production and non-production environments. Known for driving innovation, 
          fostering team collaboration, and implementing robust systems to improve operational efficiency. 
          Proven expertise in cloud architecture, automation, and team leadership, with a strong focus on 
          delivering scalable, secure solutions.
        </p>
        
        <div className="bg-slate-50 rounded-xl p-6 border-l-4 border-slate-800">
          <h3 className="text-xl font-semibold text-slate-800 mb-3">Career Philosophy</h3>
          <p className="text-slate-700 leading-relaxed">
            I believe in the power of automation and continuous improvement to transform how teams work. 
            My approach centers on building bridges between development and operations, creating systems 
            that not only work reliably but also empower teams to innovate faster and with confidence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-slate-800 mb-3">What I Bring</h3>
            <ul className="text-slate-700 space-y-2">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                Strategic thinking with hands-on technical execution
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                Passion for mentoring and building high-performing teams
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                Deep expertise in cloud-native technologies and practices
              </li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-slate-800 mb-3">My Approach</h3>
            <ul className="text-slate-700 space-y-2">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                Collaborative leadership that brings out the best in teams
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                Data-driven decision making with measurable outcomes
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                Continuous learning and staying ahead of technology trends
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Summary; 