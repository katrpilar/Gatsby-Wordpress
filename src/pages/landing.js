// import { Link } from 'gatsby'
import React, { Fragment } from "react"
// import ReactDOM from "react-dom"
import { graphql } from "gatsby"
// import ReactHtmlParser from 'react-html-parser'
import { MuiThemeProvider, createMuiTheme, Button, AppBar, Toolbar, Typography, Grid, IconButton, Card, CardContent, CardActions, CardHeader, CardActionArea, CardMedia } from '@material-ui/core';
import 'typeface-noto-sans';
import 'typeface-noto-serif';
import Mavenly from '../images/mavenly.png'
// import LgImg from '../images/lgimg.jpg'
import Mickey from '../images/sorcerermickey.jpg'
import MenuIcon from '@material-ui/icons/Menu'
import Star from '../images/star.png'


import { ParallaxProvider, Parallax, ParallaxBanner } from 'react-scroll-parallax';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: 'rgb(229, 216, 255)',
      main: '#1b004d',
      dark: '#210067',
      contrastText: '#FFFFFF',
    },
    secondary: {
      light: 'rgb(255, 236, 139)',
      main: '#fc0',
      dark: 'rgb(234, 188, 0)',
      contrastText: '#052D6C',
    },
    text: {
      primary: "#212121",
      secondary: "#616161",
      disabled: "#BDBDBD",
    },
    background: {
      default: '#210067'
    }
  },
  typography:{
    useNextVariants: true,
    fontFamily: `Noto Sans, "Helvetica", "Arial"`,
    headline:{
      fontFamily: "Noto Sans",
    },
    body1:{
      fontFamily: `Noto Sans, "Helvetica", "Arial"`
    },
    body2:{
      fontFamily: "Noto Sans"
    },
    h1: {
      fontFamily: "Noto Serif",
      fontSize: '4em'
    },
    h2: {
      fontFamily: "Noto Serif",
    },
    h3: {
      fontFamily: "Noto Serif",
    },
    h4: {
      fontFamily: "Noto Serif",
      fontSize: "1.84rem",
    },
    h5: {
      fontFamily: "Noto Serif",
    },
    h6: {
      fontFamily: "Noto Sans",
    },
    button: {
      fontWeight: 600,
    },
  }
});

const Landing = () => {
  return(
    <MuiThemeProvider theme={theme}>
      {/* <script src="../components/particles.js"></script>
      <div id="particles-js" style={partstyle}> */}
      <AppBar position="absolute" elevation={0} style={{backgroundColor: 'transparent', marginTop: '50px', marginBottom: '50px'}}>      
        <Toolbar>
        <img src={Mavenly} style={{height: "100%", width: "180px", position: 'relative', left: '8vw'}} />
        <IconButton color={theme.palette.secondary.main} aria-label="Menu" style={{position: 'absolute', right: '8vw'}}>
            <MenuIcon fontSize="large" color="inherit"></MenuIcon>
          </IconButton>
          
          {/* <Grid container spacing={8}>
          <Grid item xs={1}></Grid>
            <Grid item xs={2}>
              <img src={Mavenly} style={{height: "100%", width: "200px"}} />
            </Grid>
            <Grid item xs={9} >
              <Typography variant="body2" color="inherit" style={{textTransform: "uppercase"}}>
                <ul>
                  <Li>Solutions</Li>
                  <Li>Resources</Li>
                  <Li>Partners</Li>
                  <Li>Support</Li>
                </ul>
              </Typography>
            </Grid>
          </Grid> */}
        </Toolbar>
      </AppBar>

      <Grid container direction="row">
      <Grid item xs={12}>
      <ParallaxProvider>

        <Parallax offsetYMax={20}
        offsetYMin={-20} slowerScrollRate>
          <img src={Mickey} style={{width: '100%', height: 'auto'}}/>
        </Parallax>
        {/* <ParallaxBanner 
        layers={[
        {
            image: Star,
            amount: 0.1,
            slowerScrollRate: false,
        },
        {
            image: Star,
            amount: 0.2,
            slowerScrollRate: false,
        },
    ]}
    style={{
        height: '500px',
    }}></ParallaxBanner> */}
        <Parallax offsetYMax={100}
        offsetYMin={-100} slowerScrollRate>
          <img src={Star} style={{width: '20px', height: 'auto', top: '100px', right: '150px', position: 'absolute'}}/>
        </Parallax>
        <Parallax offsetYMax={50}
        offsetYMin={-50} slowerScrollRate>
          <img src={Star} style={{width: '50px', height: 'auto', top: '150px', right: '25px', position: 'absolute'}}/>
        </Parallax>
          <img src={Star} style={{width: '70px', height: 'auto', top: '80px', right: '250px', position: 'absolute'}}/>
          <img src={Star} style={{width: '90px', height: 'auto', top: '200px', right: '350px', position: 'absolute'}}/>
          <img src={Star} style={{width: '30px', height: 'auto', top: '400px', right: '250px', position: 'absolute'}}/>
          <img src={Star} style={{width: '50px', height: 'auto', top: '350px', right: '250px', position: 'absolute'}}/>
          <img src={Star} style={{width: '40px', height: 'auto', top: '250px', right: '200px', position: 'absolute'}}/>

        <Parallax>
          <Grid direction="column" alignItems="center">
            <Grid item xs={12} md={10} lg={6} xl={8} style={{marginTop: '-50vw', color: '#ffffff'}}>
            <Typography variant="h6" align="center" color="inherit">WE'RE SHOPIFY MAGICIANS CRAFTING</Typography>
            <Typography variant="h1" align="center" color="inherit">Apps That Amaze</Typography>
            </Grid>
          </Grid>    
        </Parallax>

      </ParallaxProvider>
        </Grid>
      </Grid>
      </MuiThemeProvider>
  )
}


export default Landing
