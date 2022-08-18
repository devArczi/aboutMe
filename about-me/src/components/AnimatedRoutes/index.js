import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
// import Header from '../Header';
// import Projects from '../Projects';
// import TechStack from '../Tech';
import { AnimatePresence } from 'framer-motion';

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
            </Routes>
        </AnimatePresence>
    );
}

export default AnimatedRoutes;