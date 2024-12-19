'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface Skill {
  category: string;
  items: string[];
}

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
}

interface ContentUpdateData {
  summary?: string;
  skills?: Array<{
    category: string;
    items: string[];
  }>;
  experiences?: Array<{
    title: string;
    company: string;
    period: string;
    description: string;
    achievements: string[];
  }>;
}

const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState('summary');
  const router = useRouter();
  const [summary, setSummary] = useState('');
  const [skills, setSkills] = useState<Skill[]>([]);
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [isSaving, setIsSaving] = useState(false);
  const [saveError, setSaveError] = useState<string | null>(null);

  useEffect(() => {
    // Load initial data
    setSkills([
      { 
        category: 'Leadership & Collaboration', 
        items: ['Team Leadership', 'Mentorship', 'Cross-functional Coordination', 'Technical Innovation', 'Agile Methodologies']
      },
      { 
        category: 'DevOps & Cloud', 
        items: ['Kubernetes', 'Docker', 'AWS', 'Terraform', 'Istio', 'Jenkins', 'GitOps']
      },
      // ... other skills
    ]);

    setExperiences([
      {
        title: 'DevOps Tech Lead',
        company: 'Salesforce',
        period: 'August 2024 - Present',
        description: 'Leading DevOps initiatives and technical strategies across teams.',
        achievements: [
          'Led a team of engineers to architect and implement scalable DevOps solutions',
          // ... other achievements
        ]
      },
      // ... other experiences
    ]);

    setSummary('A seasoned DevOps professional with over 14 years of experience...');
  }, []);

  const handleSave = async (section: string, data: ContentUpdateData) => {
    setIsSaving(true);
    setSaveError(null);
    try {
      const res = await fetch(`/api/content/${section}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      
      if (res.ok) {
        // Show success message or handle success case
      } else {
        setSaveError('Failed to save changes');
      }
    } catch (error) {
      setSaveError(error instanceof Error ? error.message : 'Error saving changes');
    } finally {
      setIsSaving(false);
    }
  };

  const renderEditor = () => {
    switch (activeSection) {
      case 'summary':
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Edit Summary</h3>
            <textarea
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              className="w-full h-40 p-2 border rounded-md"
            />
            <button
              onClick={() => handleSave('summary', { summary })}
              className="bg-slate-800 text-white px-4 py-2 rounded-md"
            >
              Save Summary
            </button>
          </div>
        );

      case 'skills':
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Edit Skills</h3>
            {skills.map((skill, index) => (
              <div key={index} className="border p-4 rounded-md">
                <input
                  value={skill.category}
                  onChange={(e) => {
                    const newSkills = [...skills];
                    newSkills[index].category = e.target.value;
                    setSkills(newSkills);
                  }}
                  className="w-full mb-2 p-2 border rounded-md"
                />
                <div className="space-y-2">
                  {skill.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex gap-2">
                      <input
                        value={item}
                        onChange={(e) => {
                          const newSkills = [...skills];
                          newSkills[index].items[itemIndex] = e.target.value;
                          setSkills(newSkills);
                        }}
                        className="flex-1 p-2 border rounded-md"
                      />
                      <button
                        onClick={() => {
                          const newSkills = [...skills];
                          newSkills[index].items = newSkills[index].items.filter((_, i) => i !== itemIndex);
                          setSkills(newSkills);
                        }}
                        className="bg-red-500 text-white px-2 rounded-md"
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                  <button
                    onClick={() => {
                      const newSkills = [...skills];
                      newSkills[index].items.push('New Skill');
                      setSkills(newSkills);
                    }}
                    className="bg-slate-600 text-white px-4 py-1 rounded-md"
                  >
                    Add Skill
                  </button>
                </div>
              </div>
            ))}
            <button
              onClick={() => handleSave('skills', { skills })}
              className="bg-slate-800 text-white px-4 py-2 rounded-md"
            >
              Save All Skills
            </button>
          </div>
        );

      case 'experience':
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Edit Experience</h3>
            {experiences.map((exp, index) => (
              <div key={index} className="border p-4 rounded-md">
                <div className="space-y-2">
                  <input
                    value={exp.title}
                    onChange={(e) => {
                      const newExp = [...experiences];
                      newExp[index].title = e.target.value;
                      setExperiences(newExp);
                    }}
                    className="w-full p-2 border rounded-md"
                    placeholder="Title"
                  />
                  <input
                    value={exp.company}
                    onChange={(e) => {
                      const newExp = [...experiences];
                      newExp[index].company = e.target.value;
                      setExperiences(newExp);
                    }}
                    className="w-full p-2 border rounded-md"
                    placeholder="Company"
                  />
                  <input
                    value={exp.period}
                    onChange={(e) => {
                      const newExp = [...experiences];
                      newExp[index].period = e.target.value;
                      setExperiences(newExp);
                    }}
                    className="w-full p-2 border rounded-md"
                    placeholder="Period"
                  />
                  <textarea
                    value={exp.description}
                    onChange={(e) => {
                      const newExp = [...experiences];
                      newExp[index].description = e.target.value;
                      setExperiences(newExp);
                    }}
                    className="w-full p-2 border rounded-md"
                    placeholder="Description"
                  />
                  <div className="space-y-2">
                    {exp.achievements.map((achievement, achievementIndex) => (
                      <div key={achievementIndex} className="flex gap-2">
                        <input
                          value={achievement}
                          onChange={(e) => {
                            const newExp = [...experiences];
                            newExp[index].achievements[achievementIndex] = e.target.value;
                            setExperiences(newExp);
                          }}
                          className="flex-1 p-2 border rounded-md"
                        />
                        <button
                          onClick={() => {
                            const newExp = [...experiences];
                            newExp[index].achievements = newExp[index].achievements.filter(
                              (_, i) => i !== achievementIndex
                            );
                            setExperiences(newExp);
                          }}
                          className="bg-red-500 text-white px-2 rounded-md"
                        >
                          Remove
                        </button>
                      </div>
                    ))}
                    <button
                      onClick={() => {
                        const newExp = [...experiences];
                        newExp[index].achievements.push('New Achievement');
                        setExperiences(newExp);
                      }}
                      className="bg-slate-600 text-white px-4 py-1 rounded-md"
                    >
                      Add Achievement
                    </button>
                  </div>
                </div>
              </div>
            ))}
            <button
              onClick={() => handleSave('experience', { experiences })}
              className="bg-slate-800 text-white px-4 py-2 rounded-md"
            >
              Save All Experience
            </button>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <nav className="bg-slate-800 text-white p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">CV Admin Dashboard</h1>
          <button
            onClick={() => router.push('/api/auth/logout')}
            className="px-4 py-2 bg-slate-700 rounded-md hover:bg-slate-600"
          >
            Logout
          </button>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-4 gap-6">
          <div className="col-span-1 bg-white rounded-lg shadow-md p-4">
            <nav className="space-y-2">
              {['summary', 'experience', 'skills', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`w-full text-left px-4 py-2 rounded-md ${
                    activeSection === section
                      ? 'bg-slate-800 text-white'
                      : 'hover:bg-slate-100'
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </nav>
          </div>

          <div className="col-span-3 bg-white rounded-lg shadow-md p-6">
            {renderEditor()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard; 