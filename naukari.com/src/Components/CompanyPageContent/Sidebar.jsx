import {
  Text,
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Image,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Button,
  List,
  Grid,
  GridItem,
  Input,

} from "@chakra-ui/react";
import {Department} from "./Department";


export const Sidebar = () => {
  return (
    <>
      <Box display="flex" mb={10}>
        <Image
          w="10%"
          src="data:image/png;base64,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"
          alt="filter logo"
        />
        <Text fontSize="180%">Filter</Text>
      </Box>
      <Box>
        <Accordion>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  <Popover>
                    <PopoverTrigger>
                      <Button variant="unstyled" fontWeight="bold">
                        Company type
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent>
                      <PopoverArrow />
                      <PopoverCloseButton />
                      <PopoverHeader>Company type</PopoverHeader>
                      <PopoverBody bg="white" color="black">
                        Foreign MNC (1060) <br />
                        Corporate (586)
                        <br />
                        Indian MNC (244)
                        <br />
                        Startup (229)
                        <br />
                        Govt/PSU (19)
                        <br />
                        Others (1)
                        <br />
                      </PopoverBody>
                    </PopoverContent>
                  </Popover>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box fontWeight="bold" flex="1" textAlign="left">
                  Location
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box fontWeight="bold" flex="1" textAlign="left">
                  Industry
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box fontWeight="bold" flex="1" textAlign="left">
                <Department/>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
             
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box fontWeight="bold" flex="1" textAlign="left">
                  Experience
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Box w={150} p={1} border="1px" borderRadius="10px">
                <Text fontSize={15}>Experienced (2129)</Text>
              </Box>
              <Box w={150} p={1} border="1px" borderRadius="10px">
                <Text fontSize={15}>Entry Level (683)</Text>
              </Box>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box fontWeight="bold" flex="1" textAlign="left">
                  Nature of business
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} display="flex">
              <Box p={1} border="1px" borderRadius="10px">
                <Text ml={1} fontSize={15}>
                  B2B (1724)
                </Text>
              </Box>
              <Box ml={1} p={1} border="1px" borderRadius="10px">
                <Text fontSize={15}>B2C (950)</Text>
              </Box>
              <Box ml={1} p={1} border="1px" borderRadius="10px">
                <Text fontSize={15}>D2C (8)</Text>
              </Box>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box fontWeight="bold" flex="1" textAlign="left">
                  Job posting date
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} display="flex">
              <Box p={1} border="1px" borderRadius="10px">
                <Text fontSize={15}>ᐸ 7 DAYS</Text>
              </Box>
              <Box p={1} border="1px" borderRadius="10px">
                <Text fontSize={15}>ᐸ 15 DAYS</Text>
              </Box>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
    </>
  );
};
