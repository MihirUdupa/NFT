import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    view:{
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom:100,
    },
    p:{
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
        top:-300,
        left:30,
        alignItems: 'center',
        width:100,
        height:100,
    },
    btnComponent:{
        // width:'100%',
        top:150,
        shadowColor:'#15f4ee',
        shadowOffset: {width: 0, height: 15},
        shadowOpacity: 0.4,
        shadowRadius: 10,
        padding:10,
    },
    button:{
        backgroundColor:'#15f4ee',
        borderRadius:10,
        width:100,
        height:25,
        justifyContent:'center',
        alignItems:'center',
    },
    buttonText:{
        color:'#101010',
        textAlign:"center",
        fontSize:20,
        fontWeight:'800',
    },
})

export default styles