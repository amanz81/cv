'use client'; 
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import ContactForm from '@/components/ContactForm';
import Summary from '@/components/Summary';
import Navigation from '@/components/Navigation';
import dynamic from 'next/dynamic';

const ExportButton = dynamic(() => import('@/components/ExportButton'), { ssr: false });

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Navigation />
      <div id="cv-content">
        <div className="max-w-6xl mx-auto px-4 py-20">
          <header className="text-center mb-16">
            <h1 className="text-5xl font-bold text-slate-800 mb-4">Assaf Manzur</h1>
            <h2 className="text-2xl text-slate-600 mb-6">Tech Lead DevOps Engineer</h2>
            <div className="flex justify-center space-x-6 text-slate-600 mb-6">
              <a href="mailto:assaf.manzur@gmail.com" className="hover:text-slate-800 transition-colors flex items-center">
                📧 assaf.manzur@gmail.com
              </a>
              <span>|</span>
              <span>📍 Israel</span>
            </div>
            <div className="flex justify-center">
              <a 
                href="https://linkedin.com/in/assaf-manzur" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span>LinkedIn</span>
              </a>
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
