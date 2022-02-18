import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        //flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#151F28',
        //padding:10,
        // left:0,
       
        top:0        
    },
    backcolor:
    {
        backgroundColor: '#151F28',
        height:'100%',
        

    },
    infobackground:{
        backgroundColor: '#487840',
        opacity:0.5,
        //alignItems: 'center',
        justifyContent: 'center',
        borderColor:'#cd853f',
        width:'100%',
        top:-60,
        paddingBottom:20
    },
    con:
    {
        borderColor:'#cd853f',
    },
    bor:{
     
        color:'pink'
    },
    co:{
        color:'#15f4ee',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily:"Roboto",
        width:'100%',
        fontSize:20,
        borderColor:'#cd853f',
    },
    //   pick:{
    //     backgroundColor: '#487840',
    //     borderColor:'#cd853f'
    //   }, 
    logo:{
        height:200,
        width:200,
        top:-60
    },
    img:{
        height:200,
        width:200,
        left:80,
    },
    menuBar:{
        top:10,
        left:-90,
        paddingRight:85,
    },
  
    
});

export default styles