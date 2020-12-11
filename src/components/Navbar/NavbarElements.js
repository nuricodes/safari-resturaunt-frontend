import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { GiCamel } from 'react-icons/gi'

export const Nav = styled.nav`
    background: transparent;
    letter-spacing: 5px;
    height: 80px;
    display: flex;
    justify-content: center;
    font-weight: 700;
`;

export const NavLink = styled(Link)`
    color: white;
    font-size: 2rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    cursor: pointer;

    @media screen and (max-width: 400px) {
        position: absolute;
        top: 10px;
        left: 25px;
    }
`;

export const NavIcon = styled.div`
display: block;
position: absolute;
top: 25px;
left: 40px;
cursor: pointer;
color: #fff;

    p {
        transform: translated(-175%, 100%);
        font-weight: bold;
    }
    `

export const Menu = styled(GiCamel)`
    font-size: 2.4rem;
    transform: translate(-50%, -15%);
    color: white;

    @media screen and (max-width: 650px) {
        display: none;
    }
`
