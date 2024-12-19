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
        <h2 className="text-3xl font-bold mb-8">Professional Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="border-l-4 border-slate-500 pl-4 hover:border-slate-700 transition-colors">
              <h3 className="text-xl font-semibold text-slate-800">{exp.title}</h3>
              <p className="text-slate-600">{exp.company} | {exp.period}</p>
              <p className="mt-2 text-slate-700">{exp.description}</p>
              <ul className="mt-2 list-disc list-inside">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="text-slate-600 text-sm">{achievement}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 