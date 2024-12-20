'use client'; // Add this to indicate that this code runs on the client

import React from 'react';
import html2pdf from 'html2pdf.js';

const ExportButton = () => {
  const handleExport = () => {
    const content = document.getElementById('cv-content');
    if (content) {
      const options = {
        margin: 1,
        filename: 'assaf-manzur-cv.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
      };
      // Ensure html2pdf runs only in the browser
      if (typeof window !== 'undefined') {
        html2pdf(content, options);
      }
    }
  };

  return (
    <button
      onClick={handleExport}
      className="fixed bottom-8 right-8 bg-slate-800 text-white px-4 py-2 rounded-full 
                shadow-lg hover:bg-slate-700 transition-all duration-300 flex items-center 
                space-x-2 z-50"
    >
      <svg 
        className="w-5 h-5" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
      </svg>
      <span>Export PDF</span>
    </button>
  );
};

export default ExportButton;