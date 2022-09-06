import React from "react";
import GitHub from "@mui/icons-material/GitHub";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import { Footer__Wrapper, Footer__Description, Footer__Links } from "../../styles";


const Footer = () =>{
    const descrString = ["coding < sleeping ? ☕️ : 📖 " , "Powered by Netlify"];

    const footerLinksList = [
        {id: 2120, footerIcon : <GitHub/>,  link:"https://github.com/devArczi" , target: "_blank"},
        {id: 2121, footerIcon : <LinkedInIcon/>,  link:"https://www.linkedin.com/in/artur-przyborski-104a841a7/", target: "_blank"},
        {id: 2122, footerIcon : <TwitterIcon/>, link:"https://twitter.com/xTheLastOne", target: "_blank"},
        {id: 2123, footerIcon : <ForwardToInboxIcon/>,  link:"mailto:devxarczi@gmail.com", target: "_blank"},
    ];

    const footerLinksItems = footerLinksList.map((item) => <a key={item.id}href={item.link} target={item.target}>{item.footerIcon}</a>)

    return(
        <>
        <Footer__Wrapper>
            
            <Footer__Description>   
                <p>{descrString[0]}</p>
                <p>{descrString[1]}</p>
            </Footer__Description>
            <Footer__Links>
                {footerLinksItems}
            </Footer__Links>
        </Footer__Wrapper>
        </>
    )
}

export default Footer;