import React from 'react'
import Square from './Square'

export default function NumberPad(props) {
    const { value, onValueChange } = props;
    return <div>
        <div className="row">
            <Square number={1} value={value} onChange={onValueChange} />
            <Square number={2} value={value} onChange={onValueChange} />
            <Square number={3} value={value} onChange={onValueChange} />
        </div>
        <div className="row">
            <Square number={4} value={value} onChange={onValueChange} />
            <Square number={5} value={value} onChange={onValueChange} />
            <Square number={6} value={value} onChange={onValueChange} />
        </div>
        <div className="row">
            <Square number={7} value={value} onChange={onValueChange} />
            <Square number={8} value={value} onChange={onValueChange} />
            <Square number={9} value={value} onChange={onValueChange} />
        </div>
        <div className="row">
            <Square number={0} value={value} onChange={onValueChange} />
        </div>
    </div>
}