import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import '../02-useEffect/effects.css';

export const MultipleCustomHooks = () => {

    const {counter,increment}=useCounter(1);   //llamo al counter para incrementar el numerito del API, asi llamo diferentes frases.

   const {loading,data} =  useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`); //llamo al useFetch.

    const {author,quote} = !!data && data[0]  //si existe la data, carga esas variables con la pos 0 del arreglo.


    return (
        <div>
            <h1>BreakingBad Quotes</h1>
            <hr />

            {loading?           //Si loading es true muestro el Loading...
            (
                <div className="alert alert-info text-center" >
                Loading...
            </div>
            ):          //si loading es falso, muestro la fraase y el author
            <blockquote className="blockquote text-right">
                <p className="mb-0">{quote}</p>
                <footer className="blockquote-footer">{author}</footer>

            </blockquote>}
    

                {// El boton de abajo incrementa el counter, esto altera la url y se dispara el useFetch otra vez.
                }

        <button className="btn btn-primary" onClick={increment}>Siguiente quote</button>
            
        </div>
    )
}
