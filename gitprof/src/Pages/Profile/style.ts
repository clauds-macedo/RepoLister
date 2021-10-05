import styled from "styled-components";



export const Container = styled.main`

    width: 100%;
    background-color: "#212121";
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;

`

export const Header = styled.header`

    display: flex;
    flex-direction: row-reverse;
    position: absolute;
    top: 10px;
    filter: invert(100%);


`

export const UserDetails = styled.div`

    width: 100%;
    display: flex;
    align-content: center;
    justify-content: center;
    flex-direction: column;

`

export const ProfileImg = styled.img`

    width: 200px;
    border-radius: 70%;

`

export const UserInformation = styled.div`

    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;


`

export const Card = styled.div`

    width: 40%;
    height: 54%;
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
    border-radius: 15px;
`

export const InfoText = styled.h1`

    font-size: 20px;
    color: '#fff';
    text-align: justify;
    font-family: Comfortaa-VariableFont_wght;

`

export const InfoNumber = styled.h2`

    font-size: 20px;

`