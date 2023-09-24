import Title from "./Title";
import Calendar from "./Calendar";
import AboutCustomer from "./AboutCustomer";
import Confirmation from "./Confirmation";
import { Box } from "@chakra-ui/react";
import { useState } from "react";

function Booking({title}) {
  const [selectedDate, setSelectedDate] = useState('');
  return ( 
    <div>
      <Box
      bg='#5e6d55'
      color='#ffffff'
      py={'2em'}
      >
        <Title />
        <Calendar setSelectedDate={setSelectedDate}/>
        <AboutCustomer title={title} selectedDate={selectedDate}/>
        <Confirmation />
      </Box>
    </div>
  );
}

export default Booking;