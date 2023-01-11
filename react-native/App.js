import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './src/containers/HomeScreen';

const Stack = createNativeStackNavigator();
function App() {
  const image = { uri: "assets/landscape/demo-homescreen.png" };
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="home" component={HomeScreen} />
        {/* <Stack.Screen name="make-money" component={MakeMoney} /> */}
        <StatusBar style="auto" hidden={true} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;