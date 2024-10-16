import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Homepage from './Homepage.jsx'
import './index.css'
import Loader from './Loader.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Homepage /> */}
    <Loader />
  </StrictMode>,
)