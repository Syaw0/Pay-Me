import React from "react";
import Ico_Card from "../asesst/Icons/Ico_Card";
import Ico_Tick from "../asesst/Icons/Ico_Tick";
import Flex from "../Styles/styledComponent/Flex";
import Input from "../Styles/styledComponent/Input";
import Text from "../Styles/styledComponent/Text";

function Inputs_cardNumber (){
    return(
        <Flex dir={"column"} >
        <Text>Card Number</Text>
        <Text>Enter the 16-digit card number</Text>
        {/* <Input inputType={"text2"} ></Input> */}
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
            padding:"0 $2",
            marginTop:"$1",
            cursor:"pointer",
            "&:hover":{
                borderColor:"$onBg500"
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
                        color:"$onBg500"
                    },
                    "& input":{
                        margin:"0 2px",
                        // border:"1px solid white"
                    },
                    // border:"1px solid white"
                }}>
                <Input  inputType={"otp"}></Input>
                <Input inputType={"otp"}></Input>
                <Input inputType={"otp"}></Input>
                <Input inputType={"otp"}></Input>
                <Text>-</Text>
                <Input inputType={"otp"}></Input>
                <Input inputType={"otp"}></Input>
                <Input inputType={"otp"}></Input>
                <Input inputType={"otp"}></Input>
                <Text>-</Text>
                <Input inputType={"otp"}></Input>
                <Input inputType={"otp"}></Input>
                <Input inputType={"otp"}></Input>
                <Input inputType={"otp"}></Input>
                <Text>-</Text>
                <Input inputType={"otp"}></Input>
                <Input inputType={"otp"}></Input>
                <Input inputType={"otp"}></Input>
                <Input inputType={"otp"}></Input>
                </Flex>
            <Ico_Tick width="24" height="24"/> 
        </Flex>
    </Flex>
    )
}

export default Inputs_cardNumber