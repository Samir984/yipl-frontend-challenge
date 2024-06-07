import { IoArrowForwardSharp } from "react-icons/io5";
export default function Container() {
  return (
    <div className="absolute  w-full top-[50%] -translate-y-[50%]  z-10">
      <div className="flex flex-col  laptop:gap-5  gap-3 items-center max-w-[1120px] mx-auto text-center">
        <h1 className="  font-semibold  laptop:text-6xl tablet:text-5xl text-3xl font-inter px-5 text-white">
          Beautiful analytics to grow smarter
        </h1>
        <p className="text-white latptop:font-medium  font-base w-[80%]">
          Powerful, self-serve product and growth analytics to help you convert,
          engage, and retain more users. Trusted by over 4,000 startups.
        </p>

        <button className="flex  gap-3 items-center justify-center p-3 w-52 text-white font-inter font-semibold border-2 rounded-md border-yellow-700 transition-colors duration-300 hover:border-yellow-600">
          <span>Why Catalog?</span> <IoArrowForwardSharp />
        </button>
      </div>
    </div>
  );
}
