import React, { Component, Fragment } from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import { MuiThemeProvider, createMuiTheme, Button, AppBar, Toolbar, Typography, Grid, Card, CardContent, CardActions, CardHeader, CardActionArea, CardMedia, IconButton, Input, TextField } from '@material-ui/core';
import 'typeface-noto-sans';
import 'typeface-noto-serif';
import ShareIcon from '@material-ui/icons/Share';
import styled from 'styled-components'
import ReactHtmlParser from 'react-html-parser'
import Moment from 'react-moment';
// import 'moment-timezone';
import MenuIcon from '@material-ui/icons/Menu'
import Mavenly from '../images/mavenly.png'
import Hidden from '@material-ui/core/Hidden'



// import PostIcons from "../components/PostIcons"
import Img from "gatsby-image"

// import { rhythm } from "../utils/typography"
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

// xs={} md={} lg={} xl={}
class PostTemplate extends Component {

  render() {
    const post = this.props.data.wordpressPost

    return (
      <MuiThemeProvider theme={theme} >
      <AppBar position="absolute" elevation={0} style={{backgroundColor: 'transparent', marginTop: '50px', marginBottom: '50px'}}>      
        <Toolbar>
        <img src={Mavenly} style={{height: "100%", width: "180px", position: 'relative', left: '8vw'}} />
          <Hidden only={['lg','xl']}>
            <IconButton color="inherit" aria-label="Menu" style={{position: 'absolute', right: '8vw'}}>
                <MenuIcon fontSize="large" color={theme.palette.secondary.main}></MenuIcon>
            </IconButton>
          </Hidden>
          <Hidden only={['sm','xs','md']}>
            <IconButton color={theme.palette.primary.main} aria-label="Menu" style={{position: 'absolute', right: '8vw'}}>
              <MenuIcon fontSize="large" color={theme.palette.secondary.main}></MenuIcon>
            </IconButton>
            </Hidden>
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
        {/* <div style={{backgroundColor: theme.palette.primary.main}}> */}
        <Grid container direction="row" spacing={40} style={{}}>
            <Grid item xs={0} md={2} lg={3} xl={3} style={{backgroundColor: theme.palette.primary.main, paddingTop: '10vw'}} align="right">
              <Typography variant="h4" align="right" style={{color: theme.palette.primary.contrastText, fontStyle: 'italic', paddingTop: '100px'}}>
                  Boost Your Business
                </Typography>
                <Typography variant="h2" align="right" style={{color: theme.palette.primary.contrastText}}>Have you taken a free trial of our apps yet?</Typography>   
                <br></br>
                <br></br>
                <Button variant="outlined" size='large' style={{color: theme.palette.secondary.dark, borderColor: theme.palette.secondary.main, padding: '10px'}}>Let's Go ></Button>           
            </Grid>
            <Grid xs={12} md={8} lg={6} xl={4} item>
            {/* <h1 dangerouslySetInnerHTML={{ __html: post.title }} /> */}
            
            <div style={{height: '200px', width: '100%', overflow: 'hidden', backgroundImage: `URL(${post.featured_media.source_url})`}}>
              {/* <img src={post.featured_media.source_url} style={{height: '100%', width: 'auto'}}></img> */}
            </div>
            <div style={{paddingTop: '50px'}}>
            <Typography variant="h6" style={{fontFamily: 'Noto Serif'}}>
              <Moment format="MMMM D, YYYY">{post.date}</Moment>
            </Typography>

            <Typography variant="h3" style={{textDecorationLine: 'overline', fontFamily: 'Noto Sans', fontWeight: '900'}}>{post.title}</Typography>            

            </div>
            <Typography variant="body1" style={{padding: '25px'}}>{ReactHtmlParser(post.content)}</Typography>
                      </Grid>
          <Grid xs={0} md={2} lg={3} xl={2} style={{backgroundColor: theme.palette.primary.light}}></Grid>
          
        </Grid>
        {/* </div> */}
      </MuiThemeProvider>
    )
  }
}

PostTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default PostTemplate

export const pageQuery = graphql`
  query($id: String!) {
    wordpressPost(id: { eq: $id }) {
      title
      content
      date
      featured_media{
        source_url
      }
  } 
}`