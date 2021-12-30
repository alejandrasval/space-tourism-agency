import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logOutInitiate } from "../redux/actions";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const { user } = useSelector((store) => store.user);

  let dispatch = useDispatch();

  const handleAuth = () => {
    if (user) {
      dispatch(logOutInitiate());
    }
  };

  return (
    <>
      <div className="flex justify-end">
        <nav className="backdrop-blur-md bg-white/10 flex flex-col w-full lg:flex-row">
          <div className="w-1/2">
            <Link to="/">
              <img
                className="hidden inset-y-10 left-0 mt-3 ml-4 lg:block"
                src="https://res.cloudinary.com/dtkdsolsz/image/upload/v1640671573/Space%20Tourism/logo_rsnfax.svg"
                alt=""
              />
            </Link>
          </div>
          <button
            className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent lg:hidden"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <AiOutlineMenu className="text-4xl" />
          </button>
          <div
            className={
              "lg:flex flex-row w-1/2" +
              (navbarOpen ? " flex flex-col w-full" : " hidden")
            }
          >
            <ul className="font-barlow-condensed p-2 text-md tracking-widest flex flex-col items-start justify-start list-none lg:flex-row">
              <Link to="/destination">
                <li className="m-4 cursor-pointer hover:border-b-2 border-white">
                  <b>00</b> DESTINATION
                </li>
              </Link>
              <Link to="/crew">
                <li className="m-4 cursor-pointer hover:border-b-2 border-white">
                  <b>01</b> CREW
                </li>
              </Link>
              <Link to="/technology">
                <li className="m-4 cursor-pointer hover:border-b-2 border-white">
                  <b>02</b> TECHNOLOGY
                </li>
              </Link>
              <Link to="/reservations">
                <li className="m-4 cursor-pointer hover:border-b-2 border-white">
                  <b>03</b> RESERVATIONS
                </li>
              </Link>
              <Link to={`${user ? "/" : "/login"}`}>
                <li
                  className="m-4 mr-8 cursor-pointer hover:border-b-2 border-white"
                  onClick={handleAuth}
                >
                  <b>04</b> {user ? " LOG OUT " : " LOG IN"}
                </li>
              </Link>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
