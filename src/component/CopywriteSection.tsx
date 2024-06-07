import ccLogo from "../assets/cc-logo.png";
import { HiArrowUp } from "react-icons/hi2";
export default function CopywriteSection() {
  return (
    <div className=" relative py-8 px-32 bg-[#F9F9FF]">
      <div className="max-w-[1340px] flex justify-between mx-auto">
        <div className="text-gray-400 font-medium">Terms and Conditions</div>
        <img src={ccLogo} alt="logo" className="w-24 h-6" />
      </div>
      <div className="flex justify-center items-center w-10 h-10 bg-white rounded-full shadow-md absolute bottom-7 right-7 ">
        <HiArrowUp />
      </div>
    </div>
  );
}
