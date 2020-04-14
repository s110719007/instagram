import React from 'react';
// import { View, FlatList } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import AlbumScreen from './src/screens/AlbumScreen';
import DetailScreen from './src/screens/DetailScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}>
        <Stack.Screen
          name="AlbumScreen"
          component={AlbumScreen}
          options={{
            headerStyle: {
              height: 0,
            },
          }} />

        <Stack.Screen name="DetailScreen" component={DetailScreen}
          options={{
            title: " ",
            headerStyle: {
              height: 0,
              backgroundColor: '#fafafa',
            },
            headerLeft: null
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;