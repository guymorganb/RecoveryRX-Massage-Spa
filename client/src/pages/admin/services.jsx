import React, {useState, useEffect} from "react";
import { Box, Flex, Text, Button, VStack, Image, HStack, Link, useDisclosure, Spinner } from '@chakra-ui/react';
import { useLazyQuery, useQuery, useMutation } from "@apollo/client";
import { GET_SERVICES, GET_SERVICE_BY_ID } from "../../utils/queries.jsx";
import { transformData } from "../../utils/transformData.jsx";
import { animated, useSpring, useTrail } from 'react-spring';
import { AddUpdateService } from "./addUpdateServices.jsx";
import { UPDATE_SERVICE, ADD_SERVICE, DELETE_SERVICE } from "../../utils/mutations.jsx";

const ServiceBox = ({ id, title, description }) => {
const { isOpen, onOpen, onClose } = useDisclosure();
const [updatedServiceId, setUpdatedServiceId] = useState(null);

// mutations
const [updateService, { loading: updateLoading, error: updateError }] = useMutation(UPDATE_SERVICE);
const [deleteService, { loading: deleteLoading, error: deleteError }] = useMutation(DELETE_SERVICE);

// open the modal and pass the data attribute
const editService = async (element) => {
    setUpdatedServiceId({ element });
    onOpen(); // Open the modal
};

// handling delete side effects
useEffect(() => {
    if (deleteError) {
        console.error(deleteError.message);
    }
    if(deleteLoading){
        // do something for loading
    }
    }, [deleteError, deleteLoading]);

// handling update side effects
useEffect(() => {
    if (updateError) {
        console.error(updateError.message);
    }
    if(updateLoading){
        // do something for loading
    }
    }, [updateError, updateLoading]);

// used in modal passed as prop
const handleUpdateMutation = (dataId, title, description, min60, min90, imageUrl) => {
    updateService({ 
        variables: { 
            id: dataId, 
            title: title || "(no title)", 
            description: description || "(no desc)", 
            min60: min60 || "(no val)", 
            min90: min90 || "(no val)", 
            image: imageUrl || "(no img)"
        }}).then((response)=> {
            if (response.errors) {
            console.error("Error updating service: ", response.errors);
            response.errors.forEach((error) => {
                console.log(error.message);
            });
            }
        }).catch((err) => {
            console.error("Unknown error updating service: ", err); // Log Network Errors
        });
};
// used in modal passed as prop
const handleDeleteMutation = (dataId) => {
    deleteService({
        variables:{ id: dataId }
    }).then((response) => {
            if (response.errors) {
            console.error("Error deleting service: ", response.errors); // Log GraphQL Errors
            }
    }).catch((err) => {
            console.error("Unknown error: ", err); // Log Network Errors
    });
}

return (
    <>
        <Flex 
            bgColor="#d9d9d0" 
            w="85vw" 
            spacing={4}
            p={0} 
            boxShadow="xl"
            borderWidth="1px" 
            borderRadius="lg" 
            overflow="hidden"
            justifyContent="space-between"
            alignItems='center'>
            <Box 
                display='flex' 
                p={2} 
                flexDirection='column' >
                <Text 
                    fontFamily="Inter-Regular" 
                    fontSize="14px"
                    color="#000000"
                    whiteSpace="normal" 
                    textAlign="left"
                    pl={5}>
                        {title}
                </Text>
                        <hr></hr>
                <Text 
                    fontFamily="Inter-Regular" 
                    fontSize="10px" 
                    color="#000000" 
                    textAlign="center" 
                    overflow='hidden'>
                        {description}
                </Text>
            </Box>
            {/* Update button */}
            <Button 
                bgColor="#476c30e6" 
                w="8%"
                data-id={id}
                mr={2} 
                onClick={(e) => editService(e.currentTarget.getAttribute('data-id'))}
            >
                <Text 
                    fontFamily="Inter-Regular" 
                    fontSize="12px" 
                    color="#ffffff"
                >
                    Update
                </Text>
            </Button>
        </Flex>

        {/* AddUpdateService modal */}
        <AddUpdateService
            isOpen={isOpen}
            onClose={onClose}
            updatedService={updatedServiceId}
            updateMutation={handleUpdateMutation}
            deleteMutation={handleDeleteMutation}
        />
        {/* <Confetti active={confetti} config={confettiConfig} /> */}
    </>
);
};
////////////////////////////////
export const Services = () => {

const { isOpen, onOpen, onClose } = useDisclosure();
const [massageServices, setMassageServices] = useState([]);
const [isLoading, setIsLoading] = useState(false);

const [addService, { loading: addLoading, error: addError }] = useMutation(ADD_SERVICE);

// handling mutation side effects
useEffect(() => {
if (addError) {
    console.error(addError.message);
}
if(addLoading){
    // do something for loading
}
}, [addError, addLoading]);

// addSrvice mutation
const addServiceMutation = (title, description, min60, min90, imageUrl )=>{
    try {
        // add the service
        addService({ 
            variables: { 
                title: title || "(no title)", 
                description: description || "(no desc)", 
                min60: min60 || "(no val)", 
                min90: min90 || "(no val)", 
                image: imageUrl || "(no img)"
            }}).then((response)=>{
                if (response.errors) {
                console.error("Error adding service: ", response.errors);
                response.errors.forEach((error) => {
                    console.log(error.message);
                });
                }
            }).catch((err) => {
                console.error("Unknown error addind service: ", err); // Log Network Errors
            });
    
        } catch (error) {
        console.error("Unknown error occurred while adding service: ", error);
        }
}
// query upon component mount
const {loading: servicesLoading, error: servicesError, data: servicesData} = useQuery(GET_SERVICES);

// Update services state when servicesData changes
useEffect(() => {
    if (servicesData && servicesData.services) {
        const transformedData = transformData(servicesData.services);
        setIsLoading(true);
        setTimeout(()=>{
            setIsLoading(false);
            setMassageServices(transformedData);
        }, 1750)
    }
}, [servicesData, servicesLoading]);

    // Animation
    const trail = useTrail(massageServices.length, {
    opacity: 1,
    transform: 'translateY(0)',
    from: { opacity: 0, transform: 'translatex(140px)' },
    delay: 200,
});
console.log(massageServices)
return (
    <>
     {isLoading ? (
        <Flex d="flex" justifyContent="center" alignItems="center" width="100vw" height="100vh">
            <Spinner 
              thickness="4px"
              speed="1.25s"
              emptyColor="gray.200"
              size="xl"
              color="green.500"
            />
        </Flex>
        ):(<Box bgColor="#ffffff" w="100%" d="flex" justifyContent="center" height='60vh'> 
        <Box textAlign='center' fontSize="34px" mt={15} mb={16}>Services</Box>
        <VStack bgColor="#ffffff" spacing={4} display='flex' justify='center' className="100">
            {trail.map((props, index) => (
                <animated.div style={props} key={massageServices[index].title}>
                    <ServiceBox 
                        title={massageServices[index].title} 
                        description={massageServices[index].description}
                        id={massageServices[index].id}
                        src={massageServices[index].image}   
                    />
                </animated.div>
            ))}
            <Box 
                w="100%" 
                p={4}
                boxShadow="xl" 
                borderRadius="lg" 
                overflow="hidden"
                display="flex" 
                justifyContent="center" 
                alignItems="center">
                <Button 
                    colorScheme="blue" 
                    onClick={onOpen}>
                    ADD
                </Button>
            </Box>
            <Box 
                height='40vh' 
                bg='#441d1d' w='100vw' 
                display="flex" 
                flexDirection="column" 
                justifyContent="center" 
                alignItems="center">
                <Image  
                    boxSize={{ base: "0px", sm: "75px", md: "100px", lg: "100px" }}
                    borderRadius={8}
                    objectFit='cover'
                    src='https://bit.ly/dan-abramov'
                    alt='Dan Abramov'
                />
                <VStack spacing={1} alignItems="center">
                    <Text textColor='#ffffff' textAlign="center" fontSize={28} fontFamily='Brush Script MT, serif'>
                        RecoverRx Massage
                    </Text>
                    <Text mt={1} textColor='#ffffff'>
                        713 N Ware Road Ste 6 <br></br>
                        McAllen, TX 78501
                    </Text>
                </VStack>
                <HStack 
                spacing={4} 
                mt={3}>
                    <Link href="https://www.instagram.com/yourInstagramUsername" isExternal>
                    <svg width="24" height="24" role="img" viewBox="0 0 24 24" fill="White" color="#000" xmlns="http://www.w3.org/2000/svg">
                    <svg width="24" height="24" role="img" viewBox="0 0 24 24" fill="white" color="#000" xmlns="http://www.w3.org/2000/svg"><title>Instagram icon</title><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"></path></svg>
                    </svg>
                    </Link>
                    <Link href="https://www.linkedin.com/in/yourLinkedInUsername" isExternal>
                    <svg width="24" height="24" role="img" viewBox="0 0 24 24" fill="white" color="#000" xmlns="http://www.w3.org/2000/svg">
                    <svg width="24" height="24" role="img" viewBox="0 0 24 24" fill="white" color="#000" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn icon</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path></svg>``
                    </svg>
                    </Link>
                    <Link href="https://www.facebook.com/yourFacebookUsername" isExternal>
                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" color="#000">
                    <svg width="24" height="24" role="img" viewBox="0 0 24 24" fill="white" color="#000" xmlns="http://www.w3.org/2000/svg"><title>Facebook icon</title><path d="M23.9981 11.9991C23.9981 5.37216 18.626 0 11.9991 0C5.37216 0 0 5.37216 0 11.9991C0 17.9882 4.38789 22.9522 10.1242 23.8524V15.4676H7.07758V11.9991H10.1242V9.35553C10.1242 6.34826 11.9156 4.68714 14.6564 4.68714C15.9692 4.68714 17.3424 4.92149 17.3424 4.92149V7.87439H15.8294C14.3388 7.87439 13.8739 8.79933 13.8739 9.74824V11.9991H17.2018L16.6698 15.4676H13.8739V23.8524C19.6103 22.9522 23.9981 17.9882 23.9981 11.9991Z"></path></svg>
                    </svg>
                    </Link>
                </HStack>
            </Box>

        </VStack>
    </Box>
     )}
    <AddUpdateService
        isOpen={isOpen}
        addService={addServiceMutation}
        onClose={onClose}
        />
    </>
);
};

  
