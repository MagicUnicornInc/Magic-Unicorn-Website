import React from 'react'
import { motion } from 'framer-motion'
import PageHeader from '../components/PageHeader'
import BackgroundSparkles from '../components/BackgroundSparkles'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import '../styles/Contact.css'

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
  };

  return (
    <div className="page-container">
      <BackgroundSparkles />
      <PageHeader 
        title="Contact Us" 
        subtitle="Let's create something magical together"
        backgroundVariant="contact"
      />
      
      <main className="page-content">
        <div className="container">
          <div className="contact-grid">
            <motion.div 
              className="contact-info"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="card-base">
                <h3 className="card-title">Get in Touch</h3>
                <div className="contact-details">
                  <div className="contact-item">
                    <FaEnvelope />
                    <span>hello@magicunicorn.tech</span>
                  </div>
                  <div className="contact-item">
                    <FaPhone />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="contact-item">
                    <FaMapMarkerAlt />
                    <span>123 Innovation Street<br />Tech Valley, CA 94025</span>
                  </div>
                </div>
                <div className="social-links">
                  <motion.a 
                    href="#" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                  >
                    <FaGithub />
                  </motion.a>
                  <motion.a 
                    href="#" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                  >
                    <FaLinkedin />
                  </motion.a>
                  <motion.a 
                    href="#" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                  >
                    <FaTwitter />
                  </motion.a>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="contact-form-container"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <form className="contact-form card-base" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input type="text" id="subject" required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" rows="5" required></textarea>
                </div>
                
                <motion.button 
                  type="submit" 
                  className="btn btn-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Contact
