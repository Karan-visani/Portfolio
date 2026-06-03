import { Bold, Book, BookOpen } from 'lucide-react'
import React from 'react'
import { PiGraduationCapBold, PiGraduationCapLight } from "react-icons/pi";

const Education = () => {
  return (
    <div id='education' className='p-24 border-b-2 border-cyan-300'>
        <div className=' flex justify-between max-h-4xl h-[80vh] w-full gap-8'>

            <div className='flex flex-col  w-[30%]'>
                <p className='text-2xl font-semibold border-b-2 text-cyan-400 mb-4'>Education</p>
                <h2 className='text-6xl font-semibold'>My Academic <span className='text-cyan-400'>Journey.</span></h2>
                <p className='text-xl font-medium text-slate-300 mt-6'>A strong foundation in computer science and continuous learning drive my passion for building innovative solutions.</p>

                <div className='flex gap-5 justify-start p-5 items-center  h-[150px] w-[350px] ms-10 mt-13 me-13 rounded-2xl border border-slate-800 bg-slate-900/20'>
                <div className=' flex justify-center items-center h-17 w-17 rounded-full border border-slate-800 bg-cyan-950/30'> 
                <PiGraduationCapBold size={34}  className="text-cyan-400 "/>
                </div> 
                <div className='flex flex-col gap-1'>
                    <h2 className='text-4xl font-semibold'>4+</h2>
                    <p className='text-lg text-gray-400'>years of learning</p> 
                </div>
                </div>

                <div className='flex gap-5 justify-start p-5 items-center  h-[150px] w-[350px] mx-10 mt-4 rounded-2xl border border-slate-800 bg-slate-900/20'>
                <div className=' flex justify-center items-center h-17 w-17 rounded-full border border-slate-800 bg-cyan-950/30'> 
                <BookOpen size={34} className="text-cyan-400"/>
                </div> 
                <div className='flex flex-col gap-1'>
                    <h2 className='text-4xl font-semibold'>8.14</h2>
                    <p className='text-lg text-gray-400'>CGPA (BCA)</p> 
                </div>
                </div>

            </div>
           <div className='w-[70%] flex flex-col p-5 gap-6'>

    <div className='h-[220px] w-full bg-slate-900/20 border border-cyan-400/40 rounded-2xl flex items-center justify-between px-8 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-500'>
        <div className='flex items-center gap-5'>
            <div className='relative flex flex-col items-center'>
                <div className='w-[70px] h-[70px] rounded-full border border-cyan-400 flex items-center justify-center text-cyan-400 text-3xl'>
                <PiGraduationCapLight size={34}  className="text-cyan-400 "/>
                </div>
                <div className='absolute top-[70px] w-[2px] h-[140px] bg-cyan-400'></div>
            </div>
            <div className='flex flex-col gap-2'>
                <h2 className='text-3xl font-semibold'>
                    Master of Computer Applications (MCA)
                </h2>
                <h3 className='text-cyan-400 text-xl font-medium'>
                    GLS University
                </h3>
                <p className='text-slate-300 text-md leading-5 max-w-3xl'>
                    Currently pursuing MCA with focus on full-stack web development,
                    modern technologies and software engineering concepts.
                </p>
            </div>
        </div>

        <div className='flex flex-col items-end gap-8'>
            <div className='px-7 py-4 border border-cyan-400 rounded-2xl text-md text-white whitespace-nowrap'>
                2025 - Present
            </div>
            <h2 className='text-ls text-white'>
                CGPA:
                <span className='text-cyan-400 font-semibold'> Pursuing</span>
            </h2>
        </div>
    </div>


    <div className='h-[220px] w-full bg-slate-900/20 border border-cyan-400/40 rounded-2xl flex items-center justify-between px-8 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-500'>
        <div className='flex items-center gap-5'>
            <div className='relative flex flex-col items-center'>
                <div className='w-[70px] h-[70px] rounded-full border border-cyan-400 flex items-center justify-center text-cyan-400 text-3xl'>
                <Book size={34}  className="text-cyan-400 "/>
                </div>
                <div className='absolute top-[70px] w-[2px] h-[140px] bg-cyan-400'></div>
            </div>
            <div className='flex flex-col gap-2'>
                <h2 className='text-3xl font-semibold'>
                    Bachelor of Computer Applications (BCA)
                </h2>
                <h3 className='text-cyan-400 text-xl font-medium'>
                    ML Parmar (VNSGU) ,Surat

                </h3>
                <p className='text-slate-300 text-md leading-5 max-w-3xl'>
                    Built strong foundation in programming, databases,
                    web development and problem-solving skills.
                </p>
            </div>
        </div>

        <div className='flex flex-col items-end gap-8'>
            <div className='px-7 py-4 border border-cyan-400 rounded-2xl text-md text-white whitespace-nowrap'>
                2022 - 2025
            </div>
            <h2 className='text-ls text-white'>
                CGPA:
                <span className='text-cyan-400 font-semibold'> 8.14</span>
            </h2>
        </div>
    </div>








<div className='h-[220px] w-full bg-slate-900/20 border border-cyan-400/40 rounded-2xl flex items-center justify-between px-8 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-500'>
        <div className='flex items-center gap-8'>
            <div className='relative flex flex-col items-center'>
                <div className='w-[70px] h-[70px] rounded-full border border-cyan-400 flex items-center justify-center text-cyan-400 text-3xl'>
                <Book size={34}  className="text-cyan-400 "/>
                </div>
            </div>
            <div className='flex flex-col gap-2'>
                <h2 className='text-3xl font-semibold'>
                    Higher Secondary (12th)
                </h2>
                <h3 className='text-cyan-400 text-xl font-medium'>
                    GSEB Board
                </h3>
                <p className='text-slate-300 text-md leading-5 max-w-3xl'>
                    Completed higher secondary education with focus.
                </p>
            </div>
        </div>

        <div className='flex flex-col items-end gap-8'>
            <div className='px-7 py-4 border border-cyan-400 rounded-2xl text-md text-white'>
                2020 - 2022
            </div>
            <h2 className='text-ls text-white'>
                Percentage:
                <span className='text-cyan-400 font-semibold'> 74.13%</span>
            </h2>
        </div>
    </div>

      </div>
    
    </div>
    </div>

  )
}

export default Education
