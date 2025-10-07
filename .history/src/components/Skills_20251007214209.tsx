import React from 'react';

const Skills = () => {
  const skills = [
    { 
      category: 'Leadership & Collaboration', 
      items: ['Team Leadership', 'Mentorship', 'Cross-functional Coordination', 'Technical Innovation', 'Agile Methodologies']
    },
    { 
      category: 'DevOps & Cloud', 
      items: ['Kubernetes', 'Docker', 'AWS', 'Terraform', 'Istio', 'Jenkins', 'GitOps']
    },
    { 
      category: 'Infrastructure & Automation', 
      items: ['CI/CD Pipelines', 'Microservices', 'Ansible', 'Infrastructure as Code', 'Virtualization']
    },
    { 
      category: 'Monitoring & Tools', 
      items: ['Prometheus', 'Grafana', 'Automation Scripting', 'Monitoring Systems']
    }
  ];

  return (
    <section id="skills" className="mb-16">
      <h2 className="text-3xl font-bold mb-12 text-slate-800 flex items-center">
        <span className="bg-slate-800 w-2 h-8 mr-4 rounded-full"></span>
        Technical Skills
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skills.map((skillGroup, index) => (
          <div 
            key={skillGroup.category} 
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <h3 className="text-xl font-bold mb-6 text-slate-800 flex items-center">
              <span className={`w-3 h-3 rounded-full mr-3 ${
                index === 0 ? 'bg-blue-500' : 
                index === 1 ? 'bg-green-500' : 
                index === 2 ? 'bg-purple-500' : 'bg-orange-500'
              }`}></span>
              {skillGroup.category}
            </h3>
            <div className="flex flex-wrap gap-3">
              {skillGroup.items.map((skill) => (
                <span
                  key={skill}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105 ${
                    index === 0 ? 'bg-blue-50 text-blue-700 hover:bg-blue-100' :
                    index === 1 ? 'bg-green-50 text-green-700 hover:bg-green-100' :
                    index === 2 ? 'bg-purple-50 text-purple-700 hover:bg-purple-100' :
                    'bg-orange-50 text-orange-700 hover:bg-orange-100'
                  }`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills; 