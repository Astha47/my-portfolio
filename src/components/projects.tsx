'use client'

import { useState, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import ProjectCard from './projectcard';
import ProjectSection from './projectsection';
import dataDummy from '../data/project.json'
import axios from 'axios';

interface Project {
  _id: String;
  title: String;
  status: String;
  type: String;
  imgurl: String;
  desc: String;
  repo: String;
  url: String;
  __v: Number;
}

const initialProjects: Project[] = [];

function Projects() {

  const [projects, setProjects] = useState<Project[]>(initialProjects);

  const getProjects = async () => {
    try {
      const response = await axios.get<Project[]>('/api/projects');
      setProjects(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    AOS.init({
         duration: 800,
         once: false,
       })
    getProjects()
  }, [])
  console.log(projects)



  return ( 
  <div className="projects w-full h-fit block">
    <h1 className="judul pb-24 w-full h-fit text-center font-semibold text-3xl md:text-4xl lg:text-5xl">
      PROJECTS
    </h1>
    <div className="cardscontainer block w-full h-fit ">

      <ProjectSection/>
      <ProjectSection/>
      <ProjectSection/>
      <ProjectSection/>
      
      <div className="endline w-full h-[100px] flex">
        <div className="leftblock w-full md:w-[calc(50%-1px)] h-full">
          <div className="progressbarhidden w-[20px] h-full md:hidden flex">
            <div className="line w-[2px] h-full m-auto bg-[#8c869c]" data-aos="slide-down"></div>
          </div>
        </div>
        <div className='centerblock w-[2px] bg-[#8c869c]  hidden md:block h-full' data-aos="slide-down"></div>
        <div className="rightblock w-[calc(50%-1px)] h-full  hidden md:block"></div>
      </div>

      <div className="tail flex w-full h-fit">
        <div className="point w-[20px] aspect-square rounded-full bg-white md:m-auto" data-aos="zoom-out">
          <div className="point w-[20px] aspect-square rounded-full bg-white m-auto animate-ping"></div>
        </div>
      </div>
      <div className="blank h-[400px]"></div>
    </div>

  </div> );
}

export default Projects;