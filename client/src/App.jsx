import Nav from '../src/pages/Nav/Nav'
import {UserPreferenceProvider} from './pages/MassageSelector/userContext'
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import {Services} from './pages/admin/services'
import Home from './pages/home/home';
import { Spinner, Flex } from "@chakra-ui/react";
import Appointments from './pages/admin/appointments.jsx';
import { AddUpdateService } from './pages/admin/addUpdateServices'
import { setContext } from '@apollo/client/link/context';
import { useRef } from 'react'
// Set up an Apollo client to point towards graphql backend
const httpLink = createHttpLink({
  uri: '/graphql', // GraphQL endpoint
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

  const massageSelectorRef = useRef(null);

  const scrollToMassageSelector = (e) => {
    e.preventDefault();
    if (massageSelectorRef.current) {
      massageSelectorRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element= {<Nav onBookNowClick={scrollToMassageSelector} />}> Home
          <Route index element={<Home />} />
          <Route path='/services' element={<Services />} />
          {/* Appointments page Route */}
          {/* <Route exact path='/booking' component={<Services/>} /> */}
          {/* Reviews page Route */}
          {/* <Route exact path='/reviews' component={<Services/>} /> */}
        </Route>
  
      )
    )
  return (
    <ApolloProvider client={client}>

        <UserPreferenceProvider>
          <RouterProvider router={router}/>
        </UserPreferenceProvider>
      
    </ApolloProvider>

  )
}

export default App