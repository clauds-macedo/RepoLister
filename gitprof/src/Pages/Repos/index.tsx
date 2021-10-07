import React from "react";
import { ContextProvider } from "../../context/context";
import UserRepository from "./UserRepos";
import { useContext } from "react";
import { context } from "../../context/context";

export default function Repos({navigation}: any){

    const newContext = useContext(context)

    return(
        
        <UserRepository name= {newContext?.userData.login} repos={newContext?.userRepo}/>

    )

}