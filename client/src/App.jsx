import { useState } from 'react'
import Nav from '../src/pages/Nav/Nav'
import Hero from '../src/pages/Hero/Hero'
import { MassageSelector } from '../src/pages/MassageSelector/massageSelector'
import {UserPreferenceProvider} from './pages/MassageSelector/userContext'
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {Services} from './pages/admin/services'
import { AddService } from './pages/admin/addUpdateServices'
import { setContext } from '@apollo/client/link/context';

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
  
  return (
    <ApolloProvider client={client}>
    <Router>
    <>
    <UserPreferenceProvider>

      <Nav />
      <Hero />
      <Switch>
        {/* links to the massage selector after clicking "book now" */}
        <Route exact path='/bookNow' component={MassageSelector} />
        {/* links to the admin Services page */}
        <Route exact path='/services' component={Services} /> 
        {/* links the services page to the "add update service" window */}
        <Route exact path='/addService' component={AddService} />
      </Switch>
      <MassageSelector setTitle={setTitle} />
      <Booking title={title}/>

    </UserPreferenceProvider >
    </>
    </Router>
    </ApolloProvider>

  )
}

export default App