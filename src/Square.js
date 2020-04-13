import React from 'react'
import "./App.css"

function Square(props) {
    const { number, onChange } = props;

    return <button className="square" onClick={() => { onChange(number) }}>
        {number}
    </button>

}

export default Square;