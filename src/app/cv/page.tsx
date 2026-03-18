import CvPrintActions from '@/components/CvPrintActions';
import { experiences, profile, skills, summary } from '@/data/resume';

export default function CvPage() {
  return (
    <main className="cv-page min-h-screen bg-slate-100 px-4 py-10 text-slate-900 print:bg-white print:px-0 print:py-0">
      <div className="cv-sheet mx-auto max-w-4xl bg-white p-8 shadow-xl print:max-w-none print:shadow-none">
        <CvPrintActions />

        <header className="border-b border-slate-200 pb-6">
          <h1 className="text-4xl font-bold">{profile.name}</h1>
          <p className="mt-2 text-lg text-slate-700">{profile.title}</p>
          <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-sm text-slate-600">
            <a href={`mailto:${profile.email}`} className="hover:text-slate-800">
              {profile.email}
            </a>
            <span>{profile.location}</span>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-slate-800">
              LinkedIn
            </a>
          </div>
        </header>

        <section className="mt-8">
          <h2 className="mb-3 text-xl font-bold uppercase tracking-wide text-slate-800">Summary</h2>
          <div className="space-y-3 text-[15px] leading-7 text-slate-700">
            {summary.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section className="mt-8">
          <h2 className="mb-4 text-xl font-bold uppercase tracking-wide text-slate-800">Experience</h2>
          <div className="space-y-8">
            {experiences.map((experience) => (
              <article key={`${experience.company}-${experience.title}`}>
                <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">{experience.title}</h3>
                    <p className="font-semibold text-slate-700">{experience.company}</p>
                  </div>
                  <span className="text-sm text-slate-600">{experience.period}</span>
                </div>

                <p className="mt-3 text-[15px] leading-7 text-slate-700">{experience.description}</p>

                <ul className="mt-3 space-y-2 text-[15px] leading-7 text-slate-700">
                  {experience.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start">
                      <span className="mr-3 mt-1 text-slate-500">-</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <p className="mt-3 text-sm text-slate-600">
                  <span className="font-semibold text-slate-700">Technologies:</span>{' '}
                  {experience.technologies.join(', ')}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-8">
          <h2 className="mb-3 text-xl font-bold uppercase tracking-wide text-slate-800">
            Selected Technologies
          </h2>
          <p className="text-[15px] leading-7 text-slate-700">{skills.join(', ')}</p>
        </section>
      </div>
    </main>
  );
}
