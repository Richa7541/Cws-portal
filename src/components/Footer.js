import {Container, Typography,Grid, ListItem,List} from "@mui/material";
import { fontWeight, margin } from "@mui/system";
export default function Footer() {
    return (
    <>

    <Container maxWidth="xl"  sx={{backgroundColor:"#0d6efd",height:320}}>

        <Grid container>
            <Grid item lg={5}>
            <Typography variant="h1" sx={{fontWeight:"lighter",marginBlockStart:"10px" ,fontSize:"30px",fontFamily:"sans-serif" ,color:"#f8f9fa", padding:"30px"}}>
           Code with Sadiq
            </Typography>
            </Grid>

            <Grid item lg={2}>
            <List>
                <ListItem disablePadding sx={{marginTop:"25px", color:"white" ,fontSize:"23px"}}>Quicks links</ListItem>
                <ListItem disablePadding sx={{color:"white" ,marginTop:"15px"}}>Home</ListItem>
                <ListItem disablePadding sx={{color:"white" ,marginTop:"10px"}}>About</ListItem>
                <ListItem disablePadding sx={{color:"white" ,marginTop:"10px"}}>Projects</ListItem>
                <ListItem disablePadding sx={{color:"white" ,marginTop:"10px"}}>Work shop</ListItem>
                <ListItem disablePadding sx={{color:"white" ,marginTop:"10px"}}>Hire Us</ListItem>
            </List>
            
            
            </Grid>
            <Grid item lg={2}>
            <List>
                <ListItem disablePadding sx={{marginTop:"25px", color:"white" ,fontSize:"23px"}}>About Class</ListItem>
                <ListItem disablePadding sx={{color:"white" ,marginTop:"15px"}}>About Instructer</ListItem>
                <ListItem disablePadding sx={{color:"white" ,marginTop:"10px"}}>MileStones</ListItem>
                <ListItem disablePadding sx={{color:"white" ,marginTop:"10px"}}>Vision</ListItem>
                <ListItem disablePadding sx={{color:"white" ,marginTop:"10px"}}>Community</ListItem>
                <ListItem disablePadding sx={{color:"white" ,marginTop:"10px"}}>Our Team</ListItem>
            </List>
            
            </Grid>
            <Grid item lg={3}> 
            <List>
                <ListItem disablePadding sx={{marginTop:"25px", color:"white" ,fontSize:"23px"}}>Location</ListItem>
                <ListItem disablePadding sx={{color:"white" ,marginTop:"15px"}}>Ramavtar Market, Near Dog Hospital,<br/> Thana Chowk, Gandhinagar,Madhubani,Purnea-854301</ListItem>
                <ListItem disablePadding sx={{color:"white" ,marginTop:"10px"}}>MileStones</ListItem>
                <ListItem disablePadding sx={{color:"white" ,marginTop:"10px"}}>+919546805580</ListItem>
                <ListItem disablePadding sx={{color:"white" ,marginTop:"10px"}}>cwspurnea@gmail.com</ListItem>
                <ListItem disablePadding sx={{color:"white" ,marginTop:"10px"}}>www.codewithsadiq.com</ListItem>
            </List>
            </Grid>
        </Grid>
       
        <Typography sx={{textAlign:"center", color:"white" ,marginTop:"5px" ,marginBottom:"0px"}}>
            Code with sadiQ,All rights reserved
        </Typography>
        </Container>
    </>
        
    )
}