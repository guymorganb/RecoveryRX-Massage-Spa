import Title from "./Title";
import Calendar from "./Calendar";
import AboutCustomer from "./AboutCustomer";
import Confirmation from "./Confirmation";
import { Box } from "@chakra-ui/react";

function Booking({title}) {
  return ( 
    <div>
      <Box
      bg='#5e6d55'
      color='#ffffff'
      py={'2em'}
      >
        <Title />
        <Calendar />
        <AboutCustomer title={title}/>
        <Confirmation />
      </Box>
    </div>
  );
}

export default Booking;