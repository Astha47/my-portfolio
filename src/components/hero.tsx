'use client'
import Image from "next/image";

function Hero() {
  let gibberish = ""
  let randTextStatus = false

  const randtext = async () => {
    randTextStatus = true;

    while (randTextStatus) {
      
    }
  }

  const handleClick = () => {
    let scrollHeight;
    if (window.innerWidth < 769) {
      scrollHeight = window.innerHeight * 1.11; // 120vh
    } else {
      scrollHeight = window.innerHeight - 80; // 100vh - 80px
    }
    window.scrollTo({
      top: scrollHeight,
      behavior: 'smooth',
    });
  };
  

  return ( 
    <div className="Hero w-full h-fit md:h-[100vh] md:flex block md:sticky bg-gradient-to-br from-primary-dark via-black to-secondary-dark pb-16 md:pb-0 top-0 ">
    <div className="image h-fit w-full flex md:hidden pt-20">
      <Image 
        src="/porto-cropted.png"
        alt="Hero"
        width={600}
        height={800}
        objectFit="fit"
        className="hero w-[70%] m-auto"
      />
    </div>

    <div className="text h-fit w-full flex md:h-full md:w-[50%] animate-popdown">
      <div className="container m-auto w-[70%] md:mr-0 h-fit">
        <h5 className="text text-sky-700 font-bold">I am</h5>
        <h2 className="text text-white font-extrabold text-[60pt] mt-[-20px] ">
          Fathur
        </h2>
        <h2 className="text text-sky-300 font-medium text-[16pt] mb-[15px]">
          Anas Fathurrahman
        </h2>
        <h5 className="text text-sky-700 font-medium">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non pulvinar neque laoreet suspendisse interdum consectetur libero id. Eget aliquet nibh praesent tristique magna sit. Eget lorem dolor sed viverra ipsum nunc. Vitae elementum curabitur vitae nunc. {gibberish}
        </h5>
        <div className="arrowsect w-full h-fit flex md:pt-20 pt-10">
          <div className="arrowcont m-auto md:ml-[0] h-fit w-fit block cursor-pointer"
            onClick={handleClick}>
            <Image 
              src="/arrow.svg"
              alt="arrow"
              width={70}
              height={100}
              objectFit="fit"
              className="hero m-auto animate-glowarrow1"
            />
            <Image 
              src="/arrow.svg"
              alt="arrow"
              width={70}
              height={100}
              objectFit="fit"
              className="hero m-auto animate-glowarrow2 mt-1"
            />
            <Image 
              src="/arrow.svg"
              alt="arrow"
              width={70}
              height={100}
              objectFit="fit"
              className="hero m-auto animate-glowarrow3 mt-1"
            />
          </div>
        </div>
      </div>
    </div>
    
    <div className="image h-full w-[50%] hidden md:flex">
      <Image 
        src="/porto-cropted.png"
        alt="Hero"
        width={600}
        height={800}
        objectFit="fit"
        className="hero m-auto animate-popup"
      />
    </div>
  </div> );
}

export default Hero;