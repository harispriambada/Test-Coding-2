"use client";
import youtube from "../_assets/youtube.svg";
import tele from "../_assets/tele.svg";
import patreon from "../_assets/patreon.svg";
import facebook from "../_assets/facebook.svg";
import instagram from "../_assets/instagram.svg";
import footerImage from "../_assets/footer.svg";

import { useEffect } from "react";

import Link from "next/link";
import Image from "next/image";

import ScrollMagic from "scrollmagic";

const dataSocialMedia = [
  {
    image: youtube,
  },
  {
    image: instagram,
  },
  {
    image: facebook,
  },
  {
    image: patreon,
  },
  {
    image: tele,
  },
];
function Footer() {
  useEffect(() => {
    let control = new ScrollMagic.Controller();

    let scene = new ScrollMagic.Scene({
      triggerElement: ".image",
      triggerHook: 800,
    })
      .setClassToggle(".image", "hero-masuk")
      .addTo(control);
  }, []);
  return (
    <footer className="h-full w-full px-5 py-3 md:px-10 md:py-8  xl:px-36 xl:py-32 2xl:px-48 2xl:py-40 bg-[#31be32]">
      <div className="flex md:flex-row flex-col items-start xl:items-center justify-between w-full 2xl:justify-center 2xl:gap-10 ">
        <div className="flex flex-col gap-3 xl:gap-5 ">
          <div className="flex flex-col gap-2 xl:gap-4">
            <h1 className="text-4xl md:text-6xl 2xl:text-9xl xl:leading-[3rem] tracking-wide font-bold ">
              Contact Us
            </h1>
            <p className="text-2xl md:text-4xl 2xl:text-7xl font-normal">
              Kyiv, Ukrine
            </p>
            <p className="text-2xl md:text-4xl 2xl:text-7xl font-normal">
              mail@isa.co.ua
            </p>
          </div>
          <div className="flex items-center justify-start">
            {dataSocialMedia.map((item, i) => (
              <Link href={"/"} key={i} className="p-2 group">
                <Image
                  src={item.image}
                  alt=""
                  width={48}
                  height={48}
                  className="group-hover:scale-75 transition-all ease-in-out w-4 h-4 md:w-10 md:h-10 xl:w-12 xl:h-12"
                />
              </Link>
            ))}
          </div>
        </div>
        <div className="w-56 h-32 md:w-96 md:h-56 xl:w-[529px] xl:h-[320px] 2xl:w-[729px] 2xl:h-[450px] relative translate-y-20 transition-all duration-1000 ease-in-out image">
          <Image src={footerImage} alt="" fill className="object-cover" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
