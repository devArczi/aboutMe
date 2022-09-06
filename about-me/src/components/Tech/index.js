import { Tooltip, Zoom } from '@mui/material';
import React from 'react';
import { CONTENTFULsvg, CSSsvg, Gatsbysvg, GITHUBsvg, HTMLsvg, JSsvg, NETLIFYsvg, NODEsvg, REACTsvg, SASSsvg, STYLEDCOMPSsvg, VSCODEsvg } from '../../assets/SVG';
import { motion } from 'framer-motion';
import Footer from '../Footer';
import { TechSection, TechHeader, SVGwrapper, TechWrapper } from "../../styles";


const TechStack = () => {
    const techIconList = [
        {id: 110, tech : <HTMLsvg/>, tooltip: "HTML"},
        {id: 111,tech : <CSSsvg/>, tooltip: "CSS"},
        {id: 112,tech : <JSsvg/>, tooltip: "JS"},
        {id: 113,tech : <NODEsvg/>, tooltip: "NODEjs"},
        {id: 114,tech : <REACTsvg/>, tooltip: "React"},
        {id: 115,tech : <Gatsbysvg/>, tooltip: "Gatsby"},
        {id: 116,tech : <STYLEDCOMPSsvg fill="white"/>, tooltip: "Styled Components"},
        {id: 117,tech : <SASSsvg/>, tooltip: "SASS"},
        {id: 118,tech : <VSCODEsvg/>, tooltip: "VSCODE"},
        {id: 119,tech : <CONTENTFULsvg/>, tooltip: "Contentful"},
        {id: 1110,tech : <GITHUBsvg/>, tooltip: "GitHub"},
        {id: 1111,tech : <NETLIFYsvg/>, tooltip: "Netlify"},
    ];
    const techIconItems = techIconList.map((item) => <Tooltip key={item.id} title={item.tooltip} TransitionComponent={Zoom} enterDelay={150} placement="bottom" arrow><SVGwrapper>{item.tech}</SVGwrapper></Tooltip>)
    return (
        <TechSection as={motion.div}
        transition={{delay:0.5}}
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}>
            <TechHeader>
                <h2>My Tech & Tools</h2>
            </TechHeader>
            <TechWrapper>
                {techIconItems}
            </TechWrapper>
            <Footer/>
        </TechSection>
    );
}

export default TechStack;

