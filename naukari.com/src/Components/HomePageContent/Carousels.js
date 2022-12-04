import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import { 
    Box,
    Button,
    Image,
    Text
} from '@chakra-ui/react';

export const Carousels = () => {

    return (
        <Carousel>

{/* first outer box  */}

<Box 
display="grid" 
gridTemplateColumns={{
    base: "repeat(2, 1fr)", 
    sm: "repeat(3, 1fr)", 
    md: "repeat(5, 1fr)", 
    lg: "repeat(5, 1fr)"
}}
    style={{
    marginTop: "2%",
    marginBottom: "2%",
}}>

{/* first inner box-shadow: ;*/}
                <Box 
                    boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
                    padding="8%"
                    _hover={{cursor: "pointer",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}
                    margin="3%"
                    marginRight="5%"
                    marginLeft="5%"
                    borderTopRightRadius="10px"
                    borderTopLeftRadius="25px"
                    borderBottomLeftRadius="10px"
                    borderBottomRightRadius="25px"
                >
                    <Box>
                        <Image style={{
                            width: "48%",
                            margin: "5%"
                        }} 
                            src='https://img.naukimg.com/logo_images/groups/v2/6206135.gif' 
                            alt='comapanylogo'
                        />
                    </Box>
                    <Box style={{
                        width: "75%", 
                        margin: "auto", 
                        marginTop: "2%",
                        marginBottom: "2%",
                        backgroundColor: "#ebf3f5",
                        padding: "5%",
                        borderRadius: "6px",
                        }}>
                        <Text style={{fontWeight: "bold"}}>Ice Mt</Text>
                        <p style={{fontSize: "80%"}}>⭐4.4 <span style={{marginLeft: "3%", borderLeft: "1px solid gray", paddingLeft: "2%"}}>49 reviews</span></p>
                    </Box>
                    <Box style={{margin: "5%"}}>
                        <p style={{fontSize: "80%"}}>
                            Cloud-based plateform for mortgage finance industry
                        </p>
                    </Box>
                    <Box>
                        <Button style={{
                            padding: "3% 6%",
                            backgroundColor: "#e1f3f7",
                            marginTop: "2%",
                            borderRadius: "20px",
                            color: "blue",
                            fontWeight: "bold"
                        }}
                        >
                            View Jobs
                        </Button>
                    </Box>
                </Box>
{/* second inner box */}

                <Box 
                    boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
                    padding="8%"
                    _hover={{cursor: "pointer",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}
                    margin="3%"
                    marginRight="5%"
                    marginLeft="5%"
                    borderTopRightRadius="10px"
                    borderTopLeftRadius="25px"
                    borderBottomLeftRadius="10px"
                    borderBottomRightRadius="25px"
                >
                    <Box>
                        <Image style={{
                            width: "48%",
                            margin: "5%"
                        }} 
                            src='https://img.naukimg.com/logo_images/groups/v2/18850.gif' 
                            alt='comapanylogo'
                        />
                    </Box>
                    <Box style={{
                        width: "75%", 
                        margin: "auto", 
                        marginTop: "2%",
                        marginBottom: "2%",
                        backgroundColor: "#ebf3f5",
                        padding: "5%",
                        borderRadius: "6px",
                        }}>
                        <p style={{fontWeight: "bold"}}>Oracle</p>
                        <p style={{fontSize: "80%"}}>⭐3.9 <span style={{marginLeft: "3%", borderLeft: "1px solid gray", paddingLeft: "2%"}}>3.9K+ reviews</span></p>
                    </Box>
                    <Box style={{margin: "5%"}}>
                        <p style={{fontSize: "80%"}}>
                            Cloud technology company since 1977.
                        </p>
                    </Box>
                    <Box>
                        <Button style={{
                            padding: "3% 6%",
                            backgroundColor: "#e1f3f7",
                            marginTop: "2%",
                            borderRadius: "20px",
                            color: "blue",
                            fontWeight: "bold"
                        }}
                        >
                            View Jobs
                        </Button>
                    </Box>
                </Box>


{/* third inner box */}

                <Box 
                     boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
                     padding="8%"
                     _hover={{cursor: "pointer",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}
                     margin="3%"
                     marginRight="5%"
                     marginLeft="5%"
                     borderTopRightRadius="10px"
                     borderTopLeftRadius="25px"
                     borderBottomLeftRadius="10px"
                     borderBottomRightRadius="25px"
                 >
                    <Box>
                        <Image style={{
                            width: "48%",
                            margin: "5%"
                        }} 
                            src='https://img.naukimg.com/logo_images/groups/v2/3835862.gif' 
                            alt='comapanylogo'
                        />
                    </Box>
                    <Box style={{
                        width: "75%", 
                        margin: "auto", 
                        marginTop: "2%",
                        marginBottom: "2%",
                        backgroundColor: "#ebf3f5",
                        padding: "5%",
                        borderRadius: "6px",
                        }}>
                        <Text style={{fontWeight: "bold"}}>Persistent</Text>
                        <Text style={{fontSize: "80%"}}>⭐4.1 <span style={{marginLeft: "3%", borderLeft: "1px solid gray", paddingLeft: "2%"}}>5.1K+ reviews</span></Text>
                    </Box>
                    <Box style={{margin: "5%"}}>
                        <Text style={{fontSize: "80%"}}>
                            Trusted global solutions company
                        </Text>
                    </Box>
                    <Box>
                        <Button style={{
                            padding: "3% 6%",
                            backgroundColor: "#e1f3f7",
                            marginTop: "2%",
                            borderRadius: "20px",
                            color: "blue",
                            fontWeight: "bold"
                        }}
                        >
                            View Jobs
                        </Button>
                    </Box>
                </Box>


{/* fourth inner box */}

                <Box 
                     boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
                     padding="8%"
                     _hover={{cursor: "pointer",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}
                     margin="3%"
                     marginRight="5%"
                     marginLeft="5%"
                     borderTopRightRadius="10px"
                     borderTopLeftRadius="25px"
                     borderBottomLeftRadius="10px"
                     borderBottomRightRadius="25px"
                 >
                    <Box>
                        <Image style={{
                            width: "48%",
                            margin: "5%"
                        }} 
                            src='https://img.naukimg.com/logo_images/groups/v2/4582763.gif' 
                            alt='comapanylogo'
                        />
                    </Box>
                    <Box style={{
                        width: "75%", 
                        margin: "auto", 
                        marginTop: "2%",
                        marginBottom: "2%",
                        backgroundColor: "#ebf3f5",
                        padding: "5%",
                        borderRadius: "6px",
                        }}>
                        <Text style={{fontWeight: "bold"}}>Biz2Credit</Text>
                        <Text style={{fontSize: "80%"}}>⭐4.4 <span style={{marginLeft: "3%", borderLeft: "1px solid gray", paddingLeft: "2%"}}>171 reviews</span></Text>
                    </Box>
                    <Box style={{margin: "5%"}}>
                        <Text style={{fontSize: "80%"}}>
                            Leading the #FinTech Revolution.
                        </Text>
                    </Box>
                    <Box>
                        <Button style={{
                            padding: "3% 6%",
                            backgroundColor: "#e1f3f7",
                            marginTop: "2%",
                            borderRadius: "20px",
                            color: "blue",
                            fontWeight: "bold"
                        }}
                        >
                            View Jobs
                        </Button>
                    </Box>
                </Box>
            
{/* fifth inner box  */}

                <Box 
                     boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
                     padding="8%"
                     _hover={{cursor: "pointer",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}
                     margin="3%"
                     marginRight="5%"
                     marginLeft="5%"
                     borderTopRightRadius="10px"
                     borderTopLeftRadius="25px"
                     borderBottomLeftRadius="10px"
                     borderBottomRightRadius="25px"
                 >
                    <Box>
                        <Image style={{
                            width: "48%",
                            margin: "5%"
                        }} 
                            src='https://img.naukimg.com/logo_images/groups/v2/42932.gif' 
                            alt='comapanylogo'
                        />
                    </Box>
                    <Box 
                        style={{
                        width: "75%", 
                        margin: "auto", 
                        marginTop: "2%",
                        marginBottom: "2%",
                        backgroundColor: "#ebf3f5",
                        padding: "5%",
                        borderRadius: "6px",
                        }}>
                        <Text style={{fontWeight: "bold"}}>Genpact</Text>
                        <Text style={{fontSize: "80%"}}>⭐4.0 <span style={{marginLeft: "3%", borderLeft: "1px solid gray", paddingLeft: "2%"}}>20.5K+ reviews</span></Text>
                    </Box>
                    <Box style={{margin: "5%"}}>
                        <Text style={{fontSize: "80%"}}>
                            Global professional services firm
                        </Text>
                    </Box>
                    <Box>
                        <Button style={{
                            padding: "3% 6%",
                            backgroundColor: "#e1f3f7",
                            marginTop: "2%",
                            borderRadius: "20px",
                            color: "blue",
                            fontWeight: "bold"
                        }}
                        >
                            View Jobs
                        </Button>
                    </Box>
                </Box>
            </Box>


{/* Second outer box  */}
      
<Box 
display="grid" 
gridTemplateColumns={{
    base: "repeat(2, 1fr)", 
    sm: "repeat(3, 1fr)", 
    md: "repeat(5, 1fr)", 
    lg: "repeat(5, 1fr)"
}}
    style={{
    marginTop: "2%",
    marginBottom: "2%",
}}>

{/* first inner box */}

                <Box 
                     boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
                     padding="8%"
                     _hover={{cursor: "pointer",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}
                     margin="3%"
                     marginRight="5%"
                     marginLeft="5%"
                     borderTopRightRadius="10px"
                     borderTopLeftRadius="25px"
                     borderBottomLeftRadius="10px"
                     borderBottomRightRadius="25px"
                 >
                    <Box>
                        <Image style={{
                            width: "48%",
                            margin: "5%"
                        }} 
                            src='https://img.naukimg.com/logo_images/groups/v2/4156.gif' 
                            alt='comapanylogo'
                        />
                    </Box>
                    <Box 
                        style={{
                        width: "75%", 
                        margin: "auto", 
                        marginTop: "2%",
                        marginBottom: "2%",
                        backgroundColor: "#ebf3f5",
                        padding: "5%",
                        borderRadius: "6px",
                        }}>
                        <Text style={{fontWeight: "bold"}}>Cognizant</Text>
                        <Text style={{fontSize: "80%"}}>⭐3.9 <span style={{marginLeft: "3%", borderLeft: "1px solid gray", paddingLeft: "2%"}}>28.8K+ reviews</span></Text>
                    </Box>
                    <Box style={{margin: "5%"}}>
                        <Text style={{fontSize: "80%"}}>
                           Leading ITeS company with global presence.
                        </Text>
                    </Box>
                    <Box>
                        <Button style={{
                            padding: "3% 6%",
                            backgroundColor: "#e1f3f7",
                            marginTop: "2%",
                            borderRadius: "20px",
                            color: "blue",
                            fontWeight: "bold"
                        }}
                        >
                            View Jobs
                        </Button>
                    </Box>
                </Box>
{/* second inner box */}

                <Box 
                    boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
                    padding="8%"
                    _hover={{cursor: "pointer",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}
                    margin="3%"
                    marginRight="5%"
                    marginLeft="5%"
                    borderTopRightRadius="10px"
                    borderTopLeftRadius="25px"
                    borderBottomLeftRadius="10px"
                    borderBottomRightRadius="25px"
                >
                    <Box>
                        <Image style={{
                            width: "48%",
                            margin: "5%"
                        }} 
                            src='https://img.naukimg.com/logo_images/groups/v2/419316.gif' 
                            alt='comapanylogo'
                        />
                    </Box>
                    <Box 
                        style={{
                        width: "75%", 
                        margin: "auto", 
                        marginTop: "2%",
                        marginBottom: "2%",
                        backgroundColor: "#ebf3f5",
                        padding: "5%",
                        borderRadius: "6px",
                        }}>
                        <Text style={{fontWeight: "bold"}}>Synechron</Text>
                        <Text style={{fontSize: "80%"}}>⭐4.2 <span style={{marginLeft: "3%", borderLeft: "1px solid gray", paddingLeft: "2%"}}>1.5K+ reviews</span></Text>
                    </Box>
                    <Box style={{margin: "5%"}}>
                        <Text style={{fontSize: "80%"}}>
                            Information Technology Company
                        </Text>
                    </Box>
                    <Box>
                        <Button style={{
                            padding: "3% 6%",
                            backgroundColor: "#e1f3f7",
                            marginTop: "2%",
                            borderRadius: "20px",
                            color: "blue",
                            fontWeight: "bold"
                        }}
                        >
                            View Jobs
                        </Button>
                    </Box>
                </Box>


{/* third inner box */}

                <Box 
                    boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
                    padding="8%"
                    _hover={{cursor: "pointer",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}
                    margin="3%"
                    marginRight="5%"
                    marginLeft="5%"
                    borderTopRightRadius="10px"
                    borderTopLeftRadius="25px"
                    borderBottomLeftRadius="10px"
                    borderBottomRightRadius="25px"
                >
                    <Box>
                        <Image style={{
                            width: "48%",
                            margin: "5%"
                        }} 
                            src='https://img.naukimg.com/logo_images/groups/v2/42932.gif' 
                            alt='comapanylogo'
                        />
                    </Box>
                    <Box style={{
                        width: "75%", 
                        margin: "auto", 
                        marginTop: "2%",
                        marginBottom: "2%",
                        backgroundColor: "#ebf3f5",
                        padding: "5%",
                        borderRadius: "6px",
                        }}>
                        <Text style={{fontWeight: "bold"}}>Genpact</Text>
                        <Text style={{fontSize: "80%"}}>⭐4.0 <span style={{marginLeft: "3%", borderLeft: "1px solid gray", paddingLeft: "2%"}}>20.5K+ reviews</span></Text>
                    </Box>
                    <Box style={{margin: "5%"}}>
                        <Text style={{fontSize: "80%"}}>
                            Global professional services firm
                        </Text>
                    </Box>
                    <Box>
                        <Button style={{
                            padding: "3% 6%",
                            backgroundColor: "#e1f3f7",
                            marginTop: "2%",
                            borderRadius: "20px",
                            color: "blue",
                            fontWeight: "bold"
                        }}
                        >
                            View Jobs
                        </Button>
                    </Box>
                </Box>


{/* fourth inner box */}

                <Box 
                    boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
                    padding="8%"
                    _hover={{cursor: "pointer",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}
                    margin="3%"
                    marginRight="5%"
                    marginLeft="5%"
                    borderTopRightRadius="10px"
                    borderTopLeftRadius="25px"
                    borderBottomLeftRadius="10px"
                    borderBottomRightRadius="25px"
                >
                    <Box>
                        <Image style={{
                            width: "48%",
                            margin: "5%"
                        }} 
                            src='https://img.naukimg.com/logo_images/groups/v2/21746.gif' 
                            alt='comapanylogo'
                        />
                    </Box>
                    <Box style={{
                        width: "75%", 
                        margin: "auto", 
                        marginTop: "2%",
                        marginBottom: "2%",
                        backgroundColor: "#ebf3f5",
                        padding: "5%",
                        borderRadius: "6px",
                        }}>
                        <Text style={{fontWeight: "bold"}}>Fis</Text>
                        <Text style={{fontSize: "80%"}}>⭐4.1 <span style={{marginLeft: "3%", borderLeft: "1px solid gray", paddingLeft: "2%"}}>3.5K+ reviews</span></Text>
                    </Box>
                    <Box style={{margin: "5%"}}>
                        <Text style={{fontSize: "80%"}}>
                            Fis is hiring 3 to 10yrs exp. in C++ & Mumps developer
                        </Text>
                    </Box>
                    <Box>
                        <Button style={{
                            padding: "3% 6%",
                            backgroundColor: "#e1f3f7",
                            marginTop: "2%",
                            borderRadius: "20px",
                            color: "blue",
                            fontWeight: "bold"
                        }}
                        >
                            View Jobs
                        </Button>
                    </Box>
                </Box>
            

{/* fifth inner box  */}

                <Box 
                    boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
                    padding="8%"
                    _hover={{cursor: "pointer",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}
                    margin="3%"
                    marginRight="5%"
                    marginLeft="5%"
                    borderTopRightRadius="10px"
                    borderTopLeftRadius="25px"
                    borderBottomLeftRadius="10px"
                    borderBottomRightRadius="25px"
                >
                    <Box>
                        <Image style={{
                            width: "48%",
                            margin: "5%"
                        }} 
                            src='https://img.naukimg.com/logo_images/groups/v2/42932.gif' 
                            alt='comapanylogo'
                        />
                    </Box>
                    <Box style={{
                        width: "75%", 
                        margin: "auto", 
                        marginTop: "2%",
                        marginBottom: "2%",
                        backgroundColor: "#ebf3f5",
                        padding: "5%",
                        borderRadius: "6px",
                        }}>
                        <Text style={{fontWeight: "bold"}}>Genpact</Text>
                        <Text style={{fontSize: "80%"}}>⭐4.0 <span style={{marginLeft: "3%", borderLeft: "1px solid gray", paddingLeft: "2%"}}>20.5K+ reviews</span></Text>
                    </Box>
                    <Box style={{margin: "5%"}}>
                        <Text style={{fontSize: "80%"}}>
                            Global professional services firm
                        </Text>
                    </Box>
                    <Box>
                        <Button style={{
                            padding: "3% 6%",
                            backgroundColor: "#e1f3f7",
                            marginTop: "2%",
                            borderRadius: "20px",
                            color: "blue",
                            fontWeight: "bold"
                        }}
                        >
                            View Jobs
                        </Button>
                    </Box>
                </Box>
            </Box>
{/* third outer box  */}


<Box
display="grid" 
gridTemplateColumns={{
    base: "repeat(2, 1fr)", 
    sm: "repeat(3, 1fr)", 
    md: "repeat(5, 1fr)", 
    lg: "repeat(5, 1fr)"
}}
    style={{
    marginTop: "2%",
    marginBottom: "2%",
}}>

{/* first inner box */}

                <Box 
                    boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
                    padding="8%"
                    _hover={{cursor: "pointer",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}
                    margin="3%"
                    marginRight="5%"
                    marginLeft="5%"
                    borderTopRightRadius="10px"
                    borderTopLeftRadius="25px"
                    borderBottomLeftRadius="10px"
                    borderBottomRightRadius="25px"
                >
                    <Box>
                        <Image style={{
                            width: "48%",
                            margin: "5%"
                        }} 
                            src='https://img.naukimg.com/logo_images/groups/v2/1288.gif' 
                            alt='comapanylogo'
                        />
                    </Box>
                    <Box style={{
                        width: "75%", 
                        margin: "auto", 
                        marginTop: "2%",
                        marginBottom: "2%",
                        backgroundColor: "#ebf3f5",
                        padding: "5%",
                        borderRadius: "6px",
                        }}>
                        <Text style={{fontWeight: "bold"}}>Capgemini</Text>
                        <Text style={{fontSize: "80%"}}>⭐3.9 <span style={{marginLeft: "3%", borderLeft: "1px solid gray", paddingLeft: "2%"}}>23.4K+ reviews</span></Text>
                    </Box>
                    <Box style={{margin: "5%"}}>
                        <Text style={{fontSize: "80%"}}>
                            Global leader in technology services
                        </Text>
                    </Box>
                    <Box>
                        <Button style={{
                            padding: "3% 6%",
                            backgroundColor: "#e1f3f7",
                            marginTop: "2%",
                            borderRadius: "20px",
                            color: "blue",
                            fontWeight: "bold"
                        }}
                        >
                            View Jobs
                        </Button>
                    </Box>
                </Box>
{/* second inner box */}

                <Box 
                    boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
                    padding="8%"
                    _hover={{cursor: "pointer",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}
                    margin="3%"
                    marginRight="5%"
                    marginLeft="5%"
                    borderTopRightRadius="10px"
                    borderTopLeftRadius="25px"
                    borderBottomLeftRadius="10px"
                    borderBottomRightRadius="25px"
                >
                    <Box>
                        <Image style={{
                            width: "48%",
                            margin: "5%"
                        }} 
                            src='https://img.naukimg.com/logo_images/groups/v2/9558.gif' 
                            alt='comapanylogo'
                        />
                    </Box>
                    <Box style={{
                        width: "75%", 
                        margin: "auto", 
                        marginTop: "2%",
                        marginBottom: "2%",
                        backgroundColor: "#ebf3f5",
                        padding: "5%",
                        borderRadius: "6px",
                        }}>
                        <Text style={{fontWeight: "bold"}}>Nagarro</Text>
                        <Text style={{fontSize: "80%"}}>⭐4.5 <span style={{marginLeft: "3%", borderLeft: "1px solid gray", paddingLeft: "2%"}}>2.5K+ reviews</span></Text>
                    </Box>
                    <Box style={{margin: "5%"}}>
                        <Text style={{fontSize: "80%"}}>
                            Leader in digital product engineering.
                        </Text>
                    </Box>
                    <Box>
                        <Button style={{
                            padding: "3% 6%",
                            backgroundColor: "#e1f3f7",
                            marginTop: "2%",
                            borderRadius: "20px",
                            color: "blue",
                            fontWeight: "bold"
                        }}
                        >
                            View Jobs
                        </Button>
                    </Box>
                </Box>


{/* third inner box */}

                <Box 
                    boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
                    padding="8%"
                    _hover={{cursor: "pointer",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}
                    margin="3%"
                    marginRight="5%"
                    marginLeft="5%"
                    borderTopRightRadius="10px"
                    borderTopLeftRadius="25px"
                    borderBottomLeftRadius="10px"
                    borderBottomRightRadius="25px"
                >
                    <Box>
                        <img style={{
                            width: "48%",
                            margin: "5%"
                        }} 
                            src='https://img.naukimg.com/logo_images/groups/v2/4614431.gif' 
                            alt='comapanylogo'
                        />
                    </Box>
                    <Box style={{
                        width: "75%", 
                        margin: "auto", 
                        marginTop: "2%",
                        marginBottom: "2%",
                        backgroundColor: "#ebf3f5",
                        padding: "5%",
                        borderRadius: "6px",
                        }}>
                        <Text style={{fontWeight: "bold"}}>Netcracker</Text>
                        <Text style={{fontSize: "80%"}}>⭐3.7 <span style={{marginLeft: "3%", borderLeft: "1px solid gray", paddingLeft: "2%"}}>376 reviews</span></Text>
                    </Box>
                    <Box style={{margin: "5%"}}>
                        <Text style={{fontSize: "80%"}}>
                            Global leader in BSS, OSS AND Cloud.
                        </Text>
                    </Box>
                    <Box>
                        <Button style={{
                            padding: "3% 6%",
                            backgroundColor: "#e1f3f7",
                            marginTop: "2%",
                            borderRadius: "20px",
                            color: "blue",
                            fontWeight: "bold"
                        }}
                        >
                            View Jobs
                        </Button>
                    </Box>
                </Box>


{/* fourth inner box */}

                <Box 
                    boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
                    padding="8%"
                    _hover={{cursor: "pointer",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}
                    margin="3%"
                    marginRight="5%"
                    marginLeft="5%"
                    borderTopRightRadius="10px"
                    borderTopLeftRadius="25px"
                    borderBottomLeftRadius="10px"
                    borderBottomRightRadius="25px"
                >
                    <Box>
                        <Image style={{
                            width: "48%",
                            margin: "5%"
                        }} 
                            src='https://img.naukimg.com/logo_images/groups/v2/2436002.gif' 
                            alt='comapanylogo'
                        />
                    </Box>
                    <Box style={{
                        width: "75%", 
                        margin: "auto", 
                        marginTop: "2%",
                        marginBottom: "2%",
                        backgroundColor: "#ebf3f5",
                        padding: "5%",
                        borderRadius: "6px",
                        }}>
                        <Text style={{fontWeight: "bold"}}>Xoriant</Text>
                        <Text style={{fontSize: "80%"}}>⭐4.3 <span style={{marginLeft: "3%", borderLeft: "1px solid gray", paddingLeft: "2%"}}>959 reviews</span></Text>
                    </Box>
                    <Box style={{margin: "5%"}}>
                        <Text style={{fontSize: "80%"}}>
                            Software development and technology services firm.
                        </Text>
                    </Box>
                    <Box>
                        <Button style={{
                            padding: "3% 6%",
                            backgroundColor: "#e1f3f7",
                            marginTop: "2%",
                            borderRadius: "20px",
                            color: "blue",
                            fontWeight: "bold"
                        }}
                        >
                            View Jobs
                        </Button>
                    </Box>
                </Box>
            

{/* fifth inner box  */}

                <Box 
                    boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
                    padding="8%"
                    _hover={{cursor: "pointer",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}
                    margin="3%"
                    marginRight="5%"
                    marginLeft="5%"
                    borderTopRightRadius="10px"
                    borderTopLeftRadius="25px"
                    borderBottomLeftRadius="10px"
                    borderBottomRightRadius="25px"
                >
                    <Box>
                        <Image style={{
                            width: "48%",
                            margin: "5%"
                        }} 
                            src='https://img.naukimg.com/logo_images/groups/v2/6206135.gif' 
                            alt='comapanylogo'
                        />
                    </Box>
                    <Box style={{
                        width: "75%", 
                        margin: "auto", 
                        marginTop: "2%",
                        marginBottom: "2%",
                        backgroundColor: "#ebf3f5",
                        padding: "5%",
                        borderRadius: "6px",
                        }}>
                        <Text style={{fontWeight: "bold"}}>Ice Mt</Text>
                        <Text style={{fontSize: "80%"}}>⭐4.4 <span style={{marginLeft: "3%", borderLeft: "1px solid gray", paddingLeft: "2%"}}>49 reviews</span></Text>
                    </Box>
                    <Box style={{margin: "5%"}}>
                        <Text style={{fontSize: "80%"}}>
                            Cloud-based plateform for mortgage finance industry
                        </Text>
                    </Box>
                    <Box>
                        <Button style={{
                            padding: "3% 6%",
                            backgroundColor: "#e1f3f7",
                            marginTop: "2%",
                            borderRadius: "20px",
                            color: "blue",
                            fontWeight: "bold"
                        }}
                        >
                            View Jobs
                        </Button>
                    </Box>
                </Box>
            </Box>


{/* fourth outer box  */}

<Box 
display="grid" 
gridTemplateColumns={{
    base: "repeat(2, 1fr)", 
    sm: "repeat(3, 1fr)", 
    md: "repeat(5, 1fr)", 
    lg: "repeat(5, 1fr)"
}}
    style={{
    marginTop: "2%",
    marginBottom: "2%",
}}>

{/* first inner box-shadow: ;*/}
                <Box 
                    boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
                    padding="8%"
                    _hover={{cursor: "pointer",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}
                    margin="3%"
                    marginRight="5%"
                    marginLeft="5%"
                    borderTopRightRadius="10px"
                    borderTopLeftRadius="25px"
                    borderBottomLeftRadius="10px"
                    borderBottomRightRadius="25px"
                >
                    <Box>
                        <Image style={{
                            width: "48%",
                            margin: "5%"
                        }} 
                            src='https://img.naukimg.com/logo_images/groups/v2/6206135.gif' 
                            alt='comapanylogo'
                        />
                    </Box>
                    <Box style={{
                        width: "75%", 
                        margin: "auto", 
                        marginTop: "2%",
                        marginBottom: "2%",
                        backgroundColor: "#ebf3f5",
                        padding: "5%",
                        borderRadius: "6px",
                        }}>
                        <Text style={{fontWeight: "bold"}}>Ice Mt</Text>
                        <p style={{fontSize: "80%"}}>⭐4.4 <span style={{marginLeft: "3%", borderLeft: "1px solid gray", paddingLeft: "2%"}}>49 reviews</span></p>
                    </Box>
                    <Box style={{margin: "5%"}}>
                        <p style={{fontSize: "80%"}}>
                            Cloud-based plateform for mortgage finance industry
                        </p>
                    </Box>
                    <Box>
                        <Button style={{
                            padding: "3% 6%",
                            backgroundColor: "#e1f3f7",
                            marginTop: "2%",
                            borderRadius: "20px",
                            color: "blue",
                            fontWeight: "bold"
                        }}
                        >
                            View Jobs
                        </Button>
                    </Box>
                </Box>
{/* second inner box */}

                <Box 
                    boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
                    padding="8%"
                    _hover={{cursor: "pointer",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}
                    margin="3%"
                    marginRight="5%"
                    marginLeft="5%"
                    borderTopRightRadius="10px"
                    borderTopLeftRadius="25px"
                    borderBottomLeftRadius="10px"
                    borderBottomRightRadius="25px"
                >
                    <Box>
                        <Image style={{
                            width: "48%",
                            margin: "5%"
                        }} 
                            src='https://img.naukimg.com/logo_images/groups/v2/18850.gif' 
                            alt='comapanylogo'
                        />
                    </Box>
                    <Box style={{
                        width: "75%", 
                        margin: "auto", 
                        marginTop: "2%",
                        marginBottom: "2%",
                        backgroundColor: "#ebf3f5",
                        padding: "5%",
                        borderRadius: "6px",
                        }}>
                        <p style={{fontWeight: "bold"}}>Oracle</p>
                        <p style={{fontSize: "80%"}}>⭐3.9 <span style={{marginLeft: "3%", borderLeft: "1px solid gray", paddingLeft: "2%"}}>3.9K+ reviews</span></p>
                    </Box>
                    <Box style={{margin: "5%"}}>
                        <p style={{fontSize: "80%"}}>
                            Cloud technology company since 1977.
                        </p>
                    </Box>
                    <Box>
                        <Button style={{
                            padding: "3% 6%",
                            backgroundColor: "#e1f3f7",
                            marginTop: "2%",
                            borderRadius: "20px",
                            color: "blue",
                            fontWeight: "bold"
                        }}
                        >
                            View Jobs
                        </Button>
                    </Box>
                </Box>


{/* third inner box */}

                <Box 
                     boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
                     padding="8%"
                     _hover={{cursor: "pointer",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}
                     margin="3%"
                     marginRight="5%"
                     marginLeft="5%"
                     borderTopRightRadius="10px"
                     borderTopLeftRadius="25px"
                     borderBottomLeftRadius="10px"
                     borderBottomRightRadius="25px"
                 >
                    <Box>
                        <Image style={{
                            width: "48%",
                            margin: "5%"
                        }} 
                            src='https://img.naukimg.com/logo_images/groups/v2/3835862.gif' 
                            alt='comapanylogo'
                        />
                    </Box>
                    <Box style={{
                        width: "75%", 
                        margin: "auto", 
                        marginTop: "2%",
                        marginBottom: "2%",
                        backgroundColor: "#ebf3f5",
                        padding: "5%",
                        borderRadius: "6px",
                        }}>
                        <Text style={{fontWeight: "bold"}}>Persistent</Text>
                        <Text style={{fontSize: "80%"}}>⭐4.1 <span style={{marginLeft: "3%", borderLeft: "1px solid gray", paddingLeft: "2%"}}>5.1K+ reviews</span></Text>
                    </Box>
                    <Box style={{margin: "5%"}}>
                        <Text style={{fontSize: "80%"}}>
                            Trusted global solutions company
                        </Text>
                    </Box>
                    <Box>
                        <Button style={{
                            padding: "3% 6%",
                            backgroundColor: "#e1f3f7",
                            marginTop: "2%",
                            borderRadius: "20px",
                            color: "blue",
                            fontWeight: "bold"
                        }}
                        >
                            View Jobs
                        </Button>
                    </Box>
                </Box>


{/* fourth inner box */}

                <Box 
                     boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
                     padding="8%"
                     _hover={{cursor: "pointer",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}
                     margin="3%"
                     marginRight="5%"
                     marginLeft="5%"
                     borderTopRightRadius="10px"
                     borderTopLeftRadius="25px"
                     borderBottomLeftRadius="10px"
                     borderBottomRightRadius="25px"
                 >
                    <Box>
                        <Image style={{
                            width: "48%",
                            margin: "5%"
                        }} 
                            src='https://img.naukimg.com/logo_images/groups/v2/4582763.gif' 
                            alt='comapanylogo'
                        />
                    </Box>
                    <Box style={{
                        width: "75%", 
                        margin: "auto", 
                        marginTop: "2%",
                        marginBottom: "2%",
                        backgroundColor: "#ebf3f5",
                        padding: "5%",
                        borderRadius: "6px",
                        }}>
                        <Text style={{fontWeight: "bold"}}>Biz2Credit</Text>
                        <Text style={{fontSize: "80%"}}>⭐4.4 <span style={{marginLeft: "3%", borderLeft: "1px solid gray", paddingLeft: "2%"}}>171 reviews</span></Text>
                    </Box>
                    <Box style={{margin: "5%"}}>
                        <Text style={{fontSize: "80%"}}>
                            Leading the #FinTech Revolution.
                        </Text>
                    </Box>
                    <Box>
                        <Button style={{
                            padding: "3% 6%",
                            backgroundColor: "#e1f3f7",
                            marginTop: "2%",
                            borderRadius: "20px",
                            color: "blue",
                            fontWeight: "bold"
                        }}
                        >
                            View Jobs
                        </Button>
                    </Box>
                </Box>
            
{/* fifth inner box  */}

                <Box 
                     boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
                     padding="8%"
                     _hover={{cursor: "pointer",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}
                     margin="3%"
                     marginRight="5%"
                     marginLeft="5%"
                     borderTopRightRadius="10px"
                     borderTopLeftRadius="25px"
                     borderBottomLeftRadius="10px"
                     borderBottomRightRadius="25px"
                 >
                    <Box>
                        <Image style={{
                            width: "48%",
                            margin: "5%"
                        }} 
                            src='https://img.naukimg.com/logo_images/groups/v2/42932.gif' 
                            alt='comapanylogo'
                        />
                    </Box>
                    <Box 
                        style={{
                        width: "75%", 
                        margin: "auto", 
                        marginTop: "2%",
                        marginBottom: "2%",
                        backgroundColor: "#ebf3f5",
                        padding: "5%",
                        borderRadius: "6px",
                        }}>
                        <Text style={{fontWeight: "bold"}}>Genpact</Text>
                        <Text style={{fontSize: "80%"}}>⭐4.0 <span style={{marginLeft: "3%", borderLeft: "1px solid gray", paddingLeft: "2%"}}>20.5K+ reviews</span></Text>
                    </Box>
                    <Box style={{margin: "5%"}}>
                        <Text style={{fontSize: "80%"}}>
                            Global professional services firm
                        </Text>
                    </Box>
                    <Box>
                        <Button style={{
                            padding: "3% 6%",
                            backgroundColor: "#e1f3f7",
                            marginTop: "2%",
                            borderRadius: "20px",
                            color: "blue",
                            fontWeight: "bold"
                        }}
                        >
                            View Jobs
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Carousel>
    );
}