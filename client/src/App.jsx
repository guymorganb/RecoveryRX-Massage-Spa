import { useState } from 'react'
import Nav from '../src/pages/Nav/Nav'
import Hero from '../src/pages/Hero/Hero'
import Booking from '../src/pages/Booking'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <Nav />
      <Hero />
      <Booking />
      </div>
    </>
  )
}

export default App
