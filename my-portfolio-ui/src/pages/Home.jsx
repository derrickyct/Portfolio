import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "motion/react"

import { FaLinkedin, FaGithub } from "react-icons/fa"
import profileImg from '../assets/profile.jpg'

const header = "Hi, I'M DERRICK!"
const title = "Software Developer"
const intro = "I'm an Associate Full Stack and RPA Developer skilled in both front-end and back-end technologies, including Node.js, C# .NET, and Python. I have hands-on experience with MySQL, MongoDB, AWS, Azure, and automation tools like G1ant and UiPath. I’m passionate about building scalable, secure applications and thrive on continuous learning and creative problem-solving."

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
          {/* Greeting */}
          <h1 className="text-3xl font-bold mb-2">{ header }</h1>

          {/* Title Animation */}
          <div className="w-full min-h-[8.5rem] sm:min-h-[5rem] lg:min-h-[9rem]">
            <AnimatePresence initial={false}>
              {isVisible ? (
                <motion.h1
                  className="text-2xl font-bold mb-4 text-green-400"
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 0, scale: 0.95 }}
                  key="title"
                >
                  { title }
                </motion.h1>
              ) : null}
            </AnimatePresence>
          </div>

          {/* Self Intro */}
          <p className="test-gray-200">
            { intro ? intro : "" }
          </p>

          <hr className="my-4 text-gray-700 border-1" />

          {/* Social Links */}
          <div className="flex gap-4 mt-2">
            <a
              href="https://www.linkedin.com/in/chuntingyiu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 hover:text-green-300 border-2 p-4 rounded-full"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://github.com/derrickyct"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 hover:text-green-300 border-2 p-4 rounded-full"
            >
              <FaGithub size={20} />
            </a>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img
            src={ profileImg }
            alt="Profile"
            className="rounded-full shadow-lg w-96 h-96 object-cover object-[center_5%] border-4 border-green-400 hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </div>
  )
}

export default Home