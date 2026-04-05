import { motion } from 'framer-motion';

export default function SectionHeader({ title, subtitle }) {
  return (
    <motion.div
      className="mb-10 max-w-3xl"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.p
        className="text-sm uppercase tracking-[0.36em] text-sky-300"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {subtitle}
      </motion.p>
      <motion.h2
        className="mt-3 text-3xl font-semibold text-white sm:text-4xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        {title}
      </motion.h2>
    </motion.div>
  );
}
