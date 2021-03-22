import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import Header from './Header'
import ReviewForm from '../Reviews/ReviewForm'
import { Wrapper, Column, Main, Reviews } from './ItemElements'

const ReviewItem = (props) => {
    const [item, setItem] = useState({})
    const [loaded, setLoaded] = useState(false)
    const [validTitle, setValidTitle] = useState(true);
    const [validDescription, setValidDescription] = useState(true);
    const [form, setForm] = useState({
        title: "",
        description: ""
    })

    useEffect(() => {
        const slug = props.match.params.slug;
        axios.get(`https://safari-resturaunt-boston.herokuapp.com/api/v1/items/${slug}`)
            .then(res => {
                setItem(res.data.data)
                setLoaded(true)
            })
            .catch(res => console.log(res))
    }, [props.match.params.slug])

    const handleChange = (e) => {
        e.preventDefault();
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const validateFields = () => {
        setValidTitle(form.title.length <= 0 ? false : true);
        setValidDescription(form.description.length <= 0 ? false : true);
    }

    const resetForm = () => {
        setForm({
            title: "",
            description: ""
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        validateFields();

        if (!validDescription || !validTitle) {
            console.log({ validDescription })
            return;
        }


        axios.post('http://localhost:3000/api/v1/reviews', { ...form, item: item.id })
            .then(resp => {
                console.log(resp)
                resetForm();
            })
            .catch(error => {
                // no-op
                console.log(error);
            })
    }

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
                            <Reviews />
                        </Main>
                    </Column>
                    <Column>
                        <ReviewForm
                            handleChange={handleChange}
                            handleSubmit={handleSubmit}
                            attributes={item.attributes}
                            review={form}
                            validTitle={validTitle}
                            validDescription={validDescription}
                        />
                    </Column>
                </Fragment>
            }
        </Wrapper>

    )
}
export default ReviewItem;