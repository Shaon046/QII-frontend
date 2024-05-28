import React, { useEffect, useState } from "react";
import wave from "../assets/wave.svg";
import user from "../assets/user.png";
import axios from "axios";
import Cookies from "js-cookie";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
const  navigate=useNavigate()


  const [keepMeLogin, setKeepMeLogin] = useState(false);


  const [userInput, setUserInput] = useState({});
  const [response, setResponse] = useState();

  const [message, setMessage] = useState(null);

  const KeepMeLoginHandler = (eve) => {
    setKeepMeLogin((prev) => !prev);
  };

  const inputOnChangeHandler = (eve) => {
    setUserInput((prev) => ({ ...prev, [eve.target.name]: eve.target.value }));
  };

  const onSubmitHandler = (eve) => {
    eve.preventDefault();
    axios
      .post("http://localhost:2000/login", userInput, { withCredentials: true }) // Ensure withCredentials is included
      .then((res) => {
        console.log("Response:", res); // Log the response
        setResponse(res);
        Cookies.set("token", res.data.token, { expires: keepMeLogin ? 7 : 1 });
      })
      .catch((err) => {
        console.log("Error:", err); // Log the error
        setMessage("An error occurred while logging in.");
      });
  };

  useEffect(() => {
    if (response && response.data) {
      console.log("Response data:", response.data); // Log response data
      if (response.data.user) {
        setMessage("Login Successful");


setTimeout(()=>{navigate('/dashboard')},1000)

        
      } else {
        setMessage("Invalid username or password");
        console.log("Else part is running"); // Ensure the else part runs
      }
    }
  }, [response]);

  return (
    <div className="h-[100vh] bg-login-page-gradient flex items-center justify-center">
      <div className="  w-[320px] bg-primary-blue-dark relative pb-10">
        <div className="w-[150px] h-[51px] bg-primary-blue-light absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
          <span className="text-lg text-gray-700 font-semibold">SIGN IN</span>
        </div>

        <div className=" flex flex-col justify-center items-center">
          <img src={wave} alt="wave" />
          <img
            src={user}
            alt="user"
            className="h-[60px] w-[60px] -translate-y-1/2"
          />
        </div>

        {/* user input */}

        <form className="px-8 " onSubmit={onSubmitHandler}>
          <div>
            <div className=" w-full h-[35px] rounded-md mb-5 bg-white flex items-center justify-center relative p-1">
              <span className="ml-2 mr-3">
                <div className=" border-r border-r-black-600">
                  {" "}
                  <PersonIcon sx={{ color: "gray" }} />
                </div>
              </span>

              <input
                type="email"
                name="email"
                placeholder="Email "
                className="w-full focus:outline-none pr-2"
                onChange={inputOnChangeHandler}
              />
            </div>

            <div className=" w-full h-[35px] rounded-md mb-5 bg-white flex items-center justify-center relative p-1">
              <span className="ml-2 mr-3">
                <div className="border-r border-r-black-600">
                  {" "}
                  <LockIcon sx={{ color: "gray" }} />
                </div>
              </span>
              <input
                type="password"
                name="password"
                placeholder={"Password"}
                className="w-full focus:outline-none pr-2 "
                onChange={inputOnChangeHandler}
              />
            </div>
          </div>

          {/* //options */}
          <div className=" flex justify-between text-xs mt-1  text-primary-blue-light ">
            <span className=" flex justify-center items-center cursor-pointer">
              {" "}
              <input
                type="checkbox"
                checked={keepMeLogin}
                onChange={() => KeepMeLoginHandler()}
                className="mr-1"
              />{" "}
              Remember me
            </span>
            <span className=" cursor-pointer hover:text-red-400">
              Forgot password
            </span>
          </div>
          <div>
            {/* button */}
            <input
              type="submit"
              value="LOGIN"
              className=" bg-primary-blue-light h-[35px] w-full rounded mt-12 font-medium hover:bg-primary-blue-dark hover:border-2 hover:border-primary-blue-light active:bg-primary-blue-light"
            />

            <p className=" text-sm text-primary-blue-light mt-2">
              {" "}
              <span>Don't have an account?</span>{" "}
              <span className="hover:text-white">
                <Link to={"/register"}>Sign up</Link>{" "}
              </span>
            </p>

            <p className=" text-sm text-primary-blue-light mt-2">
              {<p> {message} </p>}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
