import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
// import { SimpleForm } from './02-useEffect/SimpleForm'
import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <FormWithCustomHook/>
  // </StrictMode>,
)
