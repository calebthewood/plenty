import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './src/containers/HomeScreen';
import { HomeTree } from './src/games/HomeTree';
import { TheMarket } from './src/containers/TheMarket';

const Stack = createNativeStackNavigator();
function App() {
  console.log("##### App");
  /* Putting off fully developing 'world' state for now. Idea is store the entire
  state of one player's game in an object that lists wallet balance, investment
  levels, investor story progress, etc and that object will be held in state to
  determine how the world renders itself. For now I am keeping the minimal state
  needed to render a playable demo.*/

  const [investors, setInvestors] = useState(demoInvestors);
  const [wallet, setWallet] = useState(5);

  return (
    <NavigationContainer>
      <Stack.Navigator style={{ display: 'hidden' }}>
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="HomeTree" component={HomeTree} options={{ headerShown: false }} />
        <Stack.Screen
          name="TheMarket"
          options={{ headerShown: false }} >
          {() => <TheMarket investors={investors} wallet={wallet} />}
        </Stack.Screen>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const demoInvestors = [{
  id: 'scientist',
  figure: require('./assets/figures/figure-girl-doctor-2.png'),
  idea: require('./assets/misc/word-bubble-dna.png'),
  ideaDetail: "🧬 ➕ 💰 🟰 🧪",
  ideaTitle: "Scientific Breakthrough!",
  cost: ['$', '$',],
  location: 'TheMarket',
  walletBalance: 0,
}, {
  id: 'biologist',
  figure: require('./assets/figures/figure-girl-water.png'),
  idea: require('./assets/misc/word-bubble-kelp.png'),
  ideaDetail: "🪸 ➕ 💰 🟰 ♻️🟢",
  ideaTitle: "Kelp-based clign-wrap!",
  cost: ['$', '$', '$',],
  location: 'TheMarket',
  walletBalance: 0,
}, {
  id: 'genomist',
  figure: require('./assets/figures/figure-arctic-boy.png'),
  idea: require('./assets/misc/word-bubble-mammoth.png'),
  ideaDetail: "💡 ➕ 💰 🟰 🦣",
  ideaTitle: "Bring Back the Whoolly Mammoth!",
  cost: ['$', '$', '$', '$',],
  location: 'TheMarket',
  walletBalance: 0,
}];

export default App;
