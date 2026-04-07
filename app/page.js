'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import SectionHeader from '@/components/SectionHeader';
import ProjectCard from '@/components/ProjectCard';
import TimelineItem from '@/components/TimelineItem';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';

const education = [
  {
    year: '2022 – 2026',
    title: 'Bachelor’s Degree in Data Science',
    location: 'Sreyas Institute of Engineering and Technology',
    description: [
      'Final-year Data Science student with a strong focus on AI, data analysis, and full-stack development.',
      'Built real-world projects including AI financial assistant, health application, and IoT-based agriculture system.',
      'Developed strong analytical thinking, programming, and problem-solving skills.',
      'CGPA: 8.3'
    ]
  }
];

const experience = [
  {
    year: 'March 2026 – Present',
    title: 'Software / AI Intern',
    location: 'Startup Company',
    description: [
      'Working on building scalable web applications including CRM systems and e-commerce platforms.',
      'Developing modules for lead management, sales tracking, and project workflows.',
      'Integrating AI tools such as Generative AI and prompt-based automation.',
      'Collaborating on UI/UX design using Figma and implementing responsive interfaces.',
      'Contributing to real-world product development in a startup environment.'
    ]
  },
  {
    year: 'June 2025 – August 2025',
    title: 'Data Analyst Intern',
    location: 'ThinkMates',
    description: [
      'Performed data analysis using SQL, Excel, and Power BI.',
      'Cleaned and processed datasets to extract meaningful insights.',
      'Built dashboards to support data-driven decision making.',
      'Improved data accuracy and reporting efficiency.',
      'Collaborated with team members to understand business requirements.'
    ]
  },
  {
    year: '2020 – Present',
    title: 'Private Tutor',
    location: 'Self-employed',
    description: [
      'Taught students across multiple subjects and academic levels.',
      'Helped students improve academic performance and exam results.',
      'Developed strong communication, mentoring, and problem-solving skills.'
    ]
  }
];

const projects = [
  {
    title: 'FYNX – AI Financial Assistant',
    subtitle: 'AI-Powered Personal Finance Management',
    description: 'Engineered an AI-powered financial assistant that revolutionizes personal finance management by analyzing bank statements and delivering personalized insights to optimize saving and budgeting decisions. Features intelligent expense tracking, categorization, and data-driven savings suggestions.',
    tags: ['AI', 'Data Analysis', 'Web Development'],
    link: 'https://github.com/Vignesh-P4/FYNX-Ai_Financial_Assistant',
    videoUrl: '/videos/fynx-demo.mp4',
    imageUrl: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Healthify – AI Health Assistant',
    subtitle: 'AI-Driven Health Guidance Platform',
    description: 'Created an AI-driven health platform that empowers users with instant, reliable health guidance through an intelligent chatbot and comprehensive educational resources. Designed with scalable architecture for seamless doctor consultation integration.',
    tags: ['AI', 'Web Application Development'],
    link: 'https://github.com/Vignesh-P4/Healthify-AI_Health_Assistant',
    videoUrl: '/videos/healthify-demo.mp4',
    imageUrl: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'SmartAgriTech – IoT Agriculture System',
    subtitle: 'IoT-Based Environmental Monitoring',
    description: 'Designed an innovative IoT-based agriculture system that provides farmers with real-time environmental monitoring and data-driven insights to maximize resource efficiency and productivity through sensor-driven decision support.',
    tags: ['IoT', 'Sensors', 'Data Monitoring'],
    link: '#projects',
    videoUrl: '/videos/smartagritech-demo.mp4',
    imageUrl: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Personal Portfolio Website',
    subtitle: 'Modern Developer Portfolio',
    description: 'Built a modern, responsive portfolio website that showcases professional skills and projects through clean design, smooth animations, and integrated contact features to enhance visibility and attract opportunities.',
    tags: ['Next.js', 'Tailwind CSS', 'React'],
    link: 'https://github.com/Vignesh-P4/vignesh-portfolio',
    videoUrl: '/videos/portfolio-demo.mp4',
    imageUrl: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=800&q=80'
  }
];

const activities = ['Open-source contributions', 'Technical writer', 'Hackathon winner', 'Photography'];

const heroLines = ['Premium AI product experiences', 'crafted for modern brands.'];

const stats = [
  { label: 'Launch-ready systems', value: '4' },
  { label: 'AI-first workflows', value: '100+' },
  { label: 'Design-to-code builds', value: '6' }
];

const highlights = [
  'High-impact product landing experiences',
  'Futuristic data-driven motion systems',
  'Scalable web apps built for modern teams'
];

const textReveal = {
  hidden: { opacity: 0, y: 40, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.9, ease: [0.22, 1.0, 0.36, 1.0] } }
};

const listReveal = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.28 } }
};

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const total = document.body.scrollHeight - window.innerHeight;
      setScrollProgress(total > 0 ? window.scrollY / total : 0);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />

      <main>
        <section id="home" className="hero-background relative min-h-screen overflow-hidden px-6 py-24 sm:px-10 lg:px-16">
          <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-slate-950/95 to-black/95" />
          <div className="absolute inset-x-0 top-0 h-full bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.18),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(129,140,248,0.14),transparent_20%)] pointer-events-none" />

          <div className="relative mx-auto flex max-w-6xl flex-col gap-10">
            <div className="h-1 w-full overflow-hidden rounded-full bg-white/5 shadow-inner">
              <motion.div
                className="h-full bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-500"
                style={{ width: `${scrollProgress * 100}%` }}
              />
            </div>

            <div className="grid gap-12 lg:grid-cols-[1.55fr_1fr] lg:items-center">
              <div className="flex flex-col justify-center text-center lg:text-left">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                  className="glass-card rounded-[2rem] border border-cyan-500/10 bg-slate-950/80 p-8 shadow-soft-lg sm:p-12"
                >
                  <motion.p
                    initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                    className="text-sm uppercase tracking-[0.36em] text-cyan-300"
                  >
                    Product design & AI systems
                  </motion.p>

                  <motion.div variants={listReveal} initial="hidden" animate="visible" className="mt-6 space-y-4 text-white">
                    {heroLines.map((line, lineIndex) => (
                      <motion.h1 key={lineIndex} className="text-4xl font-semibold leading-tight sm:text-6xl lg:text-7xl">
                        {line.split(' ').map((word, wordIndex) => (
                          <motion.span
                            key={`${lineIndex}-${wordIndex}`}
                            variants={textReveal}
                            className="inline-block mr-3 whitespace-nowrap"
                          >
                            {word}
                          </motion.span>
                        ))}
                      </motion.h1>
                    ))}
                  </motion.div>

                  <motion.p
                    initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    transition={{ duration: 0.9, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
                    className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-gray-300 sm:text-xl lg:mx-0"
                  >
                    I create immersive digital products that blend AI intelligence, premium motion, and polished launch-ready interfaces for ambitious startups and creative brands.
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
                    className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-start"
                  >
                    <motion.a
                      href="#projects"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="btn-primary inline-flex items-center justify-center rounded-full px-8 py-4 text-sm font-semibold text-white shadow-xl shadow-cyan-500/10"
                    >
                      Explore Work
                    </motion.a>
                    <motion.a
                      href="#contact"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.97 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="btn-secondary inline-flex items-center justify-center rounded-full border border-cyan-500/30 px-8 py-4 text-sm font-semibold text-white"
                    >
                      Start a Project
                    </motion.a>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 1.25, ease: [0.22, 1, 0.36, 1] }}
                    className="mt-12 grid gap-4 sm:grid-cols-3"
                  >
                    {stats.map((item) => (
                      <div key={item.label} className="rounded-3xl border border-white/10 bg-white/5 px-5 py-4 text-center text-sm text-gray-300 shadow-lg shadow-black/15 backdrop-blur-xl">
                        <div className="text-2xl font-semibold text-white">{item.value}</div>
                        <div className="mt-2 text-xs uppercase tracking-[0.24em] text-slate-400">{item.label}</div>
                      </div>
                    ))}
                  </motion.div>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 1.1, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex items-center justify-center"
              >
                <div className="absolute -right-10 hidden h-28 w-28 rounded-full bg-cyan-500/20 blur-3xl lg:block" />
                <div className="absolute -left-8 hidden h-40 w-40 rounded-full bg-violet-500/20 blur-3xl lg:block" />
                <motion.div
                  whileHover={{ y: -6 }}
                  className="glass-card relative overflow-hidden rounded-[2.5rem] border border-cyan-500/15 bg-slate-950/85 p-6 shadow-soft-lg"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.16),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(129,140,248,0.12),transparent_24%)] opacity-70" />
                  <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/80 p-6">
                    <div className="absolute inset-x-8 top-6 h-16 rounded-[1.5rem] bg-slate-950/80 shadow-[0_0_60px_rgba(14,165,233,0.1)]" />
                    <div className="relative z-10 space-y-6">
                      <div className="flex items-center justify-between gap-4">
                        <span className="text-xs uppercase tracking-[0.3em] text-slate-400">Live preview</span>
                        <span className="rounded-full bg-cyan-500/15 px-3 py-1 text-xs font-semibold text-cyan-200">AI product</span>
                      </div>

                      <div className="space-y-3">
                        <div className="h-52 rounded-[1.7rem] border border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.12),transparent_40%),linear-gradient(180deg,rgba(15,23,42,0.98),rgba(15,23,42,0.65))] shadow-[inset_0_0_40px_rgba(15,23,42,0.25)]" />
                        <div className="rounded-3xl border border-white/10 bg-white/5 p-4 text-sm text-gray-300 shadow-inner">
                          <p className="font-medium text-white">AI launch sequence</p>
                          <p className="mt-2 text-sm leading-6 text-slate-400">SaaS-grade motion, data storytelling, and polished micro-interactions.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="about" className="bg-slate-950 px-6 py-24 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-6xl">
            <SectionHeader title="About Me" subtitle="Who I am" />
            <div className="glass-card p-8">
              <div className="space-y-6">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-slate-300 text-lg leading-relaxed"
                >
                  I am a final-year <span className="gradient-text font-semibold">Data Science</span> student driven by a passion for building intelligent systems and impactful digital products.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="text-gray-300 text-lg leading-relaxed"
                >
                  I specialize in combining data, <span className="gradient-text font-semibold">AI</span>, and <span className="gradient-text font-semibold">full-stack development</span> to create real-world solutions. My work includes developing an AI financial assistant, a health-focused platform, and an IoT-based agriculture system—each designed to solve practical problems.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="text-gray-300 text-lg leading-relaxed"
                >
                  Currently, as a Software/AI Intern, I am actively contributing to building scalable CRM systems, e-commerce platforms, and AI-powered features in a startup environment.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                  className="text-gray-300 text-lg leading-relaxed"
                >
                  I believe in continuous learning, strong problem-solving, and building technology that creates real value.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                  viewport={{ once: true }}
                  className="pt-4 border-t border-gray-700/50"
                >
                  <p className="text-gray-400 text-sm">
                    📍 Hyderabad, Telangana, India
                  </p>
                </motion.div>
              </div>
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
              {projects.map((project, index) => (
                <ProjectCard key={project.title} index={index} {...project} />
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
                  <p className="text-gray-200 leading-6">{item}</p>
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
