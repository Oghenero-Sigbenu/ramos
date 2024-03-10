function Rate() {
  return (
    <div className="bg-white px-[.5rem] my-[5rem]  rounded-[10px] py-[1rem] justify-between max-w-[95%]  lg:max-w-[95%] mx-auto ">
      <h4 className=" w-full slide-in font-light text-[8rem] leading-[8rem]">
        We give you full <br /> <span className="text-offWhite"> control</span>{" "}
        over your data
      </h4>
      <div className="flex">
        <div className="w-[39%] bg-black p-[2rem] shadow-md rounded-[25px]">
          <div className="flex justify-center gap-1">
            <div className="p-[1.5rem] rounded-[25px] text-center  border-[#3f3e3e] border-[.1px] bg-[#131111aa]">
              <div className="flex">
                <div className="bg-white -mr-[.9rem]  w-[3rem] h-[3rem] p-[1rem] rounded-[50%]"></div>
                <div className="bg-white w-[3rem] h-[3rem] p-[1rem] rounded-[50%]"></div>
              </div>
            </div>
            <div className="pl-[2rem] pr-[3rem]   py-[.5rem] rounded-[20px] text-center border-[#3f3e3e] border-[.1px] bg-[#131111aa]">
              <p className="text-white mt-[1rem] mb-[.5rem] font-light text-[.6rem]">
                Transactions
              </p>

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
    </div>
  );
}

export default Rate;
