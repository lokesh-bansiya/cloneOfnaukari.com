import {
    Box,
    Center,
    Text,
    VStack,
    InputGroup,
    InputLeftElement,
    Input,
    Stack,
    Select,
    Button,
    Grid,
    GridItem,
    Image,
  } from "@chakra-ui/react";
  import React from "react";
  import Navbar from "../Components/Navbar";
  import { Search2Icon } from "@chakra-ui/icons";
  import { Carousels } from "../Components/HomePageContent/Carousels";
  import { TopCompanies } from "../Components/HomePageContent/TopCompanies";
  import { InterviewQues } from "../Components/HomePageContent/InterviewQues";
  import {SecondBox} from "../Components/HomePageContent/SecondBox";
  import {Recruiters} from "../Components/HomePageContent/Recruiters";
  import Footer from "../Components/Footer";
  import {SponsoredCompanies} from "../Components/HomePageContent/SponsoredCompanies";
  
  
  export const Job = () => {
    return (
      <>
        <Navbar />
  
        <Box h="auto" m="auto">
          <Box pt={{ base: 230, sm: 170, md: "15%", xl: "15%" }}>
            <Center>
              <VStack>
                <Text
                  fontSize={{ base: 25, sm: 30, md: 50, xl: 50 }}
                  fontFamily="serif"
                  fontWeight="bold"
                >
                  Find your dream job now
                </Text>
                <Text
                  color="gray"
                  fontSize={{ base: 13, sm: 17, md: 30, xl: 30 }}
                >
                  5 lakh+ jobs for you to explore
                </Text>
              </VStack>
            </Center>
          </Box>
  
          <Box
            mt={{ base: 23, sm: 30, md: 50, xl: 50 }}
            p={{ base: 5, sm: 7, md: 50, xl: 50 }}
          >
            <Stack
              style={{
                boxShadow:
                  "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
              }}
              display="flex"
              direction={{ base: "column", sm: "column", md: "row", xl: "row" }}
              gap={{ base: 1, sm: 1, md: 2, xl: 2 }}
              w="80%"
              justifyContent="space-around"
              m="auto"
              borderRadius={{ base: 10, sm: 10, md: "full", xl: "full" }}
              p={{ base: 2, sm: 3, md: "1%", xl: "1%" }}
            >
              <Box>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<Search2Icon zIndex={-1} color="blue" />}
                  />
                  <Input
                    variant="unstyled"
                    mt={2}
                    type="tel"
                    placeholder="Enter Skills/Designations/Companies"
                  />
                </InputGroup>
              </Box>
              <Box
                borderLeft={{ base: 0, sm: 0, md: "1px", xl: "1px" }}
                borderRight={{ base: 0, sm: 0, md: "1px", xl: "1px" }}
                ml={{ base: "auto", sm: "auto", md: 3, xl: 3 }}
                pl={{ base: 8, sm: 8, md: 3, xl: 3 }}
                pr={{ base: 5, sm: "55%", md: 1, xl: 1 }}
              >
                <Select placeholder="Select Experience" mt={2} variant="unstyled">
                <option value="option1">  ➤ 1 Year</option>
                  <option value="option2">  ➤ 2 Year</option>
                  <option value="option3">  ➤ 3 Year</option>
                  <option value="option3">  ➤ 4 Year</option>
                  <option value="option3">  ➤ 5 Year</option>
                  <option value="option3">  ➤ 6 Year</option>
                  <option value="option3">  ➤ 7 Year</option>
                  <option value="option3">  ➤ 8 Year</option>
                  <option value="option3">  ➤ 9 Year</option>
                  <option value="option3">  ➤ 10 Year</option>
                  <option value="option3">  ➤ 11 Year</option>
                  <option value="option3">  ➤ 12 Year</option>
                  <option value="option3">  ➤ 13 Year</option>
                  <option value="option3">  ➤ 14 Year</option>
                  <option value="option3">  ➤ 15 Year</option>
                  <option value="option3">  ➤ 16 Year</option>
                  <option value="option3">  ➤ 17 Year</option>
                  <option value="option3">  ➤ 18 Year</option>
                  <option value="option3">  ➤ 19 Year</option>
                  <option value="option3">  ➤ 20 Year</option>
                  <option value="option3">  ➤ 21 Year</option>
                  <option value="option3">  ➤ 22 Year</option>
                  <option value="option3">  ➤ 23 Year</option>
                  <option value="option3">  ➤ 24 Year</option>
                  <option value="option3">  ➤ 24 Year</option>
                  <option value="option3">  ➤ 25 Year</option>
                  <option value="option3">  ➤ 26 Year</option>
                  <option value="option3">  ➤ 27 Year</option>
                  <option value="option3">  ➤ 28 Year</option>
                  <option value="option3">  ➤ 29 Year</option>
                  <option value="option3">  ➤ 30 Year</option>
                  <option value="option3">  ➤ 31 Year</option>
                  <option value="option3">  ➤ 32 Year</option>
                  <option value="option3">  ➤ 33 Year</option>
                </Select>
              </Box>
              <Box>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    display="none"
                    children={<Search2Icon color="blue" />}
                  />
                  <Input
                    mt={2}
                    variant="unstyled"
                    type="tel"
                    placeholder="Enter Location"
                  />
                </InputGroup>
              </Box>
              <Box>
                <Button
                  colorScheme="blue"
                  size={{ base: "sm", sm: "sm", md: "md", xl: "lg" }}
                  fontSize={{ base: "sm", sm: "sm", md: "190%", xl: "lg" }}
                  fontWeight="700"
                  fontFamily="serif"
                  borderRadius="full"
                >
                  Search
                </Button>
              </Box>
            </Stack>
          </Box>
  
          <Box mt={5}>
            <Grid
              w="90%"
              m="auto"
              templateColumns={{
                base: "repeat(2,1fr)",
                sm: "repeat(3,1fr)",
                md: "repeat(6,1fr)",
                xl: "repeat(6,1fr)",
              }}
              gap={6}
            >
              <GridItem 
                w="100%"
                h="50"
                display="flex"
                p={1}
                borderTopLeftRadius="20"
                borderTopRightRadius={5}
                borderBottomLeftRadius={5}
                _hover={{cursor: "pointer",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}
                borderBottomRightRadius="20"
                boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
                bg="white"
              >
                <Image
                  src="https://static.naukimg.com/s/0/0/i/trending-naukri/remote.svg"
                  w={10}
                  alt="gridItemPic"
                />
                <Text fontSize={12} fontWeight="bold" p={2}>
                  Remote
                </Text>
              </GridItem>
              <GridItem
                w="100%"
                h="50"
                display="flex"
                p={1}
                borderTopLeftRadius="20"
                borderTopRightRadius={5}
                borderBottomLeftRadius={5}
                _hover={{cursor: "pointer",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}
                borderBottomRightRadius="20"
                boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
                bg="white"
              >
                <Image
                  src="https://static.naukimg.com/s/0/0/i/trending-naukri/mnc.svg"
                  w={10}
                  alt="gridItemPic"
                />
                <Text fontSize={12} fontWeight="bold" p={2}>
                  MNC
                </Text>
              </GridItem>
              <GridItem
                w="100%"
                h="50"
                display="flex"
                p={1}
                _hover={{cursor: "pointer",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}
                borderTopLeftRadius="20"
                borderTopRightRadius={5}
                borderBottomLeftRadius={5}
                borderBottomRightRadius="20"
                boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
                bg="white"
              >
                <Image
                  src="https://static.naukimg.com/s/0/0/i/trending-naukri/fortune-500.svg"
                  w={10}
                  alt="gridItemPic"
                />
                <Text fontSize={12} fontWeight="bold" p={2}>
                  Fortune 5...
                </Text>
              </GridItem>
              <GridItem
                w="100%"
                h="50"
                display="flex"
                p={1}
                _hover={{cursor: "pointer",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}
                borderTopLeftRadius="20"
                borderTopRightRadius={5}
                borderBottomLeftRadius={5}
                borderBottomRightRadius="20"
                boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
                bg="white"
              >
                <Image
                  src="https://static.naukimg.com/s/0/0/i/trending-naukri/supplychain.svg"
                  w={10}
                  alt="gridItemPic"
                />
                <Text fontSize={12} fontWeight="bold" p={2}>
                  Supply C...
                </Text>
              </GridItem>
              <GridItem
                w="100%"
                h="50"
                display="flex"
                p={1}
                _hover={{cursor: "pointer",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}
                borderTopLeftRadius="20"
                borderTopRightRadius={5}
                borderBottomLeftRadius={5}
                borderBottomRightRadius="20"
                boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
                bg="white"
              >
                <Image
                  src="https://static.naukimg.com/s/0/0/i/trending-naukri/project-management.svg"
                  w={10}
                  alt="gridItemPic"
                />
                <Text fontSize={12} fontWeight="bold" p={2}>
                  Project M...
                </Text>
              </GridItem>
              <GridItem
                w="100%"
                h="50"
                display="flex"
                p={1}
                _hover={{cursor: "pointer",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}
                borderTopLeftRadius="20"
                borderTopRightRadius={5}
                borderBottomLeftRadius={5}
                borderBottomRightRadius="20"
                boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
                bg="white"
              >
                <Image
                  src="https://static.naukimg.com/s/0/0/i/trending-naukri/startup.svg"
                  w={10}
                  alt="gridItemPic"
                />
                <Text fontSize={12} fontWeight="bold" p={2}>
                  Startup
                </Text>
              </GridItem>
            </Grid>
          </Box>
  
          <Box mt={5}>
            <Grid
              w="80%"
              m="auto"
              templateColumns={{
                base: "repeat(2,1fr)",
                sm: "repeat(3,1fr)",
                md: "repeat(5,1fr)",
                xl: "repeat(5,1fr)",
              }}
              gap={6}
            >
              <GridItem
                w="100%"
                h="50"
                display="flex"
                p={1}
                _hover={{cursor: "pointer",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}
                borderTopLeftRadius="20"
                borderTopRightRadius={5}
                borderBottomLeftRadius={5}
                borderBottomRightRadius="20"
                boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
                bg="white"
              >
                <Image
                  w={10}
                  src="https://static.naukimg.com/s/0/0/i/trending-naukri/marketing.svg"
                  alt="gridItemPic"
                />
                <Text fontSize={12} fontWeight="bold" p={2}>
                  Marketing
                </Text>
              </GridItem>
              <GridItem
                w="100%"
                h="50"
                display="flex"
                p={1}
                _hover={{cursor: "pointer",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}
                borderTopLeftRadius="20"
                borderTopRightRadius={5}
                borderBottomLeftRadius={5}
                borderBottomRightRadius="20"
                boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
                bg="white"
              >
                <Image
                  w={10}
                  src="https://static.naukimg.com/s/0/0/i/trending-naukri/hr.svg"
                  alt="gridItemPic"
                />
                <Text fontSize={12} fontWeight="bold" p={2}>
                  HR
                </Text>
              </GridItem>
              <GridItem
                w="100%"
                h="50"
                display="flex"
                p={1}
                _hover={{cursor: "pointer",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}
                borderTopLeftRadius="20"
                borderTopRightRadius={5}
                borderBottomLeftRadius={5}
                borderBottomRightRadius="20"
                boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
                bg="white"
              >
                <Image
                  w={10}
                  src="https://static.naukimg.com/s/0/0/i/trending-naukri/data-science.svg"
                  alt="gridItemPic"
                />
                <Text fontSize={12} fontWeight="bold" p={2}>
                  Data Scien...
                </Text>
              </GridItem>
              <GridItem
                w="100%"
                h="50"
                display="flex"
                p={1}
                _hover={{cursor: "pointer",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}
                borderTopLeftRadius="20"
                borderTopRightRadius={5}
                borderBottomLeftRadius={5}
                borderBottomRightRadius="20"
                boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
                bg="white"
              >
                <Image
                  w={10}
                  src="https://static.naukimg.com/s/0/0/i/trending-naukri/finance.svg"
                  alt="gridItemPic"
                />
                <Text fontSize={12} fontWeight="bold" p={2}>
                  Banking &..
                </Text>
              </GridItem>
              <GridItem
                w="100%"
                h="50"
                display="flex"
                p={1}
                _hover={{cursor: "pointer",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}
                borderTopLeftRadius="20"
                borderTopRightRadius={5}
                borderBottomLeftRadius={5}
                borderBottomRightRadius="20"
                boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
                bg="white"
              >
                <Image
                  w={10}
                  src="https://static.naukimg.com/s/0/0/i/trending-naukri/analytics.svg"
                  alt="gridItemPic"
                />
                <Text fontSize={12} fontWeight="bold" p={2}>
                  Analytics
                </Text>
              </GridItem>
            </Grid>
          </Box>
  
          <Box mt="5%">
            <Center>
              <Text
                fontSize={{ base: 20, sm: 28, md: 35, xl: 40 }}
                fontFamily="sans-serif"
                fontWeight="bold"
                m="4%"
              >
                Top companies hiring now
              </Text>
            </Center>
          </Box>
  
          <Box>
            <TopCompanies />
          </Box>
          <Box>
            <Center>
              <Text
                fontSize={{ base: 20, sm: 28, md: 35, xl: 40 }}
                fontFamily="sans-serif"
                fontWeight="bold"
                m="4%"
              >
                Featured companies actively hiring
              </Text>
            </Center>
          </Box>
          <Box>
            <Carousels />
          </Box>
  
  
  
  
          <Box>
            <SponsoredCompanies/>
          </Box>
  
  
  
          <Box mb="5%">
            <Center>
              <Button
                borderRadius={{
                  base: "10px",
                  sm: "16px",
                  md: "20px",
                  xl: "20px",
                }}
                fontSize={{ base: "sm", sm: "sm", md: "3xl", xl: "" }}
                size={{ base: "sm", sm: "sm", md: "md", xl: "lg" }}
                p={{ base: "0%", sm: "1%", md: "2%", xl: "2%" }}
                color="blue"
                border="1px"
              >
                View all Companies
              </Button>
            </Center>
          </Box>
  
  
  
  
          <Box m={5}>
            <Stack
              direction={{ base: "column", sm: "column", md: "row", lg: "row" }}
            >
              <Box pt="7%" pl={{ base: "auto", sm: "auto", md: 10, xl: 10 }}>
                <Stack
                  direction={{
                    base: "row",
                    sm: "row",
                    md: "column",
                    lg: "column",
                  }}
                >
                  <Box>
                    <Button mb={{ base: 5, sm: 5, md: 3, xl: 3 }}>
                      by AmbitionBox
                    </Button>
                    <Text
                      w={{ base: "auto", sm: "auto", md: 200, xl: 200 }}
                      fontSize={{ base: 15, sm: 26, md: 25, xl: 25 }}
                      fontFamily="sans-serif"
                      fontWeight="bold"
                    >
                      Prepare for your next interview
                    </Text>
                  </Box>
                  <Box>
                    <Image
                      src="https://static.naukimg.com/s/0/0/i/ab-interview.png"
                      w={{ base: "full", sm: "full", md: 250, xl: 250 }}
                      p={{ base: 10, sm: 10, md: 5, xl: 5 }}
                      alt="Image"
                    />
                  </Box>
                </Stack>
              </Box>
  
              <Box w={{ base: "full", sm: "full", md: 500, xl: 500 }}>
                <InterviewQues />
              </Box>
  
              <Box w={{ base: "full", sm: "full", md: 400, lg: 400 }}>
                <Center>
                  <Box
                    display="flex"
                    flexDirection="column"
                    p={5}
                    mr={4}
                    borderRadius="10px"
                    boxShadow="rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px"
                  >
                    <Text
                      fontWeight={400}
                      mb={5}
                      fontSize={{ base: 20, sm: 28, md: 25, xl: 20 }}
                    >
                      Interview questions by role
                    </Text>
  
                    <Grid templateRows="repeat(6, 1fr)" gap={5}>
                      <GridItem _hover={{cursor: "pointer",fontWeight: "500"}}>
                        <Box borderBottom="1px" display="flex" p={2}>
                          <Text>Software Engineer</Text>
                          <Text ml={3} color="gray">
                            (7.2K+ questions)
                          </Text>
                        </Box>
                      </GridItem>
  
                      <GridItem _hover={{cursor: "pointer",fontWeight: "500"}}>
                        <Box borderBottom="1px" display="flex" p={2}>
                          <Text>Business Analyst</Text>
                          <Text ml={3} color="gray">
                            {" "}
                            (2.8K+ questions)
                          </Text>
                        </Box>
                      </GridItem>
  
                      <GridItem _hover={{cursor: "pointer",fontWeight: "500"}}>
                        <Box borderBottom="1px" display="flex" p={2}>
                          <Text>Consultant</Text>
                          <Text ml={3} color="gray">
                            {" "}
                            (2.4K+ questions)
                          </Text>
                        </Box>
                      </GridItem>
  
                      <GridItem _hover={{cursor: "pointer",fontWeight: "500"}}>
                        <Box borderBottom="1px" display="flex" p={2}>
                          <Text>Financial Analyst </Text>
                          <Text ml={3} color="gray">
                            (894 questions)
                          </Text>
                        </Box>
                      </GridItem>
  
                      <GridItem _hover={{cursor: "pointer",fontWeight: "500"}}>
                        <Box borderBottom="1px" display="flex" p={2}>
                          <Text>Sales & Marketing </Text>
                          <Text ml={3} color="gray">
                            (991 questions)
                          </Text>
                        </Box>
                      </GridItem>
  
                      <GridItem _hover={{cursor: "pointer",fontWeight: "500"}}>
                        <Box borderBottom="1px" display="flex" p={2}>
                          <Text>Quality Engineer</Text>
                          <Text ml={3} color="gray">
                            {" "}
                            (1.3K+ questions)
                          </Text>
                        </Box>
                      </GridItem>
                    </Grid>
                    <Box>
                      <Center>
                        <Text
                          fontWeight={400}
                          mt={4}
                          color="blue"
                          _hover={{cursor: "pointer"}}
                          fontSize={{ base: 20, sm: 28, md: 20, xl: 20 }}
                        >
                          View all roles ➤
                        </Text>
                      </Center>
                    </Box>
                  </Box>
                </Center>
              </Box>
            </Stack>
          </Box>
  
          <Box>
  
            <Stack
              direction={{ base: "column", sm: "column", md: "row", xl: "row" }}
              w="85%"
              boxShadow="rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px"
              m="auto"
              p={5}
              mb={5}
              mt="5%"
              borderTopRightRadius="10px"
              borderTopLeftRadius="25px"
              borderBottomLeftRadius="10px"
              borderBottomRightRadius="25px"
            >
              <Box w={{ base: 200, sm: 200, md: 300, xl: 300 }}>
                <Image
                  w="100%"
                  src="https://static.naukimg.com/s/0/0/i/ff-services.png"
                  alt=""
                />
              </Box>
  
              <Box>
                <Text
                  fontWeight={450}
                  fontSize={{ base: 10, sm: 20, md: 25, xl: 25 }}
                  mb={2}
                >
                  Accelerate your job search with premium services
                </Text>
  
                <Text
                  fontWeight={350}
                  fontSize={{ base: 10, sm: 15, md: 17, xl: 17 }}
                  mb={5}
                >
                  Services to help you get hired, faster: from preparing your CV,
                  getting recruiter attention, finding the right jobs, and more!
                </Text>
  
                <Box
                  display="grid"
                  gap={1}
                  w="fit-content"
                  gridTemplateColumns={{
                    base: "repeat(1,1fr)",
                    sm: "repeat(1,1fr)",
                    md: "repeat(3,1fr)",
                    xl: "repeat(3,1fr)",
                  }}
                >
                  <Box
                    display="flex"
                    _hover={{cursor: "pointer"}}
                    w="fit-content"
                    borderColor="lightblue"
                    border="1px"
                    borderRadius="15px"
                    p={0.5}
                    pl={2}
                    pr={2}
                  >
                    <Image
                      w="10%"
                      h={5}
                      src="https://static.naukimg.com/s/0/0/i/ff-services-icon2.png"
                    />
                    <Text fontSize={{ base: 11, sm: 13, md: 17, xl: 17 }} ml={2}>
                      Resume writing
                    </Text>
                  </Box>
                  <Box
                    display="flex"
                    _hover={{cursor: "pointer"}}
                    w="fit-content"
                    borderColor="lightblue"
                    border="1px"
                    borderRadius="15px"
                    p={0.5}
                    pl={2}
                    pr={2}
                  >
                    <Image
                      w="10%"
                      h={5}
                      src="https://static.naukimg.com/s/0/0/i/ff-services-icon3.png"
                    />
                    <Text fontSize={{ base: 11, sm: 13, md: 17, xl: 17 }} ml={2}>
                      Priority applicant
                    </Text>
                  </Box>
                  <Box
                    display="flex"
                    _hover={{cursor: "pointer"}}
                    w="fit-content"
                    borderColor="lightblue"
                    border="1px"
                    borderRadius="15px"
                    p={0.5}
                    pl={2}
                    pr={2}
                  >
                    <Image
                      w="10%"
                      h={5}
                      src="https://static.naukimg.com/s/0/0/i/ff-services-icon1.png"
                    />
                    <Text fontSize={{ base: 11, sm: 13, md: 17, xl: 17 }} ml={2}>
                      Resume display
                    </Text>
                  </Box>
                </Box>
              </Box>
  
              <Box>
                <Box 
                  display="grid" 
                  gridTemplateColumns="repeat(1,1fr)"
                  gap={{ base: "10%", sm: "15%", md: "45%", xl: "45%" }}
                  >
                  <Box>
                    <Button borderRadius="8px" color="blue" border="1px">By Naukari Fastward</Button>
                  </Box>
                  <Box>
                    <Button borderRadius="full" colorScheme="blue">
                      Learn more
                    </Button>
                    <Text m={2}>Includes paid services</Text>
                  </Box>
                </Box>
              </Box>
            </Stack>
  
          </Box>
  
  
        <Box>
          <Stack 
            direction={{
              base: "column",
              sm: "column",
              md: "row",
              lg: "row",
            }}
            >
            <Box>
               <Box pt="7%" pl={{ base: "auto", sm: "auto", md: 10, xl: 10 }}>
                  <Stack
                  pb={0}
                    direction={{
                      base: "row",
                      sm: "row",
                      md: "column",
                      lg: "column",
                    }}
                  >
                    <Box>
                      <Button color="blue" mb={{ base: 5, sm: 5, md: 3, xl: 3 }}>
                      by Naukri Learning
                      </Button>
                      <Text
                        w={{ base: "auto", sm: "auto", md: 250, xl: 300 }}
                        fontSize={{ base: 15, sm: 26, md: 20, xl: 20 }}
                        fontFamily="sans-serif"
                        
                        fontWeight="bold"
                      >
                        Grow your career through learning
                      </Text>
                    </Box>
                    <Box>
                      <Image
                        src="https://static.naukimg.com/s/0/0/i/learn-icon.svg"
                        w={{ base: "full", sm: "full", md: 170, xl: 170 }}
                        p={{ base: 10, sm: 10, md: 5, xl: 5 }}
                        alt="Image"
                      />
                    </Box>
                  </Stack>
                </Box>
            </Box>
  
  
            <Box>
              <SecondBox/>
            </Box>
          </Stack>
        </Box>
  
  
        <Box>
          <Box mb={20}>
            <Recruiters/>
          </Box>
        </Box>
  
  
        <Box pl={1} boxShadow="rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset" mb={20}>
          <Box>
            <Footer/>
          </Box>
        </Box>
  
  
  
        </Box>
      </>
    );
  };
  