import { Card, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import jason from "../images/me.jpeg"
import TypeWriterEffect from "react-typewriter-effect"

const About = ({title, dark, id}) => {
    const classes = useStyles(); 
    return (
        <div className={`${classes.section} ${dark && classes.sectiondark}`}>
            <div className={classes.sectioncontent} id={ id}>
                <Typography variant="h3">{title}</Typography>
                <Card className={classes.card}>
                    <CardMedia image={ jason } className={classes.media} title="picture"/>
                    <CardContent className={classes.cardcontent}>
                        <TypeWriterEffect text="Hi I'm Jason Dinamarca" textStyle={{fontSize:"2rem", fontWeight:"700px", color:"Tomato"}} startDelay={100} cursorColor="black" typeSpeed={100}/>
                        <TypeWriterEffect text="Hi I'm Jason Dinamarca" textStyle={{fontSize:"1.2rem", fontWeight:"700px"}} startDelay={2500} cursorColor="black" typeSpeed={100}/>
                    </CardContent>
                </Card>
            </div>
        </div>    
    )
}



const useStyles = makeStyles((theme) => ({
    section: {
      minHeight: "100vh",
    },
    sectiondark: {
        background:"#333",
        color: "#fff",
    },
    sectioncontent:{
        maxWidth:"80vw",
        margin:"0 auto"
    },
    card:{
        height:"70vh",
        display:"flex",
        marginTop: theme.spacing(6),
        position: "relative",
        
    },
    media:{
        width:"250px",
        height: "auto",
        objectFit: "cover",
        borderRadius:"10px",
        margin: theme.spacing(4),
    }
  }))

export default About