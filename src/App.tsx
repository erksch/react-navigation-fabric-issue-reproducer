/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';

const HomeScreen = () => {
  const [counter, setCounter] = useState(0);

  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          setCounter(counter + 1);
        }}
        style={{
          padding: 10,
          backgroundColor: 'lightblue',
          margin: 20,
          borderRadius: 5,
        }}>
        <Text>Counter {counter}</Text>
      </TouchableOpacity>
    </View>
  );
};

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <View
          style={{
            height: 120,
            backgroundColor: 'lightblue',
          }}
        />
        <Stack.Navigator
          initialRouteName="home"
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
