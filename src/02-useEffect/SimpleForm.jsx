import React, { useEffect, useState } from 'react'
import { Message } from './Message';

const form = {
    username: 'fernando',
    email: 'fernando@google.com'
}

export const SimpleForm = () => {

    const [formState, setFormState] = useState(form)

    const { username, email } = formState;

    const onInputChange = ({target}) => {
        const { name, value } = target;
        setFormState( { ...formState, [name]: value})
    }


    useEffect(() => {
        // console.log('Change the field username');
    }, [username])

    useEffect(() => {
    //   console.log('Change the field email');
    }, [email])



    return (
        <>
            <h1>Formulario Simple</h1>
            <hr />

            <input
                type        = "text"
                className   = 'form-control'
                placeholder = 'Username'
                name        = 'username'
                value       = { username }
                onChange    = {onInputChange}
            />
            {
                (username === 'fernando2') && <Message/>
            }
            <input
                type        = "email"
                className   = 'form-control mt-2'
                placeholder = 'test@email.com'
                name        = 'email'
                value       = { email}
                onChange    = {onInputChange}
            />

            
        </>
    )
}
