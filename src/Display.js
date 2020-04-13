import React from 'react';
import './App.css';

export default function Display(props) {
    const { value } = props;

    return <div className="display">{value}</div>
}