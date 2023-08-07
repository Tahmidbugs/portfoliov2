import React from 'react'
import {motion} from 'framer-motion'
type Props = {}

export default function About({}: Props) {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1.5}}

        className='h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>About
        </h3>
        <motion.img src="/pic1.jpeg" initial={{
          x:-200  
        }}
        transition={{
            duration: 1.5,
        }}
        whileInView={{
            opacity:1, x:0
        }}
        className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg  md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]'
        />
        
        <div className='space-y-10 px-0 md:px-10'>
            <h4 className='text-4xl font-semibold'>Here is a {" "}<span className='underline decoration-[#F7AB0A]/50'>little</span> background</h4>
            <p className='text-base'>
                I am a student at the University of South Florida, pursuing a Bachelor's degree in Computer Science. I am a Full Stack Developer, UI/UX Designer, and Content Creator. I am passionate about creating beautiful and functional websites and applications. I am also passionate about creating content on YouTube and TikTok. I am currently looking for a Software Engineering Internship for Summer 2022.
            </p>
        </div>
        </motion.div>
  )
}