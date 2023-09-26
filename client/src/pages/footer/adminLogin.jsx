import React, { useState, useEffect} from "react";
import { useMutation } from '@apollo/client'
import {LOGIN_USER} from '../../utils/mutations'

import {
  Box,
  Text,
  Alert,
  Button,
  Input,
  FormErrorMessage,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel
} from "@chakra-ui/react";
export const AdminLogin = ({ isOpen, onClose }) => {
  
  const emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [loginUser, { loading: updateLoading, error: updateError }] = useMutation(LOGIN_USER);
  

  const handleLogin = async () => {
    // Here, you can handle the login logic
    
    if(email && password){
      try{
        const { data } = await loginUser({
          variables : { 
            email: email,
            password: password
        } 
        }) 
        const { token } = data.loginUser;  // This assumes your GraphQL query returns a 'loginUser' field with a 'token' and 'user'.
        localStorage.setItem('id_token', token)
        window.location.replace('/services') // send the logged in user to "/"
      }catch (e) {
        // login failure, throw an alert
        console.error(e);
        setShowAlert(true);
      }
    } else{
      console.log("No user data captured")
    }
    //console.log("Logging in with", email, password);
  };
// sanitize input
  useEffect(() => {
    const result = emailReg.test(email);
    (result) ? setEmailError(false) : setEmailError(true)
    }, [email]);



  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Admin Login</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl id="email" mb={4} isInvalid={emailError}>
          <Alert dismissible 
          onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
          Something went wrong with your login credentials!
        </Alert>
            <FormLabel>Email</FormLabel>
            <Input
              type="text"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {!emailError ? (
              <div></div>
              ) : (
              <FormErrorMessage>Invalid Email Address</FormErrorMessage>
            )}
          </FormControl>
          <FormControl id="password" >
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
          <Button variant="ghost" onClick={handleLogin}>
            Log in
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};