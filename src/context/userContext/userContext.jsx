import { useEffect, useState } from "react";
import { createContext } from "react";

export let userContext=createContext()

export function UserContextProvider(props){
    const [userToken,setUserToken]=useState(null)
    useEffect(() => {
        if(localStorage.getItem('userToken')){
            setUserToken(localStorage.getItem('userToken'));
        }
    },[])
    return <userContext.Provider value={{userToken,setUserToken}}>
        {props.children}
    </userContext.Provider>
}