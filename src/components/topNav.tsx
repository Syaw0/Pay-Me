import React from "react";
import Flex from "../Styles/styledComponent/Flex";
import Text from "../Styles/styledComponent/Text";


function TopNav (){
    return(
        <Flex dir={"row"} justify="between" align={"center"} css={{
            width:"100%",
            borderBottom:"1px solid $onBg100",
            padding:"$2 0" ,

        }}>
        <Text css={{
            color:"$onBg",
            headline1:"700",
            "@bp2":{
                headline2:"700"
            }
        }}>Pay Me</Text>

        <Flex dir={"row"} justify="between" align={"center"} css={{
            width:"170px",
            "& p ":{
                width:"32px",
                flex_r:"",
                jc_ac:"",
                textAlign:"center",
                "@bp2":{
                    width:"22px",
                    headline5:"700"
                }
            },
            "@bp2":{
                width:"120px"
            }

        }}>
        <Text css={{
                backgroundColor:"$primary",
                color:"$onPrimary",
                headline4:"700",
                padding:"4px $1",
                borderRadius:"8px",

            }}>0</Text>
                        <Text css={{
                backgroundColor:"$primary",
                color:"$onPrimary",
                headline4:"700",
                padding:"4px $1",
                borderRadius:"8px",

            }}>1</Text>

            <Text css={{
                color:"$primary",
                headline4:"900",

            }}>:</Text>

                        <Text css={{
                backgroundColor:"$primary",
                color:"$onPrimary",
                headline4:"700",
                padding:"4px $1",
                borderRadius:"8px",

            }}>2</Text>
                        <Text css={{
                backgroundColor:"$primary",
                color:"$onPrimary",
                headline4:"700",
                padding:"4px $1",
                borderRadius:"8px",

            }}>3</Text>
        </Flex>
    
        </Flex>
    )
}



export default TopNav