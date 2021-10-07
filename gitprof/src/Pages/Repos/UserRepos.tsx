import React from 'react';
import { styles } from '../Profile/style';
import { styles as style } from '../../container/styles';
import { View, Text } from 'react-native';
import {Comfortaa_500Medium} from '@expo-google-fonts/comfortaa'
import { useFonts } from '@expo-google-fonts/comfortaa';
import { ScrollView } from 'react-native-gesture-handler';
import { Image } from 'react-native';



const UserRepository = (props:any) => {
    const Fonts = useFonts({
        Comfortaa_500Medium
    })
    return (
        <View style = {{display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'center'}}>

            <View style = {styles.RepoList}>

                <ScrollView>
                    {(props?.repos).map((repo:any) => (
                    
                        <View key={repo?.id} style = {styles.Repository}>
                            <Text style = {{fontFamily: 'Comfortaa_500Medium', opacity: 0.8, fontSize: 23}}>
                                {repo?.name}
                            </Text>
                            {repo.private === false ? <View style = {{borderWidth: 1, borderRadius: 100, padding: 2, borderEndWidth: 10, display: 'flex', alignItems: 'center', marginBottom: 9, width: '50%'}}>
                                    <Text>Public Repository</Text>
                                </View> : <Text>b</Text>}
                            {repo?.description ?
                            <View style = {{width: '80%'}}>
                                <Text style = {{fontFamily: 'Comfortaa_500Medium', fontSize: 18, opacity: 0.8, marginBottom: 30}}>{repo?.description}</Text>
                            </View>
                            : <Text style = {{fontFamily: 'Comfortaa_500Medium', opacity: 0.8, marginBottom: 30}}>Sem descrição</Text>}
                            <Text style = {{fontFamily: 'Comfortaa_500Medium', fontSize: 15, marginBottom: 5}}>{repo?.language}</Text>
                            <View style = {{display: 'flex', flexDirection: 'row'}}>
                                <Image style = {{height: 15, width: 15}} source = {{uri: 'https://cdn-icons-png.flaticon.com/512/1828/1828884.png'}}/>
                                <Text style = {{marginRight: 15}}>{repo.stargazers_count}</Text>
                                <Image style = {{height: 15, width: 15}} source = {{uri: 'https://cdn.icon-icons.com/icons2/1875/PNG/512/gitfork_120084.png'}}/>
                                <Text style = {{marginRight: 15}}>{repo.forks}</Text>
                                
                            </View>
                            <View style = {{borderColor: 'black', borderWidth: 1, opacity: 0.2, width: '110%'}} />
                        </View>
                    ))}
                </ScrollView>

            </View>
        </View>
    );
}

export default UserRepository;