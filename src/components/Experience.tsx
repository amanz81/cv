import { experiences } from '@/data/resume';

const Experience = () => {
  return (
    <section id="experience" className="mb-12">
      <h2 className="mb-8 flex items-center text-3xl font-bold text-slate-800">
        <span className="mr-4 h-8 w-2 rounded-full bg-slate-800"></span>
        Experience
      </h2>
      <div className="space-y-8">
        {experiences.map((experience) => (
          <article
            key={`${experience.company}-${experience.title}`}
            className="rounded-2xl border border-slate-200 bg-white p-8 shadow-lg"
          >
            <div className="mb-4 flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
              <div>
                <h3 className="text-2xl font-bold text-slate-800">{experience.title}</h3>
                <p className="mt-1 text-lg font-semibold text-slate-700">{experience.company}</p>
              </div>
              <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">
                {experience.period}
              </span>
            </div>

            <p className="mb-5 text-lg leading-relaxed text-slate-700">{experience.description}</p>

            <ul className="mb-5 space-y-3">
              {experience.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start text-slate-700">
                  <span className="mr-3 mt-1 text-slate-500">&middot;</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-600"
                >
                  {technology}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Experience;
