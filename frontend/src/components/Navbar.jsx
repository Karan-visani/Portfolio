import React from 'react'
import { DownloadIcon } from 'lucide-react'

const Navbar = () => {
  return (
    <div className='fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[95%] bg-slate-900/70 backdrop-blur-md border border-slate-800 flex justify-between items-center px-5 pt-5 pb-3 rounded-3xl shadow-2xl shadow-cyan-950/20'>
        <h2 className='text-2xl font-semibold font-serif'>Portfolio</h2>

        <div className='flex justify-center items-center gap-6'>
            <a href="#home" className='text-lg font-medium hover:text-cyan-200 text-cyan-400 transition-all duration-300'>Home</a>
            <a href="#about" className='text-lg font-medium hover:text-cyan-200 text-cyan-400 transition-all duration-300'>About</a>
            <a href="#skills" className='text-lg font-medium hover:text-cyan-200 text-cyan-400 transition-all duration-300'>Skills</a>
            <a href="#projects" className='text-lg font-medium hover:text-cyan-200 text-cyan-400 transition-all duration-300'>Projects</a>
            <a href="#education" className='text-lg font-medium hover:text-cyan-200 text-cyan-400 transition-all duration-300'>Education</a>
            <a href="#contact" className='text-lg font-medium hover:text-cyan-200 text-cyan-400 transition-all duration-300'>Contact</a>
        </div>

        <a href='/resume.pdf' download className='py-3 px-6 bg-cyan-400 rounded-xl hover:bg-cyan-500 hover:scale-105 text-lg flex items-center gap-3 text-black font-semibold transition-all duration-300'>
            Resume
            <DownloadIcon size={18}/>
        </a>
    </div>
  )
}

export default Navbar