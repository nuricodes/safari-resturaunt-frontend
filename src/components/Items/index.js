import React, { useState, useEffect, Fragment } from 'react'
// import { ProductsContainer }
import axios from 'axios'


const Items = () => {
    const [items, setItems] = useState([])

    useEffect(() => {
        // get items from api
        // update items in our state

        axios.get('/api/v1/items.json')
            .then(res => setItems(res.data.data))
            .catch(res => console.log(res), [items.length])
    })

    const testimonials = items.map(item => {
        return (
            <>
                <h5 key={item.attributes.name}>{item.attributes.name}<span>{item.attributes.price}</span></h5>
                <img src={item.attributes.image_url} alt={item.attributes.name} />
                <div className="list-score">{item.attributes.description}</div>

            </>

        )
    })
    return (
        <Fragment>
            <div className="header">
                <h1>Check out our Top Rated Dishes</h1>
                <p><i>--irresistably good</i></p>
                <div>{testimonials}</div>

            </div>
        </Fragment>
    )
}

export default Items
