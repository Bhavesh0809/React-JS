import { useState, useEffect } from "react";

function App() {

const [name,setName] = useState("");
const [comment,setComment] = useState("");
const [rating,setRating] = useState("");
const [reviews,setReviews] = useState([]);
const [editId,setEditId] = useState(null);

useEffect(()=>{

const saved = JSON.parse(localStorage.getItem("reviews"));

if(saved){
setReviews(saved);
}

},[])

useEffect(()=>{

localStorage.setItem("reviews",JSON.stringify(reviews));

},[reviews])

const handleSubmit = (e)=>{
e.preventDefault();

if(editId){

const updated = reviews.map((r)=>
r.id === editId ? {...r,name,comment,rating} : r
)

setReviews(updated);
setEditId(null);

}else{

const newReview = {
id: Date.now(),
name,
comment,
rating
}

setReviews([...reviews,newReview]);
}

setName("");
setComment("");
setRating("");
}

const deleteReview = (id)=>{
setReviews(reviews.filter((r)=>r.id !== id))
}

const editReview = (review)=>{
setName(review.name)
setComment(review.comment)
setRating(review.rating)
setEditId(review.id)
}

return (

<div style={{padding:"20px"}}>

<h2>Bhavesh's Comment & Review System</h2>

<form onSubmit={handleSubmit}>

<input
placeholder="Name"
value={name}
onChange={(e)=>setName(e.target.value)}
/>

<br/><br/>

<textarea
placeholder="Write comment"
value={comment}
onChange={(e)=>setComment(e.target.value)}
/>

<br/><br/>

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

<br/><br/>

<button>
{editId ? "Update Review" : "Add Review"}
</button>

</form>

<hr/>

{reviews.map((r)=>(
<div key={r.id} style={{
border:"1px solid #ccc",
padding:"10px",
marginTop:"10px",
width:"300px"
}}>

<h3>Name : {r.name}</h3>

<p>Comment : {r.comment}</p>

<p>Rating : {"⭐".repeat(r.rating)}</p>

<button onClick={()=>editReview(r)}>
Edit
</button>

<button onClick={()=>deleteReview(r.id)}>
Delete
</button>

</div>
))}

</div>

)

}

export default App;