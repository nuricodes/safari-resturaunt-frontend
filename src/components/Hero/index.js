import React from 'react';
import Navbar from '../Navbar';
// import Sidebar from '../Sidebar';
import { Link } from 'react-router-dom'
import { HeroContainer, HeroContent, HeroItems, HeroH1, HeroP, HeroBtn } from './HeroElements';


const Hero = () => {

    return (
        <>
            <HeroContainer>
                <Navbar />
                {/* <Sidebar /> */}
                <HeroContent>
                    <HeroItems>
                        <HeroH1>Where Home meets Harlem</HeroH1>
                        <HeroP>Somali Cuisine</HeroP>
                        <HeroBtn>
                            <Link to={`/items/`}>View Menu</Link>
                        </HeroBtn>
                    </HeroItems>
                </HeroContent>
            </HeroContainer>

        </>

    )
}

export default Hero;
