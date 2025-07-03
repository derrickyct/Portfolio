import { useEffect, useState } from "react"

import profileImg from '../assets/profile.jpg'

import { aboutMe } from '../constants/aboutMe'
import { contacts } from '../constants/contacts'
import HomeGreeting from "../components/home/HomeGreeting"
import HomeAnimatedTitle from "../components/home/HomeAnimatedTitle"
import HomeIntro from "../components/home/HomeIntro"
import HomeSocialLinks from "../components/home/HomeSocialLinks"
import HomeProfileImage from "../components/home/HomeProfileImage"

const Home = () => {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(v => !v)
    }, 1500)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="container mx-auto p-4 mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 text-left">
        <div className="flex flex-col w-full">
          <HomeGreeting header={ aboutMe.header } />
          <HomeAnimatedTitle title={ aboutMe.title } isVisible={ isVisible } />
          <HomeIntro intro={ aboutMe.intro } />
          <hr className="my-4 text-gray-700 border-1" />
          <HomeSocialLinks contacts={ contacts } />
        </div>
        <HomeProfileImage src={ profileImg } />
      </div>
    </div>
  )
}

export default Home