import { useState, useEffect } from "react"
import Rating from "./Rating"

export default function Form({ addCard, editData, updateCard }) {

    const [name, setName] = useState("")
    const [nation, setNation] = useState("")
    const [img, setImg] = useState("")
    const [rating, setRating] = useState(0)

    useEffect(() => {

        if (editData) {
            setName(editData.name)
            setNation(editData.nation)
            setImg(editData.img)
            setRating(editData.rating)
        }

    }, [editData])
    const handleImage = (e) => {
        const file = e.target.files[0]
        const reader = new FileReader()
        reader.onloadend = () => {
            setImg(reader.result)
        }

        reader.readAsDataURL(file)

    }


    const handleSubmit = (e) => {

        e.preventDefault()

        const data = {

            id: editData ? editData.id : Date.now(),
            name,
            nation,
            img,
            rating

        }

        if (editData) {

            updateCard(data)

        } else {

            addCard(data)

        }

        setName("")
        setNation("")
        setImg("")
        setRating(0)

    }

    return (

        <form onSubmit={handleSubmit}>

            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />

            <select
                value={nation}
                onChange={(e) => setNation(e.target.value)}
            >

                <option value="">Nationality</option>
                <option>India</option>
                <option>USA</option>
                <option>UK</option>

            </select>

            <input type="file" onChange={handleImage} />

            <Rating rating={rating} setRating={setRating} />

            <button type="submit">

                {editData ? "Update" : "Save"}

            </button>

        </form>

    )

}