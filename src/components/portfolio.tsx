import Projects from "./projects";
import Footer from "./footer";

function Portfolio() {
  return ( 
    <div className="Porfolio block bg-[#0b0721c9] backdrop-blur-lg rounded-md z-10 h-fit">
      <Projects/>
      <Footer/>
    </div> );
}

export default Portfolio;