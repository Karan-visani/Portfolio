import React from 'react'
import { MdEmail } from 'react-icons/md'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FaSquareArrowUpRight } from 'react-icons/fa6'

const Contact = () => {
  return (
    <div id='contact' className='min-h-screen p-15 border-b border-cyan-400/30'>

      <div className='flex flex-col items-center justify-center'>

        <p className='inline-block text-2xl font-semibold border-b-2 border-cyan-400 text-cyan-400 mb-4 pb-1'>
          Contact Me
        </p>

        <h1 className='text-5xl font-bold text-center leading-tight max-w-5xl'>
          Let's Build Something
          <span className='text-cyan-400'> Amazing </span>
          Together.
        </h1>

        <p className='text-slate-300 text-xl text-center leading-9 mt-6 max-w-3xl'>
          Open to freelance projects, collaborations and full-stack
          web development opportunities. Feel free to reach out
          and let's discuss your next idea.
        </p>

        <div className='mt-14 w-full max-w-6xl bg-slate-900/40 border border-cyan-400/30 rounded-3xl p-10 flex items-center justify-between backdrop-blur-md hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-500'>

          <div className='flex flex-col gap-6'>

            <div className='flex items-center gap-5'>

              <div className='w-16 h-16 rounded-2xl border border-cyan-400 flex items-center justify-center text-cyan-400'>
                <MdEmail size={32}/>
              </div>

              <div>
                <h2 className='text-2xl font-semibold'>
                  Email Me
                </h2>

                <p className='text-slate-400 text-lg mt-1'>
                  karanvisani@example.com
                </p>
              </div>

            </div>

            <div className='flex flex-col gap-5'>

              <h2 className='text-4xl font-bold leading-tight'>
                Available For
                <span className='text-cyan-400'> Freelance </span>
                & Full-Time Work
              </h2>

              <p className='text-slate-300 text-lg leading-8 max-w-2xl'>
                Looking to hire a MERN stack developer for modern web applications,
                dashboards, portfolios or custom software solutions? I'm open to
                freelance projects, collaborations and exciting opportunities.
              </p>

              <div className='flex items-center gap-5 mt-2'>

                <a
                  href="mailto:karanvisani719@gmail.com?subject=Hiring Inquiry"
                  className='px-8 py-4 border-2 border-cyan-400 rounded-2xl text-cyan-400 text-lg font-semibold flex items-center gap-4 hover:bg-cyan-400 hover:text-black hover:scale-105 transition-all duration-300'
                >
                  Hire Me
                  <FaSquareArrowUpRight size={20}/>
                </a>

                <a
                  href="mailto:karanvisani719@gmail.com"
                  className='px-8 py-4 border-2 border-slate-700 rounded-2xl text-white text-lg font-semibold flex items-center gap-4 hover:border-cyan-400 hover:text-cyan-400 hover:scale-105 transition-all duration-300'
                >
                  Contact Me
                  <MdEmail size={22}/>
                </a>

              </div>

            </div>

          </div>

          <div className='flex flex-col gap-5'>

            <a
              href="https://github.com/Karan-visani"
              target='_blank'
              className='w-16 h-16 rounded-2xl border border-slate-700 flex items-center justify-center text-white hover:border-cyan-400 hover:text-cyan-400 hover:scale-110 transition-all duration-300'
            >
              <FaGithub size={28}/>
            </a>

            <a
              href="https://www.linkedin.com/in/karan-visani-758896343/"
              target='_blank'
              className='w-16 h-16 rounded-2xl border border-slate-700 flex items-center justify-center text-white hover:border-cyan-400 hover:text-cyan-400 hover:scale-110 transition-all duration-300'
            >
              <FaLinkedin size={28}/>
            </a>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Contact