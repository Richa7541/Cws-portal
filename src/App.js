import './App.css';
import Banner from './components/Banner';
import Header from './components/Header';
import CourseCard from './components/CourseCard';
import { Container,Grid, Typography } from "@mui/material";
import StudentCourse from './components/StudentCourse';
import Footer from './components/Footer';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Login from './Login';
import ApplyAdmission from './ApplyAdmission';
import Register from './Register';


function App() {
  return (
    <>
     <BrowserRouter>
       <Routes>
         <Route path="/" element={<>
     
    <Header/>
    <Banner/>
    <Container className='' sx={{marginTop:"20px"}}>
      <Typography  sx={{paddingBottom:"15px", fontWeight:700 ,fontSize:"24px",
      borderLeftWidth:"20px"}}>
        Our Courses
      </Typography>
      <Grid container spacing={3}>
        <Grid item lg={2} xs={12} md={5} sm={4}><CourseCard className="" img="./c1.jpg" title="python With data strcture" duration="2" /></Grid>
        <Grid item lg={2} xs={12} md={5} sm={4}><CourseCard img="./c2.jpg" title="django WEb framework" duration="4"/></Grid>
        <Grid item lg={2} xs={12} md={5} sm={4}><CourseCard img="./c3.jpg"  title="Full stack with mern" duration="4"/> </Grid>
        <Grid item lg={2} xs={12} md={5} sm={4}><CourseCard img="./c4.jpg"  title="Laravel web developement" duration="4"/> </Grid>
        <Grid item lg={2} xs={12} md={5} sm={4}><CourseCard img="./c3.jpg"  title="django web framework" duration="4"/></Grid>
      </Grid>
      <Container sx={{display:"flex",justifyContent:"flex-start",flexDirection:"row"
      ,marginTop:"10px"}} maxWidth="xl">
      </Container>
    </Container>
    <Container sx={{marginTop:"20px"}}>
      <Typography  sx={{paddingBottom:"22px", fontWeight:700 ,fontSize:"24px",borderLeftWidth:"20px"}}>
        Student Achivement
      </Typography>
      <Grid container spacing={3}>
        <Grid item lg={3} xs={12} md={5} sm={6}><StudentCourse/></Grid>
        <Grid item lg={3} xs={12} md={5} sm={6}><StudentCourse/></Grid>
        <Grid item lg={3} xs={12} md={5} sm={6}><StudentCourse/> </Grid>
        <Grid item lg={3} xs={12} md={5} sm={6}><StudentCourse/> </Grid>
        <Grid item lg={3} xs={12} md={5} sm={6}><StudentCourse/> </Grid>
        <Grid item lg={3} xs={12} md={5} sm={6}><StudentCourse/> </Grid>
        <Grid item lg={3} xs={12} md={5} sm={6}><StudentCourse/> </Grid>
        <Grid item lg={3} xs={12} md={5} sm={6}><StudentCourse/> </Grid>
      </Grid>
      <Container sx={{display:"flex",justifyContent:"flex-start",
      flexDirection:"row",marginTop:"10px"}} maxWidth="xl">
        
        
      </Container>
    </Container>
   <Footer/>
   </>} />

<Route path="/Login" element={<Login/>} />
 <Route path="/Apply" element={<ApplyAdmission/>} />
 <Route path="/Register" element={<Register/>} />

</Routes>
</BrowserRouter>

         
    </>
  );
}

export default App;
