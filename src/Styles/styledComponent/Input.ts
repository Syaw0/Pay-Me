import { styled } from "../@stitches.config";

const Input = styled("input", {
    variants:{
        "inputType":{
            "text":{
                minWidth:"300px",
                padding:"$1 $2",
                
                border:"none",
                borderBottom:"1px solid $onBg100",
                color:"$onBg700",
                subhead1:"700",
                letterSpacing:"0.5px",
                backgroundColor:"transparent",
                "&:focus":{
                    outline:"none",
                    borderBottom:"1px solid $onBg500",
                },
            
                "&::placeholder":{
                    color:"$onBg500",
                    subhead2_i:"500"
                },
            } ,
            text2:{
                width:"100%",
                backgroundColor:"transparent",
                color:"$onBg",
                padding:"$1 $2",
                border:"1px solid $onBg300",
                borderRadius:"8px",
                borderColor:"$onBg300",
                transition:"border-color 0.5s",
                subhead1:"600",
                "&:focus":{
                    outline:"none",
                    borderColor:"$onBg",
                    transition:"border-color 0.5s"
                },
            
                "&::placeholder":{
                    color:"$onBg500",
                    subhead2_i:"500"
                },
            },
            otp:{
                width:"15px",
                backgroundColor:"transparent",
                color:"$onBg500",
                border:"none",
                borderBottom:"1px solid $onBg500",
                headline6:"600",
                flex_r:"",
                jc_ac:"",
                textAlign:"center",
                cursor:"pointer",

                "@bp3":{
                    width:"10px",
                    subhead2:"600"
                },
                "&:focus":{
                    outline:"none",
                    borderColor:"$onBg",
                    transition:"border-color 0.5s"
                },
            
                "&::placeholder":{
                    color:"$onBg500",
                    subhead2_i:"500"
                },
            }
        }
    }
})

export default Input