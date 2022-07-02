import React from "react";
import Flex from "../Styles/styledComponent/Flex";
import Text from "../Styles/styledComponent/Text";

function ErrorCon(){
    return(
        <Flex justify={"center"} align="center" css={{
            position:"fixed",
            width:`${window.innerWidth}px`,
            height:"100vh",
            top:"0",
            left:"0",
            backgroundColor:"$onBg800",

        }}>
            <Text css={{
                color:"$bg",
                headline4:"900",

            }}>TimeOut Please Try Again</Text>
        </Flex>
    )
}

export default ErrorCon