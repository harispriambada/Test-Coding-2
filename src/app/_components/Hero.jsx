"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import ScrollMagic from "scrollmagic";

import gambarAnjing from "../_assets/anjing.svg";
import facebook from "../_assets/facebook.svg";
import instagram from "../_assets/instagram.svg";
import patreon from "../_assets/patreon.svg";
import tele from "../_assets/tele.svg";
import youtube from "../_assets/youtube.svg";

function Hero() {
  useEffect(() => {
    var controller = new ScrollMagic.Controller();

    var ourScene = new ScrollMagic.Scene({
      triggerElement: ".hero",
      duration: 600,
    })
      .setClassToggle(".hero", "hero-masuk")
      .addTo(controller);
  }, []);

  return (
    <header className="h-screen bg-yellow w-full flex items-center justify-center relative p-0">
      <div className=" h-[200px] px-4 md:h-[391px] w-full md:px-[135px] ">
        <div className="w-full h-full ">
          <div className="flex justify-between h-full flex-col items-center ">
            <div className="flex items-center gap-1 md:gap-7 max-w-fit ">
              <div className="h-[60px] w-[60px]  md:w-[208px] md:h-[193px] relative  -translate-x-20 transition-all ease-out duration-1000 hero  ">
                <Image
                  fill
                  src={gambarAnjing}
                  alt="anjing"
                  className="slider gambar-1"
                />
              </div>

              <h1 className="text-xl  md:text-6xl w-[100px] md:w-[275px] font-semibold md:font-bold tracking-normal sm:tracking-wide translate-x-20 transition-all ease-out  duration-1000 hero">
                Innovative Solutions for <br /> Animals
              </h1>
            </div>
            <div className="flex flex-col items-center hero translate-y-20 transition-all ease-out  duration-700">
              <div className="max-w-fit  ">
                <h2 className="text-lg md:text-4xl tracking-tighter sm:tracking-wide">
                  charity organization
                </h2>
              </div>
              <div className="flex items-center  ">
                <Link href="/" className="p-1 sm:p-2 group ">
                  <Image
                    src={youtube}
                    width={50}
                    height={50}
                    alt=""
                    className="group-hover:scale-75 ease-in-out transition-all w-7 h-7 sm:w-12 sm:h-12 "
                  />
                </Link>
                <Link href="/" className="p-1 sm:p-2 group">
                  <Image
                    src={instagram}
                    width={50}
                    height={50}
                    alt=""
                    className="group-hover:scale-75 ease-in-out transition-all w-7 h-7 sm:w-12 sm:h-12"
                  />
                </Link>
                <Link href="/" className="p-1 sm:p-2 group">
                  <Image
                    src={facebook}
                    width={50}
                    height={50}
                    alt=""
                    className="group-hover:scale-75 ease-in-out transition-all w-7 h-7 sm:w-12 sm:h-12"
                  />
                </Link>
                <Link href="/" className="p-1 sm:p-2 group">
                  <Image
                    src={patreon}
                    width={50}
                    height={50}
                    alt=""
                    className="group-hover:scale-75 ease-in-out transition-all w-7 h-7 sm:w-12 sm:h-12"
                  />
                </Link>
                <Link href="/" className="p-1 sm:p-2 group">
                  <Image
                    src={tele}
                    width={50}
                    height={50}
                    alt=""
                    className="group-hover:scale-75 ease-in-out transition-all w-7 h-7 sm:w-12 sm:h-12"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="arrow-down absolute"></div>
    </header>
  );
}

export default Hero;
