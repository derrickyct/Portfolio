import React, { useState } from 'react'

import WorkSliderBtn from '../components/WorkSliderBtn'

import profileImg from '../assets/profile.jpg' // Testing

const projects = [
  {
    title: 'Generic Data Collection Tools',
    description: `A web application enabling users to upload Excel files, automatically extract and store data in both Microsoft SQL Server and SharePoint. Users can download files that merge Excel templates with corresponding data. The system provides interfaces for users and admins to view and manage extracted data, while template designers can modify and upload Excel templates. Upon template updates, Power Automate workflows are triggered to notify approvers for review. The platform uses Azure Active Directory and OIDC for secure authentication, and is deployed on Microsoft Azure.`,
    tech: [
      'C# .NET',
      'C# Blazor',
      'EF Core',
      'Microsoft SQL Server',
      'Azure',
      'Microsoft Power Automate',
    ]
  },
  {
    title: 'Generic Data Collection Tools',
    description: '',
    tech: [
      'TypeScript',
      'DynamoDB',
      'AWS',
    ]
  },
  {
    title: 'Data Tranfer Tools',
    description: '',
    tech: [
      'Node.js',
      'DynamoDB',
      'AWS',
    ]
  }
]

const Work = () => {
  const [current, setCurrent] = useState(0)
  const total = projects.length

  const goPrev = () => setCurrent((prev) => (prev === 0 ? total - 1 : prev - 1))
  const goNext = () => setCurrent((prev) => (prev === total - 1 ? 0 : prev + 1))

  const prj = projects[current]

  return (
    <div className="container mx-auto p-4 mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 text-left">
        <div className="flex flex-col w-full">
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
          {/* <ShowMore className="mt-4" text="Show More" /> */}
          {/* Code Snippet */}
          
        </div>

        {/* Prject Image(if available) */} 
        <div className="flex flex-col justify-center items-center">
          {/* Proejct Image */}
          <img
            src={ profileImg }
            alt="Profile"
            className="rounded-full shadow-lg w-96 h-96 object-cover object-[center_5%] border-4 border-green-400 hover:scale-105 transition-transform duration-300"
          />

          {/* Slider Button */}
          <WorkSliderBtn
            onPrev={ goPrev }
            onNext={ goNext }
            current={ current }
            total={ projects.length }
          />
        </div>
      </div>
    </div>
  )
}

export default Work