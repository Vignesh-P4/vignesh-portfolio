'use client';

export default function SectionHeader({ title, subtitle }) {
  return (
    <div className="mb-10 max-w-3xl">
      <p className="text-sm uppercase tracking-[0.36em] text-sky-300">{subtitle}</p>
      <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">{title}</h2>
    </div>
  );
}
