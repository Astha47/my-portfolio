function Navbar() {
  return ( 
  <div className="Navbar w-full h-[80px] backdrop-blur-lg fixed pr-10 pl-10 top-0 bg-[#2f19483e] pt-3 pb-3 flex">
    <div className="hamburgercont h-full aspect-[11/10] m-auto mr-0 flex">
      <div className="container w-full h-[70%] m-auto cursor-pointer hover:brightness-150 transition-all ease-in-out duration-150">
        <div className="layer1 bg-[#8d64d854] cursor-pointer w-full h-[20%]"></div>
        <div className="layer1 w-full h-[20%]"></div>
        <div className="layer1 bg-[#8d64d854] cursor-pointer w-full h-[20%]"></div>
        <div className="layer1 w-full h-[20%]"></div>
        <div className="layer1 bg-[#8d64d854] cursor-pointer w-full h-[20%]"></div>
      </div>
    </div>
  </div> );
}

export default Navbar;