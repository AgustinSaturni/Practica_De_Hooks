import React,{useEffect, useState} from 'react'

export const Message = () => {

    const [coords, setCoords] = useState({x:0 , y:0 });
    const {x,y}=coords;


//useEffect se dispara cuando inicia por primera vez -- Muestra mensaje y coordenadas del mouse:
    useEffect(() => {
       
        const mouseMove = (e) =>{
            const coords = {x: e.x, y: e.y};        //declaro dos variables x e y
            setCoords(coords);                  //actualizo el valor de x e y en base a la pos del mouse
        }

        window.addEventListener('mousemove',mouseMove);      //asocio el movimiento del mouse a la funcion.

        return ()=>{
            window.removeEventListener('mousemove',mouseMove);   //cuando desmonta, desasocia la funcion. Limpia correctamente.
        }

    }, [])

    return (
        <div>
            <h1>Se Monto el componente Mensaje</h1>
            <p>
            x:{x} , y:{x}
            </p>
        </div>
    )
}
