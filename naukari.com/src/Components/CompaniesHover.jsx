import React from "react";
import {
    useDisclosure,
    Menu,
    MenuButton,
    MenuList,
    Text,
    Box,
    Stack
  } from "@chakra-ui/react";

export const Companies = () => {

    const [isVisible, setIsVisible] = React.useState(false);
    const { isOpen, onOpen, onClose } = useDisclosure();
    
    return <>
            <Menu isOpen={isOpen}>
              <MenuButton
                variant="ghost"
                mx={1}
                py={[1, 2, 2]}
                px={4}
                borderRadius={5}
                _hover={1}
                aria-label="Courses"
                fontWeight="normal"
                onMouseEnter={onOpen}
                onMouseLeave={onClose}
              >
                Companies
              </MenuButton>
              <MenuList onMouseEnter={onOpen} onMouseLeave={onClose}>
              <Stack direction="row" gap={8} p={7}>
                    <Box  textAlign="left" p={2} m={2}>
                        <Text _hover={{color:"blue"}} mt={2} fontWeight="bold" fontSize={18}>Explore categories</Text>
                        <Text _hover={{color:"blue"}} mt={2} fontWeight="400">Unicorn</Text>
                        <Text _hover={{color:"blue"}} mt={2} fontWeight="400">MNC</Text>
                        <Text _hover={{color:"blue"}} mt={2} fontWeight="400">Startup</Text>
                        <Text _hover={{color:"blue"}} mt={2} fontWeight="400">Product based</Text>
                        <Text _hover={{color:"blue"}} mt={2} fontWeight="400">Internet</Text>
                    </Box>
                    <Box borderLeft="1px" borderColor="lightgray" textAlign="left" p={2} m={2}>
                        <Text _hover={{color:"blue"}} pl={5} mt={2} fontWeight="bold" fontSize={18}>Explore collections</Text>
                        <Text _hover={{color:"blue"}} pl={5} mt={2} fontWeight="400">Top companies</Text>
                        <Text _hover={{color:"blue"}} pl={5} mt={2} fontWeight="400">IT companies</Text>
                        <Text _hover={{color:"blue"}} pl={5} mt={2} fontWeight="400">Fintech companies</Text>
                        <Text _hover={{color:"blue"}} pl={5} mt={2} fontWeight="400">Sponsored companies</Text>
                        <Text _hover={{color:"blue"}} pl={5} mt={2} fontWeight="400">Featured companies</Text>
                    </Box>
                    <Box borderLeft="1px" borderColor="lightgray" textAlign="left" p={2} m={2}>
                        <Text _hover={{color:"blue"}} pl={5} mt={2} fontWeight="bold" fontSize={18}>Research companies</Text>
                        <Text _hover={{color:"blue"}} pl={5} mt={2} fontWeight="400">Ambitionbox</Text>
                        <Text _hover={{color:"blue"}} pl={5} mt={2} fontWeight="400">Interview questions</Text>
                        <Text _hover={{color:"blue"}} pl={5} mt={2} fontWeight="400">Company salaries</Text>
                        <Text _hover={{color:"blue"}} pl={5} mt={2} fontWeight="400">Company reviews</Text>
                        <Text _hover={{color:"blue"}} pl={5} mt={2} fontWeight="400">Salary Calculator</Text>
                    </Box>
                </Stack>
              </MenuList>
            </Menu>
    </>
}