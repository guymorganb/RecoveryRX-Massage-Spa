import { useState } from 'react'
import Nav from '../src/pages/Nav/Nav'
import Hero from '../src/pages/Hero/Hero'
import { MassageSelector } from '../src/pages/MassageSelector/massageSelector'
import {UserPreferenceProvider} from './pages/MassageSelector/userContext'
//import {Frame} from './pages/admin/addUpdateServices'
import {Services} from './pages/admin/services'
import { AddService } from './pages/admin/addUpdateServices'


import Booking from '../src/pages/Booking'


function App() {
  const [count, setCount] = useState(0)
  
  return (
    <UserPreferenceProvider>
      
      <Nav />
      <Hero />
      <MassageSelector />
       {/* <AddService /> */}
      <Services /> 
      <Booking />

    </UserPreferenceProvider >
  )
}

export default App