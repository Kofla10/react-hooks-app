import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
// import { SimpleForm } from './02-useEffect/SimpleForm'
// import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'
import { MultipleCustomHook } from './03-examples/MultipleCustomHook'
import { FocusScreen } from './04-useRef/FocusScreen'
import { Layout } from './05-useLayoutEffect/Layout'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <Layout/>
  // </StrictMode>,
)
