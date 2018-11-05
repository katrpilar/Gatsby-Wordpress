import React, { Component } from 'react'
import { Link } from 'gatsby'
import { MuiThemeProvider, createMuiTheme, Button, AppBar, Toolbar, Typography, Grid, Card, CardContent, CardActions,MenuItem, Drawer, CardHeader, CardActionArea, CardMedia, IconButton, Input, TextField } from '@material-ui/core';
import 'typeface-noto-sans';
import 'typeface-noto-serif';
import Mavenly from '../images/mavenly.png'
import MenuIcon from '@material-ui/icons/Menu'

export default class Header extends Component{
  constructor(){
    super();
    this.state = {
      name: 'React',
      open: false,
      pageNumber: 1
    };
    this.handleDrawerClick = this.handleDrawerClick.bind(this);
    this.handleMenuClick1 = this.handleMenuClick1.bind(this);
    this.handleMenuClick2 = this.handleMenuClick2.bind(this);
  }
  handleMenuClick1() {
    this.setState({ pageNumber: 1 });
    this.handleDrawerClick();
  }

  handleMenuClick2() {
    this.setState({ pageNumber: 2 });
    this.handleDrawerClick();
  }
  render(){
    return(
      <MuiThemeProvider>
  {/* <script src="../components/particles.js"></script>
  <div id="particles-js" style={partstyle}> */}
  
  <AppBar position="absolute" elevation={0} style={{backgroundColor: 'transparent', marginTop: '50px'}}>      
    <Toolbar>
    <img src={Mavenly} style={{height: "100%", width: "200px"}} />
    <IconButton color="inherit" aria-label="Menu">
        <MenuIcon></MenuIcon>
      </IconButton>

      <Drawer>
        <MenuItem >Menu Item 1</MenuItem>
        <MenuItem >Menu Item 2</MenuItem>
      </Drawer>
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
  </MuiThemeProvider>
    );
  }

}