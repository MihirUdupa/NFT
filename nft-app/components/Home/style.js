import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#151F28',
    height:'100%'
  },
  subContainer:{
    flexDirection:'row'
  },
  headerText:{
    color:'#15f4ee'
  },
  userImage:{
    height:32,
    width:32
  },
  image:{
    height:32,
    width:32,
    borderRadius:32/2
  },
  subHeaderContent:{
    top:20
  },
  subHeader:{
    alignContent:"center",
    alignSelf:"center",
    color:'#15f4ee',
    fontSize:25
  },
  hrLine:{
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  buttonsMain:{
    top:25,
  },
  buttonsSub:{
    paddingLeft:100,
    flexDirection:'row'
  },
  btns:{
    borderRadius:5,
    borderWidth:1,
    borderColor:'#707070',
    paddingLeft:20,
    paddingRight:20
  },
  buttonTextsSelected:{
    color:'#EEFFFF'
  },
  buttonTexts:{
    color:'#808080'
  },
  btnText:{
    fontSize:15
  }
})

export default styles
