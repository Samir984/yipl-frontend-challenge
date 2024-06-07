import { IoArrowForwardSharp } from "react-icons/io5";

export default function LearnMoreBtn({ label }: { label?: string }) {
  return (
    <button className="flex gap-2 items-center">
      <span className="text-[#1D6FA3] font-inter font-semibold">
        {label || "Learn more"}
      </span>
      <IoArrowForwardSharp color="#1D6FA3" />
    </button>
  );
}
