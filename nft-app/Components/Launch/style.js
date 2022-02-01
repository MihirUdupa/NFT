import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    view:{
        alignItems: 'center',
        justifyContent: 'center',
    },
    p:{
        color:'#15f4ee',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily:"Roboto",
        fontSize:45,
        textShadowColor:'#15f4ee',
        textShadowOffset:{width: -3, height: 2},
        textShadowRadius: 15
    },
    img:{
        width:'175%',
        paddingTop:350,
        position:"absolute",
        paddingLeft: 0,
    }
})

export default styles