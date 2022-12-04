import React from "react"
import {
  Box,
  Center,
  Text
  
} from "@chakra-ui/react";
import { LoginNavbar } from "../Components/LoginNavbar";
import {TopCarousel} from "../Components/CompanyPageContent/TopCarousel";
import {CompaniesGrid} from "../Components/CompanyPageContent/CompaniesGrid";
import Footer from "../Components/Footer";
import {Sidebar} from '../Components/CompanyPageContent/Sidebar';


export const Company = () => {
  return (
    <>
    <LoginNavbar />

    <Box border="1px" pt="10%">
      
      <Box>
        <Text 
          fontSize={{ base: 25, sm: 30, md: 32, xl: 30 }}
          fontFamily="serif"
          fontWeight="bold"
        >
          <Center>Top companies hiring now</Center>
        </Text>
      </Box>
      <Box 
        w="80%" 
        m="auto" 
        mt="5%"
        >
         <TopCarousel/>
      </Box>

      <Box display="flex" flexDirection="row">
        <Box 
          boxShadow="rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px" 
          w="30%" 
          h={500}>
          <Sidebar/>
        </Box>
        <Box w="70%" h="auto">
          <CompaniesGrid/>
        </Box>
      </Box>
    </Box>



      <Box pl={1} boxShadow="rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset" mb={20}>
        <Box>
          <Footer/>
        </Box>
      </Box>
    </>
    
  );
}