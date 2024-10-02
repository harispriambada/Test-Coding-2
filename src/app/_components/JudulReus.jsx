function JudulReus({ children, judul }) {
  return (
    <div className="flex flex-col gap-2 md:gap-4">
      <h1 className="text-xl md:text-4xl xl:text-6xl 2xl:text-7xl font-bold ">
        {judul}
      </h1>
      <div className="w-full h-full">
        <p className="text-xs md:text-3xl xl:text-4xl 2xl:text-5xl tracking-wide font-normal md:leading-[3.5rem]">
          {children}
        </p>
      </div>
    </div>
  );
}

export default JudulReus;
