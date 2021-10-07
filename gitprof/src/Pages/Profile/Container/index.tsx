import { styles } from "../style";
import { View } from "react-native";
import React from "react";

const UserProfile = (props: any) => {

    return(
    <View style = {styles.Container}>
        {props.children}
    </View>
    )

}

export default UserProfile;