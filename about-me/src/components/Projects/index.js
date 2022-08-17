import React from 'react';
import styled, { keyframes } from 'styled-components'

const ProjectsWrapper = styled.div`
    min-height: 300px;
`

const rainbow = keyframes`
    0%{background-position:0% 82%}
    50%{background-position:100% 19%}
    100%{background-position:0% 82%}
`

export const ProjectsHeader = styled.div`
    height: 4rem;
    & h2{
        color: white;
    }
    & div{
        height: 0.25rem;
        background: linear-gradient(124deg, #ff2400, #e81d1d, #e8b71d, #e3e81d, #1de840, #1ddde8, #2b1de8, #dd00f3, #dd00f3);
        animation: ${rainbow} 15s ease infinite;
        background-size: 1800% 1800%;
    }
`
export const ProjectsContent = styled.div`
    height: 25vh;
    background-color: rgba(255,255,255,0.1);
    text-align: center;
    box-sizing: border-box;
    & p {
        color: white;
        padding: 15%;
    }
`
const Projects = () => {
    return (
        <ProjectsWrapper>
            <ProjectsHeader>
                <h2>My projects</h2>
                <div></div>
            </ProjectsHeader>
            <ProjectsContent>
                <p>Comming ASAP :)</p>
            </ProjectsContent>
            
        </ProjectsWrapper>
    );
};


export default Projects;