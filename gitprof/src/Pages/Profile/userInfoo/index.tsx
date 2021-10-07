import React from 'react';
import { styles } from "../style";
import { View } from "react-native";
import { Text } from 'react-native';
import {Comfortaa_500Medium, useFonts} from '@expo-google-fonts/comfortaa';
import { Image } from 'react-native';

const Information = (props: any) => {

    

    const Fonts = useFonts({
        Comfortaa_500Medium
    })

    return(

        <>
            <View>
                <Image style = {{height: 180, width: 180, borderRadius: 100, marginBottom: 40}} source = {{uri: props.url}}/>
            </View>
                <View style = {styles.UserInformation}>
                    <Text style = {{fontFamily: 'Comfortaa_500Medium', fontSize: 20, marginBottom: 25}}>{props.name}</Text>
                </View>
                <View style = {{width: '80%'}}>
                    <Text style = {{fontFamily: 'Comfortaa_500Medium', fontSize: 18, textAlign: 'justify', opacity: 0.5}}>{props.bio}</Text>
                </View>
                <View style = {styles.UserInformation}>
                    <View style = {styles.Card}>
                        <Text style = {{fontFamily: 'Comfortaa_500Medium', fontSize: 20, marginBottom: 18}}>Seguidores</Text>
                        <Text style = {{fontFamily: 'Comfortaa_500Medium', fontSize: 20}}>{props.followers}</Text>
                    </View>
                    <View style = {styles.Card}>
                        <Text style = {{fontFamily: 'Comfortaa_500Medium', fontSize: 20, marginBottom: 18}}>Seguindo</Text>
                        <Text style = {{fontFamily: 'Comfortaa_500Medium', fontSize: 20}}>{props.following}</Text>
                    </View>
                </View>
        </>
            
        
    )

}

export default Information;