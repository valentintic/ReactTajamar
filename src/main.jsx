import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Contador from './components/Contador.jsx'
import DibujosComplejos from './components/DibujosComplejos.jsx'
import DibujosComplejosReact from './components/DibujosComplejosReact.jsx'
import PadreDeporte from './components/PadreDeporte.jsx'
import PadreNumero from './components/PadreNumero.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Contador inicio="0"/> */}
    {/* <DibujosComplejos></DibujosComplejos> */}
    <PadreNumero></PadreNumero>
  </StrictMode>,
)
