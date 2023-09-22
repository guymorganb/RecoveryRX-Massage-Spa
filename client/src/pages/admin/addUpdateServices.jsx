import React, { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";

import { UPDATE_SERVICE, ADD_SERVICE, DELETE_SERVICE } from "../../utils/mutations.jsx";
import {
  Box,
  Text,
  Button,
  Input,
  Textarea,
  HStack,
  VStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalCloseButton,
  ModalBody,
} from "@chakra-ui/react";

export const AddUpdateService = ({ isOpen, onClose, updatedService, handleUpdate }) => {
    
    const [elementId, setElementId] = useState()
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [showTextBox, setShowTextBox] = useState(false);
    const [buttonText, setButtonText] = useState("Click to expand");
    const [min60, setMin60] = useState("");
    const [min90, setMin90] = useState("");
    const [deleteButtonText, setDeleteButtonText] = useState("Delete")
    const [saveButtonText, setSaveButtonText] = useState("Save")
    const [clickCount, setClickCount] = useState(0);
    const [updateService, { loading: updateLoading, error: updateError }] = useMutation(UPDATE_SERVICE);
    const [addService, { loading: addLoading, error: addError }] = useMutation(ADD_SERVICE);
    const [deleteService, { loading: deleteLoading, error: deleteError }] = useMutation(DELETE_SERVICE);

    useEffect(()=>{
    setElementId(updatedService)
    
    },[elementId])
        
    const handleImageURL = () => {
    setShowTextBox(!showTextBox);
    setButtonText(showTextBox ? "Click to expand" : "Hide");
    };

    const handleSave = async (dataId) => {
        console.log(imageUrl)
        console.log(description)
        console.log(title)
        console.log(min60)
        console.log(min90)
        console.log(dataId)
        try{
            // const priceArray = [{ min60: min60, min90: min90 }];
        if(dataId != null){
            // update the service
            updateService({ 
                variables: { 
                    id: dataId, 
                    title: title, 
                    description: description, 
                    min60: min60, 
                    min90: min90, 
                    image: imageUrl 
                } 
            });
        }

        else if(dataId == null){
            // add the service
            addService({ 
                variables: { 
                    title: title, 
                    description: description, 
                    min60: min60, 
                    min90: min90, 
                    image: imageUrl 
                } 
            });
            }
        }catch(error){
            console.log(error)
        }
      };

    const handleDelete = (dataId) => {
      try{
        // delete the service
        console.log(dataId);
        deleteService(dataId) // debug this
        
      }catch(error){
        console.log(error)
      }
    };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
      {updatedService ? (<ModalHeader>Update Service</ModalHeader>) : (<ModalHeader>Add Service</ModalHeader>)}
        <ModalCloseButton />
        <ModalBody>
          <Box
            w="100%"
            p={5}
            boxShadow="xl"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
          >
            <Input
              placeholder="Title"
              mb={4}
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
            <Textarea
              placeholder="Description"
              mb={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            {showTextBox && (
              <HStack>
                <Input
                placeholder="Add Image URL"
                mb={14}
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
              />
              <VStack>
                <Input
                placeholder="60min Price"
                mb={1}
                value={min60}
                onChange={(e) => setMin60(e.target.value)}
              />
                <Input
                placeholder="90min price"
                mb={1}
                value={min90}
                onChange={(e) => setMin90(e.target.value)}
              />
              </VStack>
              </HStack>
            )}
            <HStack justifyContent="space-between">
              <Button
                bgColor="#476c30e6"
                w="160px"
                h="53px"
                mb="15%"
                onClick={handleImageURL}
              >
                <Text
                  fontFamily="Inter-Regular"
                  fontSize="16px"
                  color="#ffffff"
                >
                  {buttonText}
                </Text>
              </Button>
              <Box mt="15%">
                {showTextBox && (
                  <Button m={3} 
                  colorScheme="blue"
                  data-id={updatedService?.element}
                  onClick={(e)=>{
                    const newClickCount = clickCount + 1;
                  setClickCount(newClickCount);
                  if (newClickCount === 1) {
                    setSaveButtonText("Confirm Save?"); 
                  } else if (newClickCount === 2) {
                    handleSave(e.currentTarget.getAttribute('data-id')) 
                  // close the modal and reset the button text here
                  onClose(); // onClose passed through props from parent 
                  setSaveButtonText("Save");
                  setClickCount(0);  // reset the click count
                  }}}
                  >
                   {saveButtonText}
                  </Button>
                  // delete button
                )}{updatedService && (
                <Button
                data-id={updatedService?.element}
                colorScheme="blue" 
                onClick={e => {
                  const newClickCount = clickCount + 1;
                  setClickCount(newClickCount);
                  if (newClickCount === 1) {
                    setDeleteButtonText("Confirm Delete?"); 
                  } else if (newClickCount === 2) {
                    handleDelete(e.currentTarget.getAttribute('data-id'));
                    // close the modal and reset the button text here
                    onClose(); // onClose passed through props from parent 
                    setDeleteButtonText("Delete");
                    setClickCount(0);  // reset the click count
                    }
                  }}
                >
                  {deleteButtonText}
                </Button>
                )}
              </Box>
            </HStack>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
