import { Brain, GraduationCap, Lightbulb, Rocket, Zap } from 'lucide-react'
import React from 'react'
import karanImage from '../assets/karanimage.png'

const About = () => {
  return (
    <div id='about' className='p-21 border-b-2 border-cyan-300'>
        <div className=' flex justify-between max-h-4xl h-[80vh] w-full'>
            <div className='flex-1 p-2'>
                <p className='text-2xl font-semibold border-b-2 text-cyan-400 mb-4'>About Me</p>
                <h2 className='text-7xl font-semibold '>Got to know me <span className='text-cyan-400'>better</span></h2>
                <h1 className='text-2xl font-medium text-zinc-400 mt-8'>I'm a passionate MERN Stack Developer who loves turning ideasinto real-world web applications. I enjoy solving problems,writing clean code, and building seamless user experiences.Always learning, always building.</h1>

                <div className='flex flex-col justify-start items-start mt-5 gap-8'>
                    
                    <div className='flex items-start gap-5'>
                        <h2 className='bg-slate-900 w-14 h-14 flex items-center justify-center rounded-lg border '><Zap size={26}/></h2>
                        <div className='flex flex-col items-start'>
                            <h2 className='text-xl font-semibold'>Quick Learner</h2>
                            <p className='text-md text-zinc-400'>Fast at understanding new concepts, tools and frameworks adaptability skills.</p>
                        </div>
                    </div>

                    <div className='flex items-start gap-5'>
                        <h2 className='bg-slate-900 w-14 h-14 flex items-center justify-center rounded-lg border '><Rocket size={26}/></h2>
                        <div className='flex flex-col items-start '>
                            <h2 className='text-xl font-semibold'>Performance Focused</h2>
                            <p className='text-md text-zinc-400'>I build fast and optimized web applications.</p>
                        </div>
                    </div>

                    <div className='flex items-start gap-5'>
                        <h2 className='bg-slate-900 w-14 h-14 flex items-center justify-center rounded-lg border '><Lightbulb size={26}/></h2>
                        <div className='flex flex-col items-start'>
                            <h2 className='text-xl font-semibold'>Problem Solver</h2>
                            <p className='text-md text-zinc-400'>I love turning complex problems into simple solutions.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex-1 flex justify-center items-center p-10 relative'>
            <img src={karanImage} alt="Karan Visani" className='w-[90%] h-[100%] object-cover rounded-3xl border border-cyan-400/30 shadow-2xl shadow-cyan-500/10 ' />
            <div className='absolute left-21 bottom-14 flex bg-slate-900/95 p-3 justify-center items-center gap-4 border rounded-2xl '>
                <h2 className='border-2 p-3 rounded-xl'><GraduationCap size={26}/></h2>
                <div className='flex flex-col'>
                <h2 className='text-lg font-medium'>Currently Pursuing MCA at </h2>
                <span className='text-lg font-medium text-cyan-400'>GLS University</span>
                </div>
            </div>
            </div>

        </div>
      
    </div>
  )
}

export default About
