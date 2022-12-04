import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Input,
    Button,
    useDisclosure,
    Image,
    InputLeftElement,
    Box,
    Stack,
    InputGroup,
    Select
  } from '@chakra-ui/react';
  import React from 'react';
import { Search2Icon } from "@chakra-ui/icons";


export const TopDrawer = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

  return (
    <>
      <Button ref={btnRef} size="sm" colorScheme='teal' onClick={onOpen}>
        <Search2Icon/>
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='top'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader><Image src="https://static.naukimg.com/s/4/100/i/naukri_Logo.png" alt="logo"/></DrawerHeader>

          <DrawerBody p={0} m={0}>
          <Box
          mt={{ base: 23, sm: 30, md: 50, xl: 50 }}
          p={{ base: 5, sm: 7, md: 50, xl: 50 }}
        >
          <Stack
            style={{
              boxShadow:
                "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
            }}
            display="flex"
            direction={{ base: "column", sm: "column", md: "row", xl: "row" }}
            gap={{ base: 1, sm: 1, md: 2, xl: 2 }}
            w="80%"
            justifyContent="space-around"
            m="auto"
            borderRadius={{ base: 10, sm: 10, md: "full", xl: "full" }}
            p={{ base: 2, sm: 3, md: "1%", xl: "1%" }}
          >
            <Box>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<Search2Icon zIndex={-1} color="blue" />}
                />
                <Input
                  variant="unstyled"
                  mt={2}
                  type="tel"
                  placeholder="Enter Skills/Designations/Companies"
                />
              </InputGroup>
            </Box>
            
            <Box
              borderLeft={{ base: 0, sm: 0, md: "1px", xl: "1px" }}
              borderRight={{ base: 0, sm: 0, md: "1px", xl: "1px" }}
              ml={{ base: "auto", sm: "auto", md: 3, xl: 3 }}
              pl={{ base: 8, sm: 8, md: 3, xl: 3 }}
              pr={{ base: 5, sm: "55%", md: 1, xl: 1 }}
            >
              <Select placeholder="Select Experience" mt={2} variant="unstyled">
                <option value="option1">  ➤ 1 Year</option>
                <option value="option2">  ➤ 2 Year</option>
                <option value="option3">  ➤ 3 Year</option>
                <option value="option3">  ➤ 4 Year</option>
                <option value="option3">  ➤ 5 Year</option>
                <option value="option3">  ➤ 6 Year</option>
                <option value="option3">  ➤ 7 Year</option>
                <option value="option3">  ➤ 8 Year</option>
                <option value="option3">  ➤ 9 Year</option>
                <option value="option3">  ➤ 10 Year</option>
                <option value="option3">  ➤ 11 Year</option>
                <option value="option3">  ➤ 12 Year</option>
                <option value="option3">  ➤ 13 Year</option>
                <option value="option3">  ➤ 14 Year</option>
                <option value="option3">  ➤ 15 Year</option>
                <option value="option3">  ➤ 16 Year</option>
                <option value="option3">  ➤ 17 Year</option>
                <option value="option3">  ➤ 18 Year</option>
                <option value="option3">  ➤ 19 Year</option>
                <option value="option3">  ➤ 20 Year</option>
                <option value="option3">  ➤ 21 Year</option>
                <option value="option3">  ➤ 22 Year</option>
                <option value="option3">  ➤ 23 Year</option>
                <option value="option3">  ➤ 24 Year</option>
                <option value="option3">  ➤ 24 Year</option>
                <option value="option3">  ➤ 25 Year</option>
                <option value="option3">  ➤ 26 Year</option>
                <option value="option3">  ➤ 27 Year</option>
                <option value="option3">  ➤ 28 Year</option>
                <option value="option3">  ➤ 29 Year</option>
                <option value="option3">  ➤ 30 Year</option>
                <option value="option3">  ➤ 31 Year</option>
                <option value="option3">  ➤ 32 Year</option>
                <option value="option3">  ➤ 33 Year</option>
              </Select>
            </Box>
            <Box>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  display="none"
                  children={<Search2Icon color="blue" />}
                />
                <Input
                  mt={2}
                  variant="unstyled"
                  type="tel"
                  placeholder="Enter Location"
                />
              </InputGroup>
            </Box>
            <Box>
              <Button
                colorScheme="blue"
                size={{ base: "sm", sm: "sm", md: "md", xl: "lg" }}
                fontSize={{ base: "70%", sm: "100%", md: "190%", xl: "lg" }}
                fontWeight="700"
                fontFamily="serif"
                borderRadius="full"
              >
                Search
              </Button>
            </Box>
          </Stack>
        </Box>
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} fontSize={{ base: "70%", sm: "100%", md: "100%", xl: "lg" }} onClick={onClose}>
              Cancel
            </Button>
            <Button fontSize={{ base: "70%", sm: "100%", md: "100%", xl: "lg" }} colorScheme='blue'>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}