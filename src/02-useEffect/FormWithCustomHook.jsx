import React, { useEffect, useState } from 'react'
import { useForm } from '../hooks/useForm'

const form = {
    username: '',
    email   : '',
    password: ''
}

export const FormWithCustomHook = () => {

    const { username, email, formState, onInputChange, onReset  } = useForm(form)

    //como enviamos el objeto desestructurado, nos evitamos de hacer la siguiente linea
    // const { username, email, password } = formState

    return (
        <>
            <h1>Formulario con Custom Hook</h1>

            <hr />

            <input
                type        = "text"
                className   = 'form-control'
                placeholder = 'Username'
                name        = 'username'
                value       = { username }
                onChange    = {onInputChange}
            />

            <input
                type        = "email"
                className   = 'form-control mt-2'
                placeholder = 'test@email.com'
                name        = 'email'
                value       = { email}
                onChange    = {onInputChange}
            />

            <input
                type        = 'password'
                className   = 'form-control mt-2'
                name        = 'password'
                placeholder = 'Contraseña'
                onChange    = {onInputChange}
            />

            <button onClick={ onReset } className='btn btn-primary mt-2'> Reset </button>
        </>
    )
}
