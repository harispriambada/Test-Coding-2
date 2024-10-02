"use client";

import { useEffect } from "react";
import ScrollMagic from "scrollmagic";
import JudulReus from "./JudulReus";

const data = [
  {
    title: "Emergency Aid. WAR 2022.",
    paragraf:
      "providing food and medicine to the shelters and animals which lost their homes and families due to the war",
    background: "#000",
  },
  {
    title: "Non-commercial feed line",
    paragraf:
      "construction of industrial production base where food for shelters will be produced on a free basis",
    background: "#068d4e",
  },
  {
    title: "Education and Control",
    paragraf:
      "lectures on communication, organisation and coordination of processes, control over the use of aid",
    background: "#ee9acb",
  },
];

function Projects() {
  useEffect(() => {
    let control = new ScrollMagic.Controller();

    let scene1 = new ScrollMagic.Scene({
      triggerElement: ".item-project-0",
    })
      .setClassToggle(".item-project-0", "project-in")
      .addTo(control);
    let scene2 = new ScrollMagic.Scene({
      triggerElement: ".item-project-1",
    })
      .setClassToggle(".item-project-1", "project-in")
      .addTo(control);
    let scene3 = new ScrollMagic.Scene({
      triggerElement: ".item-project-2",
    })
      .setClassToggle(".item-project-2", "project-in")
      .addTo(control);
  }, []);
  return (
    <div className="h-full w-full px-5 py-3 md:px-10 md:py-8  xl:px-36 xl:py-32 2xl:px-48 2xl:py-40 bg-[#3e84f4]">
      <JudulReus judul={"Our projects"}>
        are very different in terms of priority, scale and complexity of
        implementation
      </JudulReus>

      <div className="flex flex-col gap-5 mt-8 md:gap-10 md:mt-20">
        {data.map((item, i) => (
          <div
            className={`w-full item-project-${i} -translate-x-20 transition-all ease-in-out duration-1000 `}
            style={{ background: item.background }}
            key={item.title}
          >
            <div className="border-2 md:border-[4px] hover:translate-x-5 hover:-translate-y-4 transition-all ease-in-out border-white w-full p-4 md:p-14 text-white flex flex-col gap-5 cursor-pointer ">
              <h2 className="text-sm md:text-5xl font-bold">{item.title}</h2>
              <p className="text-xs md:text-3xl tracking-wide font-normal  text-white">
                {item.paragraf}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
