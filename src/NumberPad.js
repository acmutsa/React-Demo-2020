import React from 'react'
import Square from './Square'

export default function NumberPad(props) {
    const { onValueChange, onClear } = props;
    return <div>
        <div className="row">
            <Square number={1} onChange={onValueChange} />
            <Square number={2} onChange={onValueChange} />
            <Square number={3} onChange={onValueChange} />
        </div>
        <div className="row">
            <Square number={4} onChange={onValueChange} />
            <Square number={5} onChange={onValueChange} />
            <Square number={6} onChange={onValueChange} />
        </div>
        <div className="row">
            <Square number={7} onChange={onValueChange} />
            <Square number={8} onChange={onValueChange} />
            <Square number={9} onChange={onValueChange} />
        </div>
        <div className="row">
            <Square number={0} onChange={onValueChange} />
        </div>
        <button onClick={onClear}> clear </button>
    </div>
}