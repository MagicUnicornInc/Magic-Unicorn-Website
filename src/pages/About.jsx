import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <div className="pt-24 px-4 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold mb-8 hero-gradient">About Magic Unicorn</h1>
        <p className="text-lg text-gray-700 mb-6">
          We're a team of innovators, dreamers, and tech enthusiasts dedicated to transforming ideas into magical digital experiences.
        </p>
      </motion.div>
    </div>
  )
}

export default About
