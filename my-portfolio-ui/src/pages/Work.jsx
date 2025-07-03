import React, { useState } from 'react'
import { projects } from '../constants/work'
import WorkSliderBtn from '../components/work/WorkSliderBtn'
import WorkDetails from '../components/work/WorkDetails'

const Work = () => {
  const [current, setCurrent] = useState(0)
  const [showFullMap, setShowFullMap] = useState({}) 

  const total = projects.length
  const prj = projects[current]

  const toggleShowFull = () => {
    setShowFullMap(prev => ({
      ...prev,
      [current]: !prev[current]
    }))
  }

  const goPrev = () => setCurrent((prev) => (prev === 0 ? total - 1 : prev - 1))
  const goNext = () => setCurrent((prev) => (prev === total - 1 ? 0 : prev + 1))

  return (
    <div className="container mx-auto p-4 mt-10">
      { prj.img ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8 text-left">
          {/* Project Details */}
          <WorkDetails
            current={ current } 
            prj={ prj }
            showFull={!!showFullMap[current]}
            toggleShowFull={toggleShowFull} 
            className="order-2 lg:order-1" 
          />

          {/* Project Image */}
          <div className="flex flex-col items-center order-1 lg:order-2">
            <img
              src={prj.img}
              alt={prj.title + ' Image'}
              className="rounded-4xl shadow-lg w-152 h-86 object-cover object-[center_5%] border-4 border-green-400 hover:scale-105 transition-transform duration-300"
            />

            <WorkSliderBtn onPrev={goPrev} onNext={goNext} />
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-4 mb-8 text-left">
          {/* Full width Project Details */}
          <WorkDetails 
            current={current} 
            prj={prj}
            showFull={!!showFullMap[current]}
            toggleShowFull={toggleShowFull} 
          />

          {/* Slider Button at the Bottom */}
          <div className="flex justify-center">
            <WorkSliderBtn onPrev={goPrev} onNext={goNext} />
          </div>
        </div>
      ) }
    </div>
  )
}

export default Work