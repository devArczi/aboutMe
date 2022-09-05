import styled, { keyframes } from "styled-components";

const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
  }
  export const device = {
    mobileS: `(min-width: ${size.mobileS})`,
    mobileM: `(min-width: ${size.mobileM})`,
    mobileL: `(min-width: ${size.mobileL})`,
    tablet: `(min-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop})`,
    laptopL: `(min-width: ${size.laptopL})`,
    desktop: `(min-width: ${size.desktop})`,
    desktopL: `(min-width: ${size.desktop})`
  };


export const AppWrapper = styled.div`

margin: 0 200px;
height: 100vh;
@media ${device.mobileL} {
    margin: 0 -60px;
}
@media ${device.tablet} {
        margin: 0px 100px;
}
@media ${device.laptop} {
        margin: 0px 150px;
}
@media ${device.laptopL} {
    margin: 0 200px;
}
  
@media ${device.desktopL} {
    margin: 0 200px;
}
`
// --------------- NAVIGATION --------------- //

export const NavWrapper = styled.div`
position: absolute;
left: 20%;
top: 13%;
display: flex;
background: transparent;
@media ${device.mobileL} {
    left: 18%;
    top: 0;
}
@media ${device.tablet} {
    left: 8%;
    top: 13%;
}
@media ${device.laptop} {
    left: 8%;
    top: 13%;
}
@media ${device.laptopL} {
    left: 13%;
    top: 13%;
}
  
@media ${device.desktopL} {
    left: 9%;
    top: 5%;
  }


`
export const NavList = styled.ul`
list-style-type: none;
display: flex;
justify-content: flex-end;
flex-direction: column;
        @media ${device.mobileL} {
            flex-direction: row;
        }
        @media ${device.tablet} {
            flex-direction: column;
        }

        @media ${device.laptop} {
            flex-direction: column;
        }

        @media ${device.laptopL} {
            flex-direction: column;
        }
        @media ${device.desktopL} {
            flex-direction: column;
        }
    & li {
        color: blue;
        padding: 15px;
        margin:0.8%;
        background: transparent;
        border-radius: 16px;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(11.4px);
        -webkit-backdrop-filter: blur(9.4px);
        border: 1px solid rgba(63, 105, 122, 1);

        @media ${device.mobileL} {
            transform: scale(1);
            padding: 15px;
        }
        @media ${device.tablet} {
            transform: scale(1);
            margin: 10% 0;
            padding: 15px;
        }

        @media ${device.laptop} {
            margin: 10% 0;
            padding: 15px;
        }

        @media ${device.laptopL} {
            transform: scale(1.2);
            margin: 20% 0;
            padding: 15px;
        }

        @media ${device.desktopL} {
            transform: scale(1.7);
            margin: 60% 0;
            padding: 25px;
        }


        & svg{
            fill: aliceblue;
        }
    }
    & li:hover{
        cursor:pointer;
        transform: scale(2.5);
        transition-duration: .5s;
        z-index: 2;
        @media ${device.mobileL} {
            transform: scale(1.3);
        }
        @media ${device.tablet} {
            transform: scale(1.3);
        }
        @media ${device.laptop} {
            transform: scale(1.3);
        }

        @media ${device.laptopL} {
            transform: scale(1.5);
        }

        @media ${device.desktopL} {
            transform: scale(2.5);
        }
        & *{
            color: red;
        }
    }

`;

// --------------- HOME --------------- //

export const HomeWrapper = styled.div`
    height: 600px;
    box-sizing: border-box;
    position: absolute;
    top: 30px;
    max-width: 56.5%;
    
    @media ${device.mobileL} {
        margin-top: 50px;
    }
    @media ${device.desktopL} {
        max-width: 100%;
        margin-top: 0;
    }

`
export const HomeHeader = styled.div`
    padding: 100px 0 0 100px;
    width: 100%;
    display: flex;
    box-sizing: border-box;

    @media ${device.mobileL} {
        flex-wrap: wrap;
        align-items: baseline;
    }
    @media ${device.tablet} {
        flex-wrap: wrap;
        align-items: baseline;
    }
    @media ${device.laptop} {
        flex-wrap: wrap;
        align-items: baseline;
    }
    @media ${device.laptopL} {
        flex-wrap: nowrap;
        align-items: normal;
    }
    @media ${device.desktopL} {
        flex-wrap: nowrap;
        align-items: normal;
    }
`
export const MyImg = styled.div`
    height: 200px;
    flex-basis: 200px;
    display: inline-block;
        & img{
            height: 270px;
            border-radius: 60%;

            @media ${device.laptopL} {
                height: 350px;
            }
            @media ${device.desktopL} {
                height: 700px;
            }
        }

    @media ${device.desktopL} {
        height: 800px;
    }
`
export const MainHeader = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    margin-left: 30px;
    white-space: break-spaces;
        & p{
            font-family: 'Mouse Memoirs', sans-serif;
            font-size: 2rem;
            color: azure;

            @media ${device.mobileL} {
                font-size: 1.3rem; 
                width: 180px;
                padding: 0;
            }
            @media ${device.laptopL} {
                width: 100%;
                font-size: 2rem;
                padding: 15px ;
            }
            @media ${device.desktopL} {
                width: 100%;
                font-size: 4rem;
                padding: 0;
            }
        }
`
export const HomeDescription = styled.div`
    margin-bottom: 200px;
    width: 100%;
    white-space: pre-line;

    @media ${device.mobileL} {
        margin: 0 100px 200px; 
    }
    @media ${device.tablet} {
        margin: 0 0 200px; 
    }
    & p{
        padding: 0 40px;
        font-family: 'Mouse Memoirs', sans-serif;
        font-size: 1rem;
        color: azure;

        @media ${device.laptopL} {
            font-size: 1.5rem;  
        }
        @media ${device.desktopL} {
            font-size: 3rem;  
        }
    }
`

// --------------- PROJECTS --------------- //

export const ProjectsWrapper = styled.div`
    min-height: 300px;
    position: absolute;
    top: 100px;
    max-width: 56.5%;
    min-width: 56.5%;

`
export const rainbow = keyframes`
    0%{background-position:0% 82%}
    50%{background-position:100% 19%}
    100%{background-position:0% 82%}
`
export const ProjectsHeader = styled.div`
    height: 4rem;
    & h2{
        color: white;

        @media ${device.desktopL} {
            font-size: 3rem;  
        }
    }
    @media ${device.mobileL} {
        margin-left: 100px;
    }
    @media ${device.tablet} {
        margin-left: 0;
    }
    @media ${device.desktopL} {
            margin: 55px 0;
        }
`
export const ProjectsContent = styled.div`
    height: 25vh;
    background-color: rgba(255,255,255,0.1);
    text-align: center;
    box-sizing: border-box;

    @media ${device.mobileL} {
            margin-left: 100px;
            width: 100%;
        }
    @media ${device.tablet} {
        margin-left: 0;
        width: 100%;
    }
    & p {
        color: white;
        padding: 15%;
    }
`

// --------------- TECHSTACK --------------- //

export const TechSection = styled.div`
    min-height: 300px;
    position: absolute;
    top: 100px;
    max-width: 56.5%;

`
export const SVGwrapper = styled.div`
    height: 100px;
    width: 100px;
    padding: 55px 55px 5px;
    flex-basis: 2%;
    justify-content: center;
`
export const TechWrapper = styled.div`
    margin-bottom: 100px;
    color: white;
    fill: white;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    box-sizing: border-box;

    @media ${device.mobileL} {
        margin-left: 100px;
        width: 100%;
    }
    @media ${device.tablet} {
        margin-left: 0;
    }
    & div:hover{
        transform: scale(1.1);
        transition-duration: .5s;
    }
`
export const TechHeader = styled.div`
    height: 4rem;
    & h2{
        color: white;
        @media ${device.desktopL} {
            font-size: 3rem;  
        }
    }
    @media ${device.mobileL} {
        margin-left: 100px;
        width: 100%;
    }
    @media ${device.tablet} {
        margin-left: 0;
    }
    @media ${device.desktopL} {
        margin: 55px 0;
    }
`

// --------------- AboutMe --------------- //

export const AboutMe__SectionWrapper = styled.div`
    height: 70%;
    box-sizing: border-box;
    position: absolute;
    top: 30px;
    max-width: 66.5%;
    backdrop-filter: blur(5px);
    background-color: rgba(255, 255, 255, .12);  
    
    @media ${device.mobileL} {
        margin-top: 100px;
        margin-left: 100px;
        /* font-size: 1rem;   */
        height: 90%;
    }
    @media ${device.tablet} {
        margin-left: 0;
        /* font-size: 1rem;   */
        height: 100%;
        width: 50%;
    }
    @media ${device.laptop} {
        /* font-size: 1rem;   */
        height: 90%;
        width: 50%;
    }
    @media ${device.laptopL} {
        /* font-size: 1rem;   */
        height: 70%;
    }
    @media ${device.desktopL} {
        /* font-size: 1rem;   */
        height: 80%;
        width: 100%;
    }
`

export const AboutMe__HeaderWrapper = styled.div`
    padding: 100px 0 0 100px;
    width: 100%;
    display: flex;
    box-sizing: border-box;
    
    @media ${device.mobileL} {
        width: 100%;
        padding: 0;
    }
    @media ${device.laptop} {
        padding: 40px 0 0 40px;
    }    
    @media ${device.laptopL} {
        padding: 20px 0 0 40px;
    }
`
export const AboutMe__Header = styled.div`
    height: 100%;
    flex-basis: 700px;
    display: inline-block;

    @media ${device.mobileL} {
        margin-left: 20px;
        width: 100%;
    }
    @media ${device.tablet} {
        margin-left: 0;
    }
        & h2{
            font-family: 'Mouse Memoirs', sans-serif;
            font-size: 2rem;
            color: azure;

            @media ${device.desktopL} {
            font-size: 3rem;  
            }
        }
`
export const AboutMe__Description = styled.div`
    margin-bottom: 200px;
    width: 100%;
    white-space: pre-line;

    @media ${device.mobileL} {
        margin-bottom: 10px;
    }
    @media ${device.tablet} {
        margin-bottom: 40px;
    }
    @media ${device.laptop} {
        margin-bottom: 40px;
    }
    @media ${device.laptopL} {
        margin-bottom: 50px;
    }
    & p{
        padding: 0 40px;
        font-family: 'Mouse Memoirs', sans-serif;
        color: azure;

        @media ${device.mobileL} {
            font-size: 1rem;  
        }
        @media ${device.tablet} {
            font-size: 1.3rem;  
        }
        @media ${device.desktopL} {
            font-size: 3rem;  
        }
    }
`
export const AboutME__FooterWrapper = styled.div`
    position: absolute;
    left: -160px;
    width: 100%;
    padding: 100px;

    @media ${device.mobileL} {
        margin-left: -60px;
    }
    @media ${device.tablet} {
        margin-left: 60px;
    }
    @media ${device.tablet} {
        padding: 0 100px 100px 100px;
    }
    @media ${device.desktopL} {
        margin-left: 100px;
    }
`

// --------------- FOOTER --------------- //

export const Footer__Wrapper = styled.div`
    height: 250px;
    display: flex;
    justify-content: center;
    margin-top: 30px;

    @media ${device.mobileL} {
        height: 350px;
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 1rem;
        width: 100%;
        margin-left: 120px;
        justify-content: space-between;
    }
    @media ${device.tablet} {
        height: 250px;
        font-size: 1rem;
        margin-left: 0;
        justify-content: space-between;
        flex-direction: row;
    }
    @media ${device.laptop} {
        height: 250px;
        font-size: 1rem;
        margin-left: 0;
        justify-content: space-between;
        flex-direction: row;
    }
    @media ${device.laptopL} {
        height: 250px;
        font-size: 1.3rem;
        margin-left: 0;
        justify-content: space-between;
        flex-direction: row;
    }
    
    @media ${device.desktopL} {
        height: 250px;
        width: 100%;
        font-size: 2rem;
        margin-left: -30px;
        justify-content: space-between;
        flex-direction: row;
    }


`

export const Footer__Description = styled.div`
    height: 4rem;
    width: 40%;
    box-sizing: border-box;
    & p{
        color: white;
    }
`
export const Footer__Links = styled.div`
    height: 4rem;
    width: 40%;
    display: flex;
    justify-content: flex-end;

    @media ${device.mobileL}{
        width: 100%;
        justify-content: center;
    }
    @media ${device.tablet}{
        width: 100%;
        justify-content: flex-end;
    }
    /* @media ${device.laptop}{
        width: 100%;
        justify-content: center;
    }
    @media ${device.laptopL}{
        width: 100%;
        justify-content: center;
    }
    @media ${device.desktopL}{
        width: 100%;
        justify-content: flex-end;
    } */
    & a{
        color: white;

        & svg{
            font-size: 40px;
            @media ${device.mobileL}{
                font-size: 40px;
            }
            @media ${device.desktopL} {
                font-size: 80px;
            }
        }
    }
`