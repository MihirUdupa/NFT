import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#151F28',
    height:'100%'
  },
  subContainer:{
    flexDirection:'row',
    paddingBottom:5
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
    width:42,
    borderRadius:42/2,
    paddingLeft:5
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
    flexDirection:'row',
    alignContent:"center",
    alignItems:"center",
    alignSelf:"center"
  },
  btns:{
    borderRadius:5,
    borderWidth:1,
    borderColor:'#505050',
    paddingLeft:20,
    paddingRight:20
  },
  buttonTextsSelected:{
    color:'#EEFFFF',
    fontWeight:"bold"
  },
  buttonTexts:{
    color:'#C0C0C0'
  },
  btnText:{
    fontSize:20
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
    paddingTop:'5%',
    paddingLeft:'5%',
    paddingBottom:'5%'
    // padding:'5%'
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
    marginBottom:'10%'
  },
  batteryComponent:{
    top:'40%',
    backgroundColor:'#487840',
    opacity:0.9,
    borderRadius:15,
  },
  batteryHeaderBody:{
    color:'#15f4ee',
    top:10,
    paddingLeft:'5%'
  },
  rightArrow1:{
    left:'85%',
  },
  smallBattery:{
    width:32,
    height:32,
    left:'88%'
  },
  rightArrow2:{
    left:'85%'
  },
  nftComponent:{
    top:-40,
    backgroundColor:'#487840',
    opacity:0.9,
    borderRadius:15,
  },
  nftHeaderBody:{
    color:'#15f4ee',
    top:'3%',
    paddingLeft:30
  },
  nftBodyComponent:{
    paddingLeft:'90%',
    marginTop:'60%',
    marginBottom:'10%'
  },
  leftArrow1:{
    top:-60,
    left:'8%',
  },
  carbon:{
    height:32,
    width:32,
    top:-60,
    left:'4%',
    position:'absolute'
  },
  leftArrow2:{
    left:'8%',
    top:-30
  },
  cCComponent:{
    top:-80,
    backgroundColor:'#487840',
    opacity:0.9,
    borderRadius:15,
  },
  cCHeaderBody:{
    color:'#15f4ee',
    top:10,
    paddingLeft:'5%'
  },
  cCBodyComponent:{
    paddingLeft:90,
    marginTop:-60,
    marginBottom:25
  },
  bottomTabs:{
    marginTop:0,
  },
  nftbodyText:{
    fontSize:9,
    color:'#15f4ee',
  }

})

export default styles
