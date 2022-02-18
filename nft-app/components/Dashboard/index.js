import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  ScrollView,Dimensions,
  Text,TouchableOpacity,
  View,Button,Picker,Image
} from 'react-native';
import Carousel,{ Pagination } from 'react-native-snap-carousel';
//import { Paragraph } from 'react-native';
import { Div } from "reactnative-ui-bootstrap";
import { TextInput } from 'react-native-web';
import styles from "./style";
import { Ionicons } from '@expo/vector-icons'; 
// const {height, width} = Dimensions.get('window');


const dashboard = (props) =>{
  
  
    return (
        <View style={styles.container}>
              <View style={styles.balance}>
                  <Image style={styles.manlogo} source={require('../../assets/u1.png')} />
                  <View style={styles.btns}>
                        <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate("infopage")}>
                            <Text style={styles.buttonText}>Infopage</Text>
                        </TouchableOpacity>
                    </View> 
                  <Image style={styles.icon} source={require('../../assets/Logo.png')} />
                  
              </View>
                      <View style={styles.lines}></View>
                     
                      <ScrollView>
                      <Text style={styles.p}>Hello User...</Text>

                      <View>
                      
                      {/* <Image style={styles.text} source={require('../../assets/Image1.png')} /> */}
                        <Text style={{color:'#15f4ee',fontSize:20,}}></Text>
                              <Text style={{color:'#15f4ee',fontSize:12,}}>
                              
                          <Text></Text>
          
                              </Text>
                      </View>
                      <View>
                
                        <Text style={styles.offer}>❄TRENDING OFFERS❄</Text></View>
                      <View style={styles.righttoppane}>
                      <TouchableOpacity style={styles.bigbutton} onPress={() => props.navigation.navigate("Battery")}>
                            <View>
                            <View style={styles.btnComponent}>
                        <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate("Battery")}>
                            <Text style={styles.buttonText}>Battery</Text>
                        </TouchableOpacity>
                    </View> 
                            <Image style={styles.ribbon} source={require('../../assets/ribbon.png')} />
                            </View>
                            
                            <View>
                                  
                                  <Image style={styles.charger} source={require('../../assets/charger.gif')} />
                            </View>
                          <Text style={styles.rightdesign}>@ ₹250 Only</Text>
                          </TouchableOpacity>
                      </View>
                              
                      <View style={styles.lefttoppane}>
                      
                      <TouchableOpacity style={styles.bigbutton} onPress={() => props.navigation.navigate("Profile")}>  
                             <View>
                             <View style={styles.btnComponent}>
                        {/* <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate("Profile")}>
                            <Text style={styles.buttonText}>charger</Text>
                        </TouchableOpacity> */}
                    </View> 
                          
                          {/* <Image style={styles.loc} source={require('../../assets/palomax-location.gif')} /> */}
                                  <Image style={styles.seo} source={require('../../assets/seo-report.png')} />
                            </View>
                            </TouchableOpacity>
                          <Text style={styles.leftdesign}>Track status</Text>
                      </View> 
                      <View>    
  
                      </View>
                      <View>
                              {/* <Text style={styles.cur}>€$CURRENCIES€$</Text> */}
                            </View>
                      <View style={styles.rightbottompane} >
                        <View>
                        <Image style={styles.bit} source={require('../../assets/met.png')} />
                        <Text style={{color:'white',left:60,top:20}}>Meta-Mask</Text>
                        </View>
                      </View>
                      <View style={styles.leftbottompane}>
                        <View>
                        <Image style={styles.bit} source={require('../../assets/carbon.png')} />
                        <Text style={{color:'white',left:40,top:20}}>Carbon credits</Text>
                        </View>
                      </View>
                      <Text style={styles.side}>✨☆OFFERS☆✨</Text>
                      <View style={styles.midpane}>
                      <ScrollView horizontal={true}>
                        <View style={styles.screen1}>
                          <View style={styles.s1}>
                            <View>
                              <Text style={styles.s1text}>Charger</Text>
                              <Text style={styles.s1text2}>Buy a Charger just </Text>
                              <Text style={styles.s1text2}>at ₹1250 </Text>
                              <TouchableOpacity style={{backgroundColor:'#000000',top:50,left:170,width:150,borderRadius:20,height:40}} onPress={() => props.navigation.navigate("Profile")}>
                            <Text style={{color:'#487840',fontSize:25,left:30,alignItems:'center'}}>Buy Now</Text>
                        </TouchableOpacity>
                              <Image style={styles.news} source={require('../../assets/charger2.png')} />
                            {/* <Image style={styles.news} source={require('../../assets/news.png')} /> */}
                              <View style={styles.recs1}>
                                 <Image  style={styles.rec11} source={require('../../assets/rec2.png')} />
  
                                <Image style={styles.rec11} source={require('../../assets/rec1.png')} />
                                <Image style={styles.rec11} source={require('../../assets/rec1.png')} />
                                </View>
                              </View>
                          </View>
                                
                        </View>
                        <View style={styles.screen2}>
                        <View style={styles.s2}></View>
                        <View>
                          <View>
                          <Text style={{fontSize:35,top:-230,left:50,alignItems:'center'}}>Portable Battery</Text>
                          <TouchableOpacity style={{backgroundColor:'#000000',top:-135,left:50,width:150,borderRadius:20,height:40}} onPress={() => props.navigation.navigate("Profile")}>
                            <Text style={{color:'white',fontSize:25,left:10,alignItems:'center'}}>Claim offer</Text>
                        </TouchableOpacity></View>
                        {/* <Text style={{backgroundColor:'white',top:-100}}>ssss</Text> */}
                        {/* <Image style={styles.screen2image} source={require('../../assets/linegraph.gif')} /> */}
                        <Image style={styles.screen2image} source={require('../../assets/leaf.png')} />
                        </View>
                                <View style={styles.recs}>
                                <Image style={styles.rec1} source={require('../../assets/rec1.png')} />
                                <Image style={styles.rec1} source={require('../../assets/rec2.png')} />
                                <Image style={styles.rec1} source={require('../../assets/rec1.png')} />
                          </View>
                        </View>
                        <View style={styles.screen3}>
                        <View style={styles.s3}></View>
                        <View>
                        <Text style={{color:'#487840',fontSize:35,top:-230,left:50,alignItems:'center'}}>Battery</Text>
                        <TouchableOpacity style={{backgroundColor:'#000000',top:-120,left:30,width:150,borderRadius:20,height:40}} onPress={() => props.navigation.navigate("Profile")}>
                            <Text style={{color:'white',fontSize:25,left:10,alignItems:'center'}}>Claim Now</Text>
                        </TouchableOpacity>
                        {/* <Text style={{backgroundColor:'white',top:-100}}>ssss</Text> */}
                        {/* <Image style={styles.screen3image} source={require('../../assets/stock.gif')} /> */}
                            <Image style={styles.screen3image} source={require('../../assets/slide3.png')} />
                        </View>
                          <View>
  
                                <View style={styles.recs}>
                                <Image style={styles.rec1} source={require('../../assets/rec1.png')} />
                                <Image style={styles.rec1} source={require('../../assets/rec1.png')} />
                                <Image style={styles.rec1} source={require('../../assets/rec2.png')} /></View>
                            </View>
                       </View>
                       
                      </ScrollView>
                      </View>
                            
                      {/* <View style={styles.rightbottompane} >
                        <View>
                        <Image style={styles.bit} source={require('../../assets/bitc.gif')} />
                        <Text style={{color:'white',left:60,top:20}}>Bitcoin</Text>
                        </View>
                      </View> */}
                      {/* <View style={styles.leftbottompane}>
                        <View>
                        <Image style={styles.bit} source={require('../../assets/dollor.gif')} />
                        <Text style={{color:'white',left:60,top:20}}>USD</Text>
                        </View>
                      </View> */}
                      
                      </ScrollView>
          </View>
          
        
      )
}

export default dashboard;