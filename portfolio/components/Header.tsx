import React from 'react'
import { SocialIcon } from 'react-social-icons'

import {motion} from 'framer-motion'
import Link from 'next/link'
import { Resume, Social } from '@/typings'
import {FaDownload} from 'react-icons/fa'
import { urlFor } from '@/sanity'

type Props = {
  socials: Social[],
  resume: Resume
}

export default function Header({socials, resume}: Props) {
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'
    ><motion.div initial={{
      x:-500,
      opacity:0,
      scale:0.5
    }}
    animate={{
      x:0,
      opacity:1,
      scale:1
    }}
    transition={{
      duration: 1.5,
    }}

      className=" flex flex-row items-center">
        {/* Social Icons */}
        {socials.map((social)=>(
          <SocialIcon className="cursor-pointer"  key={social._id} url={social.url} fgColor="gray" bgColor="transparent"/>
        ))}

        </motion.div>
        
        <motion.div initial={{
      x:500,
      opacity:0,
      scale:0.5
        }}
        animate={{
          x:0,
          opacity:1,
          scale:1
        }}
        transition={{
          duration: 1.5,
        }}

        
        
        className='flex flex-row items-center text-gray-300 cursor-pointer'>
            <FaDownload className="cursor-pointer"
            color="gray"
            size={20}
            style={{marginRight:5}}
            />
            <p className='uppercase hidden md:inline-flex text-sm text-gray-400'><Link href={`${resume?.asset}`} download={"resume.pdf"}>Download Resume</Link></p>
        </motion.div>
       
        </header>
  )
}