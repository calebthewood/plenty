import { ImageBackground, StyleSheet, View } from "react-native";
import { MarketFigure } from "../components/MarketFigure";

export function TheMarket({ navigation }) {
  const background = require('../../assets/landscape/market-landscape-1.png');
  const biologistGirl = require('../../assets/figures/figure-marine-biologist.png');
  const raincoatGirl = require('../../assets/figures/figure-girl-fishing.png');
  const scientistBoy = require('../../assets/figures/figure-scientist-boy.png');

  return (
    <ImageBackground
      source={background}
      resizeMode="cover"
      style={styles.background}>
      <View style={styles.container}>
        <View style={styles.figures}>
          <MarketFigure figureImg={biologistGirl} />
          <MarketFigure figureImg={raincoatGirl} />
          <MarketFigure figureImg={scientistBoy} />
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
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'flex-end',
    top: 20,
    zIndex: 2,
    // borderWidth: 1,
  },
});