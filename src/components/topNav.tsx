import { time } from "console";
import React ,{useEffect, useState} from "react";
import { useStore } from "../store/store";
import Flex from "../Styles/styledComponent/Flex";
import Text from "../Styles/styledComponent/Text";


function TopNav (){

    const [timer,setTimer] = useState({minute : 6 , second:0})
    let minute:{[index:string]:any}|string = timer.minute.toString()
    let sec:{[index:string]:any}|string = timer.second.toString()
    sec = sec.length!== 2 ?[0,sec] : [sec[0],sec[1]]
    minute = minute.length!== 2 ?[0,minute] : [minute[0],minute[1]]
    const setIsError = useStore(state=>state.setIsError)
    useEffect(()=>{

        let interval  = setTimeout(()=>{   
            if(timer.second === 0  ){
                if(timer.minute === 0){
                    throw new Error("time end")
                    setIsError(false)
                }else{
                    let newmin = timer.minute - 1 
                    setTimer({minute:newmin ,second:59 })
                }
            }else{
                let newsec = timer.second - 1
                setTimer(state=>{return{...state, second:newsec}})
            }
        },1000)


    })


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

            }}>{minute[0]}</Text>
                        <Text css={{
                backgroundColor:"$primary",
                color:"$onPrimary",
                headline4:"700",
                padding:"4px $1",
                borderRadius:"8px",

            }}>{minute[1]}</Text>

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

            }}>{sec[0]}</Text>
                        <Text css={{
                backgroundColor:"$primary",
                color:"$onPrimary",
                headline4:"700",
                padding:"4px $1",
                borderRadius:"8px",

            }}>{sec[1]}</Text>
        </Flex>
    
        </Flex>
    )
}



export default TopNav