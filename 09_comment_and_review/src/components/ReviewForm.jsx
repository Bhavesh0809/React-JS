import { useState } from "react";

function ReviewForm({addReview}) {

const [name,setName] = useState("")
const [comment,setComment] = useState("")
const [rating,setRating] = useState("")

const handleSubmit = (e) => {
  e.preventDefault()

  const newReview = {
    id: Date.now(),
    name,
    comment,
    rating
  }

  addReview(newReview)

  setName("")
  setComment("")
  setRating("")
}

return (
<form onSubmit={handleSubmit}>

<input
placeholder="Your Name"
value={name}
onChange={(e)=>setName(e.target.value)}
/>

<textarea
placeholder="Write Comment"
value={comment}
onChange={(e)=>setComment(e.target.value)}
/>

<select
value={rating}
onChange={(e)=>setRating(e.target.value)}
>

<option value="">Rating</option>
<option value="1">⭐</option>
<option value="2">⭐⭐</option>
<option value="3">⭐⭐⭐</option>
<option value="4">⭐⭐⭐⭐</option>
<option value="5">⭐⭐⭐⭐⭐</option>

</select>

<button>Add Review</button>

</form>
)
}

export default ReviewForm