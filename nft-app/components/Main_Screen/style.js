import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#151F28',
    height:'100%'
  },
  subContainer:{
    flexDirection:'row'
  },
  menuBar:{
    top:10,
    paddingRight:85,
    paddingLeft:15
  },
  detailsText:{
    paddingTop:5,
    paddingLeft:'30%'
  },
  headerText:{
    color:'#15f4ee'
  },
  userImage:{
    height:42,
    width:42
  },
  image:{
    height:42,
    width:42,
    borderRadius:42/2
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
  },
  body:{
    paddingLeft:60,
    paddingRight:60,
  },
  headerComponent:{
    flexDirection:'row'
  },
  imgBackgroundComponent:{
    backgroundColor:'#487840',
    opacity:0.9,
    borderRadius:10
  },
  imgComponent:{
    paddingTop:15,
    paddingLeft:15,
    paddingBottom:15
  },
  img:{
    width:64,
    height:64
  },
  bodyDirection:{
    flexDirection:'row'
  },
  bodyText:{
    color:'#15f4ee',
    fontSize:12
  },
  bodyComponent:{
    paddingLeft:90,
    marginTop:-60,
    marginBottom:25
  },
  batteryComponent:{
    top:40,
    backgroundColor:'#487840',
    opacity:0.7,
    borderRadius:15,
  },
  batteryHeaderBody:{
    color:'#15f4ee',
    top:10,
    paddingLeft:20
  },
  rightArrow1:{
    left:300,
  },
  smallBattery:{
    width:32,
    height:32,
    left:312
  },
  rightArrow2:{
    left:300
  },
  nftComponent:{
    top:-40,
    backgroundColor:'#487840',
    opacity:0.7,
    borderRadius:15,
  },
  nftHeaderBody:{
    color:'#15f4ee',
    top:10,
    paddingLeft:30
  },
  nftBodyComponent:{
    paddingLeft:90,
    marginTop:-60,
    marginBottom:25
  },
  leftArrow1:{
    top:-60,
    left:30,
  },
  carbon:{
    height:32,
    width:32,
    top:-60,
    left:20,
    position:'absolute'
  },
  leftArrow2:{
    left:32,
    top:-30
  },
  cCComponent:{
    top:-80,
    backgroundColor:'#487840',
    opacity:0.7,
    borderRadius:15,
  },
  cCHeaderBody:{
    color:'#15f4ee',
    top:10,
    paddingLeft:30
  },
  cCBodyComponent:{
    paddingLeft:90,
    marginTop:-60,
    marginBottom:25
  },
  bottomTabs:{
    marginTop:-50,
  }

})

export default styles
