import { 
    Box,
    Text,
    Image,
    Input,
    Button,
 } from "@chakra-ui/react"

export const Recruiters = () => {
    return (
        <Box 
           display="flex"
           bg="#f9f7fc"
           boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px" 
           flexDirection={{ base: "column", sm: "column", md: "row", xl: "row" }} 
           borderRadius="10px"
           w="85%"
           m="auto"
           borderColor="red"
           >
           <Box 
              borderColor="blue" 
              display="flex" 
              p={5}
              flexDirection="column"
              >
              <Box>
                <Text 
                    fontSize={{ base: 17, sm: 26, md: 30, xl: 25 }}
                    fontWeight="bold"
                    lineHeight="110%"
                    w="80%"
                    >
                    Stand out among recruiters with a video profile
                </Text>
              </Box>
              <Box 
                display="flex" 
                flexDirection="row"
                gap={6}
                >
                <Box 
                    display="flex" 
                    flexDirection="column"
                    >
                    <Text 
                       w="110%"
                       mt={3}
                       fontSize={{ base: 12, sm: 18, md: 15, xl: 15 }}
                    >
                    Available for both Android and iOS apps</Text>
                    <Box
                       display="flex" 
                       mt={3}
                       borderColor="black" 
                       flexDirection="row"
                       borderRadius="10px"
                       boxShadow="rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset"
                       gap={1}
                       w={{ base: 200, sm: 250, md: 270, xl: 280 }} 
                       >
                        <Box pt={1}><Input pl={3} variant='unstyled' placeholder='Enter mobile number...' /></Box>
                        <Box><Button m={0.2} borderRadius="10px" colorScheme="blue" size="sm">Get link</Button></Box>
                    </Box>
                    <Box 
                        display="flex" 
                        gap={2}
                        mt={3}
                        flexDirection="row"
                        >
                        <Image 
                            boxShadow="rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset" 
                            borderRadius="5px"
                            _hover={{cursor: "pointer"}}
                            w={{ base: "25%", sm: "40%", md: "50%", xl: "50%" }} 
                            src="https://static.naukimg.com/s/0/0/i/download-app-link/Gplay.png" alt="googleplay"/>
                        <Image 
                            boxShadow="rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset" 
                            borderRadius="5px"
                            _hover={{cursor: "pointer"}}
                            w={{ base: "25%", sm: "40%", md: "50%", xl: "50%" }} 
                            src="https://static.naukimg.com/s/0/0/i/download-app-link/Appstore.png" alt="appstore"/>
                    </Box>
                </Box>

                <Box 
                    p={2}
                    borderRadius="10px"
                    w={{ base: "200%", sm: "20%", md: "30%", xl: "30%" }}
                    h={{ base: "200%", sm: "20%", md: "auto", xl: "30%" }}
                    boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"
                    borderColor="blue"
                    >
                    <Image w="100%" src="https://static.naukimg.com/s/0/0/i/download-app-link/qr-code.svg" alt="urlImage"/>
                </Box>
              </Box>
           </Box>

           <Box 
              w="60%"
              p={2}
              >
              <Image w="full" src="https://static.naukimg.com/s/0/0/i/download-app-link/MaskGroup_v4.png" alt=""/>
           </Box>
        </Box>
    )
}