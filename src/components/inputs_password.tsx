import React from "react";
import Ico_Card from "../asesst/Icons/Ico_Card";
import Ico_Pad from "../asesst/Icons/Ico_Pad";
import Ico_Tick from "../asesst/Icons/Ico_Tick";
import HandleInput from "../handleInputs";
import Flex from "../Styles/styledComponent/Flex";
import Input from "../Styles/styledComponent/Input";
import Text from "../Styles/styledComponent/Text";

function Inputs_password (){
    return(
                    
        <Flex role={"inputs_password"} dir={"row"} justify="center" align={"center"}  css={{
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
            <Flex onClick={(e)=>{HandleInput(e)}} justify={"center"} align="center" css={{
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
                
                <Flex  justify={"center"} align="center" css={{
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
                    <Input tabIndex={8}  inputType={"otp"} type="password" css={{
                        border:"none",
                        width:"100%",
                    }}></Input>
                    <Ico_Pad width="24" height="24"/>
                    </Flex>
            </Flex>
        </Flex>

    )
}

export default Inputs_password