import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    logo:{
        height:200,
        width:200,
        left:80,
    },
    img:{
        height:200,
        width:200,
        left:80,
    },
    img1:{
        top:200,
        position:"absolute",
        left:-100
    },
    img5:{
        paddingTop:285,
        position:"absolute",
        left:-100,
      
    },
    introComponent:{
        paddingTop:0,
        alignContent:"center",
        alignSelf:"center"
    },
    intro:{
        color:'#15f4ee',
        fontSize:45,
        textAlign:"center",
        alignContent:"center",
    },
    subTitle:{
        color:'#15f4ee',
        fontSize:25,
        textAlign:"center",
        alignContent:"center"
    },
    textBoxes:{
        paddingTop:15,
    },
    text1:{
        flexDirection:"row",
        width:200,
        alignContent:"space-between"
    },
    text2:{
        flexDirection:"row",
        width:200,
        top:15
    },
    tb1:{
        width: '100%',
        color: '#15f4ee',
        borderBottomColor:'#15f4ee',
        borderWidth: 1,
        borderRadius: 2,
        alignSelf: 'center',
        fontSize:15,
        paddingRight:5
    },
    btnComponent:{
        paddingTop:20,
        color:'#101010',
        width:225,
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
    
    body:{
        height:'100%',
        backgroundColor:'#151F28'
    },
    background:{
        //backgroundColor:'#151F28',
        height:'100%'
    }
});

export default styles