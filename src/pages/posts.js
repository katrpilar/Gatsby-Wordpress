import React, { Fragment } from "react"
// import ReactDOM from "react-dom"
import { graphql } from "gatsby"
// import ReactHtmlParser from 'react-html-parser'
import { MuiThemeProvider, createMuiTheme, Button, AppBar, Toolbar, Typography, Grid, Card, CardContent, CardActions, CardHeader, CardActionArea, CardMedia, IconButton, Input, TextField } from '@material-ui/core';
import 'typeface-noto-sans';
import 'typeface-noto-serif';
import Mavenly from '../images/mavenly.png'
import striptags from 'striptags';
import ShareIcon from '@material-ui/icons/Share';
// import { Link } from "@reach/router";
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu'

// import '../components/particles.js'
// import particlesJS from '../components/particles.json'


// particlesJS.load('particles-js', '../components/particles.json', function() {
//   console.log('callback - particles.js config loaded');
// });

const Li = styled.li`
  display: inline;
  padding-left: 15px;
  padding-right: 15px;
`


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

// const partstyle = {
//     position: "absolute",
//     width: "100%",
//     height: "100%",
//     backgroundColor: "#14147D",
//     backgroundImage:" url('')",
//     backgroundRepeat: "no-repeat",
//     backgroundSize: "cover",
//     backgroundPosition: "50% 50%",
// };
// import Mavenly from "../images/mavenly.png"
// import styled from "styled-components";


// function getText(resp){
//   var parser = new DOMParser();
//   var doc = parser.parseFromString(resp, "text/html");
//   return (doc.textContent);
// }

export default ({ data }) => {
  console.log(data)
  return (          
    <MuiThemeProvider theme={theme}>
      {/* <script src="../components/particles.js"></script>
      <div id="particles-js" style={partstyle}> */}
      <Grid container direction="row" >
      <AppBar position="absolute" elevation={0} style={{backgroundColor: 'transparent', marginTop: '50px'}}>      
        <Toolbar>
        <img src={Mavenly} style={{height: "100%", width: "180px", position: 'relative', left: '110px'}} />
        <IconButton color="inherit" aria-label="Menu" style={{position: 'absolute', right: '110px'}}>
            <MenuIcon fontSize="large" color={theme.palette.secondary.main}></MenuIcon>
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
      </Grid>
      <div>
      {/* <div style={{background: 'linear-gradient(to top, #30fd30,#210067)', height: '100%', width: '100%'}}> */}
      {/* <div style={{ backgroundImage: "URL('http://www.saurabhkarwal.com/wp-content/uploads/2018/03/Background-opera-speeddials-community-web-simple-backgrounds.jpg')"}}> */}
      <Grid container direction="row" style={{ width: '100%'}} >
      <Grid container direction="row" alignItems="center">
        <Grid alignContent="center" item xs={12} style={{backgroundImage: `URL(${data.allWordpressPost.edges[0].node.featured_media.source_url})`, height: '750px'}}>
          <div style={{height: '100%', width: '100%', background: 'linear-gradient(to left,rgb(27, 0, 77, .5), rgb(27, 0, 77, 1), rgb(27, 0, 77, 1))'}}>
          <Grid container direction="row" style={{height: '100%'}}>
            {/* <Grid item xs={1} md={4} lg={3} xl={4}></Grid>  */}
            <Grid item xs={1} md={2} lg={1} xl={3} ></Grid>
            <Grid item xs={10} md={8} lg={7} xl={6} alignContent="center" style={{ color: theme.palette.primary.contrastText, height: '100%'}}>
            <Typography variant="h6" align="left" style={{color: theme.palette.secondary.main,paddingTop: '250px'}}>
                WE ARE MAVENLY
              </Typography>
              <Typography variant="h4" align="left" style={{color: theme.palette.primary.contrastText, fontStyle: 'italic'}}>
                Better Shopify Solutions By Technology and Marketing Mavens
              </Typography>
              <Typography variant="h1" align="left" style={{color: theme.palette.primary.contrastText}}>
              {data.allWordpressPost.edges[0].node.title}
              </Typography>
              <br></br>
              <br></br>

              <Button variant="outlined" size='large' style={{color: theme.palette.secondary.main, borderColor: theme.palette.secondary.main, padding: '20px'}}>Learn the Latest >>></Button>
            </Grid>
            
          </Grid>
          </div>          
        </Grid>
        <Grid container style={{backgroundColor: theme.palette.primary.light, height: '100px'}} alignItems="center">
          <Grid container direction="row" spacing={40} alignItems="center">
            <Grid item xs={1} md={4} lg={5} xl={4} direction="column">
              <Typography align="right" style={{color: theme.palette.primary.main}}>Stellar Ecommerce Strategy Insights</Typography>
              <Typography variant="h4" align="right" style={{color: theme.palette.primary.main}}>Delivered to Your Inbox.</Typography>
            </Grid>
            <Grid item xs={10} md={4} lg={3} xl={3} direction="column">
              <TextField defaultValue="hello@mavenly.com" fullWidth={true}></TextField>
            </Grid>
            <Grid item xs={12} md={2} lg={2} xl={2} direction="column">
              <Button variant="text" style={{paddingLeft: '50px', paddingRight: '50px',backgroundColor: theme.palette.primary.main, color: '#ffffff'}}>Subscribe</Button>
            </Grid>
          </Grid>

        </Grid>
        <Grid item xs={12}>
        
        </Grid>
      </Grid>

      <Grid container direction="column" alignItems="center" style={{paddingTop: "80px"}}>
        <Grid item xs={12} md={12} lg={8} xl={8}>
        <Grid container spacing={40}>
        {data.allWordpressPost.edges.map(({ node, index }) => (
          <Fragment key={index}>
            <Grid item xs={12} md={6} lg={4} xl={4}>
              <Card key={index} raised={false} square={true} elevation={2} style={{backgroundColor: "transparent", color: '#ffffff'}}>
              <CardActionArea>
              <CardHeader key={index} title={node.title} subheader={node.date} titleTypographyProps="color={theme.palette.primary.constrastText}"/>
                    {/* <Typography key={index} variant="h4" color="primary" style={{textTransform: "capitalize"}}>{node.title}</Typography> */}
                
                  {node.featured_media ? <CardMedia key={index} image={node.featured_media.source_url} style={{height: "0",
  paddingTop: '56.25%', // 16:9,
  marginTop:'30'}}/> : <CardMedia key={index} image="http://www.independentmediators.co.uk/wp-content/uploads/2016/02/placeholder-image.jpg" style={{height: "0",
  paddingTop: '56.25%', // 16:9,
  marginTop:'30'}}/>}                  
                  <CardContent style={{height: "120px", width: "auto", overflow: "hidden", overflow: "hidden", maxHeight: "200px"}}>
                  {/* <Chip label={node.date} /> */}
                    {/* <Typography key={index} variant="body1">{node.date}</Typography> */}
                    {/* <Typography key={index} variant="body1" noWrap>{ getText(node.excerpt) }</Typography> */}
                    {/* <div style={{ backgroundImage: `linear-gradient(to bottom, 
                      rgba(255,255,255, 0), 
                      rgba(255,255,255, 1) 90%)` }}> */}
                    <div style={{overflow: "hidden", maxHeight: "100px"}}>
                      <Typography key={index} variant="body1" >{ striptags(node.excerpt)}</Typography>
                    </div>
                    {/* </div> */}
                    {/* <Typography key={index} variant="body1" noWrap>{ ReactHtmlParser(node.content) }</Typography> */}
                  </CardContent>
                </CardActionArea>                          
                <CardActions style={{ color: theme.palette.secondary.contrastText}} >
                  <Grid container direction="row">
                      <Grid item xs={6} >
                        <Button key={index} variant="text" color="inherit" href={`/${node.slug}`}>Read Now ></Button>
                      </Grid>
                      <Grid xs={4}></Grid>
                      <Grid item xs={2} >
                      <IconButton aria-label="Share">
                        <ShareIcon />
                      </IconButton>
                      </Grid>
                  </Grid>                
                  
                </CardActions>     
              </Card>
            </Grid>              
          </Fragment>
        ))}
          </Grid>
        </Grid>
      </Grid>
      </Grid> 
      </div>
        

      {/* </div> */}
    </MuiThemeProvider>                        
  )
}

export const query = graphql`
query{
    allWordpressPost {
      edges {
        node {
          id
          title
          slug
          excerpt
          date
          content
          featured_media {
            source_url
          }
        }
      }
    }
  }`