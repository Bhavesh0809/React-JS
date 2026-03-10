export default function Card({data,onEdit,onDelete}){

return(

<div className="card">

<img src={data.img} alt="" />

<h3>{data.name}</h3>

<p>{data.nation}</p>

<p>{"⭐".repeat(data.rating)}</p>

<button onClick={()=>onEdit(data)}>
Edit
</button>

<button onClick={()=>onDelete(data.id)}>
Delete
</button>

</div>

)

}