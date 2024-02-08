import { Button, Divider } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const index = () => {
  return (
   <>
   
   <div className="w-full h-100">


   <h1 className="text-4xl">Forgot Your Password</h1>

    <form className="mt-6" action="#" method="POST">
      <div>
        <label className="block text-gray-700">Email Address</label>
        <input type="email" name="" id="" placeholder="Enter reacovery email " className="w-full px-4 py-3 rounded-lg bg-gray mt-2 border focus:border-blue-800 focus:bg-white focus:outline-none" autofocus autocomplete required/>
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
            Submit
          </Button>
    </form>

    <hr className="my-6 border-gray-300 w-full"/>



        

  </div>
   </>
  )
}

export default index