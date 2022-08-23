import React from "react";
import { Tooltip, Zoom } from '@mui/material';
import styled from "styled-components";
import HouseRoundedIcon from '@mui/icons-material/HouseRounded';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import ConstructionIcon from '@mui/icons-material/Construction';
import WorkIcon from '@mui/icons-material/Work';
import { Link } from 'react-router-dom';

const NavList = styled.ul`
list-style-type: none;
display: flex;
justify-content: flex-end;
flex-direction: row;
    & li {
        color:white;
        padding: 15px;
        margin:0.6%;
        background: transparent;
        border-radius: 16px;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(11.4px);
        -webkit-backdrop-filter: blur(9.4px);
        border: 1px solid rgba(63, 105, 122, 1);
    }
    & li:hover{
        cursor:pointer;
        transform: scale(1.5);
        transition-duration: .5s;
        z-index: 2;
        & *{
            color: red;
        }
    }

`;


const NavWrapper = styled.div`
    background: transparent;
    /* border: red 2px solid; */
    min-width: 100%;
`;
const Nav = () =>{
    const navIconList = [
        {id: 0, nav : <HouseRoundedIcon/>, tooltip: "Home" , link:"/" , target: "_self"},
        {id: 1, nav : <WorkIcon/>, tooltip: "Projects", link:"/projects", target: "_self"},
        {id: 2, nav : <ConstructionIcon/>, tooltip: "TechStack", link:"/TechStack", target: "_self"},
        {id: 3, nav : <AssignmentIndIcon/>, tooltip: "About Me", link:"/about-me", target: "_self"},
    ];

    const navIconItems = navIconList.map((item) => <Tooltip title={item.tooltip} TransitionComponent={Zoom} enterDelay={100} placement="bottom" arrow><li key={item.link}><Link to={item.link} target={item.target}>{item.nav}</Link></li></Tooltip>)
 

    return(
        <NavWrapper>
            <NavList>
                {navIconItems}
            </NavList>
        </NavWrapper>
    )
}

export default Nav;