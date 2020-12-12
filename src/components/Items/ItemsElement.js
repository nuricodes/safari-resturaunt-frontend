import styled from 'styled-components'

export const Home = styled.div`
    text-align: center;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
`
export const Header = styled.div`
    padding: 100px 100px 10px 100px;

    h1 {
        font-size: 42px;
    }

    p {
        font-size: .75rem
    }

`
export const Subheader = styled.div`
    font-weight: 300;
    font-size: 26px;
`
export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
    width: 100%;
    padding: 20px;
`

