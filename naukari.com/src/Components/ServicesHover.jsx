import React from "react";
import {
    useDisclosure,
    Menu,
    MenuButton,
    MenuList,
    Stack,
    Text,
    Box
  } from "@chakra-ui/react";
  import { Link } from "react-router-dom";

export const Services = () => {

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
               Services
              </MenuButton>
              <MenuList onMouseEnter={onOpen} onMouseLeave={onClose} mr={20}>
              <Stack direction="row" gap={8}>
                    <Box  textAlign="left" p={2} m={1}>
                        <Text _hover={{color:"blue"}} mt={2} fontWeight="bold" fontSize={18}>Resume writing</Text>
                        <Text _hover={{color:"blue"}} mt={2} fontWeight="400">Text resume</Text>
                        <Text _hover={{color:"blue"}} mt={2} fontWeight="400">Visual resume</Text>
                        <Text _hover={{color:"blue"}} mt={2} fontWeight="400">Resume critique</Text>
                        <Text _hover={{color:"blue"}} mt={2} fontWeight="bold" fontSize={18}>Find Jobs</Text>
                        <Text _hover={{color:"blue"}} mt={2} fontWeight="400">Jobs4u</Text>
                        <Text _hover={{color:"blue"}} mt={2} fontWeight="400">Priority applicant</Text>
                        <Text _hover={{color:"blue"}} mt={2} fontWeight="400">Contact us</Text>
                    </Box>
                    <Box borderLeft="1px" borderColor="lightgray" textAlign="left" p={2} m={1}>
                        <Text _hover={{color:"blue"}} pl={5} mt={2} fontWeight="bold" fontSize={18}>Get recruiter's attention</Text>
                        <Text _hover={{color:"blue"}} pl={5} mt={2} fontWeight="400">Resume display</Text>
                        <Text _hover={{color:"blue"}} pl={5} mt={2} fontWeight="400">Recruiter connection</Text>
                        <Text _hover={{color:"blue"}} pl={5} mt={2} fontWeight="400">Job search booster</Text>
                        <Text _hover={{color:"blue"}} pl={5} mt={2} fontWeight="bold" fontSize={18}>Monthly subscriptions</Text>
                        <Text _hover={{color:"blue"}} pl={5} mt={2} fontWeight="400">Basic & premium plans</Text>
                    </Box>
                    <Box borderLeft="1px" borderColor="lightgray" textAlign="left" p={2} m={1}>
                        <Text _hover={{color:"blue"}} pl={5} mt={2} fontWeight="bold" fontSize={18}>Learn & upskill</Text>
                        <Text _hover={{color:"blue"}} pl={5} mt={2} fontWeight="400">Data Science courses</Text>
                        <Text _hover={{color:"blue"}} pl={5} mt={2} fontWeight="400">Technology courses</Text>
                        <Text _hover={{color:"blue"}} pl={5} mt={2} fontWeight="400">Management courses</Text>
                        <Text _hover={{color:"blue"}} pl={5} mt={2} fontWeight="400">Finance courses</Text>
                        <Text _hover={{color:"blue"}} pl={5} mt={2} fontWeight="400">Design courses</Text>
                        <Text _hover={{color:"blue"}} pl={5} mt={2} fontWeight="400">Healthcare courses</Text>
                        <Text _hover={{color:"blue"}} pl={5} mt={2} fontWeight="400">Degree programs</Text>
                    </Box>
                    <Box borderLeft="1px" borderColor="lightgray" textAlign="left" p={2} m={1}>
                        <Text _hover={{color:"blue"}} pl={5} mt={2} fontWeight="bold" fontSize={18}>Free resume resources</Text>
                        <Text _hover={{color:"blue"}} pl={5} mt={2} fontWeight="400">Resume maker for freshers</Text>
                        <Text _hover={{color:"blue"}} pl={5} mt={2} fontWeight="400">Resume quality score</Text>
                        <Text _hover={{color:"blue"}} pl={5} mt={2} fontWeight="400">Resume samples</Text>
                        <Text _hover={{color:"blue"}} pl={5} mt={2} fontWeight="400">Job letter samples</Text>
                    </Box>
                    
                </Stack>
              </MenuList>
            </Menu>
    </>
}
