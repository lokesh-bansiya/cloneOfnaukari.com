import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Text,
  Box,
  Button,
  Grid,
  GridItem,
  Input,
  Stack,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";
import React from "react";

export const Department = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen} fontWeight="bold" variant="unstyled">Department</Button>
      <Box >
      <Modal  w="80%" ml={2} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Department</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            
            <Box>
              <Input placeholder="Search Department" />
            </Box>
            <Grid templateColumns="repeat(3, 1fr)" gap={6}>
              <GridItem>
                <Text>Engineering - Software & QA(1245)</Text>
                <Text>Sales & Business Development(944)</Text>
                <Text>Other(810)</Text>
                <Text>Customer Success, Service & Operations(796)</Text>
                <Text>IT & Information Security(776)</Text>
                <Text>Finance & Accounting(759)</Text>
                <Text>Human Resources(752)</Text>
                <Text>Data Science & Analytics(625)</Text>
              </GridItem>
              <GridItem>
                <Text>Marketing & Communication(536)</Text>
                <Text>Project & Program Management(499)</Text>
                <Text>Engineering - Hardware & Networks(459)</Text>
                <Text>UX, Design & Architecture(438)</Text>
                <Text>Product Management(344)</Text>
                <Text>Consulting(333)</Text>
                <Text>Procurement & Supply Chain(328)</Text>
                <Text>Research & Development(301)</Text>
              </GridItem>
              <GridItem>
                <Text>Content, Editorial & Journalism(290)</Text>
                <Text>Production, Manufacturing & Engineering(285)</Text>
                <Text>Quality Assurance(280)</Text>
                <Text>Teaching & Training(271)</Text>
                <Text>Administration & Facilities(265)</Text>
                <Text>BFSI, Investments & Trading(228)</Text>
                <Text>Legal & Regulatory(185)</Text>
                <Text>Strategic & Top Management(166)</Text>
              </GridItem>
            </Grid>
            <Box>
              <Button>Apply</Button>
            </Box>
            
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      </Box>
    </>
  );

  // const { isOpen, onOpen, onClose } = useDisclosure()
  // const [placement, setPlacement] = React.useState('right')

  // return (
  //   <>
  //     <Button colorScheme='blue' onClick={onOpen}>
  //       Open
  //     </Button>
  //     <Drawer
  //       onClose={onClose}
  //       h={100}
  //       isOpen={isOpen}
  //       placement="left"
  //       size="md"
  //       >
  //       <DrawerOverlay />
  //       <DrawerContent>
  //         <DrawerHeader borderBottomWidth='1px'>Basic Drawer</DrawerHeader>
  //         <DrawerBody>
  //         <Box>
  //         </DrawerBody>
  //       </DrawerContent>
  //     </Drawer>
  //   </>
  // )
};
