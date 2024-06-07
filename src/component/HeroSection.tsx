import { useState } from "react";
import heroBgImg from "../assets/hero.jpeg";
import Header from "./Header";
import Container from "./Container";
import SearchPop from "./SearchPopup";

export default function HeroSection() {
  const [darkBgGround, setDarkBgGround] = useState(false);
  const [openSearchBox, setOpenSearchBox] = useState(false);

  return (
    <div
      className={"w-full h-[728px] relative opacity-90 bg-cover bg-no-repeat "}
      style={{
        backgroundImage: `url(${heroBgImg})`,
      }}
    >
      {darkBgGround && (
        <div
          className="absolute top-0 w-full h-full bg-black opacity-30 z-30 "
          onClick={() => {
            setOpenSearchBox(false);
            setDarkBgGround(false);
          }}
        ></div>
      )}
      <div
        className="absolute top-0 w-full h-full bg-gradient-to-b from-hero-bg1 to-hero-bg2
] opacity-80 -z-20"
      ></div>
      <Header>
        <SearchPop
          setDarkBgGround={setDarkBgGround}
          setOpenSearchBox={setOpenSearchBox}
          openSearchBox={openSearchBox}
        />
      </Header>

      <Container />
    </div>
  );
}
