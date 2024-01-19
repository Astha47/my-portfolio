
import Image from "next/image";

function Hero() {
  let gibberish = ""
  let randTextStatus = false

  const randtext = async () => {
    randTextStatus = true;

    while (randTextStatus) {
      
    }
  }

  return ( 
  <div className="Hero w-[100vw] h-fit md:h-[100vh] md:flex block md:fixed bg-gradient-to-br from-primary-dark via-black to-secondary-dark">
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

    <div className="text h-fit w-full flex md:h-full md:w-[50%]">
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
      </div>
    </div>
    
    <div className="image h-full w-[50%] hidden md:flex">
      <Image 
        src="/porto-cropted.png"
        alt="Hero"
        width={600}
        height={800}
        objectFit="fit"
        className="hero m-auto"
      />
    </div>
  </div> );
}

export default Hero;