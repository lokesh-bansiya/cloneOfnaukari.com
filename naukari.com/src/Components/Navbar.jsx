import {
  Flex,
  Spacer,
  Box,
  Heading,
  Button,
  ButtonGroup,
  Image,
  Stack,
  
} from "@chakra-ui/react";

import React from "react";
import { Link } from "react-router-dom";
import {LoginHover} from "./LoginHover";
import {Companies} from "./CompaniesHover";
import {Jobs} from "./JobsHover";
import {Services} from "./ServicesHover";
import { ForEmployers } from "./ForEmployers";
import {AuthContext} from "../Context/AuthContext/AuthContextProvider";
// import {Logout} from "../Pages/Logout";


function Navbar() {
  const { state, dispatch } = React.useContext(AuthContext);

  return (
    <>
      <Flex 
        style={{
          boxShadow: "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
        }}  
        minWidth="max-content" 
        position="fixed"
        w={{base: "full", sm: "full", md: "98%"}}
        bg="white"
        alignItems="center" 
        gap="2" 
        zIndex={1}
        flexDirection={{base: "column", sm: "column", md: "row", xl: "row"}}
        p={15}
        >
        <Flex 
         flexDirection={{base: "row", sm: "row", md: "row", xl: "row"}}
         w={{base: "full", sm: "full", md: "auto", xl: "auto"}}
         >
        <Box p={{base: 1, sm: 1, md: 2, xl: 2}}>
          <Heading size="md">
            <Image
              w="40"
              src="https://static.naukimg.com/s/4/100/i/naukri_Logo.png"
              alt="logo"
            />
          </Heading>
        </Box>
       
        <Stack 
          direction={{base: "column", sm: "row", md: "row", xl: "row"}} 
          ml={{base: "5%", sm: "20%", md: "auto", xl: "auto"}}
          gap={0}>
          <Box>
            <Link to="/job" fontWeight="500"><Jobs/></Link>
          </Box>
          <Box>
            <Link to="/company" fontWeight="500"><Companies/></Link>
          </Box>
          <Box>
            <Link to="/service" fontWeight="500"><Services/></Link>
          </Box>
        </Stack>
        </Flex>
        <Spacer />
        <ButtonGroup gap="2">
          <Button
            colorScheme="lightgray"
            border="1px"
            size={{base: "sm", sm: "sm", md: "md", xl: "lg"}}
            borderColor="blue"
            borderRadius="3xl"
            p={4}
            color="blue"
          >  
            <LoginHover/>
            {/* Login */}
          </Button>
          <Button
            colorScheme="orange"
            size={{base: "sm", sm: "sm", md: "md", xl: "lg"}}
            borderRadius="3xl"
            fontSize={{base: "sm", sm: "sm", md: "xl", xl: "xl"}}
            p={4}
            fontWeight="500"
          >
            <Link to="/register">Register</Link>
          </Button>

          <Box borderLeft="1px" borderColor="black">
            <ForEmployers/>
          </Box>
        </ButtonGroup>
      </Flex>
     
    </>
  );
}

export default Navbar;
