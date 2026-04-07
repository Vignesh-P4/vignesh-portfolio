'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { useState, useRef } from 'react';

const cardVariants = {
  hidden: (direction) => ({
    opacity: 0,
    scale: 0.95,
    x: direction * 70,
    rotate: direction * 3
  }),
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    rotate: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] }
  }
};

export default function ProjectCard({ title, subtitle, description, tags, link, videoUrl, imageUrl, index }) {
  const [isHovered, setIsHovered] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const videoRef = useRef(null);

  const direction = index % 2 === 0 ? -1 : 1;

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const rotateY = ((x / rect.width) * 20 - 10) * 0.4;
    const rotateX = ((y / rect.height) * 20 - 10) * -0.4;
    setTilt({ x: rotateX, y: rotateY });
  };

  return (
    <motion.article
      className="group glass-card relative overflow-hidden transition-all duration-500"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
      custom={direction}
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: 1200 }}
    >
      <motion.div
        style={{
          transformStyle: 'preserve-3d',
          rotateX: tilt.x,
          rotateY: tilt.y
        }}
      >
      {/* Media Container */}
      <div className="project-card-media relative aspect-video overflow-hidden rounded-t-2xl bg-slate-900">
        <video
          ref={videoRef}
          src={videoUrl}
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500"
          style={{ opacity: isHovered ? 1 : 0 }}
        />
        <motion.img
          src={imageUrl}
          alt={title}
          className="h-full w-full object-cover"
          initial={{ scale: 1.02 }}
          whileInView={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-transparent opacity-80" />

        {/* Hover Overlay */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              className="absolute inset-0 flex items-center justify-center bg-slate-950/80 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <div className="text-center">
                <motion.h3
                  className="mb-4 text-2xl font-bold text-white"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.08, duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                >
                  {title}
                </motion.h3>
                <div className="flex flex-wrap justify-center gap-3">
                  <motion.a
                    href={link}
                    className="inline-flex items-center gap-2 rounded-full bg-cyan-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-cyan-600"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.18, duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  >
                    View Project
                    <FaExternalLinkAlt className="text-xs" />
                  </motion.a>
                  <motion.a
                    href={link}
                    className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/20"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.24, duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <FaGithub className="text-sm" />
                    GitHub
                  </motion.a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="mb-4 text-sm uppercase tracking-[0.24em] text-gray-300">
          {subtitle}
        </div>
        <h3 className="text-xl font-semibold text-white group-hover:text-gray-300 transition-colors duration-300">
          {title}
        </h3>
        <p className="mt-3 leading-6 text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
          {description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <motion.span
              key={tag}
              className="rounded-full bg-white/5 px-3 py-1 text-xs text-gray-300 border border-slate-700/50 group-hover:border-cyan-500/30 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </div>
      </motion.div>
    </motion.article>
  );
}
