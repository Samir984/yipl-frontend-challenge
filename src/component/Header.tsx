import appLogo from "../assets/Company_logo.png";

import { SlArrowDown } from "react-icons/sl";
import { SlArrowUp } from "react-icons/sl";
import { IoSearch } from "react-icons/io5";
import { useState } from "react";
import { DiVim } from "react-icons/di";

export default function Header() {
  return (
    <div className="flex h-20 border-b-2 border-white  items-center justify-center  ">
      <div className="flex items-center justify-between  w-[97%] tablet:w-[90%] laptop:w-[80%]">
        <div className="flex  items-center gap-8  ">
          <Logo />
          <NavBar />
        </div>

        <div>
          <Search />
        </div>
      </div>
    </div>
  );
}

function Search() {
  const [openSearchBox, setOpenSearchBox] = useState(false);
  return (
    <>
      <IoSearch
        color="white"
        size={28}
        onClick={() => setOpenSearchBox(true)}
      />
      {openSearchBox && (
        <div className="w-80 relative ">
          <div className="w-full">
            <IoSearch color="white" size={28} />
            <input type="text"  className=""/>
          </div>
        </div>
      )}
    </>
  );
}

function Logo() {
  return (
    <a href="#">
      <img src={appLogo} alt="logo" />
    </a>
  );
}

function NavBar() {
  const navItems = ["Home", "About Us", "Case Studies", "Resources"];
  return (
    <ul className="flex  gap-8">
      {navItems.map((item) => {
        return (
          <div key={item}>
            <li className="text-white text-xl font-bold hover:text-green-400 transition-all duration-200">
              <a href={`#${item}`}>{item}</a>
            </li>
          </div>
        );
      })}
    </ul>
  );
}
