import React from 'react'
import { Nav, NavLink, NavIcon, HamIcon, HamMenu } from './NavbarElements'


const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to='/'>SAFARI</NavLink>
                <NavIcon>
                </NavIcon>
                <HamIcon>
                    <HamMenu />
                </HamIcon>
            </Nav>
        </>
    )
}

export default Navbar
