import { useState } from "react";
import heroBgImg from "../assets/hero.jpeg";
import Header, { Search } from "./Header";

export default function HeroSection() {
  const [darkBgGround, setDarkBgGround] = useState(false);
  return (
    <div
      className={"w-full h-[728px] relative opacity-90 bg-cover bg-no-repeat "}
      style={{
        backgroundImage: `url(${heroBgImg})`,
      }}
    >
      {darkBgGround && (
        <div className="absolute top-0 w-full h-full bg-black opacity-60 -z-10"></div>
      )}
      <div
        className="absolute top-0 w-full h-full bg-gradient-to-b from-blue-900 to-blue-800
] opacity-70 -z-20"
      ></div>
      <Header>
        <Search setDarkBgGround={setDarkBgGround} />
      </Header>
    </div>
  );
}
