'use client';

const ExportButton = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 print:hidden">
      <a
        href="/cv"
        className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-800 shadow-lg transition-colors hover:bg-slate-100"
      >
        Open CV Version
      </a>
      <a
        href="/cv"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full bg-slate-800 px-5 py-3 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-slate-700"
      >
        Download / Print CV
      </a>
    </div>
  );
};

export default ExportButton;
