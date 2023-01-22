import { useState } from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';
import { ButtonTRM } from './ButtonTRM';
import { ButtonCave } from './ButtonCave';
import { ButtonMakeMoney } from './ButtonMakeMoney';
import { ButtonUseMoney } from './ButtonUseMoney';
import { ButtonWallet } from './ButtonWallet';
import { StatusBar } from 'expo-status-bar';

/*
Until I refactor the button to be more customizable, the button naming scheme is as follows:

Button[Type][Shape][Size]
  ex: Button[Tree][Round][Medium] which I abbreviate to 'ButtonTRM'
*/

export function HomeScreen({ navigation }) {
  const backgroundMid = require('../../assets/landscape/demo-homescreen-mid-edit.png');
  const backgroundEmpty = require('../../assets/landscape/homescreen-empty-2.png');

  /* Putting off fully developing 'world' state for now. Idea is store the entire
  state of one player's game in an object that lists wallet balance, investment
  levels, investor story progress, etc and that object will be held in state to
  determine how the world renders itself. For now I am keeping the minimal state
  needed to render a playable demo.*/

  const [investors, setInvestors] = useState(demoInvestors);
  const [wallet, setWallet] = useState(5);

  function handleNavigation(route) {
    const params = {
      investors: investors,
      wallet: wallet,
    };
    navigation.navigate(route, params);
  }

  return (
    <ImageBackground
      source={backgroundMid}
      resizeMode="cover"
      style={styles.background}>

      <View
        style={styles.container}>
        <View style={styles.treeOne}>
          <ButtonTRM />
        </View>
        <View style={styles.caveOne}>
          <ButtonCave />
        </View>
        <View style={styles.makeMoney}>
          <ButtonMakeMoney navigateTo={handleNavigation} />
        </View>

        <View style={styles.useMoney}>
          <ButtonUseMoney navigateTo={handleNavigation} />
        </View>

        <View style={styles.wallet}>
          <ButtonWallet />
        </View>

      </View>

      <StatusBar style="auto" hidden={true} />
    </ImageBackground>
  );
}


const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    // borderWidth: 3,
    // borderRadius:1,
    // borderColor: "black",
    // borderStyle: "solid",
    // zIndex: 5,

  },
  treeOne: {
    position: 'absolute',
    // borderColor: 'red',
    // borderStyle: 'solid',
    // borderWidth: 1,
    width: 80,
    height: 140,
    left: 380,
    top: 70,
  },
  caveOne: {
    position: 'absolute',
    // borderColor: 'red',
    // borderStyle: 'solid',
    // borderWidth: 1,
    width: 80,
    height: 120,
    top: 0,
    left: 20,
  },
  makeMoney: {
    position: 'absolute',
    // borderColor: 'red',
    // borderStyle: 'solid',
    // borderWidth: 1,
    width: 80,
    height: 120,
    left: 1,
    top: 111,
  },
  useMoney: {
    position: 'absolute',
    // borderColor: 'red',
    // borderStyle: 'solid',
    // borderWidth: 1,
    width: 100,
    height: 110,
    left: 240,
    top: 125,
  },
  wallet: {
    position: 'absolute',
    // borderColor: 'red',
    // borderStyle: 'solid',
    // borderWidth: 1,
    width: 100,
    height: 100,
    bottom: 15,
    right: -8,
  }
});


const demoInvestors = [{
  id: 'scientist',
  figure: require('../../assets/figures/figure-girl-doctor-2.png'),
  idea: require('../../assets/misc/word-bubble-dna.png'),
  ideaDetail: "🧬 ➕ 💰 🟰 🧪",
  ideaTitle: "Scientific Breakthrough!",
  cost: ['$', '$',],
  location: 'TheMarket',
  walletBalance: 0,
}, {
  id: 'biologist',
  figure: require('../../assets/figures/figure-girl-water.png'),
  idea: require('../../assets/misc/word-bubble-kelp.png'),
  ideaDetail: "🪸 ➕ 💰 🟰 ♻️🟢",
  ideaTitle: "Kelp-based clign-wrap!",
  cost: ['$', '$', '$',],
  location: 'TheMarket',
  walletBalance: 0,
}, {
  id: 'genomist',
  figure: require('../../assets/figures/figure-arctic-boy.png'),
  idea: require('../../assets/misc/word-bubble-mammoth.png'),
  ideaDetail: "💡 ➕ 💰 🟰 🦣",
  ideaTitle: "Bring Back the Whoolly Mammoth!",
  cost: ['$', '$', '$', '$',],
  location: 'TheMarket',
  walletBalance: 0,
}];