import React from "react";
import styled from "styled-components";
import HouseRoundedIcon from '@mui/icons-material/HouseRounded';
import PostAddOutlinedIcon from '@mui/icons-material/PostAddOutlined';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import GitHubIcon from '@mui/icons-material/GitHub';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import NewspaperIcon from '@mui/icons-material/Newspaper';

const NavList = styled.ul`
list-style-type: none;
display: flex;
justify-content: flex-end;
flex-direction: row;
    & li {
        color:white;
        padding: 15px;
        margin:0.6%;
        background: rgba(190,44,208,0.1);
        border-radius: 16px;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(9.4px);
        -webkit-backdrop-filter: blur(9.4px);
        border: 1px solid rgba(63, 105, 122, 1);
    }
    & li:hover{
        cursor:pointer;
        transform: scale(1.5);
        transition-duration: .5s;
        z-index: 2;
        & *{
            color: rgba(190,44,208,0.8589810924369747);
        }
    }

`;


const NavWrapper = styled.div`
    background: transparent;
    border: red 2px solid;
`;
const Nav = () =>{
    const navIconList  = [<HouseRoundedIcon/>, <PostAddOutlinedIcon/>, <NewspaperIcon/>, <AssignmentIndIcon/>, <GitHubIcon/>, <ContactMailIcon/>];
    const navIconItems = navIconList.map((item) => <li>{item}</li>);

    return(
        <NavWrapper>
            <NavList>
                {navIconItems}
            </NavList>
        </NavWrapper>
    )
}

export default Nav;