import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';

export default function ProjectCard({ title, subtitle, description, tags, link }) {
  return (
    <motion.article
      className="group glass-card hover-lift relative overflow-hidden p-6 transition-all duration-300"
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 to-purple-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

      <div className="relative">
        <div className="mb-4 text-sm uppercase tracking-[0.24em] text-sky-300">
          {subtitle}
        </div>
        <h3 className="text-2xl font-semibold text-white group-hover:text-sky-300 transition-colors duration-300">
          {title}
        </h3>
        <p className="mt-4 leading-7 text-slate-300 group-hover:text-slate-200 transition-colors duration-300">
          {description}
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <motion.span
              key={tag}
              className="rounded-full bg-white/5 px-3 py-1 text-xs text-slate-300 border border-slate-700/50 group-hover:border-sky-500/30 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {tag}
            </motion.span>
          ))}
        </div>
        <motion.a
          href={link}
          className="mt-6 inline-flex items-center text-sm font-semibold text-sky-300 transition hover:text-sky-400 group-hover:translate-x-1"
          whileHover={{ x: 4 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          Learn more
          <FaExternalLinkAlt className="ml-2 text-xs" />
        </motion.a>
      </div>
    </motion.article>
  );
}
