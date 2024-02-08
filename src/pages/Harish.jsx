import {
  Button,
  Card,
  FormControl,
  FormGroup,
  FormHelperText,
  TextField,
} from "@mui/material";
import React from "react";
import { useFormik } from "formik";
import styled from "@emotion/styled";
import Chat from "../components/Chat";
import CustomButton from "../components/CustomButton";

const Harish = () => {
  const Buttons = styled("Button")({
  });

  const initialState = {
    email: "",
    password: "",
  };

  const formik = useFormik({
    initialValues: initialState,
    onSubmit: (data) => {
      console.log(data);
    },
    validate: (values) => {
      const errors = {};
      // Validate Email
      if (!values.email) {
        errors.email = "Email is required";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
        errors.email = "Invalid email address";
      }
      // Validate Password
      if (!values.password) {
        errors.password = "Password is required";
      } else if (values.password.length < 6) {
        errors.password = "Password must be at least 6 characters long";
      }
      return errors;
    },
  });

  return (
    <div className="bg-gray-300  flex justify-center items-center h-screen">
      <Card className="p-5 flex-row items-center justify-center bg-gradient-to-r from-sky-500 to-purple-500">
        <div>
          <FormControl
            // onClick={onSubmit()}
            // onSubmit={formik.handleSubmit}
            className=" shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <TextField
                type="email"
                label="Email"
                name="email"
                placeholder="Enter your email"
                fullWidth
                variant="outlined"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.email && formik.errors.email ? (
                <FormHelperText>{formik.errors.email}</FormHelperText>
              ) : null}
            </div>

            <div className="mb-4">
              <TextField
                type="password"
                label="Password"
                name="password"
                placeholder="Enter your password"
                fullWidth
                variant="outlined"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}/>
              {formik.touched.password && formik.errors.password ? (
                <div className="text-gray-500">{formik.errors.password}</div>
              ) : null}
            </div>

            <div className="flex items-center justify-center">
   
<CustomButton 
className='p-2' 
onClick={formik.handleSubmit} 
bgColor="bg-white" 
textColor="text-black" 
hoverBgColor="hover:bg-purple-600" 
hoverTextColor="hover:text-white">Submit</CustomButton>


            </div>
          </FormControl>
        </div>
      </Card>
    </div>
  );
};

export default Harish;
