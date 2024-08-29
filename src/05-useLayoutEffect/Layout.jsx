import React from 'react'

import { useFech } from '../hooks'
import { useCounter } from '../hooks'
import { LoadingMessage } from '../03-examples/LoadingMessage'
import { PokemonCard } from '../03-examples/PokemonCard'

export const Layout = () => {

    const { onSum, onResta, counter } = useCounter(1)

    const enlace = `https://pokeapi.co/api/v2/pokemon/${ counter }`;
    const { data, hasError, isLoading } = useFech(enlace);

    return (
        <>
            <h3>Información de Pokémon</h3>
            <hr />
            { isLoading
                ? <LoadingMessage/>
                : <PokemonCard
                               id   = { data.id }
                               name = { data.name }
                               sprites = {[
                                data.sprites.front_default,
                                data.sprites.front_shiny,
                                data.sprites.back_default,
                                data.sprites.back_shiny
                               ]}
                    />
            }

            {/* el código {data?.name} quiere decir que si la data.name no es null muestre la información */}
            {/* <h2> { data?.name } </h2> */}

            {/* <pre> { JSON.stringify( data, null, 2 )} </pre> */}

            <div>
                <button onClick = { () => counter>1 ? onResta(1): null }className='btn btn-primary mt-2'>Anterior</button>
                <button onClick = { () => onSum(1) }className='btn btn-primary mt-2'>Siguiente</button>
            </div>
        </>
    )
}
