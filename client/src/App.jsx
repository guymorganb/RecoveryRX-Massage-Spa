import { useState } from 'react'
import Nav from '../src/pages/Nav/Nav'
import Hero from '../src/pages/Hero/Hero'
import { MassageSelector } from '../src/pages/MassageSelector/massageSelector'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <Nav />
      <Hero />
      <MassageSelector />
      </div>
 
    </>
  )
}

export default App
