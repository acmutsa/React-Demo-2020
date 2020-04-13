import React from 'react'
import "./App.css"

function Square(props) {
    const { value } = props;

    return <button className="square" onClick={() => { alert('Hi') }}>
        {value}
    </button>

}

export default Square;