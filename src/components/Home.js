import "atropos/atropos.css";
import "./css/home.css";
import Atropos from "atropos/react";
import Sea_bg from "../assets/images/sea-bg.png";
import Sea_fg from "../assets/images/sea-fg.PNG";
import Sea_mid from "../assets/images/sea-mid.PNG";
import Sea_mt from "../assets/images/sea-mt.PNG";
import Title from "../assets/images/title.PNG";
import Logo from '../assets/images/N.png';

const Home = () => {
  return (
    <>
     {/* Navbar */}
      <div className="z-50 fixed top-2 right-0 w-screen flex justify-between items-center">
        <img src={Logo} alt="" className = "sm:w-12 w-10 ml-10"></img>
        <div className="navbar flex justify-around py-4 md:px-4 px-1 w-1/2 md:text-xl text-sm rounded-l-full">
          <div>Services</div>
          <div>About</div>
          <div>FAQ</div>
          <div>Contact</div>
        </div>
      </div>
      <div className="md:min-h-screen flex justify-center items-center bg-gradient-to-b from-[#3eb2f5] to-[#1462a2]">
        <div className="md:my-0 my-36">
          <Atropos
            className="atropos-banner relative lg:w-[50rem] lg:h-[30rem] md:w-[35rem] md:h-[22.5rem] w-[24rem] h-[15rem]"
          >
            <img data-atropos-offset="-5" src={Sea_bg} alt="" />
            <img data-atropos-offset="-3" src={Sea_mt} alt="" />
            <img data-atropos-offset="1" src={Sea_mid} alt="" />
            <img data-atropos-offset="4" src={Sea_fg} alt="" />
            <img data-atropos-offset="6" src={Title} alt="" />
            <div data-atropos-offset="6" className="relative w-full h-full">
              <div className="hover md:px-4 md:py-2 px-2 py-1 md:text-base text-xs bg-[#3eb2f5] rounded-full absolute bottom-1/3 left-1/2 bg-[#F64C72] font-bold">Hover Over Me</div>
            </div>
          </Atropos>
        </div>
      </div>
      <div className="min-h-screen bg-red-200">

      </div>
    </>
  );
};

export default Home;
