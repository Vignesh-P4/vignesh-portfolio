'use client';

import Navbar from '@/components/Navbar';
import SectionHeader from '@/components/SectionHeader';
import ProjectCard from '@/components/ProjectCard';
import TimelineItem from '@/components/TimelineItem';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';

const education = [
  {
    year: '2024',
    title: 'B.Tech in Computer Science',
    location: 'ABC Institute of Technology',
    description: 'Graduated with a focus on software engineering, web development, and human-centered design.'
  }
];

const experience = [
  {
    year: '2025',
    title: 'Senior Frontend Developer',
    location: 'TechCorp Solutions',
    description: 'Led a team of 4 developers in building scalable React applications.'
  },
  {
    year: '2023',
    title: 'UX Design Intern',
    location: 'Design Studio Pro',
    description: 'Collaborated in ideation sessions and produced high-fidelity prototypes.'
  }
];

const projects = [
  {
    title: 'E-Commerce Platform',
    subtitle: 'Full-stack web application',
    description: 'A modern e-commerce platform built with Next.js.',
    tags: ['Next.js', 'Stripe', 'PostgreSQL'],
    link: '#projects'
  },
  {
    title: 'TaskFlow Pro',
    subtitle: 'Productivity dashboard',
    description: 'A clean task management app with real-time collaboration.',
    tags: ['React', 'Firebase', 'Material-UI'],
    link: '#projects'
  }
];

const activities = ['Open-source contributions', 'Technical writer', 'Hackathon winner', 'Photography'];

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main>
        <section id="home" className="hero-background relative min-h-screen px-6 py-24 sm:px-10 lg:px-16">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950/20 via-slate-950/40 to-slate-950/80"></div>
          <div className="relative mx-auto flex max-w-6xl flex-col justify-center gap-10 text-center">
            <div className="glass-card rounded-3xl p-8 shadow-soft-lg sm:p-12">
              <p className="text-sm uppercase tracking-[0.36em] text-sky-300">Hello, I'm Vignesh</p>
              <h1 className="mt-4 text-4xl font-bold text-white sm:text-6xl lg:text-7xl">
                Crafting Digital
                <span className="block gradient-text">Experiences</span>
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
                Full-stack developer and UI/UX designer passionate about creating beautiful web applications.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href="#projects"
                  className="btn-primary inline-flex items-center justify-center rounded-full px-8 py-4 text-sm font-semibold text-white transition-all duration-300"
                >
                  View My Work
                </a>
                <a
                  href="#contact"
                  className="btn-secondary inline-flex items-center justify-center rounded-full border border-slate-600 px-8 py-4 text-sm font-semibold text-slate-100 transition-all duration-300"
                >
                  Get In Touch
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="bg-slate-950 px-6 py-24 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-6xl">
            <SectionHeader title="About Me" subtitle="Who I am" />
            <div className="glass-card p-8">
              <p className="max-w-4xl leading-8 text-slate-300 text-lg">
                I'm a passionate full-stack developer with over 3 years of experience crafting digital experiences.
              </p>
            </div>
          </div>
        </section>

        <Skills />

        <section id="education" className="bg-slate-950 px-6 py-24 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-6xl">
            <SectionHeader title="Education" subtitle="Academic background" />
            <div className="space-y-6">
              {education.map((item) => (
                <TimelineItem key={item.year} {...item} />
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="px-6 py-24 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-6xl">
            <SectionHeader title="Featured Projects" subtitle="Recent work" />
            <div className="grid gap-8 lg:grid-cols-2">
              {projects.map((project) => (
                <ProjectCard key={project.title} {...project} />
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="bg-slate-950 px-6 py-24 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-6xl">
            <SectionHeader title="Professional Experience" subtitle="Career journey" />
            <div className="space-y-6">
              {experience.map((item) => (
                <TimelineItem key={`${item.year}-${item.title}`} {...item} />
              ))}
            </div>
          </div>
        </section>

        <section id="activities" className="px-6 py-24 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-6xl">
            <SectionHeader title="Beyond Code" subtitle="Community & interests" />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {activities.map((item) => (
                <div key={item} className="glass-card p-6 text-center">
                  <p className="text-slate-200 leading-6">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Contact />
      </main>
    </div>
  );
}
