import React, { useState } from 'react';

const BoxForm = props => {
    const [color, setColor] = useState('')
    const [size, setSize] = useState('')
    const [boxes, setBoxes] = useState([])

    const handleColor = (e) => {
        setColor(e.target.value)
    }
    const handleSize = (e) => {
        setSize(Number(e.target.value))
        console.log(size)
    }

    const newBox = (e) => {
        e.preventDefault()
        const updateBoxes = [...boxes, {color:color,size:size}]
        setBoxes(updateBoxes)
        console.log(updateBoxes)
        console.log(boxes)
        setColor('')
        setSize('')
    }

    return (
        <div>
            <form onSubmit={(e) => newBox(e)} className="form-container">
                <label htmlFor="colorInput">Color</label>
                <input type="text" id="colorInput" onChange={(e) => handleColor(e)} value={color} />
                <label htmlFor="size">Size</label>
                <input type="number" id="size" onChange={(e) => handleSize(e)} value={size} />
                <button>Add</button>
            </form>
            <div className="flex-container">
                {boxes.map((box) => {
                    return <div className="box" style={{ backgroundColor: box['color'], width: box['size'], height: box['size'] }}></div>
                })}
            </div>
        </div>
    )
}

export default BoxForm