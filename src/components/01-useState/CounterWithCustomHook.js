import React from 'react'
import { useCounter } from '../../hooks/useCounter';
import './counter.css';

export const CounterWithCustomHook = () => {

   const {state,increment,decrement,reset} =  useCounter(100);

    return (
        <>
            <h1>CounterWithHook: {state}</h1>
            <button onClick={()=>{increment(2)}} className="btn">+1</button>
            <button onClick={reset} className="btn">Reset</button>
            <button onClick={()=>{decrement(2)}} className="btn">-1</button>
        </>
    )
}
