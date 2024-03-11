import Logo from "../Assests/logo.png";

function GetStarted() {
  return (
    <div className=" px-[.5rem] text-center mb-[3rem]  text-black max-w-[95%]  lg:max-w-[95%] mx-auto ">
      <div className="mx-auto w-[200px] ">
        <img src={Logo} alt="logo" className="w-full" />
      </div>
      <h3 className="text-[6rem] slide-in justify-center -mt-[2rem] flex  mx-auto">
        Get Started
      </h3>
      <p className="text-center font-thin">
        Turn information into advantage! Start using <br />
        Ramos today. Sign up for a free trial.
      </p>
      <div className="flex justify-center gap-3 mt-[2rem]">
        <button className="rounded-[10px] px-[1rem] py-[.5rem] bg-offWhite">
          Request a demo
        </button>
        <button className="rounded-[10px] px-[1rem] py-[.5rem] bg-primary text-white">
          Request a demo
        </button>
      </div>
    </div>
  );
}

export default GetStarted;
