import { approach } from '@/data/resume';

const Approach = () => {
  return (
    <section id="approach" className="mb-12 rounded-2xl bg-white p-8 shadow-lg">
      <h2 className="mb-6 flex items-center text-3xl font-bold text-slate-800">
        <span className="mr-4 h-8 w-2 rounded-full bg-slate-800"></span>
        How I Work
      </h2>
      <div className="grid gap-5 md:grid-cols-2">
        {approach.map((item) => (
          <div
            key={item.title}
            className="rounded-xl border border-slate-200 bg-slate-50 p-5"
          >
            <h3 className="mb-2 text-lg font-semibold text-slate-800">{item.title}</h3>
            <p className="leading-relaxed text-slate-700">{item.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Approach;
