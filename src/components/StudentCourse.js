import {Button,Card,CardMedia, Typography, CardContent} from "@mui/material";
export default function StudentCourse() {
    return (
    <>
    
    <Card sx={{marginBottom:"50px"}}>
            <CardMedia component="img" image="s1.jpg"/>
                    <CardContent>
                        <Typography varient="h5" component="h5" sx={{textAlign:"center" ,fontWeight:500, fontSize:"21px"}}>Vikas Kumar</Typography>
                    <Typography varient="small" component="p" sx={{textAlign:"center",fontWeight:100,fontSize:"14px"}}>
                    Python Developer / Node JS 
                    <br/>Developer <br/>
                <small> @ Codebucket Solutions Pvt Ltd.</small>
                       
                    </Typography>
                    </CardContent>
                   
            </Card>
    </>
        
    )
}