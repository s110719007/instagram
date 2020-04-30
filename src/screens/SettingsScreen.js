import React from "react";
import { StyleSheet,ScrollView } from 'react-native';
import { ListItem,Text } from 'react-native-elements';

// Make a component
const SettingsScreen = ({ navigation }) => {
    return (
        <ScrollView style={{paddingTop: 0}}>
            <ListItem
              title="離線模式"
              rightIcon={{name:'do-not-disturb'}}
            />
            <ListItem
              title="文字大小"
              rightIcon={{name:'arrow-forward'}}

            />
            <ListItem
              title="藍芽控制器"
              rightIcon={{name:'arrow-forward'}}
            />
            <ListItem
              title="Siri語音捷徑"
              rightIcon={{name:'arrow-forward'}}
            />
            <ListItem
              title="登出"
              rightIcon={{ name: 'cancel' }}
            />
            <Text style={style.bottom}>Contact us :（02）1234-5678</Text>
        </ScrollView>
    );
}

const style = StyleSheet.create({
  
  bottom:{
    marginTop:295,
    marginLeft:90
  },

  
});
export default SettingsScreen;