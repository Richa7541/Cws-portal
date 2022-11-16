import {  Typography,Card,CardActionArea,CardMedia,CardContent } from "@mui/material"

export default function CourseCard(props) {
    return (
    <>
    
    <Card sx={{height:320}}>
            <CardMedia component="img" image={props.img}/>
                    <CardContent>
                        <Typography varient="h5" component="h5" sx={{textAlign:"center"}}>{props.title}</Typography>
                    <CardActionArea>
                    <Typography varient="p" component="p" sx={{textAlign:"center" ,color:"error", marginTop:"13px", marginBottom:"4px"}}>
                    Duration : {props.duration} mon
        </Typography>
                    </CardActionArea>
                    
                    </CardContent>
                   
            </Card>
    </>
        
    )
}