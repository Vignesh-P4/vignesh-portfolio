'use client';

import React from 'react';
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
  SiNodedotjs,
  SiPython,
  SiMongodb,
  SiPostgresql,
  SiGraphql,
  SiGit,
  SiDocker,
  SiVercel,
  SiFigma
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa';
import { MdDevices, MdDesignServices, MdCode } from 'react-icons/md';

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { label: 'React', icon: SiReact },
      { label: 'Next.js', icon: SiNextdotjs },
      { label: 'TypeScript', icon: SiTypescript },
      { label: 'Tailwind CSS', icon: SiTailwindcss },
      { label: 'JavaScript', icon: SiJavascript }
    ]
  },
  {
    title: 'Backend & Database',
    skills: [
      { label: 'Node.js', icon: SiNodedotjs },
      { label: 'Python', icon: SiPython },
      { label: 'MongoDB', icon: SiMongodb },
      { label: 'PostgreSQL', icon: SiPostgresql },
      { label: 'GraphQL', icon: SiGraphql }
    ]
  },
  {
    title: 'Tools & Platforms',
    skills: [
      { label: 'Git', icon: SiGit },
      { label: 'Docker', icon: SiDocker },
      { label: 'AWS', icon: FaAws },
      { label: 'Vercel', icon: SiVercel },
      { label: 'VS Code', icon: MdCode }
    ]
  },
  {
    title: 'Design & UX',
    skills: [
      { label: 'Figma', icon: SiFigma },
      { label: 'Adobe XD', icon: MdDesignServices },
      { label: 'UI/UX Design', icon: MdDesignServices },
      { label: 'Responsive Design', icon: MdDevices },
      { label: 'Prototyping', icon: MdDesignServices }
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="text-sm uppercase tracking-[0.36em] text-gray-300">Expertise</p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Skills & Technologies</h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            A comprehensive toolkit for building modern, scalable, and user-centric applications
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {skillCategories.map((category) => (
            <div key={category.title} className="glass-card p-8 hover-lift">
              <h3 className="mb-6 text-xl font-semibold text-white">{category.title}</h3>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                {category.skills.map((skillItem) => {
                  const Icon = skillItem.icon;
                  return (
                    <div
                      key={skillItem.label}
                      className="group flex flex-col items-center justify-center rounded-xl border border-slate-800/50 bg-slate-900/70 p-4 transition-all duration-300 hover:border-cyan-500/40 hover:bg-slate-900/90"
                    >
                      <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900/70 text-cyan-300 transition-colors duration-300 group-hover:bg-cyan-500/10 group-hover:text-cyan-300">
                        {Icon ? (
                          <Icon className="h-6 w-6" />
                        ) : (
                          <span className="text-xs font-semibold text-white">?</span>
                        )}
                      </div>
                      <span className="text-center text-sm font-medium text-gray-300 group-hover:text-white">
                        {skillItem.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}