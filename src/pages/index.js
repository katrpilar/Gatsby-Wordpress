import React from 'react'
// import { Link } from 'gatsby'
// import Container from "../components/container"
// import Layout from '../components/layout'
// import Image from '../components/image'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import red from '@material-ui/core/colors/purple';

const theme = createMuiTheme({
  palette: {
    // Tell Material-UI what's the font-size on the html element is.
    primary: red,
  },
});
const IndexPage = () => (
  <MuiThemeProvider theme={theme}>

  </MuiThemeProvider>
)

export default IndexPage
