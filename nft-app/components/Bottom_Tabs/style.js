import { StyleSheet } from "react-native";

const styles= StyleSheet.create({
    bottomTabsComponent:{
        alignItems:"center",
        alignContent:"center",
        opacity:0.5,
        position:"absolute",
    },
    otherTabs:{
        color:'#15f4ee'
    },
    highlitedTabs:{
        color:'#EEFFFF'
    },
    emptyComponent:{
        backgroundColor:'#487840',
        borderTopLeftRadius:25,
        borderTopRightRadius:25
    },
    spacing:{
        paddingLeft:0,
    },
    circleClass:{
        borderRadius:100/2,
        borderWidth:2,
        borderColor:'#15f4ee',
        left:1,
    },
    circleClassHighlited:{
        borderRadius:100/2,
        borderWidth:2,
        borderColor:'#EEFFFF',
        left:1,
    },
    btn:{
        top:50
    }
});

export default styles