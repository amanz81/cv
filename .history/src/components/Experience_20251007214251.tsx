import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: 'DevOps Tech Lead',
      company: 'Salesforce',
      period: 'August 2024 - Present',
      description: 'Leading DevOps initiatives and technical strategies across teams.',
      achievements: [
        'Led a team of engineers to architect and implement scalable DevOps solutions, ensuring 99.9% uptime',
        'Defined technical strategies for Kubernetes and Istio implementation',
        'Facilitated knowledge-sharing workshops to upskill team members',
        'Spearheaded the integration of GitOps workflows'
      ]
    },
    {
      title: 'Senior DevOps Engineer',
      company: 'Salesforce',
      period: 'November 2021 - August 2024',
      description: 'Responsible for infrastructure automation and CI/CD implementation.',
      achievements: [
        'Designed and implemented automated infrastructure using Terraform and Ansible',
        'Enhanced monitoring and alerting systems with Prometheus and Grafana, improving response times by 30%',
        'Built scalable CI/CD pipelines enabling rapid feature deployment',
        'Collaborated with cross-functional teams to align development and operations'
      ]
    },
    {
      title: 'Senior System Engineer',
      company: 'Gigya',
      period: 'January 2016 - May 2019',
      description: 'Managed large-scale virtualized environments for enterprise clients.',
      achievements: [
        'Managed and maintained large-scale, virtualized environments',
        'Automated routine tasks with custom scripts',
        'Led migration of legacy systems to modern cloud infrastructure, reducing costs by 20%',
        'Mentored junior engineers and fostered continuous learning'
      ]
    }
  ];

  return (
    <section id="experience" className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-slate-800 flex items-center">
          <span className="bg-slate-800 w-2 h-8 mr-4 rounded-full"></span>
          Professional Experience
        </h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border-l-4 border-slate-200 hover:border-slate-500">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">{exp.title}</h3>
                  <div className="flex flex-col md:flex-row md:items-center md:space-x-4 text-slate-600">
                    <span className="font-semibold text-slate-700">{exp.company}</span>
                    <span className="hidden md:inline">•</span>
                    <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-medium">
                      {exp.period}
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-lg text-slate-700 mb-6 leading-relaxed">{exp.description}</p>
              <div>
                <h4 className="text-lg font-semibold text-slate-800 mb-4">Key Achievements:</h4>
                <ul className="space-y-3">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start text-slate-700">
                      <span className="text-slate-500 mr-3 mt-1">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 