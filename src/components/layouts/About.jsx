import React from 'react'
import Images from '../Images'
import moazzem from '../../assets/moazzem.png'

const About = () => {
  return (
    <div className="bg-[#020617]">
      <section id="about" className="py-20 px-6 max-w-6xl mx-auto">

        <h2 className="text-3xl font-bold text-[#0ea5e9] mb-10 flex items-center">
          About Me
          <div className="h-px bg-gray-700 grow ml-4"></div>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 text-white text-lg items-center">
          <div className="space-y-4">
            <p>Hello! I'm a web developer based in Bangladesh. I enjoy creating things that live on the internet.</p>
            <p>As a Fresher in the industry, I have a strong foundation in modern web technologies and a passion for clean UI design.</p>
            <p>Currently, I am working with: <span className="text-cyan-400">React, Tailwind CSS, JavaScript (ES6+), Git & GitHub.</span></p>
          </div>
          <div className="flex justify-center md:justify-end">
            <div className="relative group">
              <div className="w-64 h-64 border-2 border-cyan-400 rounded translate-x-4 translate-y-4 absolute transition-all duration-300 group-hover:translate-x-2 group-hover:translate-y-2"></div>

              <div className="w-64 h-64 bg-gray-800 rounded relative overflow-hidden flex items-center justify-center border border-gray-700">
                <Images imgSrc={moazzem} />
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}

export default About