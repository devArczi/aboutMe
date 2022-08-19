import React, { useState } from "react";
import { Tooltip, Zoom } from '@mui/material';
import styled from "styled-components";
import HouseRoundedIcon from '@mui/icons-material/HouseRounded';
import PostAddOutlinedIcon from '@mui/icons-material/PostAddOutlined';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import GitHubIcon from '@mui/icons-material/GitHub';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import NewspaperIcon from '@mui/icons-material/Newspaper';
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
        /* background: rgba(190,44,208,0.1); */
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
            /* color: rgba(190,44,208,0.8589810924369747); */
            color: red;
        }
    }

`;


const NavWrapper = styled.div`
    background: transparent;
    border: red 2px solid;
    min-width: 100%;
`;
const Nav = () =>{
    const navIconList = [
        {id: 0, nav : <HouseRoundedIcon/>, tooltip: "Home" , link:"/"},
        {id: 1, nav : <PostAddOutlinedIcon/>, tooltip: "Post", link:"/projects"},
        {id: 2, nav : <NewspaperIcon/>, tooltip: "News", link:"/TechStack"},
        {id: 3, nav : <AssignmentIndIcon/>, tooltip: "Assignment", link:"/ass"},
        {id: 4, nav : <GitHubIcon/>, tooltip: "GitHub" ,link: "/https://github.com/devArczi"},
        {id: 5, nav : <ContactMailIcon/>, tooltip: "Contact", link:"/CT"},
    ];

    const navIconItems = navIconList.map((item) => <Tooltip title={item.tooltip} TransitionComponent={Zoom} enterDelay={100} placement="bottom" arrow><li key={item.link}><Link to={item.link}>{item.nav}</Link></li></Tooltip>)
 

    console.log(navIconList[1].link)
    return(
        <NavWrapper>
            <NavList>
                {navIconItems}
            </NavList>
        </NavWrapper>
    )
}

export default Nav;