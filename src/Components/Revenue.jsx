import { BsPlus } from "react-icons/bs";

function Revenue() {
  return (
    <div className=" px-[.5rem] text-black font- w-full mx-auto bg-offWhite pt-[5rem] rounded-[25px]">
      <div className=" max-w-[95%] flex lg:max-w-[95%] mx-auto">
        <div className="w-[30%] ">
          <h4 className="mb-[3rem]  text-[2rem] font-normal leading-[2rem]">
            Turning Data into real <br /> actions and ideas.
          </h4>
          <div className="bg-white mb-[1rem] items-center flex justify-between p-[.5rem] rounded-[15px]">
            <p>Instant Insights</p>
            <BsPlus className="w-[2rem] h-[2rem] bg-offWhite rounded-[50%] p-[.4rem]" />
          </div>
          <div className="bg-white mb-[1rem] items-center flex justify-between p-[.5rem] rounded-[15px]">
            <p>AI technology</p>
            <BsPlus className="w-[2rem] h-[2rem] bg-offWhite rounded-[50%] p-[.4rem]" />
          </div>
          <div className="bg-white items-center flex justify-between p-[.5rem] rounded-[15px]">
            <p>Easy integration</p>
            <BsPlus className="w-[2rem] h-[2rem] bg-offWhite rounded-[50%] p-[.4rem]" />
          </div>
        </div>
        <div className="w-[68%]"></div>
      </div>
      <h3 className="text-[27rem] text-primary w-full -mt-[5rem]">Ramos</h3>
    </div>
  );
}

export default Revenue;
