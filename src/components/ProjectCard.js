'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { useState, useRef } from 'react';

export default function ProjectCard({ title, subtitle, description, tags, link, videoUrl, imageUrl }) {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <motion.article
      className="group glass-card hover-lift relative overflow-hidden transition-all duration-500"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Media Container */}
      <div className="project-card-media relative aspect-video overflow-hidden rounded-t-2xl bg-slate-900">
        {/* Static Image (Default) */}
        <motion.div
          className="absolute inset-0"
          animate={{ opacity: isHovered ? 0 : 1 }}
          transition={{ duration: 0.3 }}
        >
          <img
            src={imageUrl}
            alt={title}
            className="h-full w-full object-cover"
          />
        </motion.div>

        {/* Video Preview (On Hover) */}
        <AnimatePresence>
          {isHovered && videoUrl && (
            <motion.div
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <video
                ref={videoRef}
                src={videoUrl}
                className="h-full w-full object-cover"
                muted
                loop
                playsInline
                preload="metadata"
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/25 to-transparent opacity-70"></div>

        {/* Hover Overlay */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              className="absolute inset-0 flex items-center justify-center bg-gray-900/70 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-center">
                <motion.h3
                  className="mb-4 text-2xl font-bold text-white"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  {title}
                </motion.h3>
                <div className="flex gap-3 justify-center">
                  <motion.a
                    href={link}
                    className="inline-flex items-center gap-2 rounded-full bg-cyan-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-cyan-600"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    View Project
                    <FaExternalLinkAlt className="text-xs" />
                  </motion.a>
                  <motion.a
                    href={link}
                    className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
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
    </motion.article>
  );
}
