import React from 'react'
import PropTypes from 'prop-types'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import indigo from '@material-ui/core/colors/purple';
import Header from './header'

const theme = createMuiTheme({
    palette: {
      // Tell Material-UI what's the font-size on the html element is.
      primary: indigo,
    },
  });
// import './layout.css'

const Layout = ({ children }) => (
      <>
        <MuiThemeProvider theme={theme}>
          {children}
        </MuiThemeProvider>
      </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
