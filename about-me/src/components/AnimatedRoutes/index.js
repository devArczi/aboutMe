import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from '../Header';
import Projects from '../Projects';
import TechStack from '../Tech';
import { AnimatePresence } from 'framer-motion';

const AnimatedRoutes = () => {
    const location = useLocation();
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path='/' element={<Header/>}/>
                <Route path='/projects' element={<Projects/>}/>
                <Route path='/techstack' element={<TechStack/>}/>
            </Routes>
        </AnimatePresence>
    );
}

export default AnimatedRoutes;