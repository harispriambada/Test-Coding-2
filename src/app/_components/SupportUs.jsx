"use client";
import Image from "next/image";
import personSupport from "../_assets/personSupport.jpg";
import personSupport2 from "../_assets/personSupport2.jpeg";
import ScrollMagic from "scrollmagic";
import { useEffect } from "react";
import JudulReus from "./JudulReus";

const dataSupportUs = [
  {
    nama: "Oleksiy Tritenko",
    photo: personSupport,
    pekerjaan: "theater and film actor",
  },
  {
    nama: "Oleksiy Tritenko",
    photo: personSupport,
    pekerjaan: "theater and film actor",
  },
  {
    nama: "Oleksiy Tritenko",
    photo: personSupport2,
    pekerjaan: "theater and film actor",
  },
  {
    nama: "Oleksiy Tritenko",
    photo: personSupport2,
    pekerjaan: "theater and film actor",
  },
  {
    nama: "Oleksiy Tritenko",
    photo: personSupport2,
    pekerjaan: "theater and film actor",
  },
  {
    nama: "Oleksiy Tritenko",
    photo: personSupport,
    pekerjaan: "theater and film actor",
  },
  {
    nama: "Oleksiy Tritenko",
    photo: personSupport2,
    pekerjaan: "theater and film actor",
  },
  {
    nama: "Oleksiy Tritenko",
    photo: personSupport2,
    pekerjaan: "theater and film actor",
  },
  {
    nama: "Oleksiy Tritenko",
    photo: personSupport,
    pekerjaan: "theater and film actor",
  },
  {
    nama: "Oleksiy Tritenko",
    photo: personSupport,
    pekerjaan: "theater and film actor",
  },
  {
    nama: "Oleksiy Tritenko",
    photo: personSupport,
    pekerjaan: "theater and film actor",
  },
  {
    nama: "Oleksiy Tritenko",
    photo: personSupport,
    pekerjaan: "theater and film actor",
  },
  {
    nama: "Oleksiy Tritenko",
    photo: personSupport,
    pekerjaan: "theater and film actor",
  },
  {
    nama: "Oleksiy Tritenko",
    photo: personSupport,
    pekerjaan: "theater and film actor",
  },
];
function SupportUs() {
  useEffect(() => {
    var controller = new ScrollMagic.Controller();

    var scene = new ScrollMagic.Scene({
      triggerElement: ".supports",
    })
      .setClassToggle(".supports", "fade-in")
      .addTo(controller);
  }, []);

  return (
    <div className="h-full w-full px-5 py-3 md:px-10 md:py-8  xl:px-36 xl:py-32 2xl:px-48 2xl:py-40 bg-[#ee9acb]">
      <JudulReus judul={"Socially active citizens"}>support us</JudulReus>

      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-x-3 sm:gap-x-7 gap-y-7 sm:gap-y-14 mt-5 sm:mt-10">
        {dataSupportUs.map((item, index) => (
          <div
            className="bg-transparent flex flex-col items-center md:gap-2 gap-4 translate-y-24 transition-all duration-100 supports ease-in-out"
            key={index}
          >
            <div className="w-44 xl:w-[234px] 2xl:w-[380px] aspect-square relative">
              <Image
                src={item.photo}
                fill
                alt=""
                className="bg-cover grayscale"
              />
            </div>
            <div className="flex flex-col gap-2 text-center items-center">
              <h2 className="text-xl">{item.nama}</h2>
              <p className="text-lg">{item.pekerjaan}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SupportUs;
