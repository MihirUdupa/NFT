import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    view:{
        alignItems: 'center',
        justifyContent: 'center',
    },
    p:{
        top:80,
        color:'#15f4ee',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily:"Roboto",
        fontSize:45,
        textShadowColor:'#15f4ee',
        textShadowOffset:{width: -3, height: 2},
        textShadowRadius: 15,
    },
    img:{
        width:'175%',
        paddingTop:350,
        position:"absolute",
        paddingLeft: 0,
    },
    logo:{
        width:200,
        height:200,
    },
    logoImage:{
        width:200,
        height:200,
    },
    btnComponent:{
        paddingTop:360,
        padding:10,
    },
    background:{
        backgroundColor:'#151F28',
        height:'100%'
    }
})

export default styles