import { summary } from '@/data/resume';

const Summary = () => {
  return (
    <section id="about" className="mb-12 rounded-2xl bg-white p-8 shadow-lg">
      <h2 className="mb-5 flex items-center text-3xl font-bold text-slate-800">
        <span className="mr-4 h-8 w-2 rounded-full bg-slate-800"></span>
        Profile
      </h2>
      <div className="space-y-4">
        {summary.map((paragraph) => (
          <p key={paragraph} className="text-lg leading-relaxed text-slate-700">
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
};

export default Summary;
