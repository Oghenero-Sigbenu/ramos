import Logo from "../Assests/bg.png";

function Header() {
  return (
    <div className="bg-black px-[.5rem] mt-[.5rem] text-white rounded-[10px] flex items-center py-[1rem] justify-between max-w-[95%]  lg:max-w-[95%] mx-auto ">
      <div className=" w-[120px] ">
        <img src={Logo} alt="logo" className="w-full" />
      </div>
      <ul className="flex ">
        <li className="mr-[1rem]">Dashboard</li>
        <li className="mx-[1rem]">Reports</li>
        <li className="mx-[1rem]">Documents</li>
        <li className="mx-[1rem]">History</li>
        <li className="mx-[1rem]">Settings</li>
      </ul>
      <button className="bg-white cursor-pointer rounded-[5px] px-[1.5rem] py-[.5rem] text-black">
        Sign Up
      </button>
    </div>
  );
}

export default Header;
