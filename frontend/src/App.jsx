import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'

const App = () => {
  return (
    <div id='appScroll' className=' from-slate-950 via-[#020617] to-black min-h-full h-full w-screen flex flex-col'>
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
    </div>
  )
}

export default App
