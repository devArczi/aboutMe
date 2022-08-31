import React, { useState } from 'react';
import styled from 'styled-components';
import Footer from './components/Footer';
import Nav from './components/Nav';
import { BrowserRouter as Router } from 'react-router-dom';
import AnimatedRoutes from './components/AnimatedRoutes';
import { AppWrapper } from './styles';

// const AppWrapper = styled.div`

// margin: 0 200px;
// height: 100vh;
// @media ${device.laptop} {
//         margin: 0px 150px;
//     }
// `
function App() {

  return (
    <Router>
      <AppWrapper>
        <Nav/>
        <AnimatedRoutes/>
      </AppWrapper>
    </Router>
  );
}

export default App;
