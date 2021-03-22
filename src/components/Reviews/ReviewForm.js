import React from 'react'
import { WrapperF, H1, Field, Label, RatingContainer, Button } from './ReviewFormElement'

const ReviewForm = (props) => {

    return (
        <>
            <H1>Please leave us a review here:</H1>
            <WrapperF>
                <form onSubmit={(e) => props.handleSubmit(e)}>
                    <Label>Name</Label>
                    <div>
                        <Field>
                            <input style={{border: !props.validTitle ? '2px solid red': '1px solid black'}} onChange={props.handleChange} value={props.review.title} type="text" name="title" placeholder="Enter Your Name" />
                        </Field>
                        {!props.validTitle && <p style={{fontSize: '12px', color: 'red'}}>Invalid Title</p>}
                    </div>
                    <Label>How was your experience?</Label>
                    <div>
                        <Field>
                            <input style={{border: !props.validDescription ? '2px solid red': '1px solid black'}} onChange={props.handleChange} value={props.review.description} type="text" name="description" placeholder="How was your experience?" />
                        </Field>
                        {!props.validDescription && <p style={{fontSize: '12px', color: 'red'}}>Invalid Description</p>}
                    </div>
                    <Field>
                        <RatingContainer>
                            <div className="rating-title-text">Rate This Dish</div>

                        </RatingContainer>
                    </Field>
                    <Button type="submit" onClick={(e) => props.handleSubmit(e)}>Submit Your Review</Button>
                </form>
            </WrapperF>
        </>
    )
}

export default ReviewForm
