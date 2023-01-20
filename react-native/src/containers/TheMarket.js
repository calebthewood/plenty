import { ImageBackground, StyleSheet, View, Pressable, Animated } from "react-native";
import { MarketFigure } from "../components/MarketFigure";
import { useAnimatedList } from "../customHooks/useAnimatedList";

{/* <MarketFigure bubbleImg={dnaImg} figureImg={biologistGirl} />,
<MarketFigure bubbleImg={kelpImg} figureImg={raincoatGirl} />,
<MarketFigure bubbleImg={mammothImg} figureImg={scientistBoy} /> */}

export function TheMarket({ navigation }) {
  const investors = [{
    figure: require('../../assets/figures/figure-girl-doctor-2.png'),
    idea: require('../../assets/misc/word-bubble-dna.png'),
  }, {
    figure: require('../../assets/figures/figure-girl-water.png'),
    idea: require('../../assets/misc/word-bubble-kelp.png'),
  }, {
    figure: require('../../assets/figures/figure-arctic-boy.png'),
    idea: require('../../assets/misc/word-bubble-mammoth.png'),
  }];

  const background = require('../../assets/landscape/market-landscape-1.png');
  const [animations, setSelected] = useAnimatedList();

  return (
    <ImageBackground
      source={background}
      resizeMode="cover"
      style={styles.background}>
      <View style={styles.container}>
        <View style={styles.figures}>
          {investors.map((investor, index) => (
            <MarketFigure
              key={"figures" + index}
              investor={investor}
              animations={animations}
              setSelected={() => setSelected(index)}
              index={index}
            />
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
    zIndex: 2,
    // borderWidth: 1,
  },
});