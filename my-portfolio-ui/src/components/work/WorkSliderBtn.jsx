import React from 'react'
import PropTypes from 'prop-types'

import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'

const WorkSliderBtn = ({ onPrev, onNext }) => (
  <div className="flex gap-8 m-10">
    {/* Previouse Button */}
    <button
      className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-green-400 hover:text-gray-900 transition"
      onClick={ onPrev }
      type="button"
    >
      <FaAngleLeft />
    </button>

    {/* Next Button */}
    <button
      className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-green-400 hover:text-gray-900 transition"
      onClick={ onNext }
      type="button"
    >
      <FaAngleRight />
    </button>
  </div>
)

WorkSliderBtn.propTypes = {
  onPrev: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
  current: PropTypes.number,
  total: PropTypes.number,
}

export default WorkSliderBtn