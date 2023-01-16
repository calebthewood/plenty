import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './src/containers/HomeScreen';
import { HomeTree } from './src/games/HomeTree';

const Stack = createNativeStackNavigator();
function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator style={{ display: 'hidden' }}>
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="HomeTree" component={HomeTree} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
