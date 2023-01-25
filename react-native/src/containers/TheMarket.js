import { useState } from 'react';
import { ImageBackground, StyleSheet, View, Pressable, Text } from "react-native";
import { MarketFigure } from "../components/MarketFigure";
import { useAnimatedList } from "../customHooks/useAnimatedList";
import { Wallet } from "./Wallet";
import { PickableCoin } from '../components/PickableCoin';

{/* <MarketFigure bubbleImg={dnaImg} figureImg={biologistGirl} />,
<MarketFigure bubbleImg={kelpImg} figureImg={raincoatGirl} />,
<MarketFigure bubbleImg={mammothImg} figureImg={scientistBoy} /> */}

export function TheMarket({ investors, balance, handleWallet }) {

  const background = require('../../assets/landscape/market-landscape-1.png');
  const animatedValues = useAnimatedList();
  const resetFigures = animatedValues[3];
  const selected = animatedValues[4];
  const [showWallet, setShowWallet] = useState(false);
  console.log("##### TheMarket: ");

  return (
    <ImageBackground
      source={background}
      resizeMode="cover"
      style={styles.background}>

      {selected === null ? null :
        <View style={styles.ideaDetail}>
          <Text>{investors[selected].ideaTitle}</Text>
          <Text style={styles.tempDiagram}>{investors[selected].ideaDetail}</Text>
        </View>}

      {selected === null ? null :
        <View style={[styles.costSection, { height: investors[selected].cost.length * 70 }]}>
          {investors[selected].cost.map((item, i) => (

            <View key={`cost-${i}`} style={
              i < balance[investors[selected].id] ?
              styles.costBackgroundFilled : styles.costBackgroundEmpty

              }>
              <Text key={`${item}-${i}`} style={styles.costDiagram}>{item}</Text>
            </View>))}
        </View>}

      <View style={styles.container}>
        <View style={styles.figures}>
          {investors.map((investor, index) => (
            <MarketFigure
              key={"figure-" + index}
              investor={investor}
              index={index}
              animatedValues={animatedValues}
              selected={selected}
            />
          ))}
        </View>
        <Wallet toggleWallet={() => setShowWallet(() => !showWallet)} wallet={balance.player} showing={selected >= 0} />
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
  costBackgroundFilled: {
    backgroundColor: 'grey',
    borderRadius: 50,
    borderWidth: 'silver',
    height: 41,
    width: 41,
    alignItems: 'center',
    justifyContent: 'center',
    opacity: .7,
  },
  costBackgroundEmpty: {
    backgroundColor: 'gold',
    borderRadius: 50,
    borderWidth: 'goldenrod',
    height: 41,
    width: 41,
    alignItems: 'center',
    justifyContent: 'center',
    opacity: .7,
  }
});
