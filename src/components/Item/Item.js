import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import Header from './Header'
import ReviewForm from './ReviewForm'
import { Wrapper, Column, Main, Reviews, ReviewForms } from './ItemElements'

const Item = (props) => {
    const [item, setItem] = useState({})
    const [review, setReview] = useState({})
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        const slug = props.match.params.slug

        //api request
        axios.get(`https://safari-resturaunt-boston.herokuapp.com/api/v1/items/${slug}`)
            .then(res => {
                setItem(res.data.data)
                setReview(res.data.included)
                // setLoaded(true) //once true we can load in the header component
                setLoaded(true)

            })
            .catch(res => console.log(res))
    }, [])

    const handleChange = (e) => {
        e.preventDefault();

        // console.log('name:', e.target.name, 'value:', e.target.value) //use this to update review in our state
        setReview(Object.assign({}, review, { [e.target.name]: e.target.value }))
        console.log('review:', review)
    }
    for (let i = 0; i < review.length; i++) {
        var itemID = review[i].id;
        console.log(itemID)
    }
    console.log(review.id)
    const handleSubmit = (e) => {
        e.preventDefault();

        const csrfToken = document.querySelector('[name=csrf-token]').content
        axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken
        // submit new review to our api which will update in our db
        const item_id = item.id
        axios.post('https://safari-resturaunt-boston.herokuapp.com/api/v1/reviews', { review, item_id })
            .then(res => {
                debugger
            })
            .catch(res => { })
    }


    return (
        <Wrapper>
            {
                loaded &&  //essentially this is a check to make sure we made our api request and now we have the data we want to pass down to our header component
                <Fragment>
                    <Column>
                        <Main>
                            <Header
                                attributes={item.attributes}
                                reviews={item.included}
                            />
                            <Reviews></Reviews>
                        </Main>
                    </Column>

                    <Column>
                        <ReviewForm
                            handleChange={handleChange}
                            handleSubmit={handleSubmit}
                            attributes={item.attributes}
                            review={review}
                        />
                    </Column>
                </Fragment>
            }
        </Wrapper>

    )
}

export default Item

