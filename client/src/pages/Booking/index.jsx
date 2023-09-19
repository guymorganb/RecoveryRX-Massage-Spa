import Title from "./Title";
import Calendar from "./Calendar";
import AboutCustomer from "./AboutCustomer";
import { Box } from "@chakra-ui/react";

function Booking() {
  return ( 
    <div>
      <Box
      bg='#5e6d55'
      color='#ffffff'
      py={'2em'}
      >
        <Title />
        <Calendar />
        <AboutCustomer />
      </Box>
    </div>
  );
}

export default Booking;