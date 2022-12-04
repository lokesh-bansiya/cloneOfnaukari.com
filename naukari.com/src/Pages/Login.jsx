import React from "react";
// import {  } from '@chakra-ui/icons'

import {
  Alert,
  AlertDescription,
  AlertIcon,
  Box,
  Image,
  Button,
  Center,
  Container,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Text,
  VStack,
  Stack
} from "@chakra-ui/react";
import { useState, useContext } from "react";
import {
  loginFailureAction,
  loginSuccessAction,
} from "../Context/AuthContext/action";
import { AuthContext } from "../Context/AuthContext/AuthContextProvider";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { LoginNavbar } from "../Components/LoginNavbar";

export const Login = () => {
  const { state, dispatch } = useContext(AuthContext);
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginDetails({ ...loginDetails, [name]: value });
  };

  const handleLogin = () => {
    axios({
      method: "POST",
      url: `https://reqres.in/api/login`,
      data: loginDetails,
    })
      .then((res) => {
        dispatch(loginSuccessAction(res.data.token));
      })
      .catch(() => {
        dispatch(loginFailureAction());
      });
  };

  if (state.isAuth) {
    return <Navigate to="/" />;
  }

  if (state.isError) {
    return (
      <Container
        width={{
          base: "full",
          sm: "full",
          md: "container.xl",
          lg: "container.lg",
        }}
        centerContent={true}
      >
        <Alert
          status="error"
          py={{ base: 4, sm: 4, md: 4, lg: 6 }}
          my={{ base: 24, sm: 24, md: 28, lg: 40 }}
          px={{ base: 1, sm: 1, md: 4, lg: 6 }}
        >
          <AlertIcon />
          <AlertDescription>
            Something went wrong, please refresh.
          </AlertDescription>
        </Alert>
      </Container>
    );
  }

  const { email, password } = loginDetails;

  return (
    <>
      <LoginNavbar />

      <VStack
        pl={{ base: 2, sm: 10, md: 20, xl: 20 }}
        pr={{ base: 2, sm: 10, md: 20, xl: 20 }}
        h={{ base: "auto", sm: 700, md: 700, xl: 700 }}
        display="flex"
        flexDirection={{ base: "column", sm: "row", md: "row", xl: "row" }}
        pt={{ base: "50%", sm: "25%", md: 20, xl: 20 }}
      >
        <Box 
          borderBottom="0.5px" 
          borderLeft="0.5px"
          borderTopLeftRadius="5px"
          borderBottomLeftRadius="5px"
          borderTop="0.5px"
          w={{ base: "auto", sm: 450, md: 650, xl: 650 }}
          pt={10}
          pb={10}
          pl={10}
          display="flex" 
          flexDirection="column"
          boxShadow="rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset"
          >
          <Box>
            <Text 
              lineHeight={2}
              fontWeight={500}
              fontSize={{ base: 15, sm: 17, md: 20, xl: 30 }}
              >New to Naukri?</Text>
            <Text 
              fontSize={{ base: 10, sm: 12, md: 17, xl: 30 }}
              lineHeight={2}
              >
                🗸 One click apply using naukri profile.</Text>
            <Text 
              fontSize={{ base: 10, sm: 12, md: 17, xl: 30 }}
              lineHeight={2}
              >
                🗸 Get relevant job recommendations.</Text>
            <Text 
              fontSize={{ base: 10, sm: 12, md: 17, xl: 30 }}
              lineHeight={2}
              >
                🗸 Showcase profile to top companies and consultants.</Text>
            <Text 
              lineHeight={2}
              fontSize={{ base: 10, sm: 12, md: 17, xl: 30 }}
              >
                🗸 Know application status on applied jobs.</Text>
            <Button 
              fontWeight={500} 
              colorScheme="blue"
              mt={2}
              borderRadius={5}
              p={3}
              pl={5}
              pr={5}
              size={{ base: "sm", sm: "sm", md: "md", xl: "lg" }}
              fontSize={{ base: 10, sm: 10, md: 15, xl: 30 }}
              >Register for Free</Button>
          </Box>
          <Box display="flex" justifyContent="flex-end">
            <Image
              src="https://static.naukimg.com/s/5/105/i/register.png"
              w="40%"
              alt=""
            />
          </Box>
        </Box>

        <Box 
          w={{ base: "90%", sm: 500, md: 700, xl: 700 }} 
          boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
          m="auto"
          >
          <VStack 
            width="full" 
            h="fit-content"
            display="flex" 
            p={{ base: 7, sm: 8, md: 10, xl: 10 }}
            pl={{ base: 10, sm: 10, md: 20, xl: 20 }}
            pr={{ base: 10, sm: 10, md: 20, xl: 20 }}
            >
              <Box w="full">
                <Text 
                  fontFamily="sans-serif" 
                  mb={2} 
                  fontWeight="bold"
                  fontSize={{ base: 25, sm: 20, md: 30, xl: 30 }}
                  >
                  Login</Text>
              </Box>
            
            <FormControl>
              <FormLabel fontSize={{ base: 10, sm: 10, md: 15, xl: 30 }}>Email Address</FormLabel>
              <Input
                name="email"
                type="email"
                value={email}
                placeholder="Enter your Email"
                onChange={handleChange}
                size={{ base: "sm", sm: "sm", md: "md", xl: "lg" }}
                fontSize={{ base: 10, sm: 10, md: 15, xl: 30 }}
              />
              <FormHelperText fontSize={{ base: 10, sm: 8, md: 13, xl: 30 }}>We will never share your email.</FormHelperText>
            </FormControl>

            <FormControl>
              <FormLabel fontSize={{ base: 10, sm: 10, md: 15, xl: 30 }}>Password</FormLabel>
              <Input
                name="password"
                type="password"
                value={password}
                placeholder="Password"
                onChange={handleChange}
                size={{ base: "sm", sm: "sm", md: "md", xl: "lg" }}
                fontSize={{ base: 10, sm: 10, md: 15, xl: 30 }}
              />
              <FormHelperText fontSize={{ base: 10, sm: 8, md: 15, xl: 15 }}>Enter your password.</FormHelperText>
            </FormControl>

            <FormControl>
              <Center>
                <Button
                  variant="outline"
                  width="full"
                  bg="#4ea4f5"
                  mt={5}
                  color="white"
                  fontSize={{ base: 10, sm: 10, md: 15, xl: 30 }}
                  onClick={handleLogin}
                  isLoading={state.isLoading}
                >
                  LOGIN
                </Button>
              </Center>
            </FormControl>
            <Box w="full">
              <Center>
                <Box
                  _hover={{ cursor: "pointer" }}
                  color="blue"
                  p={2}
                  mb={2}
                  w="full"
                  borderRadius="10px"
                  fontSize={{ base: 10, sm: 10, md: 15, xl: 30 }}
                  boxShadow="rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset"
                >
                  <Center>Use OTP to Login</Center>
                </Box>
              </Center>
              <Center>
                <Stack
                  _hover={{ cursor: "pointer" }}
                  w="full"
                  direction="row"
                  p={2}
                  borderRadius="10px"
                  fontSize={{ base: 10, sm: 10, md: 15, xl: 30 }}
                  boxShadow="rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset"
                >
                  <Center>
                  <Image
                    w={{ base: 3, sm: 3, md: 7, xl: 7 }}
                    mr={2}
                    src="data:image/png;base64,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"
                    alt=""
                  />
                  <Text>Sign in with Google</Text>
                  </Center>
                </Stack>
              </Center>
            </Box>
          </VStack>
        </Box>
      </VStack>
    </>
  );
};
