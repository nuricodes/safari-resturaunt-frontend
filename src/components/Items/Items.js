import React from 'react'
import { Link } from 'react-router-dom'
import { SingleItem, ItemImage, ItemName, MenuContent, ItemDescription, LinkWrapper } from './ItemsElement'

const Item = (props) => {
    return (
        <SingleItem>
            <ItemImage><img src={props.attributes.image_url} alt={props.attributes.name}></img></ItemImage>
            <MenuContent>
                <ItemName>{props.attributes.name} <span>{props.attributes.price}</span></ItemName>
                <ItemDescription>{props.attributes.description}</ItemDescription>
                <LinkWrapper>
                    <Link to={`/items/${props.attributes.slug}`}>Ratings</Link>
                </LinkWrapper>
            </MenuContent>
        </SingleItem>
    )
}

export default Item