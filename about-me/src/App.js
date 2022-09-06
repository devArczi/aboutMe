import React from 'react';
import Nav from './components/Nav';
import { BrowserRouter as Router } from 'react-router-dom';
import AnimatedRoutes from './components/AnimatedRoutes';
import { AppWrapper } from './styles';



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
