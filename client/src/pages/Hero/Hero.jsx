import React from "react";
import { Stack, Box, Text } from '@chakra-ui/react'

const Hero = () => {
  return (
  <>
  <Stack width="1320px" height="1600px" maxWidth="100%" background="#FFFFFF">
    <Box width="1320px" height="766.03px" maxWidth="100%" />
    <Text
      fontFamily="EB Garamond"
      fontWeight="bold"
      fontSize="36px"
      color="#FFFFFF"
      width="1043px"
      height="580px"
      maxWidth="100%"
      textAlign="center"
    >
      Welcome to Recovery Rx Massage, where healing and relaxation come together
      to help you achieve optimal well-being. We understand the toll that
      everyday stress, injuries, and physical ailments can take on your body and
      mind. That's why our mission is to provide you with personalized massage
      therapy treatments that promote recovery, relieve tension, and rejuvenate
      your body.
    </Text>
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
  </>
  )
  }

export default Hero;