import React, { useState } from "react";
import { Stack, Flex, Grid, Select, HStack, Text, Box, Image, Checkbox } from '@chakra-ui/react'

const massageOptions = [
{name: 'Swedish Massage', description: "Swedish massage is a type of massage that uses long, flowing strokes to promote relaxation and relieve tension. It is a gentle massage that is suitable for people of all ages and fitness levels. Swedish massage can help to improve circulation, reduce stress, and relieve pain. It can also help to improve sleep and boost energy levels.", price: '60min: $80 | 90min: $140'},
{name: 'Sports Massage', description: 'Sports massage is a type of massage that is specifically designed to help athletes recover from workouts and injuries. It is a more vigorous massage than Swedish massage, and it uses a variety of techniques to target the muscles and soft tissues that are used in sports. Sports massage can help to improve circulation, reduce muscle soreness, and increase flexibility. It can also help to prevent injuries and improve performance.', price: '60min: $80 | 90min: $140'},
{name: 'Deep Tissue', description: ' Deep tissue massage is a type of massage that uses deep pressure to target the muscles and connective tissue. It is a more intense massage than Swedish massage or sports massage, and it is typically used to treat chronic pain, muscle tightness, and other conditions.Deep tissue massage can be beneficial for a variety of reasons. It can help to improve circulation, reduce muscle soreness, and increase flexibility. It can also help to relieve pain, improve sleep, and boost energy levels.', price: '60min: $80 | 90min: $140'},
{name: 'Cupping', description: 'Cupping is a type of massage that uses suction to create a vacuum on the skin. This can help to improve circulation, reduce inflammation, and relieve pain. Cupping is typically used to treat chronic pain, muscle tightness, and other conditions.Cupping is performed by placing a cup on the skin and then creating a vacuum by either suctioning air out of the cup or using a heat source to create steam. The suction pulls the skin up into the cup, which creates a stretch on the muscles and tissues. This can help to improve circulation, reduce inflammation, and relieve pain.', price: '60min: $80 | 90min: $140'},
{name: 'Hot Stones', description: 'Hot stone massage is a type of massage that uses heated stones to promote relaxation and relieve pain. The stones are typically made of basalt, which is a type of volcanic rock that retains heat well, the stones are typically placed on the back, shoulders, neck, and legs. Hot stone massage can be beneficial for a variety of reasons. It can help to improve circulation, reduce muscle soreness, and relieve pain. It can also help to promote relaxation and reduce stress.', price: '60min: $80 | 90min: $140'},
]
const MassageSelector = () => {

    const [userPreference, setUserPreference] = useState({
        clientName: "",
        experience: "", 
        massageType: "",   
        intensity: "",     
        lookingFor: "",    
        wheresYourPain: "" 
    });

    const [selectedOptions, setSelectedOptions] = useState([]);

    // function logic handling the changed state of the select box
    const getRecommendations = () => {
        // declare an array to push massageOption to
        let recommendedMassages = [];
        // get the value of the select box
        const experience = document.getElementById("experience").value;
        const intensity = document.getElementById("intensity").value;
        const lookingFor = document.getElementById("lookingFor").value
        const pain = document.getElementById("pain").value
        
      
        
        if (experience === 'No') { // No previous experience
            // ensure the array is empty
            recommendedMassages = [];
            // push to the array
            recommendedMassages.push(massageOptions[0]); // Swedish massage
            setUserPreference(prev => ({
                ...prev, 
                experience: experience
            }));
            // set the state from the array contents
            setSelectedOptions(recommendedMassages);
        } 
        if (intensity === "Soft" && experience === 'No') { 
            recommendedMassages = [];
            recommendedMassages.push(massageOptions[0]); // Swedish massage
            recommendedMassages.push(massageOptions[4]); // Hot stones
            setUserPreference(prev => ({
                ...prev, 
                intensity: intensity
            }));
            setSelectedOptions(recommendedMassages);
        }
        if (intensity === "Medium" && experience === 'No') { 
            recommendedMassages = [];
            recommendedMassages.push(massageOptions[0]); // Swedish massage
            recommendedMassages.push(massageOptions[1]); // Sports massage
            recommendedMassages.push(massageOptions[4]); // Hot stones
            setUserPreference(prev => ({
                ...prev, 
                intensity: intensity
            }));
            setSelectedOptions(recommendedMassages);
        }     
        if (intensity === "Hard" && experience === 'No') { 
            recommendedMassages = [];
            recommendedMassages.push(massageOptions[1]); // Sports massage
            recommendedMassages.push(massageOptions[2]); // Deep Tissue
            recommendedMassages.push(massageOptions[3]); // Cupping
            setUserPreference(prev => ({
                ...prev, 
                intensity: intensity
            }));
            setSelectedOptions(recommendedMassages);
        }
        if(experience === "Yes"){
            recommendedMassages = [];
            recommendedMassages.push(massageOptions[0]); // Swedish massage
            recommendedMassages.push(massageOptions[1]); // Sports massage
            recommendedMassages.push(massageOptions[4]); // Hot stones
            setUserPreference(prev => ({
                ...prev, 
                experience: experience
            }));
            setSelectedOptions(recommendedMassages);
        }
        if(intensity === "Soft" && experience === "Yes"){
            recommendedMassages = [];
            recommendedMassages.push(massageOptions[0]); // Swedish massage
            recommendedMassages.push(massageOptions[1]); // Sports massage
            setUserPreference(prev => ({
                ...prev, 
                intensity: intensity
            }));
            setSelectedOptions(recommendedMassages);
        }
        if(intensity === "Medium" && experience === "Yes"){
            recommendedMassages = [];
            recommendedMassages.push(massageOptions[0]); // Swedish massage
            recommendedMassages.push(massageOptions[1]); // Sports massage
            recommendedMassages.push(massageOptions[3]); // Cupping
            setUserPreference(prev => ({
                ...prev, 
                intensity: intensity
            }));
            setSelectedOptions(recommendedMassages);
        }
        if(intensity === "Hard" && experience === "Yes"){
            recommendedMassages = [];
            recommendedMassages.push(massageOptions[1]); // Sports massage
            recommendedMassages.push(massageOptions[2]); // Deep Tissue
            recommendedMassages.push(massageOptions[3]); // Cupping
            recommendedMassages.push(massageOptions[4]); // Hot stones
            setUserPreference(prev => ({
                ...prev, 
                intensity: intensity
            }));
            setSelectedOptions(recommendedMassages);
        }
        if(lookingFor !== ""){
            setUserPreference(prev => ({
                ...prev,  
                lookingFor: lookingFor
            }));
        }
        if(pain !== ""){
            setUserPreference(prev => ({
                ...prev, 
                wheresYourPain: pain
            }));
        }
        if(pain !== "" && lookingFor !== "" && intensity != "" && experience != ""){
            setUserPreference(prev => ({
                ...prev,
                intensity: intensity,
                lookingFor: lookingFor, 
                wheresYourPain: pain
            }));
            console.log(userPreference)
        }
    }
    // the function call on change of the select box
    const handleChange = () => {
        getRecommendations();
    }

    const [checkedMassages, setCheckedMassages] = useState([]);
    
    const handleCheckboxChange = (option) => {
        // Check by option name
        if (checkedMassages.some(massage => massage.name === option.name)) {
            setCheckedMassages(checked => checked.filter(item => item.name !== option.name));
        } else {
            setCheckedMassages(checked => [...checked, option]);
        }
    
        setUserPreference({
            ...userPreference,
            massageType: option.name
        });
    };
    

    return (
    <Flex align="center" justify="start" minHeight="100vh" direction="column" >
        <Stack width="1080px" height="150px" maxWidth="100%" background="#FFFFFF">
            <Text fontFamily="Noto Sans"
                lineHeight="1.43"
                fontWeight="regular"
                fontSize="28px"
                color="#000000"
                width="100%"
                height="1.5em"
                maxWidth="100%"
                textAlign="center">
                Massage Selector 
            </Text>
            <Text fontFamily="Inter"
                lineHeight="1.43"
                fontWeight="regular"
                fontSize="20px"
                color="#000000"
                width="100%"
                height="2em"
                maxWidth="100%"
                textAlign="center"
                marginBottom={1}>
            Select from the fields below and we'll recommend a massage tailored to your needs.
            </Text>
    <HStack spacing={8} display='flex' justify='center' marginTop={{ base: '10', sm: '4', md: '2', lg: '', xl:'' }}>
        <Select id="experience" onChange={handleChange} placeholder="Have you had a massage before?" size="sm" width="28%" height="32px" >
            <option value='No'>No</option>
            <option value='Yes'>Yes</option>
            
        </Select>
        <Select id="intensity" onChange={handleChange} placeholder="Intensity" size="sm" width="12%" height="32px" >
            <option value='Soft'>Soft</option>
            <option value='Medium'>Medium</option>
            <option value='Hard'>Hard</option>
            
        </Select>
        <Select id="lookingFor" onChange={handleChange} placeholder="What are you looking for?" size="sm" width="28%" height="32px" >
            <option value='Alleviate pain'>Alleviate pain</option>
            <option value='Increase energy'>Increase energy</option>
            <option value='Improve mood'>Improve mood</option>
            <option value='Promote relaxation'>Promote relaxation</option>
            <option value='Reduce anxiety'>Reduce anxiety</option>
            <option value='Release tension'>Release tension</option>
            
        </Select>
        <Select id="pain" onChange={handleChange}  placeholder="Where is your pain?" size="sm" width="22%" height="32px">
            <option value='Back'>Back</option>
            <option value='Chest'>Chest</option>
            <option value='Head'>Head</option>
            <option value='Legs'>Legs</option>
            <option value='Neck'>Neck</option>
            <option value='Shoulders'>Shoulders</option>
            
        </Select>
    </HStack>
        </Stack>
        <Box>
            <Grid
                templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }} 
                gap={6}> 
                {selectedOptions.map((option, index) => (
                    <Box margin={1} key={index} padding={4} border="1px solid #e2e8f0" borderRadius={8}>
                        <Text fontSize="lg" fontWeight="bold">{option.name}</Text>
                        <hr></hr>
                        <Text fontSize="sm" my={2}>{option.description}</Text>
                        <Text borderTop= '1px solid blue' fontSize="xs" color="gray.500">{option.price}</Text>
                        <Checkbox 
                            mt={2}
                            onChange={() => handleCheckboxChange(option)}
                            isChecked={checkedMassages.some(massage => massage.name === option.name)}>
                            Select
                        </Checkbox>

                    </Box>
                ))}
            </Grid>
        </Box>
        </Flex>
    )
}

export default MassageSelector;
