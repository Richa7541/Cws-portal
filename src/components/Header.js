import { AppBar,Toolbar,Container,Typography,Button } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <AppBar position="static" sx={{backgroundColor:"#6610f2"}}>
             <Toolbar>
               <Container className="ms-5" sx={{marginInlineStart:"5px"}}>
               <Typography  sx={{fontSize:"23px"}}>
                   Code With sadiQ
               </Typography>
            
               </Container>
                <Typography LinkComponent={NavLink} to="/" className='ms-5 cursor-pointer'>Home</Typography>
                <Typography LinkComponent={NavLink} to="/course" className='ms-5 cursor-pointer'>Course</Typography>
                <Button LinkComponent={NavLink} to="/apply" className="ms-5 bg-warning">apply</Button>
                <Button LinkComponent={NavLink} to="/Login" className="me-5 bg-danger ms-5 ">Login</Button>              
                  </Toolbar>
                </AppBar>
    </>
  )
}

export default Header
