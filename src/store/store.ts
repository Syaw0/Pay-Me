import create from "zustand";

interface Store {
    isError:boolean ;
    setIsError:(value:boolean)=>void

}

const useStore = create<Store>()((set,get)=>({
    isError:false,
    setIsError:(value:boolean)=>{set(state=>{return{...state, isError:value}})}
}))


export {useStore}