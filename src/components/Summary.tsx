import React from 'react';

const Summary = () => {
  return (
    <section
      id="about"
      className="mb-16 rounded-2xl bg-white p-8 shadow-xl transition-transform duration-300 hover:scale-[1.02]"
    >
      <h2 className="mb-6 flex items-center text-3xl font-bold text-slate-800">
        <span className="mr-4 h-8 w-2 rounded-full bg-slate-800"></span>
        Executive Summary
      </h2>
      <div className="space-y-6">
        <p className="text-lg leading-relaxed text-slate-700">
          Senior DevOps and platform engineering leader with 14+ years of experience
          building, scaling, and operating production infrastructure for
          high-availability environments. I work at the intersection of architecture,
          delivery, and operations, helping teams move faster without trading away
          reliability, security, or engineering discipline.
        </p>

        <p className="text-lg leading-relaxed text-slate-700">
          My value is not only in knowing the tools. It is in turning complex
          infrastructure and delivery problems into clear operating models, reliable
          platforms, and automation that engineering teams can trust. I bring hands-on
          depth in Kubernetes, cloud infrastructure, observability, CI/CD, and
          infrastructure as code, alongside the judgment needed to lead technical
          direction across teams.
        </p>

        <div className="rounded-xl border-l-4 border-slate-800 bg-slate-50 p-6">
          <h3 className="mb-3 text-xl font-semibold text-slate-800">How I Operate</h3>
          <p className="leading-relaxed text-slate-700">
            I focus on platform thinking: standardizing the right layers, reducing
            operational noise, and giving product teams safer paths to ship. In the
            current AI-driven engineering world, that means building environments that
            support rapid experimentation while still preserving governance, resilience,
            cost control, and production readiness.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
            <h3 className="mb-3 text-lg font-semibold text-slate-800">What I Bring</h3>
            <ul className="space-y-2 text-slate-700">
              <li className="flex items-start">
                <span className="mr-2 text-blue-600">[+]</span>
                Architecture-level thinking with hands-on delivery
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-blue-600">[+]</span>
                Production ownership across reliability, scale, and security
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-blue-600">[+]</span>
                Mentorship and technical leadership for growing engineering teams
              </li>
            </ul>
          </div>

          <div className="rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 p-6">
            <h3 className="mb-3 text-lg font-semibold text-slate-800">
              What Teams Rely On Me For
            </h3>
            <ul className="space-y-2 text-slate-700">
              <li className="flex items-start">
                <span className="mr-2 text-green-600">[+]</span>
                Turning ambiguous infrastructure problems into executable plans
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-green-600">[+]</span>
                Raising engineering standards through automation and platform design
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-green-600">[+]</span>
                Supporting modern delivery models, including AI-heavy product development
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Summary;
