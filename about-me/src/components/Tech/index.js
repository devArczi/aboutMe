import { Tooltip, Zoom } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import { CONTENTFULsvg, CSSsvg, Gatsbysvg, GITHUBsvg, HTMLsvg, JSsvg, NETLIFYsvg, NODEsvg, REACTsvg, SASSsvg, STYLEDCOMPSsvg, VSCODEsvg } from '../../assets/SVG';
import { ProjectsHeader } from '../Projects';
import { motion } from 'framer-motion';
import Footer from '../Footer';

const TechSection = styled.div`
    min-height: 300px;
    position: absolute;
    max-width: 56.5%;
`

const SVGwrapper = styled.div`
    height: 100px;
    width: 100px;
    padding: 55px 55px 5px;
    flex-basis: 2%;
    justify-content: center;
`
const TechWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    box-sizing: border-box;
    & div:hover{
        transform: scale(1.1);
        transition-duration: .5s;
    }
`
const TechStack = () => {
    const techIconList = [
        {id: 110, tech : <HTMLsvg/>, tooltip: "HTML"},
        {id: 111,tech : <CSSsvg/>, tooltip: "CSS"},
        {id: 112,tech : <JSsvg/>, tooltip: "JS"},
        {id: 113,tech : <NODEsvg/>, tooltip: "NODEjs"},
        {id: 114,tech : <REACTsvg/>, tooltip: "React"},
        {id: 115,tech : <Gatsbysvg/>, tooltip: "Gatsby"},
        {id: 116,tech : <STYLEDCOMPSsvg/>, tooltip: "Styled Components"},
        {id: 117,tech : <SASSsvg/>, tooltip: "SASS"},
        {id: 118,tech : <VSCODEsvg/>, tooltip: "VSCODE"},
        {id: 119,tech : <CONTENTFULsvg/>, tooltip: "Contentful"},
        {id: 1110,tech : <GITHUBsvg/>, tooltip: "GitHub"},
        {id: 1111,tech : <NETLIFYsvg/>, tooltip: "Netlify"},
    ];
    const techIconItems = techIconList.map((item) => <Tooltip title={item.tooltip} TransitionComponent={Zoom} enterDelay={150} placement="bottom" arrow><SVGwrapper key={item.id}>{item.tech}</SVGwrapper></Tooltip>)
    return (
        <TechSection as={motion.div}
        transition={{delay:0.5}}
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}>
            <ProjectsHeader 
        // initial={{width: 0, transition: {duration: 15.1}}}
        // animate={{width: "100%"}}
        // exit={{x: window.innerWith, transition: {duration: 14.1}}}
        >
                <h2>My Tech & Tools</h2>
                <div></div>
            </ProjectsHeader>
            <TechWrapper>
                {techIconItems}
            </TechWrapper>
            <Footer/>
        </TechSection>
    );
}

export default TechStack;

