import { StyleSheet } from "react-native";
import styled from "styled-components";
import React from "react";

export const styles = StyleSheet.create({
    
    InputDecoration: {
        borderColor: "#212121",
        padding: 20,
        marginTop: 10,
        width: 300,
        borderWidth: 1,
        marginRight: 10,
        fontSize: 20,
        borderRadius: 20
    },
    Bg: {
        width: '100%',
        height: '100%',
        display: 'flex',
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        padding: 20
    },
    SearchPage: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    InputBox: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: "center",
        flexDirection: 'row',
        marginTop: 10,
        borderRadius: 20
    }
})
