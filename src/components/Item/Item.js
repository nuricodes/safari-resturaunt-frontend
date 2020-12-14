import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Item = (props) => {
    const [state, setState] = useState([])
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        const slug = props.match.params.slug

        axios.get(`https://safari-resturaunt-boston.herokuapp.com/api/v1/items/${slug}.json`)
            .then(res => setState(res.data))
            .catch(res => console.log(res))
    }, [])
    return (
        <div>
            <h1>This is the specific item#show route</h1>
        </div>
    )
}

export default Item
