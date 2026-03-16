import React from 'react';

const Skills = () => {
  const skills = [
    {
      category: 'Platform & Cloud Architecture',
      items: ['Kubernetes', 'AWS', 'Docker', 'Terraform', 'Istio', 'GitOps', 'Microservices'],
    },
    {
      category: 'Delivery, Reliability & Security',
      items: [
        'CI/CD Pipelines',
        'Jenkins',
        'Prometheus',
        'Grafana',
        'Observability',
        'Production Operations',
        'Incident Response',
      ],
    },
    {
      category: 'Automation & Developer Enablement',
      items: [
        'Ansible',
        'Infrastructure as Code',
        'Automation Scripting',
        'Platform Standardization',
        'Developer Workflows',
        'Operational Efficiency',
      ],
    },
    {
      category: 'Leadership & Execution',
      items: [
        'Technical Leadership',
        'Mentorship',
        'Cross-functional Alignment',
        'Architecture Decisions',
        'Roadmap Execution',
        'Stakeholder Communication',
      ],
    },
  ];

  return (
    <section id="skills" className="mb-16">
      <h2 className="mb-12 flex items-center text-3xl font-bold text-slate-800">
        <span className="mr-4 h-8 w-2 rounded-full bg-slate-800"></span>
        Technical Skills
      </h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {skills.map((skillGroup, index) => (
          <div
            key={skillGroup.category}
            className="rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <h3 className="mb-6 flex items-center text-xl font-bold text-slate-800">
              <span
                className={`mr-3 h-3 w-3 rounded-full ${
                  index === 0
                    ? 'bg-blue-500'
                    : index === 1
                      ? 'bg-green-500'
                      : index === 2
                        ? 'bg-purple-500'
                        : 'bg-orange-500'
                }`}
              ></span>
              {skillGroup.category}
            </h3>
            <div className="flex flex-wrap gap-3">
              {skillGroup.items.map((skill) => (
                <span
                  key={skill}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 hover:scale-105 ${
                    index === 0
                      ? 'bg-blue-50 text-blue-700 hover:bg-blue-100'
                      : index === 1
                        ? 'bg-green-50 text-green-700 hover:bg-green-100'
                        : index === 2
                          ? 'bg-purple-50 text-purple-700 hover:bg-purple-100'
                          : 'bg-orange-50 text-orange-700 hover:bg-orange-100'
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
