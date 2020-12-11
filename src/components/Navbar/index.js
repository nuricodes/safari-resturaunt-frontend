import React from 'react'
import { Nav, NavLink, NavIcon, Menu } from './NavbarElements'


const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to='/'>SAFARI</NavLink>
                <NavIcon>
                    <Menu />
                </NavIcon>
            </Nav>
        </>
    )
}

export default Navbar
