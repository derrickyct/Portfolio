import React, { useState } from 'react'

import { workExperiences } from '../constants/experience'
import { educations } from '../constants/education'
import { skills } from '../constants/skills'
import { aboutMe } from '../constants/aboutMe'
import { tabs } from '../constants/tabs'
import { contacts } from '../constants/contacts'
import ResumeContent from '../components/resume/ResumeContent'
import ResumeTab from '../components/resume/ResumeTab'

const Resume = () => {
  const [activeTab, setActiveTab] = useState('work')

  let data = []

  switch (activeTab) {
    case 'work':
      data = workExperiences
      break
    case 'education':
      data = educations
      break
    case 'skills':
      data = skills
      break
    case 'about':
      data = { 
        paragraphs: aboutMe.about, 
        experience: aboutMe.experience,
        languages: aboutMe.languages,
        contacts: contacts
      }
      break
    default:
      data = []
  }
  
  return (
    <div className="bg-gray-900 min-h-screen py-16 px-4 sm:px-8">
      <section className="py-16 px-4 sm:px-8">
        <div className="container mx-auto flex flex-col md:flex-row gap-8">
          {/* Tabs */}
          <ResumeTab activeTab={ activeTab } tabs={ tabs } setActiveTab={ setActiveTab } />

          {/* Content */}
          <ResumeContent activeTab={ activeTab } tabs={ tabs } data={ data } />
        </div>
      </section>
    </div>
  )
}

export default Resume