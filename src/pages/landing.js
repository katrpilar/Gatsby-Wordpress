import { Link } from 'gatsby'
import React, { Fragment } from "react"
// import ReactDOM from "react-dom"
import { graphql } from "gatsby"
// import ReactHtmlParser from 'react-html-parser'
import { MuiThemeProvider, createMuiTheme, Button, AppBar, Toolbar, Typography, Grid, Card, CardContent, CardActions, CardHeader, CardActionArea, CardMedia } from '@material-ui/core';
import 'typeface-noto-sans';
import 'typeface-noto-serif';
import Mavenly from '../images/mavenly.png'
import LgImg from '../images/lgimg.jpg'

import { ParallaxProvider, Parallax } from 'react-scroll-parallax';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#7B63FF',
      main: '#3D0DA1',
      dark: '#210067',
      contrastText: '#fff',
    },
    secondary: {
      light: '#FDFF44',
      main: '#FFE700',
      dark: '#F1CA00',
      contrastText: '#052D6C',
    },
    text: {
      primary: "#212121",
      secondary: "#616161",
      disabled: "#BDBDBD",
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
  }
});

const Landing = () => {
  return(
    <MuiThemeProvider theme={theme}>
      {/* <script src="../components/particles.js"></script>
      <div id="particles-js" style={partstyle}> */}
      <Grid container direction="row" xs={12}>
      <AppBar position="fixed" color="inherit" elevation={0} style={{borderBottom: `3px solid ${theme.palette.secondary.main}`}}>      
        <Toolbar>
          <Grid container spacing={8}>
            <Grid item xs={2}>
              <img src={Mavenly} style={{height: "30px", width: "auto"}} />
            </Grid>
            <Grid item xs={1}>
              <Typography variant="body2" color="inherit">Solutions</Typography>
            </Grid>
            <Grid item xs={1}>
              <Typography variant="body2" color="inherit">Resources</Typography>
            </Grid>
            <Grid item xs={1}>
              <Typography variant="body2" color="inherit">Support</Typography>
            </Grid>
            <Grid item xs={1}>
              <Typography variant="body2" color="inherit">Partners</Typography>
            </Grid>

          </Grid>
        </Toolbar>
      </AppBar>
      </Grid>

      <Grid container direction="row">
      <Grid item xs={12}>
      <ParallaxProvider>

        <Parallax offsetYMax={20}
        offsetYMin={-20} slowerScrollRate>
          <img src={LgImg} style={{width: '100%', height: 'auto'}}/>
        </Parallax>
        <Parallax>
          <Grid direction="column" alignItems="center">
            <Grid item xs={12} md={10} lg={6} xl={8} style={{marginTop: '-700px'}}>
            <Typography variant="h6" align="center">WE'RE DEVELOPERS THAT BUILD</Typography>
            <Typography variant="h1" align="center">Shopify Apps That Pay Off</Typography>
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
