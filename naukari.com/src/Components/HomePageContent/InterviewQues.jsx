import { 
    Box,
    Grid,
    GridItem,
    Center,
    Text,
    Image,

 } from "@chakra-ui/react"

export const InterviewQues = () => {
    return (
        <>
        <Box 
            p={5} 
            borderTopRightRadius="10px"
            borderTopLeftRadius="25px"
            borderBottomLeftRadius="10px"
            borderBottomRightRadius="25px"
            boxShadow="rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px">
        <Center>
                <Text 
                   fontSize={{ base: 10, sm: 15, md: 25, xl: 25 }}
                   fontFamily="sans-serif"
                   p={{ base: 1, sm: 5, md: 5, xl: 5 }}
                >
                    Interview questions by company
                </Text>
              </Center>
              <Grid
                templateColumns="repeat(2, 1fr)"
                templateRows="repeat(3,auto)"
                gap={6}
              >
                <GridItem 
                  w="100%" 
                  _hover={{cursor: "pointer",boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"}}
                  h={20}
                  p="5%" 
                  pt={4}
                  borderTopRightRadius="10px"
                  borderTopLeftRadius="25px"
                  borderBottomLeftRadius="10px"
                  borderBottomRightRadius="25px"
                  boxShadow="rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset"
                  >
                  <Box display="flex" flexDirection="row">
                    <Box w="30%">
                      <Image
                        w={{base: "80%", sm: "70%", md: "80%", lg: "80%"}}
                        boxShadow="rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px"
                        src="https://static.naukimg.com/s/0/0/i/ambitionbox-comp/flipkart.png"
                      />
                    </Box>
                    <Box>
                      <Text fontSize="17px" fontWeight={500}>Flipkart ˃</Text>
                      <Text fontSize="75%">488 Interviews</Text>
                    </Box>
                  </Box>
                </GridItem>

                <GridItem 
                  w="100%" 
                  _hover={{cursor: "pointer",boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"}}
                  p="5%"
                  pt={4}
                  h={20}
                  borderTopRightRadius="10px"
                  borderTopLeftRadius="25px"
                  borderBottomLeftRadius="10px"
                  borderBottomRightRadius="25px"
                  boxShadow="rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset"
                  >
                  <Box display="flex" flexDirection="row">
                    <Box w="30%">
                      <Image
                        w={{base: "80%", sm: "70%", md: "80%", lg: "80%"}}
                        boxShadow="rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px"
                        src="https://static.naukimg.com/s/0/0/i/ambitionbox-comp/cognizant.png"
                      />
                    </Box>
                    <Box>
                      <Text fontSize="17px" fontWeight={500}>Cognizant ˃</Text>
                      <Text fontSize="75%">1.6K+ Interviews</Text>
                    </Box>
                  </Box>
                </GridItem>

                <GridItem 
                  w="100%" 
                  _hover={{cursor: "pointer",boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"}}
                  p="5%"
                  pt={4}
                  h={20}
                  borderTopRightRadius="10px"
                  borderTopLeftRadius="25px"
                  borderBottomLeftRadius="10px"
                  borderBottomRightRadius="25px"
                  boxShadow="rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset"
                  >
                  <Box display="flex" flexDirection="row">
                    <Box w="30%">
                      <Image
                       w={{base: "80%", sm: "70%", md: "80%", lg: "80%"}}
                        boxShadow="rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px"
                        src="https://static.naukimg.com/s/0/0/i/ambitionbox-comp/accenture.png"
                      />
                    </Box>
                    <Box>
                      <Text fontSize="17px" fontWeight={500}>Accenture ˃</Text>
                      <Text fontSize="75%">2K+ Interviews</Text>
                    </Box>
                  </Box>
                </GridItem>

                <GridItem 
                  w="100%" 
                  _hover={{cursor: "pointer",boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"}}
                  p="5%"
                  pt={4}
                  h={20}
                  borderTopRightRadius="10px"
                  borderTopLeftRadius="25px"
                  borderBottomLeftRadius="10px"
                  borderBottomRightRadius="25px"
                  boxShadow="rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset"
                  >
                  <Box display="flex" flexDirection="row">
                    <Box w="30%">
                      <Image
                        w={{base: "80%", sm: "70%", md: "80%", lg: "80%"}}
                        boxShadow="rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px"
                        src="https://static.naukimg.com/s/0/0/i/ambitionbox-comp/amazon.png"
                      />
                    </Box>
                    <Box>
                      <Text fontSize="17px" fontWeight={500}>Amazon ˃</Text>
                      <Text fontSize="75%">1.7K+ Interviews</Text>
                    </Box>
                  </Box>
                </GridItem>

                <GridItem 
                  w="100%"
                  _hover={{cursor: "pointer",boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"}} 
                  p="5%"
                  pt={4}
                  h={20}
                  borderTopRightRadius="10px"
                  borderTopLeftRadius="25px"
                  borderBottomLeftRadius="10px"
                  borderBottomRightRadius="25px"
                  boxShadow="rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset"
                  >
                  <Box display="flex" flexDirection="row">
                    <Box w="30%">
                      <Image
                        w={{base: "80%", sm: "70%", md: "80%", lg: "80%"}}
                        boxShadow="rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px"
                        src="https://static.naukimg.com/s/0/0/i/ambitionbox-comp/tcs.png"
                      />
                    </Box>
                    <Box>
                      <Text fontSize="17px" fontWeight={500}>TCS ˃</Text>
                      <Text fontSize="75%">2.5K+ Interviews</Text>
                    </Box>
                  </Box>
                </GridItem>

                <GridItem 
                  w="100%" 
                  _hover={{cursor: "pointer",boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"}}
                  p="5%"
                  pt={4}
                  h={20}
                  borderTopRightRadius="10px"
                  borderTopLeftRadius="25px"
                  borderBottomLeftRadius="10px"
                  borderBottomRightRadius="25px"
                  boxShadow="rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset" 
                  >
                  <Box display="flex" flexDirection="row">
                    <Box w="30%">
                      <Image
                        w={{base: "80%", sm: "70%", md: "80%", lg: "80%"}}
                        boxShadow="rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px"
                        src="https://static.naukimg.com/s/0/0/i/ambitionbox-comp/byjus.png"
                      />
                    </Box>
                    <Box>
                      <Text fontSize="17px" fontWeight={500}>Byjus ˃</Text>
                      <Text fontSize="75%">816 Interviews</Text>
                    </Box>
                  </Box>
                </GridItem>

              </Grid>

              <Center>
                <Text 
                   color="blue"
                   _hover={{cursor: "pointer"}}
                   fontSize={{ base: 10, sm: 15, md: 20, xl: 20 }}
                   fontFamily="sans-serif"
                   p={{ base: 1, sm: 5, md: 5, xl: 5 }}
                   mt={4}
                   >View all Companies ➤</Text>
              </Center>
        </Box>
        </>
    )
}