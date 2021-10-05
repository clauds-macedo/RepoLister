import { StyleSheet } from "react-native";
import styled from "styled-components";

export const styles = StyleSheet.create({
    InputDecoration: {
        borderColor: "#212121",
        padding: 10,
        marginTop: 10,
        width: 300,
        borderWidth: 1,
        marginRight: 10,
    },
    TextDecoration: {
        fontSize: 30,
        marginBottom: 10,
        fontFamily: 'sans-serif',
        
    }
})

export const Bg = styled.main`

    width: 100%;
    height: 100vh;
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    padding: 20px
    max-height: 100vh;

`

export const SearchPage = styled.div`

    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

`

export const InputBox = styled.div`

    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    margin-top: 10px;

`
