import React from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { Container, Grid, TextField, Typography } from "@mui/material"
import { Box } from "@mui/material"
import { Button, Textarea } from "flowbite-react"

export default function ApplyAdmission () {
    return (
        <>
           <Header/>

           <Container >
       <Box component="form" boxShadow="6" noValidate autoComplete="off" sx={{paddingTop:"20px", borderRadius:"8px", paddingBottom:"25px", paddingInline:"35px" , mt:"80px", mb:"120px", }}>
            <Typography variant="h6" sx={{ borderBottom:"1px Solid grey", pb:"10px", mb:"10px"}}>Apply for Addmission</Typography>
            
           <div>
           <Typography variant="h7">Name</Typography>
               <TextField fullWidth id="outlined-name" size="small"/>
           </div>

          
           
      <Grid container spacing={2}>
        <Grid item lg={6}>
           <div>
              <Typography  variant="h7">Mother's Name</Typography>
              <TextField fullWidth id="outlined-name" size="small"/>
            </div>
        </Grid>

        <Grid item lg={6}>
           <div>
              <Typography  variant="h7">Father's Name</Typography>
              <TextField fullWidth id="outlined-name" size="small"/>
            </div>       
        </Grid>

        <Grid item lg={6}>
           <div>
              <Typography  variant="h7">Contact Name</Typography>
              <TextField fullWidth id="outlined-name" size="small"/>
            </div>
           
        </Grid>

        <Grid item lg={6}>
           <div>
              <Typography  variant="h7">Email</Typography>
              <TextField fullWidth id="outlined-name" size="small"/>
            </div>
           
        </Grid>

        <Grid item lg={4}>
           <div>
              <Typography  variant="h7">Education</Typography>
              <TextField fullWidth id="outlined-name" size="small"/>
            </div>
           
        </Grid>

        <Grid item lg={4}>
           <div>
              <Typography  variant="h7">Date Of Birth</Typography>
              <TextField fullWidth id="outlined-name" size="small" label="dd/yy/mm"/>
            </div>
           
        </Grid>

        <Grid item lg={4}>
           <div>
              <Typography  variant="h7">Gender</Typography>
              <TextField fullWidth id="outlined-name" size="small"/>
            </div>
           
        </Grid>

        <Grid item lg={12}>
           <div>
              <Typography  variant="h7">Address</Typography>
<Textarea></Textarea>            
</div>
           
        </Grid>


      </Grid>

           
      <Grid item lg={12}>

      <Box alignItems="center" display="flex" justifyContent="center">
  <Button className="bg-primary mt-4" variant='contained'>
     Submit
  </Button>
</Box>
</Grid>
       </Box>

       </Container>

           
           <Footer/>
        
          
        </>
    )}
    