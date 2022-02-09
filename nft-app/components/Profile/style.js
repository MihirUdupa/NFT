import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    logo:{
        height:200,
        width:200,
        paddingLeft:150,
        alignContent:"space-between",
        borderRadius: 200/2,
    },
    img:{
        height:200,
        width:200,
        borderRadius: 200/2,
    },
    burgerMenu:{
        justifyContent:"flex-start",
    },
    header:{
        flexDirection:"row",
        top:10,
        left:10
    },
    userInfoBox:{
        top:50,
    },
    user:{
        top:-90,
        height:150,
        width:150,
        borderRadius: 150/2,
        alignItems:"center",
        alignSelf:"center"
    },
    userName:{
        top:-80,
        color:'#15f4ee',
        textAlign:"center",
        alignContent:"center",
        alignSelf:"center",
        fontSize:45
    },
    menuBox:{
        backgroundColor:'#487840',
        opacity:0.5,
        alignItems:"center",
        width:'100%',
        borderRadius:25,
    },
    menuBoxItem1:{
        opacity:1,
        flexDirection:"row",
    },
    itemText:{
        color:'#15f4ee',
        fontSize:25,
        paddingRight:15,
        paddingLeft:15,        
    },
    itemText1:{
        color:'#15f4ee',
        fontSize:25,
        paddingRight:58,
        paddingLeft:58,
    },
    line:{
        borderBottomColor: '#000000',
        borderBottomWidth: 1,
    },
    component:{
        backgroundColor:'#151F28',
        height:'100%',
    }
});

export default styles;