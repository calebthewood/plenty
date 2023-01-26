import { useEffect, useState, useCallback, useRef } from 'react';
import { ImageBackground, StyleSheet, View, Pressable, Text, Animated, Image } from "react-native";
import { Wallet } from "./Wallet";


export function TheMarket({ investors, balance, handleMoney }) {
  const background = require('../../assets/landscape/market-landscape-1.png');
  const [selected, setSelected] = useState(null);
  const [reset, setReset] = useState(false);
  const [basketLayout, setBasketLayout] = useState(null);
  // const [basketLayout, onBasketLayout] = useComponentSize();
  const onLayout = useCallback(event => {
    const { width, height, x, y } = event.nativeEvent.layout;
    setBasketLayout({ width, height, x, y });
  }, []);

  const investMoney = () => {
    if (selected !== null) {
      let to = investors[selected].id
      handleMoney('player', to, 1);
      console.log('#### investMoney: ', to);
    }
  };

  console.log("TheMarket, Selected: ", selected !== null ? balance[investors[selected].id] : 'none')

  /* ######## Animated List ######### */

  // Custom offset values based on who is selected
  const frontOffsets = [30, -85, -200];
  //Each element is the set of offsets based on who is selected: 0,1,2
  const backOffsets = [
    [0, 380, 380],
    [50, 0, 190],
    [-140, -150, 0]];

  const scaleAnimations = useRef([
    new Animated.Value(1),
    new Animated.Value(1),
    new Animated.Value(1)
  ]).current;

  const translateAnimations = useRef([
    new Animated.ValueXY({ x: 0, y: 0 }),
    new Animated.ValueXY({ x: 0, y: 0 }),
    new Animated.ValueXY({ x: 0, y: 0 })
  ]).current;

  useEffect(() => {
    if (selected === null) return;
    if (reset) setSelected(null);

    Animated.parallel([
      Animated.timing(scaleAnimations[selected], {
        toValue: reset ? 1 : 1.5,
        duration: 200,
        useNativeDriver: true
      }),
      Animated.timing(scaleAnimations[(selected + 1) % 3], {
        toValue: reset ? 1 : 0.5,
        duration: 200,
        useNativeDriver: true
      }),
      Animated.timing(scaleAnimations[(selected + 2) % 3], {
        toValue: reset ? 1 : 0.5,
        duration: 200,
        useNativeDriver: true
      }),
      Animated.timing(translateAnimations[selected], {
        toValue: reset ? 0 : { x: frontOffsets[selected], y: 0 },
        duration: 200,
        useNativeDriver: true
      }),
      Animated.timing(translateAnimations[(selected + 1) % 3], {
        toValue: reset ? 0 : { x: backOffsets[(selected + 1) % 3][selected], y: 90 },
        duration: 200,
        useNativeDriver: true
      }),
      Animated.timing(translateAnimations[(selected + 2) % 3], {
        toValue: reset ? 0 : { x: backOffsets[(selected + 2) % 3][selected], y: 90 },
        duration: 200,
        useNativeDriver: true
      })
    ]).start();
  }, [selected, reset]);

  function handlePress(evt, index) {
    if (selected !== index) {
      setSelected(index);
    } else {
      setReset(true);
    }
    setTimeout(() => setReset(false), 200);
  }
  /* ######## End Animated List ######### */

  return (
    <ImageBackground
      source={background}
      resizeMode="cover"
      style={styles.background}>

      <Wallet
        basketLayout={basketLayout}
        handleMoney={() => handleMoney('player', investors[selected].id, 1)}
        balance={balance} />

      {selected === null ? null :
        <View style={styles.ideaDetail}>
          <Text style={styles.tempDiagram}>{investors[selected].ideaDetail}</Text>
        </View>}

      {selected === null ? null :
        <View
          onLayout={onLayout}
          style={[styles.costSection, { height: investors[selected].cost.length * 70 }]}
        >
          {investors[selected].cost.map((item, i) => (
            <View key={`cost-${i}`} style={
              i < balance[investors[selected].id] ?
                styles.costBackgroundFilled : styles.costBackgroundEmpty}>
              <Text key={`${item}-${i}`} style={styles.costDiagram}>{item}</Text>
            </View>))}
        </View>}

      <View style={styles.container}>
        <View style={styles.figures}>
          {investors.map((investor, index) => (
            <Animated.View
              key={`${investor.id}-${index}`}
              style={{
                height: 270, justifyContent: "flex-end",
                transform: [
                  { scale: scaleAnimations[index] },
                  { translateX: translateAnimations[index].x },
                  { translateY: translateAnimations[index].y }]
              }}>
              <Pressable onPress={(e) => handlePress(e, index)}>
                {selected == index ? null :
                  <Image resizeMode="contain" style={styles.wordBubble} source={investor.idea}></Image>}
                <Image resizeMode="contain" style={styles.figure} source={investor.figure}></Image>
                <View style={styles.shadow}></View>
              </Pressable>
            </Animated.View>
          ))}
        </View>

        <View style={styles.ground}></View>
      </View>
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
    justifyContent: 'flex-end',
    backgroundColor: '#210f038c',
    zIndex: 1,
  },
  ground: {
    width: '100%',
    height: 220,
    height: 50,
    backgroundColor: '#fad390',
    top: 0,
    borderTopWidth: 2,
    borderColor: '#EAB543',
  },
  figures: {
    position: 'absolute',
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    bottom: 20,
    left: 10,
    zIndex: 1,
    // borderWidth: 1,
  },
  ideaDetail: {
    position: 'absolute',
    height: 140,
    width: 400,
    left: 10,
    top: 10,
    backgroundColor: 'white',
    opacity: .9,
    borderWidth: 2,
    borderColor: 'silver',
    borderRadius: 5,
    zIndex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tempDiagram: {
    fontSize: 40,
  },
  coinSection: {
    position: 'absolute',
    width: 80,
    left: 420,
    top: 10,
    backgroundColor: 'white',
    opacity: 0,
    borderWidth: 2,
    borderColor: 'silver',
    borderRadius: 5,
    zIndex: 3,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  costSection: {
    position: 'absolute',
    width: 80,
    left: 420,
    top: 10,
    backgroundColor: 'white',
    opacity: .9,
    borderWidth: 2,
    borderColor: 'silver',
    borderRadius: 5,
    zIndex: 2,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  costTitle: {
    fontSize: 20,
  },
  costDiagram: {
    fontSize: 30,
    left: 1
  },
  costBackgroundEmpty: {
    backgroundColor: 'grey',
    borderRadius: 50,
    borderWidth: 'silver',
    height: 41,
    width: 41,
    alignItems: 'center',
    justifyContent: 'center',
    opacity: .7,
  },
  costBackgroundFilled: {
    backgroundColor: 'gold',
    borderRadius: 50,
    borderWidth: 'goldenrod',
    height: 41,
    width: 41,
    alignItems: 'center',
    justifyContent: 'center',
    opacity: .7,
  },
  pressable: {
    position: 'relative',
    alignItems: 'flex-end',
    bottom: 0,
  },
  figure: {
    height: 180,
    width: 150,
    zIndex: 2,
  },
  shadow: {
    position: 'absolute',
    zIndex: 1,
    backgroundColor: '#21210310',
    borderRadius: 50,
    alignSelf: 'center',
    height: 60,
    width: 60,
    bottom: -25,
    shadowColor: 'black',
    shadowOffset: { width: -5, height: -5 },
    shadowOpacity: 1, // 0-1
    shadowRadius: 5,
    transform: [
      { rotate: "-30deg" },
      { skewX: '45deg' }]
  },
  wordBubble: {
    width: 90,
    height: 90,
    left: -20,
  },

});
