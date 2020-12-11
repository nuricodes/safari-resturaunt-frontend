import React from 'react';
import Navbar from '../Navbar';
// import Sidebar from '../Sidebar';
import { HeroContainer, HeroContent, HeroItems, HeroH1, HeroP, HeroBtn } from './HeroElements';

const Hero = () => {
    return (
        <HeroContainer>
            <Navbar />
            {/* <Sidebar /> */}
            <HeroContent>
                <HeroItems>
                    <HeroH1>Catchy title title</HeroH1>
                    <HeroP>Some more stuff</HeroP>
                    <HeroBtn>View Menu</HeroBtn>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero;
