import React, { useRef } from 'react'

export const FocusScreen = () => {

    //una forma de hacer referncia a un campos, sin necesidad de usar document.querySelector o entre otros
    const inputRef = useRef();
    const onClick = () => {
        console.log(inputRef);
        inputRef.current.focus()
        // document.querySelector('input').select();
    }

    return (
        <>
            <h1>Focus Screen</h1>
            <hr />

            <input type        = "text"
                   ref         = { inputRef}
                   placeholder = 'Ingres su nombre'
                   className   = 'form-control'
            />

            <button className='btn btn-primary mt-2'
                    onClick={ onClick }>Set Focus</button>
        </>
    )
}
