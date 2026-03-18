import { skills } from '@/data/resume';

const Skills = () => {
  return (
    <section id="skills" className="mb-12 rounded-2xl bg-white p-8 shadow-lg">
      <h2 className="mb-6 flex items-center text-3xl font-bold text-slate-800">
        <span className="mr-4 h-8 w-2 rounded-full bg-slate-800"></span>
        Selected Technologies
      </h2>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;
