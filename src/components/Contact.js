'use client';

import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

const socialLinks = [
  {
    name: 'GitHub',
    icon: FaGithub,
    url: 'https://github.com/Vignesh-P4',
    color: 'hover:text-gray-300'
  },
  {
    name: 'LinkedIn',
    icon: FaLinkedin,
    url: 'https://www.linkedin.com/in/vigneshpobbathi/',
    color: 'hover:text-blue-400'
  },
  {
    name: 'Instagram',
    icon: FaInstagram,
    url: 'https://www.instagram.com/vignesh_pobbathi_/',
    color: 'hover:text-pink-400'
  },
  {
    name: 'Email',
    icon: FaEnvelope,
    url: 'mailto:vigneshpobbathi@gmail.com',
    color: 'hover:text-sky-400'
  }
];

export default function Contact() {
  return (
    <section id="contact" className="bg-slate-950 px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="text-sm uppercase tracking-[0.36em] text-sky-300">Get In Touch</p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Let's Build Something Amazing</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology and design.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="glass-card p-8 sm:p-12"
        >
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-white sm:text-3xl">Ready to collaborate?</h3>
            <p className="mt-4 text-lg text-slate-300">
              Whether you have a project in mind, need consultation, or just want to connect, I'd love to hear from you.
            </p>

            <div className="mt-8 flex flex-col items-center gap-6 sm:flex-row sm:justify-center">
              <a
                href="mailto:vigneshpobbathi@gmail.com"
                className="btn-primary inline-flex items-center justify-center rounded-full px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-glow"
              >
                <FaEnvelope className="mr-2 text-lg" />
                Send Email
              </a>

              <div className="flex items-center gap-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                      viewport={{ once: true }}
                      className={`social-icon text-2xl text-slate-400 transition-all duration-300 ${social.color} hover:scale-125`}
                      aria-label={social.name}
                    >
                      <IconComponent />
                    </motion.a>
                  );
                })}
              </div>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-3">
              <div className="text-center">
                <h4 className="font-semibold text-white">Location</h4>
                <p className="mt-2 text-slate-400">San Francisco, CA</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-white">Email</h4>
                <p className="mt-2 text-slate-400">hello@vignesh.com</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-white">Status</h4>
                <p className="mt-2 text-emerald-400">Available for projects</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}