'use client'

import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

function ProjectCardLoad() {
  useEffect(() => {
    AOS.init({
         duration: 800,
         once: false,
       })
  }, [])

  return ( 
    <div className="ProjectCard rounded-2xl md:w-[90%] lg:w-[400px] xl:w-[500px] h-[90%] overflow-hidden m-auto bg-[#161b38] cursor-pointer hover:drop-shadow-cards transition-all ease-in-out duration-200 animate-pulse" 
          data-aos="zoom-in"
          >
      <div className="desc block w-full h-[60%] backdrop-blur-lg bg-[#060318ac] top-[60%] transition-all ease-in-out duration-200 relative p-[4%]">
        <h1 className='judul font-medium lg:text-xl'></h1>
        <div className="attribute h-[80px] lg:h-[95px]">
          <div className="status flex h-[17px] mt-1">
            <div className="lampsection h-full aspect-square flex">
            </div>
            <div className="textstatus h-[12px] w-fit flex ml-1">
              <h4 className='status text-[9pt] m-auto'></h4>
            </div>
            
          </div>
        </div>
        <h3 className='desc font-light text-sm text-[#acabab]'></h3>
      </div>
    </div> 
  );
  
}

export default ProjectCardLoad;