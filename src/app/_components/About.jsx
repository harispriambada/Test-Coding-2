"use client";

import { useEffect } from "react";
import ScrollMagic from "scrollmagic";
import JudulReus from "./JudulReus";

function About() {
  useEffect(() => {
    var controller = new ScrollMagic.Controller();

    var scene = new ScrollMagic.Scene({
      triggerElement: ".youtube-vid",
    })
      .setClassToggle(".youtube-vid", "hero-masuk")
      .addTo(controller);
  }, []);
  return (
    <div className="h-full w-full px-5 py-3 md:px-10 md:py-8  xl:px-36 xl:py-32 2xl:px-48 2xl:py-40 bg-white">
      <div className="flex flex-col w-full  gap-5 md:gap-9">
        <JudulReus judul={"We Are"}>
          team of like-minded people, socially active companies, media
          personalities, volunteers who help low-income shelters and foster
          carers to support homeless animals.
        </JudulReus>

        <JudulReus judul={"Our primary goal"}>
          is to provide animals with the most necessary things - food, medicine,
          and urgent needs for the livelihood of shelters. We believe in our
          power and the power of conscious citizens who care about the
          environment and their health, who understand the importance of helping
          each other, especially our little friends. Growth begins with your
          care for your loved ones. Animals are one of the closest creatures to
          humans who remain with us throughout our lives. We all know the
          healing power of warmth, grace, and big loving eyes.
        </JudulReus>

        <div className="flex flex-col gap-4">
          <div className="md:pl-20  ">
            <p className="text-xs md:text-4xl md:leading-[3.5rem] border-l-[4px] border-pink-500 p-4 pl-9 w-[90%] tracking-wide font-normal ">
              &quot;Animals need to have friends. Just like humans.&quot; -
              James Herriot, All Creatures Great and Small
            </p>
          </div>
          <p className="text-xs md:text-4xl md:leading-[3.5rem] tracking-wide font-normal ">
            Who else if not we should support our younger brothers, especially
            in difficult times? Let&apos;s be friends!
          </p>
        </div>
        <div className="translate-y-20 transition-all ease-out duration-1000 youtube-vid overflow-x-scroll ">
          <iframe
            className="h-[150px] w-full md:w-[600px] md:h-[300px] xl:w-[1073px] xl:h-[603px]"
            src="https://www.youtube.com/embed/5Wk1rp99B7o"
            title="Help the animals of Ukraine/ Допоможи тваринам України"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default About;
