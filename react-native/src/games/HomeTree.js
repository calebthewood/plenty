import { useState } from 'react';
import { View, ImageBackground, Image, StyleSheet, Animated, Text, Pressable } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useCoinAnimation } from '../customHooks/useCoinAnimation';
import { IntroDiagram } from '../components/IntroDiagram';

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
  4. Fix the coin start locations
    - spawn btwn 3 and 6 coins, give each one a box it can spawn inside of, so
    that it's starting position is random but contained and coins don't overlap.
  5. Animate the coin -> basket deposit release action.
  6. Sound?
  7. Add an intro and outro screen/modal
    Intro: Little diagram showing basic action of the game
    Outro:
      basic: show little diagram of money going to wallet
      extra: screen where you trace the number for how many coins you
          picked, help to reinforce quantity/counting
  8. State management in this component is awful, DRY it up!
    a. create coin component
    b. place pan responder logic in component and prop drill basket count.
    c. figure out a more generic showing/not-showing system
  9. Need a 'You Win' type modal to announce the end of the game.
  10. Put only the dollar sign on basket to signify 'basket for money' then make the
      count bigger and show it on the side? We might be using baskets elsewhere
      so I think it would be more consistant to have money basket, peach basket,
      etc, etc,
  11. Add 'Exit' btn or a pause screen with an exit btn, think about having a global hud...
  12. Could be fun to make the basket draggable. With no other effect, another
      game mechanic would be to let things fall and move the basket to get them (too advanced?)
*/

const introDiagram = require('../../assets/diagrams/money-tree-diagram.png');
const background = require('../../assets/landscape/home-tree-2.png');
const canopy = require('../../assets/trees/canopy-layered-paper.png');
const basket = require('../../assets/misc/basket.png');

export function HomeTree({ navigation }) {

  const [viewIntro, setViewIntro] = useState(true);
  const [basketCount, setBasketCount] = useState(0);
  // Refactor this abomination asap.
  const [coinOne, coinOneResponder] = useCoinAnimation(() => handleRelease(() => setShowingOne(false)));
  const [showingOne, setShowingOne] = useState(true);
  const [coinTwo, coinTwoResponder] = useCoinAnimation(() => handleRelease(() => setShowingTwo(false)));
  const [showingTwo, setShowingTwo] = useState(true);
  const [coinThree, coinThreeResponder] = useCoinAnimation(() => handleRelease(() => setShowingThree(false)));
  const [showingThree, setShowingThree] = useState(true);
  const [coinFour, coinFourResponder] = useCoinAnimation(() => handleRelease(() => setShowingFour(false)));
  const [showingFour, setShowingFour] = useState(true);

  function handleRelease(callback) {
    callback();
    setBasketCount(basketCount => basketCount + 1);
  }


  if (viewIntro) return (
  <IntroDiagram
    navigateHome={() => navigation.navigate('Home')}
    diagram={introDiagram}
    proceedToGame={() => setViewIntro(false)}/>)


  return (
    <ImageBackground
      source={background}
      resizeMode="cover"
      style={styles.background}>
      <View style={styles.container}>
        <Image resizeMode="contain" style={styles.canopy} source={canopy} />
        <View style={styles.coins}>

          {showingOne ? (
            <Animated.View
              style={{
                top: 30, left: -100,
                transform: [{ translateX: coinOne.x }, { translateY: coinOne.y }]
              }}
              {...coinOneResponder.panHandlers}
            >
              <View style={styles.box} />
              <Text style={styles.coinText}>$</Text>
            </Animated.View>)
            : null}

          {showingTwo ? (
            <Animated.View
              style={{
                top: 35, left: 110,
                transform: [{ translateX: coinTwo.x }, { translateY: coinTwo.y }]
              }}
              {...coinTwoResponder.panHandlers}
            >
              <View style={styles.box} />
              <Text style={styles.coinText}>$</Text>
            </Animated.View>)
            : null}

          {showingThree ? (
            <Animated.View
              style={{
                top: 40, left: -90,
                transform: [{ translateX: coinThree.x }, { translateY: coinThree.y }]
              }}
              {...coinThreeResponder.panHandlers}
            >
              <View style={styles.box} />
              <Text style={styles.coinText}>$</Text>
            </Animated.View>)
            : null}

          {showingFour ? (
            <Animated.View
              style={{
                top: 45, left: 100,
                transform: [{ translateX: coinFour.x }, { translateY: coinFour.y }]
              }}
              {...coinFourResponder.panHandlers}
            >
              <View style={styles.box} />
              <Text style={styles.coinText}>$</Text>
            </Animated.View>)
            : null}

        </View>
        <Image resizeMode="contain" style={styles.basketOne} source={basket} />
        {/* <Image resizeMode="contain" style={styles.dollarSign} source={dollarSign} /> */}
        <Text style={styles.basketCount}>${basketCount}</Text>
        {/* <Image resizeMode="contain" style={styles.basketTwo} source={basket} /> */}
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
    // left: 300,
    width: 140,
    height: 130,
    alignSelf: 'center',
    // borderWidth: 1,
  },
  basketCount: {
    position: 'absolute',
    // left: 320,
    top: 314,
    alignSelf: 'center',
    fontSize: 32,
    color: '#DF8264',
    fontFamily: 'Verdana'
  },
  dollarSign: {
    position: 'absolute',
    flex: 1,
    top: 324,
    left: 312,

    width: 20,
    height: 25,
    alignSelf: 'center',
    // borderWidth: 1,
  },
  coins: {
    // top: -110,
    // width: 500,
    // justifyContent: 'space-around',
    flexDirection: 'row',
    flex: 1,
  },
  coinText: {
    top: -44,
    left: 22,
    fontSize: 24,
    fontWeight: "bold",
    color: "#d57e08",
  },
  box: {
    height: 60,
    width: 60,
    backgroundColor: "#ffbd0b",
    borderRadius: 100,

    shadowOffset: { width: -2, height: 4 },
    shadowColor: "#212121",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    borderWidth: 4,

    borderTopColor: "#ffd84c",
    borderLeftColor: "#ffd84c",
    borderRightColor: "#d57e08",
    borderBottomColor: "#d57e08",
  }
});
