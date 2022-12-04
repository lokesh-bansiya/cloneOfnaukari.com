import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from "react-responsive-carousel";
import { 
    Box,
    Text,
    Button,
} from "@chakra-ui/react";

export const SecondBox = () => {
  return (
<Carousel>
<Box 
    display="grid" 
    gap={1}
    gridTemplateColumns={{
        base: "repeat(1, 1fr)", 
        sm: "repeat(3, 1fr)", 
        md: "repeat(3, 1fr)", 
        lg: "repeat(3, 1fr)"
    }}
        style={{
          marginTop: "2%",
          marginBottom: "2%",
        }}
      >
        {/* first inner box */}

        <Box
            _hover={{cursor: "pointer",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}
            boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
            padding="8%"
            margin="3%"
            marginRight="5%"
            marginLeft="5%"
            borderTopRightRadius="10px"
            borderTopLeftRadius="25px"
            borderBottomLeftRadius="10px"
            borderBottomRightRadius="25px"
            textAlign="left"
        >
           <Text 
                mt={{ base: 1, sm: 2, md: 4, xl: 4 }}
                fontSize={{ base: 12, sm: 10, md: 13, xl: 13 }}
                >
                Data Science
            </Text>
            <Text 
                mt={{ base: 1, sm: 2, md: 2, xl: 2 }}
                fontWeight={600} 
                fontSize={{ base: 17, sm: 18, md: 18, xl: 18 }}>Artificial Intelligence</Text>
            <Text 
                mt={{ base: 1, sm: 2, md: 3, xl: 5 }}
                fontSize={{ base: 13, sm: 13, md: 15, xl: 15 }}
                color="#3234b3">
                    Learn in demand AI skills like Deep learning, NLP, Computer vision and more for career growth across different roles.
            </Text>
          <Box 
            mt={{ base: 2, sm: 3, md: 7, xl: 5 }}
            display="grid" 
            gridTemplateColumns={{ 
            base: "repeat(1,1fr)", 
            sm: "repeat(1,1fr)", 
            md: "repeat(2,1fr)", 
            xl: "repeat(2,1fr)",
            }}
            gap={2}
            >
            <Button size={{ base: "sm", sm: "sm", md: "sm", xl: "sm"}} fontSize={{ base: 1, sm: 10, md: 15, xl: 15 }}>600 courses</Button>
            <Button size={{ base: "sm", sm: "sm", md: "sm", xl: "sm"}} fontSize={{ base: 1, sm: 10, md: 15, xl: 15 }}>28 providers</Button>
          </Box>
        </Box>
        {/* second inner box */}

        <Box
          _hover={{cursor: "pointer",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}
          boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
          padding="8%"
          margin="3%"
          marginRight="5%"
          marginLeft="5%"
          borderTopRightRadius="10px"
          borderTopLeftRadius="25px"
          borderBottomLeftRadius="10px"
          borderBottomRightRadius="25px"
          textAlign="left"
      >
          <Text 
                mt={{ base: 1, sm: 2, md: 4, xl: 4 }}
                fontSize={{ base: 12, sm: 10, md: 13, xl: 13 }}
                >
                Cloud Technologies
            </Text>
            <Text 
                mt={{ base: 1, sm: 2, md: 2, xl: 2 }}
                fontWeight={600} 
                fontSize={{ base: 17, sm: 18, md: 18, xl: 18 }}>AWS</Text>
            <Text 
                mt={{ base: 1, sm: 2, md: 3, xl: 5 }}
                fontSize={{ base: 13, sm: 13, md: 15, xl: 15 }}
                color="#3234b3">
                    Get certified for high demand cloud computing skills for Cloud Practitioner, Architect, Developer, and Operations roles.
            </Text>
          <Box 
            mt={{ base: 2, sm: 3, md: 7, xl: 5 }}
            display="grid" 
            gridTemplateColumns={{ 
            base: "repeat(1,1fr)", 
            sm: "repeat(1,1fr)", 
            md: "repeat(2,1fr)", 
            xl: "repeat(2,1fr)",
            }}
            gap={2}
            >
            <Button size={{ base: "sm", sm: "sm", md: "sm", xl: "sm"}} fontSize={{ base: 1, sm: 10, md: 15, xl: 15 }}>800 courses</Button>
            <Button size={{ base: "sm", sm: "sm", md: "sm", xl: "sm"}} fontSize={{ base: 1, sm: 10, md: 15, xl: 15 }}>16 providers</Button>
          </Box>
        </Box>

        {/* third inner box */}

        <Box
          _hover={{cursor: "pointer",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}
          boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
          padding="8%"
          margin="3%"
          marginRight="5%"
          marginLeft="5%"
          borderTopRightRadius="10px"
          borderTopLeftRadius="25px"
          borderBottomLeftRadius="10px"
          borderBottomRightRadius="25px"
          textAlign="left"
      >
            <Text 
                mt={{ base: 1, sm: 2, md: 4, xl: 4 }}
                fontSize={{ base: 12, sm: 10, md: 13, xl: 13 }}
                >
                Programming
            </Text>
            <Text 
                mt={{ base: 1, sm: 2, md: 2, xl: 2 }}
                fontWeight={600} 
                fontSize={{ base: 17, sm: 18, md: 18, xl: 18 }}>Data Structures & Algorithms</Text>
            <Text 
                mt={{ base: 1, sm: 2, md: 3, xl: 5 }}
                fontSize={{ base: 13, sm: 13, md: 15, xl: 15 }}
                color="#3234b3">
                    Master DS and Algorithms for entry level engineering roles in product companies and for competitive programming.
            </Text>
          <Box 
            mt={{ base: 2, sm: 3, md: 7, xl: 5 }}
            display="grid" 
            gridTemplateColumns={{ 
            base: "repeat(1,1fr)", 
            sm: "repeat(1,1fr)", 
            md: "repeat(2,1fr)", 
            xl: "repeat(2,1fr)",
            }}
            gap={2}
            >
            <Button size={{ base: "sm", sm: "sm", md: "sm", xl: "sm"}} fontSize={{ base: 1, sm: 10, md: 15, xl: 15 }}>700 courses</Button>
            <Button size={{ base: "sm", sm: "sm", md: "sm", xl: "sm"}} fontSize={{ base: 1, sm: 10, md: 15, xl: 15 }}>18 providers</Button>
          </Box>
        </Box>

    </Box>






    <Box 
    display="grid" 
    gap={1}
    gridTemplateColumns={{
        base: "repeat(1, 1fr)", 
        sm: "repeat(3, 1fr)", 
        md: "repeat(3, 1fr)", 
        lg: "repeat(3, 1fr)"
    }}
        style={{
          marginTop: "2%",
          marginBottom: "2%",
        }}
      >
        {/* first inner box */}

        <Box
         _hover={{cursor: "pointer",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}
         boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
         padding="8%"
         margin="3%"
         marginRight="5%"
         marginLeft="5%"
         borderTopRightRadius="10px"
         borderTopLeftRadius="25px"
         borderBottomLeftRadius="10px"
         borderBottomRightRadius="25px"
         textAlign="left"
        >
          <Text 
                mt={{ base: 1, sm: 2, md: 4, xl: 4 }}
                fontSize={{ base: 12, sm: 10, md: 13, xl: 13 }}
                >
                Management
            </Text>
            <Text 
                mt={{ base: 1, sm: 2, md: 2, xl: 2 }}
                fontWeight={600} 
                fontSize={{ base: 17, sm: 18, md: 18, xl: 18 }}>Strategy and Leadership</Text>
            <Text 
                mt={{ base: 1, sm: 2, md: 3, xl: 5 }}
                fontSize={{ base: 13, sm: 13, md: 15, xl: 15 }}
                color="#3234b3">
                    Learn to lead and thrive in a world of increasing uncertainty and volatility - get certified from top universities.
            </Text>
          <Box 
            mt={{ base: 2, sm: 3, md: 7, xl: 5 }}
            display="grid" 
            gridTemplateColumns={{ 
            base: "repeat(1,1fr)", 
            sm: "repeat(1,1fr)", 
            md: "repeat(2,1fr)", 
            xl: "repeat(2,1fr)",
            }}
            gap={2}
            >
            <Button size={{ base: "sm", sm: "sm", md: "sm", xl: "sm"}} fontSize={{ base: 1, sm: 10, md: 15, xl: 15 }}>500 courses</Button>
            <Button size={{ base: "sm", sm: "sm", md: "sm", xl: "sm"}} fontSize={{ base: 1, sm: 10, md: 15, xl: 15 }}>70 providers</Button>
          </Box>
        </Box>
        {/* second inner box */}

        <Box
          _hover={{cursor: "pointer",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}
          boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
          padding="8%"
          margin="3%"
          marginRight="5%"
          marginLeft="5%"
          borderTopRightRadius="10px"
          borderTopLeftRadius="25px"
          borderBottomLeftRadius="10px"
          borderBottomRightRadius="25px"
          textAlign="left"
      >
          <Text 
                mt={{ base: 1, sm: 2, md: 4, xl: 4 }}
                fontSize={{ base: 12, sm: 10, md: 13, xl: 13 }}
                >
                Management
            </Text>
            <Text 
                mt={{ base: 1, sm: 2, md: 2, xl: 2 }}
                fontWeight={600} 
                fontSize={{ base: 17, sm: 18, md: 18, xl: 18 }}>Digital Marketing</Text>
            <Text 
                mt={{ base: 1, sm: 2, md: 3, xl: 5 }}
                fontSize={{ base: 13, sm: 13, md: 15, xl: 15 }}
                color="#3234b3">
                    A fast growing field with opportunities in PPC, SEO, Email marketing, Marketing analytics, Content marketing and more.
            </Text>
          <Box 
            mt={{ base: 2, sm: 3, md: 7, xl: 5 }}
            display="grid" 
            gridTemplateColumns={{ 
            base: "repeat(1,1fr)", 
            sm: "repeat(1,1fr)", 
            md: "repeat(2,1fr)", 
            xl: "repeat(2,1fr)",
            }}
            gap={2}
            >
            <Button size={{ base: "sm", sm: "sm", md: "sm", xl: "sm"}} fontSize={{ base: 1, sm: 10, md: 15, xl: 15 }}>700 courses</Button>
            <Button size={{ base: "sm", sm: "sm", md: "sm", xl: "sm"}} fontSize={{ base: 1, sm: 10, md: 15, xl: 15 }}>26 providers</Button>
          </Box>
        </Box>

        {/* third inner box */}

        <Box
          _hover={{cursor: "pointer",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}
          boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
          padding="8%"
          margin="3%"
          marginRight="5%"
          marginLeft="5%"
          borderTopRightRadius="10px"
          borderTopLeftRadius="25px"
          borderBottomLeftRadius="10px"
          borderBottomRightRadius="25px"
          textAlign="left"
      >
            <Text 
                mt={{ base: 1, sm: 2, md: 4, xl: 4 }}
                fontSize={{ base: 12, sm: 10, md: 13, xl: 13 }}
                >
                Management
            </Text>
            <Text 
                mt={{ base: 1, sm: 2, md: 2, xl: 2 }}
                fontWeight={600} 
                fontSize={{ base: 17, sm: 18, md: 18, xl: 18 }}>Business Analytics</Text>
            <Text 
                mt={{ base: 1, sm: 2, md: 3, xl: 5 }}
                fontSize={{ base: 13, sm: 13, md: 15, xl: 15 }}
                color="#3234b3">
                   Improve your business decision making with dashboards, real-time analytics, scenario analysis, and reporting skills
            </Text>
          <Box 
            mt={{ base: 2, sm: 3, md: 7, xl: 5 }}
            display="grid" 
            gridTemplateColumns={{ 
            base: "repeat(1,1fr)", 
            sm: "repeat(1,1fr)", 
            md: "repeat(2,1fr)", 
            xl: "repeat(2,1fr)",
            }}
            gap={2}
            >
            <Button size={{ base: "sm", sm: "sm", md: "sm", xl: "sm"}} fontSize={{ base: 1, sm: 10, md: 15, xl: 15 }}>700 courses</Button>
            <Button size={{ base: "sm", sm: "sm", md: "sm", xl: "sm"}} fontSize={{ base: 1, sm: 10, md: 15, xl: 15 }}>18 providers</Button>
          </Box>
        </Box>

    </Box>





    <Box 
    display="grid" 
    gap={1}
    gridTemplateColumns={{
        base: "repeat(1, 1fr)", 
        sm: "repeat(3, 1fr)", 
        md: "repeat(3, 1fr)", 
        lg: "repeat(3, 1fr)"
    }}
        style={{
          marginTop: "2%",
          marginBottom: "2%",
        }}
      >
        {/* first inner box */}

        <Box
          _hover={{cursor: "pointer",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}
          boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
          padding="8%"
          margin="3%"
          marginRight="5%"
          marginLeft="5%"
          borderTopRightRadius="10px"
          borderTopLeftRadius="25px"
          borderBottomLeftRadius="10px"
          borderBottomRightRadius="25px"
          textAlign="left"
      >
           <Text 
                mt={{ base: 1, sm: 2, md: 4, xl: 4 }}
                fontSize={{ base: 12, sm: 10, md: 13, xl: 13 }}
                >
                Data Science
            </Text>
            <Text 
                mt={{ base: 1, sm: 2, md: 2, xl: 2 }}
                fontWeight={600} 
                fontSize={{ base: 17, sm: 18, md: 18, xl: 18 }}>Artificial Intelligence</Text>
            <Text 
                mt={{ base: 1, sm: 2, md: 3, xl: 5 }}
                fontSize={{ base: 13, sm: 13, md: 15, xl: 15 }}
                color="#3234b3">
                    Learn in demand AI skills like Deep learning, NLP, Computer vision and more for career growth across different roles.
            </Text>
          <Box 
            mt={{ base: 2, sm: 3, md: 7, xl: 5 }}
            display="grid" 
            gridTemplateColumns={{ 
            base: "repeat(1,1fr)", 
            sm: "repeat(1,1fr)", 
            md: "repeat(2,1fr)", 
            xl: "repeat(2,1fr)",
            }}
            gap={2}
            >
            <Button size={{ base: "sm", sm: "sm", md: "sm", xl: "sm"}} fontSize={{ base: 1, sm: 10, md: 15, xl: 15 }}>600 courses</Button>
            <Button size={{ base: "sm", sm: "sm", md: "sm", xl: "sm"}} fontSize={{ base: 1, sm: 10, md: 15, xl: 15 }}>28 providers</Button>
          </Box>
        </Box>
        {/* second inner box */}

        <Box
          _hover={{cursor: "pointer",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}
          boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
          padding="8%"
          margin="3%"
          marginRight="5%"
          marginLeft="5%"
          borderTopRightRadius="10px"
          borderTopLeftRadius="25px"
          borderBottomLeftRadius="10px"
          borderBottomRightRadius="25px"
          textAlign="left"
      >
          <Text 
                mt={{ base: 1, sm: 2, md: 4, xl: 4 }}
                fontSize={{ base: 12, sm: 10, md: 13, xl: 13 }}
                >
                Cloud Technologies
            </Text>
            <Text 
                mt={{ base: 1, sm: 2, md: 2, xl: 2 }}
                fontWeight={600} 
                fontSize={{ base: 17, sm: 18, md: 18, xl: 18 }}>AWS</Text>
            <Text 
                mt={{ base: 1, sm: 2, md: 3, xl: 5 }}
                fontSize={{ base: 13, sm: 13, md: 15, xl: 15 }}
                color="#3234b3">
                    Get certified for high demand cloud computing skills for Cloud Practitioner, Architect, Developer, and Operations roles.
            </Text>
          <Box 
            mt={{ base: 2, sm: 3, md: 7, xl: 5 }}
            display="grid" 
            gridTemplateColumns={{ 
            base: "repeat(1,1fr)", 
            sm: "repeat(1,1fr)", 
            md: "repeat(2,1fr)", 
            xl: "repeat(2,1fr)",
            }}
            gap={2}
            >
            <Button size={{ base: "sm", sm: "sm", md: "sm", xl: "sm"}} fontSize={{ base: 1, sm: 10, md: 15, xl: 15 }}>800 courses</Button>
            <Button size={{ base: "sm", sm: "sm", md: "sm", xl: "sm"}} fontSize={{ base: 1, sm: 10, md: 15, xl: 15 }}>16 providers</Button>
          </Box>
        </Box>

        {/* third inner box */}

        <Box
          _hover={{cursor: "pointer",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}
          boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
          padding="8%"
          margin="3%"
          marginRight="5%"
          marginLeft="5%"
          borderTopRightRadius="10px"
          borderTopLeftRadius="25px"
          borderBottomLeftRadius="10px"
          borderBottomRightRadius="25px"
          textAlign="left"
      >
            <Text 
                mt={{ base: 1, sm: 2, md: 4, xl: 4 }}
                fontSize={{ base: 12, sm: 10, md: 13, xl: 13 }}
                >
                Programming
            </Text>
            <Text 
                mt={{ base: 1, sm: 2, md: 2, xl: 2 }}
                fontWeight={600} 
                fontSize={{ base: 17, sm: 18, md: 18, xl: 18 }}>Data Structures & Algorithms</Text>
            <Text 
                mt={{ base: 1, sm: 2, md: 3, xl: 5 }}
                fontSize={{ base: 13, sm: 13, md: 15, xl: 15 }}
                color="#3234b3">
                    Master DS and Algorithms for entry level engineering roles in product companies and for competitive programming.
            </Text>
          <Box 
            mt={{ base: 2, sm: 3, md: 7, xl: 5 }}
            display="grid" 
            gridTemplateColumns={{ 
            base: "repeat(1,1fr)", 
            sm: "repeat(1,1fr)", 
            md: "repeat(2,1fr)", 
            xl: "repeat(2,1fr)",
            }}
            gap={2}
            >
            <Button 
              size={{ base: "sm", sm: "sm", md: "sm", xl: "sm"}} 
              fontSize={{ base: 1, sm: 10, md: 15, xl: 15 }}
              >
                700 courses
            </Button>
            <Button 
              size={{ base: "sm", sm: "sm", md: "sm", xl: "sm"}} 
              fontSize={{ base: 1, sm: 10, md: 15, xl: 15 }}
              >
                18 providers
            </Button>
          </Box>
        </Box>

    </Box>


</Carousel>
  );
}
