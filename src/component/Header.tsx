import appLogo from "../assets/Company_logo.png";
import { IoIosClose } from "react-icons/io";
import { SlArrowDown } from "react-icons/sl";
import { IoSearch } from "react-icons/io5";
import { ReactNode, useState } from "react";

import blogIcon from "../assets/blog.png";
import lightningIcon from "../assets/lightning.png";
import videoIcon from "../assets/play-circlevideo.png";

export default function Header({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-20 border-b-2 border-white items-center justify-center  ">
      <div className="flex items-center justify-between  w-[97%] tablet:w-[90%] laptop:w-[80%]">
        <div className="flex  items-center gap-8  ">
          <Logo />
          <NavBar />
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}

export function Search({
  setDarkBgGround,
}: {
  setDarkBgGround: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [openSearchBox, setOpenSearchBox] = useState(false);
  return (
    <>
      <IoSearch
        color="white"
        size={28}
        onClick={() => {
          setOpenSearchBox(true);
          setDarkBgGround(true);
        }}
      />

      <div
        className={`absolute -top-12 right-[50%] translate-x-[50%] transition-all duration-300 ${
          openSearchBox && "top-32 "
        }`}
      >
        <div className="w-[300px] tablet:w-[500px] relative bg-white rounded-lg ">
          <div
            className="absolute right-0 -top-3 bg-white rounded-full"
            onClick={() => {
              setOpenSearchBox(false);
              setDarkBgGround(false);
            }}
          >
            <IoIosClose />
          </div>
          <div className="flex  gap-2 w-full p-2">
            <IoSearch color="black" size={28} />
            <input
              type="text"
              className="w-full outline-none"
              placeholder="search"
            />
          </div>
        </div>
      </div>
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
  const navItems = [
    { label: "Home", key: "home" },
    { label: "About Us", key: "about-us" },
    { label: "Case Studies", key: "case-studies" },
    {
      label: "Resources",
      key: "resources",
      depthLevel: 1,
      subNavItems: [
        {
          icon: blogIcon,
          label: "Blog",
          key: "Blog",
          text: "The latest industy new,updates and info.",
        },
        {
          icon: lightningIcon,
          label: "Customer stories",
          key: "customer-stories",
          text: "Learn how our customers are making big changes.",
        },
        {
          icon: videoIcon,
          label: "Video tuitorials",
          key: "video-tuitorials",
          text: "Get up and running on new features and techniques.",
        },
      ],
    },
  ];

  return (
    <ul className="flex  gap-8">
      {navItems.map((item) => {
        return (
          <div key={item.key}>
            <li
              className={`text-white text-xl font-inter laptop:font-medium flex items-center gap-2 ${
                item.label && "group relative"
              }`}
            >
              <a href={`#${item.key}`}>{item.label}</a>
              {item.depthLevel && <SlArrowDown size={16} />}
              {item.depthLevel && (
                <DropDownNav subNavItems={item.subNavItems} />
              )}
            </li>
          </div>
        );
      })}
    </ul>
  );
}

function DropDownNav({ subNavItems }) {
  return (
    <div className="absolute hidden  group-hover:flex flex-col  top-7 rounded-lg  w-[412px]">
      <div className="h-5"></div>
      <div className="flex  flex-col gap-4 bg-white p-8 ">
        {subNavItems.map((item) => {
          return (
            <div className="flex gap-6 items-baseline " key={item.key}>
              <img src={item.icon} alt="icon" />
              <div className="flex flex-col  ">
                <h4 className="font-semibold font-inter text-lg text-gray-900">
                  {item.label}
                </h4>
                <p className="text-gray-500 text-sm font-normal">{item.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
