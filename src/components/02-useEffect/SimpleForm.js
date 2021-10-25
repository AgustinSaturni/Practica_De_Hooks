import React,{useState, useEffect} from 'react'
import "./effects.css"
import { Message } from './Message'
export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    })

    const {name,email}=formState

    useEffect(() => {
        console.log("Hey");
    }, [])          //al Poner el array vacio, me carga el effect una sola vez al principio.

    useEffect(() => {
        console.log("Cambio el Email");
    }, [email])   //solo se dispara cuando cambia el email.

    const handleInputChange= ({target})=>{
            setFormState({                  //agarra el evento.
                ...formState,
                [target.name]:target.value      //esto para que me tome el box de texto lo que pongo.
            })
    }

    return (
        <>
         <h1>SimpleForm</h1>       
         <hr />                         
            <div className="from-group">  
                <input type="text" name="name" className="form-control" placeholder="Tu nombre" autoComplete="off"
                        value={name}  onChange={handleInputChange}/>
            </div>
            <div className="from-group">  
                <input type="text" name="email" className="form-control" placeholder="Tu email" autoComplete="off"
                        value={email}  onChange={handleInputChange}/>
            </div>

        {(name === '123' && <Message />)} 

        </>
    ) //Llama a message solo si el name es 123, ahi se dispara el effect y se desmonta cuando se baja message.
}
