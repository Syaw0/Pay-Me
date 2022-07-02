import React from "react";
import Flex from "../Styles/styledComponent/Flex";
import Input from "../Styles/styledComponent/Input";
import Text from "../Styles/styledComponent/Text";
import Ico_Card from "../asesst/Icons/Ico_Card";
import Ico_Tick from "../asesst/Icons/Ico_Tick";
import Ico_Pad from "../asesst/Icons/Ico_Pad";
function Inputs(){
    return(
        <Flex dir={"column"} css={{
            width:"100%" ,
            marginTop:"$4",
            "& div p:first-child":{
                color:"$onBg",
                headline6:"700",

            },
            "& div p:nth-child(2)":{
                color:"$onBg500",
                subhead2:"500",

            },
            "& div":{
                marginBottom:"$3"
            }
        }}>
            <Flex dir={"column"} >
                <Text>Card Number</Text>
                <Text>Enter the 16-digit card number</Text>

                <Flex justify={"between"} align="center" css={{
                    height:"100%",
                    "& svg:first-child":{
                        fill:"$onBg500"
                    },
                    "& svg:last-child":{
                        fill:"$onBg"
                    },
                    width:"100%",
                    border:"1px solid $onBg300",
                    borderRadius:"8px",
                    padding:"$1 $2",
                    marginTop:"$2",
                    cursor:"pointer",
                    "&:hover":{
                        borderColor:"$onBg500"
                    },
                    "@bp3":{
                        "& svg:last-child":{
                            width:"16px",
                            height:"16px",
                            position:"absolute",
                            left:"32px",
                            bottom:"3px"
                        },
                        "& svg:first-child":{
                            width:"16px",
                            height:"16px",
                            position:"absolute",
                            left:"10px",
                            bottom:"3px"
                        }
                    }
                }}>
                    <Ico_Card width="24" height="24"/>
                        <Flex css={{
                            height:"100%",
                            width:"80%",
                            marginTop:"$1",
                            // padding:"$1",
                            "& p":{
                                headline5:"600",
                                margin:"$1 $1 0 $1",
                                color:"$onBg500",
                                "@bp3":{
                                    margin:"$1 4px 0 4px",
                                    subhead2:"600"

                                }
                            },
                            "& input":{
                                margin:"0 2px",
                                // border:"1px solid white"
                            },
                            "@bp2":{
                                width:"100%",
                                jc_ac:"",
                            }
                        }}>
                        <Input maxLength={1} inputType={"otp"}></Input>
                        <Input maxLength={1} inputType={"otp"}></Input>
                        <Input maxLength={1} inputType={"otp"}></Input>
                        <Input maxLength={1} inputType={"otp"}></Input>
                        <Text>-</Text>
                        <Input maxLength={1} inputType={"otp"}></Input>
                        <Input  maxLength={1}inputType={"otp"}></Input>
                        <Input maxLength={1} inputType={"otp"}></Input>
                        <Input maxLength={1} inputType={"otp"}></Input>
                        <Text>-</Text>
                        <Input maxLength={1} inputType={"otp"}></Input>
                        <Input maxLength={1} inputType={"otp"}></Input>
                        <Input maxLength={1} inputType={"otp"}></Input>
                        <Input maxLength={1} inputType={"otp"}></Input>
                        <Text>-</Text>
                        <Input maxLength={1} inputType={"otp"}></Input>
                        <Input maxLength={1} inputType={"otp"}></Input>
                        <Input maxLength={1} inputType={"otp"}></Input>
                        <Input maxLength={1} inputType={"otp"}></Input>
                        </Flex>
                    <Ico_Tick width="24" height="24"/> 
                </Flex>
            </Flex>


                        
            <Flex dir={"row"} justify="center" align={"center"} css={{
                "@bp3":{
                    flex_c:""
                }
            }}>
                <Flex dir={"column"} css={{
                    width:"60%",
                    "@bp3":{
                        width:"100%"
                    }
                }}>
                <Text>CVC Number</Text>
                <Text>Enter the 3 or 4 digit CVC number</Text>
                </Flex>
                <Flex justify={"between"} align="center" css={{
                    width:"40%",
                    "@bp3":{
                        width:"100%"
                    },
                    "& svg:first-child":{
                        fill:"$onBg500"
                    },
                    "& svg:last-child":{
                        fill:"$onBg"
                    },
                    // width:"100%",
                    border:"1px solid $onBg300",
                    borderRadius:"8px",
                    padding:"$1 $2",
                    marginTop:"$1",
                    cursor:"pointer",
                    "&:hover":{
                        borderColor:"$onBg500"
                    }
                }}>
                    
                    <Flex justify={"center"} align="center" css={{
                            width:"100%",
                            position:"relative",    
                            "& p":{
                                headline5:"600",
                                margin:"0 $1",
                                color:"$onBg500"
                            },
                            "& input":{
                                margin:"$1 2px 0 2px",
                            },
                            "& svg":{
                                position:"absolute",
                                right:"0",
                                top:"50%",
                                fill:"$onBg500",

                            }
                        }}>
                        <Input maxLength={1} inputType={"otp"}></Input>
                        <Input maxLength={1} inputType={"otp"}></Input>
                        <Input maxLength={1} inputType={"otp"}></Input>
                        <Input maxLength={1} inputType={"otp"}></Input>
                        <Ico_Pad width="24" height="24"/>
                        </Flex>
                </Flex>
            </Flex>





            <Flex dir={"row"} justify="center" align={"center"} css={{
                "@bp3":{
                    flex_c:"",
                    width:"100%",
                    border:"1px solid withe"

                }
            }} >
                <Flex dir={"column"} css={{
                    width:"100%",
                    "@bp3":{
                        width:"100%",

                    },
                }}>
                <Text>Expire Date</Text>
                <Text>Enter the Expiration date </Text>
                </Flex>


                <Flex justify={"center"} align="center" css={{
                    "@bp3":{
                        width:"100%",
                    },
                }}>
                <Flex  justify={"between"} align="center" css={{
                    // width:"20%",
                    "@bp3":{
                        width:"100%",
                    },
                    
                    "& svg:first-child":{
                        fill:"$onBg500"
                    },
                    "& svg:last-child":{
                        fill:"$onBg"
                    },
                    // width:"100%",
                    border:"1px solid $onBg300",
                    borderRadius:"8px",
                    padding:"$1 $2",
                    marginTop:"$1",
                    cursor:"pointer",
                    "&:hover":{
                        borderColor:"$onBg500"
                    }
                }}>
                    
                    <Flex justify={"center"} align="center" css={{
                            width:"100%",
                            position:"relative",    
                            "& p":{
                                headline5:"600",
                                margin:"0 $1",
                                color:"$onBg500"
                            },
                            "& input":{
                                margin:"$1 2px 0 2px",
                            },
                            "& svg":{
                                position:"absolute",
                                right:"0",
                                top:"50%",
                                fill:"$onBg500",
                                
                            }
                        }}>
                        <Input maxLength={1} inputType={"otp"}></Input>
                        <Input maxLength={1} inputType={"otp"}></Input>

                        </Flex>

                        
                </Flex>

                    <Text css={{
                        headline4:"500",
                        padding:"$1 $1 $3 $1"
                    }}>/</Text>

                <Flex justify={"between"} align="center" css={{
                    // width:"20%",
                    "@bp3":{
                        width:"100%",
                    },
                    "& svg:first-child":{
                        fill:"$onBg500"
                    },
                    "& svg:last-child":{
                        fill:"$onBg"
                    },
                    // width:"100%",
                    border:"1px solid $onBg300",
                    borderRadius:"8px",
                    padding:"$1 $2",
                    marginTop:"$1",
                    cursor:"pointer",
                    "&:hover":{
                        borderColor:"$onBg500"
                    }
                }}>
                    
                    <Flex justify={"center"} align="center" css={{
                            width:"100%",
                            position:"relative",    
                            "& p":{
                                headline5:"600",
                                margin:"0 $1",
                                color:"$onBg500"
                            },
                            "& input":{
                                margin:"$1 2px 0 2px",
                            },
                            "& svg":{
                                position:"absolute",
                                right:"0",
                                top:"50%",
                                fill:"$onBg500",
                                
                            }
                        }}>
                        <Input maxLength={1} inputType={"otp"}></Input>
                        <Input maxLength={1} inputType={"otp"}></Input>

                        </Flex>

                        
                </Flex>
                </Flex>


            </Flex>






            <Flex dir={"row"} justify="center" align={"center"}  css={{
                "@bp3":{
                    flex_c:"",
                    width:"100%",
                },
            }}>
                <Flex dir={"column"} css={{
                    width:"60%",
                    "@bp3":{
                        width:"100%",
                        
                    },
                }}>
                <Text>Password</Text>
                <Text>Enter your dynamic password</Text>
                </Flex>
                <Flex justify={"center"} align="center" css={{
                    width:"40%",
                    "@bp3":{
                        width:"100%",
                    },
                    "& svg:first-child":{
                        fill:"$onBg500"
                    },
                    "& svg:last-child":{
                        fill:"$onBg"
                    },
                    // width:"100%",
                    border:"1px solid $onBg300",
                    borderRadius:"8px",
                    padding:"$1 $2",
                    marginTop:"$1",
                    cursor:"pointer",
                    "&:hover":{
                        borderColor:"$onBg500"
                    }
                }}>
                    
                    <Flex justify={"center"} align="center" css={{
                            width:"100%",
                            position:"relative",    
                            // border:"1px solid white",
                            height:"100%",
                            marginTop:"$1",
                            "& p":{
                                headline5:"600",
                                margin:"0 $1",
                                color:"$onBg500"
                            },
                            "& input":{
                                margin:"$1 2px 0 2px",
                            },
                            "& svg":{
                                position:"absolute",
                                right:"0",
                                top:"50%",
                                fill:"$onBg500",

                            }
                        }}>
                        <Input  inputType={"otp"} type="password" css={{
                            border:"none",
                            width:"100%",
                        }}></Input>
                        <Ico_Pad width="24" height="24"/>
                        </Flex>
                </Flex>
            </Flex>



                        <Text cursor={"click"} css={{
                            width:"100%",
                            padding:"$1 $2",
                            backgroundColor:"$primary",
                            color:"$onPrimary",
                            textAlign:"center",
                            button:"900",
                            borderRadius:"8px",
                            boxShadow:"$1dp",
                            "&:hover":{
                                backgroundColor:"$onPrimary",
                                color:"$primary",
                            }
                        }}>
                            PAY NOW
                        </Text>




        </Flex>
    )
}

export default Inputs