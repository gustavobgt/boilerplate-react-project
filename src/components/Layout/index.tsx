import React from 'react';
import {Grid} from './styles'

import Header from './Header'
import Sidebar from './Sidebar'
import Router from './Router'
import Footer from './Footer'

const Layout: React.FC = () => {
  return (
    <Grid>
      <Header/>
      <Sidebar/>
      <Router/>
      <Footer/>
    </Grid>
  );

};

export default Layout;
