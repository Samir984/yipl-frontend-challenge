import appLogo from "../assets/Company_logo.png";
import { SlArrowDown } from "react-icons/sl";

import { ReactNode } from "react";

import blogIcon from "../assets/blog.png";
import lightningIcon from "../assets/lightning.png";
import videoIcon from "../assets/play-circlevideo.png";
import DropDownNav from "./DropDownNav";

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

export function Logo() {
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
      dropDownNavItems: [
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
                <DropDownNav dropDownNavItems={item.dropDownNavItems} />
              )}
            </li>
          </div>
        );
      })}
    </ul>
  );
}
