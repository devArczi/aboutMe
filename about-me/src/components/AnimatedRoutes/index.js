import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import About from '../About';


const Header = React.lazy(() => import("../Header"));
const Projects = React.lazy(() => import("../Projects"));
const TechStack = React.lazy(() => import("../Tech"));

const AnimatedRoutes = () => {
    const location = useLocation();
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path='/' element={<React.Suspense fallback={<>...</>}>
                    <Header/>
                </React.Suspense>}/>
                <Route path='/projects' element={<React.Suspense fallback={<>...</>}>
                    <Projects/>
                </React.Suspense>}/>
                <Route path='/techstack' element={<React.Suspense fallback={<>...</>}>
                    <TechStack/>
                </React.Suspense>}/>
                <Route path='/about-me' element={<React.Suspense fallback={<>...</>}>
                    <About/>
                </React.Suspense>}/>
            </Routes>
        </AnimatePresence>
    );
}

export default AnimatedRoutes;