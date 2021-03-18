import React from 'react'
import { Nav, NavLink, NavIcon, HamIcon, HamMenu } from './NavbarElements'


const Navbar = ({ toggle }) => {
    return (
        <>
            <Nav>
                <NavLink to='/'>SAFARI</NavLink>
                <NavIcon onClick={toggle}>
                </NavIcon>
                <HamIcon>
                    <HamMenu />
                </HamIcon>
            </Nav>
        </>
    )
}

export default Navbar
