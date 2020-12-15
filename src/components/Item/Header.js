import React from 'react'
import { Wrapper, H1, Div, TotalReviews, StarRating, TotalOutOf } from './ItemElements';

const Header = (props) => {
    // use destructuring to set all of the values out of attributes 
    const { name, image_url, score } = props.attributes
    // const total = props.reviews.data.length
    console.log(props.reviews)
    return (
        <Wrapper>
            <H1><img src={image_url} alt={name} /> {name}</H1>
            <Div>
                <TotalReviews>  Guest Reviews</TotalReviews>
                <StarRating></StarRating>
                <TotalOutOf>{score}out of 5</TotalOutOf>
            </Div>
        </Wrapper>
    )
}

export default Header
