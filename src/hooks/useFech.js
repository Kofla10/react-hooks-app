import { useEffect, useState } from "react";

//creamos una varible para almacenar arreglos en cache y cuando exista una url que ya se ubise usado, poder mostrar la información
const localCache = {};

export const useFech = ( enlace ) => {

    const [state, setState] = useState({
        data     : null,
        isLoading: true,
        hasError : false,
        error    : null
    })

    useEffect(() => {
      getFech();

    }, [ enlace ])

    const setLoadingState = () => {
        setState({
            data     : null,
            isLoading: true,
            hasError : false,
            error    : null
        });
        return;
    }

    const getFech = async () => {

        //validamos la información que este en cache, para cargar esa información
        // if( localCache['url'] ){

        //     console.log( 'Usando caché' );

        //     setState({
        //         data     : localCache['url'],
        //         isLoading: false,
        //         hasError : false,
        //         error    : null
        //     });
        //     console.log(state);
        //     return;
        // }


        //Cada que se realice el fech, inicializamos los valores
        setLoadingState();
        const resp = await fetch( enlace );

        //agregamos un timeout, para que se demore cierta cantidad de tiempo
        await new Promise( resolve => setTimeout( resolve, 1500 ))
        //validamos que no exista un error en la consulta
        // si la respuesta es diferente al ok, es porque existe un error
        if( !resp.ok){
            setState({
                data     : null,
                isLoading: false,
                hasError : true,
                error    : {
                    code   : resp.status,
                    message: resp.statusText
                }
            })
            return;
        }

        const data = await resp.json();

        //si no existe ningún tipo de error, entonces llenamos el state de nuevo
        setState({
            data     : data,
            isLoading: false,
            hasError : false,
            error    : null
        })

        //cuando se obtenga la petición, se va a obtener la primera entrada

        localCache['url']= data;
    }

  return {
    data     : state.data,
    isLoading: state.isLoading,
    hasError : state.hasError
  }
}
