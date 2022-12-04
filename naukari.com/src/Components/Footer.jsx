import { 
    Box,
    Image,
    Text,

} from "@chakra-ui/react";


function Footer(){
    return (
        
        <Box>
            <Box 
                pt={10}
                pb="9%"
                w="full"
                >
                <Box 
                    display="flex"
                    flexDirection={{ base: "column", sm: "column", md: "row", xl: "row"}}
                    gap={1}
                    >
                    <Box 
                       w={{ base: "90%", sm: "90%", md: "20%", xl: "20%"}}
                       display="flex"
                       justifyContent="space-between"
                       m="auto"
                       flexDirection={{ base: "row", sm: "row", md: "column", xl: "column"}}
                    >
                        <Box>
                            <Image 
                                w={{ base: "90%", sm: "90%", md: "full", xl: "full"}} 
                                m="auto"
                                src="https://static.naukimg.com/s/4/100/i/naukri_Logo.png" alt="logo"/>
                        </Box>
                        <Box>
                            <Box 
                                mt={{ base: 10, sm: 3, md: 10, xl: 10 }}
                                mb={{ base: 4, sm: 5, md: 1, xl: 1 }}
                                >
                                <Text color="#7f7e82">Connect with us</Text>
                            </Box>
                            <Box 
                                display="flex"
                                flexDirection="row"
                                gap={2}
                                mt={1}
                                >
                                <Image _hover={{cursor: "pointer"}} src="https://static.naukimg.com/s/0/0/i/new-homepage/facebook.svg"alt="facebook"/>
                                <Image _hover={{cursor: "pointer"}} src="https://static.naukimg.com/s/0/0/i/new-homepage/instagram.svg"alt="instagram"/>
                                <Image _hover={{cursor: "pointer"}} src="https://static.naukimg.com/s/0/0/i/new-homepage/twitter.svg"alt="twitter"/>
                                <Image _hover={{cursor: "pointer"}} src="https://static.naukimg.com/s/0/0/i/new-homepage/linkedin.svg" alt="linkedIn"/>
                            </Box>
                        </Box>
                    </Box>
                    <Box 
                        w={{ base: "full", sm: "85%", md: "50%", xl: "50%"}}
                        display="grid"
                        m="auto"
                        gridTemplateColumns={{ base: "repeat(1,1fr)", sm: "repeat(3,1fr)", md: "repeat(3,1fr)", xl: "repeat(3,1fr)"}}
                        >
                        <Box p={5} fontSize={17} >
                            <Text _hover={{color:"blue", cursor: "pointer"}} lineHeight={2} color="#3f3e40">About us</Text>
                            <Text _hover={{color:"blue", cursor: "pointer"}} lineHeight={2} color="#3f3e40">Careers</Text>
                            <Text _hover={{color:"blue", cursor: "pointer"}} lineHeight={2} color="#3f3e40">Employer home</Text>
                            <Text _hover={{color:"blue", cursor: "pointer"}} lineHeight={2} color="#3f3e40">Sitemap</Text>
                        </Box>
                        <Box p={5} fontSize={17} >
                            <Text _hover={{color:"blue", cursor: "pointer"}} lineHeight={2} color="#3f3e40">Help center</Text>
                            <Text _hover={{color:"blue", cursor: "pointer"}} lineHeight={2} color="#3f3e40">Summons/Notices</Text>
                            <Text _hover={{color:"blue", cursor: "pointer"}} lineHeight={2} color="#3f3e40">Grievances</Text>
                            <Text _hover={{color:"blue", cursor: "pointer"}} lineHeight={2} color="#3f3e40">Report issue</Text>
                        </Box>
                        <Box p={5} fontSize={17} >
                            <Text _hover={{color:"blue", cursor: "pointer"}} lineHeight={2} color="#3f3e40">Privacy policy</Text>
                            <Text _hover={{color:"blue", cursor: "pointer"}} lineHeight={2} color="#3f3e40">Terms & conditions</Text>
                            <Text _hover={{color:"blue", cursor: "pointer"}} lineHeight={2} color="#3f3e40">Fraud alert</Text>
                            <Text _hover={{color:"blue", cursor: "pointer"}} lineHeight={2} color="#3f3e40">Trust & safety</Text>
                        </Box>
                    </Box>

                    <Box 
                        w={{ base: "90%", sm: "90%", md: "30%", xl: "full"}} 
                        m="auto"
                        >
                        <Box 
                            m={2}
                            p={7}
                            borderRadius="10px"
                            boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"
                            >
                            <Text 
                                fontSize={{ base: 17, sm: 20, md: 20, xl: 20 }}
                                fontWeight="bold"
                                >
                                    Apply on the go</Text>
                            <Text 
                                fontSize={{ base: 15, sm: 15, md: 15, xl: 15 }}
                                w={300}
                                >
                                    Get real-time job updates on our App</Text>
                            <Box
                                display="flex" 
                                gap={2}
                                mt={3}
                                flexDirection="row"
                                >
                                <Image 
                                    _hover={{cursor: "pointer"}}
                                    boxShadow="rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset" 
                                    borderRadius="5px"
                                    w={{ base: "25%", sm: "20%", md: "45%", xl: "50%" }} 
                                    src="https://static.naukimg.com/s/0/0/i/download-app-link/Gplay.png" alt="googleplay"/>
                                <Image 
                                    _hover={{cursor: "pointer"}}
                                    boxShadow="rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset" 
                                    borderRadius="5px"
                                    w={{ base: "25%", sm: "20%", md: "45%", xl: "50%" }} 
                                    src="https://static.naukimg.com/s/0/0/i/download-app-link/Appstore.png" alt="appstore"/>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
                




{/* Second part of footer  */}

            <Box 
                display="flex" 
                flexDirection={{ base: "column", sm: "column", md: "row", xl: "row"}}
                pt={3}
                pb={3}
                boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"
                >


                 <Box display="flex" pt={3} pb={3}>
                    <Box 
                        w={{ base: 350, sm: 170, md: 150, xl: 150}}
                        pt={1} 
                        pb={1}>
                        <Image 
                            w="96%"
                            src="https://static.naukimg.com/s/0/0/i/new-homepage/infoedge-logo.svg" alt="infoedge-logo"/>
                    </Box>
                    <Box 
                        p={{ base: 2, sm: 3, md: 1, xl: 1}}
                        >
                        <Text 
                            w={{ base: "full", sm: "full", md: 340, xl: 340}}
                            pr={2}
                            fontSize={{ base: 15, sm: 15, md: 13, xl: 13 }}
                            >
                            All trademarks are the property of their respective owners All rights reserved © 2022 Info Edge (India) Ltd.
                        </Text>
                    </Box>
                 </Box>



                 <Box 
                    display="flex" 
                    flexDirection={{ base: "column", sm: "column", md: "row", xl: "row"}}
                    pt={3} 
                    pb={3}
                    >
                    <Box 
                        pt={1} 
                        pb={1}
                        >
                        <Text p={2}>
                            Our businesses
                        </Text>
                    </Box>
                    <Box 
                        display="grid" 
                        gridTemplateColumns={{ base: "repeat(2,1fr)", sm: "repeat(4,1fr)", md: "repeat(4,1fr)", xl: "repeat(4,1fr)" }}
                        gap={1}
                        pt={2}
                        >
                        <Image 
                            src="https://static.naukimg.com/s/0/0/i/new-homepage/footer-logos/jeevansathi.png" 
                            alt="jeevansathi"
                            />
                        <Image 
                            src="https://static.naukimg.com/s/0/0/i/new-homepage/footer-logos/ng.png" 
                            alt="/ng.png"
                            />
                        <Image 
                            src="https://static.naukimg.com/s/0/0/i/new-homepage/footer-logos/firstNaukri.png" 
                            alt="firstNaukri"
                            />
                        <Image 
                            src="https://static.naukimg.com/s/0/0/i/new-homepage/footer-logos/shiksha.png" 
                            alt="shiksha"
                            />
                    </Box>
                 </Box>


            </Box>
        </Box>
        
    )
}

export default Footer;
