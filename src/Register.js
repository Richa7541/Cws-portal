import React, { useState } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import {  Typography, TextField } from '@mui/material'
import { Button, Card } from 'flowbite-react'
import { Link } from 'react-router-dom'

const Register = () => {
    const[name,setName]=useState("")
    const[email,setEmail]=useState("")
    const[contact,setContact]=useState("")
    const[password,setPassword]=useState("")
    
    return (
        <>
            <Header />
            <div className='conatiner'>
                <div className='row mt-5 mb-5'>
                    <div className='col-3 mt-5  shadow-xl content-center offset-5 flex mb-5'>
                        <Card>
                            <div className='form-control flex-col  items-center'>
                                <label>Name</label>
                                <TextField id="outlined-basic" fullWidth onClick={(e)=>setName(e.target.value)}/>


                                <label>Email</label>
                                <TextField id="outlined-basic" fullWidth onClick={(e)=>setEmail(e.target.value)}/>

                                <label>Contact</label>
                                <TextField id="outlined-basic" fullWidth onClick={(e)=>setContact(e.target.value)}/>

                                <label>Create password</label>
                                <TextField id="outlined-basic" fullWidth onClick={(e)=>setPassword(e.target.value)} />
                            </div>

                            <Button className='bg-primary'>Register</Button>
                            <Link className='underline text-center py-1 borde' to="/Login" >Login</Link>

                        </Card>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Register;
