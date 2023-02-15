import React from 'react'
import { Box } from '@mui/material'
import Category from '../Category'
import MovieList from '../MovieList';
import { useMediaQuery } from '@mui/material';

const HomePage = () => {
  const isSmallScreen = useMediaQuery('(max-width:1250px)');
  return (
    <Box
    width={isSmallScreen ? '95%' : '90%'}
    sx={{
    marginLeft: "auto",
    marginRight: "auto",}} >
      <Category />
      <MovieList />
    </Box>
  )
}

export default HomePage