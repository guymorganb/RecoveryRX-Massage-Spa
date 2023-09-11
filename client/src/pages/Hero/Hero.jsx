import React from "react";
import { Stack, Box, Text, Image, Flex } from '@chakra-ui/react'
import myImage from '../../assets/pexels-ryutaro-tsukata-5473223-1.png'
const Hero = () => {
  return (
  <div className="navContainer flex justify-center w-screen">
  <Stack >
    <Box>
    <Image  
      // boxSize={{ base: "0px",sm: "50px", md: "75px", lg: "100px" }}
      borderRadius={8}
      objectFit='cover'
      src={myImage}
      alt='Massage Therapist'/>
    <Box 
    padding={0}>
      <Text
      fontFamily="EB Garamond"
      fontWeight="bold"
      fontSize="26px"
      color="#ffffff"
      width='90%'
      maxWidth="95vw"
      textAlign="center"
      position="absolute"
      top="15%"
      left={{ base: "20%",sm: "20%", md: "5%", lg: "2.0%" }}
      right="-15%"
      
      
      
      textShadow="1px 1px 1px rgba(255, 255, 255, 0.8), -1px -1px 1px rgba(0, 0, 0, 0.2),4px 4px 5px rgba(0, 0, 0, 0.5),1px 1px 2px rgba(0, 0, 0, 0.1)" // 3D letterpress
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
    <Box width="200px" height="200px" />
    <Text
      fontFamily="Noto Sans"
      lineHeight="0.38"
      fontWeight="bold"
      fontSize="64px"
      color="#000000"
      width="640px"
      height="176px"
      maxWidth="100%"
      textAlign="center"
    >
      Our Services
    </Text>
    <Text
      fontFamily="Noto Sans"
      lineHeight="1"
      fontWeight="displayregular"
      fontSize="24px"
      color="#000000"
      width="1102px"
      height="232px"
      maxWidth="100%"
      textAlign="center"
    >
      Our range of massage techniques includes deep tissue, Swedish, sports
      massage, and cupping. Whatever your preference, our expert therapists will
      use their knowledge and expertise to deliver a massage that targets your
      specific areas of concern and leaves you feeling invigorated and relaxed.
    </Text>
  </Stack>
  </div>
  )
  }

export default Hero;