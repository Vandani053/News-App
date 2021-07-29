import * as React from 'react';
import { Text, View, StyleSheet,StatusBar } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import Welcome from './components/Welcome';
import Feed from './components/Screen';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar  barStyle='light-content' backgroundColor='#4a4e4d'/>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false}}>
          <Stack.Screen name={'Welcome'} component={Welcome} />   
          <Stack.Screen name={'Feed'} component={Feed} />          
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    // padding: 8,
  },

});
