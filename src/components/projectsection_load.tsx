import ProjectCardLoad from "./projectcard_load";

function ProjectSectionLoad() {
  return ( 
    <div className="cardssectioncont block w-full h-fit">
      <div className="maincont w-full h-[320px] lg:h-[320px] xl:h-[400px] flex">
        <div className="leftblock w-full md:w-[calc(50%-1px)] flex h-full">
          <div className="progressbarhidden w-[20px] md:hidden flex">
            <div className="line w-[2px] h-full m-auto bg-[#8c869c]"></div>
          </div>
          <div className="realitem w-[calc(100%-20px)] pl-5 md:pl-0 md:w-full">
            {/* index 1 */}
            <ProjectCardLoad/>
          </div>
        </div>
        <div className='centerblock w-[2px] bg-[#8c869c] hidden md:block h-full'></div>
        <div className="rightblock w-[calc(50%-1px)] h-full hidden md:block">
          {/* index 2 */}
          <ProjectCardLoad/>
        </div>
      </div>

        <div className="secondarycont w-full h-[320px] lg:h-[320px] xl:h-[400px] md:hidden flex">
          <div className="leftblock w-full md:w-[calc(50%-1px)] flex h-full">
            <div className="progressbarhidden w-[20px] md:hidden flex">
              <div className="line w-[2px] h-full m-auto bg-[#8c869c]"></div>
            </div>
            <div className="realitem w-[calc(100%-20px)] pl-5 md:w-full">
              {/* index 2 */}
              <ProjectCardLoad/>
            </div>
          </div>
        </div>

    </div>
   );
}

export default ProjectSectionLoad;