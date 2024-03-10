import { IoAnalytics } from "react-icons/io5";

function Explore() {
  return (
    <div className="bg-white px-[.5rem] my-[5rem]  rounded-[10px] py-[1rem] justify-between max-w-[95%]  lg:max-w-[95%] mx-auto ">
      <h4 className=" w-full slide-in font-light text-[8rem] leading-[8rem]">
        Maximize <span className="text-offWhite"> efficiency</span> <br /> with
        our intuitive
      </h4>
      <div className="flex items-center mb-[1rem] justify-between ">
        <div className="flex my-[2rem]">
          <div className="-ml-[1rem] text-center flex items-center text-offWhite bg-offWhite w-[6rem] h-[6rem] p-[1rem] rounded-[50%] ">
            <IoAnalytics className="mx-auto text-white bg-primary w-[2rem] h-[2rem] p-[.2rem] rounded-[10px]" />
          </div>
          <div className="-ml-[1rem] text-center bg-yellow w-[6rem] h-[6rem] p-[1rem] rounded-[50%] ">
            <p className="font-bold text-center">45%</p>
            <p className="text-[.6rem] leading-[1rem]">System grow faster</p>
          </div>
        </div>
        <div>
          <button className="bg-yellow rounded-[35px] font-normal text-[4rem]">
            Analytics service
          </button>
        </div>
      </div>
      <hr></hr>
      <div className="flex items-center justify-between mt-[3rem]">
        <p className=" text-[.8rem] font-normal">
          Explore traffic sources, page behavior, conversions and more to gain
          deep insight <br />
          into your audience with us. Your business doesn't just adapt - it
          evolves
        </p>
        <div className="flex gap-1">
          <button className="py-[.5rem] rounded-[10px] px-[2rem] bg-offWhite">
            Request a demo
          </button>
          <button className="py-[.5rem] px-[2rem]  rounded-[10px] bg-primary">
            Start for free
          </button>
        </div>
      </div>
    </div>
  );
}

export default Explore;
