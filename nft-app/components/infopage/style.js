import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#151F28',
    height:'100%',
    flex: 1,
  },
  listBackground:{
    width:'100%',
    marginTop:250,
    justifyContent:"center",
    alignItems:"center",
    flex:2,
    position:"absolute",
    marginBottom:150
  },
  list:{
    backgroundColor:'#487840',
    borderColor:'#FFC914',
    borderWidth:1,
    width:250,
    opacity:0.8,
    marginBottom:10
  },
  listColor:{
    color:'#15f4ee',
    textAlign:"center", 
    padding:10, 
  },
  modalBody:{
    backgroundColor:'#487840',
    opacity:0.8,
  },
  modalBorderStyles:{
    padding:25
  },
  modalBodyHeading:{
    textAlign:"center",
    fontSize:25,
    color:"#15f4ee",
    paddingBottom:15
  },
  centeredView:{
    marginBottom:640
  },
  modalBodyHeadingCenter:{
    justifyContent:"center",
    textAlign:"center",
    alignItems:"center"
  },
  closeButton:{
    position:"absolute",
    justifyContent:"flex-start",
    marginLeft:250,
    borderRadius:1,
    borderWidth:1,
    top:-25,
    left:30,
    backgroundColor:'red'
  },
  closeButtonText:{
    padding:5
  }
});

export default styles