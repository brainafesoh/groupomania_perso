import { useState } from "react";
import loginPic from "../assets/images/loginPic3.png";
import logo from "../assets/images/logo_black.svg";

const handleLoginClickIntent = ({
  distanceFromLeft,
  distanceFromRight,
  formIsValid,
}) => {
  return formIsValid ? null : distanceFromLeft > distanceFromRight;
};

function Login() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [formIsValid, setFormIsValid] = useState(false);
  const [slideLeft, setSlideLeft] = useState(null);
  return (
    <div className="h-screen md:fixed top-0 left-0 right-0 bottom-0 flex flex-col md:flex-row">
      <div className="h-1/3 md:h-full md:w-1/2 bg-secondary flex flex-col items-center justify-center relative transition-all duration-500">
        <img
          src={loginPic}
          alt=""
          className="w-full h-full md:h-2/3 object-contain"
        />
        {/* Carousel description and indicators displayed below */}
        <div className="absolute bottom-2 md:bottom-32  flex flex-col items-center text-center gap-4 text-primary max-w-[300px]">
          <h1 className="md:text-2xl font-semibold">
            New Scheduling And Routing Options
          </h1>
          <p className="hidden md:block">
            We also updated the format of podcasts and rewards
          </p>
          {/* Carousel indicators below */}
          <span className="md:flex gap-1 hidden">
            <span className="h-2 w-5 bg-primary rounded-full"></span>
            <span className="h-2 w-2 bg-primary rounded-full bg-opacity-50"></span>
            <span className="h-2 w-2 bg-primary rounded-full bg-opacity-50"></span>
          </span>
        </div>
      </div>
      <div className="my-10 md:my-0 md:w-1/2 flex flex-col items-center justify-center transition-all duration-500">
        <div className="flex flex-col w-4/5 md:w-1/2 items-center gap-10">
          <div className="w-full flex justify-between items-center">
            <img className="max-h-[40px]" src={logo} alt="logo" />
            <h1 className="text-2xl font-bold text-primary">Login!</h1>
          </div>
          <p className="hidden md:block text-center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            provident commodi magni molestias! Vel doloribus deleniti hic ipsa
          </p>
          <form action="" className="w-full">
            <div className="flex flex-col gap-4">
              <div className="flex items-center relative w-full h-14 group">
                <label
                  htmlFor="email"
                  className={`absolute left-3 group-focus-within:-translate-y-7 transition-all duration-500 ease-in-out ${
                    email ? "-translate-y-7" : ""
                  }`}
                >
                  Email
                </label>
                <input
                  className="w-full h-full bg-blue-100 rounded-md focus:outline-secondary p-3"
                  type="text"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="flex items-center relative w-full h-14 group">
                <label
                  htmlFor="password"
                  className={`absolute left-3 group-focus-within:-translate-y-7 transition-all duration-500 ease-in-out ${
                    password ? "-translate-y-7" : ""
                  }`}
                >
                  Password
                </label>
                <input
                  className="w-full h-full bg-blue-100 rounded-md focus:outline-secondary p-3"
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="flex justify-between mt-4 text-sm">
              <label
                for="default-toggle"
                className="inline-flex relative items-center cursor-pointer"
              >
                <input
                  type="checkbox"
                  value=""
                  id="default-toggle"
                  className="sr-only peer"
                />
                <div className="w-11 h-4 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <span className="ml-3 font-medium text-gray-900 dark:text-gray-300">
                  Remember Me
                </span>
              </label>

              <span>Recover Password</span>
            </div>
            <div
              className="w-full h-fit flex overflow-hidden"
              onPointerMove={(event) =>
                setSlideLeft(
                  handleLoginClickIntent({
                    distanceFromLeft: event.nativeEvent.offsetX,
                    distanceFromRight: event.nativeEvent.offsetY,
                    formIsValid,
                  })
                )
              }
              onMouseOut={() => setSlideLeft(null)}
            >
              <button
                className={`w-1/2 h-14 mt-10 bg-secondary text-primary rounded-lg font-semibold hover:bg-primary m-auto
              hover:bg-opacity-40 transition-all duration-500
              ${
                slideLeft == null
                  ? "translate-x-0 z-1"
                  : slideLeft
                  ? "-translate-x-72 -z-10"
                  : "translate-x-72 -z-10"
              }`}
              >
                Login
              </button>
            </div>
          </form>
        </div>

        <div className="my-5 md:m-0 md:absolute bottom-10 flex gap-3">
          Don't have an account yet?
          <span className="text-primary font-bold">Sign Up</span>
        </div>
      </div>
    </div>
  );
}

export default Login;
