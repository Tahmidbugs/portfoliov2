import type { GetStaticProps } from "next";
import Head from "next/head";
import About from "../components/About";
import WorkExperience from "../components/WorkExperience";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import ContactMe from "../components/ContactMe";
import Link from "next/link";
import { Experience, PageInfo, Project, Skill, Social } from "../typings";
import { fetchPageInfo } from "../utils/fetchPageInfo";
import { fetchExperiences } from "../utils/fetchExperiences";
import { fetchSkills } from "../utils/fetchSkills";
import { fetchProjects } from "../utils/fetchProjects";
import { fetchSocial } from "../utils/fetchSocials";

import React from 'react'

import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'
import {MdOutlineLeaderboard} from 'react-icons/md'
import { useState } from 'react'


type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};

const Home = ({ pageInfo, experiences, skills, projects, socials }: Props) => {
  const [active, setActive] = useState('#')
  return (
    <div style={{backgroundImage:`url(${"https://www.transparenttextures.com/patterns/football-no-lines.png"})`}} className="bg-[rgb(26,26,26)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar-thin scroll-smooth sm:scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#AFAFDB]/60">
      <Head>
        <title>{`${pageInfo?.name} - Portfolio`}</title>
      </Head>

      <Header socials={socials} resume={pageInfo.resume} />

      <section id="hero" className="snap-start ">
        <Hero pageInfo={pageInfo} />
      </section>

      <section id="about" className="snap-center">
        <About  pageInfo={pageInfo} />
      </section>

      <section id="experience" className="snap-center">
        <WorkExperience experiences={experiences} />
      </section>

      <section id="skills" className="snap-start">
        <Skills skills={skills} />
      </section>

      <section id="projects" className="snap-start">
        <Projects  projects={projects}/>
      </section>

      <section id="contact" className="snap-start">
        <ContactMe />
      </section>

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
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocial();

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },
    // NEXT.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10,
  };
};
