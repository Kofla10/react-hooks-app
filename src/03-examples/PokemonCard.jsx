import React from 'react'

export const PokemonCard = ({ id, name, sprites = [] }) => {
    console.log(sprites);
    return (
        <section style={{ height: 200 }}>
            <h2> #{ id } - { name }</h2>

            {/* contenedor de imagenes de pokemon */}
            <div>
                <img src={ sprites.front_shiny } alt={ name } />
            </div>
        </section>
    )
}
