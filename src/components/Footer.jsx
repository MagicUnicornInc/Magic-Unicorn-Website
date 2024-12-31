import React from 'react'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="footer">
      <div className="container">
        <p>© {currentYear} Magic Unicorn Unconventional Technology & Stuff Inc</p>
      </div>
    </footer>
  )
}
