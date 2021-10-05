import { Bg, SearchPage, InputBox, styles } from '../../container/styles'
import React, { useState, useEffect, useContext } from 'react';
import axios from "axios";
import { Text, TouchableOpacity, TextInput } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { context } from '../../context/context';
import { ContextProvider } from '../../context/context';



export default function HomePg({navigation}:any){
    
    const newContext = useContext(context)
    const [user, setUser] = useState('');
    const api = axios.create({
        baseURL: "https://api.github.com",
    });

    async function getData(){
        const response = await api.get(`/users/${user}`)
        newContext?.setUserData(response.data)
    }



    return(

        <ContextProvider>
            <Bg>
                <SearchPage>
                    <Text style = {styles.TextDecoration}>Seja bem-vindo.</Text>
                    <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="" width = "200px"
                    />
                    <InputBox>
                        <TextInput style = {styles.InputDecoration}
                        placeholder = "Digite o nome do usuário do github"
                        onChangeText = {user => setUser(user)}
                        defaultValue = {user}/>
                        <TouchableOpacity onPress = {() => {
                            
                            if (user == '') alert('O campo de pesquisa não pode estar em branco.')
                            else{
                                getData();
                                navigation.navigate('Profile')
                            }
                        }}>
                            <Ionicons name="search" size={32} color="black" backgroundColor = "#212121"/>
                        </TouchableOpacity>
                    </InputBox>
                </SearchPage>
            
            </Bg>
        </ContextProvider>
    )
}