import React from "react";
import { Stack, VStack, Box, Text, Image, Link } from '@chakra-ui/react'
import myImage from '../../assets/pexels-ryutaro-tsukata-5473223-1.png'
import myImage2 from '../../assets/1-1.png'

const Hero = () => {
  return (
  <Box className="navContainer flex justify-center w-screen">
  <Stack >
    <Box>
    <Image  
      // boxSize={{ base: "0px",sm: "50px", md: "75px", lg: "100px" }}
      borderRadius={8}
      objectFit='cover'
      src={myImage}
      alt='Massage Therapist'/>
    <Box>
      <Text
      fontFamily="EB Garamond"
      fontWeight="bold"
      fontSize="25px"
      color="#ffffff"
      width={{ base: "90%",sm: "90%", md: "90%", lg: "90%", xl:'90%' , "2xl":'70%' }}
      maxWidth="95vw"
      textAlign="center"
      position="absolute"
      top="14%"
      left={{ base: "52%",sm: "25%", md: "9%", lg: "5%", xl:'5%' , "2xl":'15%' }}
      right="-15%"
      textShadow="1px 1px 1px rgba(255, 255, 255, 0.8), -1px -1px 1px rgba(0, 0, 0, 0.2),4px 4px 5px rgba(0, 0, 0, 0.5),1px 1px 2px rgba(0, 0, 0, 0.1)" // 3D letterpress
      padding={1}
      >
        Welcome to Recovery Rx Massage, where healing and relaxation come together
        to help you achieve optimal well-being. <br></br><br></br>  We understand the toll that
        everyday stress, injuries, and physical ailments can take on your body and
        mind. That's why our mission is to provide you with personalized massage
        therapy treatments that promote recovery, relieve tension, and rejuvenate
        your body.
      </Text>
    </Box>
    </Box>
    <Box width="75px" height="75px" />
    <VStack
      paddingLeft={{base:'30%', sm: '25%', md:'0%', lg:'0%', xl:'.0001%'}}
    >
    <Box>
      <Image  
        boxSize={{ base: "100px",sm: "100px", md: "125px", lg: "125px" }}
        borderRadius={8}
        objectFit='cover'
        src={myImage2}
        alt='Lotus Flower'/>
    </Box>
    
    <Text
      fontFamily="Noto Sans"
      lineHeight="1.0"
      fontWeight="bold"
      fontSize="64px"
      color="#000000"
      width="640px"
      height="76px"
      maxWidth="100%"
      textAlign="center"
      
    >
      Our Services
    </Text>
    
    <Text
      fontFamily="Noto Sans"
      lineHeight="1.0"
      fontWeight="displayregular"
      fontSize="24px"
      color="#000000"
      width="1102px"
      height={{ base: "155px",sm: "180px", md: "125px", lg: "125px" }}
      maxWidth="80%"
      textAlign="center"
      paddingBottom='3px'
    >
      Our range of massage techniques includes deep tissue, Swedish, sports
      massage, and cupping. Whatever your preference, our expert therapists will
      use their knowledge and expertise to deliver a massage that targets your
      specific areas of concern and leaves you feeling invigorated and relaxed.
    </Text>
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
    </VStack>
  </Stack>
  </Box>
  )
  }

export default Hero;