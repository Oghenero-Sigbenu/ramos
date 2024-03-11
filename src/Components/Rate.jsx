import { GiGreenhouse } from "react-icons/gi";

function Rate() {
  return (
    <div className="bg-white px-[.5rem] my-[4rem]  rounded-[10px] py-[1rem] justify-between max-w-[95%]  lg:max-w-[95%] mx-auto ">
      <h4 className=" w-full slide-in font-light text-[8rem] mb-[4rem] leading-[8rem]">
        We give you full <br /> <span className="text-offWhite"> control</span>{" "}
        over your data
      </h4>
      <div className="flex gap-2">
        <div className="w-[49%] p-[2rem] shadow-md bg-offWhite rounded-[25px]">
          <div className="  flex px-[5rem] ">
            <div className="px-[2rem] py-[.3rem] self-start shadow-sm bg-white rounded-[25px] ">
              <p className=" mt-[1rem] mb-[.5rem] text-center font-medium  text-[.8rem]">
                Conversion rate
              </p>
              <div className=" bg-yellow rounded-[25px] relative  px-[.5rem] py-[.5rem]">
                <div className="absolute -left-[.5rem] -top-[.5rem] w-[1.7rem] h-[1.7rem] bg-offWhite rounded-[50%] p-[.2rem]">
                  <GiGreenhouse className=" w-[1.2rem] h-[1.2rem] bg-white rounded-[50%] p-[.2rem]" />
                </div>
                <h4 className="font-normal text-[3rem] font-">
                  2,3<span className="text-[1.3rem] font-normal">%</span>
                </h4>
              </div>
              <p className=" mt-[1rem] text-center font-thin text-[.7rem] mb-[1rem]">
                Percentage of <br /> website visitors
              </p>
            </div>
            <div className="p-[1.5rem] -ml-[1.3rem] mt-[2.8rem] self-start shadow-md bg-white rounded-[25px] text-center ">
              <p className="font-thin text-[.5rem]">Sales revenue</p>
              <h4>$131.2k</h4>
              <div className="flex items-center mt-[.5rem]">
                <div className="rounded-[50%] w-[1.5rem]   mr-[.2rem] h-[1.5rem] bg-black"></div>
                <p className="font-thin text-[.6rem] mr-[2rem]">Min. price</p>
                <p className="font-normal text-[.6rem] float-right">1.200 $</p>
              </div>
              <div className="flex items-center mt-[.5rem] mb-[1rem]">
                <div className="rounded-[50%] w-[1.5rem] mr-[.2rem] h-[1.5rem] bg-black"></div>
                <p className="font-thin text-[.6rem] mr-[2rem]">Min. price</p>
                <p className="font-normal text-[.6rem] float-right">1.200 $</p>
              </div>
              <div className="flex items-center pt-[.5rem]   border-t-[.1px] ">
                <p className="font-thin text-[.6rem] mr-[2rem] ">
                  Engagement rate
                </p>
                <p className="font-normal text-[.6rem] float-right">47.84 %</p>
              </div>
            </div>
          </div>
          <div className="text-center">
            <h4 className="text-[1.2rem] mt-[1rem]">
              Improved customer service
            </h4>
            <p className="text-[.8rem] font-thin mt-[1rem]">
              Analytics helps optimize service processes by <br /> providing
              information on how to improve interactions <br /> with customers
              and increase their satisfaction.
            </p>
          </div>
        </div>
        <div className="w-[49%] p-[2rem] shadow-md bg-offWhite rounded-[25px]">
          <div className="  px-[5rem] ">
            <div className="  w-[59%] mx-auto self-start py-[4rem] shadow-md bg-white rounded-[25px] "></div>
            <div className=" w-[69%] mx-auto py-[1rem] pl-[1rem] pb-[3rem] -mt-[6rem] shadow-md shadow-[#7a7878] bg-white rounded-[25px] ">
              <div className="flex items-center ">
                <GiGreenhouse className=" w-[1.2rem] mr-[.5rem] h-[1.2rem] bg-offWhite rounded-[25%] p-[.2rem]" />
                <p>Finance reports</p>
              </div>
            </div>
            <div className=" w-[79%] mx-auto  pb-[6rem] pt-[1.5rem] shadow-[#e2e1e1] pl-[1rem] -mt-[2.5rem] bg-white  shadow-lg  rounded-[25px] ">
              <div className="flex items-center ">
                <GiGreenhouse className=" w-[1.2rem] mr-[.5rem] h-[1.2rem] bg-offWhite rounded-[25%] p-[.2rem]" />
                <p>Insights</p>
              </div>
            </div>
          </div>
          <div className="text-center">
            <h4 className="text-[1.2rem] mt-[1rem]">
              Monitoring key indicators
            </h4>
            <p className="text-[.8rem] font-thin mt-[1rem]">
              Analytics helps optimize service processes by <br /> providing
              information on how to improve interactions <br /> with customers
              and increase their satisfaction.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rate;
