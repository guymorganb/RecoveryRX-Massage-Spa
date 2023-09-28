import React, { useState }from "react";
import { useQuery } from '@apollo/client';
import { GET_UNCONFIRMED_APPOINTMENTS } from "../../utils/queries";
import { Box, Text, Grid, GridItem, Button, Stack } from "@chakra-ui/react";

function Appointments() {
  const [confirm, setConfirm] = useState(false);

  const { loading, data } = useQuery(GET_UNCONFIRMED_APPOINTMENTS, {
    variables: { confirm: confirm},
  });


  const appointments = data?.unconfirmedAppointments || [];
  console.log(appointments);
  return (
    <>
      <Box
        py={'2em'}
        w={{ sm: "99%", md: "95%", xl: "90%" }}
        mx={'auto'}
      >
        <Grid
          templateColumns='repeat(5, 1fr)'
          w={'95%'}
          mx={'auto'}
        >
          <GridItem colSpan={4}>
            <Text
              fontSize={{ sm: "1.5em", md: "2.em", xl: "2.5em" }}
            >
              Upcoming Appointments
            </Text>
          </GridItem>
          <GridItem colSpan={1} alignSelf={'center'} justifySelf={'end'}>
            <Stack spacing={4} direction='row' align='center'>
                <Button 
                  colorScheme='teal' 
                  size={{ sm: "xs", md: "sm", xl: "md" }}
                  onClick={() => {
                    setConfirm(false);
                  }}>
                  Unconfirmed
                </Button>
                <Button 
                  colorScheme='teal' 
                  size={{ sm: "xs", md: "sm", xl: "md" }}
                  onClick={() => {
                    setConfirm(true);
                  }}>
                  Confirmed
                </Button>
                <Button colorScheme='teal' size={{ sm: "xs", md: "sm", xl: "md" }}>
                  Calendar
                </Button>
              </Stack>
          </GridItem>
        </Grid>
        {
          appointments.map((obj, index) => {
            const {firstName, lastName, date, phone, email, massage} = obj;
            return <Box
              borderRadius={'1em'}
              border='1px'
              borderColor='gray.200'
              my={'1em'}
              key={index}
              >
                <Grid
                  templateColumns='repeat(5, 1fr)'
                  w={'95%'}
                  mx={'auto'}
                >
                  <GridItem colSpan={4}>
                    <Text
                      fontSize={{ sm: "1em", md: "1.5em", xl: "2em" }}
                    >
                      {
                        `${firstName}, ${lastName}`
                      }
                    </Text>
                    <Text
                      fontSize={{ sm: "1em", md: "1.15em", xl: "1.3em" }}
                    >
                      {
                        `${date} | ${phone} | ${email} | ${massage}`
                      }
                    </Text>
                  </GridItem>
                  <GridItem colSpan={1} alignSelf={'center'} justifySelf={'end'}>
                  {
                    confirm ? (
                      <Stack spacing={4} direction='row' align='center'>
                        <Button colorScheme='blue' size={{ sm: "xs", md: "sm", xl: "md" }}>
                          Confirmed
                        </Button>
                      </Stack>
                    ) : (
                      <Stack spacing={4} direction='row' align='center'>
                        <Button colorScheme='green' variant='outline' size={{ sm: "xs", md: "sm", xl: "md" }}>
                          Confirm
                        </Button>
                        <Button colorScheme='red' variant='outline' size={{ sm: "xs", md: "sm", xl: "md" }}>
                          Reject
                        </Button>
                      </Stack>
                    )
                  }
                  </GridItem>
                </Grid>
              </Box>
          })
        }
      </Box>
    </>
  );
}

export default Appointments;