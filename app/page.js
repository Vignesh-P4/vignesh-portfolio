'use client';

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

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main>
        <section id="home" className="hero-background relative min-h-screen px-6 py-24 sm:px-10 lg:px-16">
          <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-black/40 to-black/80"></div>
          <div className="relative mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.45fr_1fr] lg:items-center">
            <div className="flex flex-col justify-center text-center lg:text-left">
              <div className="glass-card rounded-3xl p-8 shadow-soft-lg sm:p-12">
                <p className="text-sm uppercase tracking-[0.36em] text-cyan-300">Hello, I'm Vignesh</p>
                <h1 className="mt-4 text-4xl font-bold text-white sm:text-6xl lg:text-7xl">
                  Crafting digital
                  <span className="block gradient-text">solutions that shine</span>
                </h1>
                <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300 sm:text-xl lg:mx-0">
                  Full-stack developer and UI/UX designer shaping immersive experiences with modern web applications, data-driven intelligence, and polished visual systems.
                </p>
                <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row lg:items-start">
                  <a
                    href="#projects"
                    className="btn-primary inline-flex items-center justify-center rounded-full px-8 py-4 text-sm font-semibold text-white transition-all duration-300"
                  >
                    View My Work
                  </a>
                  <a
                    href="#contact"
                    className="btn-secondary inline-flex items-center justify-center rounded-full border border-cyan-500/30 px-8 py-4 text-sm font-semibold text-white transition-all duration-300"
                  >
                    Get In Touch
                  </a>
                </div>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="absolute -left-12 -top-10 h-40 w-40 rounded-full bg-cyan-500/15 blur-3xl" />
              <div className="absolute -right-10 top-16 h-56 w-56 rounded-full bg-violet-500/15 blur-3xl" />
              <div className="glass-card relative overflow-hidden rounded-[2rem] border border-cyan-500/20 bg-slate-950/80 p-8 shadow-soft-lg">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-cyan-500/15 via-slate-900 to-violet-500/15 p-6">
                  <div className="absolute inset-0 rounded-[1.75rem] border border-white/10" />
                  <div className="absolute -bottom-8 left-6 h-24 w-24 rounded-full bg-cyan-500/20 blur-3xl" />
                  <div className="absolute top-6 right-6 h-20 w-20 rounded-full bg-violet-500/20 blur-3xl" />
                </div>
              </div>
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
