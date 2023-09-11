import React from "react";
import { Box, Text, StackDivider, HStack, VStack, Link, Image } from '@chakra-ui/react'

/* BreakPoint Ref
  base: "0em", // 0px
  sm: "30em", // ~480px. em is a relative unit and is dependant on the font-size.
  md: "48em", // ~768px
  lg: "62em", // ~992px
  xl: "80em", // ~1280px
  "2xl": "96em", // ~1536px
*/
const Nav = () => {
  return (
<div className="navContainer flex justify-center w-screen">
  <VStack m={1}
  divider={<StackDivider borderColor='black.200' />}
  padding={1}

  borderRadius={4}
  backgroundColor={{ base: 'beige', md: 'white', lg: "white" }}>
    <Box >
      <HStack >
        <Box>
          <Image  
            boxSize={{ base: "0px",sm: "50px", md: "75px", lg: "100px" }}
            borderRadius={8}
            objectFit='cover'
            src='https://bit.ly/dan-abramov'
            alt='Dan Abramov'/>
        </Box>
        <Box>
          <Text
            fontFamily="Noto Sans"
            fontWeight="Regular"
            fontSize={{ base: "18px", md: "20px", lg: "20px" }}
            color="#000000"
            width={{ base: "80%", /* 0-48em */ md: "100%", /* 48em-80em, */ xl: "100%", /* 80em+ */ }}
            _hover={{ 
              boxShadow: '0 8px 10px rgba(0, 0, 0, 0.14), 0 6px 6px rgba(88, 144, 255, 0.2)',  // shadow on hover
              borderRadius: 4,
            }}
            maxWidth="100%"
            textAlign="center">
              RecoveryRx Massage
          </Text>
        </Box>
      <Box 
      display={{ base: 'flexWrap', md: 'flex', lg: "100%" }}>
        <Box>
          <Text
            fontFamily="Noto Sans"
            fontWeight="regular"
            fontSize={{ base: "14px", md: "16px", lg: "16px" }}
            color="#000000"
            width="75px"
            _hover={{ 
              boxShadow: '0 8px 10px rgba(0, 0, 0, 0.14), 0 6px 6px rgba(88, 144, 255, 0.2)',  // shadow on hover
              borderRadius: 8,
            }}
            textAlign="center">
            <Link color='gray.500' href='#'>About</Link>
          </Text>
			  </Box>
        <Box>
          <Text
            fontFamily="Noto Sans"
            fontWeight="regular"
            fontSize={{ base: "14px", md: "16px", lg: "16px" }}
            color="#000000"
            width="75px"
            _hover={{ 
              boxShadow: '0 8px 10px rgba(0, 0, 0, 0.14), 0 6px 6px rgba(88, 144, 255, 0.2)',  // shadow on hover
              borderRadius: 4,
            }}
            textAlign="center">
            <Link color='gray.500' href='#'>Services</Link>
          </Text>
			  </Box>
        <Box>
          <Text
            fontFamily="Noto Sans"
            fontWeight="regular"
            fontSize={{ base: "14px", md: "16px", lg: "16px" }}
            color="#000000"
            width="75px"
            _hover={{ 
              boxShadow: '0 8px 10px rgba(0, 0, 0, 0.14), 0 6px 6px rgba(88, 144, 255, 0.2)',  // shadow on hover
              borderRadius: 4,
            }}
            textAlign="center">
            <Link color='gray.500' href='#'>Contact</Link>
          </Text>
			  </Box>
      </Box>
        <Box
          as='button'
          height='40px'
          lineHeight='1.0'
          transition='all 0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55)'
          border='1px'
          px='18px'
          borderRadius='8px'
          fontSize='16px'
          fontWeight='semibold'
          bg='#407a10'
          borderColor='#ccd0d5'
          color='#ffffff'
          boxShadow='inset 0px -8px 10px #00000033, inset 0px 4px 4px #ffffff80'  // Default shadow
          _hover={{ 
            boxShadow: '0 8px 10px rgba(0, 0, 0, 0.14), 0 6px 6px rgba(88, 144, 255, 0.2)'  // shadow on hover
          }}
          _active={{
            bg: '#edb664',
            transform: 'scale(0.98)',
            borderColor: '#bec3c9',
            boxShadow: '0 2px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(88, 144, 255, 0.1)'  // shadow when pressed
          }}>
            Book Now
        </Box>
      </HStack>
      <Box h='10px' bg='white.100' m={5}>
      <hr></hr>
      </Box>
     
    </Box>

  </VStack>
  </div>
   
  );
};
export default Nav;