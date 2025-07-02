import React from 'react'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'

const ResumeCard = ({ key, data, type }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  }
  
  let titleText = ''
  let subtitleText = ''
  let dates = ''
  let description = ''
  // let listItems = []
  let imageUrl = ''
  let tooltipText = ''

  switch (type) {
    case 'work':
      titleText = data.title
      subtitleText = data.company
      dates = data.dates
      description = data.description
      // listItems = data.responsibilities || []
      break
    case 'education':
      titleText = data.degree
      subtitleText = data.institution
      dates = data.dates
      // listItems = data.achievements || []
      break
    case 'skills':
      // titleText = data.name
      subtitleText = data.level
      imageUrl = data.imageUrl
      tooltipText = data.details ? data.details.join(', ') : data.name
      break
    default:
      description = ''
  }

  return (
    <motion.div
      key={ key }
      className="relative bg-gray-800 rounded-lg shadow-lg p-5 flex flex-col items-start border-t-4 text-green-400 transform hover:scale-105 transition-transform duration-300 group text-left "
      variants={cardVariants}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.5 }}
    >
      {/* Image for Skills */}
      { type === 'skills' && imageUrl && (
        <div className="w-full flex justify-center items-center text-6xl text-white group-hover:text-green-400 mb-3">
          {imageUrl}
        </div>
      ) }

      { dates && <p className="text-sm text-green-400 mb-4">{ dates }</p> }
      { titleText && <h3 className="text-xl sm:text-2xl font-bold text-indigo-100 mb-2">{ titleText }</h3> }
      <p className="text-md sm:text-lg text-white mb-1">{ subtitleText }</p>
      { description && description.length > 0 && (
        <ul className="list-disc text-white text-sm space-y-1 pl-4 marker:text-green-400">
          <li>
            { description && <p className="text-base text-white mt-5">{ description }</p> }
          </li>
        </ul>
      )}

      {/* Tooltip for Skills */}
      { type === 'skills' && tooltipText && (
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 px-2 py-0.5 bg-gray-700 text-white text-xs rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          { tooltipText }
        </div>
      ) }
    </motion.div>
  )
}

ResumeCard.propTypes = {
  key: PropTypes.number,
  data: PropTypes.oneOfType([
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      company: PropTypes.string.isRequired,
      dates: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      // responsibilities: PropTypes.arrayOf(PropTypes.string).isRequired
    }),
    PropTypes.shape({
      degree: PropTypes.string.isRequired,
      institution: PropTypes.string.isRequired,
      dates: PropTypes.string.isRequired,
      // description: PropTypes.string.isRequired,
      // achievements: PropTypes.arrayOf(PropTypes.string).isRequired
    }),
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      level: PropTypes.string.isRequired,
      imageUrl: PropTypes.string,
      details: PropTypes.arrayOf(PropTypes.string)
    })
  ]).isRequired,
  type: PropTypes.oneOf(['work', 'education']).isRequired
}

export default ResumeCard