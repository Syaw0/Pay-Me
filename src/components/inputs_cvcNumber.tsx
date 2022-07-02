import React from "react";
import Ico_Card from "../asesst/Icons/Ico_Card";
import Ico_Pad from "../asesst/Icons/Ico_Pad";
import Ico_Tick from "../asesst/Icons/Ico_Tick";
import HandleInput from "../handleInputs";
import Flex from "../Styles/styledComponent/Flex";
import Input from "../Styles/styledComponent/Input";
import Text from "../Styles/styledComponent/Text";

function Inputs_cvcNumber (){
    return(
                    
        <Flex role={"input_cvcNumber"} dir={"row"} justify="center" align={"center"} css={{
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
            <Flex onClick={(e)=>{HandleInput(e)}} justify={"between"} align="center" css={{
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
                
                <Flex  justify={"center"} align="center" css={{
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
                    <Input tabIndex={2} maxLength={1} inputType={"otp"}></Input>
                    <Input maxLength={1} inputType={"otp"}></Input>
                    <Input maxLength={1} inputType={"otp"}></Input>
                    <Input tabIndex={3} maxLength={1} inputType={"otp"}></Input>
                    <Ico_Pad width="24" height="24"/>
                    </Flex>
            </Flex>
        </Flex>


    )
}

export default Inputs_cvcNumber