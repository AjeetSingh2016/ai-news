import React from 'react'
import {Stack, Typography, Box} from "@mui/material"
import "./pages/style.css"

const styles={
    navbar:{
        backgroundColor: "white",
        width: "100%",
        color: "black",
        height: 45,
    }, 
    logo:{
        height: "100%",
        width: "7%",
        // backgroundColor: "red",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }, 
    
}

const NavBar = () => {
  return (
    <Stack  style={styles.navbar}>
        <Box style={styles.logo}>
            <Typography fontSize="large" fontWeight={600} >Alan news</Typography>
        </Box>
    </Stack>
  )
}

export default NavBar