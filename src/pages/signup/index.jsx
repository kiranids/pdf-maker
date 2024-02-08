import { Button, Divider } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const index = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      gender:"",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <>
      <div className="w-full h-100">
      <h1 className="text-4xl">Register</h1>

        <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col sm:flex-row mb-4 ">
            <div className="w-full sm:w-1/2">
              <label className="block text-gray-700">First Name</label>
              <input
                {...register("firstName")}
                type="text"
                name="firstName"
                placeholder="First Name"
                className="w-full px-4 py-3 rounded-lg bg-gray mt-2 border focus:border-blue-800 focus:bg-white focus:outline-none"
                autoFocus
                autoComplete="given-name"
                required
              />
            </div>
            <div className="w-full sm:w-1/2 mt-4 sm:mt-0 sm:pl-4">
              <label className="block text-gray-700">Last Name</label>
              <input
                {...register("lastName")}
                type="text"
                name="lastName"
                placeholder="Last Name"
                className="w-full px-4 py-3 rounded-lg bg-gray mt-2 border focus:border-blue-800 focus:bg-white focus:outline-none"
                autoComplete="family-name"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700">Email Address</label>
            <input
              {...register("email")}
              type="email"
              placeholder="Enter Email Address"
              className="w-full px-4 py-3 rounded-lg bg-gray mt-2 border focus:border-blue-800 focus:bg-white focus:outline-none"
              autofocus
              autocomplete
              required
            />
          </div>

          <div className="mt-4">
            <label className="block text-gray-700">Password</label>
            <input
              {...register("password")}
              type="password"
              placeholder="Enter Password"
              minlength="6"
              className="w-full px-4 py-3 rounded-lg bg-gray mt-2 border focus:border-blue-800
              focus:bg-white focus:outline-none"
              required
            />
          </div>

          <div className="mt-4">
            <label className="block text-gray-700">Password</label>
            <select
              {...register("gender")}
              className="w-full px-4 py-3 rounded-lg bg-gray mt-2 border focus:border-blue-800 focus:bg-white focus:outline-none"
              required
            >
              <option value="" disabled selected>
                Select an option
              </option>
              <option value="male" className="text-gray-800">
               Male
              </option>
              <option value="female" className="text-gray-800">
                Female
              </option>
              <option value="others" className="text-gray-800">
                Others
              </option>
            </select>
          </div>

          {/* 
          <div className="mt-4">
            <label className="block text-gray-700">Confirm Password</label>
            <input
              {...register("confirmPassword")}
              type="password"
            
              placeholder="Re-enter your Password"
              minlength="6"
              className="w-full px-4 py-3 rounded-lg bg-gray mt-2 border focus:border-blue-800
              focus:bg-white focus:outline-none"
              required
            />
          </div> */}

<Button
            type="submit"
            variant="outlined"
            size="large"
            fullWidth
         
            sx={{
              bgcolor:"#A7C957",
              marginBottom:"0.5rem",
              border:"none",
              color:"#f2e8c7",
              "&:hover": {
                bgcolor: "#f2e8c7",
                color: "#A7C957",
           
                border:"none",
              },
              
            }}
          
          >
          Register
          </Button>
        </form>

        <hr className="my-6 border-gray-300 w-full" />

        <p className="mt-8 text-center">
          Already having an account?{" "}
          <Link
            to="/auth/login"
            className="text-blue-500 hover:text-blue-700 font-semibold"
          >
            Login
          </Link>
        </p>
      </div>
    </>
  );
};

export default index;
