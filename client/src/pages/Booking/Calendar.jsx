import React, { useState } from "react";
import calendar from 'calendar-js';
import { Box, Text, SimpleGrid, Button} from "@chakra-ui/react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

const d = new Date();
const monthNumber = d.getMonth();
const y = d.getFullYear();
let selected, lastSelected;

function Calendar() {
  const [monthIndex, setMonthIndex] = useState(monthNumber);
  const [yearNumber, setYearNumber] = useState(y);
  const cal = calendar().of(yearNumber, monthIndex);
  const weeks = cal.calendar;
  const { month } = cal;
  const { year } = cal;
  let items = [];
  weeks.forEach(element => {
    items.push(...element);
  });
  let { weekdaysAbbr } = cal;

  return (
    <div>
      <Box
      py={'2em'}
      w={{ sm: "95%", md: "85%", xl: "75%" }}
      mx={'auto'}
      >
        <Text
        fontSize={{ sm: "1em", md: "1.5em", xl: "2em" }}
        py={'1em'}
        >
          Step 1: Select a Date
        </Text>
        <Box
        textAlign={'center'}
        backgroundColor={'#fbdebb'}
        borderRadius={'1em'}
        p={'4em'}
        >
        <SimpleGrid 
        columns={3} 
        spacing={'2em'}
        py={'1em'}
        >
          <Box>
            <SimpleGrid 
            columns={4}
            >
              <Box>
                <Button
                color={'white'}
                colorScheme={'blackAlpha'}
                variant={'ghost'}
                fontSize={{ sm: "1em", md: "1.5em", xl: "2em" }}
                onClick={() => {
                  if (monthIndex === 0) {
                    setMonthIndex(11);
                    setYearNumber(yearNumber - 1);
                  } else {
                    setMonthIndex(monthIndex - 1)
                  }
                  lastSelected.style.color = 'white';
                  selected = undefined;
                  console.log(selected);
                  }
                  }
                >
                  <SlArrowLeft />
                </Button>
              </Box>
              <Box>
                <Button
                color={'white'}
                colorScheme={'blackAlpha'}
                variant={'ghost'}
                fontSize={{ sm: "1em", md: "1.5em", xl: "2em" }}
                onClick={() => {
                  if (monthIndex === 11) {
                    setMonthIndex(0);
                    setYearNumber(yearNumber + 1);
                  } else {
                    setMonthIndex(monthIndex + 1)
                  }
                  lastSelected.style.color = 'white';
                  selected = undefined;
                  console.log(selected);
                  }}
                >
                  <SlArrowRight />
                </Button>
              </Box>
              <Box>

              </Box>
            </SimpleGrid>
          </Box>
          <Box>
            <Text
              fontSize={{ sm: "1.5em", md: "2.5em", xl: "3em" }}
            >
              {month}
            </Text>
          </Box>
          <Box>
          <Text
            fontSize={{ sm: "1.5em", md: "2.5em", xl: "3em" }}
          >
            {year}
          </Text>
          </Box>
        </SimpleGrid>
        <SimpleGrid columns={7} spacing={'2em'} py={'1em'} fontSize={{ sm: "1em", md: "1.5em", xl: "2em" }}>
        {weekdaysAbbr.map((item,index)=>{
         return <Box key={index}>{item}</Box>
        })}
        </SimpleGrid>
        <SimpleGrid columns={7} spacing={'2em'} fontSize={{ sm: "1em", md: "1.5em", xl: "2em" }}>
        {items.map((item,index)=>{
          if (item === 0) {
            item = '';
            return <Box key={index}>
                  {item}
            </Box>;
          }
         return (<button key={index} onClick={(event) => {
          if(!lastSelected) {
            selected = event.target;
            selected.style.color = '#5e6d55';
            lastSelected = selected;
            console.log(selected);
          } else if(lastSelected) {
            lastSelected.style.color = 'white';
            selected = event.target;
            selected.style.color = '#5e6d55';
            lastSelected = selected;
            console.log(selected);
          }
          }}>
              {item}
         </button>)
        })}
        </SimpleGrid>
        </Box>
      </Box>
    </div>
  );
}

export default Calendar;
