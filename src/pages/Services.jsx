import React from 'react'
import { motion } from 'framer-motion'

const Services = () => {
  return (
    <div className="pt-24 px-4 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold mb-8 hero-gradient">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service cards will go here */}
        </div>
      </motion.div>
    </div>
  )
}

export default Services
