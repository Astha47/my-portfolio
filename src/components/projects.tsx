'use client'

import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import ProjectCard from './projectcard';
import ProjectSection from './projectsection';
import dataDummy from '../data/project.json'

function Projects() {
  useEffect(() => {
    AOS.init({
         duration: 800,
         once: false,
       })
  }, [])
  console.log(dataDummy)
  return ( 
  <div className="projects w-full h-fit block">
    <h1 className="judul pb-24 w-full h-fit text-center font-semibold text-3xl md:text-4xl lg:text-5xl">
      PROJECTS
    </h1>
    <div className="cardscontainer block w-full h-fit ">
      
      {/* <div className="cardssectioncont block w-full h-fit">
        <div className="maincont w-full h-[320px] lg:h-[320px] xl:h-[400px] flex">
          <div className="leftblock w-full md:w-[calc(50%-1px)] flex h-full">
            <div className="progressbarhidden w-[20px] md:hidden flex">
              <div className="line w-[2px] h-full m-auto bg-[#8c869c]"></div>
            </div>
            <div className="realitem w-[calc(100%-20px)] pl-5 md:pl-0 md:w-full">
              <ProjectCard/>
            </div>
          </div>
          <div className='centerblock w-[2px] bg-[#8c869c] hidden md:block h-full'></div>
          <div className="rightblock w-[calc(50%-1px)] h-full hidden md:block">
            <ProjectCard/>
          </div>
        </div>
        <div className="secondarycont w-full h-[320px] lg:h-[320px] xl:h-[400px] md:hidden flex">
          <div className="leftblock w-full md:w-[calc(50%-1px)] flex h-full">
            <div className="progressbarhidden w-[20px] md:hidden flex">
              <div className="line w-[2px] h-full m-auto bg-[#8c869c]"></div>
            </div>
            <div className="realitem w-[calc(100%-20px)] pl-5 md:w-full">
              <ProjectCard/>
            </div>
          </div>
        </div>
      </div> */}

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