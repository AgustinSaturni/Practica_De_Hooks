import React from 'react'

export const ShowIncrement =React.memo(({increment}) => {   //El memo me deja en memoria el componente y hace que no renderice cada vez qu se lo llama.

    console.log("hola")
    return (
        <div>
            <button className="btn btn-primary" onClick={() => {increment();}}>+1</button>
        </div>
    )
})
