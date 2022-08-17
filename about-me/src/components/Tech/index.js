import { Tooltip, Zoom } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import { CONTENTFULsvg, CSSsvg, Gatsbysvg, GITHUBsvg, HTMLsvg, JSsvg, NETLIFYsvg, NODEsvg, REACTsvg, SASSsvg, STYLEDCOMPSsvg, VSCODEsvg } from '../../assets/SVG';
import { ProjectsHeader } from '../Projects';

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
        {tech : <HTMLsvg/>, tooltip: "HTML"},
        {tech : <CSSsvg/>, tooltip: "CSS"},
        {tech : <JSsvg/>, tooltip: "JS"},
        {tech : <NODEsvg/>, tooltip: "NODEjs"},
        {tech : <REACTsvg/>, tooltip: "React"},
        {tech : <Gatsbysvg/>, tooltip: "Gatsby"},
        {tech : <STYLEDCOMPSsvg/>, tooltip: "Styled Components"},
        {tech : <SASSsvg/>, tooltip: "SASS"},
        {tech : <VSCODEsvg/>, tooltip: "VSCODE"},
        {tech : <CONTENTFULsvg/>, tooltip: "Contentful"},
        {tech : <GITHUBsvg/>, tooltip: "GitHub"},
        {tech : <NETLIFYsvg/>, tooltip: "Netlify"},
    ];
    const techIconItems = techIconList.map((item) => <Tooltip title={item.tooltip} TransitionComponent={Zoom} enterDelay={150} placement="bottom" arrow><SVGwrapper>{item.tech}</SVGwrapper></Tooltip>)
    return (
        <div>
            <ProjectsHeader>
                <h2>My Tech & Tools</h2>
                <div></div>
            </ProjectsHeader>
            <TechWrapper>
                {techIconItems}
            </TechWrapper>
        </div>
    );
}

export default TechStack;

