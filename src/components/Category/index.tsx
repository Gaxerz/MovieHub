import React from 'react'
import { Box } from '@mui/material'

const Category = () => {
    const data = ["Hollwood", "Bollywood", "Seasons", "Actions", "Horror", "Hollwood", "Bollywood", "Seasons", "Actions", "Horror", "Bollywood", "Seasons", "Actions", "Horror"]
    return (
        <Box sx={{
            display: "flex",
            gap: "50px",
            marginTop: "50px",
            marginBottom: "50px",
            width: "100%",
            overflowX: "auto"
        }}>
            {data.map((item, idx) => (
                <Box key={idx} sx={{ fontSize: "25px" }}>{item}</Box>
            ))}
        </Box>
    )
}

export default Category