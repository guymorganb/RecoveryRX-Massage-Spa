import { useState, useRef, useEffect } from 'react'
import Nav from '../src/pages/Nav/Nav'
import Hero from '../src/pages/Hero/Hero'
import { MassageSelector } from '../src/pages/MassageSelector/massageSelector'
import {UserPreferenceProvider} from './pages/MassageSelector/userContext'
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {Services} from './pages/admin/services'
import { Spinner, Flex } from "@chakra-ui/react";
import Appointments from './pages/admin/appointments.jsx';
import { AddUpdateService } from './pages/admin/addUpdateServices'
import { setContext } from '@apollo/client/link/context';
import { Footer } from './pages/footer/footer'

import Booking from '../src/pages/Booking'
// Set up an Apollo client to point towards graphql backend
const httpLink = createHttpLink({
  uri: 'http://localhost:3002/graphql', // GraphQL endpoint
});

// context for JWT
const authLink = setContext((_, { headers }) => {
  // Get token from local storage
  const token = localStorage.getItem('id_token');
  // Return the headers to the context
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

// httpLink defines where the GraphQL server is hosted. 
// authLink used for setting any headers that need to be attached to your requests.
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  const [title, setTitle] = useState('');
  const [authStatus, setAuthStatus] = useState('checking');
  const massageSelectorRef = useRef(null);

  useEffect(() => {
    // You would replace this with your actual authentication logic
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
  <ApolloProvider client={client}>
      <Router>
        <UserPreferenceProvider>
         <Nav onBookNowClick={scrollToMassageSelector} />
          <Switch>
            {/* Home page route */}
            <Route exact path='/'>
              <Hero onBookNowClick={scrollToMassageSelector} />
              <MassageSelector ref={massageSelectorRef} setTitle={setTitle} />
              <Booking title={title} />
              <Footer />
            </Route>

            {/* Services page route */}
            <Route exact path='/services' component={Services} />
            {/* Appointments page Route */}
            <Route exact path='/booking' component={Appointments} />
            {/* Reviews page Route */}
            <Route exact path='/reviews' component={Services} />
          </Switch>
        </UserPreferenceProvider>
      </Router>
    </ApolloProvider>

  )
}

export default App