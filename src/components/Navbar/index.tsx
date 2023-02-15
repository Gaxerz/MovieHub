/* eslint-disable @next/next/no-img-element */
import { Box } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import Image from 'next/image';

const Navbar = () => {
  return (
    <Box sx={{
      display: "flex",
      background: "#0f3c4c",
      padding: "10px",
      boxShadow:"0 2px 4px rgba(0, 0, 0, 0.2)",
      position:"sticky",
      top:"0px",
      zIndex:"10000"
    }}>
      <Box sx={{ flex: "1" }}></Box>
      <Box sx={{ flex: "2",display:"flex",alignItems:"center" }}>
        <Box sx={{
          display: "flex",
          gap: "10px",
          alignItems: "center",
          width: "100%",
          background: "#165a72",
          padding: "5px",
          borderRadius: "10px",
        }}>
          <SearchIcon />
          <input placeholder="Search any movie" type="text" style={{
            background: "#165a72",
            outline: "none",
            border: "none",
            fontSize: "20px",
            color: "white",
            width: "100%",
          }}/>
        </Box>

      </Box>
      <Box sx={{ flex: "1"}}>
        <Box sx={{float:"right",display:"flex",alignItems:"center"}}>
        <img src="/Images/logo.png" alt="Logo" width="200px" height="50px" style={{objectFit:"cover",objectPosition:"center"}} />
        </Box>
      </Box>
    </Box>
  )
}

export default Navbar