import React, { useState } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import { Container, Typography, Box, TextField } from '@mui/material'
import { Button, Card } from 'flowbite-react'
import {Link} from 'react-router-dom'

const Login = () => {
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")

    
    return (
        <>
            <Header />
            <div className='conatiner'>
                <div className='row mt-5 mb-5'>
                    <div className='col-3 mt-5  shadow-xl content-center offset-5  mb-5'>
                        <Card>
                            <div className='form-control flex-col  items-center'>
                                <label>Email</label>
                                <TextField id="outlined-basic" fullWidth onClick={(e)=>setEmail(e.target.value)}/>


                                <label>password</label>
                                <TextField id="outlined-basic" fullWidth onClick={(e)=>setPassword(e.target.value)}/>

                            </div>
                            <Button className='bg-success'>Login</Button>
                            <Link className='underline text-center' to="/Register">Register</Link>

                        </Card>

                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Login
