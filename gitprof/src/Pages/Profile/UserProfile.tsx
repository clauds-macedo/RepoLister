import React from "react";
import UserProfile from "./Container";
import Information from "./userInfoo";
import { useContext } from 'react';
import { context } from '../../context/context';
import { TouchableOpacity, Text } from "react-native";

export default function UserCompleteProfile ({navigation}: any){

    const newContext = useContext(context)



    return(

    
        <UserProfile>
            <Information
            login = {newContext?.userData?.login}
            name = {newContext?.userData?.login}
            bio =  {newContext?.userData?.bio}
            url = {newContext?.userData.avatar_url}
            following = {newContext?.userData.following}
            followers = {newContext?.userData.followers}/>
            <TouchableOpacity onPress = {() => {
                    navigation.navigate('Repos')
                    }} 
                    style = {{display: 'flex', padding: 20, width: '90%', alignItems: 'center', backgroundColor: 'black', top: '10%', borderRadius: 7}}>
                    <Text style = {{color: 'white'}}>LISTAR REPOSITÓRIOS</Text>
                </TouchableOpacity>
        </UserProfile>
        
    )

}
