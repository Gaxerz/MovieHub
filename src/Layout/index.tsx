import { Box } from '@mui/material'
import React from 'react'
import Navbar from '../components/Navbar'

const AppLayout = ({children}:any) => {
  return (
    <Box sx={{background:"#134b5f",color:"white",minHeight:"100vh"}}>
    <Navbar/>
    {children}
    </Box>
  )
}

export default AppLayout