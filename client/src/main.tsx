import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './app/globals.css'
import Router from './app/Router'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router />
  </StrictMode>,
)
