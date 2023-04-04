import { solid } from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import loginPic from "../assets/images/loginPic3.png";
import logo from "../assets/images/logo_black.svg";

const checkIfButtonShouldSlideLeft = ({
  buttonDistanceFromLeft,
  buttonWidth,
  isFormValid,
}) => {
  return isFormValid ? null : buttonDistanceFromLeft > buttonWidth / 2;
};
const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

const initialState = {
  name: null,
  email: null,
  isEmailValid: false,
  isPasswordValid: false,
};

function Login() {
  const [state, setState] = useState(initialState);
  const [buttonShouldSlideLeft, setButtonShouldSlideLeft] = useState(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  useEffect(() => {
    setState((prevState) => {
      return {
        ...prevState,
        isEmailValid: emailRegex.test(state.email),
        isPasswordValid: passwordRegex.test(state.password),
      };
    });
  }, [state.email, state.password]);

  return (
    <div className="h-screen lg:fixed top-0 left-0 right-0 bottom-0 flex flex-col lg:flex-row">
      <div className="h-1/3 lg:h-full lg:w-1/2 bg-secondary flex flex-col items-center justify-center relative transition-all duration-500">
        <img
          src={loginPic}
          alt=""
          className="w-full h-full lg:h-2/3 object-contain"
        />
        {/* Carousel description and indicators displayed below */}
        <div className="absolute bottom-2 lg:bottom-32  flex flex-col items-center text-center gap-4 text-primary max-w-[300px]">
          <h1 className="lg:text-2xl font-semibold">
            New Scheduling And Routing Options
          </h1>
          <p className="hidden lg:block">
            We also updated the format of podcasts and rewards
          </p>
          {/* Carousel indicators below */}
          <span className="lg:flex gap-1 hidden">
            <span className="h-2 w-5 bg-primary rounded-full"></span>
            <span className="h-2 w-2 bg-primary rounded-full bg-opacity-50"></span>
            <span className="h-2 w-2 bg-primary rounded-full bg-opacity-50"></span>
          </span>
        </div>
      </div>
      <div className="my-10 lg:my-0 lg:w-1/2 flex flex-col items-center transition-all duration-500">
        <div className="flex flex-col w-full px-4 lg:px-0 lg:w-3/5 gap-8 lg:gap-16 lg:pt-32">
          <div className="flex flex-col items-center gap-4 lg:gap-8">
            <img className="max-h-14" src={logo} alt="logo" />
            <div className="flex flex-col items-center gap-3">
              <h1 className="text-2xl font-bold text-primary">Login Here!</h1>
              <p className="text-center text-tertiary font-bold">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat
                provident commodi magni molestias
              </p>
            </div>
          </div>
          <form action="" className="w-full">
            <div className="flex flex-col gap-6">
              <div className="flex items-center relative w-full h-14 group">
                <label
                  htmlFor="email"
                  className={`absolute left-3 group-focus-within:-translate-y-7 transition-all duration-500 ease-in-out ${
                    state.email ? "-translate-y-7" : ""
                  }`}
                >
                  Email
                </label>
                <input
                  className="w-full h-full bg-blue-100 rounded-md focus:outline-secondary p-3"
                  type="text"
                  name="email"
                  value={state.email}
                  onChange={handleInputChange}
                />
                <FontAwesomeIcon
                  icon={solid("at")}
                  className="absolute right-3 text-tertiary group-focus-within:text-primary transition-all duration-200"
                />
                {state.isEmailValid ? null : state.email == null ? null : ( // Don't show any error if field hasn't even yet been filled
                  <FontAwesomeIcon
                    icon={solid("exclamation")}
                    className="absolute -right-3 text-red-700 animate-bounce text-3xl"
                  />
                )}
              </div>

              <div className="flex items-center relative w-full h-14 group">
                <label
                  htmlFor="password"
                  className={`absolute left-3 group-focus-within:-translate-y-7 transition-all duration-500 ease-in-out ${
                    state.password ? "-translate-y-7" : ""
                  }`}
                >
                  Password
                </label>
                <input
                  className="w-full h-full bg-blue-100 rounded-md focus:outline-secondary p-3"
                  type="password"
                  name="password"
                  value={state.password}
                  onChange={handleInputChange}
                />
                <FontAwesomeIcon
                  icon={solid("lock")}
                  className="absolute right-3 text-tertiary group-focus-within:text-primary transition-all duration-200"
                />
                {state.isPasswordValid ? null : state.password ==
                  null ? null : ( // Don't show any error if field hasn't even yet been filled
                  <FontAwesomeIcon
                    icon={solid("exclamation")}
                    className="absolute -right-3 text-red-700 animate-bounce text-3xl"
                  />
                )}
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
                setButtonShouldSlideLeft(
                  checkIfButtonShouldSlideLeft({
                    buttonDistanceFromLeft: event.nativeEvent.offsetX,
                    buttonWidth: event.nativeEvent.target.offsetWidth,
                    isFormValid: state.isEmailValid && state.isPasswordValid,
                  })
                )
              }
              onMouseOut={() => setButtonShouldSlideLeft(null)}
            >
              <button
                className={`w-1/2 h-14 mt-10 bg-secondary text-primary rounded-lg font-semibold hover:bg-primary m-auto
              hover:bg-opacity-40 transition-all duration-500
              ${
                state.isEmailValid && state.isPasswordValid
                  ? null
                  : "invisible lg:visible"
              }
              ${
                buttonShouldSlideLeft == null
                  ? "translate-x-0 z-1"
                  : buttonShouldSlideLeft
                  ? "-translate-x-72 -z-10" // Slide to the left using a negative x-axis translation
                  : "translate-x-72 -z-10" // Slide to the right using a positive x-axis translation
              }`}
              >
                Login
              </button>
            </div>
          </form>
        </div>

        <div className="my-5 lg:m-0 lg:absolute bottom-10 flex gap-3">
          Don't have an account yet?
          <span className="text-primary font-bold">Sign Up</span>
        </div>
      </div>
    </div>
  );
}

export default Login;
