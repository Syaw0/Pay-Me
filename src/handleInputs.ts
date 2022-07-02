
function HandleInput(e:any){    
    let elList:any
    if(e.currentTarget != undefined){
    elList = e.currentTarget.getElementsByTagName("input")
    }
    else{
        elList = e.getElementsByTagName("input")
    }

    if(elList[0].type === "password"){
        elList[0].focus()
        return
    }
    let startFocus = 0
    for(let i = 0 ; i!== elList.length ; i++){
        if(elList[i].value.trim() !== ""){
            startFocus++
            if(startFocus == elList.length ){startFocus = elList.length-1}
        }
    }

    for(let i = 0 ; i!== elList.length ; i++){

        elList[startFocus].focus()

        elList[i].addEventListener("keydown" , (e:any)=>{
            if(e.key === "Backspace" && i -1 >=0){
                if(elList[i].value.trim() === "" ){
                    elList[i - 1].value =" "
                    elList[i - 1].focus()
                }
            }
        })

        elList[i].addEventListener("keypress" , (e:any )=>{
            
            if(isFinite(e.key) && e.key !==" "){
                    e.target.value = e.key
                    if(i === elList.length - 1){

                        let el:any = document.querySelector(`input[tabindex="${elList[i].tabIndex+1}"]`)
                        el.focus()
                        HandleInput(el.parentElement)
                    }
                    if(i !== elList.length - 1){
                       
                        elList[i+1].focus()
                    }
            }else{  

                e.target.value = " "
            }
        })

    }
}


export default HandleInput

