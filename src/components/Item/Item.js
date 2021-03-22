import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import Header from './Header'
import ReviewForm from '../Reviews/ReviewForm'
import { Wrapper, Column, Main, Reviews } from './ItemElements'

const Item = (props) => {
    const [item, setItem] = useState({})
    const [review, setReview] = useState({})
    const [loaded, setLoaded] = useState(false)
    const [form, setForm] = useState({
        title: "",
        description: ""
    })

    useEffect(() => {
        const slug = props.match.params.slug;

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

        //test
        // console.log('name:', e.target.name, 'value:', e.target.value) //use this to update review in our state
        setForm({ ...form, [e.target.name]: e.target.value })
        // const l = { ...review, [e.target.name]: e.target.value }
        console.log('review:', form)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // console.log('review:', review)

        // const item = item.id
        axios.post('http://localhost:3000/api/v1/reviews', { ...form, item: item.id })
            .then(resp => {
                console.log(resp)
                setForm({
                    title: "",
                    description: ""
                })
            })
            .catch(res => {
                console.log(res)
            })


    }



    // console.log(oneReview.title)
    return (
        <Wrapper>
            {
                loaded &&  //this is a check to make sure we made our api request and now we have the data we want to pass down to our header component
                <Fragment>
                    <Column>
                        <Main>
                            <Header
                                attributes={item.attributes}
                                reviews={item.included}
                            />
                            <Reviews>

                            </Reviews>
                        </Main>
                    </Column>

                    <Column>
                        <ReviewForm
                            handleChange={handleChange}
                            handleSubmit={handleSubmit}
                            attributes={item.attributes}
                            review={form}
                        />
                    </Column>
                </Fragment>
            }
        </Wrapper>

    )
}

export default Item

