import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDest } from "../redux/actions";

const DestinationContent = () => {
  const [destination, setDestination] = useState("Moon");
  const { dest } = useSelector((state) => state.dest);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDest(destination));
  }, [destination, dispatch]);

  return (
    <>
      <div className="flex flex-col h-screen items-center justify-center lg:flex-row">
        <div className="flex flex-col relative justify-center items-center h-1/2 w-full md:h-screen lg:h-screen">
          <h4 className="w-full font-barlow-condensed text-center text-xl my-10 mx-14 tracking-widest lg:text-left lg:px-12">
            <b className="opacity-50">01</b> PICK YOUR DESTINATION
          </h4>
          <img
            className="w-1/4 self-start lg:w-1/2 mb-20 h-screen object-contain self-center"
            src={dest[0].image}
            alt=""
          />
        </div>
        <div className="flex flex-col justify-center items-center h-1/2 w-full lg:items-start">
          <ul className="flex font-barlow-condensed text-lg tracking-widest">
            <li
              className="mr-4 cursor-pointer hover:border-b-2 border-white"
              onClick={() => setDestination("Moon")}
            >
              MOON
            </li>
            <li
              className="mr-4 cursor-pointer hover:border-b-2 border-white"
              onClick={() => setDestination("Mars")}
            >
              MARS
            </li>
            <li
              className="mr-4 cursor-pointer hover:border-b-2 border-white"
              onClick={() => setDestination("Europa")}
            >
              EUROPA
            </li>
            <li
              className="mr-4 cursor-pointer hover:border-b-2 border-white"
              onClick={() => setDestination("Titan")}
            >
              TITAN
            </li>
          </ul>
          <h1 className="font-bellefair my-2 text-4xl uppercase lg:text-8xl mt-10">
            {dest[0].name}
          </h1>
          <p className="w-full font-barlow px-4 text-center text-md leading-7 lg:w-2/3 lg:px-0 lg:text-justify">
            {dest[0].description}
          </p>
          <hr className="w-1/2 opacity-5"></hr>
          <div className="flex my-10">
            <div className="mr-6">
              <p className="font-barlow-condensed text-sm tracking-widest">
                AVG. DISTANCE
              </p>
              <p className="font-bellefair text-lg tracking-widest uppercase">
                {dest[0].distance}
              </p>
            </div>
            <div className="ml-12">
              <p className="font-barlow-condensed text-sm tracking-widest">
                EST. TIME TRAVEL
              </p>
              <p className="font-bellefair text-lg tracking-widest uppercase">
                {dest[0].travel}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DestinationContent;
