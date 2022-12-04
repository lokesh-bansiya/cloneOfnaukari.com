import { 
    Grid, 
    GridItem,
    Box,
    Text,
    Image,
    Center,

} from '@chakra-ui/react';


export const CompaniesGrid = () => {
  return (
    <>
      <Text 
        mb={{ base: 5, sm: 4, md: 5, xl: 5 }} 
        fontSize={{ base: 10, sm: 15, md: 20, xl: 20 }}>Showing 268 companies</Text>

      <Grid 
        templateColumns={{ base: "repeat(1, 1fr)", 
        sm: "repeat(2, 1fr)", md: "repeat(2, 1fr)", 
        xl: "repeat(2, 1fr)" }}
        gap={{ base: 4, sm: 4, md: 6, xl: 6 }}
        p={{ base: 1, sm: 1, md: 2, xl: 2 }}
        >
        <GridItem 
            display="flex"
            borderTopRightRadius="10px"
            borderTopLeftRadius="25px"
            borderBottomLeftRadius="10px"
            borderBottomRightRadius="25px"
            _hover={{cursor: "pointer",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}
            boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
            pt={{ base: 4, sm: 3, md: 5, xl: 5 }}
            pb={{ base: 2, sm: 3, md: 5, xl: 5 }}
            pr={{ base: 2, sm: 2, md: 5, xl: 5 }}
            pl={{ base: 2, sm: 2, md: 5, xl: 5 }}
            >
            <Box 
                w={{ base: "30%", sm: "20%", md: "30%", xl: "30%" }} 
                >
                <Center>
                <Image 
                    boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" 
                    w={{ base: "50%", sm: "80%", md: "50%", xl: "50%" }} 
                    src='https://img.naukimg.com/logo_images/groups/v1/3584.gif' 
                    alt=''
                />
                </Center>
            </Box>
            <Box 
                display="flex"
                flexDirection="column"
                >
                <Text mb={1} fontWeight={500} fontSize={{ base: 15, sm: 15, md: 20, xl: 20 }}>Icici Prudential</Text>
                <Box 
                   display="flex"
                   mb={2}
                   >
                    <Text fontSize={{ base: 10, sm: 10, md: 15, xl: 15 }} >⭐4.1</Text>
                    <Text fontSize={{ base: 10, sm: 10, md: 15, xl: 15 }} borderLeft="1px" ml={2} borderColor="gray"  pl={2}>4.5K+ reviews</Text>
                </Box>
                <Box display="flex">
                    <Box 
                        boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" 
                        borderRadius="5px" 
                        fontSize={{ base: 7, sm: 7, md: 10, xl: 10 }}  
                        mr={1} 
                        pl={1} 
                        pr={1}
                        >Carporate</Box>
                    <Box 
                        boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" 
                        borderRadius="5px" 
                        fontSize={{ base: 7, sm: 7, md: 10, xl: 10 }}  
                        mr={1} 
                        pl={1} 
                        pr={1}
                        >Insurance</Box>
                    <Box 
                        boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" 
                        borderRadius="5px" 
                        fontSize={{ base: 7, sm: 7, md: 10, xl: 10 }}  
                        mr={1} 
                        pl={1} 
                        pr={1}
                        >Founded: 2000</Box>
                </Box>
            </Box>
            <Box  ml={{ base: 7, sm: 5, md: 10, xl: 10 }} fontSize={{ base: 30, sm: 30, md: 40, xl: 40 }}>›</Box>
        </GridItem>


        <GridItem 
            display="flex"
            borderTopRightRadius="10px"
            borderTopLeftRadius="25px"
            borderBottomLeftRadius="10px"
            borderBottomRightRadius="25px"
            _hover={{cursor: "pointer",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}
            boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
            pt={{ base: 4, sm: 3, md: 5, xl: 5 }}
            pb={{ base: 2, sm: 3, md: 5, xl: 5 }}
            pr={{ base: 2, sm: 2, md: 5, xl: 5 }}
            pl={{ base: 2, sm: 2, md: 5, xl: 5 }}
            >
            <Box 
                w={{ base: "30%", sm: "20%", md: "30%", xl: "30%" }} 
                >
                <Center>
                <Image 
                    boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" 
                    w={{ base: "50%", sm: "80%", md: "50%", xl: "50%" }} 
                    src='https://img.naukimg.com/logo_images/groups/v1/383748.gif' 
                    alt=''
                />
                </Center>
            </Box>
            <Box 
                display="flex"
                flexDirection="column"
                >
                <Text mb={1} fontWeight={500} fontSize={{ base: 15, sm: 15, md: 20, xl: 20 }}>Dtcc</Text>
                <Box 
                   display="flex"
                   mb={2}
                   >
                    <Text fontSize={{ base: 10, sm: 10, md: 15, xl: 15 }} >⭐4.4</Text>
                    <Text fontSize={{ base: 10, sm: 10, md: 15, xl: 15 }} borderLeft="1px" ml={2} borderColor="gray"  pl={2}>29 reviews</Text>
                </Box>
                <Box display="flex">
                    <Box 
                        boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" 
                        borderRadius="5px" 
                        fontSize={{ base: 7, sm: 7, md: 10, xl: 10 }}  
                        mr={1} 
                        pl={1} 
                        pr={1}
                        >Carporate</Box>
                    <Box 
                        boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" 
                        borderRadius="5px" 
                        fontSize={{ base: 7, sm: 7, md: 10, xl: 10 }}  
                        mr={1} 
                        pl={1} 
                        pr={1}
                        >Fintech/Payments</Box>
                    <Box 
                        boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" 
                        borderRadius="5px" 
                        fontSize={{ base: 7, sm: 7, md: 10, xl: 10 }}  
                        mr={1} 
                        pl={1} 
                        pr={1}
                        >Founded: 1999</Box>
                </Box>
            </Box>
            <Box  ml={{ base: 7, sm: 5, md: 10, xl: 10 }} fontSize={{ base: 30, sm: 30, md: 40, xl: 40 }}>›</Box>
        </GridItem>


        <GridItem 
            display="flex"
            borderTopRightRadius="10px"
            borderTopLeftRadius="25px"
            borderBottomLeftRadius="10px"
            borderBottomRightRadius="25px"
            _hover={{cursor: "pointer",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}
            boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
            pt={{ base: 4, sm: 3, md: 5, xl: 5 }}
            pb={{ base: 2, sm: 3, md: 5, xl: 5 }}
            pr={{ base: 2, sm: 2, md: 5, xl: 5 }}
            pl={{ base: 2, sm: 2, md: 5, xl: 5 }}
            >
            <Box 
                w={{ base: "30%", sm: "20%", md: "30%", xl: "30%" }} 
                >
                <Center>
                <Image 
                    boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" 
                    w={{ base: "50%", sm: "80%", md: "50%", xl: "50%" }} 
                    src='https://img.naukimg.com/logo_images/groups/v1/6064159.gif' 
                    alt=''
                />
                </Center>
            </Box>
            <Box 
                display="flex"
                flexDirection="column"
                >
                <Text mb={1} fontWeight={500} fontSize={{ base: 15, sm: 15, md: 20, xl: 20 }}>Enverus, Inc.</Text>
                <Box 
                   display="flex"
                   mb={2}
                   >
                    <Text fontSize={{ base: 10, sm: 10, md: 15, xl: 15 }} >⭐4.1</Text>
                    <Text fontSize={{ base: 10, sm: 10, md: 15, xl: 15 }} borderLeft="1px" ml={2} borderColor="gray"  pl={2}>4.5K+ reviews</Text>
                </Box>
                <Box display="flex">
                    <Box 
                        boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" 
                        borderRadius="5px" 
                        fontSize={{ base: 7, sm: 7, md: 10, xl: 10 }}  
                        mr={1} 
                        pl={1} 
                        pr={1}
                        >Foreign MNC</Box>
                    <Box 
                        boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" 
                        borderRadius="5px" 
                        fontSize={{ base: 7, sm: 7, md: 10, xl: 10 }}  
                        mr={1} 
                        pl={1} 
                        pr={1}
                        >Software Products</Box>
                    <Box 
                        boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" 
                        borderRadius="5px" 
                        fontSize={{ base: 7, sm: 7, md: 10, xl: 10 }}  
                        mr={1} 
                        pl={1} 
                        pr={1}
                        >United states(USA)</Box>
                </Box>
            </Box>
            <Box  ml={{ base: 7, sm: 5, md: 10, xl: 10 }} fontSize={{ base: 30, sm: 30, md: 40, xl: 40 }}>›</Box>
        </GridItem>


        <GridItem 
            display="flex"
            borderTopRightRadius="10px"
            borderTopLeftRadius="25px"
            borderBottomLeftRadius="10px"
            borderBottomRightRadius="25px"
            _hover={{cursor: "pointer",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}
            boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
            pt={{ base: 4, sm: 3, md: 5, xl: 5 }}
            pb={{ base: 2, sm: 3, md: 5, xl: 5 }}
            pr={{ base: 2, sm: 2, md: 5, xl: 5 }}
            pl={{ base: 2, sm: 2, md: 5, xl: 5 }}
            >
            <Box 
                w={{ base: "30%", sm: "20%", md: "30%", xl: "30%" }} 
                >
                <Center>
                <Image 
                    boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" 
                    w={{ base: "50%", sm: "80%", md: "50%", xl: "50%" }} 
                    src='https://img.naukimg.com/logo_images/groups/v1/17926.gif' 
                    alt=''
                />
                </Center>
            </Box>
            <Box 
                display="flex"
                flexDirection="column"
                >
                <Text mb={1} fontWeight={500} fontSize={{ base: 15, sm: 15, md: 20, xl: 20 }}>DLF</Text>
                <Box 
                   display="flex"
                   mb={2}
                   >
                    <Text fontSize={{ base: 10, sm: 10, md: 15, xl: 15 }} >⭐4.1</Text>
                    <Text fontSize={{ base: 10, sm: 10, md: 15, xl: 15 }} borderLeft="1px" ml={2} borderColor="gray" pl={2}>474 reviews</Text>
                </Box>
                <Box display="flex">
                    <Box 
                        boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" 
                        borderRadius="5px" 
                        fontSize={{ base: 7, sm: 7, md: 10, xl: 10 }}  
                        mr={1} 
                        pl={1} 
                        pr={1}
                        >Carporate</Box>
                    <Box 
                        boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" 
                        borderRadius="5px" 
                        fontSize={{ base: 7, sm: 7, md: 10, xl: 10 }}  
                        mr={1} 
                        pl={1} 
                        pr={1}
                        >Engineering & Construction</Box>
                    <Box 
                        boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" 
                        borderRadius="5px" 
                        fontSize={{ base: 7, sm: 7, md: 10, xl: 10 }}  
                        mr={1} 
                        pl={1} 
                        pr={1}
                        >Founded: 1946</Box>
                </Box>
            </Box>
            <Box  ml={{ base: 7, sm: 5, md: 10, xl: 10 }} fontSize={{ base: 30, sm: 30, md: 40, xl: 40 }}>›</Box>
        </GridItem>


        <GridItem 
            display="flex"
            borderTopRightRadius="10px"
            borderTopLeftRadius="25px"
            borderBottomLeftRadius="10px"
            borderBottomRightRadius="25px"
            _hover={{cursor: "pointer",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}
            boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
            pt={{ base: 4, sm: 3, md: 5, xl: 5 }}
            pb={{ base: 2, sm: 3, md: 5, xl: 5 }}
            pr={{ base: 2, sm: 2, md: 5, xl: 5 }}
            pl={{ base: 2, sm: 2, md: 5, xl: 5 }}
            >
            <Box 
                w={{ base: "30%", sm: "20%", md: "30%", xl: "30%" }} 
                >
                <Center>
                <Image 
                    boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" 
                    w={{ base: "50%", sm: "80%", md: "50%", xl: "50%" }} 
                    src='https://img.naukimg.com/logo_images/groups/v1/13832.gif' 
                    alt='Emfosys'
                />
                </Center>
            </Box>
            <Box 
                display="flex"
                flexDirection="column"
                >
                <Text mb={1} fontWeight={500} fontSize={{ base: 15, sm: 15, md: 20, xl: 20 }}>Emfosys</Text>
                <Box 
                   display="flex"
                   mb={2}
                   >
                    <Text fontSize={{ base: 10, sm: 10, md: 15, xl: 15 }} >⭐3.9</Text>
                    <Text fontSize={{ base: 10, sm: 10, md: 15, xl: 15 }} borderLeft="1px" ml={2} borderColor="gray" pl={2}>27.5K+ reviews</Text>
                </Box>
                <Box display="flex">
                    <Box 
                        boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" 
                        borderRadius="5px" 
                        fontSize={{ base: 7, sm: 7, md: 10, xl: 10 }}  
                        mr={1} 
                        pl={1} 
                        pr={1}
                        >Indian MNC</Box>
                    <Box 
                        boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" 
                        borderRadius="5px" 
                        fontSize={{ base: 7, sm: 7, md: 10, xl: 10 }}  
                        mr={1} 
                        pl={1} 
                        pr={1}
                        >IT Services & Consulting</Box>
                    <Box 
                        boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" 
                        borderRadius="5px" 
                        fontSize={{ base: 7, sm: 7, md: 10, xl: 10 }}  
                        mr={1} 
                        pl={1} 
                        pr={1}
                        >Founded: 1981</Box>
                </Box>
            </Box>
            <Box  ml={{ base: 7, sm: 5, md: 10, xl: 10 }} fontSize={{ base: 30, sm: 30, md: 40, xl: 40 }}>›</Box>
        </GridItem>


        <GridItem 
            display="flex"
            borderTopRightRadius="10px"
            borderTopLeftRadius="25px"
            borderBottomLeftRadius="10px"
            borderBottomRightRadius="25px"
            _hover={{cursor: "pointer",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}
            boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
            pt={{ base: 4, sm: 3, md: 5, xl: 5 }}
            pb={{ base: 2, sm: 3, md: 5, xl: 5 }}
            pr={{ base: 2, sm: 2, md: 5, xl: 5 }}
            pl={{ base: 2, sm: 2, md: 5, xl: 5 }}
            >
            <Box 
                w={{ base: "30%", sm: "20%", md: "30%", xl: "30%" }} 
                >
                <Center>
                <Image 
                    boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" 
                    w={{ base: "50%", sm: "80%", md: "50%", xl: "50%" }} 
                    src='https://img.naukimg.com/logo_images/groups/v1/4847169.gif' 
                    alt='Optum'
                />
                </Center>
            </Box>
            <Box 
                display="flex"
                flexDirection="column"
                >
                <Text mb={1} fontWeight={500} fontSize={{ base: 15, sm: 15, md: 20, xl: 20 }}>Optum</Text>
                <Box 
                   display="flex"
                   mb={2}
                   >
                    <Text fontSize={{ base: 10, sm: 10, md: 15, xl: 15 }} >⭐4.1</Text>
                    <Text fontSize={{ base: 10, sm: 10, md: 15, xl: 15 }} borderLeft="1px" ml={2} borderColor="gray" pl={2}>2.1K+ reviews</Text>
                </Box>
                <Box display="flex">
                    <Box 
                        boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" 
                        borderRadius="5px" 
                        fontSize={{ base: 7, sm: 7, md: 10, xl: 10 }}  
                        mr={1} 
                        pl={1} 
                        pr={1}
                        >Foreign MNC</Box>
                    <Box 
                        boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" 
                        borderRadius="5px" 
                        fontSize={{ base: 7, sm: 7, md: 10, xl: 10 }}  
                        mr={1} 
                        pl={1} 
                        pr={1}
                        >Medical Services</Box>
                    <Box 
                        boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" 
                        borderRadius="5px" 
                        fontSize={{ base: 7, sm: 7, md: 10, xl: 10 }}  
                        mr={1} 
                        pl={1} 
                        pr={1}
                        >Hospital</Box>
                </Box>
            </Box>
            <Box  ml={{ base: 7, sm: 5, md: 10, xl: 10 }} fontSize={{ base: 30, sm: 30, md: 40, xl: 40 }}>›</Box>
        </GridItem>


        <GridItem 
            display="flex"
            borderTopRightRadius="10px"
            borderTopLeftRadius="25px"
            borderBottomLeftRadius="10px"
            borderBottomRightRadius="25px"
            _hover={{cursor: "pointer",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}
            boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
            pt={{ base: 4, sm: 3, md: 5, xl: 5 }}
            pb={{ base: 2, sm: 3, md: 5, xl: 5 }}
            pr={{ base: 2, sm: 2, md: 5, xl: 5 }}
            pl={{ base: 2, sm: 2, md: 5, xl: 5 }}
            >
            <Box 
                w={{ base: "30%", sm: "20%", md: "30%", xl: "30%" }} 
                >
                <Center>
                <Image 
                    boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" 
                    w={{ base: "50%", sm: "80%", md: "50%", xl: "50%" }} 
                    src='https://img.naukimg.com/logo_images/groups/v1/1186200.gif' 
                    alt='Virtusa'
                />
                </Center>
            </Box>
            <Box 
                display="flex"
                flexDirection="column"
                >
                <Text mb={1} fontWeight={500} fontSize={{ base: 15, sm: 15, md: 20, xl: 20 }}>Virtusa</Text>
                <Box 
                   display="flex"
                   mb={2}
                   >
                    <Text fontSize={{ base: 10, sm: 10, md: 15, xl: 15 }} >⭐3.8</Text>
                    <Text fontSize={{ base: 10, sm: 10, md: 15, xl: 15 }} borderLeft="1px" ml={2} borderColor="gray" pl={2}>2.1K+ reviews</Text>
                </Box>
                <Box display="flex">
                    <Box 
                        boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" 
                        borderRadius="5px" 
                        fontSize={{ base: 7, sm: 7, md: 10, xl: 10 }}  
                        mr={1} 
                        pl={1} 
                        pr={1}
                        >Foreign MNC</Box>
                    <Box 
                        boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" 
                        borderRadius="5px" 
                        fontSize={{ base: 7, sm: 7, md: 10, xl: 10 }}  
                        mr={1} 
                        pl={1} 
                        pr={1}
                        >IT Services &</Box>
                    <Box 
                        boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" 
                        borderRadius="5px" 
                        fontSize={{ base: 7, sm: 7, md: 10, xl: 10 }}  
                        mr={1} 
                        pl={1} 
                        pr={1}
                        >Cnsulting</Box>
                </Box>
            </Box>
            <Box  ml={{ base: 7, sm: 5, md: 10, xl: 10 }} fontSize={{ base: 30, sm: 30, md: 40, xl: 40 }}>›</Box>
        </GridItem>



        <GridItem 
            display="flex"
            borderTopRightRadius="10px"
            borderTopLeftRadius="25px"
            borderBottomLeftRadius="10px"
            borderBottomRightRadius="25px"
            _hover={{cursor: "pointer",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}
            boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
            pt={{ base: 4, sm: 3, md: 5, xl: 5 }}
            pb={{ base: 2, sm: 3, md: 5, xl: 5 }}
            pr={{ base: 2, sm: 2, md: 5, xl: 5 }}
            pl={{ base: 2, sm: 2, md: 5, xl: 5 }}
            >
            <Box 
                w={{ base: "30%", sm: "20%", md: "30%", xl: "30%" }} 
                >
                <Center>
                <Image 
                    boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" 
                    w={{ base: "50%", sm: "80%", md: "50%", xl: "50%" }} 
                    src='https://img.naukimg.com/logo_images/groups/v1/20810.gif' 
                    alt='Cipla'
                />
                </Center>
            </Box>
            <Box 
                display="flex"
                flexDirection="column"
                >
                <Text mb={1} fontWeight={500} fontSize={{ base: 15, sm: 15, md: 20, xl: 20 }}>Cipla</Text>
                <Box 
                   display="flex"
                   mb={2}
                   >
                    <Text fontSize={{ base: 10, sm: 10, md: 15, xl: 15 }} >⭐4.1</Text>
                    <Text fontSize={{ base: 10, sm: 10, md: 15, xl: 15 }} borderLeft="1px" ml={2} borderColor="gray" pl={2}>4.8K+ reviews</Text>
                </Box>
                <Box display="flex">
                    <Box 
                        boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" 
                        borderRadius="5px" 
                        fontSize={{ base: 7, sm: 7, md: 10, xl: 10 }}  
                        mr={1} 
                        pl={1} 
                        pr={1}
                        >Indian MNC</Box>
                    <Box 
                        boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" 
                        borderRadius="5px" 
                        fontSize={{ base: 7, sm: 7, md: 10, xl: 10 }}  
                        mr={1} 
                        pl={1} 
                        pr={1}
                        >Pharmaceuticals &</Box>
                    <Box 
                        boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" 
                        borderRadius="5px" 
                        fontSize={{ base: 7, sm: 7, md: 10, xl: 10 }}  
                        mr={1} 
                        pl={1} 
                        pr={1}
                        >Life Sciences</Box>
                </Box>
            </Box>
            <Box  ml={{ base: 7, sm: 5, md: 10, xl: 10 }} fontSize={{ base: 30, sm: 30, md: 40, xl: 40 }}>›</Box>
        </GridItem>


        <GridItem 
            display="flex"
            borderTopRightRadius="10px"
            borderTopLeftRadius="25px"
            borderBottomLeftRadius="10px"
            borderBottomRightRadius="25px"
            _hover={{cursor: "pointer",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}
            boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
            pt={{ base: 4, sm: 3, md: 5, xl: 5 }}
            pb={{ base: 2, sm: 3, md: 5, xl: 5 }}
            pr={{ base: 2, sm: 2, md: 5, xl: 5 }}
            pl={{ base: 2, sm: 2, md: 5, xl: 5 }}
            >
            <Box 
                w={{ base: "30%", sm: "20%", md: "30%", xl: "30%" }} 
                >
                <Center>
                <Image 
                    boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" 
                    w={{ base: "50%", sm: "80%", md: "50%", xl: "50%" }} 
                    src='https://img.naukimg.com/logo_images/groups/v1/3821936.gif' 
                    alt='D2K Technologies'
                />
                </Center>
            </Box>
            <Box 
                display="flex"
                flexDirection="column"
                >
                <Text mb={1} fontWeight={500} fontSize={{ base: 15, sm: 15, md: 20, xl: 20 }}>D2K Technologies</Text>
                <Box 
                   display="flex"
                   mb={2}
                   >
                    <Text fontSize={{ base: 10, sm: 10, md: 15, xl: 15 }} >⭐4.1</Text>
                    <Text fontSize={{ base: 10, sm: 10, md: 15, xl: 15 }} borderLeft="1px" ml={2} borderColor="gray" pl={2}>4.5K+ reviews</Text>
                </Box>
                <Box display="flex">
                    <Box 
                        boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" 
                        borderRadius="5px" 
                        fontSize={{ base: 7, sm: 7, md: 10, xl: 10 }}  
                        mr={1} 
                        pl={1} 
                        pr={1}
                        >Carporate</Box>
                    <Box 
                        boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" 
                        borderRadius="5px" 
                        fontSize={{ base: 7, sm: 7, md: 10, xl: 10 }}  
                        mr={1} 
                        pl={1} 
                        pr={1}
                        >Insurance</Box>
                    <Box 
                        boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" 
                        borderRadius="5px" 
                        fontSize={{ base: 7, sm: 7, md: 10, xl: 10 }}  
                        mr={1} 
                        pl={1} 
                        pr={1}
                        >Founded: 2000</Box>
                </Box>
            </Box>
            <Box  ml={{ base: 7, sm: 5, md: 10, xl: 10 }} fontSize={{ base: 30, sm: 30, md: 40, xl: 40 }}>›</Box>
        </GridItem>


        <GridItem 
            display="flex"
            borderTopRightRadius="10px"
            borderTopLeftRadius="25px"
            borderBottomLeftRadius="10px"
            borderBottomRightRadius="25px"
            _hover={{cursor: "pointer",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}
            boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
            pt={{ base: 4, sm: 3, md: 5, xl: 5 }}
            pb={{ base: 2, sm: 3, md: 5, xl: 5 }}
            pr={{ base: 2, sm: 2, md: 5, xl: 5 }}
            pl={{ base: 2, sm: 2, md: 5, xl: 5 }}
            >
            <Box 
                w={{ base: "30%", sm: "20%", md: "30%", xl: "30%" }} 
                >
                <Center>
                <Image 
                    boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" 
                    w={{ base: "50%", sm: "80%", md: "50%", xl: "50%" }} 
                    src='https://img.naukimg.com/logo_images/groups/v1/306948.gif' 
                    alt='Baldota Group'
                />
                </Center>
            </Box>
            <Box 
                display="flex"
                flexDirection="column"
                >
                <Text mb={1} fontWeight={500} fontSize={{ base: 15, sm: 15, md: 20, xl: 20 }}>Baldota Group</Text>
                <Box 
                   display="flex"
                   mb={2}
                   >
                    <Text fontSize={{ base: 10, sm: 10, md: 15, xl: 15 }} >⭐4.0</Text>
                    <Text fontSize={{ base: 10, sm: 10, md: 15, xl: 15 }} borderLeft="1px" ml={2} borderColor="gray" pl={2}>146 reviews</Text>
                </Box>
                <Box display="flex">
                    <Box 
                        boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" 
                        borderRadius="5px" 
                        fontSize={{ base: 7, sm: 7, md: 10, xl: 10 }}  
                        mr={1} 
                        pl={1} 
                        pr={1}
                        >Carporate</Box>
                    <Box 
                        boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" 
                        borderRadius="5px" 
                        fontSize={{ base: 7, sm: 7, md: 10, xl: 10 }}  
                        mr={1} 
                        pl={1} 
                        pr={1}
                        >Metals & Mining</Box>
                    <Box 
                        boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" 
                        borderRadius="5px" 
                        fontSize={{ base: 7, sm: 7, md: 10, xl: 10 }}  
                        mr={1} 
                        pl={1} 
                        pr={1}
                        >Founded: 1961</Box>
                </Box>
            </Box>
            <Box  ml={{ base: 7, sm: 5, md: 10, xl: 10 }} fontSize={{ base: 30, sm: 30, md: 40, xl: 40 }}>›</Box>
        </GridItem>


        <GridItem 
            display="flex"
            borderTopRightRadius="10px"
            borderTopLeftRadius="25px"
            borderBottomLeftRadius="10px"
            borderBottomRightRadius="25px"
            _hover={{cursor: "pointer",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}
            boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
            pt={{ base: 4, sm: 3, md: 5, xl: 5 }}
            pb={{ base: 2, sm: 3, md: 5, xl: 5 }}
            pr={{ base: 2, sm: 2, md: 5, xl: 5 }}
            pl={{ base: 2, sm: 2, md: 5, xl: 5 }}
            >
            <Box 
                w={{ base: "30%", sm: "20%", md: "30%", xl: "30%" }} 
                >
                <Center>
                <Image 
                    boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" 
                    w={{ base: "50%", sm: "80%", md: "50%", xl: "50%" }} 
                    src='https://img.naukimg.com/logo_images/groups/v1/3719290.gif' 
                    alt='Onit'
                />
                </Center>
            </Box>
            <Box 
                display="flex"
                flexDirection="column"
                >
                <Text mb={1} fontWeight={500} fontSize={{ base: 15, sm: 15, md: 20, xl: 20 }}>Onit</Text>
                <Box 
                   display="flex"
                   mb={2}
                   >
                    <Text fontSize={{ base: 10, sm: 10, md: 15, xl: 15 }} >⭐4.8</Text>
                    <Text fontSize={{ base: 10, sm: 10, md: 15, xl: 15 }} borderLeft="1px" ml={2} borderColor="gray" pl={2}>48 reviews</Text>
                </Box>
                <Box display="flex">
                    <Box 
                        boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" 
                        borderRadius="5px" 
                        fontSize={{ base: 7, sm: 7, md: 10, xl: 10 }}  
                        mr={1} 
                        pl={1} 
                        pr={1}
                        >Foreign MNC</Box>
                    <Box 
                        boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" 
                        borderRadius="5px" 
                        fontSize={{ base: 7, sm: 7, md: 10, xl: 10 }}  
                        mr={1} 
                        pl={1} 
                        pr={1}
                        >IT Services & Counsulting</Box>
                    <Box 
                        boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" 
                        borderRadius="5px" 
                        fontSize={{ base: 7, sm: 7, md: 10, xl: 10 }}  
                        mr={1} 
                        pl={1} 
                        pr={1}
                        >Founded: 1997</Box>
                </Box>
            </Box>
            <Box  ml={{ base: 7, sm: 5, md: 10, xl: 10 }} fontSize={{ base: 30, sm: 30, md: 40, xl: 40 }}>›</Box>
        </GridItem>


        <GridItem 
            display="flex"
            borderTopRightRadius="10px"
            borderTopLeftRadius="25px"
            borderBottomLeftRadius="10px"
            borderBottomRightRadius="25px"
            _hover={{cursor: "pointer",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}
            boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
            pt={{ base: 4, sm: 3, md: 5, xl: 5 }}
            pb={{ base: 2, sm: 3, md: 5, xl: 5 }}
            pr={{ base: 2, sm: 2, md: 5, xl: 5 }}
            pl={{ base: 2, sm: 2, md: 5, xl: 5 }}
            >
            <Box 
                w={{ base: "30%", sm: "20%", md: "30%", xl: "30%" }} 
                >
                <Center>
                <Image 
                    boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" 
                    w={{ base: "50%", sm: "80%", md: "50%", xl: "50%" }} 
                    src='https://img.naukimg.com/logo_images/groups/v1/4639301.gif' 
                    alt='Vistex Asia Pacific'
                />
                </Center>
            </Box>
            <Box 
                display="flex"
                flexDirection="column"
                >
                <Text mb={1} fontWeight={500} fontSize={{ base: 15, sm: 15, md: 20, xl: 20 }}>Vistex Asia Pacific</Text>
                <Box 
                   display="flex"
                   mb={2}
                   >
                    <Text fontSize={{ base: 10, sm: 10, md: 15, xl: 15 }} >⭐3.9</Text>
                    <Text fontSize={{ base: 10, sm: 10, md: 15, xl: 15 }} borderLeft="1px" ml={2} borderColor="gray" pl={2}>35 reviews</Text>
                </Box>
                <Box display="flex">
                    <Box 
                        boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" 
                        borderRadius="5px" 
                        fontSize={{ base: 7, sm: 7, md: 10, xl: 10 }}  
                        mr={1} 
                        pl={1} 
                        pr={1}
                        >Carporate</Box>
                    <Box 
                        boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" 
                        borderRadius="5px" 
                        fontSize={{ base: 7, sm: 7, md: 10, xl: 10 }}  
                        mr={1} 
                        pl={1} 
                        pr={1}
                        >Foreign MNC</Box>
                    <Box 
                        boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" 
                        borderRadius="5px" 
                        fontSize={{ base: 7, sm: 7, md: 10, xl: 10 }}  
                        mr={1} 
                        pl={1} 
                        pr={1}
                        >Founded: 2000</Box>
                </Box>
            </Box>
            <Box  ml={{ base: 7, sm: 5, md: 10, xl: 10 }} fontSize={{ base: 30, sm: 30, md: 40, xl: 40 }}>›</Box>
        </GridItem>


        <GridItem 
            display="flex"
            borderTopRightRadius="10px"
            borderTopLeftRadius="25px"
            borderBottomLeftRadius="10px"
            borderBottomRightRadius="25px"
            _hover={{cursor: "pointer",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}
            boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
            pt={{ base: 4, sm: 3, md: 5, xl: 5 }}
            pb={{ base: 2, sm: 3, md: 5, xl: 5 }}
            pr={{ base: 2, sm: 2, md: 5, xl: 5 }}
            pl={{ base: 2, sm: 2, md: 5, xl: 5 }}
            >
            <Box 
                w={{ base: "30%", sm: "20%", md: "30%", xl: "30%" }} 
                >
                <Center>
                <Image 
                    boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" 
                    w={{ base: "50%", sm: "80%", md: "50%", xl: "50%" }} 
                    src='https://img.naukimg.com/logo_images/groups/v1/4642245.gif' 
                    alt='Egain'
                />
                </Center>
            </Box>
            <Box 
                display="flex"
                flexDirection="column"
                >
                <Text mb={1} fontWeight={500} fontSize={{ base: 15, sm: 15, md: 20, xl: 20 }}>Egain</Text>
                <Box 
                   display="flex"
                   mb={2}
                   >
                    <Text fontSize={{ base: 10, sm: 10, md: 15, xl: 15 }} >⭐4.0</Text>
                    <Text fontSize={{ base: 10, sm: 10, md: 15, xl: 15 }} borderLeft="1px" ml={2} borderColor="gray" pl={2}>48 reviews</Text>
                </Box>
                <Box display="flex">
                    <Box 
                        boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" 
                        borderRadius="5px" 
                        fontSize={{ base: 7, sm: 7, md: 10, xl: 10 }}  
                        mr={1} 
                        pl={1} 
                        pr={1}
                        >Carporate</Box>
                    <Box 
                        boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" 
                        borderRadius="5px" 
                        fontSize={{ base: 7, sm: 7, md: 10, xl: 10 }}  
                        mr={1} 
                        pl={1} 
                        pr={1}
                        >Software Product</Box>
                    <Box 
                        boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" 
                        borderRadius="5px" 
                        fontSize={{ base: 7, sm: 7, md: 10, xl: 10 }}  
                        mr={1} 
                        pl={1} 
                        pr={1}
                        >Founded: 1998</Box>
                </Box>
            </Box>
            <Box  ml={{ base: 7, sm: 5, md: 10, xl: 10 }} fontSize={{ base: 30, sm: 30, md: 40, xl: 40 }}>›</Box>
        </GridItem>


        <GridItem 
            display="flex"
            borderTopRightRadius="10px"
            borderTopLeftRadius="25px"
            borderBottomLeftRadius="10px"
            borderBottomRightRadius="25px"
            _hover={{cursor: "pointer",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}
            boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
            pt={{ base: 4, sm: 3, md: 5, xl: 5 }}
            pb={{ base: 2, sm: 3, md: 5, xl: 5 }}
            pr={{ base: 2, sm: 2, md: 5, xl: 5 }}
            pl={{ base: 2, sm: 2, md: 5, xl: 5 }}
            >
            <Box 
                w={{ base: "30%", sm: "20%", md: "30%", xl: "30%" }} 
                >
                <Center>
                <Image 
                    boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" 
                    w={{ base: "50%", sm: "80%", md: "50%", xl: "50%" }} 
                    src='https://img.naukimg.com/logo_images/groups/v1/1285014.gif' 
                    alt='Swiggy'
                />
                </Center>
            </Box>
            <Box 
                display="flex"
                flexDirection="column"
                >
                <Text mb={1} fontWeight={500} fontSize={{ base: 15, sm: 15, md: 20, xl: 20 }}>Swiggy</Text>
                <Box 
                   display="flex"
                   mb={2}
                   >
                    <Text fontSize={{ base: 10, sm: 10, md: 15, xl: 15 }} >⭐4.1</Text>
                    <Text fontSize={{ base: 10, sm: 10, md: 15, xl: 15 }} borderLeft="1px" ml={2} borderColor="gray" pl={2}>2.3K+ reviews</Text>
                </Box>
                <Box display="flex">
                    <Box 
                        boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" 
                        borderRadius="5px" 
                        fontSize={{ base: 7, sm: 7, md: 10, xl: 10 }}  
                        mr={1} 
                        pl={1} 
                        pr={1}
                        >Startup</Box>
                    <Box 
                        boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" 
                        borderRadius="5px" 
                        fontSize={{ base: 7, sm: 7, md: 10, xl: 10 }}  
                        mr={1} 
                        pl={1} 
                        pr={1}
                        >Internet</Box>
                    <Box 
                        boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" 
                        borderRadius="5px" 
                        fontSize={{ base: 7, sm: 7, md: 10, xl: 10 }}  
                        mr={1} 
                        pl={1} 
                        pr={1}
                        >Unicorn</Box>
                </Box>
            </Box>
            <Box  ml={{ base: 7, sm: 5, md: 10, xl: 10 }} fontSize={{ base: 30, sm: 30, md: 40, xl: 40 }}>›</Box>
        </GridItem>

        <GridItem 
            display="flex"
            borderTopRightRadius="10px"
            borderTopLeftRadius="25px"
            borderBottomLeftRadius="10px"
            borderBottomRightRadius="25px"
            _hover={{cursor: "pointer",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}
            boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
            pt={{ base: 4, sm: 3, md: 5, xl: 5 }}
            pb={{ base: 2, sm: 3, md: 5, xl: 5 }}
            pr={{ base: 2, sm: 2, md: 5, xl: 5 }}
            pl={{ base: 2, sm: 2, md: 5, xl: 5 }}
            >
            <Box 
                w={{ base: "30%", sm: "20%", md: "30%", xl: "30%" }} 
                >
                <Center>
                <Image 
                    boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" 
                    w={{ base: "50%", sm: "80%", md: "50%", xl: "50%" }} 
                    src='https://img.naukimg.com/logo_images/groups/v1/4633731.gif' 
                    alt='Tata Housing Development Company'
                />
                </Center>
            </Box>
            <Box 
                display="flex"
                flexDirection="column"
                >
                <Text mb={1} fontWeight={500} fontSize={{ base: 15, sm: 15, md: 20, xl: 20 }}>Tata Housing Development Company</Text>
                <Box 
                   display="flex"
                   mb={2}
                   >
                    <Text fontSize={{ base: 10, sm: 10, md: 15, xl: 15 }} >⭐4.2</Text>
                    <Text fontSize={{ base: 10, sm: 10, md: 15, xl: 15 }} borderLeft="1px" ml={2} borderColor="gray" pl={2}>158 reviews</Text>
                </Box>
                <Box display="flex">
                    <Box 
                        boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" 
                        borderRadius="5px" 
                        fontSize={{ base: 7, sm: 7, md: 10, xl: 10 }}  
                        mr={1} 
                        pl={1} 
                        pr={1}
                        >Carporate</Box>
                    <Box 
                        boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" 
                        borderRadius="5px" 
                        fontSize={{ base: 7, sm: 7, md: 10, xl: 10 }}  
                        mr={1} 
                        pl={1} 
                        pr={1}
                        >Real Estate</Box>
                    <Box 
                        boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" 
                        borderRadius="5px" 
                        fontSize={{ base: 7, sm: 7, md: 10, xl: 10 }}  
                        mr={1} 
                        pl={1} 
                        pr={1}
                        >Conglomerate</Box>
                </Box>
            </Box>
            <Box  ml={{ base: 7, sm: 5, md: 10, xl: 10 }} fontSize={{ base: 30, sm: 30, md: 40, xl: 40 }}>›</Box>
        </GridItem>

        <GridItem 
            display="flex"
            borderTopRightRadius="10px"
            borderTopLeftRadius="25px"
            borderBottomLeftRadius="10px"
            borderBottomRightRadius="25px"
            _hover={{cursor: "pointer",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}
            boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
            pt={{ base: 4, sm: 3, md: 5, xl: 5 }}
            pb={{ base: 2, sm: 3, md: 5, xl: 5 }}
            pr={{ base: 2, sm: 2, md: 5, xl: 5 }}
            pl={{ base: 2, sm: 2, md: 5, xl: 5 }}
            >
            <Box 
                w={{ base: "30%", sm: "20%", md: "30%", xl: "30%" }} 
                >
                <Center>
                <Image 
                    boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" 
                    w={{ base: "50%", sm: "80%", md: "50%", xl: "50%" }} 
                    src='https://img.naukimg.com/logo_images/groups/v1/17926.gif' 
                    alt='DLF'
                />
                </Center>
            </Box>
            <Box 
                display="flex"
                flexDirection="column"
                >
                <Text mb={1} fontWeight={500} fontSize={{ base: 15, sm: 15, md: 20, xl: 20 }}>DLF</Text>
                <Box 
                   display="flex"
                   mb={2}
                   >
                    <Text fontSize={{ base: 10, sm: 10, md: 15, xl: 15 }} >⭐4.1</Text>
                    <Text fontSize={{ base: 10, sm: 10, md: 15, xl: 15 }} borderLeft="1px" ml={2} borderColor="gray" pl={2}>2.2K+ reviews</Text>
                </Box>
                <Box display="flex">
                    <Box 
                        boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" 
                        borderRadius="5px" 
                        fontSize={{ base: 7, sm: 7, md: 10, xl: 10 }}  
                        mr={1} 
                        pl={1} 
                        pr={1}
                        >Carporate</Box>
                    <Box 
                        boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" 
                        borderRadius="5px" 
                        fontSize={{ base: 7, sm: 7, md: 10, xl: 10 }}  
                        mr={1} 
                        pl={1} 
                        pr={1}
                        >Engineering & Construction</Box>
                    <Box 
                        boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" 
                        borderRadius="5px" 
                        fontSize={{ base: 7, sm: 7, md: 10, xl: 10 }}  
                        mr={1} 
                        pl={1} 
                        pr={1}
                        >Founded: 1946</Box>
                </Box>
            </Box>
            <Box  ml={{ base: 7, sm: 5, md: 10, xl: 10 }} fontSize={{ base: 30, sm: 30, md: 40, xl: 40 }}>›</Box>
        </GridItem>

        <GridItem 
            display="flex"
            borderTopRightRadius="10px"
            borderTopLeftRadius="25px"
            borderBottomLeftRadius="10px"
            borderBottomRightRadius="25px"
            _hover={{cursor: "pointer",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}
            boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
            pt={{ base: 4, sm: 3, md: 5, xl: 5 }}
            pb={{ base: 2, sm: 3, md: 5, xl: 5 }}
            pr={{ base: 2, sm: 2, md: 5, xl: 5 }}
            pl={{ base: 2, sm: 2, md: 5, xl: 5 }}
            >
            <Box 
                w={{ base: "30%", sm: "20%", md: "30%", xl: "30%" }} 
                >
                <Center>
                <Image 
                    boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" 
                    w={{ base: "50%", sm: "80%", md: "50%", xl: "50%" }} 
                    src='https://img.naukimg.com/logo_images/groups/v1/303372.gif' 
                    alt='Shinhan Bank'
                />
                </Center>
            </Box>
            <Box 
                display="flex"
                flexDirection="column"
                >
                <Text mb={1} fontWeight={500} fontSize={{ base: 15, sm: 15, md: 20, xl: 20 }}>Shinhan Bank</Text>
                <Box 
                   display="flex"
                   mb={2}
                   >
                    <Text fontSize={{ base: 10, sm: 10, md: 15, xl: 15 }} >⭐3.1</Text>
                    <Text fontSize={{ base: 10, sm: 10, md: 15, xl: 15 }} borderLeft="1px" ml={2} borderColor="gray" pl={2}>61 reviews</Text>
                </Box>
                <Box display="flex">
                    <Box 
                        boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" 
                        borderRadius="5px" 
                        fontSize={{ base: 7, sm: 7, md: 10, xl: 10 }}  
                        mr={1} 
                        pl={1} 
                        pr={1}
                        >Foreign MNC</Box>
                    <Box 
                        boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" 
                        borderRadius="5px" 
                        fontSize={{ base: 7, sm: 7, md: 10, xl: 10 }}  
                        mr={1} 
                        pl={1} 
                        pr={1}
                        >Banking</Box>
                    <Box 
                        boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" 
                        borderRadius="5px" 
                        fontSize={{ base: 7, sm: 7, md: 10, xl: 10 }}  
                        mr={1} 
                        pl={1} 
                        pr={1}
                        >10001-50000</Box>
                </Box>
            </Box>
            <Box  ml={{ base: 7, sm: 5, md: 10, xl: 10 }} fontSize={{ base: 30, sm: 30, md: 40, xl: 40 }}>›</Box>
        </GridItem>


        <GridItem 
            display="flex"
            borderTopRightRadius="10px"
            borderTopLeftRadius="25px"
            borderBottomLeftRadius="10px"
            borderBottomRightRadius="25px"
            _hover={{cursor: "pointer",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}
            boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
            pt={{ base: 4, sm: 3, md: 5, xl: 5 }}
            pb={{ base: 2, sm: 3, md: 5, xl: 5 }}
            pr={{ base: 2, sm: 2, md: 5, xl: 5 }}
            pl={{ base: 2, sm: 2, md: 5, xl: 5 }}
            >
            <Box 
                w={{ base: "30%", sm: "20%", md: "30%", xl: "30%" }} 
                >
                <Center>
                <Image 
                    boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" 
                    w={{ base: "50%", sm: "80%", md: "50%", xl: "50%" }} 
                    src='https://img.naukimg.com/logo_images/groups/v1/4589591.gif' 
                    alt='Dainic Bhaskar Group'
                />
                </Center>
            </Box>
            <Box 
                display="flex"
                flexDirection="column"
                >
                <Text mb={1} fontWeight={500} fontSize={{ base: 15, sm: 15, md: 20, xl: 20 }}>Dainic Bhaskar Group</Text>
                <Box 
                   display="flex"
                   mb={2}
                   >
                    <Text fontSize={{ base: 10, sm: 10, md: 15, xl: 15 }} >⭐4.1</Text>
                    <Text fontSize={{ base: 10, sm: 10, md: 15, xl: 15 }} borderLeft="1px" ml={2} borderColor="gray" pl={2}>1K+ reviews</Text>
                </Box>
                <Box display="flex">
                    <Box 
                        boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" 
                        borderRadius="5px" 
                        fontSize={{ base: 7, sm: 7, md: 10, xl: 10 }}  
                        mr={1} 
                        pl={1} 
                        pr={1}
                        >Carporate</Box>
                    <Box 
                        boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" 
                        borderRadius="5px" 
                        fontSize={{ base: 7, sm: 7, md: 10, xl: 10 }}  
                        mr={1} 
                        pl={1} 
                        pr={1}
                        >Printing & Publishing</Box>
                    <Box 
                        boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" 
                        borderRadius="5px" 
                        fontSize={{ base: 7, sm: 7, md: 10, xl: 10 }}  
                        mr={1} 
                        pl={1} 
                        pr={1}
                        >Founded: 1958</Box>
                </Box>
            </Box>
            <Box  ml={{ base: 7, sm: 5, md: 10, xl: 10 }} fontSize={{ base: 30, sm: 30, md: 40, xl: 40 }}>›</Box>
        </GridItem>


        <GridItem 
            display="flex"
            borderTopRightRadius="10px"
            borderTopLeftRadius="25px"
            borderBottomLeftRadius="10px"
            borderBottomRightRadius="25px"
            _hover={{cursor: "pointer",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}
            boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
            pt={{ base: 4, sm: 3, md: 5, xl: 5 }}
            pb={{ base: 2, sm: 3, md: 5, xl: 5 }}
            pr={{ base: 2, sm: 2, md: 5, xl: 5 }}
            pl={{ base: 2, sm: 2, md: 5, xl: 5 }}
            >
            <Box 
                w={{ base: "30%", sm: "20%", md: "30%", xl: "30%" }} 
                >
                <Center>
                <Image 
                    boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" 
                    w={{ base: "50%", sm: "80%", md: "50%", xl: "50%" }} 
                    src='https://img.naukimg.com/logo_images/groups/v1/245074.gif' 
                    alt='Forbes Marshall'
                />
                </Center>
            </Box>
            <Box 
                display="flex"
                flexDirection="column"
                >
                <Text mb={1} fontWeight={500} fontSize={{ base: 15, sm: 15, md: 20, xl: 20 }}>Forbes Marshall</Text>
                <Box 
                   display="flex"
                   mb={2}
                   >
                    <Text fontSize={{ base: 10, sm: 10, md: 15, xl: 15 }} >⭐4.2</Text>
                    <Text fontSize={{ base: 10, sm: 10, md: 15, xl: 15 }} borderLeft="1px" ml={2} borderColor="gray" pl={2}>344 reviews</Text>
                </Box>
                <Box display="flex">
                    <Box 
                        boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" 
                        borderRadius="5px" 
                        fontSize={{ base: 7, sm: 7, md: 10, xl: 10 }}  
                        mr={1} 
                        pl={1} 
                        pr={1}
                        >Indian MNC</Box>
                    <Box 
                        boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" 
                        borderRadius="5px" 
                        fontSize={{ base: 7, sm: 7, md: 10, xl: 10 }}  
                        mr={1} 
                        pl={1} 
                        pr={1}
                        >Industrial Equipments</Box>
                    <Box 
                        boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" 
                        borderRadius="5px" 
                        fontSize={{ base: 7, sm: 7, md: 10, xl: 10 }}  
                        mr={1} 
                        pl={1} 
                        pr={1}
                        >Machinery</Box>
                </Box>
            </Box>
            <Box  ml={{ base: 7, sm: 5, md: 10, xl: 10 }} fontSize={{ base: 30, sm: 30, md: 40, xl: 40 }}>›</Box>
        </GridItem>


        <GridItem 
            display="flex"
            borderTopRightRadius="10px"
            borderTopLeftRadius="25px"
            borderBottomLeftRadius="10px"
            borderBottomRightRadius="25px"
            _hover={{cursor: "pointer",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}
            boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
            pt={{ base: 4, sm: 3, md: 5, xl: 5 }}
            pb={{ base: 2, sm: 3, md: 5, xl: 5 }}
            pr={{ base: 2, sm: 2, md: 5, xl: 5 }}
            pl={{ base: 2, sm: 2, md: 5, xl: 5 }}
            >
            <Box 
                w={{ base: "30%", sm: "20%", md: "30%", xl: "30%" }} 
                >
                <Center>
                <Image 
                    boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" 
                    w={{ base: "50%", sm: "80%", md: "50%", xl: "50%" }} 
                    src='https://img.naukimg.com/logo_images/groups/v1/3548390.gif' 
                    alt='IHS Markit'
                />
                </Center>
            </Box>
            <Box 
                display="flex"
                flexDirection="column"
                >
                <Text mb={1} fontWeight={500} fontSize={{ base: 15, sm: 15, md: 20, xl: 20 }}>IHS Markit</Text>
                <Box 
                   display="flex"
                   mb={2}
                   >
                    <Text fontSize={{ base: 10, sm: 10, md: 15, xl: 15 }} >⭐4.1</Text>
                    <Text fontSize={{ base: 10, sm: 10, md: 15, xl: 15 }} borderLeft="1px" ml={2} borderColor="gray" pl={2}>526 reviews</Text>
                </Box>
                <Box display="flex">
                    <Box 
                        boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" 
                        borderRadius="5px" 
                        fontSize={{ base: 7, sm: 7, md: 10, xl: 10 }}  
                        mr={1} 
                        pl={1} 
                        pr={1}
                        >Foreign MNC</Box>
                    <Box 
                        boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" 
                        borderRadius="5px" 
                        fontSize={{ base: 7, sm: 7, md: 10, xl: 10 }}  
                        mr={1} 
                        pl={1} 
                        pr={1}
                        >Analytics</Box>
                    <Box 
                        boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" 
                        borderRadius="5px" 
                        fontSize={{ base: 7, sm: 7, md: 10, xl: 10 }}  
                        mr={1} 
                        pl={1} 
                        pr={1}
                        >KPO/Research</Box>
                </Box>
            </Box>
            <Box  ml={{ base: 7, sm: 5, md: 10, xl: 10 }} fontSize={{ base: 30, sm: 30, md: 40, xl: 40 }}>›</Box>
        </GridItem>


        <GridItem 
            display="flex"
            borderTopRightRadius="10px"
            borderTopLeftRadius="25px"
            borderBottomLeftRadius="10px"
            borderBottomRightRadius="25px"
            _hover={{cursor: "pointer",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}
            boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
            pt={{ base: 4, sm: 3, md: 5, xl: 5 }}
            pb={{ base: 2, sm: 3, md: 5, xl: 5 }}
            pr={{ base: 2, sm: 2, md: 5, xl: 5 }}
            pl={{ base: 2, sm: 2, md: 5, xl: 5 }}
            >
            <Box 
                w={{ base: "30%", sm: "20%", md: "30%", xl: "30%" }} 
                >
                <Center>
                <Image 
                    boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" 
                    w={{ base: "50%", sm: "80%", md: "50%", xl: "50%" }} 
                    src='https://img.naukimg.com/logo_images/groups/v1/1320972.gif' 
                    alt='Paperpedia'
                />
                </Center>
            </Box>
            <Box 
                display="flex"
                flexDirection="column"
                >
                <Text mb={1} fontWeight={500} fontSize={{ base: 15, sm: 15, md: 20, xl: 20 }}>Paperpedia</Text>
                <Box 
                   display="flex"
                   mb={2}
                   >
                    <Text fontSize={{ base: 10, sm: 10, md: 15, xl: 15 }} >⭐2.8</Text>
                    <Text fontSize={{ base: 10, sm: 10, md: 15, xl: 15 }} borderLeft="1px" ml={2} borderColor="gray" pl={2}>58 reviews</Text>
                </Box>
                <Box display="flex">
                    <Box 
                        boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" 
                        borderRadius="5px" 
                        fontSize={{ base: 7, sm: 7, md: 10, xl: 10 }}  
                        mr={1} 
                        pl={1} 
                        pr={1}
                        >e-Learning/Ed Tech</Box>
                    <Box 
                        boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" 
                        borderRadius="5px" 
                        fontSize={{ base: 7, sm: 7, md: 10, xl: 10 }}  
                        mr={1} 
                        pl={1} 
                        pr={1}
                        >51-200 emp.</Box>
                    <Box 
                        boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" 
                        borderRadius="5px" 
                        fontSize={{ base: 7, sm: 7, md: 10, xl: 10 }}  
                        mr={1} 
                        pl={1} 
                        pr={1}
                        >Founded: 2015</Box>
                </Box>
            </Box>
            <Box  ml={{ base: 7, sm: 5, md: 10, xl: 10 }} fontSize={{ base: 30, sm: 30, md: 40, xl: 40 }}>›</Box>
        </GridItem>


        <GridItem 
            display="flex"
            borderTopRightRadius="10px"
            borderTopLeftRadius="25px"
            borderBottomLeftRadius="10px"
            borderBottomRightRadius="25px"
            _hover={{cursor: "pointer",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}
            boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
            pt={{ base: 4, sm: 3, md: 5, xl: 5 }}
            pb={{ base: 2, sm: 3, md: 5, xl: 5 }}
            pr={{ base: 2, sm: 2, md: 5, xl: 5 }}
            pl={{ base: 2, sm: 2, md: 5, xl: 5 }}
            >
            <Box 
                w={{ base: "30%", sm: "20%", md: "30%", xl: "30%" }} 
                >
                <Center>
                <Image 
                    boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" 
                    w={{ base: "50%", sm: "80%", md: "50%", xl: "50%" }} 
                    src='https://img.naukimg.com/logo_images/groups/v1/4078624.gif' 
                    alt='Outsystems'
                />
                </Center>
            </Box>
            <Box 
                display="flex"
                flexDirection="column"
                >
                <Text mb={1} fontWeight={500} fontSize={{ base: 15, sm: 15, md: 20, xl: 20 }}>Outsystems</Text>
                <Box 
                   display="flex"
                   mb={2}
                   >
                    <Text fontSize={{ base: 10, sm: 10, md: 15, xl: 15 }} >⭐1.1</Text>
                    <Text fontSize={{ base: 10, sm: 10, md: 15, xl: 15 }} borderLeft="1px" ml={2} borderColor="gray" pl={2}>2 reviews</Text>
                </Box>
                <Box display="flex">
                    <Box 
                        boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" 
                        borderRadius="5px" 
                        fontSize={{ base: 7, sm: 7, md: 10, xl: 10 }}  
                        mr={1} 
                        pl={1} 
                        pr={1}
                        >Foreign MNC</Box>
                    <Box 
                        boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" 
                        borderRadius="5px" 
                        fontSize={{ base: 7, sm: 7, md: 10, xl: 10 }}  
                        mr={1} 
                        pl={1} 
                        pr={1}
                        >Software Product</Box>
                    <Box 
                        boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" 
                        borderRadius="5px" 
                        fontSize={{ base: 7, sm: 7, md: 10, xl: 10 }}  
                        mr={1} 
                        pl={1} 
                        pr={1}
                        >Founded: 2001</Box>
                </Box>
            </Box>
            <Box  ml={{ base: 7, sm: 5, md: 10, xl: 10 }} fontSize={{ base: 30, sm: 30, md: 40, xl: 40 }}>›</Box>
        </GridItem>


        <GridItem 
            display="flex"
            borderTopRightRadius="10px"
            borderTopLeftRadius="25px"
            borderBottomLeftRadius="10px"
            borderBottomRightRadius="25px"
            _hover={{cursor: "pointer",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}
            boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
            pt={{ base: 4, sm: 3, md: 5, xl: 5 }}
            pb={{ base: 2, sm: 3, md: 5, xl: 5 }}
            pr={{ base: 2, sm: 2, md: 5, xl: 5 }}
            pl={{ base: 2, sm: 2, md: 5, xl: 5 }}
            >
            <Box 
                w={{ base: "30%", sm: "20%", md: "30%", xl: "30%" }} 
                >
                <Center>
                <Image 
                    boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" 
                    w={{ base: "50%", sm: "80%", md: "50%", xl: "50%" }} 
                    src='https://img.naukimg.com/logo_images/groups/v1/44512.gif' 
                    alt='ICICI Bank'
                />
                </Center>
            </Box>
            <Box 
                display="flex"
                flexDirection="column"
                >
                <Text mb={1} fontWeight={500} fontSize={{ base: 15, sm: 15, md: 20, xl: 20 }}>ICICI Bank</Text>
                <Box 
                   display="flex"
                   mb={2}
                   >
                    <Text fontSize={{ base: 10, sm: 10, md: 15, xl: 15 }} >⭐4.0</Text>
                    <Text fontSize={{ base: 10, sm: 10, md: 15, xl: 15 }} borderLeft="1px" ml={2} borderColor="gray" pl={2}>34.3K+ reviews</Text>
                </Box>
                <Box display="flex">
                    <Box 
                        boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" 
                        borderRadius="5px" 
                        fontSize={{ base: 7, sm: 7, md: 10, xl: 10 }}  
                        mr={1} 
                        pl={1} 
                        pr={1}
                        >Indian MNC</Box>
                    <Box 
                        boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" 
                        borderRadius="5px" 
                        fontSize={{ base: 7, sm: 7, md: 10, xl: 10 }}  
                        mr={1} 
                        pl={1} 
                        pr={1}
                        >Banking</Box>
                    <Box 
                        boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" 
                        borderRadius="5px" 
                        fontSize={{ base: 7, sm: 7, md: 10, xl: 10 }}  
                        mr={1} 
                        pl={1} 
                        pr={1}
                        >Founded: 1994</Box>
                </Box>
            </Box>
            <Box  ml={{ base: 7, sm: 5, md: 10, xl: 10 }} fontSize={{ base: 30, sm: 30, md: 40, xl: 40 }}>›</Box>
        </GridItem>

        <GridItem 
            display="flex"
            borderTopRightRadius="10px"
            borderTopLeftRadius="25px"
            borderBottomLeftRadius="10px"
            borderBottomRightRadius="25px"
            _hover={{cursor: "pointer",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}
            boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
            pt={{ base: 4, sm: 3, md: 5, xl: 5 }}
            pb={{ base: 2, sm: 3, md: 5, xl: 5 }}
            pr={{ base: 2, sm: 2, md: 5, xl: 5 }}
            pl={{ base: 2, sm: 2, md: 5, xl: 5 }}
            >
            <Box 
                w={{ base: "30%", sm: "20%", md: "30%", xl: "30%" }} 
                >
                <Center>
                <Image 
                    boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" 
                    w={{ base: "50%", sm: "80%", md: "50%", xl: "50%" }} 
                    src='https://img.naukimg.com/logo_images/groups/v1/17926.gif' 
                    alt='DLF'
                />
                </Center>
            </Box>
            <Box 
                display="flex"
                flexDirection="column"
                >
                <Text mb={1} fontWeight={500} fontSize={{ base: 15, sm: 15, md: 20, xl: 20 }}>DLF</Text>
                <Box 
                   display="flex"
                   mb={2}
                   >
                    <Text fontSize={{ base: 10, sm: 10, md: 15, xl: 15 }} >⭐4.1</Text>
                    <Text fontSize={{ base: 10, sm: 10, md: 15, xl: 15 }} borderLeft="1px" ml={2} borderColor="gray" pl={2}>2.2K+ reviews</Text>
                </Box>
                <Box display="flex">
                    <Box 
                        boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" 
                        borderRadius="5px" 
                        fontSize={{ base: 7, sm: 7, md: 10, xl: 10 }}  
                        mr={1} 
                        pl={1} 
                        pr={1}
                        >Carporate</Box>
                    <Box 
                        boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" 
                        borderRadius="5px" 
                        fontSize={{ base: 7, sm: 7, md: 10, xl: 10 }}  
                        mr={1} 
                        pl={1} 
                        pr={1}
                        >Engineering & Construction</Box>
                    <Box 
                        boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" 
                        borderRadius="5px" 
                        fontSize={{ base: 7, sm: 7, md: 10, xl: 10 }}  
                        mr={1} 
                        pl={1} 
                        pr={1}
                        >Founded: 1946</Box>
                </Box>
            </Box>
            <Box  ml={{ base: 7, sm: 5, md: 10, xl: 10 }} fontSize={{ base: 30, sm: 30, md: 40, xl: 40 }}>›</Box>
        </GridItem>

        <GridItem 
            display="flex"
            borderTopRightRadius="10px"
            borderTopLeftRadius="25px"
            borderBottomLeftRadius="10px"
            borderBottomRightRadius="25px"
            _hover={{cursor: "pointer",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}
            boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
            pt={{ base: 4, sm: 3, md: 5, xl: 5 }}
            pb={{ base: 2, sm: 3, md: 5, xl: 5 }}
            pr={{ base: 2, sm: 2, md: 5, xl: 5 }}
            pl={{ base: 2, sm: 2, md: 5, xl: 5 }}
            >
            <Box 
                w={{ base: "30%", sm: "20%", md: "30%", xl: "30%" }} 
                >
                <Center>
                <Image 
                    boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" 
                    w={{ base: "50%", sm: "80%", md: "50%", xl: "50%" }} 
                    src='https://img.naukimg.com/logo_images/groups/v1/303372.gif' 
                    alt='Shinhan Bank'
                />
                </Center>
            </Box>
            <Box 
                display="flex"
                flexDirection="column"
                >
                <Text mb={1} fontWeight={500} fontSize={{ base: 15, sm: 15, md: 20, xl: 20 }}>Shinhan Bank</Text>
                <Box 
                   display="flex"
                   mb={2}
                   >
                    <Text fontSize={{ base: 10, sm: 10, md: 15, xl: 15 }} >⭐3.1</Text>
                    <Text fontSize={{ base: 10, sm: 10, md: 15, xl: 15 }} borderLeft="1px" ml={2} borderColor="gray" pl={2}>61 reviews</Text>
                </Box>
                <Box display="flex">
                    <Box 
                        boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" 
                        borderRadius="5px" 
                        fontSize={{ base: 7, sm: 7, md: 10, xl: 10 }}  
                        mr={1} 
                        pl={1} 
                        pr={1}
                        >Foreign MNC</Box>
                    <Box 
                        boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" 
                        borderRadius="5px" 
                        fontSize={{ base: 7, sm: 7, md: 10, xl: 10 }}  
                        mr={1} 
                        pl={1} 
                        pr={1}
                        >Banking</Box>
                    <Box 
                        boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" 
                        borderRadius="5px" 
                        fontSize={{ base: 7, sm: 7, md: 10, xl: 10 }}  
                        mr={1} 
                        pl={1} 
                        pr={1}
                        >10001-50000</Box>
                </Box>
            </Box>
            <Box  ml={{ base: 7, sm: 5, md: 10, xl: 10 }} fontSize={{ base: 30, sm: 30, md: 40, xl: 40 }}>›</Box>
        </GridItem>


        <GridItem 
            display="flex"
            borderTopRightRadius="10px"
            borderTopLeftRadius="25px"
            borderBottomLeftRadius="10px"
            borderBottomRightRadius="25px"
            _hover={{cursor: "pointer",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}
            boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
            pt={{ base: 4, sm: 3, md: 5, xl: 5 }}
            pb={{ base: 2, sm: 3, md: 5, xl: 5 }}
            pr={{ base: 2, sm: 2, md: 5, xl: 5 }}
            pl={{ base: 2, sm: 2, md: 5, xl: 5 }}
            >
            <Box 
                w={{ base: "30%", sm: "20%", md: "30%", xl: "30%" }} 
                >
                <Center>
                <Image 
                    boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" 
                    w={{ base: "50%", sm: "80%", md: "50%", xl: "50%" }} 
                    src='https://img.naukimg.com/logo_images/groups/v1/4589591.gif' 
                    alt='Dainic Bhaskar Group'
                />
                </Center>
            </Box>
            <Box 
                display="flex"
                flexDirection="column"
                >
                <Text mb={1} fontWeight={500} fontSize={{ base: 15, sm: 15, md: 20, xl: 20 }}>Dainic Bhaskar Group</Text>
                <Box 
                   display="flex"
                   mb={2}
                   >
                    <Text fontSize={{ base: 10, sm: 10, md: 15, xl: 15 }} >⭐4.1</Text>
                    <Text fontSize={{ base: 10, sm: 10, md: 15, xl: 15 }} borderLeft="1px" ml={2} borderColor="gray" pl={2}>1K+ reviews</Text>
                </Box>
                <Box display="flex">
                    <Box 
                        boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" 
                        borderRadius="5px" 
                        fontSize={{ base: 7, sm: 7, md: 10, xl: 10 }}  
                        mr={1} 
                        pl={1} 
                        pr={1}
                        >Carporate</Box>
                    <Box 
                        boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" 
                        borderRadius="5px" 
                        fontSize={{ base: 7, sm: 7, md: 10, xl: 10 }}  
                        mr={1} 
                        pl={1} 
                        pr={1}
                        >Printing & Publishing</Box>
                    <Box 
                        boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" 
                        borderRadius="5px" 
                        fontSize={{ base: 7, sm: 7, md: 10, xl: 10 }}  
                        mr={1} 
                        pl={1} 
                        pr={1}
                        >Founded: 1958</Box>
                </Box>
            </Box>
            <Box  ml={{ base: 7, sm: 5, md: 10, xl: 10 }} fontSize={{ base: 30, sm: 30, md: 40, xl: 40 }}>›</Box>
        </GridItem>

        
      </Grid>
    </>
  );
};
