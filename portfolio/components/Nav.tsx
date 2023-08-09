import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'
import {MdOutlineLeaderboard} from 'react-icons/md'
import { useState } from 'react'


type Props = {}

export default function Nav({}: Props) {
    const [active, setActive] = useState('#')
    return (
        <div>
     <nav>
        
      <a href="#hero" onClick={()=>setActive('#')} className={active==='#'?'active':''}><AiOutlineHome/></a>
      <a href="#about" onClick={()=>setActive('#about')}className={active==='#about'?'active':''}><AiOutlineUser/></a>
      <a href="#experience" onClick={()=>setActive('#experience')} className={active==='#experience'?'active':''}><BiBook/></a>
      <a href="#skills" onClick={()=>setActive('#clubs')} className={active==='#clubs'?'active':''}><MdOutlineLeaderboard/></a>
      <a href="#projects" onClick={()=>setActive('#projects')} className={active==='#projects'?'active':''}><RiServiceLine/></a>      
      <a href="#contact" onClick={()=>setActive('#contact')}className={active==='#contact'?'active':''}><BiMessageSquareDetail/></a>
     </nav>
     </div>
    )
}
