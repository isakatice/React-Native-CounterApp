import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    conteiner: {
        alignItems: 'center',
        backgroundColor: 'black',
        display: 'flex',
        flex: 1,
        justifyContent:'center',
    },
    number:{
        color: 'white',
        fontSize: 85
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 15,
    },
})