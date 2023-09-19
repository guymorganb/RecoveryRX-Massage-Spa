import React, {useState} from "react";
import { Box, Text, FormControl, FormErrorMessage, Input, Select, Button} from "@chakra-ui/react";

function AboutCustomer() {
  const phoneRegex = /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
  const [title, setTitle] = useState('');
  let phoneError = false;

  const cards = {
    card1: {
      title: 'Massage 1',
      selected: false
    }, 
    card2: {
      title: 'Massage 2',
      selected: false
    },
    card3: {
      title: 'Massage 3',
      selected: false
    },
  };

  function getSelected() {
    const cardsArr = Object.entries(cards);
    let result;
    cardsArr.forEach((card) => {
      if (card[1].selected === true) {
        result = card[1].title;
        setTitle(result);
      }
    })
    console.log('Changing');
  }

  function handlePhoneInput(event) {
    const result = phoneRegex.test(event.target.value);
    console.log(result);
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
        onChange={getSelected}
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
          >
            <Input type='text' placeholder="First Name" backgroundColor={'white'}/>
          </FormControl>
          <FormControl
          color={'black'}
          pb={'1.5em'}
          >
            <Input type='text' placeholder="Last Name" backgroundColor={'white'}/>
          </FormControl>
          <FormControl
          color={'black'}
          pb={'1.5em'}
          >
            <Input type='email' placeholder="Email" backgroundColor={'white'}/>
          </FormControl>
          <FormControl
          color={'black'}
          pb={'1.5em'}
          >
            <Input type='tel' placeholder="Phone Number" backgroundColor={'white'} onChange={handlePhoneInput}/>
            {phoneError ? (
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