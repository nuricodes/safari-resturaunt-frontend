import React from 'react'
import { Nav, NavLink, NavIcon, Menu, HamMenu } from './NavbarElements'


const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to='/'>SAFARI</NavLink>
                <NavIcon>
                    <Menu />
                </NavIcon>
                <HamMenu />
            </Nav>
        </>
    )
}

export default Navbar
