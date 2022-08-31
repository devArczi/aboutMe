import React from 'react';
import { motion } from 'framer-motion';
import Footer from '../Footer';
import {AboutMe__SectionWrapper , AboutMe__HeaderWrapper, AboutMe__Header, AboutMe__Description,AboutME__FooterWrapper} from '../../styles'


const About = () => {
    return (
        <AboutMe__SectionWrapper as={motion.div}
        transition={{delay:0.5}}
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        >
            <AboutMe__HeaderWrapper>
                <AboutMe__Header>
                    <h2>A few words about me :</h2>
                </AboutMe__Header>
            </AboutMe__HeaderWrapper>
            <AboutMe__Description>
                <p>const name = Artur {"\n"}
                const age = 27{"\n"}
                const favouriteTechnologies = React{"\n"}
                const learnPriority = typescript & firebase{"\n"}
                const thingsAfterWork = [walking, driving car with no sense, watch anime, earn more money]{"\n"}
                const hobbies = [marketing, cryptocurrency, investing, diving, table tenis, gaming, learning new technologies]{"\n"}
                const character = 
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
            </AboutMe__Description>
            <AboutME__FooterWrapper>
               <Footer/> 
            </AboutME__FooterWrapper>
            
        </AboutMe__SectionWrapper>
    );
}

export default About;