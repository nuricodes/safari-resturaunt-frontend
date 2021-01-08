import React from 'react'

const ReviewForm = (props) => {
    return (
        <div className="WrapperF">
            <form onSubmit={(e) => {
                e.preventDefault();
                console.log("Hello")
                props.handleSubmit(e)
            }}>
                <div className="field">
                    <input onChange={props.handleChange} value={props.review.title} type="text" name="title" placeholder="Enter Your Name" />
                </div>
                <div className="field">
                    <input onChange={props.handleChange} value={props.review.description} type="text" name="description" placeholder="How was your experience?" />
                </div>
                <div className="field">
                    <div className="rating-container">
                        <div className="rating-title-text">Rate This Dish</div>
                        [Star rating Goes Here]
                    </div>
                </div>
                <button type="submit">Submit Your Review</button>
            </form>
        </div >
    )
}

export default ReviewForm
