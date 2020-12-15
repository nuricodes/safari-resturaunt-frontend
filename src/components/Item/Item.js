import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './Header'
import { Wrapper, LeftColumn, Reviews, RightColumn, ReviewForms } from './ItemElements'

const Item = (props) => {
    const [item, setItem] = useState({})
    const [reviews, setReviews] = useState({})
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        const slug = props.match.params.slug

        //api request
        axios.get(`https://safari-resturaunt-boston.herokuapp.com/api/v1/items/${slug}`)
            .then(res => {
                setItem(res.data.data)
                // setLoaded(true) //once true we can load in the header component
                setLoaded(true)

            })
            .catch(res => console.log(res))
    }, [])
    // console.log(item.relationships)

    return (
        <Wrapper>
            <LeftColumn>
                {loaded &&  //essentially this is a check to make sure we made our api request and now we have the data we want to pass down to our header component
                    <Header
                        attributes={item.attributes} //bc attributes is deeply nested if we try to call attributes on data before we've set the value for item object then we will get errors this can be avvoided by loaded state
                        reviews={item.relationships}

                    />
                }
                <Reviews></Reviews>
            </LeftColumn>
            <RightColumn>
                <ReviewForms>[Review Form Goes Here.]</ReviewForms>
            </RightColumn>
        </Wrapper>

    )
}

export default Item

