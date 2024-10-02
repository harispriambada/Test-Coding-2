"use client";
import Image from "next/image";

import arrowLeft from "../_assets/arrowLeft.png";

import { useEffect } from "react";
import ScrollMagic from "scrollmagic";
import JudulReus from "./JudulReus";

const data = [
  {
    nama: "Shelter of Victoria Bulbyna",
    link: "/",
  },
  {
    nama: "Shelter of Victoria Bulbyna",
    link: "/",
  },
  {
    nama: "Shelter of Victoria Bulbyna",
    link: "/",
  },
  {
    nama: "Shelter of Victoria Bulbyna",
    link: "/",
  },
  {
    nama: "Shelter of Victoria Bulbyna",
    link: "/",
  },
  {
    nama: "Shelter of Victoria Bulbyna",
    link: "/",
  },
  {
    nama: "Shelter of Victoria Bulbyna",
    link: "/",
  },
  {
    nama: "Shelter of Victoria Bulbyna",
    link: "/",
  },
  {
    nama: "Shelter of Victoria Bulbyna",
    link: "/",
  },
  {
    nama: "Shelter of Victoria Bulbyna",
    link: "/",
  },
  {
    nama: "Shelter of Victoria Bulbyna",
    link: "/",
  },
  {
    nama: "Shelter of Victoria Bulbyna",
    link: "/",
  },
  {
    nama: "Shelter of Victoria Bulbyna",
    link: "/",
  },
  {
    nama: "Shelter of Victoria Bulbyna",
    link: "/",
  },
  {
    nama: "Shelter of Victoria Bulbyna",
    link: "/",
  },
  {
    nama: "Shelter of Victoria Bulbyna",
    link: "/",
  },
  {
    nama: "Shelter of Victoria Bulbyna",
    link: "/",
  },
  {
    nama: "Shelter of Victoria Bulbyna",
    link: "/",
  },
  {
    nama: "Shelter of Victoria Bulbyna",
    link: "/",
  },
  {
    nama: "Shelter of Victoria Bulbyna",
    link: "/",
  },
  {
    nama: "Shelter of Victoria Bulbyna",
    link: "/",
  },
  {
    nama: "Shelter of Victoria Bulbyna",
    link: "/",
  },
  {
    nama: "Shelter of Victoria Bulbyna",
    link: "/",
  },
  {
    nama: "Shelter of Victoria Bulbyna",
    link: "/",
  },
  {
    nama: "Shelter of Victoria Bulbyna",
    link: "/",
  },
  {
    nama: "Shelter of Victoria Bulbyna",
    link: "/",
  },
  {
    nama: "Shelter of Victoria Bulbyna",
    link: "/",
  },
  {
    nama: "Shelter of Victoria Bulbyna",
    link: "/",
  },
  {
    nama: "Shelter of Victoria Bulbyna",
    link: "/",
  },
  {
    nama: "Shelter of Victoria Bulbyna",
    link: "/",
  },
];
function Shelters() {
  useEffect(() => {
    let control = new ScrollMagic.Controller();

    let scene = new ScrollMagic.Scene({
      triggerElement: ".item-shelter",
    });
    scene.setClassToggle(".item-shelter", "fade-in").addTo(control);

    let scene2 = new ScrollMagic.Scene({
      triggerElement: ".button-animation",
      duration: 0,
    });
    scene2.setClassToggle(".button-animation", "hero-masuk").addTo(control);
  }, []);

  return (
    <div className="h-full w-full px-5 py-3 md:px-10 md:py-8  xl:px-36 xl:py-32 2xl:px-48 2xl:py-40 bg-yellow">
      <JudulReus judul={"We want to help"}>
        homeless packs, volunteers, guardians, overstayers, shelters and other
        organisations
      </JudulReus>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-11 mt-4 sm:mt-8 ">
        {data.map((item, index) => (
          <div
            className="bg-white translate-y-24  item-shelter transition-all ease-in-out duration-100 "
            key={index}
          >
            <div className="border-2 sm:border-[4px] border-black p-3 sm:p-7 hover:translate-x-5 hover:-translate-y-3 transition-all ease-in-out cursor-pointer">
              <p className="text-lg sm:text-xl font-normal tracking-wider text-wrap text-center">
                {item.nama}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full">
        <button className="-translate-x-20  transition-all duration-700 ease-in delay-0 px-3 py-2 sm:px-8 sm:py-4 group flex items-center justify-center font-bold gap-3 text-lg sm:text-2xl border-2 sm:border-[4px] mt-10 sm:mt-24 border-black bg-[#ee9acb] button-animation">
          <span>apply for help</span>
          <span>
            <Image
              src={arrowLeft}
              alt=""
              width={45}
              height={27}
              className="rotate-180 group-hover:translate-x-4 transition-all ease-in-out"
            />
          </span>
        </button>
      </div>
    </div>
  );
}

export default Shelters;
