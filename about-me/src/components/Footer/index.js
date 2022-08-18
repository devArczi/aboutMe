import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.div`
    margin-top: 50px;
    height: 250px;
    width: auto;
    display: flex;
    justify-content: space-between;
`
const FooterDescr = styled.div`
    border: 2px solid greenyellow;
    height: 4rem;
    width: 40%;
    box-sizing: border-box;
    & p{
        color: white;
    }
`
const FooterLinks = styled.div`
    border: 2px solid red;
    height: 4rem;
    width: 40%;
`
const Footer = () =>{
    const descrString = ["coding < sleeping ? ☕️ : q(≧▽≦q) " , "Powered by Netlify"];

    return(
        <FooterWrapper>
            <FooterDescr>   
                <p>{descrString[0]}</p>
                <p>{descrString[1]}</p>
            </FooterDescr>
            <FooterLinks>

            </FooterLinks>
        </FooterWrapper>
    )
}

export default Footer;