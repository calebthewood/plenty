import { useEffect, useState, useRef } from 'react';
import {
  View, ImageBackground, Image,
  StyleSheet, Text, useWindowDimensions
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { IntroDiagram } from '../components/IntroDiagram';
import { PickableCoin } from '../components/PickableCoin';
import { Wallet } from '../containers/Wallet';


/*
Thought: to make the game replayable, but keep some idea of money scarcity:
there's a fixed number of coins per day, when they run out of coins peaches appear &
you can pick those infinitely. If I come up with a really simple 'pick peach, sell peach' game
then you can always pick peaches but the seller only pays for the first 5 or however many.
If this were a game for 7 yr olds I'd say you can sell infinite peaches but the price goes
down on a supply-demand curve :D

TODOs (in no particular order):
  1. Add highlighting to basket and coins
    - Have basket glow or something when coin is hovering over it to show it's
    in the right spot. If there's a sorting game later then also add a negative
    reaction to show when a draggable is over the wrong basket.
  2. Animate the tree boughs to sway slightly
  3. Animate the coins to sway slightly
  4. done, fixed coin spawns and positioning
  5. Animate the coin -> basket deposit release action.
  6. Sound?
  7. Add an intro and outro screen/modal
    Intro: Little diagram showing basic action of the game
    Outro:
      basic: show little diagram of money going to wallet
      extra: screen where you trace the number for how many coins you
          picked, help to reinforce quantity/counting
  8. Done - extracted coin logic to a custom hook and component
  9. Need a 'You Win' type modal to announce the end of the game.
  10. Put only the dollar sign on basket to signify 'basket for money' then make the
      count bigger and show it on the side? We might be using baskets elsewhere
      so I think it would be more consistant to have money basket, peach basket,
      etc, etc,
  11. Add 'Exit' btn or a pause screen with an exit btn, think about having a global hud...
  12. Could be fun to make the basket draggable. With no other effect, another
      game mechanic would be to let things fall and move the basket to get them (too advanced?)
*/

function getCoins(windowH, windowW) {
  let coinCount = Math.floor(Math.random() * 2) + 4; // spawn 4-5 coins
  const xOffset = Math.floor(windowW / (coinCount + 1));
  const yOffset = Math.floor((windowH / 12));
  const coinCoords = [];

  let randomizedOffset = (radius = 10) => Math.floor(Math.random() * radius) * (Math.random() > .5 ? 1 : -1);
  for (let i = 1; i <= coinCount; i++) {
    coinCoords.push({
      x: (xOffset * i) + randomizedOffset(),
      y: yOffset + randomizedOffset(),
      position: 'absolute'
    });
  }
  // console.log(" Coin Coords: ", coinCoords);
  return coinCoords;
}


export function HomeTree({ navigation, balance, handleMoney }) {
  console.log('#### HomeTree: ');
  const { height, width } = useWindowDimensions();
  const introDiagram = require('../../assets/diagrams/money-tree-diagram.png');
  const outroDiagram = require('../../assets/diagrams/money-tree-outro-2.png');
  const background = require('../../assets/landscape/home-tree-2.png');
  const canopy = require('../../assets/trees/canopy-layered-paper.png');
  const basket = require('../../assets/misc/basket.png');

  const [showModal, setShowModal] = useState("intro");
  const [basketCount, setBasketCount] = useState(0);
  const [coins, setCoins] = useState(getCoins(height, width));
  const [basketLayout, setBasketLayout] = useState(null); //async, initially renders as null

  /**
   * Sample Layout Data for Basket:
   * {
   *   "height": 130,
   *   "width": 140,
   *   "x": 263.5,
   *   "y": 240,
   * }
   */
  function handleBasketLayout(e) {
    setBasketLayout(e.nativeEvent.layout);
    // console.log("##### Basket Layout: ", e.nativeEvent.layout);
  }

  // passed from component to hook
  function updateBasket(coinOffset) {
    setCoins(coins => coins.filter((c, i) => c[0] !== coinOffset));
    setBasketCount(basketCount => basketCount + 1);
  }

  useEffect(() => {
    handleMoney("tree", "player", 1);
    if (basketCount === coins.length) {
      setShowModal("outro");
    }
  }, [basketCount]);

  if (showModal === "intro") return (
    <IntroDiagram
      navigateBack={() => navigation.navigate('Home')}
      diagram={introDiagram}
      navigateTo={() => setShowModal(false)} />
  );

  if (showModal === "outro") return (
    <IntroDiagram
      navigateBack={() => navigation.navigate('HomeTree')}
      diagram={outroDiagram}
      navigateTo={() => navigation.navigate('Home')} />
  );

  return (
    <ImageBackground
      source={background}
      resizeMode="cover"
      style={styles.background}>
      <View style={styles.container}>
        <Image resizeMode="contain" style={styles.canopy} source={canopy} />
        {basketLayout && coins.map((coords, i) => (
          <PickableCoin
            key={`coin-${i}-${coords.x}`}
            coords={coords}
            handleMoney={() => updateBasket(coords.x)}
            basketLayout={basketLayout} />
        ))}
        <Image onLayout={handleBasketLayout} resizeMode="contain" style={styles.basketOne} source={basket} />
        <Text style={styles.basketCount}>${basketCount}</Text>
      </View>
      <Wallet balance={balance} />
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
    backgroundColor: '#210f038c',
    zIndex: 1,
  },
  canopy: {
    position: 'absolute',
    flex: 1,
    top: -190,
    left: 0,
    width: '105%',
  },
  basketOne: {
    position: 'absolute',
    flex: 1,
    top: 240,
    width: 140,
    height: 130,
    alignSelf: 'center',
  },
  basketCount: {
    position: 'absolute',
    top: 314,
    alignSelf: 'center',
    fontSize: 32,
    color: '#DF8264',
    fontFamily: 'Verdana'
  },
  coins: {
    top: 15,
    width: '100%',
    // height: 120,
    // justifyContent: 'space-around',
    // alignItems: 'center',
    flexDirection: 'row',
    // borderWidth: 1
  },
});
