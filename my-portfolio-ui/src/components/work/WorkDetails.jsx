import { React, useState } from 'react'

import { FaGithub } from "react-icons/fa";

import CodeViewer from '../work/CodeViewer'

const WorkDetails = ({ current, prj, className, showFull, toggleShowFull }) => {
  return (
    <div className={`flex flex-col w-full ${ className }`}>
      {/* Number */}
      <h1 className="text-3xl mb-2">{ current + 1 }</h1>

      {/* Project Title */}
      <h2 className="text-white text-2xl font-bold mb-4">
        { prj.title }
      </h2>

      {/* Project Description */}
      <div className="text-gray-400 mb-4">
        { prj.description }
      </div>

      {/* Tech Used */}
      <div className="text-green-400 mt-4">
        { Array.isArray(prj.tech) && prj.tech.length > 0 ? prj.tech.join(', ') : '' }
      </div>

      {/* Show More Button */}
      { prj.tasks.length > 2 && (
        <button
          className="text-gray-400 hover:underline mt-2"
          onClick={ toggleShowFull }
        >
          { showFull ? 'Show Less' : 'Show More' }
        </button>
      ) }
      
      {/* Tasks */}
      <div className="mt-4">
        { showFull && ( 
          <h3 className="text-white text-xl font-semibold mb-4">Task</h3>
        ) }

        <ul className="list-disc pl-5">
          { showFull && prj.tasks.map((point, idx) => (
            <li key={ idx }>{ point }</li>
          )) }
        </ul>

        {/* Code Snippet */}
        { showFull && prj.code && 
          <CodeViewer projectId={ prj.code.projectName } filenames={ prj.code.filenames } /> 
        }
      
        {/* Github Link */}
        { prj.github && 
          <div className="mt-4">
            <a
              href={ prj.github }
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 hover:text-green-300 flex items-center justify-center w-10 h-10 border-2 border-green-400 rounded-full"
            >
              <FaGithub size={20} />
            </a>
          </div>
        }
      </div>
    </div>
  )
}

export default WorkDetails