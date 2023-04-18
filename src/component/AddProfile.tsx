import React, {useState} from 'react'
import {IState as Props} from '../App'

interface IProps {
    people: Props["people"]
    setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>
}

const AddProfile: React.FC<IProps> = ({people, setPeople}) => {

    const [input, setInput] = useState({
        name: "",
        age: "",
        desc: "",
        img: ""
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const handleClick = (): void => {
        if(!input.name || !input.age || !input.desc || !input.img) {
            return
        }
        setPeople([...people, 
            {
                name: input.name, 
                age: parseInt(input.age), 
                url: input.img, 
                desc: input.desc
            }
        ])
    }

  return (
    <div className="AddToList">
        <input
            type="text"
            placeholder="Name"
            className="AddToLIst-input"
            value={input.name}
            onChange={handleChange}
            name="name"
        />
        <input
            type="text"
            placeholder="Age"
            className="AddToLIst-input"
            value={input.age}
            onChange={handleChange}
            name="age"
        />
        <input
            type="text"
            placeholder="Image Url"
            className="AddToLIst-input"
            value={input.img}
            onChange={handleChange}
            name="img"
        />
        <textarea
            placeholder="Description"
            className="AddToLIst-input"
            value={input.desc}
            onChange={handleChange}
            name="desc"
        />
        <button className="AddToList-btn" onClick={handleClick}>Add to List</button>
    </div>

  )
}

export default AddProfile