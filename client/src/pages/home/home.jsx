import Hero from "../Hero/Hero";
import { MassageSelector } from "../MassageSelector/massageSelector";
import Booking from "../Booking";
import { Footer } from "../footer/footer";
import { useState, useRef, useEffect } from 'react'


const Home = () =>{
    const massageSelectorRef = useRef(null);
    const [title, setTitle] = useState('');

    const [authStatus, setAuthStatus] = useState('checking');
  
  
    useEffect(() => {
      
      const token = localStorage.getItem('id_token');
      if (token) {
        // Check if the token is valid, etc.
        setAuthStatus('authenticated');
      } else {
        setAuthStatus('unauthenticated');
      }
    }, []);

    const scrollToMassageSelector = (e) => {
        e.preventDefault();
        if (massageSelectorRef.current) {
          massageSelectorRef.current.scrollIntoView({ behavior: 'smooth' });
        }
      };

    return (
        <>
            <Hero onBookNowClick={scrollToMassageSelector} />
            <MassageSelector ref={massageSelectorRef} setTitle={setTitle} />
            <Booking title={title} />
            <Footer />
        </>
    );

}

export default Home;