import React from "react";


const HomeContent = () => {
  return (
    <>
      <div className="flex flex-col h-screen items-center justify-center lg:flex-row">.
        <div className="flex flex-col justify-center items-center h-1/2 w-full lg:items-start px-12">
          <p className="font-barlow-condensed text-xl tracking-widest0">
            SO, YOU WANT TO TRAVEL TO
          </p>
          <h1 className="font-bellefair text-6xl my-2 lg:text-9xl">SPACE</h1>
          <p className="w-full text-center font-barlow text-md leading-7 lg:text-justify lg:my-10 lg:w-2/3">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="flex relative md:h-screen lg:w-3/4 h-3/4">
            <p className="flex bg-white w-52 h-52 rounded-full items-center self-center justify-center font-bellefair text-xl text-black">EXPLORE</p>
        </div>
      </div>
    </>
  );
};

export default HomeContent;
