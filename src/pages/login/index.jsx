import { Button, Divider, TextField, Typography } from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const Index = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);

    // Check if email and password match the hardcoded values
    if (data.email === "kiran@gmail.com" && data.password === "12345678") {
      // Show login success alert
      navigate("/");
    }
  };

  return (
    <>
      <div className="w-full h-100">
        <h1 className="text-4xl">LOGIN</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
          <TextField
            {...register("email")}
            type="email"
            label="Email Address"
            placeholder="Enter Email Address"
            variant="outlined"
            margin="normal"
            helperText="Incorrect entry."
            fullWidth
            required


          />

          <TextField
            {...register("password")}
            type="password"
            label="Password"
            placeholder="Enter Password"
            variant="outlined"
            margin="dense"
            fullWidth
            required
          />

          <div className="text-right mt-2">
            <Link
              to="/auth/forgot-password"
              className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700"
            >
              Forgot Password?
            </Link>
          </div>

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
            Log In
          </Button>
        </form>

        <Divider className="my-6" />

        <Button
          type="button"
          variant="outlined"
          fullWidth
          className="flex items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            className="w-6 h-6 mr-4"
            viewBox="0 0 48 48"
          >
            {/* SVG content */}
          </svg>
          Log in with Google
        </Button>

        <Typography variant="body1" align="center" className="mt-8">
          Need an account?{" "}
          <Link
            to="/auth/register"
            className="text-blue-500 hover:text-blue-700 font-semibold"
          >
            Create an account
          </Link>
        </Typography>
      </div>
    </>
  );
};

export default Index;
