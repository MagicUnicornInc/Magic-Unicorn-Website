import React from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import '../styles/PageHeader.css';

function PageHeader({ title, subtitle }) {
  // Sparkle animation variants
  const sparkleVariants = {
    initial: { scale: 0, opacity: 0 },
    animate: { 
      scale: [0, 1, 0],
      opacity: [0, 1, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatDelay: Math.random() * 2
      }
    }
  };

  return (
    <header className="page-header" role="banner">
      <div className="magical-overlay"></div>
      <div className="sparkles-container">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="sparkle"
            variants={sparkleVariants}
            initial="initial"
            animate="animate"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>
      <div className="container header-content">
        <motion.div
          className="title-container"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="page-title" aria-label={title}>
            <span className="title-text">{title}</span>
            <span className="title-glow"></span>
          </h1>
          {subtitle && (
            <motion.p
              className="page-subtitle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              {subtitle}
            </motion.p>
          )}
        </motion.div>
      </div>
    </header>
  );
}

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string
};

export default PageHeader;
