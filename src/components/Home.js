import "atropos/atropos.css";
import "./css/home.css";
import Atropos from "atropos/react";
import Sea_bg from "../assets/images/sea-bg.png";
import Sea_fg from "../assets/images/sea-fg.PNG";
import Sea_mid from "../assets/images/sea-mid.PNG";
import Sea_mt from "../assets/images/sea-mt.PNG";
import Title from "../assets/images/title.PNG";

const Home = () => {
  return (
    <>
      <div className="hero min-h-screen">
        <div className="flex justify-center w-[40rem]">
          <Atropos
            className="atropos-banner"
          >
            <img data-atropos-offset="-5" src={Sea_bg} alt="" />
            <img data-atropos-offset="-3" src={Sea_mt} alt="" />
            <img data-atropos-offset="1" src={Sea_mid} alt="" />
            <img data-atropos-offset="4" src={Sea_fg} alt="" />
            <img data-atropos-offset="6" src={Title} alt="" />
          </Atropos>
        </div>
      </div>
    </>
  );
};

export default Home;
