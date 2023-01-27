import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './src/containers/HomeScreen';
import { HomeTree } from './src/games/HomeTree';
import { TheMarket } from './src/containers/TheMarket';

const Stack = createNativeStackNavigator();
function App() {
  console.log("##### App");

  const [investors, setInvestors] = useState(demoInvestors);
  const [balance, setBalance] = useState({
    player: 3,
    tree: 10,
    scientist: 1,
    biologist: 1,
    genomist: 2,
  });


  useEffect(()=> {
    console.log("App Balances: ", balance)
  },[balance, setBalance])


  const handleMoney = (from, to, amt) => {
    // console.log("Balance Before: ", balance);
    setBalance({
      ...balance,
      [from]: balance[from] - amt,
      [to]: balance[to] + amt
    });
    console.log("****** Balance After: *******\n", balance);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator style={{ display: 'hidden' }}>

        <Stack.Screen name="Home"
          options={{ headerShown: false }} >
          {(props) => <HomeScreen {...props} investors={investors} balance={balance} />}
        </Stack.Screen >

        <Stack.Screen
          name="HomeTree"
          options={{ headerShown: false }} >
          {(props) => <HomeTree {...props} balance={balance} handleMoney={handleMoney} />}
        </Stack.Screen >

        <Stack.Screen
          name="TheMarket"
          options={{ headerShown: false }} >
          {(props) => <TheMarket {...props} investors={investors} balance={balance} handleMoney={handleMoney} />}
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
