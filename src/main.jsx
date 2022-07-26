import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import Router from './common/Router'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
)
