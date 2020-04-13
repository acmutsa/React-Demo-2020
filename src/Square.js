import React from 'react'
import "./App.css"

function Square(props) {
    const { number, value, onChange } = props;

    return <button className="square" onClick={() => { onChange(value, number) }}>
        {number}
    </button>

}

export default Square;