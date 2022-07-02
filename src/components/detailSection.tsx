import React from "react";
import Flex from "../Styles/styledComponent/Flex";
import Text from "../Styles/styledComponent/Text";
import Ico_Apple from "../asesst/Icons/Ico_Apple";
import Span from "../Styles/styledComponent/Span";
function DetailSection(){
    return(
        <Flex  css={{
            // border:"1px solid $onBg100",
            width:"100%",
            marginTop:"$5",
            borderBottom:"1px solid $onBg100",
            paddingBottom:"$6",
            "@bp2":{
                flex_c:"",
            }

        }}>
            <Flex dir={"column"} justify="between" align={"center"} css={{
                width:"70%",
                "&>*":{
                    width:"100%",
                    height:"100%",
                    padding:"$1 $2 $1 0",
                    borderRight:"1px solid $onBg300" ,
                    "@bp2":{
                        border:"none"
                    }
                },
                "& div p:first-child":{
                    headline6:"600",
                    color:"$onBg600",
                    "@bp3":{
                        subhead1:"600"
                    }
                },
                "& div p:last-child":{
                    headline6:"600",
                    color:"$onBg",
                    "@bp3":{
                        subhead1:"600"
                    }
                },
                "@bp2":{
                    width:'100%' ,
                    borderBottom:'1px solid $onBg300',
                    paddingBottom:"$2"
                },
            }}>
                <Flex dir={"row"} justify="between" align={"center"} css={{"& svg":{fill:"$onBg"}}}>
                    <Text>Company</Text>
                    <Text><Ico_Apple width="24" height="24"/>Apple</Text>
                </Flex>
                <Flex dir={"row"} justify="between" align={"center"} css={{}}>
                    <Text>Order Number</Text>
                    <Text>1254935</Text>
                </Flex>
                <Flex dir={"row"} justify="between" align={"center"} css={{}}>
                    <Text>Product</Text>
                    <Text>MacBook Air</Text>
                </Flex>
                <Flex dir={"row"} justify="between" align={"center"} css={{}}>
                    <Text>VAT(20%)</Text>
                    <Text>$100.00</Text>
                </Flex>
            </Flex>


            <Flex dir={"column"} justify="between" align={"center"} css={{
                width:"30%",
                padding:"$1 0 $1 $2",
                "@bp2":{
                    width:"100%",
                    padding:"$2 0 0 0",
                    flex_r:""
                }
            }}>
                <Flex dir={"column"} css={{
                    width:"100%",
                    height:"100%",
                }}>

                <Text css={{
                    color:"$onBg700",
                    headline5:"600",
                    paddingBottom:"$1"
                }}>You Have To Pay</Text>

                <Text css={{
                    color:"$onBg",
                    headline5:"900",
                    "@bp2":{
                        paddingLeft:"$3"
                    }

                }}>543.<Span css={{subhead2:"600"}}>99</Span> <Span css={{subhead2:"600" , color:"$onBg700"}}>USD</Span></Text>

                </Flex>

                <Flex dir={"column"} justify="center" align={"center"} css={{
                    marginTop:"$4",
                    // border:"1px solid white",
                    width:"100%",
                    "& svg":{
                        fill:"none",
                        stroke:"$onBg900",
                        strokeWidth:"1px",
                        width:"80px",
                        height:"80px"
                    }
                }}>
                    <Ico_Apple width="24" height="24"/>
                    <Text css={{
                        color:"$onBg700",
                        subhead1:"900"
                    }}>Apple</Text>
                </Flex>

            </Flex>

        </Flex>
    )
}


export default DetailSection