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
export default function Crousel() {
  const [translatePoint, setTranslatePoint] = useState(0);
  const triggerStyle = `translate-x-[${translatePoint}px]`;
  const scrollLeft = function () {
    setTranslatePoint((prev) => prev - 192);
  };

  const scrollRight = function () {
    setTranslatePoint((prev) => prev + 192);
  };

  return (
    <div className="flex items-center justify-between gap-6 w- laptop:max-w-[1157px] px-8 mx-auto ">
      <RiArrowLeftWideFill size={24} onClick={scrollLeft} />

      <div className="w-[92%]  overflow-hidden ">
        <div
          className={`flex justify-between  transition-transform duration-300  ${triggerStyle}`}
        >
          {companiesIcons.map((icon, i) => {
            return (
              <img src={icon} key={i} alt="icons" className="w-48 px-10 " />
            );
          })}
        </div>
      </div>
      <RiArrowRightWideLine size={24} onClick={scrollRight} />
    </div>
  );
}
