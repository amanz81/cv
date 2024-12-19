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
      <h2 className="text-3xl font-bold mb-8 text-slate-800 flex items-center">
        <span className="bg-slate-800 w-2 h-8 mr-4 rounded-full"></span>
        Technical Skills
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills.map((skillGroup) => (
          <div 
            key={skillGroup.category} 
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-xl font-semibold mb-4 text-slate-700">{skillGroup.category}</h3>
            <div className="flex flex-wrap gap-2">
              {skillGroup.items.map((skill) => (
                <span
                  key={skill}
                  className="bg-slate-100 text-slate-700 px-4 py-2 rounded-lg text-sm 
                           hover:bg-slate-200 transition-colors duration-200"
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