import React from "react";

import {
    useDisclosure,
    Menu,
    MenuButton,
    MenuList,
    Box,
    Stack,
    Text,
  } from "@chakra-ui/react";

export const Jobs = () => {

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
                Jobs
              </MenuButton>
              <MenuList onMouseEnter={onOpen} onMouseLeave={onClose} p={5}>
                <Stack direction="row" gap={8}>
                    <Box  textAlign="left" p={2} m={2}>
                        <Text _hover={{color:"blue"}} mt={2} fontWeight="bold" fontSize={18}>Popular categories</Text>
                        <Text _hover={{color:"blue"}} mt={2} fontWeight="400">IT jobs</Text>
                        <Text _hover={{color:"blue"}} mt={2} fontWeight="400">Sales jobs</Text>
                        <Text _hover={{color:"blue"}} mt={2} fontWeight="400">Marketing jobs</Text>
                        <Text _hover={{color:"blue"}} mt={2} fontWeight="400">HR jobs</Text>
                        <Text _hover={{color:"blue"}} mt={2} fontWeight="400">Engineering jobs</Text>
                        <Text _hover={{color:"blue"}} mt={2} fontWeight="400">Popular categories</Text>
                    </Box>
                    <Box borderLeft="1px" borderColor="lightgray" textAlign="left" p={2} m={2}>
                        <Text _hover={{color:"blue"}} pl={5} mt={2} fontWeight="bold" fontSize={18}>Jobs in demand</Text>
                        <Text _hover={{color:"blue"}} pl={5} mt={2} fontWeight="400">Fresher jobs</Text>
                        <Text _hover={{color:"blue"}} pl={5} mt={2} fontWeight="400">MNC jobs</Text>
                        <Text _hover={{color:"blue"}} pl={5} mt={2} fontWeight="400">Remote jobs</Text>
                        <Text _hover={{color:"blue"}} pl={5} mt={2} fontWeight="400">Work from home jobs</Text>
                        <Text _hover={{color:"blue"}} pl={5} mt={2} fontWeight="400">Walk-in jobs</Text>
                        <Text _hover={{color:"blue"}} pl={5} mt={2} fontWeight="400">Part-time jobs</Text>
                    </Box>
                    <Box borderLeft="1px" borderColor="lightgray" textAlign="left" p={2} m={2}>
                        <Text _hover={{color:"blue"}} pl={5} mt={2} fontWeight="bold" fontSize={18}>Jobs by location</Text>
                        <Text _hover={{color:"blue"}} pl={5} mt={2} fontWeight="400">Jobs in Delhi</Text>
                        <Text _hover={{color:"blue"}} pl={5} mt={2} fontWeight="400">Jobs in Mumbai</Text>
                        <Text _hover={{color:"blue"}} pl={5} mt={2} fontWeight="400">Jobs in Bangalore</Text>
                        <Text _hover={{color:"blue"}} pl={5} mt={2} fontWeight="400">Jobs in Hyderabad</Text>
                        <Text _hover={{color:"blue"}} pl={5} mt={2} fontWeight="400"> Jobs in Chennai</Text>
                        <Text _hover={{color:"blue"}} pl={5} mt={2} fontWeight="400">Jobs in Pune</Text>
                    </Box>
                    <Box borderLeft="1px" borderColor="lightgray" textAlign="left" p={2} m={2}>
                        <Text _hover={{color:"blue"}} pl={5} mt={2} fontWeight="bold" fontSize={18}>Explore more jobs</Text>
                        <Text _hover={{color:"blue"}} pl={5} mt={2} fontWeight="400">Jobs by category</Text>
                        <Text _hover={{color:"blue"}} pl={5} mt={2} fontWeight="400">Jobs by skill</Text>
                        <Text _hover={{color:"blue"}} pl={5} mt={2} fontWeight="400">Jobs by location</Text>
                        <Text _hover={{color:"blue"}} pl={5} mt={2} fontWeight="400">Jobs by designation</Text>
                        <Text _hover={{color:"blue"}} pl={5} mt={2} fontWeight="400">Create free job alert</Text>
                    </Box>
                    
                </Stack>
              </MenuList>
            </Menu>
    </>
}