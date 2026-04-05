'use client';

import React from 'react';

const skillCategories = [
  {
    title: 'Frontend',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'JavaScript']
  },
  {
    title: 'Backend & Database',
    skills: ['Node.js', 'Python', 'MongoDB', 'PostgreSQL', 'GraphQL']
  },
  {
    title: 'Tools & Platforms',
    skills: ['Git', 'Docker', 'AWS', 'Vercel', 'VS Code']
  },
  {
    title: 'Design & UX',
    skills: ['Figma', 'Adobe XD', 'UI/UX Design', 'Responsive Design', 'Prototyping']
  }
];

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="text-sm uppercase tracking-[0.36em] text-sky-300">Expertise</p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Skills & Technologies</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            A comprehensive toolkit for building modern, scalable, and user-centric applications
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {skillCategories.map((category) => (
            <div key={category.title} className="glass-card p-8 hover-lift">
              <h3 className="mb-6 text-xl font-semibold text-white">{category.title}</h3>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className="group flex flex-col items-center justify-center rounded-xl border border-slate-700/50 bg-slate-800/50 p-4 transition-all duration-300 hover:border-sky-500/40 hover:bg-slate-800/80"
                  >
                    <span className="text-center text-sm font-medium text-slate-300 group-hover:text-white">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}