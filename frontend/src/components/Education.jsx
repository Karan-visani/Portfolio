import { Book,BookOpen } from 'lucide-react'
import React from 'react'
import { PiGraduationCapBold,PiGraduationCapLight } from "react-icons/pi";

const Education = () => {
  return (
    <div id='education' className='min-h-screen px-6 md:px-10 lg:px-18 pt-28 pb-10 border-b border-cyan-300'>

        <div className='flex flex-col lg:flex-row justify-between w-full gap-10'>

            <div className='flex flex-col w-full lg:w-[30%]'>

                <p className='inline-block text-xl md:text-2xl font-semibold border-b-2 border-cyan-400 text-cyan-400 mb-4'>
                    Education
                </p>

                <h2 className='text-4xl md:text-6xl font-semibold leading-tight'>
                    My Academic <span className='text-cyan-400'>Journey.</span>
                </h2>

                <p className='text-lg md:text-xl font-medium text-slate-300 mt-6 leading-8'>
                    A strong foundation in computer science and continuous learning drive my passion for building innovative solutions.
                </p>

                <div className='flex gap-5 justify-start p-5 items-center h-[140px] w-full mt-10 rounded-2xl border border-slate-800 bg-slate-900/20'>
                    <div className='flex justify-center items-center h-16 w-16 rounded-full border border-slate-800 bg-cyan-950/30 shrink-0'>
                        <PiGraduationCapBold size={34} className="text-cyan-400"/>
                    </div>

                    <div className='flex flex-col gap-1'>
                        <h2 className='text-3xl md:text-4xl font-semibold'>
                            4+
                        </h2>

                        <p className='text-md md:text-lg text-gray-400'>
                            years of learning
                        </p>
                    </div>
                </div>

                <div className='flex gap-5 justify-start p-5 items-center h-[140px] w-full mt-4 rounded-2xl border border-slate-800 bg-slate-900/20'>
                    <div className='flex justify-center items-center h-16 w-16 rounded-full border border-slate-800 bg-cyan-950/30 shrink-0'>
                        <BookOpen size={34} className="text-cyan-400"/>
                    </div>

                    <div className='flex flex-col gap-1'>
                        <h2 className='text-3xl md:text-4xl font-semibold'>
                            8.14
                        </h2>

                        <p className='text-md md:text-lg text-gray-400'>
                            CGPA (BCA)
                        </p>
                    </div>
                </div>

            </div>

            <div className='w-full lg:w-[70%] flex flex-col p-1 md:p-5 gap-6'>

                <div className='min-h-[240px] w-full bg-slate-900/20 border border-cyan-400/40 rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between p-6 md:px-8 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-500 gap-8'>

                    <div className='flex items-start gap-5'>
                        <div className='relative flex flex-col items-center shrink-0'>
                            <div className='w-[65px] h-[65px] rounded-full border border-cyan-400 flex items-center justify-center text-cyan-400 text-3xl'>
                                <PiGraduationCapLight size={34} className="text-cyan-400"/>
                            </div>

                            <div className='hidden md:block absolute top-[65px] w-[2px] h-[150px] bg-cyan-400'></div>
                        </div>

                        <div className='flex flex-col gap-2'>
                            <h2 className='text-2xl md:text-3xl font-semibold leading-tight'>
                                Master of Computer Applications (MCA)
                            </h2>

                            <h3 className='text-cyan-400 text-lg md:text-xl font-medium'>
                                GLS University
                            </h3>

                            <p className='text-slate-300 text-sm md:text-md leading-7 max-w-3xl'>
                                Currently pursuing MCA with focus on full-stack web development, modern technologies and software engineering concepts.
                            </p>
                        </div>
                    </div>

                    <div className='flex flex-col items-start md:items-end gap-5 md:gap-8 w-full md:w-auto'>
                        <div className='px-6 py-3 border border-cyan-400 rounded-2xl text-sm md:text-md text-white whitespace-nowrap'>
                            2025 - Present
                        </div>

                        <h2 className='text-md text-white'>
                            CGPA:
                            <span className='text-cyan-400 font-semibold'> Pursuing</span>
                        </h2>
                    </div>

                </div>

                <div className='min-h-[240px] w-full bg-slate-900/20 border border-cyan-400/40 rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between p-6 md:px-8 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-500 gap-8'>

                    <div className='flex items-start gap-5'>
                        <div className='relative flex flex-col items-center shrink-0'>
                            <div className='w-[65px] h-[65px] rounded-full border border-cyan-400 flex items-center justify-center text-cyan-400 text-3xl'>
                                <Book size={34} className="text-cyan-400"/>
                            </div>

                            <div className='hidden md:block absolute top-[65px] w-[2px] h-[150px] bg-cyan-400'></div>
                        </div>

                        <div className='flex flex-col gap-2'>
                            <h2 className='text-2xl md:text-3xl font-semibold leading-tight'>
                                Bachelor of Computer Applications (BCA)
                            </h2>

                            <h3 className='text-cyan-400 text-lg md:text-xl font-medium'>
                                ML Parmar (VNSGU), Surat
                            </h3>

                            <p className='text-slate-300 text-sm md:text-md leading-7 max-w-3xl'>
                                Built strong foundation in programming, databases, web development and problem-solving skills.
                            </p>
                        </div>
                    </div>

                    <div className='flex flex-col items-start md:items-end gap-5 md:gap-8 w-full md:w-auto'>
                        <div className='px-6 py-3 border border-cyan-400 rounded-2xl text-sm md:text-md text-white whitespace-nowrap'>
                            2022 - 2025
                        </div>

                        <h2 className='text-md text-white'>
                            CGPA:
                            <span className='text-cyan-400 font-semibold'> 8.14</span>
                        </h2>
                    </div>

                </div>

                <div className='min-h-[240px] w-full bg-slate-900/20 border border-cyan-400/40 rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between p-6 md:px-8 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-500 gap-8'>

                    <div className='flex items-start gap-5'>
                        <div className='relative flex flex-col items-center shrink-0'>
                            <div className='w-[65px] h-[65px] rounded-full border border-cyan-400 flex items-center justify-center text-cyan-400 text-3xl'>
                                <Book size={34} className="text-cyan-400"/>
                            </div>
                        </div>

                        <div className='flex flex-col gap-2'>
                            <h2 className='text-2xl md:text-3xl font-semibold leading-tight'>
                                Higher Secondary (12th)
                            </h2>

                            <h3 className='text-cyan-400 text-lg md:text-xl font-medium'>
                                GSEB Board
                            </h3>

                            <p className='text-slate-300 text-sm md:text-md leading-7 max-w-3xl'>
                                Completed higher secondary education with focus.
                            </p>
                        </div>
                    </div>

                    <div className='flex flex-col items-start md:items-end gap-5 md:gap-8 w-full md:w-auto'>
                        <div className='px-6 py-3 border border-cyan-400 rounded-2xl text-sm md:text-md text-white whitespace-nowrap'>
                            2020 - 2022
                        </div>

                        <h2 className='text-md text-white'>
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