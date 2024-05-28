import React, { useState } from "react";
import wave from "../assets/wave.svg";
import user from "../assets/user.png";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import axios from "axios";
import Cookies from "js-cookie";
const Register = () => {
  const [userInput, setUserInput] = useState({});

  const [responseStatus, setResponseStatus] = useState();

  // USER INPUT ONCHNAGE FUNCTION
  const inputOnChangeHandler = (eve) => {
    setUserInput((prev) => ({ ...prev, [eve.target.name]: eve.target.value }));
  };

  //   FROM SUBMIT
  const onSubmitHandler = async (eve) => {
    eve.preventDefault();
    axios
      .post("http://localhost:2000/signup", userInput)
      .then((res) => {
        setResponseStatus(res);
        Cookies.set("token", res.data.token, { expires: 7 });
      })
      .catch((err) => console.log(err));
  };
  console.log(responseStatus);

  return (
    <div className="h-[100vh] bg-login-page-gradient flex items-center justify-center">
      <div className="  w-[320px] bg-primary-blue-dark relative pb-10">
        <div className="w-[150px] h-[51px] bg-primary-blue-light absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
          <span className="text-lg text-gray-700 font-semibold">Register</span>
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

        <form onSubmit={onSubmitHandler} className="px-8 ">
          {/* //inputs */}
          <div>
            {/* //Name */}

            <div className=" w-full h-[35px] rounded-md mb-2 bg-white flex items-center justify-center relative p-1">
              <span className="ml-2 mr-3">
                <div className=" border-r border-r-black-600">
                  {" "}
                  <PersonIcon sx={{ color: "gray" }} />
                </div>
              </span>

              <input
                type="text"
                name="name"
                placeholder="Name "
                className="w-full focus:outline-none pr-2"
                onChange={inputOnChangeHandler}
              />
            </div>

            {/* DOB */}

            <p className=" text-primary-blue-light m-0 mb-1 text-start">
              What is your date of birth?
            </p>
            <div className=" w-full h-[35px] rounded-md mb-3 bg-white flex items-center justify-center relative p-1">
              <span className="ml-2 mr-3">
                <div className=" border-r border-r-black-600">
                  {" "}
                  <CalendarMonthIcon sx={{ color: "gray" }} />
                </div>
              </span>

              <input
                type="date"
                name="dob"
                placeholder="DOB "
                className="w-full focus:outline-none pr-2"
                onChange={inputOnChangeHandler}
              />
            </div>
            {/* email */}
            <div className=" w-full h-[35px] rounded-md mb-3 bg-white flex items-center justify-center relative p-1">
              <span className="ml-2 mr-3">
                <div className=" border-r border-r-black-600">
                  {" "}
                  <AlternateEmailIcon sx={{ color: "gray" }} />
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
            {/* password */}
            <div className=" w-full h-[35px] rounded-md mb-3 bg-white flex items-center justify-center relative p-1">
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

          <div>
            {/* button */}
            <input
              type="submit"
              name="REGISTER"
              value="REGISTER"
              className=" bg-primary-blue-light h-[35px] w-full rounded mt-6 font-medium hover:bg-primary-blue-dark hover:border-2 hover:border-primary-blue-light active:bg-primary-blue-light"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
