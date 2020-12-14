import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Item from './Items';
import { Title, Wrapper, Menu, Nav2, H2, NavIcon2, Menu2 } from './ItemsElement'




const Items = () => {
    const [items, setItems] = useState([])

    useEffect(() => {
        // get items from api
        // update items in our state

        axios.get('https://safari-resturaunt-boston.herokuapp.com/api/v1/items.json')
            .then(res => setItems(res.data.data))
            .catch(res => console.log(res), [items.length])
    })

    const grid = items.map(item => {
        return (
            <Item
                key={item.attributes.name}
                attributes={item.attributes}
            />

        )
    })
    return (
        <>
            <Nav2>
                <H2>SAFARI</H2>
                <NavIcon2>
                    <Menu2 />
                </NavIcon2>
            </Nav2>
            <Wrapper>
                <Title>
                    <h1><span>Fresh Food, Inspired Roots</span> Our Menu</h1>
                </Title>
                <Menu>
                    {grid}
                </Menu>
            </Wrapper>
        </>
    )
}

export default Items

