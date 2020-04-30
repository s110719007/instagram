import React from "react";
import { StyleSheet,ScrollView, Linking,View,Image } from 'react-native';
import { Button, Card, Text, PricingCard, Tile } from 'react-native-elements';


const DetailScreen = ({ route }) => {
  const { title, 
          artist,
          price,
          url,
          image,
          description
        } = route.params;

  return (
    <View style={style.allback}>
    <ScrollView >

    

    <View style={style.back}>
        <Text style={style.today}>今天</Text>
        <Text style={style.num}>5,432</Text>
        <Text style={style.average}>平均</Text>
        <View style={style.line1}></View>
        <View style={style.line2}></View>
    </View>


     <View style={style.picback}>
       <Text style={style.word}>過去一週</Text>
    <Image
                        style={style.pic}
                        source={{uri:'https://github.com/lg30assqwedrf/image-test/blob/master/component.png?raw=true'}}/>
    </View>
    
    <View style={style.box}>
        <Text style={style.word1}>本日階梯數</Text>
        <Text style={style.stair}>4樓</Text>
    </View>

    <View style={style.down}>
    <Text style={style.today}>顯示每天記錄</Text>
    <Image
                        style={style.pic1}
                        source={{uri:'https://github.com/lg30assqwedrf/image-test/blob/master/right.png?raw=true'}}/>
   </View>
   <View style={style.box1}>
      <Text style={style.contact}>Contact Us : (02)1234-5678</Text>
   </View>
  </ScrollView>
  </View>
  );
}
const style = StyleSheet.create({
  allback:{
 
backgroundColor:'#DAD7D7'
  },
  back:{
    height:120,
    width:330,
    backgroundColor:'#FFFFFF',
    marginLeft:25,
    marginTop:25,
    borderRadius:25,
  },
  today:{
    fontSize:18,
    marginLeft:20,
    marginTop:13,
    
  },
  num:{
    fontSize:43,
    color:'#BF2828',
    marginLeft:100,
    fontWeight:'600'
  
  },
  average:{
    marginLeft:270,
    color:'#939393',

  },
  line1:{
  width:200,
  height:3,
  backgroundColor:'#AD3A3A',
  marginLeft:20,
  marginTop:5
  },
  line2:{
    width:100,
  height:3,
  backgroundColor:'#C5C4C4',
  marginLeft:200,
  marginTop:-3
  },

 picback:{
   height:340,
   width:330,
   backgroundColor:'#FFFFFF',
   marginLeft:25,
   marginTop:25,
   borderRadius:30,
 },
 pic:{
  height:289,
  width:300,
  marginLeft:15,
  marginTop:5
 },
 word:{
    color:'#000',
    fontSize:19,
    marginLeft:20,
    marginTop:23,
 },
 box:{
marginTop:25,
marginLeft:25,
height:100,
width:330,
backgroundColor:'#FFFFFF',
borderRadius:22,

 },
 word1:{
fontSize:18,
marginLeft:20,
    marginTop:13,
 },
 stair:{
  fontSize:37,
  fontWeight:'600',
  marginLeft:200,
    marginTop:0,
 },
 down:{
  marginTop:25,
marginLeft:25,
height:45,
width:330,
backgroundColor:'#FFFFFF',
borderRadius:22,
 },
 pic1:{
    height:25,
    width:25,
    marginTop:-23,
    marginLeft:290

 },
 box1:{
  height:30,
    width:600,
    marginTop:25,
    backgroundColor:'#2B475D',
 },
 contact:{
    color:'#fff',
    marginLeft:95,
    marginTop:7
 },
});

export default DetailScreen;
