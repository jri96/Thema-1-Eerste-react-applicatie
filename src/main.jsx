// Importeer de StrictMode en createRoot vanuit React
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Importeer de globale CSS-stijlen
import './index.css'
// Importeer het App-component (hoofdcomponent)
import App from './App.jsx'

// Render de React-app in het HTML-element met id "root"
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
