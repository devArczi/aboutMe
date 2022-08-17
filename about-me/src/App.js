import React, { useState } from 'react';
import styled from 'styled-components';
import Footer from './components/Footer';
import Header from './components/Header';
import Nav from './components/Nav';
import Projects from './components/Projects';
import TechStack from './components/Tech';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const AppWrapper = styled.div`

margin: 0 200px;
height: 100vh;
`
function App() {

  return (
    <Router>
      <AppWrapper>
        <Nav/>
          <Routes>
            <Route path='/' element={<Header/>}/>
            <Route path='/projects' element={<Projects/>}/>
            <Route path='/techstack' element={<TechStack/>}/>
          </Routes>
        <Footer/>
      </AppWrapper>
    </Router>
  );
}

export default App;
