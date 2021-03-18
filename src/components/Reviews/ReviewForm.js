import React from 'react'
import { WrapperF, H1, Field, Label, RatingContainer, Button } from './ReviewFormElement'

const ReviewForm = (props) => {
    return (
        <>
            <H1>Please leave us a review here:</H1>
            <WrapperF>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    console.log("Hello")
                    props.handleSubmit(e)
                }}>
                    <Label>Name</Label>
                    <Field>
                        <input onChange={props.handleChange} value={props.review.title} type="text" name="title" placeholder="Enter Your Name" />
                    </Field>
                    <Label>How was your experience?</Label>
                    <Field>
                        <input onChange={props.handleChange} value={props.review.description} type="text" name="description" placeholder="How was your experience?" />
                    </Field>
                    <Field>
                        <RatingContainer>
                            <div className="rating-title-text">Rate This Dish</div>

                        </RatingContainer>
                    </Field>
                    <Button type="submit">Submit Your Review</Button>
                </form>
            </WrapperF>
        </>
    )
}

export default ReviewForm
