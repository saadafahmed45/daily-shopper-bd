import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Header from './assets/components/Header/Header.jsx'
import Footer from './assets/components/Footer/Footer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Header />
    <App />
    <Footer />
  </>
)
