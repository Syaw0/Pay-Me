import React from "react";
import Ico_Card from "../asesst/Icons/Ico_Card";
import Ico_Pad from "../asesst/Icons/Ico_Pad";
import Ico_Tick from "../asesst/Icons/Ico_Tick";
import HandleInput from "../handleInputs";
import Flex from "../Styles/styledComponent/Flex";
import Input from "../Styles/styledComponent/Input";
import Text from "../Styles/styledComponent/Text";
function Inputs_expireDate (){
    return(
                    
        <Flex role={"inputs_expireDate"} dir={"row"} justify="center" align={"center"} css={{
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
            <Flex  onClick={(e)=>{HandleInput(e)}} justify={"between"} align="center" css={{
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
                    <Input tabIndex={4} maxLength={1} inputType={"otp"}></Input>
                    <Input tabIndex={5} maxLength={1} inputType={"otp"}></Input>

                    </Flex>

                    
            </Flex>

                <Text css={{
                    headline4:"500",
                    padding:"$1 $1 $3 $1"
                }}>/</Text>

            <Flex onClick={(e)=>{HandleInput(e)}} justify={"between"} align="center" css={{
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
                
                <Flex onClick={(e)=>{HandleInput(e)}} justify={"center"} align="center" css={{
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
                    <Input tabIndex={6} maxLength={1} inputType={"otp"}></Input>
                    <Input tabIndex={7} maxLength={1} inputType={"otp"}></Input>

                    </Flex>

                    
            </Flex>
            </Flex>


        </Flex>



    )
}

export default Inputs_expireDate