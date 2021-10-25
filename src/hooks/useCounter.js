import { useState } from "react"

export const useCounter = (initialState = 10) => {
const [state, setState] = useState(initialState);

const originalState = initialState;

const increment =(factor = 2)=>{
    setState(state+factor);
}

const decrement =(factor = 2)=>{
    setState(state-factor);
}
const reset =()=>{
    setState(originalState);
}

return {
    state,
    increment,
    decrement,
    reset
    };

}

