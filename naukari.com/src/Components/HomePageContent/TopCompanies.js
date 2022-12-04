import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { 
  Box,
  Button,
  Image,
  Text
} from "@chakra-ui/react";

export const TopCompanies = () => {
  return (
<Carousel>
      {/* first outer box  */}

    <Box 
    display="grid" 
    gridTemplateColumns={{
        base: "repeat(2, 1fr)", 
        sm: "repeat(2, 1fr)", 
        md: "repeat(4, 1fr)", 
        lg: "repeat(4, 1fr)"
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
            <Text style={{fontWeight: "500", fontSize: "20px"}}>Fintech ➤</Text>
            <Text style={{color: "#a0a2a3"}}>104 are actively hiring</Text>
          </Box>
          <Box style={{
                display: "flex", 
                justifyContent: "space-around",
                marginTop: "10%"
            }}>
            <Image style={{width: "20%", boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"}} 
            src="https://img.naukimg.com/logo_images/groups/v1/2914566.gif" 
            alt="FintechImg"
            />

            <Image style={{width: "20%", boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"}} 
            src="https://img.naukimg.com/logo_images/groups/v1/4582197.gif" 
            alt="FintechImg"
            />

            <Image style={{width: "20%", boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"}} 
            src="https://img.naukimg.com/logo_images/groups/v1/4458256.gif" 
            alt="FintechImg"
            />

            <Image style={{width: "20%", boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"}} 
            src="https://img.naukimg.com/logo_images/groups/v1/1535428.gif" 
            alt="FintechImg"
            />

          </Box>
        </Box>
        {/* second inner box */}

        <Box
           boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
           margin="3%"
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
            <Text style={{fontWeight: "500", fontSize: "20px"}}>FMCG & Retail ➤</Text>
            <Text style={{color: "#a0a2a3"}}>32 are actively hiring</Text>
          </Box>
          <Box style={{
                display: "flex", 
                justifyContent: "space-around",
                marginTop: "10%"
            }}>
            <Image style={{width: "20%", boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"}} 
            src="https://img.naukimg.com/logo_images/groups/v1/3867866.gif" 
            alt="FintechImg"
            />
            
            <Image style={{width: "20%", boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"}} 
            src="https://img.naukimg.com/logo_images/groups/v1/4625071.gif" 
            alt="FintechImg"
            />
            
            <Image style={{width: "20%", boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"}} 
            src="https://img.naukimg.com/logo_images/groups/v1/26418.gif" 
            alt="FintechImg"
            />
            
            <Image style={{width: "20%", boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"}} 
            src="https://img.naukimg.com/logo_images/groups/v1/32956.gif" 
            alt="FintechImg"
            />
            
          </Box>
        </Box>

        {/* third inner box */}

        <Box
           boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
           margin="3%"
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
            <Text style={{fontWeight: "500", fontSize: "20px"}}>Startups ➤</Text>
            <Text style={{color: "#a0a2a3"}}>234 are actively hiring</Text>
          </Box>
          <Box style={{
                display: "flex", 
                justifyContent: "space-around",
                marginTop: "10%"
            }}>
            <Image style={{width: "20%", boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"}} 
            src="https://img.naukimg.com/logo_images/groups/v1/2873502.gif" 
            alt="FintechImg"
            />
            
            <Image style={{width: "20%", boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"}} 
            src="https://img.naukimg.com/logo_images/groups/v1/4620345.gif" 
            alt="FintechImg"
            />
            
            <Image style={{width: "20%", boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"}} 
            src="https://img.naukimg.com/logo_images/groups/v1/3789768.gif" 
            alt="FintechImg"
            />
            
            <Image style={{width: "20%", boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"}} 
            src="https://img.naukimg.com/logo_images/groups/v1/2914566.gif" 
            alt="FintechImg"
            />
            
          </Box>
        </Box>

        {/* fourth inner box */}

        <Box
           boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
           margin="3%"
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
            <Text style={{fontWeight: "500", fontSize: "20px"}}>Edtech ➤</Text>
            <Text style={{color: "#a0a2a3"}}>136 are actively hiring</Text>
          </Box>
          <Box style={{
                display: "flex", 
                justifyContent: "space-around",
                marginTop: "10%"
            }}>
            <Image style={{width: "20%", boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"}} 
            src="https://img.naukimg.com/logo_images/groups/v1/4614807.gif" 
            alt="FintechImg"
            />
            
            <Image style={{width: "20%", boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"}} 
            src="https://img.naukimg.com/logo_images/groups/v1/1733538.gif" 
            alt="FintechImg"
            />
            
            <Image style={{width: "20%", boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"}} 
            src="https://img.naukimg.com/logo_images/groups/v1/5914168.gif" 
            alt="FintechImg"
            />
            
            <Image style={{width: "20%", boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"}} 
            src="https://img.naukimg.com/logo_images/groups/v1/3272908.gif" 
            alt="FintechImg"
            />
            
          </Box>

        </Box>
    </Box>

      {/* Second outer box  */}

      <Box
      display="grid" 
      gridTemplateColumns={{
          base: "repeat(2, 1fr)", 
          sm: "repeat(2, 1fr)", 
          md: "repeat(4, 1fr)", 
          lg: "repeat(4, 1fr)"
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
            <Text style={{fontWeight: "500", fontSize: "20px"}}>Healthcare ➤</Text>
            <Text style={{color: "#a0a2a3"}}>106 are actively hiring</Text>
          </Box>
          <Box style={{
                display: "flex", 
                justifyContent: "space-around",
                marginTop: "10%"
            }}>
            <Image style={{width: "20%", boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"}} 
            src="https://img.naukimg.com/logo_images/groups/v1/2187308.gif" 
            alt="FintechImg"
            />

            <Image style={{width: "20%", boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"}} 
            src="https://img.naukimg.com/logo_images/groups/v1/552300.gif" 
            alt="FintechImg"
            />

            <Image style={{width: "20%", boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"}} 
            src="https://img.naukimg.com/logo_images/groups/v1/2948968.gif" 
            alt="FintechImg"
            />

            <Image style={{width: "20%", boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"}} 
            src="https://img.naukimg.com/logo_images/groups/v1/4655735.gif" 
            alt="FintechImg"
            />

          </Box>
        </Box>
        {/* second inner box */}

        <Box
           boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
           margin="3%"
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
            <Text style={{fontWeight: "500", fontSize: "20px"}}>Unicorns ➤</Text>
            <Text style={{color: "#a0a2a3"}}>90 are actively hiring</Text>
          </Box>
          <Box style={{
                display: "flex", 
                justifyContent: "space-around",
                marginTop: "10%"
            }}>
            <Image style={{width: "20%", boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"}} 
            src="https://img.naukimg.com/logo_images/groups/v1/495928.gif" 
            alt="FintechImg"
            />
            
            <Image style={{width: "20%", boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"}} 
            src="https://img.naukimg.com/logo_images/groups/v1/135332.gif" 
            alt="FintechImg"
            />
            
            <Image style={{width: "20%", boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"}} 
            src="https://img.naukimg.com/logo_images/groups/v1/1027760.gif" 
            alt="FintechImg"
            />
            
            <Image style={{width: "20%", boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"}} 
            src="https://img.naukimg.com/logo_images/groups/v1/509622.gif" 
            alt="FintechImg"
            />
            
          </Box>
        </Box>

        {/* third inner box */}

        <Box
           boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
           margin="3%"
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
            <Text style={{fontWeight: "500", fontSize: "20px"}}>Internet ➤</Text>
            <Text style={{color: "#a0a2a3"}}>132 are actively hiring</Text>
          </Box>
          <Box style={{
                display: "flex", 
                justifyContent: "space-around",
                marginTop: "10%"
            }}>
            <Image style={{width: "20%", boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"}} 
            src="https://img.naukimg.com/logo_images/groups/v1/5856222.gif" 
            alt="FintechImg"
            />
            
            <Image style={{width: "20%", boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"}} 
            src="https://img.naukimg.com/logo_images/groups/v1/5729808.gif" 
            alt="FintechImg"
            />
            
            <Image style={{width: "20%", boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"}} 
            src="https://img.naukimg.com/logo_images/groups/v1/4613275.gif" 
            alt="FintechImg"
            />
            
            <Image style={{width: "20%", boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"}} 
            src="https://img.naukimg.com/logo_images/groups/v1/2428666.gif" 
            alt="FintechImg"
            />
            
          </Box>
        </Box>

        {/* fourth inner box */}

        <Box
           boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
           margin="3%"
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
            <Text style={{fontWeight: "500", fontSize: "20px"}}>Manufacturing ➤</Text>
            <Text style={{color: "#a0a2a3"}}>172 are actively hiring</Text>
          </Box>
          <Box style={{
                display: "flex", 
                justifyContent: "space-around",
                marginTop: "10%"
            }}>
            <Image style={{width: "20%", boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"}} 
            src="https://img.naukimg.com/logo_images/groups/v1/5290682.gif" 
            alt="FintechImg"
            />
            
            <Image style={{width: "20%", boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"}} 
            src="https://img.naukimg.com/logo_images/groups/v1/62866.gif" 
            alt="FintechImg"
            />
            
            <Image style={{width: "20%", boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"}} 
            src="https://img.naukimg.com/logo_images/groups/v1/1980034.gif" 
            alt="FintechImg"
            />
            
            <Image style={{width: "20%", boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"}} 
            src="https://img.naukimg.com/logo_images/groups/v1/297712.gif" 
            alt="FintechImg"
            />
            
          </Box>
          
        </Box>
    </Box>

      {/* third outer box  */}

      <Box 
      display="grid" 
      gridTemplateColumns={{
          base: "repeat(2, 1fr)", 
          sm: "repeat(2, 1fr)", 
          md: "repeat(4, 1fr)", 
          lg: "repeat(4, 1fr)"
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
            <Text style={{fontWeight: "500", fontSize: "20px"}}>Fortune 500 ➤</Text>
            <Text style={{color: "#a0a2a3"}}>84 are actively hiring</Text>
          </Box>
          <Box style={{
                display: "flex", 
                justifyContent: "space-around",
                marginTop: "10%"
            }}>
            <Image style={{width: "20%", boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"}} 
            src="https://img.naukimg.com/logo_images/groups/v1/84158.gif" 
            alt="FintechImg"
            />

            <Image style={{width: "20%", boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"}} 
            src="https://img.naukimg.com/logo_images/groups/v1/247012.gif" 
            alt="FintechImg"
            />

            <Image style={{width: "20%", boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"}} 
            src="https://img.naukimg.com/logo_images/groups/v1/169656.gif" 
            alt="FintechImg"
            />

            <Image style={{width: "20%", boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"}} 
            src="https://img.naukimg.com/logo_images/groups/v1/867498.gif" 
            alt="FintechImg"
            />

          </Box>
        </Box>
        {/* second inner box */}

        <Box
           boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
           margin="3%"
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
            <Text style={{fontWeight: "500", fontSize: "20px"}}>B2C ➤</Text>
            <Text style={{color: "#a0a2a3"}}>948 are actively hiring</Text>
          </Box>
          <Box style={{
                display: "flex", 
                justifyContent: "space-around",
                marginTop: "10%"
            }}>
            <Image style={{width: "20%", boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"}} 
            src="https://img.naukimg.com/logo_images/groups/v1/26216.gif" 
            alt="FintechImg"
            />
            
            <Image style={{width: "20%", boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"}} 
            src="https://img.naukimg.com/logo_images/groups/v1/492152.gif" 
            alt="FintechImg"
            />
            
            <Image style={{width: "20%", boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"}} 
            src="https://img.naukimg.com/logo_images/groups/v1/19328.gif" 
            alt="FintechImg"
            />
            
            <Image style={{width: "20%", boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"}} 
            src="https://img.naukimg.com/logo_images/groups/v1/4656649.gif" 
            alt="FintechImg"
            />
            
          </Box>
        </Box>

        {/* third inner box */}

        <Box
           boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
           margin="3%"
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
            <p style={{fontWeight: "500", fontSize: "20px"}}>Startups ➤</p>
            <p style={{color: "#a0a2a3"}}>234 are actively hiring</p>
          </Box>
          <Box style={{
                display: "flex", 
                justifyContent: "space-around",
                marginTop: "10%"
            }}>
            <Image style={{width: "20%", boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"}} 
            src="https://img.naukimg.com/logo_images/groups/v1/2873502.gif" 
            alt="FintechImg"
            />
            
            <Image style={{width: "20%", boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"}} 
            src="https://img.naukimg.com/logo_images/groups/v1/4620345.gif" 
            alt="FintechImg"
            />
            
            <Image style={{width: "20%", boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"}} 
            src="https://img.naukimg.com/logo_images/groups/v1/3789768.gif" 
            alt="FintechImg"
            />
            
            <Image style={{width: "20%", boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"}} 
            src="https://img.naukimg.com/logo_images/groups/v1/2914566.gif" 
            alt="FintechImg"
            />
            
          </Box>
        </Box>

        {/* fourth inner box */}

        <Box
           boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
           margin="3%"
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
            <Text style={{fontWeight: "500", fontSize: "20px"}}>Edtech ➤</Text>
            <Text style={{color: "#a0a2a3"}}>136 are actively hiring</Text>
          </Box>
          <Box style={{
                display: "flex", 
                justifyContent: "space-around",
                marginTop: "10%"
            }}>
            <Image style={{width: "20%", boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"}} 
            src="https://img.naukimg.com/logo_images/groups/v1/4614807.gif" 
            alt="FintechImg"
            />
            
            <Image style={{width: "20%", boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"}} 
            src="https://img.naukimg.com/logo_images/groups/v1/1733538.gif" 
            alt="FintechImg"
            />
            
            <Image style={{width: "20%", boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"}} 
            src="https://img.naukimg.com/logo_images/groups/v1/5914168.gif" 
            alt="FintechImg"
            />
            
            <Image style={{width: "20%", boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"}} 
            src="https://img.naukimg.com/logo_images/groups/v1/3272908.gif" 
            alt="FintechImg"
            />
            
          </Box>

        </Box>
    </Box>

      {/* fourth outer box  */}
      <Box 
      display="grid" 
      gridTemplateColumns={{
          base: "repeat(2, 1fr)", 
          sm: "repeat(2, 1fr)", 
          md: "repeat(4, 1fr)", 
          lg: "repeat(4, 1fr)"
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
            <Text style={{fontWeight: "500", fontSize: "20px"}}>Fintech ➤</Text>
            <Text style={{color: "#a0a2a3"}}>104 are actively hiring</Text>
          </Box>
          <Box style={{
                display: "flex", 
                justifyContent: "space-around",
                marginTop: "10%"
            }}>
            <Image style={{width: "20%", boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"}} 
            src="https://img.naukimg.com/logo_images/groups/v1/2914566.gif" 
            alt="FintechImg"
            />

            <Image style={{width: "20%", boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"}} 
            src="https://img.naukimg.com/logo_images/groups/v1/4582197.gif" 
            alt="FintechImg"
            />

            <Image style={{width: "20%", boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"}} 
            src="https://img.naukimg.com/logo_images/groups/v1/4458256.gif" 
            alt="FintechImg"
            />

            <Image style={{width: "20%", boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"}} 
            src="https://img.naukimg.com/logo_images/groups/v1/1535428.gif" 
            alt="FintechImg"
            />

          </Box>
        </Box>
        {/* second inner box */}

        <Box
           boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
           margin="3%"
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
            <Text style={{fontWeight: "500", fontSize: "20px"}}>FMCG & Retail ➤</Text>
            <Text style={{color: "#a0a2a3"}}>32 are actively hiring</Text>
          </Box>
          <Box style={{
                display: "flex", 
                justifyContent: "space-around",
                marginTop: "10%"
            }}>
            <Image style={{width: "20%", boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"}} 
            src="https://img.naukimg.com/logo_images/groups/v1/3867866.gif" 
            alt="FintechImg"
            />
            
            <Image style={{width: "20%", boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"}} 
            src="https://img.naukimg.com/logo_images/groups/v1/4625071.gif" 
            alt="FintechImg"
            />
            
            <Image style={{width: "20%", boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"}} 
            src="https://img.naukimg.com/logo_images/groups/v1/26418.gif" 
            alt="FintechImg"
            />
            
            <Image style={{width: "20%", boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"}} 
            src="https://img.naukimg.com/logo_images/groups/v1/32956.gif" 
            alt="FintechImg"
            />
            
          </Box>
        </Box>

        {/* third inner box */}

        <Box
          boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
          margin="3%"
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
            <Text style={{fontWeight: "500", fontSize: "20px"}}>Startups ➤</Text>
            <Text style={{color: "#a0a2a3"}}>234 are actively hiring</Text>
          </Box>
          <Box style={{
                display: "flex", 
                justifyContent: "space-around",
                marginTop: "10%"
            }}>
            <Image style={{width: "20%", boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"}} 
            src="https://img.naukimg.com/logo_images/groups/v1/2873502.gif" 
            alt="FintechImg"
            />
            
            <Image style={{width: "20%", boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"}} 
            src="https://img.naukimg.com/logo_images/groups/v1/4620345.gif" 
            alt="FintechImg"
            />
            
            <Image style={{width: "20%", boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"}} 
            src="https://img.naukimg.com/logo_images/groups/v1/3789768.gif" 
            alt="FintechImg"
            />
            
            <Image style={{width: "20%", boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"}} 
            src="https://img.naukimg.com/logo_images/groups/v1/2914566.gif" 
            alt="FintechImg"
            />
            
          </Box>
        </Box>

        {/* fourth inner box */}

        <Box
           boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
           margin="3%"
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
            <Text style={{fontWeight: "500", fontSize: "20px"}}>Edtech ➤</Text>
            <Text style={{color: "#a0a2a3"}}>136 are actively hiring</Text>
          </Box>
          <Box style={{
                display: "flex", 
                justifyContent: "space-around",
                marginTop: "10%"
            }}>
            <Image style={{width: "20%", boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"}} 
            src="https://img.naukimg.com/logo_images/groups/v1/4614807.gif" 
            alt="FintechImg"
            />
            
            <Image style={{width: "20%", boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"}} 
            src="https://img.naukimg.com/logo_images/groups/v1/1733538.gif" 
            alt="FintechImg"
            />
            
            <Image style={{width: "20%", boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"}} 
            src="https://img.naukimg.com/logo_images/groups/v1/5914168.gif" 
            alt="FintechImg"
            />
            
            <Image style={{width: "20%", boxShadow: "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"}} 
            src="https://img.naukimg.com/logo_images/groups/v1/3272908.gif" 
            alt="FintechImg"
            />
          </Box>
        </Box>
    </Box>
</Carousel>
  );
};
