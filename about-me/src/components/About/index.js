import React from 'react';
import { motion } from 'framer-motion';
import Footer from '../Footer';
import {HeaderWrapper , ContentHeader, MyHeader, HeaderDescription} from '../Header/index'


const About = () => {
    return (
        <HeaderWrapper as={motion.div}
        transition={{delay:0.5}}
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        >
            <ContentHeader>
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
    );
}

export default About;