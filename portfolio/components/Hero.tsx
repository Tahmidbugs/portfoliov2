import React from 'react'
import {Cursor, useTypewriter} from "react-simple-typewriter"
import BackgroundCircles from './BackgroundCircles'
import Link from 'next/link'

type Props = {}

export default function Hero({}: Props) {
    const [text,count]= useTypewriter({
        words:["I'm a student at USF","I'm a Full Stack Developer","I'm a UI/UX Designer","I'm a Content Creator"],
        loop:true,
        deleteSpeed:50,
        typeSpeed:100
    })

  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <BackgroundCircles/>
        <img src="/pic1.jpg" alt="hero" className='relative rounded-full h-32 w-32 mx-auto object-cover'
            
        />
        <div className='z-20'>
            <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[10px]'>Hi I'm Tahmid</h2>
        <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
        <span className='mr-3'>
            {text}</span>
            <Cursor cursorColor='orange'/>
            </h1>

            <div className='pt-6'>
                <Link href="#about"><button className='heroButton'>About</button></Link>
                
                <Link href="#experience"><button className='heroButton'>Experience</button></Link>
                <Link href="#skills"><button className='heroButton'>Skills</button></Link>
                <Link href="#projects"><button className='heroButton'>Projects</button></Link>


            </div>
        </div>
    </div>
  )
}