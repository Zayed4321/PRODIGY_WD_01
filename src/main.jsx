import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Layout from './components/layouts/Layout.jsx'
import { ComWrapper } from './context/ComContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ComWrapper>
    <App />
  </ComWrapper>
)
