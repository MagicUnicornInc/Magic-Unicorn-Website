import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import ServicePreview from '../components/ServicePreview'
import PortfolioPreview from '../components/PortfolioPreview'

const Home = () => {
  return (
    <div className="pt-16">
      <Hero />
      <ServicePreview />
      <PortfolioPreview />
      
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-8 hero-gradient">Ready to Start Your Magical Journey?</h2>
            <Link
              to="/contact"
              className="inline-block bg-primary text-white px-8 py-3 rounded-full hover:bg-opacity-90 transition-all"
            >
              Get Started
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home
