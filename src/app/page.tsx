'use client';

import dynamic from 'next/dynamic';
import ContactForm from '@/components/ContactForm';
import Experience from '@/components/Experience';
import Navigation from '@/components/Navigation';
import Skills from '@/components/Skills';
import Summary from '@/components/Summary';
import { profile } from '@/data/resume';

const ExportButton = dynamic(() => import('@/components/ExportButton'), { ssr: false });

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <Navigation />
      <div id="cv-content">
        <div className="mx-auto max-w-5xl px-4 py-20">
          <header className="mb-12 rounded-3xl bg-white p-10 text-center shadow-xl">
            <h1 className="mb-3 text-5xl font-bold text-slate-800">{profile.name}</h1>
            <h2 className="mb-5 text-2xl text-slate-600">{profile.title}</h2>
            <div className="mb-6 flex flex-col items-center justify-center gap-2 text-slate-600 sm:flex-row sm:gap-6">
              <a
                href={`mailto:${profile.email}`}
                className="transition-colors hover:text-slate-800"
              >
                {profile.email}
              </a>
              <span className="hidden sm:inline">|</span>
              <span>{profile.location}</span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-700"
              >
                LinkedIn
              </a>
              <a
                href="/cv"
                className="rounded-lg border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition-colors hover:bg-slate-50"
              >
                View Simple CV
              </a>
            </div>
          </header>

          <Summary />
          <Experience />
          <Skills />
        </div>
      </div>
      <ContactForm />
      <ExportButton />
    </main>
  );
}
