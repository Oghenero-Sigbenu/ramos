import Bg from "../Assests/hero-bg.png";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { IoAnalytics } from "react-icons/io5";
import { GiNetworkBars } from "react-icons/gi";
function Hero() {
  return (
    <div className=" px-[.5rem] mt-[.5rem] my-[5rem]  text-black max-w-[95%]  lg:max-w-[95%] mx-auto ">
      <div className="flex justify-center  mt-[5rem]">
        <div>
          <div className="flex items-center ml-[4rem] relative">
            <BsFillLightningChargeFill className="fade -mr-[.9rem] bg-offWhite text-primary w-[5rem] h-[5rem] p-[1rem] rounded-[50%]" />
            <IoAnalytics className="  bg-primary fade w-[5rem] h-[5rem] p-[1rem] text-white rounded-[50%] " />
            <h3 className="ml-[1rem] slide-in text-[7rem]">
              Analytics <br />
            </h3>
          </div>
          <h3 className="relative text-[7rem] slide-in -mt-[2rem] mr-[2rem]">
            that <span className="text-offWhite">helps</span> you
          </h3>
        </div>
        <div className=" -mt-[1rem] fade">
          <img src={Bg} alt="screen" className="" />
        </div>
      </div>
      <h3 className="text-[6rem] fade -mt-[2rem] ml-[19rem] flex items-center">
        shape{" "}
        <GiNetworkBars className="fade bg-yellow w-[5rem] mx-[1.5rem] h-[5rem] p-[1rem] rounded-[50%]" />
        the future
      </h3>
    </div>
  );
}

export default Hero;
