import React from 'react'
import { WrapperH, H1 } from './ItemElements';

const Header = (props) => {
    // use destructuring to set all of the values out of attributes 
    const { name, image_url } = props.attributes

    // console.log(props.attributes)
    return (
        <WrapperH>
            <img src={image_url} alt={name} />
            <h1> {name}</h1>
        </WrapperH>
    )
}

export default Header
