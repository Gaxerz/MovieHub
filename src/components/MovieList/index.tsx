/* eslint-disable @next/next/no-img-element */
import { Box } from '@mui/system'
import React from 'react'
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';

const MovieList = () => {

    return (
        <Box>
            <Grid container columnSpacing={2} rowSpacing={2}>
                {
                    [1, 2, 3, 4, 5,,7,7,7,7,,7,7,7,7].map((_,idx) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={idx}>
                            <Box sx={{display:"flex",boxShadow:"0 2px 4px rgba(0, 0, 0, 0.2)",borderRadius:"10px"}}>
                                <Box><img src="/Images/movie1.jpg" alt="movie" height="200px" style={{borderRadius:"10px",objectFit:"cover",objectPosition:"center"}}/></Box>
                                <Box sx={{padding:"10px",display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
                                    <Box sx={{fontSize:"15px",fontWeight:"700"}}>Name of the movie will come here</Box>
                                    <Box>Rating</Box>
                                    <Box>
                                    <Box>Category: Action</Box>
                                    <Box>Rating: 4</Box>
                                    <Box>Language: 4</Box>
                                    <Box>Quality: 4</Box>
                                    
                                    </Box>
                                    <Box sx={{display:"flex",justifyContent:"space-between"}}>
                                        <Button variant='contained' sx={{background:"#0f3c4c",padding:"5px"}}>Download / Watch</Button>
                                    {/* <Button variant='contained' sx={{background:"#0f3c4c",padding:"5px"}}>Watch</Button> */}
                                    </Box>
                                </Box>
                            </Box>
                            
                        </Grid>
                    ))
                }

            </Grid>

        </Box>
    )
}

export default MovieList