import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCrew } from "../redux/actions";

const CrewContent = () => {
  const [member, setMember] = useState("Douglas Hurley");
  const { crew } = useSelector((state) => state.crew);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCrew(member));
  }, [member, dispatch]);

  return (
    <>
      <div className="flex flex-col h-screen items-center justify-center lg:flex-row">
        <div className="flex flex-col justify-center items-center h-2/3 w-full px-2 lg:items-start lg:px-12">
          <h4 className="font-barlow-condensed text-xl tracking-widest mb-4 lg:mb-10">
            <b className="opacity-50">02</b> MEET YOUR CREW
          </h4>
          <p className="font-bellefair text-2xl my-4 opacity-50 tracking-widest">{crew[0].role}</p>
          <p className="font-bellefair text-center text-4xl mt-4 uppercase lg:text-6xl lg:text-justify">{crew[0].name}</p>
          <p className="w-full font-barlow text-center text-md my-6 leading-7 lg:text-justify lg:w-3/4">
          {crew[0].bio}
          </p>
          <div className="flex items-center justify-center mt-2">
          <div className="bg-white w-2 h-2 rounded-full mr-4 opacity-50 cursor-pointer hover:opacity-100" onClick={() => setMember("Douglas Hurley")}></div>
          <div className="bg-white w-2 h-2 rounded-full mr-4 opacity-50 cursor-pointer hover:opacity-100" onClick={() => setMember("Mark Shuttleworth")}></div>
          <div className="bg-white w-2 h-2 rounded-full mr-4 opacity-50 cursor-pointer hover:opacity-100" onClick={() => setMember("Victor Glover")}></div>
          <div className="bg-white w-2 h-2 rounded-full mr-4 opacity-50 cursor-pointer hover:opacity-100" onClick={() => setMember("Anousheh Ansari")}></div>
          </div>
        </div>
        <div className="flex flex-col relative justify-center items-center h-1/3 w-full md:h-screen lg:h-screen">
          <img
            className="w-full h-full object-contain absolute inset-x-0 bottom-0 self-center md:w-4/5 lg:w-4/5 lg:w-4/5"
            src={crew[0].image}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default CrewContent;
