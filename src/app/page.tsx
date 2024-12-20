'use client'; 
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import ContactForm from '@/components/ContactForm';
import Summary from '@/components/Summary';
import dynamic from 'next/dynamic';

const ExportButton = dynamic(() => import('@/components/ExportButton'), { ssr: false });

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div id="cv-content">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <header className="text-center mb-16">
            <h1 className="text-5xl font-bold text-slate-800 mb-4">Assaf Manzur</h1>
            <h2 className="text-2xl text-slate-600 mb-4">Tech Lead DevOps Engineer</h2>
            <div className="flex justify-center space-x-4 text-slate-600">
              <a href="mailto:assaf.manzur@gmail.com" className="hover:text-slate-800 transition-colors">
                📧 assaf.manzur@gmail.com
              </a>
              <span>|</span>
              <span>📍 Israel</span>
            </div>
          </header>
          <Summary />
          <Skills />
          <Experience />
        </div>
      </div>
      <ContactForm />
      <ExportButton />
    </main>
  );
}
