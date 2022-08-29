import React from "react";
import styled from "styled-components";
import { motion } from 'framer-motion';
import Footer from "../Footer";
import Img from "../../assets/myImg.jpeg"

export const HeaderWrapper = styled.div`
    height: 600px;
    box-sizing: border-box;
    position: absolute;
    top: 30px;
    max-width: 56.5%;
`
export const MyImg = styled.div`
    height: 200px;
    flex-basis: 200px;
    display: inline-block;
        & img{
            height: 270px;
            border-radius: 60%;
        }
`
export const MyHeader = styled.div`
    height: 100%;
    flex-basis: 700px;
    display: inline-block;
    margin-left: 30px;
        & p{
            font-family: 'Mouse Memoirs', sans-serif;
            font-size: 2rem;
            color: azure;
        }
`
export const ContentHeader = styled.div`
    padding: 100px 0 0 100px;
    width: 100%;
    display: flex;
    box-sizing: border-box;
`
export const HeaderDescription = styled.div`
    margin-bottom: 200px;
    width: 100%;
    white-space: pre-line;
    & p{
        padding: 0 40px;
        font-family: 'Mouse Memoirs', sans-serif;
            font-size: 1rem;
            color: azure;
    }
`
const Header = () =>{
    return(
        <HeaderWrapper as={motion.div}
        transition={{delay:0.5}}
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        >
            <ContentHeader>
                <MyImg>
                    <img src={Img}/>
                </MyImg>
                <MyHeader>
                    <p>Hello :) I'm Artur & </p>
                    <p>I'm interested in front-end development and future techs, like web3.</p>
                </MyHeader>
            </ContentHeader>
            <HeaderDescription>
                <p>Self-taught Front-End Social Developer</p>
                <p>React fan  |  I wanna achieve best basics in front-end coding  |  coffee lover</p>
                <p>I want become great developer and work with many awesome people !</p>
            </HeaderDescription>
            <Footer/>
        </HeaderWrapper>
    )
}

export default Header;