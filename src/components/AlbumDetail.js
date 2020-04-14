import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, Linking} from "react-native";

const AlbumDetail = ({ album, navigation }) => {
   return (
      <View style={styles.cardContainerStyle}>
        <View style={[styles.thumbnailContainerStyle, styles.cardSectionStyle]}>
          <Image
            style={styles.thumbnailStyle}
            source={{
              uri: album.thumbnail_image
            }}
          />
          <View style={styles.headerContentStyle}>
            <Text style={styles.titlestyle}>{album.title}</Text>
            <Image source={{url:"https://cdn4.iconfinder.com/data/icons/pictype-free-vector-icons/16/more-512.png"}}
            style={{width:28,height:28,marginRight:15}}/>
          </View>
        </View>
        <View style={styles.cardSectionStyle}>
            <Image
              style={styles.imageStyle}
              source={{
                uri: album.image
              }}
            />
        </View>
        <View style={styles.fouricons}>
              <Image source={{url:"https://github.com/yuumaker/image/blob/master/src/images/like.png?raw=true"}}
            style={{width:28,height:28,marginLeft:15}}/>
              <Image source={{url:"https://github.com/yuumaker/image/blob/master/src/images/speech-bubble.png?raw=true"}}
            style={{width:28,height:28,marginLeft:15}}/>
            <Image source={{url:"https://github.com/yuumaker/image/blob/master/src/images/send.png?raw=true"}}
            style={{width:28,height:28,marginLeft:15}}/>
            <Image source={{url:"https://github.com/yuumaker/image/blob/master/src/images/bookmark.png?raw=true"}}
            style={{width:28,height:28,marginLeft:238}}/>
        </View>
        <View style={styles.likesbox}>
          <Text style={styles.likestext}>{album.likes}</Text>
          <View style={styles.articlebox}>
            <Text style={styles.likestext}>{album.title}</Text>
            <Text style={styles.articletext}>{album.article}</Text>
          </View>
        </View>
      </View>
  )};

const styles = StyleSheet.create({
  thumbnailContainerStyle: {
    flexDirection: "row",
    justifyContent: "flex-start"
  },
  thumbnailStyle: {
    height: 45,
    width: 45,
    borderRadius:80,
    marginLeft:15,
    marginBottom:3,
    marginTop:7
  },
  headerContentStyle: {
    alignItems:"center",
    flexDirection:"row",
    justifyContent:"space-between",
    paddingLeft: 10,
    flex:1
  },

  titlestyle:{
    fontSize:15,
    fontWeight:"bold",
  },


  cardSectionStyle: {
    paddingBottom:5,
    backgroundColor: "#FFFFFF",
    borderColor: "#FFFFFF",
    borderBottomWidth: 1
  },
  imageStyle: {
    height: 450,
    width: null
  },
  fouricons:{
    flexDirection:"row",
    alignItems:"center",
    flex:1,
    backgroundColor:"#FFFFFF",
    height:40
  },
  likesbox:{
    flex:1,
    height:70,
    backgroundColor:"#FFFFFF",
  },
  likestext:{
    fontWeight:"bold",
    marginLeft:16,
    marginTop:5
  },
  articlebox:{
    flexDirection:"row",
  },
  articletext:{
    marginTop:5,
    marginLeft:8,
    fontWeight:"400"
  }

});

export default AlbumDetail;
