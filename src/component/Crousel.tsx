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
    setTranslatePoint((prev) => Math.min(prev + 192, 0));
  };

  const scrollRight = () => {
    setTranslatePoint((prev) =>
      Math.max(prev - 192, -(companiesIcons.length - 5) * 192)
    );
  };

  return (
    <div className="flex items-center justify-between gap-6 w-full laptop:max-w-[1157px] px-8 mx-auto">
      <RiArrowLeftWideFill
        size={24}
        onClick={scrollLeft}
        className="cursor-pointer"
      />

      <div className="w-[92%] overflow-hidden">
        <div
          className="flex transition-transform duration-300"
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
        className="cursor-pointer"
      />
    </div>
  );
}
