import React from "react";
import styled, { keyframes } from 'styled-components'
import GitHub from "@mui/icons-material/GitHub";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';

const rainbow = keyframes`
    0%{background-position:0% 82%}
    50%{background-position:100% 19%}
    100%{background-position:0% 82%}
`

const FooterWrapper = styled.div`
    height: 250px;
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
`
const FooterLine = styled.div`
        margin-top: 30px;
        height: 0.25rem;
        background: linear-gradient(124deg, #ff2400, #e81d1d, #e8b71d, #e3e81d, #1de840, #1ddde8, #2b1de8, #dd00f3, #dd00f3);
        animation: ${rainbow} 15s ease infinite;
        background-size: 1800% 1800%;
`

const FooterDescr = styled.div`
    /* border: 2px solid greenyellow; */
    height: 4rem;
    width: 40%;
    box-sizing: border-box;
    & p{
        color: white;
    }
`
const FooterLinks = styled.div`
    /* border: 2px solid red; */
    height: 4rem;
    width: 40%;
    display: flex;
    justify-content: flex-end;
    & a{
        color: white;
    }
`
const Footer = () =>{
    const descrString = ["coding < sleeping ? ☕️ : q(≧▽≦q) " , "Powered by Netlify"];

    const footerLinksList = [
        {id: 2120, footerIcon : <GitHub sx={{ fontSize: 40 }}/>,  link:"https://github.com/devArczi" , target: "_blank"},
        {id: 2121, footerIcon : <LinkedInIcon sx={{ fontSize: 40 }}/>,  link:"https://www.linkedin.com/in/artur-przyborski-104a841a7/", target: "_blank"},
        {id: 2122, footerIcon : <TwitterIcon sx={{ fontSize: 40 }}/>, link:"https://twitter.com/xTheLastOne", target: "_blank"},
        {id: 2123, footerIcon : <ForwardToInboxIcon sx={{ fontSize: 40 }}/>,  link:"mailto:devxarczi@gmail.com", target: "_blank"},
    ];

    const footerLinksItems = footerLinksList.map((item) => <a href={item.link} target={item.target}>{item.footerIcon}</a>)

    return(
        <>
        <FooterLine></FooterLine>
        <FooterWrapper>
            
            <FooterDescr>   
                <p>{descrString[0]}</p>
                <p>{descrString[1]}</p>
            </FooterDescr>
            <FooterLinks>
                {footerLinksItems}
            </FooterLinks>
        </FooterWrapper>
        </>
    )
}

export default Footer;