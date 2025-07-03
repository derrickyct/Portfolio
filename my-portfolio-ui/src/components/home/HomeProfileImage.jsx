import React from 'react'

const HomeProfileImage = ({ src }) => (
  <div className="flex justify-center items-center">
    <img
      src={src}
      alt="Profile"
      className="rounded-full shadow-lg w-96 h-96 object-cover object-[center_5%] border-4 border-green-400 hover:scale-105 transition-transform duration-300"
    />
  </div>
)

export default HomeProfileImage