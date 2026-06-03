import { GraduationCap,Lightbulb,Rocket,Zap } from 'lucide-react'
import React from 'react'
import karanImage from '../assets/karanimage.png'

const About = () => {
  return (
    <div id='about' className='min-h-screen px-6 md:px-10 lg:px-18 pt-28 pb-10 border-b border-cyan-300'>

        <div className='flex flex-col lg:flex-row justify-between items-center gap-14 w-full'>

            <div className='flex-1 p-2 w-full'>

                <p className='inline-block text-xl md:text-2xl font-semibold border-b-2 border-cyan-400 text-cyan-400 mb-4'>
                    About Me
                </p>

                <h2 className='text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight'>
                    Got to know me <span className='text-cyan-400'>better</span>
                </h2>

                <h1 className='text-lg md:text-xl font-medium text-zinc-400 mt-8 leading-8'>
                    I'm a passionate MERN Stack Developer who loves turning ideas into real-world web applications. I enjoy solving problems, writing clean code, and building seamless user experiences. Always learning, always building.
                </h1>

                <div className='flex flex-col justify-start items-start mt-10 gap-8'>

                    <div className='flex items-start gap-5'>
                        <h2 className='bg-slate-900 w-14 h-14 flex items-center justify-center rounded-lg border border-slate-700 shrink-0'>
                            <Zap size={26}/>
                        </h2>

                        <div className='flex flex-col items-start'>
                            <h2 className='text-lg md:text-xl font-semibold'>
                                Quick Learner
                            </h2>

                            <p className='text-sm md:text-md text-zinc-400 leading-7'>
                                Fast at understanding new concepts, tools and frameworks adaptability skills.
                            </p>
                        </div>
                    </div>

                    <div className='flex items-start gap-5'>
                        <h2 className='bg-slate-900 w-14 h-14 flex items-center justify-center rounded-lg border border-slate-700 shrink-0'>
                            <Rocket size={26}/>
                        </h2>

                        <div className='flex flex-col items-start'>
                            <h2 className='text-lg md:text-xl font-semibold'>
                                Performance Focused
                            </h2>

                            <p className='text-sm md:text-md text-zinc-400 leading-7'>
                                I build fast and optimized web applications.
                            </p>
                        </div>
                    </div>

                    <div className='flex items-start gap-5'>
                        <h2 className='bg-slate-900 w-14 h-14 flex items-center justify-center rounded-lg border border-slate-700 shrink-0'>
                            <Lightbulb size={26}/>
                        </h2>

                        <div className='flex flex-col items-start'>
                            <h2 className='text-lg md:text-xl font-semibold'>
                                Problem Solver
                            </h2>

                            <p className='text-sm md:text-md text-zinc-400 leading-7'>
                                I love turning complex problems into simple solutions.
                            </p>
                        </div>
                    </div>

                </div>

            </div>

            <div className='flex-1 flex justify-center items-center p-2 md:p-6 lg:p-10 relative w-full'>

                <img src={karanImage} alt="Karan Visani" className='w-full max-w-[550px] h-[500px] md:h-[650px] object-cover rounded-3xl border border-cyan-400/30 shadow-2xl shadow-cyan-500/10'/>

                <div className='absolute left-1/2 -translate-x-1/2 lg:left-16 lg:translate-x-0 bottom-6 md:bottom-10 flex bg-slate-900/95 p-3 md:p-4 justify-center items-center gap-4 border border-slate-700 rounded-2xl w-[85%] md:w-auto backdrop-blur-md'>

                    <h2 className='border border-cyan-400/30 p-3 rounded-xl bg-slate-800'>
                        <GraduationCap size={26}/>
                    </h2>

                    <div className='flex flex-col'>
                        <h2 className='text-sm md:text-lg font-medium'>
                            Currently Pursuing MCA at
                        </h2>

                        <span className='text-sm md:text-lg font-medium text-cyan-400'>
                            GLS University
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About