import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTech } from "../redux/actions";

const TechnologyContent = () => {
  const [ship, setShip] = useState("Launch vehicle");
  const { tech } = useSelector((state) => state.tech);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTech(ship));
  }, [ship, dispatch]);

  return (
    <>
      <div className="flex flex-col h-screen items-center justify-center lg:flex-row">
        <div className="flex flex-col justify-center items-center h-2/3 w-full lg:items-start">
          <h4 className="font-barlow-condensed text-xl tracking-widest mb-2 lg:px-12">
            <b className="opacity-50">03</b> SPACE LAUNCH 01
          </h4>
          <div className="flex flex-col justify-center items-center lg:flex-row">
            <div className="flex items-center justify-center w-1/4 font-bellefair text-xl lg:flex-col">
              <p
                className="flex w-14 h-8 rounded-full border-white items-center justify-center cursor-pointer hover:bg-white lg:my-4 lg:h-14 hover:text-black"
                onClick={() => setShip("Launch vehicle")}
              >
                1
              </p>
              <p
                className="flex w-14 h-8 rounded-full border-white items-center justify-center cursor-pointer hover:bg-white lg:my-4 lg:h-14 hover:text-black"
                onClick={() => setShip("Spaceport")}
              >
                2
              </p>
              <p
                className="flex w-14 h-8 rounded-full border-white items-center justify-center cursor-pointer hover:bg-white lg:my-4 lg:h-14 hover:text-black"
                onClick={() => setShip("Space capsule")}
              >
                3
              </p>
            </div>
            <div className="w-full lg:w-3/4">
              <p className="font-bellefair mt-2 text-center text-sm tracking-widest lg:text-left lg:mt-10">
                THE TERMINOLOGY...
              </p>
              <p className="font-bellefair text-center text-4xl my-4 uppercase lg:text-left lg:mt-8">
                {tech[0].name}
              </p>
              <p className="w-full font-barlow text-center text-md px-4 leading-7 lg:w-3/4 lg:text-left">
                {tech[0].description}
              </p>
            </div>
          </div>
        </div>
        <div className="flex relative justify-center items-center h-1/3 w-full md:h-screen lg:w-3/4">
          <img
            className="w-full h-4/5 object-contain absolute lg:bottom-20 lg:right-0 lg:mb-6"
            src={tech[0].image}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default TechnologyContent;
