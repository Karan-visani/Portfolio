import React from 'react'

const Home = () => {
  return (
    <div id='home' className='min-h-[88vh] w-full flex justify-center items-center px-10 border-b-2 border-cyan-300'>

      <div className='max-w-7xl w-full flex items-center justify-between gap-20'>

        <div className='flex-1'>
          <h3 className='text-cyan-400 text-lg font-medium mb-4'>
            Full Stack MERN Developer
          </h3>
          <h1 className='text-6xl font-extrabold leading-tight'>
            Hello, I'm <br />
            <span className='text-cyan-400'>
              Karan Visani
            </span>
          </h1>
          <p className='text-slate-300 text-lg mt-6 max-w-2xl leading-8'>
            I build modern, scalable and visually polished web applications 
            using the MERN stack with focus on performance, clean architecture 
            and seamless user experience.
          </p>
          <div className='flex gap-5 mt-10'>
            <button onClick={()=>{
              document.getElementById('projects').scrollIntoView({
              behavior: 'smooth'
              })
            }} className='bg-cyan-400 text-black px-8 py-3 rounded-xl font-semibold hover:scale-105 transition-all duration-300'>
              View Projects
            </button>
            <button onClick={()=>{
              document.getElementById('contact').scrollIntoView({
              behavior: 'smooth'
              })
            }} className='border border-slate-700 px-8 py-3 rounded-xl hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300'>
              Contact Me
            </button>
          </div>

        </div>

        <div className='flex-1 flex justify-center'>
          <img
            src="https://i.pinimg.com/736x/cf/ce/66/cfce660dfa6642650cf6481dd1f2b0ba.jpg"
            className='w-full h-full object-cover rounded-2xl border border-slate-700 shadow-2xl shadow-cyan-500/10'
          />
        </div>
      </div>
    </div>
  )
}

export default Home