import { createContext } from "react";


const userContext = createContext()

export default function userContextProvider({children}){
    return(<userContext.Provider values={""}>
    {children}
    </userContext.Provider>)
}