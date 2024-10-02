"use client";

import Image from "next/image";
import ScrollMagic from "scrollmagic";
import { useEffect } from "react";

import partner1 from "../_assets/partner1.jpeg";
import partner2 from "../_assets/partner2.png";
import partner3 from "../_assets/partner3.png";
import partner4 from "../_assets/partner4.png";
import partner5 from "../_assets/partner5.png";
import partner6 from "../_assets/partner6.jpeg";
import JudulReus from "./JudulReus";
const dataPartner = [
  {
    image: partner1,
  },
  {
    image: partner2,
  },
  {
    image: partner3,
  },
  {
    image: partner4,
  },
  {
    image: partner5,
  },
  {
    image: partner6,
  },
];

function Partners() {
  useEffect(() => {
    var controller = new ScrollMagic.Controller();

    var scene = new ScrollMagic.Scene({
      triggerElement: ".partners-item",
    })
      .setClassToggle(".partners-item", "fade-in")
      .addTo(controller);
  }, []);
  return (
    <div className="h-full w-full px-5 py-3 md:px-10 md:py-8  xl:px-36 xl:py-32 2xl:px-48 2xl:py-40 bg-white">
      <JudulReus judul={"Our partners"}>
        are take care of our fund and help us with many questions
      </JudulReus>
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-x-3 gap-y-10 md:gap-x-8 md:gap-y-12 xl:gap-x-12 xl:gap-y-[70px] mt-4 sm:mt-10 items-center">
        {dataPartner.map((item, i) => (
          <div
            className=" w-32 h-10 md:w-[140px] md:h-20 xl:w-[234px] xl:h-24  2xl:w-[300px] 2xl:h-32 relative partners-item transition-all translate-y-24 duration-1000 ease-in-out"
            key={i}
          >
            <Image
              src={item.image}
              alt=""
              fill
              className="object-contain grayscale"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Partners;
