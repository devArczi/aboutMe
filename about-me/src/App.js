import React, { useState } from 'react';
import styled from 'styled-components';
import Footer from './components/Footer';
import Header from './components/Header';
import Nav from './components/Nav';
import Projects from './components/Projects';
import TechStack from './components/Tech';


const AppWrapper = styled.div`

margin: 0 200px;
height: 100vh;
`
function App() {
  const [clicked, setClicked] = useState("")
  return (
    <AppWrapper>
      <Nav/>
      <Header/>
      <Projects/>
      <TechStack/>
      <Footer/>
    </AppWrapper>
  );
}

export default App;
