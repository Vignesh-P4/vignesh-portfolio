import Navbar from '@/components/Navbar';
import SectionHeader from '@/components/SectionHeader';
import ProjectCard from '@/components/ProjectCard';
import TimelineItem from '@/components/TimelineItem';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import { motion } from 'framer-motion';

const education = [
  {
    year: '2024',
    title: 'B.Tech in Computer Science',
    location: 'ABC Institute of Technology',
    description: 'Graduated with a focus on software engineering, web development, and human-centered design. Led multiple capstone projects and maintained a 3.8 GPA.'
  }
];

const experience = [
  {
    year: '2025',
    title: 'Senior Frontend Developer',
    location: 'TechCorp Solutions',
    description: 'Led a team of 4 developers in building scalable React applications. Improved performance by 40% and user engagement by 25% through modern UI/UX practices.'
  },
  {
    year: '2024',
    title: 'Full Stack Developer',
    location: 'StartupXYZ',
    description: 'Developed end-to-end web applications using Next.js and Node.js. Implemented CI/CD pipelines and mentored junior developers on best practices.'
  },
  {
    year: '2023',
    title: 'UX Design Intern',
    location: 'Design Studio Pro',
    description: 'Collaborated in ideation sessions and produced high-fidelity prototypes for non-profit projects. Conducted user research and usability testing.'
  }
];

const projects = [
  {
    title: 'E-Commerce Platform',
    subtitle: 'Full-stack web application',
    description: 'A modern e-commerce platform built with Next.js, featuring real-time inventory, payment processing, and admin dashboard. Deployed on Vercel with 99.9% uptime.',
    tags: ['Next.js', 'Stripe', 'PostgreSQL', 'Tailwind CSS'],
    link: '#projects'
  },
  {
    title: 'TaskFlow Pro',
    subtitle: 'Productivity dashboard',
    description: 'A clean task management app with real-time collaboration, drag-and-drop workflow, and analytics. Features dark mode, offline support, and team management.',
    tags: ['React', 'Firebase', 'Material-UI', 'PWA'],
    link: '#projects'
  },
  {
    title: 'Weather Analytics',
    subtitle: 'Data visualization platform',
    description: 'Interactive weather dashboard with historical data analysis, forecasting, and location-based insights. Built with D3.js and deployed on AWS.',
    tags: ['React', 'D3.js', 'AWS', 'TypeScript'],
    link: '#projects'
  }
];

const activities = [
  'Open-source contributor with 50+ PRs merged',
  'Technical writer for Dev.to and Medium',
  'Hackathon winner (3x) and mentor',
  'Photography and creative direction',
  'Public speaking at tech conferences',
  'Community workshop facilitator'
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section id="home" className="hero-background relative min-h-screen px-6 py-24 sm:px-10 lg:px-16">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950/20 via-slate-950/40 to-slate-950/80"></div>
          <div className="relative mx-auto flex max-w-6xl flex-col justify-center gap-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="glass-card rounded-3xl p-8 shadow-soft-lg sm:p-12"
            >
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-sm uppercase tracking-[0.36em] text-sky-300"
              >
                Hello, I'm Vignesh
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-4 text-4xl font-bold text-white sm:text-6xl lg:text-7xl"
              >
                Crafting Digital
                <span className="block gradient-text">Experiences</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl"
              >
                Full-stack developer and UI/UX designer passionate about creating
                beautiful, functional, and user-centered digital products.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
              >
                <a
                  href="#projects"
                  className="btn-primary inline-flex items-center justify-center rounded-full px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-glow"
                >
                  View My Work
                </a>
                <a
                  href="#contact"
                  className="btn-secondary inline-flex items-center justify-center rounded-full border border-slate-600 px-8 py-4 text-sm font-semibold text-slate-100 transition-all duration-300 hover:scale-105"
                >
                  Get In Touch
                </a>
              </motion.div>
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
          >
            <div className="flex flex-col items-center gap-2 text-slate-400">
              <span className="text-xs uppercase tracking-widest">Scroll</span>
              <div className="h-6 w-px bg-gradient-to-b from-sky-400 to-transparent"></div>
            </div>
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="bg-slate-950 px-6 py-24 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <SectionHeader title="About Me" subtitle="Who I am" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="glass-card p-8"
            >
              <p className="max-w-4xl leading-8 text-slate-300 text-lg">
                I'm a passionate full-stack developer with over 3 years of experience crafting digital experiences
                that blend technical excellence with intuitive design. My journey began with a curiosity about how
                technology can solve real-world problems, and it has evolved into a deep expertise in modern web
                technologies and user-centered design principles.
              </p>
              <p className="mt-6 max-w-4xl leading-8 text-slate-300 text-lg">
                When I'm not coding, you'll find me exploring the latest design trends, contributing to open-source
                projects, or sharing knowledge through technical writing and community workshops. I believe in the
                power of collaboration and continuous learning to drive innovation.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <Skills />

        {/* Education Section */}
        <section id="education" className="bg-slate-950 px-6 py-24 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <SectionHeader title="Education" subtitle="Academic background" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {education.map((item) => (
                <TimelineItem key={item.year} {...item} />
              ))}
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="px-6 py-24 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <SectionHeader title="Featured Projects" subtitle="Recent work" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3"
            >
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <ProjectCard {...project} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="bg-slate-950 px-6 py-24 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <SectionHeader title="Professional Experience" subtitle="Career journey" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {experience.map((item) => (
                <TimelineItem key={`${item.year}-${item.title}`} {...item} />
              ))}
            </motion.div>
          </div>
        </section>

        {/* Activities Section */}
        <section id="activities" className="px-6 py-24 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <SectionHeader title="Beyond Code" subtitle="Community & interests" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {activities.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-card hover-lift p-6 text-center"
                >
                  <p className="text-slate-200 leading-6">{item}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <Contact />
      </main>
    </div>
  );
}
