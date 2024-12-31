import React from 'react'
import { motion } from 'framer-motion'
import PageHeader from '../components/PageHeader'
import BackgroundSparkles from '../components/BackgroundSparkles'
import { FaRocket, FaUsers, FaCode, FaHeart, FaMagic } from 'react-icons/fa'
import '../styles/About.css'

function About() {
  const teamValues = [
    {
      icon: <FaRocket />,
      title: "Innovation at Heart",
      description: "Pushing boundaries with cutting-edge technology and creative solutions"
    },
    {
      icon: <FaUsers />,
      title: "Collaborative Spirit",
      description: "Working together to create extraordinary results"
    },
    {
      icon: <FaCode />,
      title: "Technical Excellence",
      description: "Maintaining the highest standards in everything we build"
    },
    {
      icon: <FaHeart />,
      title: "User-Focused",
      description: "Creating experiences that delight and inspire"
    }
  ]

  return (
    <div className="page-container">
      <BackgroundSparkles />
      <PageHeader 
        title="About Us" 
        subtitle="Where Innovation Meets Magic"
        backgroundVariant="about"
      />
      
      <main className="page-content">
        <div className="container">
          <div className="grid grid-2">
            <motion.div 
              className="card"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="card-content">
                <h3>Our Mission</h3>
                <p>To empower businesses and individuals with innovative technology solutions that transform ideas into digital magic. We believe in creating enchanting experiences that make a real difference in how people interact with technology.</p>
              </div>
            </motion.div>

            <motion.div 
              className="card"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="card-content">
                <h3>Our Vision</h3>
                <p>To be a global leader in AI and technology innovation, creating enchanting solutions that push the boundaries of what's possible. We strive to make technology more accessible, intuitive, and magical for everyone.</p>
              </div>
            </motion.div>
          </div>

          <section className="values-section">
            <motion.h2
              className="section-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Our Values
            </motion.h2>
            <div className="values-grid">
              {teamValues.map((value, index) => (
                <motion.div
                  key={index}
                  className="value-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="value-icon">
                    {value.icon}
                  </div>
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </motion.div>
              ))}
            </div>
          </section>

          <section className="team-section">
            <motion.h2
              className="section-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Our Approach
            </motion.h2>
            <div className="approach-content">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                We combine cutting-edge technology with creative thinking to deliver solutions that not only meet but exceed expectations. Our team of experts brings together diverse skills and perspectives to create truly magical experiences.
              </motion.p>
              <ul className="approach-list">
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <FaMagic className="list-icon" />
                  <span>Agile Development Methodology</span>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <FaMagic className="list-icon" />
                  <span>User-Centered Design Process</span>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <FaMagic className="list-icon" />
                  <span>Continuous Innovation & Learning</span>
                </motion.li>
              </ul>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

export default About
