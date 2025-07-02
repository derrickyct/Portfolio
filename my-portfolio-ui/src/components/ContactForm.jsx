import { React, useState } from 'react'
import { motion } from 'framer-motion'

import { submitContactForm } from '../api/contactApi'

const ContactForm = () => {
  const successMessage = 'Thank you for your message! I will get back to you as soon as possible.'

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  }

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const validate = () => {
    const newErrors = {}

    // Validate and set errors for each field
    if (!formData.firstName) newErrors.firstName = 'Please enter your first name.'
    if (!formData.email) {
      newErrors.email = 'Please enter your email address.'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.'
    }
    if (!formData.message) newErrors.message = 'Please enter your message.'
    return newErrors
  }

  const handleSubmission = async (e) => {
    e.preventDefault()

    const validationErrors = validate()
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length > 0) return

    try {
      await submitContactForm(formData)
      setSubmitted(true)
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
      })
      setErrors({})
    } catch (error) {
      setErrors({ submit: 'There was an error submitting the form. Please try again later.' })
    }
  }

  // Error class for red border and tooltip
  const inputClass = (field) =>
    `w-full p-2 bg-gray-900 text-white rounded focus:outline-none focus:ring-2 focus:ring-green-400 ${
      errors[field] ? 'border-2 border-red-500' : ''
    }`

  return (
    <motion.div
      className="relative bg-gray-800 rounded-lg shadow-lg p-5 flex flex-col items-start border-t-4 text-green-400 transform group text-left "
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      <div className="text-green-400 text-4xl p-2">Let's get in touch!</div>
      <form className="w-full mt-4" onSubmit={handleSubmission} noValidate>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="p-2 relative">
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="Firstname"
              value={formData.firstName}
              onChange={(e) => {
                setFormData({ ...formData, firstName: e.target.value })
                if (errors.firstName) setErrors({ ...errors, firstName: undefined })
              }}
              className={inputClass('firstName')}
              required
            />
            {errors.firstName && (
              <span className="absolute left-0 top-full mt-1 text-xs text-red-400 bg-gray-900 px-2 py-1 rounded shadow z-10">
                {errors.firstName}
              </span>
            )}
          </div>
          <div className="p-2">
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Lastname"
              value={formData.lastName}
              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
              className={inputClass('lastName')}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="p-2 relative">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email address"
              value={formData.email}
              onChange={(e) => {
                setFormData({ ...formData, email: e.target.value })
                if (errors.email) setErrors({ ...errors, email: undefined })
              }}
              className={inputClass('email')}
              required
            />
            {errors.email && (
              <span className="absolute left-0 top-full mt-1 text-xs text-red-400 bg-gray-900 px-2 py-1 rounded shadow z-10">
                {errors.email}
              </span>
            )}
          </div>
          <div className="p-2">
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Phone number"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className={inputClass('phone')}
            />
          </div>
        </div>
        <div className="p-2 relative">
          <textarea
            id="message"
            name="message"
            placeholder="Type your message here..."
            value={formData.message}
            onChange={(e) => {
              setFormData({ ...formData, message: e.target.value })
              if (errors.message) setErrors({ ...errors, message: undefined })
            }}
            className={inputClass('message')}
            rows="4"
            required
          ></textarea>
          {errors.message && (
            <span className="absolute left-0 top-full mt-1 text-xs text-red-400 bg-gray-900 px-2 py-1 rounded shadow z-10">
              {errors.message}
            </span>
          )}
        </div>
        <div className="p-2">
          <button
            type="submit"
            className="w-full bg-green-400 text-gray-900 font-semibold p-2 rounded hover:bg-green-500 transition-colors duration-200"
          >
            Submit
          </button>
        </div>
        {errors.submit && (
          <div className="p-2 text-red-400">{errors.submit}</div>
        )}
        {submitted && <p className="p-2">{successMessage}</p>}
      </form>
    </motion.div>
  )
}

export default ContactForm