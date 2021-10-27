import React, { useState } from 'react'


import '../02-useEffect/effects.css'
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks'

//OBS: voy a usar useRef para mostrar como si llamo a un componente y mientras carga, lo cancelo,  el useRef me
// limpia la referencia y no se rompe nada.


export const RealExampleRef = () => {

    const [show, setShow] = useState(false);
    return (
        <div>
            <h1>RealExampleRef</h1>
            <hr />
            
            {show && <MultipleCustomHooks />}

            <button className="btn btn-primary mt-5"
                    onClick={() => {
                        setShow(!show);                 
                    }}
                    >
                Show/Hide
            </button>

        </div>
    )
}
