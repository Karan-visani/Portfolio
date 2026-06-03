import React from 'react'
import pet from '../assets/pet.png'
import sms from '../assets/sms.png'
import ems from '../assets/ems.png'
import { BsJavascript } from 'react-icons/bs'
import { RiReactjsLine, RiTailwindCssFill } from 'react-icons/ri'
import { DiMongodb } from 'react-icons/di'
import { SiExpress } from 'react-icons/si'
import { FaNodeJs, FaSquareArrowUpRight } from 'react-icons/fa6'
import { GrGithub } from 'react-icons/gr'

const Projects = () => {
  return (
    <div id='projects' className='min-h-screen px-24 pt-18 pb-18 border-b border-cyan-400'>
        <div className='flex min-h-[91vh] flex-col'>

            <div className='flex-1 '>
                <p className='text-2xl font-semibold border-b-2 text-cyan-400 mb-4'>My Projects</p>

                <div className='flex flex-col gap-10'>

    <div className='flex gap-8 min-h-[500px] bg-slate-900/80 p-5 rounded-2xl border border-cyan-400'>
        <img src={pet} alt="" className='object-cover h-[460px] w-[760px] rounded-2xl p-2 hover:shadow-xl hover:shadow-cyan-700 transform duration-500 brightness-80'/>

        <div className='flex flex-col'>
            <div className='border-b-2 border-slate-600 pb-4'>
                <h2 className='text-3xl font-semibold p-2 border-l-8 border-cyan-800 leading-tight'>
                    Personal Expense Tracker <span className='text-cyan-400'>(AI Powered)</span>
                </h2>

                <p className='mt-2 text-lg leading-8 text-slate-300'>
                    An AI-powered expense tracker that helps users manage income and expenses while providing smart financial insights through an integrated AI assistant.
                </p>

                <div className='mt-1 flex flex-col gap-1 text-slate-300 text-[17px] leading-7'>
                    <p>• Implemented secure authentication using JWT Tokens and bcryptjs password hashing.</p>
                    <p>• Integrated AI Financial Assistant using OpenRouter API for smart expense-related query handling.</p>
                </div>
            </div>

            <div className='flex items-center'>
                <DiMongodb size={27} className='h-10 w-10 m-3 text-green-500'/>
                <SiExpress size={27} className='h-10 w-10 m-3 text-white'/>
                <RiReactjsLine size={27} className='h-10 w-10 m-3 text-cyan-500'/>
                <FaNodeJs size={27} className='h-10 w-10 m-3 text-green-400'/>
                <RiTailwindCssFill size={27} className='h-10 w-10 m-3 text-cyan-500'/>
            </div>

            <div className='flex items-center mt-5 gap-6'>
                <button onClick={()=>window.open("https://personal-expense-tracker-brown-six.vercel.app","_blank")} className='px-9 py-3 border-2 border-cyan-400 rounded-2xl text-lg font-semibold text-cyan-400 hover:scale-105 transition-all duration-300 flex items-center gap-3'>
                    Live Demo
                    <FaSquareArrowUpRight size={19}/>
                </button>

                <button onClick={()=>window.open("https://github.com/Karan-visani/PersonalExpenseTracker","_blank")} className='px-9 py-3 border-2 border-slate-500 rounded-2xl text-lg font-semibold text-white hover:scale-105 transition-all duration-300 flex items-center gap-3'>
                    View Code
                    <GrGithub size={19}/>
                </button>
            </div>
        </div>
    </div>

    <div className='grid grid-cols-2 gap-8'>

        <div className='bg-slate-900/80 p-5 rounded-2xl border border-cyan-400'>
            <img src={sms} alt="" className='object-fill h-[320px] w-full rounded-2xl brightness-80 hover:shadow-xl hover:shadow-cyan-700 transform duration-500'/>

            <h2 className='text-2xl font-semibold mt-5 border-l-8 border-cyan-800 ps-3'>
                Student Management System
            </h2>

            <p className='mt-4 text-slate-300 leading-7'>
                MERN stack CRUD application for managing student records with add, edit, delete and database integration features.
            </p>

            <div className='flex items-center mt-5'>
                <DiMongodb size={24} className='h-9 w-9 m-2 text-green-500'/>
                <SiExpress size={24} className='h-9 w-9 m-2 text-white'/>
                <RiReactjsLine size={24} className='h-9 w-9 m-2 text-cyan-500'/>
                <FaNodeJs size={24} className='h-9 w-9 m-2 text-green-400'/>
            </div>

            <div className='flex items-center gap-4 mt-6'>
                {/* <button className='px-6 py-3 border-2 border-cyan-400 rounded-2xl text-cyan-400 font-semibold flex items-center gap-3 hover:scale-105 transition-all duration-300'>
                    Live Demo
                    <FaSquareArrowUpRight size={17}/>
                </button> */}

                <button onClick={()=>window.open("https://github.com/Karan-visani/StudentManagementSystem","_blank")} className='px-6 py-3 border-2 border-slate-500 rounded-2xl text-white font-semibold flex items-center gap-3 hover:scale-105 transition-all duration-300'>
                    View Code
                    <GrGithub size={17}/>
                </button>
            </div>
        </div>

        <div className='bg-slate-900/80 p-5 rounded-2xl border border-cyan-400'>
            <img src={ems} alt="" className='object-fill h-[320px] w-full rounded-2xl brightness-80 hover:shadow-xl hover:shadow-cyan-700 transform duration-500'/>

            <h2 className='text-2xl font-semibold mt-5 border-l-8 border-cyan-800 ps-3'>
                Employee Task Management System
            </h2>

            <p className='mt-4 text-slate-300 leading-7'>
                Task and employee management application with admin dashboard, task assignment and employee task tracking features.
            </p>

            <div className='flex items-center mt-5'>
                <RiReactjsLine size={24} className='h-9 w-9 m-2 text-cyan-500'/>
                <BsJavascript size={24} className='h-9 w-9 m-2 text-yellow-400'/>
                <RiTailwindCssFill size={24} className='h-9 w-9 m-2 text-cyan-500'/>
            </div>

            <div className='flex items-center gap-4 mt-6'>
                {/* <button className='px-6 py-3 border-2 border-cyan-400 rounded-2xl text-cyan-400 font-semibold flex items-center gap-3 hover:scale-105 transition-all duration-300'>
                    Live Demo
                    <FaSquareArrowUpRight size={17}/>
                </button> */}

                <button onClick={()=>window.open("https://github.com/Karan-visani/EmployeeManagementSystem","_blank")} className='px-6 py-3 border-2 border-slate-500 rounded-2xl text-white font-semibold flex items-center gap-3 hover:scale-105 transition-all duration-300'>
                    View Code
                    <GrGithub size={17}/>
                </button>
            </div>
        </div>

    </div>

</div>

            </div>
            

        </div>
      
    </div>
  )
}

export default Projects
