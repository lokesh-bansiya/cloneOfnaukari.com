import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { 
  Box,
  Text
} from "@chakra-ui/react";

export const TopCarousel = () => {
  return (
<Carousel>
      {/* first outer box  */}

    <Box 
    display="grid" 
    border="1px" 
    borderColor="gray"
    p={5}
    bg="#fbf7ff"
    borderRadius="10px"
    gridTemplateColumns={{
        base: "repeat(2, 1fr)", 
        sm: "repeat(2, 1fr)", 
        md: "repeat(5, 1fr)", 
        lg: "repeat(5, 1fr)"
    }}
        style={{
          marginTop: "2%",
          marginBottom: "2%",
        }}
      >
        {/* first inner box */}

        <Box
            boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
            margin="3%"
            bg="white"
            marginRight="5%"
            marginLeft="5%"
            padding="8%"
            borderTopRightRadius="10px"
            borderTopLeftRadius="25px"
            borderBottomLeftRadius="10px"
            borderBottomRightRadius="25px"
            textAlign="left"
            _hover={{cursor: "pointer",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}
        >
          <Box>
            <Text style={{fontWeight: "500", fontSize: "17px"}}>MNCs </Text>
            <Text style={{color: "blue",fontSize: "12px"}}>1.3K+ Companies ➤</Text>
          </Box>
          
        </Box>
        {/* second inner box */}

        <Box
           boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
           margin="3%"
           bg="white"
           marginRight="5%"
           marginLeft="5%"
           padding="8%"
           borderTopRightRadius="10px"
           borderTopLeftRadius="25px"
           borderBottomLeftRadius="10px"
           borderBottomRightRadius="25px"
           textAlign="left"
           _hover={{cursor: "pointer",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}
       >
          <Box>
            <Text style={{fontWeight: "500", fontSize: "17px"}}>Product </Text>
            <Text style={{color: "blue",fontSize: "12px"}}>612 Companies ➤</Text>
          </Box>
          
        </Box>

        {/* third inner box */}

        <Box
           boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
           margin="3%"
           bg="white"
           marginRight="5%"
           marginLeft="5%"
           padding="8%"
           borderTopRightRadius="10px"
           borderTopLeftRadius="25px"
           borderBottomLeftRadius="10px"
           borderBottomRightRadius="25px"
           textAlign="left"
           _hover={{cursor: "pointer",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}
       >
          <Box>
            <Text style={{fontWeight: "500", fontSize: "17px"}}>Banking & </Text>
            <Text style={{color: "blue",fontSize: "12px"}}>145 Companies ➤</Text>
          </Box>
          
        </Box>

        {/* fourth inner box */}

        <Box
           boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
           margin="3%"
           bg="white"
           marginRight="5%"
           marginLeft="5%"
           padding="8%"
           borderTopRightRadius="10px"
           borderTopLeftRadius="25px"
           borderBottomLeftRadius="10px"
           borderBottomRightRadius="25px"
           textAlign="left"
           _hover={{cursor: "pointer",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}
       >
          <Box>
            <Text style={{fontWeight: "500", fontSize: "17px"}}>Hospitality </Text>
            <Text style={{color: "blue",fontSize: "12px"}}>27 Companies ➤</Text>
          </Box>
          
        </Box>


     {/* fifth inner box  */}
        <Box
           boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
           margin="3%"
           bg="white"
           marginRight="5%"
           marginLeft="5%"
           padding="8%"
           borderTopRightRadius="10px"
           borderTopLeftRadius="25px"
           borderBottomLeftRadius="10px"
           borderBottomRightRadius="25px"
           textAlign="left"
           _hover={{cursor: "pointer",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}
       >
          <Box>
            <Text style={{fontWeight: "500", fontSize: "17px"}}>Fintech </Text>
            <Text style={{color: "blue",fontSize: "12px"}}>104 Companies ➤</Text>
          </Box>
          
        </Box>

    </Box>

      {/* Second outer box  */}
      <Box 
    display="grid" 
    border="1px" 
    borderColor="gray"
    p={5}
    bg="#fbf7ff"
    borderRadius="10px"
    gridTemplateColumns={{
        base: "repeat(2, 1fr)", 
        sm: "repeat(2, 1fr)", 
        md: "repeat(5, 1fr)", 
        lg: "repeat(5, 1fr)"
    }}
        style={{
          marginTop: "2%",
          marginBottom: "2%",
        }}
      >
        {/* first inner box */}

        <Box
            boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
            margin="3%"
            bg="white"
            marginRight="5%"
            marginLeft="5%"
            padding="8%"
            borderTopRightRadius="10px"
            borderTopLeftRadius="25px"
            borderBottomLeftRadius="10px"
            borderBottomRightRadius="25px"
            textAlign="left"
            _hover={{cursor: "pointer",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}
        >
          <Box>
            <Text style={{fontWeight: "500", fontSize: "17px"}}>Unicorns </Text>
            <Text style={{color: "blue",fontSize: "12px"}}>89 Companies ➤</Text>
          </Box>
          
        </Box>
        {/* second inner box */}

        <Box
           boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
           margin="3%"
           bg="white"
           marginRight="5%"
           marginLeft="5%"
           padding="8%"
           borderTopRightRadius="10px"
           borderTopLeftRadius="25px"
           borderBottomLeftRadius="10px"
           borderBottomRightRadius="25px"
           textAlign="left"
           _hover={{cursor: "pointer",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}
       >
          <Box>
            <Text style={{fontWeight: "500", fontSize: "17px"}}>Internet </Text>
            <Text style={{color: "blue",fontSize: "12px"}}>131 Companies ➤</Text>
          </Box>
          
        </Box>

        {/* third inner box */}

        <Box
           boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
           margin="3%"
           bg="white"
           marginRight="5%"
           marginLeft="5%"
           padding="8%"
           borderTopRightRadius="10px"
           borderTopLeftRadius="25px"
           borderBottomLeftRadius="10px"
           borderBottomRightRadius="25px"
           textAlign="left"
           _hover={{cursor: "pointer",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}
       >
          <Box>
            <Text style={{fontWeight: "500", fontSize: "17px"}}>Manufacturing</Text>
            <Text style={{color: "blue",fontSize: "12px"}}>169 Companies ➤</Text>
          </Box>
          
        </Box>

        {/* fourth inner box */}

        <Box
           boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
           margin="3%"
           bg="white"
           marginRight="5%"
           marginLeft="5%"
           padding="8%"
           borderTopRightRadius="10px"
           borderTopLeftRadius="25px"
           borderBottomLeftRadius="10px"
           borderBottomRightRadius="25px"
           textAlign="left"
           _hover={{cursor: "pointer",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}
       >
          <Box>
            <Text style={{fontWeight: "500", fontSize: "17px"}}>Fortune 500 </Text>
            <Text style={{color: "blue",fontSize: "12px"}}>85 Companies ➤</Text>
          </Box>
          
        </Box>


     {/* fifth inner box  */}
        <Box
           boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
           margin="3%"
           bg="white"
           marginRight="5%"
           marginLeft="5%"
           padding="8%"
           borderTopRightRadius="10px"
           borderTopLeftRadius="25px"
           borderBottomLeftRadius="10px"
           borderBottomRightRadius="25px"
           textAlign="left"
           _hover={{cursor: "pointer",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}
       >
          <Box>
            <Text style={{fontWeight: "500", fontSize: "17px"}}>B2C </Text>
            <Text style={{color: "blue",fontSize: "12px"}}>892 Companies ➤</Text>
          </Box>
          
        </Box>

    </Box>


      {/* third outer box  */}

      <Box 
    display="grid" 
    border="1px" 
    borderColor="gray"
    p={5}
    bg="#fbf7ff"
    borderRadius="10px"
    gridTemplateColumns={{
        base: "repeat(2, 1fr)", 
        sm: "repeat(2, 1fr)", 
        md: "repeat(5, 1fr)", 
        lg: "repeat(5, 1fr)"
    }}
        style={{
          marginTop: "2%",
          marginBottom: "2%",
        }}
      >
        {/* first inner box */}

        <Box
            boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
            margin="3%"
            bg="white"
            marginRight="5%"
            marginLeft="5%"
            padding="8%"
            borderTopRightRadius="10px"
            borderTopLeftRadius="25px"
            borderBottomLeftRadius="10px"
            borderBottomRightRadius="25px"
            textAlign="left"
            _hover={{cursor: "pointer",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}
        >
          <Box>
            <Text style={{fontWeight: "500", fontSize: "17px"}}>FMCG & Retail </Text>
            <Text style={{color: "blue",fontSize: "12px"}}>81 Companies ➤</Text>
          </Box>
          
        </Box>
        {/* second inner box */}

        <Box
           boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
           margin="3%"
           bg="white"
           marginRight="5%"
           marginLeft="5%"
           padding="8%"
           borderTopRightRadius="10px"
           borderTopLeftRadius="25px"
           borderBottomLeftRadius="10px"
           borderBottomRightRadius="25px"
           textAlign="left"
           _hover={{cursor: "pointer",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}
       >
          <Box>
            <Text style={{fontWeight: "500", fontSize: "17px"}}>Startups </Text>
            <Text style={{color: "blue",fontSize: "12px"}}>231 Companies ➤</Text>
          </Box>
          
        </Box>

        {/* third inner box */}

        <Box
           boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
           margin="3%"
           bg="white"
           marginRight="5%"
           marginLeft="5%"
           padding="8%"
           borderTopRightRadius="10px"
           borderTopLeftRadius="25px"
           borderBottomLeftRadius="10px"
           borderBottomRightRadius="25px"
           textAlign="left"
           _hover={{cursor: "pointer",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}
       >
          <Box>
            <Text style={{fontWeight: "500", fontSize: "17px"}}>Edtech </Text>
            <Text style={{color: "blue",fontSize: "12px"}}>136 Companies ➤</Text>
          </Box>
          
        </Box>

        {/* fourth inner box */}

        <Box
           boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
           margin="3%"
           bg="white"
           marginRight="5%"
           marginLeft="5%"
           padding="8%"
           borderTopRightRadius="10px"
           borderTopLeftRadius="25px"
           borderBottomLeftRadius="10px"
           borderBottomRightRadius="25px"
           textAlign="left"
           _hover={{cursor: "pointer",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}
       >
          <Box>
            <Text style={{fontWeight: "500", fontSize: "17px"}}>Helthcare</Text>
            <Text style={{color: "blue",fontSize: "12px"}}>108 Companies ➤</Text>
          </Box>
          
        </Box>


     {/* fifth inner box  */}
        <Box
           boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
           margin="3%"
           bg="white"
           marginRight="5%"
           marginLeft="5%"
           padding="8%"
           borderTopRightRadius="10px"
           borderTopLeftRadius="25px"
           borderBottomLeftRadius="10px"
           borderBottomRightRadius="25px"
           textAlign="left"
           _hover={{cursor: "pointer",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}
       >
          <Box>
            <Text style={{fontWeight: "500", fontSize: "17px"}}>Fintech </Text>
            <Text style={{color: "blue",fontSize: "12px"}}>104 Companies ➤</Text>
          </Box>
          
        </Box>

    </Box>


{/* fourth outer box  */}
<Box 
    display="grid" 
    border="1px" 
    borderColor="gray"
    p={5}
    bg="#fbf7ff"
    borderRadius="10px"
    gridTemplateColumns={{
        base: "repeat(2, 1fr)", 
        sm: "repeat(2, 1fr)", 
        md: "repeat(5, 1fr)", 
        lg: "repeat(5, 1fr)"
    }}
        style={{
          marginTop: "2%",
          marginBottom: "2%",
        }}
      >
        {/* first inner box */}

        <Box
            boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
            margin="3%"
            bg="white"
            marginRight="5%"
            marginLeft="5%"
            padding="8%"
            borderTopRightRadius="10px"
            borderTopLeftRadius="25px"
            borderBottomLeftRadius="10px"
            borderBottomRightRadius="25px"
            textAlign="left"
            _hover={{cursor: "pointer",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}
        >
          <Box>
            <Text style={{fontWeight: "500", fontSize: "17px"}}>MNCs </Text>
            <Text style={{color: "blue",fontSize: "12px"}}>1.3K+ Companies ➤</Text>
          </Box>
          
        </Box>
        {/* second inner box */}

        <Box
           boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
           margin="3%"
           bg="white"
           marginRight="5%"
           marginLeft="5%"
           padding="8%"
           borderTopRightRadius="10px"
           borderTopLeftRadius="25px"
           borderBottomLeftRadius="10px"
           borderBottomRightRadius="25px"
           textAlign="left"
           _hover={{cursor: "pointer",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}
       >
          <Box>
            <Text style={{fontWeight: "500", fontSize: "17px"}}>Product </Text>
            <Text style={{color: "blue",fontSize: "12px"}}>612 Companies ➤</Text>
          </Box>
          
        </Box>

        {/* third inner box */}

        <Box
           boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
           margin="3%"
           bg="white"
           marginRight="5%"
           marginLeft="5%"
           padding="8%"
           borderTopRightRadius="10px"
           borderTopLeftRadius="25px"
           borderBottomLeftRadius="10px"
           borderBottomRightRadius="25px"
           textAlign="left"
           _hover={{cursor: "pointer",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}
       >
          <Box>
            <Text style={{fontWeight: "500", fontSize: "17px"}}>Banking  </Text>
            <Text style={{color: "blue",fontSize: "12px"}}>145 Companies ➤</Text>
          </Box>
          
        </Box>

        {/* fourth inner box */}

        <Box
           boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
           margin="3%"
           bg="white"
           marginRight="5%"
           marginLeft="5%"
           padding="8%"
           borderTopRightRadius="10px"
           borderTopLeftRadius="25px"
           borderBottomLeftRadius="10px"
           borderBottomRightRadius="25px"
           textAlign="left"
           _hover={{cursor: "pointer",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}
       >
          <Box>
            <Text style={{fontWeight: "500", fontSize: "17px"}}>Hospitality </Text>
            <Text style={{color: "blue",fontSize: "12px"}}>27 Companies ➤</Text>
          </Box>
          
        </Box>


     {/* fifth inner box  */}
        <Box
           boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
           margin="3%"
           bg="white"
           marginRight="5%"
           marginLeft="5%"
           padding="8%"
           borderTopRightRadius="10px"
           borderTopLeftRadius="25px"
           borderBottomLeftRadius="10px"
           borderBottomRightRadius="25px"
           textAlign="left"
           _hover={{cursor: "pointer",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}
       >
          <Box>
            <Text style={{fontWeight: "500", fontSize: "17px"}}>Fintech </Text>
            <Text style={{color: "blue",fontSize: "12px"}}>104 Companies ➤</Text>
          </Box>
        </Box>
    </Box>

</Carousel>
  );
};
