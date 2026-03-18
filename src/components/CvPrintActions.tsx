'use client';

const CvPrintActions = () => {
  return (
    <div className="mb-8 flex flex-wrap gap-3 print:hidden">
      <button
        type="button"
        onClick={() => window.print()}
        className="rounded-lg bg-slate-800 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-700"
      >
        Print / Save as PDF
      </button>
      <a
        href="/"
        className="rounded-lg border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50"
      >
        Back to Site
      </a>
    </div>
  );
};

export default CvPrintActions;
