import {
  Flex,
  Box,
  Heading,
  Button,
  ButtonGroup,
  Image,
  Stack,
  InputGroup,
  Input,
  InputRightAddon,
  Spacer,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { Companies } from "./CompaniesHover";
import { Jobs } from "./JobsHover";
import { Services } from "./ServicesHover";
import { ForEmployers } from "./ForEmployers";
import { TopDrawer } from "./HomePageContent/TopDrawer";
// import {Logout} from "../Pages/Logout";
import {AuthContext} from "../Context/AuthContext/AuthContextProvider";
import { Home } from "../Pages/Home";



export const LoginNavbar = () => {

  const { state, dispatch } = React.useContext(AuthContext);

  return (
    <>
      <Flex
        bg="white"
        zIndex={1}
        style={{
          boxShadow:
            "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
        }}
        minWidth="max-content"
        alignItems="center"
        w="98%"
        gap="2"
        p={15}
        flexDirection={{ base: "column", sm: "column", md: "row", xl: "row" }}
        position="fixed"
      >
       
        <Stack
          display="flex"
          w="98%"
          m="auto"
          flexDirection={{ base: "column", sm: "row", md: "row", xl: "row" }}
          gap={0}
        >

          <Box 
            w="full"
            m="auto"
            display="flex"
            justifyContent="space-between"
            >

            <Box p="2">
              <Heading size="md">
                <Image
                  w="40"
                  src="https://static.naukimg.com/s/4/100/i/naukri_Logo.png"
                  alt="logo"
                />
              </Heading>
            </Box>

            <Box display="flex" flexDirection={{ base: "column", sm: "row", md: "row", xl: "row" }} gap={0}>
            <Box>
              <Link to="/job" fontWeight="500">
                <Jobs/>
              </Link>
            </Box>
            <Box>
              <Link to="/company" fontWeight="500">
                <Companies />
              </Link>
            </Box>
            <Box>
              <Link to="/service" fontWeight="500">
                <Services />
              </Link>
            </Box>
            </Box>

          </Box>
        </Stack>
        

        <Spacer />

        <Box>
          <InputGroup w={{base: "full", sm: "full", md: "auto", xl: "auto"}} size="sm"> 
            <Input w={{ base: "full", sm: "full", md: "40", xl: "40" }} placeholder="Search Jobs here" />
            <InputRightAddon fontSize={20} children={<TopDrawer />} />
          </InputGroup>
        </Box>

        <Box w={{base: "auto", sm: "auto", md: "70%", xl: "70%"}}>

          <ButtonGroup gap="2">
            <Button
              colorScheme="lightgray"
              border="1px"
              borderColor="blue"
              borderRadius="3xl"
              fontSize="xl"
              fontWeight="500"
              p={4}
              size={{base: "sm", sm: "sm", md: "md", xl: "lg"}}
              color="blue"
            >
              <Link to="/login" >Login</Link>
            </Button>
            <Button
              colorScheme="orange"
              size={{base: "sm", sm: "sm", md: "md", xl: "lg"}}
              borderRadius="3xl"
              fontSize="xl"
              p={4}
              fontWeight="500"
            >
              <Link to="/register">Register</Link>
            </Button>

            <Box borderLeft="1px" borderColor="black">
              <ForEmployers />
            </Box>
          </ButtonGroup>

        </Box>

      </Flex>
    </>
  );
};
