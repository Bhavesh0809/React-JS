function ReviewCard({review,deleteReview}) {

return (

<div className="card">

<h3>{review.name}</h3>

<p>{review.comment}</p>

<p>Rating : {"⭐".repeat(review.rating)}</p>

<button onClick={()=>deleteReview(review.id)}>Delete</button>

</div>

)
}

export default ReviewCard