import React from 'react'

const ResumeTab = ({ activeTab, tabs, setActiveTab }) => {
  return (
    <div className="flex justify-center items-center md:items-start md:justify-start md:flex-col gap-4 md:w-1/4">
      { tabs.map(tab => (
        <button
          key={tab.key}
          className={`px-4 py-2 rounded font-semibold transition-colors duration-200 w-full
            ${ activeTab === tab.key
              ? 'bg-green-400 text-gray-700'
              : 'bg-gray-800 text-white hover:bg-green-500 hover:text-white'}
          `}
          onClick={() => setActiveTab(tab.key) }
        >
          { tab.label }
        </button>
      )) }
    </div>
  )
}

export default ResumeTab