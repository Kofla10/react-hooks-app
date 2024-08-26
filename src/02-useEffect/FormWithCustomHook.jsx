import React, { useEffect, useState } from 'react'
import { useForm } from '../hooks/useForm'

const form = {
    username: '',
    email   : '',
    password: ''
}

export const FormWithCustomHook = () => {

    const { formState, onInputChange } = useForm(form)
    const {username, email, password } = formState;

    // useEffect(() => {
    // }, [username])

    // useEffect(() => {
    // }, [email])



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
        </>
    )
}
