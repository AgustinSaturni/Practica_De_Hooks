import {useState} from 'react'

export const useForm = (initialState ={}) => {
   const [values, setValues] = useState(initialState)

   const handleInputChange= ({target})=>{
    setValues({                  //agarra el evento.
        ...values,
        [target.name]:target.value      //esto para que me tome el box de texto lo que pongo.
    })
}

    return [values,handleInputChange];

}
