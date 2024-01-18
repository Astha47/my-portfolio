
import Image from "next/image";

function Hero() {
  return ( 
  <div className="Hero w-[100vw] h-[100vh] flex fixed">
    <div className="text h-full w-[50%] flex">
      <div className="container m-auto w-[70%] mr-0 h-fit">
        <h5 className="text text-sky-700 font-bold">I am</h5>
        <h1 className="name text-[60pt] font-mono font-extrabold">Fathur</h1>
      </div>
    </div>
    <div className="image h-full w-[50%] flex">
    <Image 
      src="/porto-cropted.png"
      alt="Hero"
      width={900}
      height={1200}
      objectFit="fit"
      className="hero h-[80%] w-auto m-auto"
    />
    </div>
  </div> );
}

export default Hero;