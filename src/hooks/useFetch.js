import {useState,useEffect,useRef} from 'react'

export const useFetch = (url) => {
    //Declaro el estado que me va a almacenar los gifs.
    const [state, setState] = useState({data:null, loading: true, error:null})

    const isMounted = useRef(true);  //Esto para manejar cuando esta montado y cuando no.

        useEffect(() => {    //Esto lo uso solo para sacar la referencia cuando desomonto.
            
            return () => {
                isMounted.current = false;  //Con esto limpio la referencia cuando desmonto.
            }
        }, [])

    useEffect(() => {
            //hago la peticion a la API, es una promesa!, por eso los "then"

        setState({data:null, loading: true, error:null});

        fetch(url).then(resp => resp.json()).then(data => {

            setTimeout(() => {   //Le estoy pidiendo que ejecute esto 4 segundos despues para dar un efecto de carga.
                
                if(isMounted.current){  //si esta Montado cargo todo si no, no hago nada.
                        setState({
                            data,               //aca cargo la data que recibo de la API
                            loading:false,  
                            error:null
                        })
                    }
 
            }, 1000);

            
        })


    }, [url])  //el useEffect se disara solo cuando cambia la URL.

    return state;
}
