'use client';

import {
  FaReact,
  FaNodeJs,
  FaFigma,
  FaGithub,
  FaGitAlt,
  FaDocker,
  FaAws,
  FaPython,
  FaJava,
  FaDatabase,
  FaMobileAlt,
  FaPalette,
  FaCode,
  FaServer,
  FaCloud,
  FaTools
} from 'react-icons/fa';
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiFirebase,
  SiVercel,
  SiFramer,
  SiAdobexd,
  SiSketch,
  SiNotion,
  SiVscode,
  SiLinux,
  SiGraphql
} from 'react-icons/si';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', icon: FaReact, color: 'text-blue-400' },
      { name: 'Next.js', icon: SiNextdotjs, color: 'text-gray-300' },
      { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-600' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-400' },
      { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-400' },
    ]
  },
  {
    title: 'Backend & Database',
    skills: [
      { name: 'Node.js', icon: FaNodeJs, color: 'text-green-500' },
      { name: 'Python', icon: FaPython, color: 'text-yellow-500' },
      { name: 'MongoDB', icon: SiMongodb, color: 'text-green-600' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-500' },
      { name: 'GraphQL', icon: SiGraphql, color: 'text-pink-500' },
    ]
  },
  {
    title: 'Tools & Platforms',
    skills: [
      { name: 'Git', icon: FaGitAlt, color: 'text-orange-500' },
      { name: 'Docker', icon: FaDocker, color: 'text-blue-600' },
      { name: 'AWS', icon: FaAws, color: 'text-orange-400' },
      { name: 'Vercel', icon: SiVercel, color: 'text-gray-300' },
      { name: 'VS Code', icon: SiVscode, color: 'text-blue-500' },
    ]
  },
  {
    title: 'Design & UX',
    skills: [
      { name: 'Figma', icon: FaFigma, color: 'text-purple-400' },
      { name: 'Adobe XD', icon: SiAdobexd, color: 'text-pink-500' },
      { name: 'UI/UX Design', icon: FaPalette, color: 'text-indigo-400' },
      { name: 'Responsive Design', icon: FaMobileAlt, color: 'text-green-400' },
      { name: 'Prototyping', icon: SiFramer, color: 'text-gray-400' },
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="text-sm uppercase tracking-[0.36em] text-sky-300">Expertise</p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Skills & Technologies</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            A comprehensive toolkit for building modern, scalable, and user-centric applications
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-8 hover-lift"
            >
              <h3 className="mb-6 text-xl font-semibold text-white">{category.title}</h3>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                {category.skills.map((skill, skillIndex) => {
                  const IconComponent = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.5,
                        delay: categoryIndex * 0.1 + skillIndex * 0.05
                      }}
                      viewport={{ once: true }}
                      className="group flex flex-col items-center justify-center rounded-xl border border-slate-700/50 bg-slate-800/50 p-4 transition-all duration-300 hover:border-sky-500/40 hover:bg-slate-800/80"
                    >
                      <IconComponent className={`mb-2 text-3xl ${skill.color} skill-icon group-hover:scale-110`} />
                      <span className="text-center text-sm font-medium text-slate-300 group-hover:text-white">
                        {skill.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}