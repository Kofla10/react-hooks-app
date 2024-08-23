import React, { useState } from 'react'

export const CounterApp = () => {

    const [counter, setCounter] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30
    });

    const { counter1, counter2, counter3} = counter;

    const changeValue = ( ) => {
        setCounter( {...counter, counter1: counter1+1});

    };

    return (
        <>
            <h1>Counter { counter1 } </h1>
            <h1>Counter { counter2 } </h1>
            <h1>Counter { counter3 } </h1>

            <hr />

            <button className='btn btn-primary' onClick={ changeValue }> +1</button>
        </>
    )
}
