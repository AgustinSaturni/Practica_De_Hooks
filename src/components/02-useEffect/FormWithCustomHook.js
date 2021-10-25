import React from 'react'
import { useForm } from '../../hooks/useForm'
import "./effects.css"


export const FormWithCustomHook = () => {

    const [formValues, handleImputChange] = useForm({
        name: '',
        email: '',
        password: ''
    })

    const {name,email,password}= formValues;

    const handleSubmit = (e)=>{
        e.preventDefault();
        
    }


    return (
        <form onSubmit={handleSubmit}>
         <h1>FormWithCustomHook</h1>       
         <hr />                         

            <div className="from-group">  
                <input
                type="text" 
                name="name" 
                className="form-control" 
                placeholder="Tu nombre" 
                autoComplete="off"
                value={name}  
                onChange={handleImputChange}/>
            </div>

            <div className="from-group">  
                <input 
                type="text" 
                name="email" 
                className="form-control" 
                placeholder="Tu email" 
                autoComplete="off"
                value={email}  
                onChange={handleImputChange}/>
            </div>

            <div className="from-group">  
                <input 
                type="password" 
                name="password" 
                className="form-control" 
                placeholder="*****" 
                autoComplete="off"
                value={password}  
                onChange={handleImputChange}/>
            </div>

            <button type="submit" className="btn btn-primary">
                Guardar
            </button>
            
        </form>
    ) 
}
