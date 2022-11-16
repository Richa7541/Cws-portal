import { Container, Typography } from "@mui/material";
import { fontSize } from "@mui/system";

export default function Banner () {
    return(
        <Container maxWidth="xl" className="bg"sx={{backgroundImage:"url(logo192.png)",background:"center center",
         flex:1,padding:"60px",height:520 }}>
           <Container>
           <Typography variant="h1" sx={{marginTop:"44px",fontWeight:"lighter", fontSize:"75px",fontFamily:"sans-serif" ,color:"#f8f9fa"}}>
            Skill Hai! To Future Hai!
            </Typography>
            <Typography variant="p" sx={{fontSize:"1.30rem",fontWeight:300,lineHeight:"1.90rem", fontFamily:"sans-serif", marginTop:"1.11rem" ,width:"79%",color:"#f8f9fa"}}>
            "CWS is an on-demand marketplace for top Programming engineers, developers, consultants, architects, <br/> programmers, and tutors. Get your projects built by vetted web programming freelancers or learn from expert <br/> mentors with team training & coaching experiences in <big>Project based training."</big>
            </Typography>
           </Container>
            
        </Container>
    )
}