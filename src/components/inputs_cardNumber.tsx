import React from "react";
import Ico_Card from "../asesst/Icons/Ico_Card";
import Ico_Tick from "../asesst/Icons/Ico_Tick";
import Flex from "../Styles/styledComponent/Flex";
import Input from "../Styles/styledComponent/Input";
import Text from "../Styles/styledComponent/Text";
import HandleInput from "../handleInputs";

function Inputs_cardNumber (){
    return(
        <Flex role={"input-cardNumber"} dir={"column"} >
        <Text>Card Number</Text>
        <Text>Enter the 16-digit card number</Text>

        <Flex data-testid="cardNumberCon" onClick={HandleInput} justify={"between"} align="center" css={{
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
                <Input data-testid="first_input_card" maxLength={1} inputType={"otp"}></Input>
                <Input data-testid="second_input_card" maxLength={1} inputType={"otp"}></Input>
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
                <Input tabIndex={1} maxLength={1} inputType={"otp"}></Input>
                </Flex>
            <Ico_Tick width="24" height="24"/> 
        </Flex>
    </Flex>

    )
}

export default Inputs_cardNumber