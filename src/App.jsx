import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './assets/components/Header/Header'
import Hero from './assets/components/Hero/Hero'
import Footer from './assets/components/Footer/Footer'
import Products from './assets/components/Products/Products'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Hero />
    </>
  )
}

export default App
