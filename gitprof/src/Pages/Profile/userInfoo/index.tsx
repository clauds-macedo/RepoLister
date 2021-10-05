import React from 'react';
import { processColor } from 'react-native';
import { InfoText, UserInformation, ProfileImg, Card, InfoNumber, Header } from '../style';
import { TouchableOpacity, Text } from 'react-native';
import {Comfortaa_500Medium, useFonts} from '@expo-google-fonts/comfortaa';

const Information = (props: any) => {

    const Fonts = useFonts({
        Comfortaa_500Medium
    })

    return(

        <>
            
            <ProfileImg src= {props.url} style = {{ }}/>
                <UserInformation style = {{}}>
                    <InfoText
                    style = {{color: 'black', fontSize: 36, fontFamily: 'Comfortaa_500Medium'}}>{props.name}</InfoText>
                </UserInformation>
                <UserInformation style = {{width: '80%'}}>
                    <InfoText style = {{color: 'black', fontSize: 20, fontFamily: 'Comfortaa_500Medium', textAlign: 'justify', opacity: '0.4'}}>{props.bio}</InfoText>
                </UserInformation>
                <UserInformation style = {{}}>
                    <Card style = {{}}>
                        <InfoText style = {{fontFamily: 'Comfortaa_500Medium', fontSize: 20}}>Seguidores</InfoText>
                        <InfoNumber style = {{fontFamily: 'Comfortaa_500Medium'}}>{props.followers}</InfoNumber>
                    </Card>
                    <Card style = {{}}>
                        <InfoText style = {{fontFamily: 'Comfortaa_500Medium', fontSize: 20}}>Seguindo</InfoText>
                        <InfoNumber style = {{fontFamily: 'Comfortaa_500Medium'}}>{props.following}</InfoNumber>
                    </Card>
                </UserInformation>
                <TouchableOpacity style = {{display: 'flex', padding: 10, width: '90%', alignItems: 'center', backgroundColor: 'black', top: '10%'}}>
                    <Text style = {{color: 'white'}}>LISTAR REPOSITÓRIOS</Text>
                </TouchableOpacity>
        </>
            
        
    )

}

export default Information;