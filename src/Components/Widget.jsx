import { HiOutlineSquare3Stack3D } from "react-icons/hi2";
import { BsArrowUpShort } from "react-icons/bs";
import Chart from "../Assests/chart.png";

function Widgets() {
  return (
    <div className=" px-[.5rem] text-black font- w-full mx-auto bg-offWhite py-[5rem] rounded-[40px]">
      <div className=" max-w-[95%]  lg:max-w-[95%] mx-auto">
        <div className="flex w-[70%] justify-between my-[3rem] items-center ">
          <h3 className=" text-[2.5rem] font-light leading-[2.5rem]">
            Your key to strategic
            <br /> success through analytics
          </h3>
          <p className="font-">
            Ready for exciting, instantaneous, <br /> all-accessible insights in
            real time?
          </p>
        </div>
        <div className="flex justify-between">
          <div className="flex justify-between w-[59%] bg-white  pl-[2rem] pt-[2rem] shadow-md rounded-[25px]">
            <div className="w-[49%]">
              <button className="bg-yellow rounded-[10px] px-[1rem] py-[.5rem]">
                Setting up reports
              </button>
              <h3 className=" mt-[3rem]  text-[1.5rem] font-light leading-[2rem] mb-[2rem]">
                Fast and easy access
                <br /> to analytics
              </h3>
              <p className=" font-extralight mb-[1rem]">
                One platform is a comprehensive <br /> system of solutions that
                will
                <br /> step towards digitalization of <br /> your business!
              </p>
            </div>
            <div className="border w-[49%] border-[#f0eded] border-l-1 border-t-1 border-b-0 border-r-0 pl-[1rem] pt-[1rem] rounded-tl-[25px]">
              <div>
                <h3 className=" text-[1rem] font-light leading-[2.5rem]">
                  Sales statistics
                </h3>
                <div className="flex justify-between">
                  <HiOutlineSquare3Stack3D className="bg-primary text-white w-[3rem] h-[3rem] p-[1rem] rounded-[50%]" />
                  <div>
                    <span className="text-[.8rem]  font-extralight">
                      Total profit
                    </span>
                    <h3 className="font-normal">$264,2k</h3>
                  </div>
                  <div className="bg-offWhite mr-[1rem] p-[1rem] rounded-[25px]">
                    <span>Vistors</span>
                    <div className="flex">
                      <h3>56K</h3>
                      <span>
                        {/* <BsArrowUpShort /> */}
                        +14%
                      </span>
                    </div>
                  </div>
                </div>
                <div className="w-full mb-[rem]">
                  <img
                    src={Chart}
                    alt="chart"
                    className="w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-[39%] bg-black p-[2rem] shadow-md rounded-[25px]">
            <div className="flex justify-center gap-1">
              <div className="p-[1.5rem] rounded-[25px] text-center  border-[#3f3e3e] border-[.1px] bg-[#131111aa]">
                <HiOutlineSquare3Stack3D className="  mx-auto text-yellow w-[3.5rem] h-[3.5rem] text-[2rem] p-[1rem] " />
                <div className="flex">
                  <div className="bg-white -mr-[.9rem]  w-[3rem] h-[3rem] p-[1rem] rounded-[50%]"></div>
                  <div className="bg-white w-[3rem] h-[3rem] p-[1rem] rounded-[50%]"></div>
                </div>
              </div>
              <div className="pl-[2rem] pr-[3rem]   py-[.5rem] rounded-[20px] text-center border-[#3f3e3e] border-[.1px] bg-[#131111aa]">
                <p className="text-white mt-[1rem] mb-[.5rem] font-light text-[.6rem]">
                  Transactions
                </p>
                <div className="w-full">
                  <span className="float text-[green] text-[.7rem] items-center -mr-[2rem] float-right flex">
                    <BsArrowUpShort className="bg-[green] text-white rounded-[50%]" />
                    +14%
                  </span>
                </div>

                <h4 className="font-normal text-[2rem] text-white">43k</h4>
              </div>
            </div>
            <div className="text-white text-center">
              <h4 className=" mt-[3rem] mb-[1rem]">Widget control</h4>
              <p className=" text-[1rem]  font-thin">
                Reports provide a comprehensive overview <br /> of important
                aspects of web analytics
              </p>
            </div>
          </div>
        </div>
        <div className="w-[56%] mx-auto my-[3rem]">
          <div className="flex just">
            <p className="  flex items-end text-[1.5rem]">Up to </p>
            <h3 className=" text-[6rem] font-normal mr-[2rem]">45%</h3>
            <p className="items-center font-light flex">
              Increase your analytics efficiency by up to 45%. Unique <br />{" "}
              algorithms provide insights from data, reduce time for analysis{" "}
              <br /> and save time for making important, informed decisions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Widgets;
