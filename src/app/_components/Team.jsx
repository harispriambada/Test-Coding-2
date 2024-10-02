"use client";
import Image from "next/image";
import photo from "../_assets/person.jpeg";
import { useEffect } from "react";
import ScrollMagic from "scrollmagic";
import JudulReus from "./JudulReus";

const dataTeam = [
  {
    nama: "Bohdan Kulchytsky ",
    posisi: "Executive Manager ",
    photo: photo,
  },
  {
    nama: "Bohdan Kulchytsky",
    posisi: "Executive Manager",
    photo: photo,
  },
  {
    nama: "Bohdan Kulchytsky",
    posisi: "Executive Manager",
    photo: photo,
  },
  {
    nama: "Bohdan Kulchytsky",
    posisi: "Executive Manager",
    photo: photo,
  },
  {
    nama: "Bohdan Kulchytsky",
    posisi: "Executive Manager",
    photo: photo,
  },
  {
    nama: "Bohdan Kulchytsky",
    posisi: "Executive Manager",
    photo: photo,
  },
  {
    nama: "Bohdan Kulchytsky",
    posisi: "Executive Manager",
    photo: photo,
  },
  {
    nama: "Bohdan Kulchytsky",
    posisi: "Executive Manager",
    photo: photo,
  },
  {
    nama: "Bohdan Kulchytsky",
    posisi: "Executive Manager",
    photo: photo,
  },
  {
    nama: "Bohdan Kulchytsky",
    posisi: "Executive Manager",
    photo: photo,
  },
  {
    nama: "Bohdan Kulchytsky",
    posisi: "Executive Manager",
    photo: photo,
  },
  {
    nama: "Bohdan Kulchytsky",
    posisi: "Executive Manager",
    photo: photo,
  },
];

function Team() {
  useEffect(() => {
    var controller = new ScrollMagic.Controller();

    var scene = new ScrollMagic.Scene({
      triggerElement: ".partners",
    })
      .setClassToggle(".partners", "fade-in")
      .addTo(controller);
  }, []);
  return (
    <div className="h-full w-full px-5 py-3 md:px-10 md:py-8  xl:px-36 xl:py-32 2xl:px-48 2xl:py-40 bg-white">
      <JudulReus judul={"Our team"}>
        consists of completely different people who are united by a common
        desire - to help
      </JudulReus>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-7 mt-4 sm:mt-12 ">
        {dataTeam.map((item, index) => (
          <div
            className="bg-yellow h-full group transition-all ease-in-out duration-100 translate-y-24 partners"
            key={index}
          >
            <div className="p-4 sm:p-7 border-2 sm:border-[4px] border-black flex flex-col items-center gap-4  sm:gap-8 xl:gap-12 h-full group-hover:scale-90 transition-all ease-in-out ">
              <div className="w-[120px] xl:w-[180px] 2xl:w-[400px] aspect-square relative ">
                <Image
                  src={item.photo}
                  alt=""
                  fill
                  className="object-cover grayscale"
                />
              </div>
              <div className="flex flex-col gap-2  md:gap-5 xl:gap-9 text-center items-center">
                <h2 className="text-lg sm:text-xl xl:text-4xl 2xl:text-5xl ">
                  {item.nama}
                </h2>
                <p className="text-sm sm:text-lg xl:text-2xl 2xl:text-4xl">
                  {item.posisi}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;
