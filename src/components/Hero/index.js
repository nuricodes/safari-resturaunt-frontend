import React from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
// import { Link } from 'react-router-dom'
import { HeroContainer, HeroContent, HeroItems, HeroH1, HeroP, HeroBtn, NavLink } from './HeroElements';


const Hero = () => {

    return (
        <>
            <HeroContainer>
                <Navbar />
                <Sidebar />
                <HeroContent>
                    <HeroItems>
                        <HeroH1>Food with Roots</HeroH1>
                        <HeroP>Somali Cuisine</HeroP>
                        <HeroBtn>
                            <NavLink to={`/items/`}>View Menu</NavLink>
                        </HeroBtn>
                    </HeroItems>
                </HeroContent>
            </HeroContainer>

        </>

    )
}

export default Hero;
