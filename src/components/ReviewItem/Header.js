import React from 'react'
import { WrapperH} from './ItemElements';

const Header = (props) => {
    const { name, image_url } = props.attributes
    return (
        <WrapperH>
            <img src={image_url} alt={name} />
            <h1> {name}</h1>
        </WrapperH>
    )
}

export default Header
