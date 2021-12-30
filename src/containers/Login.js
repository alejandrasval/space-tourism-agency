import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logInInitiate } from "../redux/actions";
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";

const Login = () => {
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then(() => {
        console.log(auth);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { user } = useSelector((store) => store.user);

  let dispatch = useDispatch();
  let navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  const signIn = (e) => {
    e.preventDefault();
    dispatch(logInInitiate(email, password));
    setEmail("");
    setPassword("");
  };

  return (
    <div className="bg-background1 bg-cover w-full h-screen overflow-hidden text-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="backdrop-blur-sm bg-white/10 rounded-md p-4 max-w-md w-full space-y-8">
        <div>
          <img
            className="bg-white w-50 h-50 rounded-full items-center justify-center mx-auto h-12 w-auto"
            src="https://res.cloudinary.com/dtkdsolsz/image/upload/v1640671573/Space%20Tourism/logo_rsnfax.svg"
            alt="logo"
          />
          <h2 className="font-barlow-condensed mt-6 text-center text-3xl font-extrabold">
            Log into your account
          </h2>
        </div>
        <form className="font-barlow text-md mt-8 space-y-6">
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="appearance-none rounded-md relative block w-full px-3 py-2 my-4 border border-gray-300 text-black placeholder-black"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="appearance-none rounded-md relative block w-full px-3 py-2 my-4 border border-gray-300 text-black placeholder-black"
                placeholder="Password"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            {/* <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm">
                Remember me
              </label>
            </div> */}

            <div className="text-sm text-center">
              <Link
                to="/recoverypassword"
              >
                Forgot your password?
              </Link>
            </div>
          </div>

          <div>
            <button
              type="submit"
              onClick={signIn}
              className="border-2 border-solid border-white group relative w-full flex justify-center py-2 px-4 my-4 text-sm font-bold rounded-md text-white"
            >
              Log in
            </button>
            <p className="text-center">Or continue with</p>
            <button
              onClick={signInWithGoogle}
              className="border-2 border-solid border-white group relative w-full flex justify-center py-2 px-4 my-4 text-sm font-bold rounded-md text-white"
              type="button"
            >
              <FcGoogle className="text-xl mx-2" />
            </button>
          </div>
          <div className="text-center">
            <p className="my-10">
              By signing up you agree to our terms and conditions.
            </p>
            <p className="mt-10">New to Space Tourism Agency?</p>
            <Link to="/signup">
              <button className="border-2 border-solid border-white group relative w-full flex justify-center py-2 px-4 mt-2 text-sm font-bold rounded-md text-white">
                Create your account
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
