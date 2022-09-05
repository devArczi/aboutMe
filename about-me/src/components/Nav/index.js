import React from "react";
import { Tooltip, Zoom } from '@mui/material';
import styled from "styled-components";
import HouseRoundedIcon from '@mui/icons-material/HouseRounded';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import ConstructionIcon from '@mui/icons-material/Construction';
import WorkIcon from '@mui/icons-material/Work';
import { Link } from 'react-router-dom';
import { NavWrapper, NavList } from "../../styles";


const Nav = () =>{
    const navIconList = [
        {id: 0, nav : <HouseRoundedIcon/>, tooltip: "Home" , link:"/" , target: "_self"},
        {id: 1, nav : <WorkIcon/>, tooltip: "Projects", link:"/projects", target: "_self"},
        {id: 2, nav : <ConstructionIcon/>, tooltip: "TechStack", link:"/TechStack", target: "_self"},
        {id: 3, nav : <AssignmentIndIcon/>, tooltip: "About Me", link:"/about-me", target: "_self"},
    ];

    const navIconItems = navIconList.map((item) => 
        <Tooltip key={item.id} title={item.tooltip} TransitionComponent={Zoom} enterDelay={100} placement="bottom" arrow>
            <li key={item.link}><Link to={item.link} target={item.target}>{item.nav}</Link></li>
        </Tooltip>)
 

    return(
        <NavWrapper>
            <NavList>
                {navIconItems}
            </NavList>
        </NavWrapper>
    )
}

export default Nav;