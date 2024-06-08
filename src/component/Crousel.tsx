import { RiArrowLeftWideFill } from "react-icons/ri";
import { RiArrowRightWideLine } from "react-icons/ri";
import companyIcon1 from "../assets/Company logo (1).png";
import companyIcon2 from "../assets/Company logo (2).png";
import companyIcon3 from "../assets/Company logo (3).png";
import companyIcon4 from "../assets/Company logo (4).png";
import companyIcon5 from "../assets/Company logo (5).png";
import { useState } from "react";

const companiesIcons = [
  companyIcon1,
  companyIcon2,
  companyIcon3,
  companyIcon4,
  companyIcon5,
  companyIcon3,
  companyIcon3,
  companyIcon4,
  companyIcon5,
  companyIcon1,
];

export default function Carousel() {
  const [translatePoint, setTranslatePoint] = useState(0);

  const scrollLeft = () => {
    if (translatePoint < 0) {
      setTranslatePoint((prev) => Math.min(prev + 192, 0));
    }
  };

  const scrollRight = () => {
    const maxTranslate = -(companiesIcons.length - 5) * 192;
    if (translatePoint > maxTranslate) {
      setTranslatePoint((prev) => Math.max(prev - 192, maxTranslate));
    }
  };

  const maxTranslate = -(companiesIcons.length - 5) * 192;
  const isLeftDisabled = translatePoint === 0;
  const isRightDisabled = translatePoint === maxTranslate;

  return (
    <div className="flex items-center justify-between gap-6 w-full laptop:max-w-[1157px] px-8 mx-auto">
      <RiArrowLeftWideFill
        size={24}
        onClick={scrollLeft}
        className={`cursor-pointer ${
          isLeftDisabled ? "text-gray-400" : "text-black"
        }`}
        style={{ pointerEvents: isLeftDisabled ? "none" : "auto" }}
      />

      <div className="w-[92%] overflow-hidden">
        <div
          className={`flex transition-transform duration-300 translate-x-[${translatePoint}px] `}
          style={{ transform: `translateX(${translatePoint}px)` }}
        >
          {companiesIcons.map((icon, i) => (
            <img src={icon} key={i} alt={`icon-${i}`} className="w-48 px-10" />
          ))}
        </div>
      </div>
      <RiArrowRightWideLine
        size={24}
        onClick={scrollRight}
        className={`cursor-pointer ${
          isRightDisabled ? "text-gray-400" : "text-black"
        }`}
        style={{ pointerEvents: isRightDisabled ? "none" : "auto" }}
      />
    </div>
  );
}
