import {useState,useEffect} from 'react'

export const useFetch = (url) => {
    //Declaro el estado que me va a almacenar los gifs.
    const [state, setState] = useState({data:null, loading: true, error:null})

    useEffect(() => {
            //hago la peticion a la API, es una promesa!, por eso los "then"

        setState({data:null, loading: true, error:null});

        fetch(url).then(resp => resp.json()).then(data => {
            setState({
                data,               //aca cargo la data que recibo de la API
                loading:false,  
                error:null
            })
        })


    }, [url])  //el useEffect se disara solo cuando cambia la URL.

    return state;
}
