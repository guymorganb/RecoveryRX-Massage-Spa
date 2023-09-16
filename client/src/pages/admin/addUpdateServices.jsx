import React, {useState} from "react";
import { Box, Text, Button, Image, Input, Textarea, VStack, HStack } from "@chakra-ui/react";



export const AddService = () => {
const [title, setTitle] = useState('');
const [description, setDescription] = useState('');

  return(
    <Box 
        bgColor="#ffffff" 
        w="100%" 
        d="flex" 
        justifyContent="center"> 
        <Box textAlign='center' fontSize="34px" mt={4} mb={3}> Add or Update Services </Box>
            <VStack 
                bgColor="#ffffff" 
                spacing={4} 
                display='flex' 
                justify='center' 
                className="100" >
                <Box 
                    w="100%" 
                    p={5} 
                    boxShadow="xl" 
                    borderWidth="1px" 
                    borderRadius="lg" 
                    overflow="hidden">
                    <Input 
                        placeholder="Title" 
                        mb={4}
                        value={title}
                        onChange={(event)=>setTitle(event.target.value)} />
                    <Textarea 
                    placeholder="Description" 
                    mb={4}
                    value={description}
                    onChange={(e)=>setDescription(e.target.value)} />

                    <HStack 
                    // buttons
                        d="flex" 
                        justifyContent="space-between">
                        <Button 
                            leftIcon={<Image src="https://s2.svgbox.net/hero-outline.svg?ic=upload&color=000" boxSize="20px" />} 
                            bgColor="#476c30e6" w="165px" h="53px" mb='15%'>
                            <Text 
                            fontFamily="Inter-Regular" 
                            fontSize="16px" 
                            color="#ffffff">
                                Upload Photo
                            </Text>
                        </Button>
                        <Box 
                            mt='15%'>
                            <Button 
                                m={3} 
                                colorScheme="blue" 
                                onClick={"Check for existing service by name, if exists Update, if doesnt exist, create new"}>Save</Button>
                            <Button 
                                colorScheme="blue" 
                                onClick={"deleteServiceLogic"}>Delete</Button>
                        </Box>
                    </HStack>
                </Box>
            </VStack>
        </Box>
  )
};
