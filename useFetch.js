import { useState, useEffect, useRef }from 'react'

export const useFetch = ( url ) => {

    const [state, setState] = useState({
        data: null,
        loading: true,
        error: null
    })

    const isMounted = useRef(true)
    
    useEffect( () => {
        // El return se ejecuta solo cuando se desmonta el componente
        return () => { isMounted.current = false }
    }, [])

    useEffect( () => {

        setState({
            data: null,
            loading: true,
            error: null
        })

        fetch (url)
        .then ( resp => resp.json() )
        .then ( infoApi => {
            if (isMounted.current) {
                setState({
                    data: infoApi,
                    loading: false,
                    error: null
            })
            }  
        }

            
            
        )

    }, [url])

    return state;

}
