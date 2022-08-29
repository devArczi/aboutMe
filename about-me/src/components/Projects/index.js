import React from 'react';
import styled, { keyframes } from 'styled-components'
import { motion } from 'framer-motion';
import Footer from '../Footer';
import { ProjectsWrapper, ProjectsHeader, ProjectsContent } from "../../styles";

const Projects = () => {
    return (
        <ProjectsWrapper as={motion.div}
        transition={{delay:0.5}}
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        >
            <ProjectsHeader>
                <h2>My projects</h2>
            </ProjectsHeader>
            <ProjectsContent>
                <p>Comming ASAP :)</p>
            </ProjectsContent>
            <Footer/>
        </ProjectsWrapper>
    );
};


export default Projects;