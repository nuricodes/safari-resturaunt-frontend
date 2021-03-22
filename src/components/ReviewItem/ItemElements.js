import styled from 'styled-components';

export const Wrapper = styled.div`
    margin-left: auto;
    margin-right: auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
`
export const Column = styled.div`
    background: #fff;
    height: 100vh;
    overflow: scroll;

    &:last-child {
        background: #000;
    }
`
export const Main = styled.div`
    padding-left: 50px
    
`
// Wrapper for the Header
export const WrapperH = styled.div`
    padding: 50px 100px 50px 0;
    font-size: 18px;

    img {
        height: 200px;
        width: 200px;
        border-radius: 100%;
        border: 1px solid rgba(0,0,0,0.1);
        display: flex;
        margin: 0 auto;
        margin-bottom: 45px
    }
   
`

export const Reviews = styled.div`
color: blue;
`

export const RightColumn = styled.div`
color: blue;
`


export const H1 = styled.div`
color: blue;
`
export const Header = styled.div`
color: blue;
`

