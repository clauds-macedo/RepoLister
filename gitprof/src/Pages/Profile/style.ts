import styled from "styled-components";
import { StyleSheet, Dimensions } from "react-native";

export const styles = StyleSheet.create({
    Container: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%'

    },
    Header: {
        display: 'flex',
        flexDirection: 'row-reverse',
        position: 'absolute',
        top: 10,
    },
    UserDetails: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    ProfileImg: {
        width: 128,
        height: 128,
        borderRadius: 70
    },
    UserInformation: {
        width: '100%',
        display: 'flex',
        height: 100,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    Card: {
        width: '40%',
        height: '54%',
        marginTop: 40,
        display: "flex",
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        borderRadius: 15
    },
    InfoText: {
        fontSize: 20,
        color: 'white',
        textAlign: "justify",
    },
    InfoNumber:{
        fontSize: 20
    },
    RepoList: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 30
        
    },
    Repository: {
        width: '100%',
        marginBottom: 80,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'justify'
    }
})