import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import { NavLink } from "react-router-dom"

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Resume', to: '/resume' },
  { label: 'Work', to: '/work' },
  { label: 'Contact', to: '/contact' },
]
const menuVariants = {
  hidden: { opacity: 0, x: "100%" },
  visible: { opacity: 1, x: 0, transition: { type: "tween", duration: 0.3 } },
  exit: { opacity: 0, x: "100%", transition: { type: "tween", duration: 0.3 } },
}

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-gray-900 shadow-lg relative z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <NavLink key="Logo" to={ navItems.find(item => item.label === 'Home')?.to } className="text-white text-2xl font-bold tracking-wider p-4 m-4 hover:text-green-400 transition-colors duration-200">
          Derrick
        </NavLink>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <NavLink
              key={ item.label }
              to={ item.to }
              className="px-2 py-3 font-semibold transition-colors duration-200 border-b-2 border-transparent"
            >
              {({ isActive }) => (
                <span
                  className={`transition-colors duration-200 pb-1
                    ${isActive
                      ? "border-b-2 border-green-400 text-green-400"
                      : "border-b-2 border-transparent text-white hover:text-green-400"}
                  `}
                  style={{ display: "inline-block" }}
                >
                  {item.label}
                </span>
              )}
            </NavLink>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-500 rounded-md p-4 m-4"
          onClick={ () => setIsOpen(o => !o) }
          aria-label="Toggle menu"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden absolute top-0 w-screen bg-gray-800 p-6 shadow-xl flex flex-col items-start space-y-4 pt-28 z-50"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Close button inside menu */}
            <button
              className="absolute top-6 right-6 text-gray-300 hover:text-white focus:outline-none"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>

            {/* Nav Items */}
            { navItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.to}
                className={({ isActive }) =>
                  `block text-xl font-medium w-full py-2 transition-colors duration-200 ${
                    isActive || location.pathname === item.to
                      ? "text-green-400"
                      : "text-gray-200 hover:text-green-400"
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </NavLink>
            )) }
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Nav