import React, { useCallback, useState } from 'react'
import '../02-useEffect/effects.css'
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {

//La idea de este hook sigue siendo la de hacer mas eficiente la renderizacion de los componentes.
//Evitar que ante un cambio en la web se vuelva a renderizar todo, esto es util cuando trato con APIs.
const [counter, setCounter] = useState(10);

/* const increment=()=>{  //asi como esta, cada vez que aprieto el boton +1 me renderiza todo de nuevo.
    setCounter(counter + 1);
} */

const increment = useCallback(
    () => {             //el c + 1 es por un tema de dependencia del conuter....
        setCounter(c => c + 1);
    },
    [setCounter]
)

    return (
        <div>
            <h1>Callback Hook: {counter}</h1>
            <hr />

            <ShowIncrement increment={increment} />


        </div>
    )
}
