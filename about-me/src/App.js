import React, { useState } from 'react';
import styled from 'styled-components';
import Footer from './components/Footer';
import Nav from './components/Nav';
import { BrowserRouter as Router } from 'react-router-dom';
import AnimatedRoutes from './components/AnimatedRoutes';

const AppWrapper = styled.div`

margin: 0 200px;
height: 100vh;
`
function App() {

  return (
    <Router>
      <AppWrapper>
        <Nav/>
        <AnimatedRoutes/>
        {/* <Footer/> */}
      </AppWrapper>
    </Router>
  );
}

export default App;
