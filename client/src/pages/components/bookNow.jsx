import React from "react";
import { Stack, VStack, Box, Text, Image, Link } from '@chakra-ui/react'

const bookNow = () =>{
    return(
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
          <Link color='white.500' href='#'>Book Now</Link>
      </Box>
    )
}

export default bookNow