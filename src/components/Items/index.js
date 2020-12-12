import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import Item from './Item';
import { Home, Header, Subheader, Grid } from './ItemsElement'



const Items = () => {
    const [items, setItems] = useState([])

    useEffect(() => {
        // get items from api
        // update items in our state

        axios.get('/api/v1/items.json')
            .then(res => setItems(res.data.data))
            .catch(res => console.log(res), [items.length])
    })

    const grid = items.map(item => {
        return (
            <>
                <Item
                    key={item.attributes.name}
                    attributes={item.attributes}
                />

            </>

        )
    })
    return (
        <Fragment>
            <Home>
                <Header>
                    <h1>Check out our Top Rated Dishes</h1>
                    <p> --irresistably good</p>
                    <Subheader>Do I want this?</Subheader>
                </Header>
                <Grid>
                    {grid}
                </Grid>
            </Home>
        </Fragment>
    )
}

export default Items

