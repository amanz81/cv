import React from 'react';

const Achievements = () => {
  const achievements = [
    {
      category: 'Certifications',
      items: [
        {
          title: 'AWS Certified Solutions Architect - Professional',
          issuer: 'Amazon Web Services',
          year: '2023',
          description: 'Advanced cloud architecture and design principles'
        },
        {
          title: 'Certified Kubernetes Administrator (CKA)',
          issuer: 'Cloud Native Computing Foundation',
          year: '2022',
          description: 'Kubernetes cluster administration and troubleshooting'
        },
        {
          title: 'Terraform Associate Certification',
          issuer: 'HashiCorp',
          year: '2022',
          description: 'Infrastructure as Code with Terraform'
        }
      ]
    },
    {
      category: 'Awards & Recognition',
      items: [
        {
          title: 'Innovation Excellence Award',
          issuer: 'Salesforce',
          year: '2024',
          description: 'For leading the GitOps implementation that reduced deployment time by 60%'
        },
        {
          title: 'Team Leadership Recognition',
          issuer: 'Salesforce',
          year: '2023',
          description: 'Outstanding mentorship and team development contributions'
        },
        {
          title: 'Technical Excellence Award',
          issuer: 'Gigya',
          year: '2018',
          description: 'For automating infrastructure processes and improving system reliability'
        }
      ]
    },
    {
      category: 'Notable Accomplishments',
      items: [
        {
          title: 'Cost Optimization Initiative',
          issuer: 'Salesforce',
          year: '2023',
          description: 'Led infrastructure cost reduction project saving $2M annually through resource optimization'
        },
        {
          title: 'Zero-Downtime Migration',
          issuer: 'Salesforce',
          year: '2022',
          description: 'Successfully migrated critical production systems to Kubernetes with zero downtime'
        },
        {
          title: 'Open Source Contributor',
          issuer: 'Community',
          year: '2021-Present',
          description: 'Active contributor to Kubernetes and Istio projects with 50+ merged PRs'
        }
      ]
    }
  ];

  return (
    <section id="achievements" className="mb-16">
      <h2 className="text-3xl font-bold mb-8 text-slate-800 flex items-center">
        <span className="bg-slate-800 w-2 h-8 mr-4 rounded-full"></span>
        Achievements & Recognition
      </h2>
      <div className="space-y-8">
        {achievements.map((category, categoryIndex) => (
          <div key={categoryIndex} className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-semibold text-slate-800 mb-6 flex items-center">
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 w-1 h-6 mr-3 rounded-full"></span>
              {category.category}
            </h3>
            <div className="grid gap-6">
              {category.items.map((achievement, itemIndex) => (
                <div 
                  key={itemIndex} 
                  className="border-l-4 border-slate-200 pl-6 py-4 hover:border-slate-400 transition-colors duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h4 className="text-lg font-semibold text-slate-800">{achievement.title}</h4>
                    <div className="flex items-center space-x-4 text-sm text-slate-600">
                      <span className="bg-slate-100 px-3 py-1 rounded-full">{achievement.issuer}</span>
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium">
                        {achievement.year}
                      </span>
                    </div>
                  </div>
                  <p className="text-slate-600 leading-relaxed">{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
