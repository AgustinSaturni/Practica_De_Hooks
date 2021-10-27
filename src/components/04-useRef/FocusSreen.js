import React,{useRef} from 'react'
import '../02-useEffect/effects.css'

export const FocusSreen = () => {

    const inputRef = useRef();  

    const handleClick= () => {
        inputRef.current.select();  //Esto me selecciona lo que tengo en la caja de texto.
    }

    return (
        <div>
            <h1>Focus Screen</h1>
            <hr />

            <input
                ref={inputRef}  //adhiero la referencia a la caja de texto.
                className='form-control'
                placeholder="Su nombre"
            />

            <button className="btn btn-outline-primary mt-5"
                    onClick={handleClick}>
            
                Focus
            </button>

        </div>
    )
}
