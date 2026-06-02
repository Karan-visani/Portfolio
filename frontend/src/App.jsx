import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'

const App = () => {
  return (
    <div id='appScroll' className=' from-slate-950 via-[#020617] to-black min-h-full h-full w-screen flex flex-col'>
      <Navbar/>
      <Home/>
      <About/>
    </div>
  )
}

export default App
