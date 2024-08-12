import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import CharacterListScreen from '../screens/CharacterListScreen';
import CharacterDetailScreen from '../screens/CharacterDetailScreen';

const Stack = createStackNavigator();

const AppNavigator = () => (
  <NavigationContainer >
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}} />
      <Stack.Screen name="CharacterList" component={CharacterListScreen} />
      <Stack.Screen name="CharacterDetail" component={CharacterDetailScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
