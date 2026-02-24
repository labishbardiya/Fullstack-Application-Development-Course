import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import New from './New'
import Header from './Header'
import Footer from './Footer'

createRoot(document.getElementById('root')).render(
  // or a simple div with body as id
  <StrictMode> 
    <App />
    <Header />
    <New />
    <Footer />
  </StrictMode>,
)
