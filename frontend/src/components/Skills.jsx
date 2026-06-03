import skillsIMG from '../assets/skillsIMG.png'
import { Cog, Computer, Laptop, Lightbulb, Star } from 'lucide-react'
import {FaGithubSquare, FaHtml5, FaReact} from 'react-icons/fa'
import { RiTailwindCssFill } from 'react-icons/ri'
import { IoLogoJavascript } from 'react-icons/io5'
import { FaGitAlt, FaNodeJs } from 'react-icons/fa6'
import { SiExpress, SiMongodb } from 'react-icons/si'
import { GrMysql } from 'react-icons/gr'
import { GoDatabase } from 'react-icons/go'
import { VscTools, VscVscode } from 'react-icons/vsc'
import { TbApi } from 'react-icons/tb'
import { MdOutlineSecurity } from 'react-icons/md'

const Skills = () => {
  return (

    <div id='skills' className='min-h-screen px-24 pt-18 pb-18 border-b border-cyan-400'>

      <div className='flex flex-col gap-4'>

        <div className='flex items-center justify-between gap-20'>

          <div className='flex-1'>

            <h2 className=' text-2xl font-semibold border-b-2 border-cyan-400 text-cyan-400 mb-6 pb-1'>
              My Skills
            </h2>

            <h1 className='text-5xl font-bold leading-tight max-w-2xl'>
              Skills That
              <span className='text-cyan-400'> Power </span>
              My Work.
            </h1>

            <p className='text-zinc-400 text-xl mt-8 leading-9 max-w-xl'>
              Passionate about building scalable and modern web applications
              using the MERN stack with focus on clean architecture,
              performance and seamless user experiences.
            </p>

          </div>

          <div className='flex-1 flex justify-center items-center'>

            <img
              src={skillsIMG}
              alt="Skills"
              className='w-[500px] h-[320px] object-cover rounded-3xl border border-cyan-400/30 shadow-2xl shadow-cyan-500/20 hover:shadow-cyan-500/60 transform duration-1000'
            />

          </div>

        </div>

        <div>

          <h2 className='inline-block text-2xl font-semibold border-b-2 border-cyan-400 text-cyan-400 mb-10 pb-1'>
            Technical Skills
          </h2>

          <div className='grid grid-cols-5 gap-8'>

            <div className='h-[280px] rounded-3xl border border-cyan-400 bg-slate-900/50 backdrop-blur-md '>
            <div className='flex justify-start items-center px-5 pt-5 pb-2 gap-5 text-xl border-b border-cyan-400'>
            <h2 className='text-cyan-400'><Laptop size={28}/></h2>
            <h2 >FRONTEND</h2>
            </div>

            <div className='flex justify-start items-center pb-5 ps-5 gap-5 text-xl mt-5'>
            <h2 className='text-cyan-400'><FaHtml5 className='text-orange-500' size={28} /></h2>
            <h2 >HTML5</h2>
            </div>
            <div className='flex justify-start items-center pb-5 ps-5 gap-5 text-xl'>
            <h2 className='text-cyan-400'><RiTailwindCssFill size={28}/></h2>
            <h2 >Tailwind CSS</h2>
            </div>
            <div className='flex justify-start items-center pb-5 ps-5 gap-5 text-xl'>
            <h2 className='text-cyan-400'><IoLogoJavascript className='text-yellow-400' size={28}/></h2>
            <h2 >JavaScript</h2>
            </div>
            <div className='flex justify-start items-center pb-5 ps-5 gap-5 text-xl'>
            <h2 className='text-cyan-400'><FaReact size={28}/></h2>
            <h2 >ReactJS</h2>
            </div>
            
            
            </div>

            <div className='h-[280px] rounded-3xl border border-cyan-400 bg-slate-900/50 backdrop-blur-md'>
            <div className='flex justify-start items-center px-5 pt-5 pb-2 gap-5 text-xl border-b border-cyan-400'>
            <h2 className='text-cyan-400'><Cog size={28}/></h2>
            <h2 >BACKEND</h2>
            </div>

            <div className='flex justify-start items-center pb-5 ps-5 gap-5 text-xl mt-5'>
            <h2 className='text-cyan-400'><FaNodeJs className='text-orange-500' size={28} /></h2>
            <h2 >NodeJS</h2>
            </div>
            <div className='flex justify-start items-center pb-5 ps-5 gap-5 text-xl'>
            <h2 className='text-cyan-400'><SiExpress className='text-white' size={28}/></h2>
            <h2 >Express</h2>
            </div>
            </div>

            <div className='h-[280px] rounded-3xl border border-cyan-400 bg-slate-900/50 backdrop-blur-md'>
            <div className='flex justify-start items-center px-5 pt-5 pb-2 gap-5 text-xl border-b border-cyan-400'>
            <h2 className='text-cyan-400'><GoDatabase size={28}/></h2>
            <h2 >DATABASE</h2>
            </div>

            <div className='flex justify-start items-center pb-5 ps-5 gap-5 text-xl mt-5'>
            <h2 className='text-cyan-400'><SiMongodb  className='text-green-500' size={28} /></h2>
            <h2 >MongoDB</h2>
            </div>
            <div className='flex justify-start items-center pb-5 ps-5 gap-5 text-xl'>
            <h2 className='text-cyan-400'><GrMysql className='text-white' size={28}/></h2>
            <h2 >MySQL</h2>
            </div>
            </div>

            <div className='h-[280px] rounded-3xl border border-cyan-400 bg-slate-900/50 backdrop-blur-md'>
            <div className='flex justify-start items-center px-5 pt-5 pb-2 gap-5 text-xl border-b border-cyan-400'>
            <h2 className='text-cyan-400'><VscTools size={28}/></h2>
            <h2 >TOOLS</h2>
            </div>

            <div className='flex justify-start items-center pb-5 ps-5 gap-5 text-xl mt-5'>
            <h2 className='text-cyan-400'><FaGitAlt  className='text-orange-600' size={28} /></h2>
            <h2 >Git</h2>
            </div>
            <div className='flex justify-start items-center pb-5 ps-5 gap-5 text-xl'>
            <h2 className='text-cyan-400'><FaGithubSquare  className='text-white' size={28}/></h2>
            <h2 >GitHub</h2>
            </div>
            <div className='flex justify-start items-center pb-5 ps-5 gap-5 text-xl'>
            <h2 className='text-cyan-400'><VscVscode   className='text-blue-500' size={28}/></h2>
            <h2 >VsCode</h2>
            </div>
            </div>

            <div className='h-[280px] rounded-3xl border border-cyan-400 bg-slate-900/50 backdrop-blur-md'>
            <div className='flex justify-start items-center px-5 pt-5 pb-2 gap-5 text-xl border-b border-cyan-400'>
            <h2 className='text-cyan-400'><Lightbulb size={28}/></h2>
            <h2 >CONCEPTS</h2>
            </div>

            <div className='flex justify-start items-center pb-5 ps-5 gap-5 text-xl mt-5'>
            <h2 className='text-cyan-400'><TbApi  className='text-gray-500' size={28} /></h2>
            <h2 >REST API</h2>
            </div>
            <div className='flex justify-start items-center pb-5 ps-5 gap-5 text-xl'>
            <h2 className='text-cyan-400'><MdOutlineSecurity  className='text-white' size={28}/></h2>
            <h2 >Authentication</h2>
            </div>
            
            </div>

          </div>

        </div>

        <div className='flex items-center bg-slate-900/80 border-l-8 border-cyan-400 w-full py-4 px-6 rounded-2xl shadow-lg shadow-cyan-900'>
        <Star size={22}/>
        <h2 className='text-lg font-medium ms-3'>Always learning. Always building</h2>
        </div>


      </div>

    </div>

  )
}

export default Skills