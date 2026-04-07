'use client';

import { motion } from 'framer-motion';

export default function TimelineItem({ year, title, location, description }) {
  return (
    <motion.div
      className="glass-card hover-lift relative p-6 sm:p-8"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Timeline dot */}
      <div className="absolute left-6 top-8 h-3 w-3 rounded-full bg-cyan-400 shadow-glow sm:left-8"></div>

      {/* Timeline line */}
      <div className="absolute left-[23px] top-12 h-full w-px bg-gradient-to-b from-cyan-400 to-transparent opacity-50 sm:left-[31px]"></div>

      <div className="ml-8 sm:ml-12">
          <div className="flex flex-col gap-4 border-b border-gray-700/50 pb-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <motion.p
              className="text-sm uppercase tracking-[0.28em] text-cyan-400"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {year}
            </motion.p>
            <motion.h3
              className="mt-2 text-xl font-semibold text-white"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              {title}
            </motion.h3>
          </div>
          <motion.p
            className="text-sm text-gray-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {location}
          </motion.p>
        </div>
        {Array.isArray(description) ? (
          <motion.ul
            className="mt-4 list-inside space-y-3 text-gray-300"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            {description.map((item, idx) => (
              <li key={idx} className="leading-7 before:mr-2 before:inline-block before:h-2 before:w-2 before:rounded-full before:bg-gray-400 before:align-middle">
                {item}
              </li>
            ))}
          </motion.ul>
        ) : (
          <motion.p
            className="mt-4 leading-7 text-gray-300"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            {description}
          </motion.p>
        )}
      </div>
    </motion.div>
  );
}
