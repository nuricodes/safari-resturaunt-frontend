import styled from 'styled-components'
import { GiCamel } from 'react-icons/gi'

// BLACK NAV
export const Nav2 = styled.nav`
    background: Black;
    letter-spacing: 5px;
    height: 80px;
    display: flex;
    justify-content: center;
    font-weight: 700;
`;

export const H2 = styled.div`
    color: white;
    font-size: 2rem;
    display: flex;
    align-items: center;

    @media screen and (max-width: 400px) {
        position: absolute;
        top: 10px;
        left: 25px;
    }
`;

export const NavIcon2 = styled.div`
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

export const Menu2 = styled(GiCamel)`
    font-size: 2.4rem;
    transform: translate(-50%, -15%);
    color: white;

    @media screen and (max-width: 650px) {
        display: none;
    }
`

// MENU
export const Wrapper = styled.div`
width: 1200px;
margin: 50px auto;
`
export const Title = styled.div`
text-align: center;
margin-bottom: 60px;

h1 {
    text-transform: capitalize;
    font-size: 42px;
    position: relative;
    display: inline-block;
    padding-bottom: 10px
}

span {
    display: block;
    font-size: 20px;
    font-style: italic;
    margin-bottom: -10px;
}

`

export const MenuContent = styled.div`
margin-left: 15px;
`
export const Menu = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space - between;
`

export const SingleItem = styled.div`
flex-basis: 580px;
margin-bottom: 40px;
padding-bottom: 40px;
border-bottom: 1px solid #dddd;
display: flex;
flex-direction: row;
align-items: center;
`
export const ItemImage = styled.div`
img {
    width: 200px;
    height: 150px;
    margin right: 30px;
    border-radius: 50 %;
    -moz-border-radius: 50 %;
    -webkit-border-radius: 50 %;
    border: 1px solid #ddd;
    padding: 3px;
    transition: .5s;
}

img: hover {
    border-radius: 0;
}
`
export const ItemName = styled.div`
text-transform: capitalize;
font - size: 22px;
border-bottom: 1px dashed #333;
margin-bottom: 5px;
padding-bottom: 5px;

span {
    float: right;
    color: #e31837;
    font-style: italic;
}
`
export const ItemDescription = styled.div`
font-size: 18px
    `


// FOR EACH ITEM



export const LinkWrapper = styled.div`
margin: 30px 0 20px 0;
height: 50px;
border-color: e31837;

a {
    color: #fff;
    background: #e31837;
    transition: 0.2s ease - out;
    padding: 10px 50px;
    border: 1px solid #000;
    width: 100 %;
    text-decoration: none;
}

a: hover {
    background: #ffc500;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
}
`