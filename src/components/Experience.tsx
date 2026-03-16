import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: 'DevOps Tech Lead',
      company: 'Salesforce',
      period: 'August 2024 - Present',
      description:
        'Leading platform and DevOps direction across teams, balancing architecture, delivery speed, and operational reliability.',
      achievements: [
        'Set technical direction for Kubernetes, Istio, and GitOps adoption across shared engineering environments',
        'Led engineers through platform decisions that improved operational consistency and reduced delivery friction',
        'Built alignment between development and operations teams around scalable, supportable delivery patterns',
        'Raised team capability through mentorship, design reviews, and knowledge-sharing on production-grade practices',
      ],
    },
    {
      title: 'Senior DevOps Engineer',
      company: 'Salesforce',
      period: 'November 2021 - August 2024',
      description:
        'Owned infrastructure automation, observability, and CI/CD improvements for production systems at scale.',
      achievements: [
        'Designed and implemented infrastructure automation using Terraform and Ansible to improve repeatability and change control',
        'Improved monitoring and alerting with Prometheus and Grafana, helping teams respond faster and operate with better visibility',
        'Built and evolved CI/CD pipelines that supported safer and faster delivery for engineering teams',
        'Partnered with application, platform, and operations stakeholders to turn infrastructure needs into practical execution',
      ],
    },
    {
      title: 'Senior System Engineer',
      company: 'Gigya',
      period: 'January 2016 - May 2019',
      description:
        'Managed large-scale infrastructure environments and helped modernize operations through automation and platform improvements.',
      achievements: [
        'Operated and maintained large-scale virtualized environments supporting enterprise workloads',
        'Automated routine operational tasks with scripting to reduce manual effort and improve consistency',
        'Contributed to modernization efforts that moved legacy environments toward more scalable cloud-based patterns',
        'Supported junior engineers through hands-on guidance and day-to-day technical mentoring',
      ],
    },
  ];

  return (
    <section id="experience" className="py-16">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-12 flex items-center text-3xl font-bold text-slate-800">
          <span className="mr-4 h-8 w-2 rounded-full bg-slate-800"></span>
          Professional Experience
        </h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="rounded-2xl border-l-4 border-slate-200 bg-white p-8 shadow-lg transition-all duration-300 hover:border-slate-500 hover:shadow-xl"
            >
              <div className="mb-4 flex flex-col md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="mb-2 text-2xl font-bold text-slate-800">{exp.title}</h3>
                  <div className="flex flex-col text-slate-600 md:flex-row md:items-center md:space-x-4">
                    <span className="font-semibold text-slate-700">{exp.company}</span>
                    <span className="hidden md:inline">&middot;</span>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700">
                      {exp.period}
                    </span>
                  </div>
                </div>
              </div>
              <p className="mb-6 text-lg leading-relaxed text-slate-700">{exp.description}</p>
              <div>
                <h4 className="mb-4 text-lg font-semibold text-slate-800">Key Contributions</h4>
                <ul className="space-y-3">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start text-slate-700">
                      <span className="mr-3 mt-1 text-slate-500">&middot;</span>
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
