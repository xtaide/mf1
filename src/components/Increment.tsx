import React from "react";
// @ts-ignore
import {useStore} from 'store/store'
import './Increment.css'

export const Increment: React.FC = () => {
    const {increment} = useStore()
    return (
        <button className='increment' onClick={increment }>increment</button>
    );
}