import React, {useState} from "react";
import { Box, Text, FormControl, FormErrorMessage, Input, Select, Button} from "@chakra-ui/react";

function AboutCustomer({title}) {
  const nameRegex = /[a-zA-Z]{3,}/;
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);

  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const [emailError, setEmailError] = useState(false);

  const phoneRegex = /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
  const [phoneError, setPhoneError] = useState(false);

  function handleFNameInput(event) {
    const result = nameRegex.test(event.target.value);
    (!result) ? setFirstNameError(true) : setFirstNameError(false);
  }

  function handleLNameInput(event) {
    const result = nameRegex.test(event.target.value);
    (!result) ? setLastNameError(true) : setLastNameError(false);
  }

  function handleEmailInput(event) {
    const result = emailRegex.test(event.target.value);
    (!result) ? setEmailError(true) : setEmailError(false);
  }

  function handlePhoneInput(event) {
    const result = phoneRegex.test(event.target.value);
    (!result) ? setPhoneError(true) : setPhoneError(false);
  }

  return (
    <div>
      <Box
      py={'2em'}
      w={{ sm: "95%", md: "85%", xl: "75%" }}
      mx={'auto'}
      >
        <Text
        fontSize={{ sm: "1em", md: "1.5em", xl: "2em" }}
        py={'1em'}
        >
          Step 2: Tell Us About Yourself
        </Text>
        <Box
        textAlign={'center'}
        backgroundColor={'#fbdebb'}
        borderRadius={'1em'}
        py={'10em'}
        px={'10em'}
        >
          <Text
          pb={'1.5em'}
          color={'black'}
          fontSize={{ sm: "1em", md: "1.25em", xl: "1.5em" }}
          >
            Please give us some information about yourself so we help get your appointment setup.
          </Text>
          <FormControl
          color={'black'}
          pb={'1.5em'}
          isInvalid={firstNameError}
          >
            <Input type='text' placeholder="First Name" backgroundColor={'white'} onChange={handleFNameInput}/>
            {!firstNameError ? (
              <div></div>
            ) : (
              <FormErrorMessage>Invalid Name</FormErrorMessage>
            )}
          </FormControl>
          <FormControl
          color={'black'}
          pb={'1.5em'}
          isInvalid={lastNameError}
          >
            <Input type='text' placeholder="Last Name" backgroundColor={'white'} onChange={handleLNameInput}/>
            {!lastNameError ? (
              <div></div>
            ) : (
              <FormErrorMessage>Invalid Name</FormErrorMessage>
            )}
          </FormControl>
          <FormControl
          color={'black'}
          pb={'1.5em'}
          isInvalid={emailError}
          >
            <Input type='email' placeholder="Email" backgroundColor={'white'} onChange={handleEmailInput}/>
            {!emailError ? (
              <div></div>
            ) : (
              <FormErrorMessage>Invalid Email Address</FormErrorMessage>
            )}
          </FormControl>
          <FormControl
          color={'black'}
          pb={'1.5em'}
          isInvalid={phoneError}
          >
            <Input type='tel' placeholder="Phone Number" backgroundColor={'white'} onChange={handlePhoneInput}/>
            {!phoneError ? (
              <div></div>
            ) : (
              <FormErrorMessage>Invalid Phone Number</FormErrorMessage>
            )}
          </FormControl>
          <FormControl
          color={'black'}
          pb={'1.5em'}
          >
            <Input 
              type='text' 
              placeholder="Please Select a Massage From Above" 
              backgroundColor={'white'} 
              isDisabled={true}
              value={title}
            />
          </FormControl>
          <FormControl
          color={'black'}
          pb={'1.5em'}
          >
            <Select placeholder="Would you like to add cupping to your massage?" backgroundColor={'white'}>
              <option value='yes'>Yes</option>
              <option value='no'>No</option>
            </Select>
          </FormControl>
          <Button backgroundColor={'#5e6d55'} color={'white'}>Submit</Button>
        </Box>
      </Box>
    </div>
  )
}

export default AboutCustomer;