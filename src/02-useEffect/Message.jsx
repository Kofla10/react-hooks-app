import React, { useEffect } from 'react'

export const Message = () => {

    useEffect(() => {

      // desestructuramos el event para sacar x y y
      const onMouseMouse = ({ x, y} ) => {
        const coords = { x, y}
        console.log(coords);
      }

      window.addEventListener('mousemove', onMouseMouse)

      return () => {
        //para remover el evento cuando ya se desmonta el useEffect y con esto evitamos la fuga de memoria
        window.removeEventListener('mousemove', onMouseMouse)
      }
    }, [])

    return (
        <>
            <h5 className='text-danger mt-1 p4-3'>Usuario ya existe</h5>
        </>
    )
}
