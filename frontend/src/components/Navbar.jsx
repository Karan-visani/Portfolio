import React from 'react'
import { DownloadIcon } from 'lucide-react'

const Navbar = () => {
  return (
    <div className=' bg-slate-900/70 backdrop-blur-md border border-slate-800 flex justify-between items-center px-5 pt-5 pb-3 mt-5 mx-10 rounded-3xl'>
        <h2 className='text-2xl font-semibold font-serif'>Portfolio</h2>
        <div className='flex justify-center items-center gap-6'>
            <a href="#home" className='text-lg font-medium hover:text-cyan-200 text-cyan-400'> Home</a>
            <a href="#about" className='text-lg font-medium hover:text-cyan-200 text-cyan-400'> About</a>
            <a href="#skills" className='text-lg font-medium hover:text-cyan-200 text-cyan-400'> Skills</a>
            <a href="#projects" className='text-lg font-medium hover:text-cyan-200 text-cyan-400'> Projects</a>
            <a href="#education" className='text-lg font-medium hover:text-cyan-200 text-cyan-400'> Eduction</a>
            <a href="#contact" className='text-lg font-medium hover:text-cyan-200 text-cyan-400'> Contact</a>
        </div>
        <button className='py-2 px-5 bg-cyan-400 rounded-xl hover:bg-cyan-600 text-lg flex items-center mb-2 text-black font-medium'>
            Resume <p className='ms-2'><DownloadIcon size={18}/></p>
        </button>
      
    </div>
  )
}

export default Navbar
