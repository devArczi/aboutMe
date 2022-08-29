import React from "react";
import styled from "styled-components";
import { motion } from 'framer-motion';
import Footer from "../Footer";
import Img from "../../assets/myImg.jpeg"
import { HomeWrapper,HomeHeader, MyImg, MainHeader, HomeDescription } from "../../styles";

const Home = () =>{
    return(
        <HomeWrapper as={motion.div}
        transition={{delay:0.5}}
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        >
            <HomeHeader>
                <MyImg>
                    <img src={Img}/>
                </MyImg>
                <MainHeader>
                    <p>Hello :) I'm Artur</p>
                    <p>I'm interested in front-end development and future techs, like web3.</p>
                </MainHeader>
            </HomeHeader>
            <HomeDescription>
                <p>Self-taught Front-End Social Developer</p>
                <p>React fan  |  I wanna achieve best basics in front-end coding  |  coffee lover</p>
                <p>I want become great developer and work with many awesome people !</p>
            </HomeDescription>
            <Footer/>
        </HomeWrapper>
    )
}

export default Home;