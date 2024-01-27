'use client'

import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

function ProjectCard() {
  useEffect(() => {
    AOS.init({
         duration: 800,
         once: false,
       })
  }, [])
  return ( 
    <div className="ProjectCard rounded-2xl md:w-[90%] lg:w-[400px] xl:w-[500px] h-[90%] overflow-hidden m-auto bg-[#161b38] cursor-pointer hover:drop-shadow-cards transition-all ease-in-out duration-200 " data-aos="zoom-in">
      <div className="desc w-full h-[60%] backdrop-blur-lg bg-[#060318ac] top-[70%] hover:top-[41%] transition-all ease-in-out duration-200 relative"></div>
    </div> 
  );
}

export default ProjectCard;