import ReviewCard from "./ReviewCard"

function ReviewList({reviews,deleteReview}) {

return (

<div>

{reviews.map((review)=>(
<ReviewCard
key={review.id}
review={review}
deleteReview={deleteReview}
/>
))}

</div>

)
}

export default ReviewList