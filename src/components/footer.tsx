import React from "react";
import Flex from "../Styles/styledComponent/Flex";
import Text from "../Styles/styledComponent/Text";


function Footer (){
    return(
        <Flex justify={"center"} align="end" css={{
            marginTop:"$5",width:"100%",
            padding:"$2 $1 $1 $1",
            borderTop:"1px solid $onBg300"
        }}>
            <Text css={{
                headline5:"700"
            }}>Pay Me</Text>
            <Text css={{
                subhead2_i:"500",
                color:"$onBg300",padding:"0 $1"
            }}>  Powerd By Syaw</Text>
        </Flex>
    )
}


export default Footer