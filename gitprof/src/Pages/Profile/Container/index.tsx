import { Container } from "../style";
import React from "react";

const UserProfile = (props: any) => {

    return(
    <Container style = {{background: "#fff"}}>
        {props.children}
    </Container>
    )

}

export default UserProfile;