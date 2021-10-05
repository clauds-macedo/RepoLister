import React from "react";
import UserProfile from "./Container";
import Information from "./userInfoo";
import { useState, useEffect, useContext } from 'react';
import { context } from '../../context/context';
import { ContextProvider } from "../../context/context";


export default function UserCompleteProfile (){

    const newContext = useContext(context)



    return(

    
        <UserProfile>
            <Information
            login = {newContext?.userData.login}
            name = {newContext?.userData?.login}
            bio =  {newContext?.userData?.bio}
            url = {newContext?.userData.avatar_url}
            following = {newContext?.userData.following}
            followers = {newContext?.userData.followers}/>
        </UserProfile>
        
    )

}
