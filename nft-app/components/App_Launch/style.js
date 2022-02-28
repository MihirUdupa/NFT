import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    view:{
        alignItems: 'center',
        justifyContent: 'center',
    },

    p:{
        top:40,
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
        paddingTop:285,
        position:"absolute",
        left:-100
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
        paddingTop:100,//340
        alignContent:"center",
        alignSelf:"center",
        alignItems:"center"
    },
    button:{
        backgroundColor:'#15f4ee',
        width:200,
        borderRadius:15
    },
    buttonText:{
        textAlign:"center",
        alignContent:"center",
        alignItems:"center",
        paddingTop:10,
        paddingBottom:10,
        fontSize:20
    },
    background:{
        backgroundColor:'#151F28',
        height:'100%'
    }
})

export default styles