import { useEffect, useState } from "react";

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
            data:null,
            isLoading:true,
            hasError:false,
            error:null
        })
    }

    const getFech = async () => {
        //Cada que se realice el fech, inicializamos los valores
        setLoadingState();
        const resp = await fetch( enlace );

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

        // console.log( { data } );
    }

  return {
    data     : state.data,
    isLoading: state.isLoading,
    hasError : state.hasError
  }
}
