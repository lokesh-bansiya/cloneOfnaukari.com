import { 
    Box,
    Center,
    Grid,
    GridItem,
    Text,
    Image,
    Button,
} from "@chakra-ui/react";
import { Carousel } from 'react-responsive-carousel';



export const SponsoredCompanies = () => {
    return (
<>
        <Box>
            <Center>
                <Text 
                   fontSize={{ base: 20, sm: 27, md: 35, xl: 35 }}
                   fontFamily="sans-serif"
                   fontWeight="bold"
                   >Sponsored companies</Text>
            </Center>
        </Box>


        <Carousel>
        <Box> 
            
            <Box>
                <Grid 
                    templateColumns={{ base: 'repeat(2, 1fr)', sm: 'repeat(3, 1fr)', md: 'repeat(5, 1fr)', xl: 'repeat(5, 1fr)'}} 
                    mt={10}
                    mb={10}
                    gap={6}>

                    <GridItem 
                        boxShadow="rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset" w="100%" src="https://img.naukimg.com/logo_images/groups/v1/1635928.gif"
                        display="flex"
                        _hover={{cursor: "pointer",boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"}}
                        p={6}
                        flexDirection="column"
                        borderTopRightRadius="10px"
                        borderTopLeftRadius="25px"
                        borderBottomLeftRadius="10px"
                        borderBottomRightRadius="25px"
                        >
                        <Center>
                        <Box w={20}>
                            <Image boxShadow="rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset" w="40%" src="https://img.naukimg.com/logo_images/groups/v1/1635928.gif" alt="Enel X"/>
                        </Box>
                        </Center>
                        <Center>
                            <Text mt={3} mb={3} fontSize={17} fontWeight="bold">Enel X ˃</Text>
                        </Center>
                        <Box>
                            <Button size="10" p={1} m={1} fontSize={12}>Power</Button>
                            <Button size="10" p={1} m={1} fontSize={12}>B2B</Button>
                            <Button size="10" p={1} m={1} fontSize={12}>Corporate</Button>
                            <Button size="10" p={1} m={1} fontSize={12}>Private</Button>
                        </Box>
                    </GridItem>


                    <GridItem 
                        boxShadow="rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset" w="100%" src="https://img.naukimg.com/logo_images/groups/v1/1635928.gif"
                        display="flex"
                        _hover={{cursor: "pointer",boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"}}
                        p={6}
                        flexDirection="column"
                        borderTopRightRadius="10px"
                        borderTopLeftRadius="25px"
                        borderBottomLeftRadius="10px"
                        borderBottomRightRadius="25px"
                        >
                        <Center>
                        <Box w={20}>
                            <Image boxShadow="rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset" w="40%" src="https://img.naukimg.com/logo_images/groups/v1/1218142.gif" alt="PI Industries"/>
                        </Box>
                        </Center>
                        <Center>
                            <Text mt={3} mb={3} fontSize={17} fontWeight="bold">PI Industries ˃</Text>
                        </Center>
                        <Center>
                        <Box display="flex" mb={3}><Box>4.1</Box><Text ml={2} pl={2} borderColor="gray" borderLeft="1px">768 reviews</Text></Box>
                        </Center>
                        <Box>
                            <Button size="10" p={1} m={1} fontSize={12}>B2B</Button>
                            <Button size="10" p={1} m={1} fontSize={12}>Carporate</Button>
                            <Button size="10" p={1} m={1} fontSize={12}>Chemicals</Button>
                        </Box>
                    </GridItem>

                    <GridItem 
                       boxShadow="rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset" w="100%" src="https://img.naukimg.com/logo_images/groups/v1/1635928.gif"
                       display="flex"
                       _hover={{cursor: "pointer",boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"}}
                       p={6}
                       flexDirection="column"
                       borderTopRightRadius="10px"
                        borderTopLeftRadius="25px"
                        borderBottomLeftRadius="10px"
                        borderBottomRightRadius="25px"
                        >
                        <Center>
                        <Box w={20}>
                            <Image boxShadow="rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset" w="40%" src="https://img.naukimg.com/logo_images/groups/v1/6011382.gif" alt="G Square Realtors"/>
                        </Box>
                        </Center>
                        <Center>
                           <Text mt={3} mb={3} fontSize={17} fontWeight="bold">G Square Realtors ˃</Text>
                        </Center>
                        <Center>
                            <Text mb={3}>2 reviews</Text>
                        </Center>
                        <Box>
                            <Button size="10" p={1} m={1} fontSize={12}>Real Estate</Button>
                        </Box>
                    </GridItem>

                    <GridItem 
                       boxShadow="rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset" w="100%" src="https://img.naukimg.com/logo_images/groups/v1/1635928.gif"
                       display="flex"
                       p={6}
                       flexDirection="column"
                       _hover={{cursor: "pointer",boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"}}
                       borderTopRightRadius="10px"
                        borderTopLeftRadius="25px"
                        borderBottomLeftRadius="10px"
                        borderBottomRightRadius="25px"
                        >
                        <Center>
                        <Box  w={20}>
                           <Image boxShadow="rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset" w="40%" src="https://img.naukimg.com/logo_images/groups/v1/1268772.gif" alt="Einfochips"/>
                        </Box>
                        </Center>
                        <Center>
                            <Text mt={3} mb={3} fontSize={17} fontWeight="bold">Einfochips ˃</Text>
                        </Center>
                        <Center>
                           <Box display="flex" mb={3}><Box>3.7</Box><Text ml={2} pl={2} borderColor="gray" borderLeft="1px">225 reviews</Text></Box>
                        </Center>
                        <Box>
                            <Button size="10" p={1} m={1} fontSize={12}>IT Services & Consulting</Button>
                            <Button size="10" p={1} m={1} fontSize={12}>Electronic Components /se..</Button>
                        </Box>
                    </GridItem>

                    <GridItem 
                       boxShadow="rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset" w="100%" src="https://img.naukimg.com/logo_images/groups/v1/1635928.gif"
                       display="flex"
                       p={6}
                       flexDirection="column"
                       _hover={{cursor: "pointer",boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"}}
                       borderTopRightRadius="10px"
                        borderTopLeftRadius="25px"
                        borderBottomLeftRadius="10px"
                        borderBottomRightRadius="25px"
                        >
                        <Center>
                        <Box w={20}>
                            <Image boxShadow="rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset" w="40%" src="https://img.naukimg.com/logo_images/groups/v1/4656015.gif" alt="Opentext"/>
                        </Box>
                        </Center>
                        <Center>
                            <Text mt={3} mb={3} fontSize={17} fontWeight="bold">Opentext ˃</Text>
                        </Center>
                        <Center>
                           <Box mb={3} display="flex"><Box>4.0</Box><Text ml={2} pl={2} borderColor="gray" borderLeft="1px">301 reviews</Text></Box>
                        </Center>
                        <Box>
                            <Button size="10" p={1} m={1} fontSize={12}>Software Product</Button>
                            <Button size="10" p={1} m={1} fontSize={12}>Analytic/KPO/Research</Button>
                        </Box>
                    </GridItem>

                    <GridItem 
                        boxShadow="rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset" w="100%" src="https://img.naukimg.com/logo_images/groups/v1/1635928.gif"
                        display="flex"
                        _hover={{cursor: "pointer",boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"}}
                        p={6}
                        flexDirection="column"
                        borderTopRightRadius="10px"
                        borderTopLeftRadius="25px"
                        borderBottomLeftRadius="10px"
                        borderBottomRightRadius="25px"
                        >
                        <Center>
                        <Box  w={20}>
                           <Image boxShadow="rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset" w="40%" src="https://img.naukimg.com/logo_images/groups/v1/5538398.gif" alt="Oportun"/>
                        </Box>
                        </Center>
                        <Center>
                           <Text mt={3} mb={3} fontSize={17} fontWeight="bold">Oportun ˃</Text>
                        </Center>  
                        <Center>
                           <Text mb={3}>3 reviews</Text>
                        </Center>
                        <Box>
                            <Button size="10" p={1} m={1} fontSize={12}>B2C</Button>
                            <Button size="10" p={1} m={1} fontSize={12}>Corporate</Button>
                            <Button size="10" p={1} m={1} fontSize={12}>Fintech/Payments</Button>
                        </Box>
                    </GridItem>

                    <GridItem 
                        boxShadow="rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset" w="100%" src="https://img.naukimg.com/logo_images/groups/v1/1635928.gif"
                        display="flex"
                        _hover={{cursor: "pointer",boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"}}
                        p={6}
                        flexDirection="column"
                        borderTopRightRadius="10px"
                        borderTopLeftRadius="25px"
                        borderBottomLeftRadius="10px"
                        borderBottomRightRadius="25px"
                        >
                        <Center>
                        <Box w={20}>
                           <Image boxShadow="rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset" w="40%" src="https://img.naukimg.com/logo_images/groups/v1/2892124.gif" alt="DFM Foods"/>
                        </Box>
                        </Center>
                        <Center>
                           <Text mt={3} mb={3} fontSize={17} fontWeight="bold">DFM Foods ˃</Text>
                        </Center>
                        <Center>
                           <Box display="flex" mb={3}><Box>4.2</Box><Text ml={2} pl={2} borderColor="gray" borderLeft="1px">240 reviews</Text></Box>
                        </Center>
                        <Box>
                            <Button size="10" p={1} m={1} fontSize={12}>FMCG</Button>
                            <Button size="10" p={1} m={1} fontSize={12}>Import & Export</Button>
                            <Button size="10" p={1} m={1} fontSize={12}>Food Processing</Button>
                        </Box>
                    </GridItem>

                    <GridItem 
                       boxShadow="rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset" w="100%" src="https://img.naukimg.com/logo_images/groups/v1/1635928.gif"
                       display="flex"
                       _hover={{cursor: "pointer",boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"}}
                       p={6}
                       flexDirection="column"
                       borderTopRightRadius="10px"
                        borderTopLeftRadius="25px"
                        borderBottomLeftRadius="10px"
                        borderBottomRightRadius="25px"
                        >
                        <Center>    
                        <Box  w={20}>
                           <Image boxShadow="rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset" w="40%" src="https://img.naukimg.com/logo_images/groups/v1/5491006.gif" alt="Instem"/>
                        </Box>
                        </Center>
                        <Center>
                           <Text mt={3} mb={3} fontSize={17} fontWeight="bold">Instem ˃</Text>
                        </Center>
                        <Center>
                           <Box display="flex" mb={3}><Box>4.5</Box><Text ml={2} pl={2} borderColor="gray" borderLeft="1px">24 reviews</Text></Box>
                        </Center>
                        <Box>
                            <Button size="10" p={1} m={1} fontSize={12}>B2B</Button>
                            <Button size="10" p={1} m={1} fontSize={12}>Internet</Button>
                            <Button size="10" p={1} m={1} fontSize={12}>Foreign MNC</Button>

                        </Box>
                    </GridItem>

                    <GridItem 
                       boxShadow="rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset" w="100%" src="https://img.naukimg.com/logo_images/groups/v1/1635928.gif"
                       display="flex"
                       _hover={{cursor: "pointer",boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"}}
                       p={6}
                       flexDirection="column"
                       borderTopRightRadius="10px"
                        borderTopLeftRadius="25px"
                        borderBottomLeftRadius="10px"
                        borderBottomRightRadius="25px"
                        >
                        <Center>
                        <Box  w={20}>
                            <Image boxShadow="rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset" w="40%" src="https://img.naukimg.com/logo_images/groups/v1/6240065.gif" alt="The Enerji Group"/>
                        </Box>
                        </Center>
                        <Center>
                            <Text mt={3} mb={3} fontSize={17} fontWeight="bold">The Enerji Group ˃</Text>
                        </Center>
                        <Center>
                            <Box display="flex" mb={3}><Box>4.9</Box><Text ml={2} pl={2} borderColor="gray" borderLeft="1px">4 reviews</Text></Box>
                        </Center>
                        <Box>
                            <Button size="10" p={1} m={1} fontSize={12}>B2B</Button>
                            <Button size="10" p={1} m={1} fontSize={12}>Private</Button>
                            <Button size="10" p={1} m={1} fontSize={12}>Indian MNC</Button>
                            <Button size="10" p={1} m={1} fontSize={12}>IT Services & Consulting</Button>
                        </Box>
                    </GridItem>

                    <GridItem 
                       boxShadow="rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset" w="100%" src="https://img.naukimg.com/logo_images/groups/v1/1635928.gif"
                       display="flex"
                       _hover={{cursor: "pointer",boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"}}
                       p={6}
                       flexDirection="column"
                       borderTopRightRadius="10px"
                        borderTopLeftRadius="25px"
                        borderBottomLeftRadius="10px"
                        borderBottomRightRadius="25px"
                        >
                        <Center>
                        <Box  w={20}>
                            <Image boxShadow="rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset" w="40%" src="https://img.naukimg.com/logo_images/groups/v1/4585307.gif" alt="C&S Electric"/>
                            </Box>
                        </Center>
                        <Center>
                            <Text mt={3} mb={3} fontSize={17} fontWeight="bold">C&S Electric ˃</Text>
                        </Center>
                        <Center>
                            <Box display="flex" mb={3}><Box>3.9</Box><Text ml={2} pl={2} borderColor="gray" borderLeft="1px">577 reviews</Text></Box>
                        </Center>
                        <Box>
                            <Button size="10" p={1} m={1} fontSize={12}>Electronics</Button>
                            <Button size="10" p={1} m={1} fontSize={12}>Manufacturing</Button>
                            <Button size="10" p={1} m={1} fontSize={12}>Electrical Equipment</Button>
                            <Button size="10" p={1} m={1} fontSize={12}>B2B</Button>
                        </Box>
                    </GridItem>

                </Grid>
            </Box>
        </Box>









            <Box>
                <Grid 
                    templateColumns={{ base: 'repeat(2, 1fr)', sm: 'repeat(3, 1fr)', md: 'repeat(5, 1fr)', xl: 'repeat(5, 1fr)'}} 
                    mt={10}
                    mb={10}
                    gap={6}>

                    <GridItem 
                        boxShadow="rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset" w="100%" src="https://img.naukimg.com/logo_images/groups/v1/1635928.gif"
                        display="flex"
                        _hover={{cursor: "pointer",boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"}}
                        p={6}
                        flexDirection="column"
                        borderTopRightRadius="10px"
                        borderTopLeftRadius="25px"
                        borderBottomLeftRadius="10px"
                        borderBottomRightRadius="25px"
                        >
                        <Center>
                        <Box  w={20}>
                            <Image boxShadow="rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset" w="40%" src="https://img.naukimg.com/logo_images/groups/v1/1635928.gif" alt="Enel X"/>
                        </Box>
                        </Center>
                        <Center>
                            <Text mt={3} mb={3} fontSize={17} fontWeight="bold">Enel X ˃</Text>
                        </Center>
                        <Box>
                            <Button size="10" p={1} m={1} fontSize={12}>Power</Button>
                            <Button size="10" p={1} m={1} fontSize={12}>B2B</Button>
                            <Button size="10" p={1} m={1} fontSize={12}>Corporate</Button>
                            <Button size="10" p={1} m={1} fontSize={12}>Private</Button>
                        </Box>
                    </GridItem>


                    <GridItem 
                        boxShadow="rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset" w="100%" src="https://img.naukimg.com/logo_images/groups/v1/1635928.gif"
                        display="flex"
                        _hover={{cursor: "pointer",boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"}}
                        p={6}
                        flexDirection="column"
                        borderTopRightRadius="10px"
                        borderTopLeftRadius="25px"
                        borderBottomLeftRadius="10px"
                        borderBottomRightRadius="25px"
                        >
                        <Center>
                        <Box w={20}>
                            <Image boxShadow="rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset" w="40%" src="https://img.naukimg.com/logo_images/groups/v1/1218142.gif" alt="PI Industries"/>
                        </Box>
                        </Center>
                        <Center>
                            <Text mt={3} mb={3} fontSize={17} fontWeight="bold">PI Industries ˃</Text>
                        </Center>
                        <Center>
                        <Box display="flex" mb={3}><Box>4.1</Box><Text ml={2} pl={2} borderColor="gray" borderLeft="1px">768 reviews</Text></Box>
                        </Center>
                        <Box>
                            <Button size="10" p={1} m={1} fontSize={12}>B2B</Button>
                            <Button size="10" p={1} m={1} fontSize={12}>Carporate</Button>
                            <Button size="10" p={1} m={1} fontSize={12}>Chemicals</Button>
                        </Box>
                    </GridItem>

                    <GridItem 
                       boxShadow="rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset" w="100%" src="https://img.naukimg.com/logo_images/groups/v1/1635928.gif"
                       display="flex"
                       _hover={{cursor: "pointer",boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"}}
                       p={6}
                       flexDirection="column"
                       borderTopRightRadius="10px"
                        borderTopLeftRadius="25px"
                        borderBottomLeftRadius="10px"
                        borderBottomRightRadius="25px"
                        >
                        <Center>
                        <Box w={20}>
                            <Image boxShadow="rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset" w="40%" src="https://img.naukimg.com/logo_images/groups/v1/6011382.gif" alt="G Square Realtors"/>
                        </Box>
                        </Center>
                        <Center>
                           <Text mt={3} mb={3} fontSize={17} fontWeight="bold">G Square Realtors ˃</Text>
                        </Center>
                        <Center>
                            <Text mb={3}>2 reviews</Text>
                        </Center>
                        <Box>
                            <Button size="10" p={1} m={1} fontSize={12}>Real Estate</Button>
                        </Box>
                    </GridItem>

                    <GridItem 
                       boxShadow="rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset" w="100%" src="https://img.naukimg.com/logo_images/groups/v1/1635928.gif"
                       display="flex"
                       p={6}
                       flexDirection="column"
                       _hover={{cursor: "pointer",boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"}}
                       borderTopRightRadius="10px"
                        borderTopLeftRadius="25px"
                        borderBottomLeftRadius="10px"
                        borderBottomRightRadius="25px"
                        >
                        <Center>
                        <Box w={20}>
                           <Image boxShadow="rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset" w="40%" src="https://img.naukimg.com/logo_images/groups/v1/1268772.gif" alt="Einfochips"/>
                        </Box>
                        </Center>
                        <Center>
                            <Text mt={3} mb={3} fontSize={17} fontWeight="bold">Einfochips ˃</Text>
                        </Center>
                        <Center>
                           <Box display="flex" mb={3}><Box>3.7</Box><Text ml={2} pl={2} borderColor="gray" borderLeft="1px">225 reviews</Text></Box>
                        </Center>
                        <Box>
                            <Button size="10" p={1} m={1} fontSize={12}>IT Services & Consulting</Button>
                            <Button size="10" p={1} m={1} fontSize={12}>Electronic Components /se..</Button>
                        </Box>
                    </GridItem>

                    <GridItem 
                       boxShadow="rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset" w="100%" src="https://img.naukimg.com/logo_images/groups/v1/1635928.gif"
                       display="flex"
                       p={6}
                       flexDirection="column"
                       _hover={{cursor: "pointer",boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"}}
                       borderTopRightRadius="10px"
                        borderTopLeftRadius="25px"
                        borderBottomLeftRadius="10px"
                        borderBottomRightRadius="25px"
                        >
                        <Center>
                        <Box w={20}>
                            <Image boxShadow="rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset" w="40%" src="https://img.naukimg.com/logo_images/groups/v1/4656015.gif" alt="Opentext"/>
                        </Box>
                        </Center>
                        <Center>
                            <Text mt={3} mb={3} fontSize={17} fontWeight="bold">Opentext ˃</Text>
                        </Center>
                        <Center>
                           <Box mb={3} display="flex"><Box>4.0</Box><Text ml={2} pl={2} borderColor="gray" borderLeft="1px">301 reviews</Text></Box>
                        </Center>
                        <Box>
                            <Button size="10" p={1} m={1} fontSize={12}>Software Product</Button>
                            <Button size="10" p={1} m={1} fontSize={12}>Analytic/KPO/Research</Button>
                        </Box>
                    </GridItem>

                    <GridItem 
                        boxShadow="rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset" w="100%" src="https://img.naukimg.com/logo_images/groups/v1/1635928.gif"
                        display="flex"
                        _hover={{cursor: "pointer",boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"}}
                        p={6}
                        flexDirection="column"
                        borderTopRightRadius="10px"
                        borderTopLeftRadius="25px"
                        borderBottomLeftRadius="10px"
                        borderBottomRightRadius="25px"
                        >
                        <Center>
                        <Box  w={20}>
                           <Image boxShadow="rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset" w="40%" src="https://img.naukimg.com/logo_images/groups/v1/5538398.gif" alt="Oportun"/>
                        </Box>
                        </Center>
                        <Center>
                           <Text mt={3} mb={3} fontSize={17} fontWeight="bold">Oportun ˃</Text>
                        </Center>  
                        <Center>
                           <Text mb={3}>3 reviews</Text>
                        </Center>
                        <Box>
                            <Button size="10" p={1} m={1} fontSize={12}>B2C</Button>
                            <Button size="10" p={1} m={1} fontSize={12}>Corporate</Button>
                            <Button size="10" p={1} m={1} fontSize={12}>Fintech/Payments</Button>
                        </Box>
                    </GridItem>

                    <GridItem 
                        boxShadow="rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset" w="100%" src="https://img.naukimg.com/logo_images/groups/v1/1635928.gif"
                        display="flex"
                        _hover={{cursor: "pointer",boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"}}
                        p={6}
                        flexDirection="column"
                        borderTopRightRadius="10px"
                        borderTopLeftRadius="25px"
                        borderBottomLeftRadius="10px"
                        borderBottomRightRadius="25px"
                        >
                        <Center>
                        <Box w={20}>
                           <Image boxShadow="rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset" w="40%" src="https://img.naukimg.com/logo_images/groups/v1/2892124.gif" alt="DFM Foods"/>
                        </Box>
                        </Center>
                        <Center>
                           <Text mt={3} mb={3} fontSize={17} fontWeight="bold">DFM Foods ˃</Text>
                        </Center>
                        <Center>
                           <Box display="flex" mb={3}><Box>4.2</Box><Text ml={2} pl={2} borderColor="gray" borderLeft="1px">240 reviews</Text></Box>
                        </Center>
                        <Box>
                            <Button size="10" p={1} m={1} fontSize={12}>FMCG</Button>
                            <Button size="10" p={1} m={1} fontSize={12}>Import & Export</Button>
                            <Button size="10" p={1} m={1} fontSize={12}>Food Processing</Button>
                        </Box>
                    </GridItem>

                    <GridItem 
                       boxShadow="rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset" w="100%" src="https://img.naukimg.com/logo_images/groups/v1/1635928.gif"
                       display="flex"
                       _hover={{cursor: "pointer",boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"}}
                       p={6}
                       flexDirection="column"
                       borderTopRightRadius="10px"
                        borderTopLeftRadius="25px"
                        borderBottomLeftRadius="10px"
                        borderBottomRightRadius="25px"
                        >
                        <Center>    
                        <Box w={20}>
                           <Image boxShadow="rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset" w="40%" src="https://img.naukimg.com/logo_images/groups/v1/5491006.gif" alt="Instem"/>
                        </Box>
                        </Center>
                        <Center>
                           <Text mt={3} mb={3} fontSize={17} fontWeight="bold">Instem ˃</Text>
                        </Center>
                        <Center>
                           <Box display="flex" mb={3}><Box>4.5</Box><Text ml={2} pl={2} borderColor="gray" borderLeft="1px">24 reviews</Text></Box>
                        </Center>
                        <Box>
                            <Button size="10" p={1} m={1} fontSize={12}>B2B</Button>
                            <Button size="10" p={1} m={1} fontSize={12}>Internet</Button>
                            <Button size="10" p={1} m={1} fontSize={12}>Foreign MNC</Button>

                        </Box>
                    </GridItem>

                    <GridItem 
                       boxShadow="rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset" w="100%" src="https://img.naukimg.com/logo_images/groups/v1/1635928.gif"
                       display="flex"
                       _hover={{cursor: "pointer",boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"}}
                       p={6}
                       flexDirection="column"
                       borderTopRightRadius="10px"
                        borderTopLeftRadius="25px"
                        borderBottomLeftRadius="10px"
                        borderBottomRightRadius="25px"
                        >
                        <Center>
                        <Box w={20}>
                            <Image boxShadow="rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset" w="40%" src="https://img.naukimg.com/logo_images/groups/v1/6240065.gif" alt="The Enerji Group"/>
                        </Box>
                        </Center>
                        <Center>
                            <Text mt={3} mb={3} fontSize={17} fontWeight="bold">The Enerji Group ˃</Text>
                        </Center>
                        <Center>
                            <Box display="flex" mb={3}><Box>4.9</Box><Text ml={2} pl={2} borderColor="gray" borderLeft="1px">4 reviews</Text></Box>
                        </Center>
                        <Box>
                            <Button size="10" p={1} m={1} fontSize={12}>B2B</Button>
                            <Button size="10" p={1} m={1} fontSize={12}>Private</Button>
                            <Button size="10" p={1} m={1} fontSize={12}>Indian MNC</Button>
                            <Button size="10" p={1} m={1} fontSize={12}>IT Services & Consulting</Button>
                        </Box>
                    </GridItem>

                    <GridItem 
                       boxShadow="rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset" w="100%" src="https://img.naukimg.com/logo_images/groups/v1/1635928.gif"
                       display="flex"
                       _hover={{cursor: "pointer",boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"}}
                       p={6}
                       flexDirection="column"
                       borderTopRightRadius="10px"
                        borderTopLeftRadius="25px"
                        borderBottomLeftRadius="10px"
                        borderBottomRightRadius="25px"
                        >
                        <Center>
                            <Box  w={20}>
                            <Image  w="full" boxShadow="rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset" src="https://img.naukimg.com/logo_images/groups/v1/4585307.gif" alt="C&S Electric"/>
                            </Box>
                            
                        </Center>
                        <Center>
                            <Text mt={3} mb={3} fontSize={17} fontWeight="bold">C&S Electric ˃</Text>
                        </Center>
                        <Center>
                            <Box display="flex" mb={3}><Box>3.9</Box><Text ml={2} pl={2} borderColor="gray" borderLeft="1px">577 reviews</Text></Box>
                        </Center>
                        <Box>
                            <Button size="10" p={1} m={1} fontSize={12}>Electronics</Button>
                            <Button size="10" p={1} m={1} fontSize={12}>Manufacturing</Button>
                            <Button size="10" p={1} m={1} fontSize={12}>Electrical Equipment</Button>
                            <Button size="10" p={1} m={1} fontSize={12}>B2B</Button>
                        </Box>
                    </GridItem>

                </Grid>
            </Box>
            </Carousel>
    </>);
}