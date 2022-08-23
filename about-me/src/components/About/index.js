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
                    <p>A few words about me :</p>
                    {/* <p>I'm interested in front-end development and future techs, like web3.</p> */}
                </MyHeader>
            </ContentHeader>
            <HeaderDescription>
                <p>const name = Artur</p>
                <p>const age = 27</p>
                <p>const favouriteTechnologies = React </p>
                <p>const learnPriority = typescript & firebase</p>
                <p>const thingsAfterWork = [walking, driving car with no sense, watch anime, earn more money]</p>
                <p>const hobbies = [marketing, cryptocurrency, investing, diving, table tenis, gaming, learning new technologies]</p>
                <p>const character = 
                    <pre><ul>
                        <li>results-oriented</li>
                        <li>highly organized</li>
                        <li>people-person</li>
                        <li>Positive</li>
                        <li>Flexible</li>
                        <li>Cooperative</li>
                        <li>Helpful</li>
                        <li>Patient</li>
                        </ul></pre>
                </p>
            </HeaderDescription>
            <Footer/>
        </HeaderWrapper>
    );
}

export default About;