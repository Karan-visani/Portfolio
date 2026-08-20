import React from 'react'
import pet from '../assets/pet.png'
import TS from '../assets/TS.png'
import WD from '../assets/WD.png'

import { BsJavascript } from 'react-icons/bs'
import {
    RiReactjsLine,
    RiTailwindCssFill
} from 'react-icons/ri'

import { DiMongodb } from 'react-icons/di'
import { SiExpress } from 'react-icons/si'

import {
    FaNodeJs,
    FaSquareArrowUpRight
} from 'react-icons/fa6'

import { GrGithub } from 'react-icons/gr'


const Projects = () => {

    return (
        <div
            id='projects'
            className='min-h-screen px-6 md:px-10 lg:px-18 pt-28 pb-10 border-b border-cyan-400'
        >

            <div className='flex flex-col gap-10'>

                {/* Section Heading */}
                <div>
                    <p className='inline-block text-xl md:text-2xl font-semibold border-b-2 border-cyan-400 text-cyan-400 mb-6'>
                        My Projects
                    </p>
                </div>


                {/* ================= PERSONAL EXPENSE TRACKER ================= */}

                <div className='flex flex-col xl:flex-row gap-8 min-h-[500px] bg-slate-900/80 p-4 md:p-5 rounded-2xl border border-cyan-400'>

                    <img
                        src={pet}
                        alt='Personal Expense Tracker'
                        className='object-cover h-[250px] md:h-[400px] xl:h-[460px] w-full xl:w-[760px] rounded-2xl hover:shadow-xl hover:shadow-cyan-700 transform duration-500 brightness-80'
                    />


                    <div className='flex flex-col flex-1'>

                        <div className='border-b-2 border-slate-600 pb-4'>

                            <h2 className='text-2xl md:text-3xl font-semibold p-2 border-l-8 border-cyan-800 leading-tight'>
                                Personal Expense Tracker{' '}
                                <span className='text-cyan-400'>
                                    (AI Powered)
                                </span>
                            </h2>


                            <p className='mt-3 text-md md:text-lg leading-7 md:leading-8 text-slate-300'>
                                An AI-powered expense tracker that helps users manage income and expenses while providing smart financial insights through an integrated AI assistant.
                            </p>


                            <div className='mt-3 flex flex-col gap-2 text-slate-300 text-sm md:text-[17px] leading-7'>

                                <p>
                                    • Implemented secure authentication using JWT Tokens and bcryptjs password hashing.
                                </p>

                                <p>
                                    • Integrated AI Financial Assistant using OpenRouter API for smart expense-related query handling.
                                </p>

                            </div>

                        </div>


                        {/* Technologies */}

                        <div className='flex items-center flex-wrap mt-2'>

                            <DiMongodb
                                size={27}
                                className='h-10 w-10 m-2 md:m-3 text-green-500'
                            />

                            <SiExpress
                                size={27}
                                className='h-10 w-10 m-2 md:m-3 text-white'
                            />

                            <RiReactjsLine
                                size={27}
                                className='h-10 w-10 m-2 md:m-3 text-cyan-500'
                            />

                            <FaNodeJs
                                size={27}
                                className='h-10 w-10 m-2 md:m-3 text-green-400'
                            />

                            <RiTailwindCssFill
                                size={27}
                                className='h-10 w-10 m-2 md:m-3 text-cyan-500'
                            />

                        </div>


                        {/* Buttons */}

                        <div className='flex flex-col sm:flex-row items-start sm:items-center mt-5 gap-4 md:gap-6'>

                            <button
                                onClick={() =>
                                    window.open(
                                        "https://personal-expense-tracker-brown-six.vercel.app",
                                        "_blank"
                                    )
                                }
                                className='w-full sm:w-auto px-7 md:px-9 py-3 border-2 border-cyan-400 rounded-2xl text-md md:text-lg font-semibold text-cyan-400 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3'
                            >
                                Live Demo

                                <FaSquareArrowUpRight size={19} />

                            </button>


                            <button
                                onClick={() =>
                                    window.open(
                                        "https://github.com/Karan-visani/PersonalExpenseTracker",
                                        "_blank"
                                    )
                                }
                                className='w-full sm:w-auto px-7 md:px-9 py-3 border-2 border-slate-500 rounded-2xl text-md md:text-lg font-semibold text-white hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3'
                            >
                                View Code

                                <GrGithub size={19} />

                            </button>

                        </div>

                    </div>

                </div>


                {/* ================= TECHSPHERE + WEATHER ================= */}

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>


                    {/* ================= TECHSPHERE ================= */}

                    <div className='bg-slate-900/80 p-4 md:p-5 rounded-2xl border border-cyan-400'>

                        {/* Project Image Placeholder */}

                        <img
                        src={TS}
                        alt='TECHSPHERE'
                        className='object-cover h-[250px] md:h-[400px] xl:h-[460px] w-full xl:w-[760px] rounded-2xl hover:shadow-xl hover:shadow-cyan-700 transform duration-500 brightness-80'
                    />


                        <h2 className='text-xl md:text-2xl font-semibold mt-5 border-l-8 border-cyan-800 ps-3'>

                            TechSphere{' '}

                            <span className='text-cyan-400'>
                                (Ongoing)
                            </span>

                        </h2>


                        <p className='mt-4 text-sm md:text-md text-slate-300 leading-7'>

                            AI-powered electronics marketplace built with the MERN stack, focused on authentication, product management, cart, orders, payments and other e-commerce features.

                        </p>


                        {/* Technologies */}

                        <div className='flex items-center flex-wrap mt-5'>

                            <DiMongodb
                                size={24}
                                className='h-9 w-9 m-2 text-green-500'
                            />

                            <SiExpress
                                size={24}
                                className='h-9 w-9 m-2 text-white'
                            />

                            <RiReactjsLine
                                size={24}
                                className='h-9 w-9 m-2 text-cyan-500'
                            />

                            <FaNodeJs
                                size={24}
                                className='h-9 w-9 m-2 text-green-400'
                            />

                            <RiTailwindCssFill
                                size={24}
                                className='h-9 w-9 m-2 text-cyan-500'
                            />

                        </div>


                        {/* Button */}

                        <div className='flex items-center gap-4 mt-6'>

                            <button
                                onClick={() =>
                                    window.open(
                                        "https://github.com/Karan-visani/TechSphere",
                                        "_blank"
                                    )
                                }
                                className='px-6 py-3 border-2 border-slate-500 rounded-2xl text-white font-semibold flex items-center gap-3 hover:scale-105 transition-all duration-300'
                            >

                                View Code

                                <GrGithub size={17} />

                            </button>

                        </div>

                    </div>


                    {/* ================= WEATHER DASHBOARD ================= */}

                    <div className='bg-slate-900/80 p-4 md:p-5 rounded-2xl border border-cyan-400'>

                        {/* Project Image Placeholder */}

                        <img
                        src={WD}
                        alt='Weather Dashboard'
                        className='object-cover h-[250px] md:h-[400px] xl:h-[460px] w-full xl:w-[760px] rounded-2xl hover:shadow-xl hover:shadow-cyan-700 transform duration-500 brightness-80'
                    />


                        <h2 className='text-xl md:text-2xl font-semibold mt-5 border-l-8 border-cyan-800 ps-3'>

                            Weather Dashboard

                        </h2>


                        <p className='mt-4 text-sm md:text-md text-slate-300 leading-7'>

                            Responsive weather dashboard built with React that allows users to search cities and view current weather conditions and upcoming forecasts using a weather API.

                        </p>


                        {/* Technologies */}

                        <div className='flex items-center flex-wrap mt-5'>

                            <RiReactjsLine
                                size={24}
                                className='h-9 w-9 m-2 text-cyan-500'
                            />

                            <BsJavascript
                                size={24}
                                className='h-9 w-9 m-2 text-yellow-400'
                            />

                            <RiTailwindCssFill
                                size={24}
                                className='h-9 w-9 m-2 text-cyan-500'
                            />

                        </div>


                        {/* Button */}

                        <div className='flex items-center gap-4 mt-6'>

                            <button
                                onClick={() =>
                                    window.open(
                                        "https://github.com/Karan-visani/Weather-Dashboard",
                                        "_blank"
                                    )
                                }
                                className='px-6 py-3 border-2 border-slate-500 rounded-2xl text-white font-semibold flex items-center gap-3 hover:scale-105 transition-all duration-300'
                            >

                                View Code

                                <GrGithub size={17} />

                            </button>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default Projects