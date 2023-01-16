import { useState } from 'react';
import { View, ImageBackground, Image, StyleSheet, Animated, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SnapTo } from '../components/SnapTo';
import SpringToOrigin from '../components/SpringToOrigin';
import { useCoinAnimation } from '../customHooks/useCoinAnimation';

/*
Thought: to make the game replayable, but keep some idea of money scarcity...
there's a fixed number of coins per day, when they run out peaches appear &
you can pick those infinitely. If I come up with a really simple 'pick peach, sell peach' game
then you can always pick peaches but the seller only pays for the first 5 or however many.
If this were a game for 7 yr olds I'd say you can sell infinite peaches but the price goes
down on a supply-demand curve :D



*/

export function HomeTree() {
  const background = require('../../assets/landscape/home-tree-2.png');
  const canopy = require('../../assets/trees/canopy-layered-paper.png');
  const basket = require('../../assets/misc/basket.png');
  const dollarSign = require('../../assets/misc/dollar-sign-pink.png');
  const [basketCount, setBasketCount] = useState(0);

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
        <Image resizeMode="contain" style={styles.dollarSign} source={dollarSign} />
        <Text style={styles.basketCount}>{basketCount}</Text>
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
    left: 328,
    top: 314,
    fontSize: 35,
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
    top: -110,
    width: 500,
    justifyContent: 'space-around',
    flexDirection: 'row'
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
