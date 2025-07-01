import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaPython,
  FaAws,
} from 'react-icons/fa'
import { TbBrandCSharp } from "react-icons/tb"
import { VscAzure } from 'react-icons/vsc'
import { SiGooglecloud } from "react-icons/si"

import ResumeCard from '../components/ResumeCard'

const workExperiences = [
  {
    title: 'Software Developer Co-op',
    company: 'Ministry of Health',
    dates: 'Sep 2024 - Apr 2025',
    description: 'Built a Blazor-based platform with Power Automate and Azure auth to manage health data.'
  },
  {
    title: 'AI Developer Co-op',
    company: 'Lamina Solutions',
    dates: 'May 2024 - Aug 2024',
    description: 'Automated testing for LLMs and improved RAG system performance with custom test cases.'
  },
  {
    title: 'Associate RPA Engineer and Full Stack Developer',
    company: 'Xennial Innovations Inc.',
    dates: 'Apr 2022 - Mar 2023',
    description: 'Developed and maintained robust backend services and REST APIs.'
  },
  {
    title: 'RPA Engineer and Full Stack Developer Internship',
    company: 'Xennial Innovations Inc.',
    dates: 'Jan 2022 - Apr 2022',
    description: 'Automated data scraping and analysis workflows with UiPath and JavaScript.'
  },
  {
    title: 'Freelance Web Developer',
    company: 'Institute of Future Cities, The Chinese University of Hong Kong',
    dates: 'Aug 2021 - Sep 2021',
    description: 'Built a Django web app for urban planners managing 22,000+ records.'
  }
]

const educations = [
  {
    degree: 'Applied A.I. Solutions Development',
    institution: 'George Brown College',
    dates: 'Sep 2023 - Aug 2024',
    // achievements: [
    //   'Gained hands-on experience with industry-standard AI technologies and cloud computing platform.',
    //   'Overall GPA 3.81/4.0, Dean\'s Honour List (All semesters).',
    // ]
  },
  {
    degree: 'Computer Software and Database Development',
    institution: 'Lambton College',
    dates: 'Sep 2020 - Jun 2022',
    // achievements: ['Overall GPA 3.738/4.0, Dean\'s Honour List (All semesters).'],
  },
  {
    degree: 'Bachelor of Science in Applied Mathematics',
    institution: 'The Hong Kong University of Science and Technology',
    dates: 'Sep 2016 - May 2020',
    // achievements: [
    //   'Elected as the Welfare and Public Relation Secretary of Mathematics Student Society.',
    //   'Facilitated more than 15 society activities such as student orientation and maths support centre.',
    //   'Chosen to participate in two subsidized exchange programs.'
    // ],
  },
]

const skills = [
  {
    name: 'Html 5',
    imageUrl: <FaHtml5 />,
  },
  {
    name: 'JavaScript',
    imageUrl: <FaJs />, // Placeholder for JavaScript icon
  },
  {
    name: 'CSS',
    imageUrl: <FaCss3 />, // Placeholder for Tailwind CSS icon
  },
  {
    name: 'Python',
    imageUrl: <FaPython />,
  },
  {
    name: 'C#',
    imageUrl: <TbBrandCSharp />,
  },
  {
    name: 'Reactjs',
    imageUrl: <FaReact />,
  },
  {
    name: 'AWS',
    imageUrl: <FaAws />,
  },
  {
    name: 'Azure',
    imageUrl: <VscAzure />,
  },
  {
    name: 'GCP',
    imageUrl: <SiGooglecloud />,
  }
]

const Tabs = [
  { label: 'Experience', key: 'work' },
  { label: 'Education', key: 'education' },
  { label: 'Skills', key: 'skills' },
  { label: 'About Me', key: 'about' },
]

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
      data = []
      break
    default:
      data = []
  }
  
  return (
    <div className="bg-gray-900 min-h-screen py-16 px-4 sm:px-8">
      <section className="py-16 px-4 sm:px-8">
        <div className="container mx-auto flex flex-col md:flex-row gap-8">
          {/* Tabs */}
          <div className="flex md:flex-col gap-4 md:w-1/4">
            { Tabs.map(tab => (
              <button
                key={tab.key}
                className={`px-4 py-2 rounded font-semibold transition-colors duration-200
                  ${ activeTab === tab.key
                    ? 'bg-green-400 text-gray-700'
                    : 'bg-gray-800 text-white hover:bg-green-500 hover:text-white'}
                `}
                onClick={() => setActiveTab(tab.key) }
              >
                {tab.label}
              </button>
            )) }
          </div>
          {/* Content */}
          <div className="flex-1">
            { activeTab && activeTab !== 'about' && (
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
              >
                <h2 className="text-3xl font-bold mb-6">{ Tabs.find(item => item.key === activeTab)?.label }</h2>
                <div className={`grid grid-cols-1 
                  ${ activeTab === 'skills' ? 'sm:grid-cols-3 md:grid-cols-4' : 'md:grid-cols-2' }
                gap-6`}>
                  { data.map((item, idx) => (
                    <ResumeCard key={ idx } data={ item } type={ activeTab } />
                  )) }
                </div>
              </motion.div>
            ) }
            { activeTab === 'about' && (
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
              >
                <h2 className="text-3xl font-bold mb-6">{ Tabs.find(item => item.key === activeTab)?.label }</h2>
                <div className="text-lg text-gray-400 text-left">
                  <p>
                    I am a passionate software developer with a strong foundation in AI and web development.
                    My journey has taken me through various roles, from automating workflows to building robust applications.
                    I thrive on challenges and continuously seek to expand my skill set.
                  </p>
                  <p className="mt-4">
                    In my free time, I enjoy exploring new technologies, contributing to open-source projects
                    and staying updated with the latest trends in the tech industry.
                  </p>
                </div>
                <ul className="mt-12 space-y-3 text-gray-200 text-left">
                  <li>
                    <span className="text-gray-400 mr-4">Experience</span>
                    <span className="text-green-400 text-lg">2+ Years</span>
                  </li>
                  <li>
                    <span className="text-gray-400 mr-4">E-mail</span>
                    <span className="text-lg">derrickyiuct@gmail.com</span>
                  </li>
                  <li>
                    <span className="text-gray-400 mr-4">Phone</span>
                    <span className="text-lg">+1 (647)914-8790</span>
                  </li>
                  <li>
                    <span className="text-gray-400 mr-4">Language</span>
                    <span className="text-lg">English, Cantonese, Mandarin</span>
                  </li>
                </ul>
              </motion.div>
            ) }
          </div>
        </div>
      </section>
    </div>
  )
}

export default Resume