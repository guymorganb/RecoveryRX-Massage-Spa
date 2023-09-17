import Title from "./Title";
import Calendar from "./Calendar";
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
      </Box>
    </div>
  );
}

export default Booking;