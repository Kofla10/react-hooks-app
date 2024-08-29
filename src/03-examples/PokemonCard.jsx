import React from 'react'

export const PokemonCard = ({ id, name, sprites = [] }) => {

    return (
        <section style={{ height: 200 }}>
            <h2> #{ id } - { name }</h2>

            {/* contenedor de imagenes de pokemon */}
            <div>
                {
                    sprites.map( sprite => 
                        <img key={ sprite } src={ sprite } alt={ name } />
                    )
                }
            </div>
        </section>
    )
}
