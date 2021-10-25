import React,{useState} from 'react'
import './counter.css';
export const CounterApp = () => {

    const [state,setState] = useState({
        counter1: 0,
        counter2: 0,
        counter3: 0,
    })

    const {counter1,counter2,counter3} = state;  //fundamental para que funcione, si no, no conoce counter1,2,3

    return (
         <>
         <h1>Counter1 {counter1}</h1>
         
        <button className="btn btn-primary" onClick={()=>{setState({...state,counter1:counter1 + 1})}}> +1</button>

        <h1>Counter2 {counter1}</h1>
        <button className="btn btn-primary" onClick={()=>{setState({...state,counter2:counter2 + 1})}}> +1</button>

        <h1>Counter3 {counter1}</h1>
        <button className="btn btn-primary" onClick={()=>{setState({...state,counter3:counter3 + 1})}}> +1</button>
        </>
    )
}