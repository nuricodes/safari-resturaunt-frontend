import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'

const Item = (props) => {
    return (
        <div className="card">
            <div className="item-name">{props.attributes.name}</div>
            <div className="item-image"><img src={props.attributes.image_url} alt={props.attributes.name}></img></div>
            <div className="item-avg-score">{props.attributes.avg_score}</div>
            <div className="item-link">
                <Link to={`/items/${props.attributes.slug}`}>View Item</Link>
            </div>

        </div>
    )
}

export default Item