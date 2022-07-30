import React from "react";



function ProfileReviewForm(props) {
  return ( 
    <div>
      <h1> My Reviews! </h1>
        {props.value.reviews.map(review => (
        <p>{review.text} {review.company_name} {review.rating}</p>
        ))}
    </div>
  )
}

export default ProfileReviewForm;
