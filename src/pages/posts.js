import React, { Fragment, Component } from "react"
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
import Moment from 'react-moment'
import Hidden from '@material-ui/core/Hidden'
import { withStyles } from '@material-ui/core/styles';


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
      {/* <Grid container direction="row" > */}
      <AppBar position="absolute" elevation={0} style={{backgroundColor: 'transparent', marginTop: '50px', marginBottom: '50px'}}>      
        <Toolbar>
        <img src={Mavenly} style={{height: "100%", width: "180px", position: 'relative', left: '8vw'}} />
        <IconButton color="inherit" aria-label="Menu" style={{position: 'absolute', right: '8vw'}}>
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
      {/* </Grid> */}
      {/* <div style={{background: 'linear-gradient(to top, #30fd30,#210067)', height: '100%', width: '100%'}}> */}
      {/* <div style={{ backgroundImage: "URL('http://www.saurabhkarwal.com/wp-content/uploads/2018/03/Background-opera-speeddials-community-web-simple-backgrounds.jpg')"}}> */}
      <Grid container direction="row" alignItems="center" style={{backgroundImage: `URL(${data.allWordpressPost.edges[0].node.featured_media.source_url})`}}>
          {/* <div style={{height: '100%', width: '100%', background: 'linear-gradient(to left,rgb(27, 0, 77, .5), rgb(27, 0, 77, 1), rgb(27, 0, 77, 1))'}}> */}
          <Grid container direction="row" style={{background: 'linear-gradient(to left,rgb(27, 0, 77, .5), rgb(27, 0, 77, 1), rgb(27, 0, 77, 1))'}}>
            {/* <Grid item xs={1} md={4} lg={3} xl={4}></Grid>  */}
            <Grid item xs={1} md={2} lg={1} xl={3} ></Grid>
            <Grid item xs={10} md={8} lg={7} xl={6} alignContent="center" style={{ color: theme.palette.primary.contrastText, height: '100%'}}>
              <Grid container direction="column" spacing={10}>
                <Hidden only="xs">
                  <Grid item>
                    <Typography variant="h6" align="left" style={{color: theme.palette.secondary.main,paddingTop: '18vw', fontSize: '1em'}}>
                      WE ARE MAVENLY
                    </Typography>
                  </Grid>
                </Hidden>
                <Hidden only="xs">
                  <Grid item>
                    <Typography variant="h5" align="left" style={{color: theme.palette.primary.contrastText, fontStyle: 'italic'}}>
                      Better Shopify Solutions By Technology and Marketing Mavens
                    </Typography>
                  </Grid>
                </Hidden>
                <Grid item>
                  <Hidden only="xs">
                    <Typography variant="h1" align="left" style={{color: theme.palette.primary.contrastText, [theme.breakpoints.up('lg')]: { fontSize: '6em'}}}>
                    {data.allWordpressPost.edges[0].node.title}
                    </Typography>
                  </Hidden>
                  <Hidden only={['sm', 'md', 'lg', 'xl']}>
                    <Typography variant="h3" align="left" style={{paddingTop: '40vw', color: theme.palette.primary.contrastText, [theme.breakpoints.up('lg')]: { fontSize: '6em'}}}>
                    {data.allWordpressPost.edges[0].node.title}
                    </Typography>
                  </Hidden>
                </Grid>
                <Grid item style={{paddingBottom: '15vw',}}>
                  <Button variant="outlined" size='large' style={{color: theme.palette.secondary.main, borderColor: theme.palette.secondary.main, padding: '15px'}}>Learn the Latest >>></Button>
                </Grid>                
              </Grid>
            </Grid>
            
          </Grid>
          {/* </div>           */}
        <Hidden only={['sm','xs']}>
          <Grid container style={{backgroundColor: theme.palette.primary.light}} alignItems="center">
            <Grid container direction="row" spacing={40} alignItems="flex-end" style={{paddingBottom: '20px'}}>
              <Grid item xs={12} sm={12} md={4} lg={5} xl={4} >
                <Typography align="right" style={{color: theme.palette.primary.main, paddingTop: '20px'}}>Stellar Ecommerce Strategy Insights</Typography>
                <Typography variant="h4" align="right" style={{color: theme.palette.primary.main}}>Delivered to Your Inbox.</Typography>
              </Grid>
              <Grid item xs={12} sm={8} md={4} lg={3} xl={3} >
                <TextField fullWidth={true}></TextField>
              </Grid>
              <Grid item xs={12} sm={2} md={2} lg={2} xl={2} >
                <Button  variant="text" style={{ position:'relative', paddingLeft: '30px', paddingRight: '30px',backgroundColor: theme.palette.primary.main, color: '#ffffff'}}>Subscribe</Button>
              </Grid>
            </Grid>
          </Grid>
        </Hidden>
        <Hidden only={['md','lg', 'xl']}>
          <Grid container direction="column" spacing={40} style={{backgroundColor: theme.palette.primary.light, paddingBottom: '20px'}} alignItems="center">
              <Grid item xs={12} sm={12} >
                <Typography align="center" style={{color: theme.palette.primary.main, paddingTop: '20px'}}>Stellar Ecommerce Strategy Insights</Typography>
                <Typography variant="h4" align="center" style={{color: theme.palette.primary.main}}>Delivered to Your Inbox.</Typography>
                <TextField fullWidth={true}></TextField>
              </Grid>
              <Grid item xs={3} sm={4}></Grid>
              <Grid item xs={6} sm={4}>
                <Button variant="text" style={{ position:'relative', paddingLeft: '30px', paddingRight: '30px',backgroundColor: theme.palette.primary.main, color: '#ffffff'}}>Subscribe</Button>
              </Grid>
          </Grid>
        </Hidden>

      </Grid>
      {/* #171823 */}

      <Grid container direction="column" alignItems="center" style={{paddingTop: "80px", backgroundColor: 'rgb(239, 239, 239)'}}>
        <Grid item xs={12} md={12} lg={10} xl={10}>
        <Grid container direction="row" spacing={24}>
        {data.allWordpressPost.edges.map(({ node, index }) => (
          <Fragment key={index}>
            <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
              <Card key={index} raised={false} square={true} elevation={6} style={{color: theme.palette.secondary.contrastText }}>
              <CardActionArea style={{}}>
              <CardHeader key={index} title={node.title} titleTypographyProps={{color:"inherit", variant:'h4'}} subheader={<Moment format="MMMM D, YYYY">{node.date}</Moment>} style={{}} />
              {/* <CardHeader key={index} title={node.title} subheader={<Moment format="M.D.YY">{node.date}</Moment>} titleTypographyProps="color={theme.palette.primary.constrastText}"/> */}
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
                      <Typography key={index} variant="body1" color={theme.palette.secondary.contrastText}>{ striptags(node.excerpt)}</Typography>
                    </div>
                    {/* </div> */}
                    {/* <Typography key={index} variant="body1" noWrap>{ ReactHtmlParser(node.content) }</Typography> */}
                  </CardContent>
                </CardActionArea>                          
                <CardActions style={{ color: theme.palette.secondary.contrastText, backgroundColor: theme.palette.primary.light}} >
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