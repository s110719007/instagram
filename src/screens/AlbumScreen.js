import React from "react";
import { StyleSheet,View, FlatList, TouchableOpacity,Image } from 'react-native';
import AlbumDetail from "../components/AlbumDetail";
import albumData from "../json/albums.json";
import headerData from "../json/header.json";

const AlbumScreen = ({ navigation }) => {
  return (
<View style={{flex:1,backgroundColor:"#fff"}}>
            <View style={styles.headerContentStyle}>
            <Image source={{url: headerData.HomePage.HeaderLeftUrl}} style={styles.headerLeft}/>
            <Image source={{url: headerData.HomePage.HeaderMid}} style={styles.headermid}/>
                <TouchableOpacity
                    onPress={() => navigation.push('DetailScreen')}>
                    <Image source={{url: headerData.HomePage.HeaderRightUrl}}
                            style={styles.headerRight}/>
                </TouchableOpacity>
            </View>
            <FlatList
            data={albumData.albumList}
            renderItem={({item}) => 
            <AlbumDetail 
            album={item} 
                navigation={navigation}
                keyExtractor={item=>item.title}
                />}
            />
            <View style={styles.bottomStyle}> 
                <Image  source={{uri: headerData.HomePage.bottomImage1}} style={styles.bottom1}/>
                <Image  source={{uri: headerData.HomePage.bottomImage2}} style={styles.bottom2}/>
                <Image  source={{uri: headerData.HomePage.bottomImage3}} style={styles.bottom3}/>
                <Image  source={{uri: headerData.HomePage.bottomImage4}} style={styles.bottom4}/>
            </View>
        </View>
      );
  };
    const styles = StyleSheet.create({
      headerLeft:{
          marginTop:30,
          marginLeft:20,
          width: 28,
          height: 28
        },
        headermid:{
          marginTop:30,
          width: 120,
          height: 35
        },
        headerRight:{
          marginTop:30,
          marginRight:15,
          marginBottom:20,
          width: 28,
          height: 28
        },
        headerContentStyle:{
          flexDirection:"row",
          justifyContent:"flex-start",
          justifyContent:"space-between",
          width:null,
          height:85,
          backgroundColor:'#fafafa',
          marginTop:30,
          elevation:4
      },
      bottom1:{
          width: 30,
          height: 30,
          marginLeft:15
        },
      bottom2:{
          width: 35,
          height: 35,
        },
        bottom3:{
          width: 32,
          height: 32,
        },
        bottom4:{
          width: 32,
          height: 32,
          marginRight:15
        },
      bottomStyle:{
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"row",
        justifyContent:"flex-start",
        justifyContent:"space-between",
        height:75,
        backgroundColor:'#fafafa',
      }
  });
export default AlbumScreen;
