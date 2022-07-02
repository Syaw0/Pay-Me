import React from "react";
import Flex from "../Styles/styledComponent/Flex";
import Input from "../Styles/styledComponent/Input";
import Text from "../Styles/styledComponent/Text";
import Inputs_cardNumber from "./inputs_cardNumber"
import Inputs_cvcNumber from "./inputs_cvcNumber"
import Inputs_expireDate from "./inputs_expireDate"
import Inputs_password from "./inputs_password";


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

            <Inputs_cardNumber/>
            <Inputs_cvcNumber/>
            <Inputs_expireDate/>

            <Inputs_password/>

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