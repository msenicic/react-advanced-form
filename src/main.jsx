import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './sass/style.scss'
import { ContextProvider } from './components/Context'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>,
)
