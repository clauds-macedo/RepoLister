import { styles } from '../../container/styles'
import React, { useState, useContext } from 'react';
import axios from "axios";
import { Text, TouchableOpacity, TextInput, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { context } from '../../context/context';
import { ContextProvider } from '../../context/context';
import {Comfortaa_700Bold} from '@expo-google-fonts/comfortaa'
import { useFonts } from '@expo-google-fonts/comfortaa';
import {Image} from 'react-native'


export default function HomePg({navigation}:any){
    const Fonts = useFonts({
        Comfortaa_700Bold
    })    
    const newContext = useContext(context)
    const [user, setUser] = useState('');
    const [repos, setRepos] = useState([])
    const api = axios.create({
        baseURL: "https://api.github.com",
    });

    async function getData(){
        const response = await api.get(`/users/${user}`)
        newContext?.setUserData(response.data)
    }

    async function getRepoData(){
        const responseRepos = await api.get(`/users/${user}/repos`)
        newContext?.setUserRepo(responseRepos.data)
    }



    return(

        <ContextProvider>
            <View style = {styles.Bg}>
                <View style = {styles.SearchPage}>
                    <Text style = {{fontSize: 30, marginBottom: 10, fontFamily: 'Comfortaa_700Bold',}}>RepoLister</Text>
                    <View>
                        <Image source = {{uri: "https://cdn-icons-png.flaticon.com/512/25/25231.png"}}
                        style = {{height: 180, width: 180}}/>
                    </View>
                    <View style = {styles.InputBox}>
                        <TextInput style = {styles.InputDecoration}
                        placeholder = "Digite o nome do usuário"
                        onChangeText = {user => setUser(user)}
                        defaultValue = {user}/>
                        <TouchableOpacity onPress = {() => {
                            
                            if (user == '') alert('O campo de pesquisa não pode estar em branco.')
                            else{
                                getData();
                                getRepoData();
                                navigation.navigate('Profile')
                            }
                        }}>
                            <Ionicons name="search" size={32} color="black" backgroundColor = "#212121"/>
                        </TouchableOpacity>
                    </View>
                </View>
            
            </View>
        </ContextProvider>
    )
}