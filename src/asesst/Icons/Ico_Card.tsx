import React from "react"

function Ico_Card(props:{width:string , height:string }){
    return(
        <svg xmlns="http://www.w3.org/2000/svg"  version="1.1" id="mdi-credit-card-outline" width={props.width} height={props.height} viewBox="0 0 24 24"><path d="M20,8H4V6H20M20,18H4V12H20M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" /></svg>
    )
}

export default Ico_Card