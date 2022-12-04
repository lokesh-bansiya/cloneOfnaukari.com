import React from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import {
    MenuItem,
    useDisclosure,
    Menu,
    MenuButton,
    MenuList,
    
  } from "@chakra-ui/react";

export const ForEmployers = () => {

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
                For Employers {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
              </MenuButton>
              <MenuList onMouseEnter={onOpen} onMouseLeave={onClose}>
                <MenuItem>Buy online</MenuItem>
                <MenuItem>Hiring solutions</MenuItem>
                <MenuItem>Employer Login</MenuItem>
              </MenuList>
            </Menu>
        </>
}