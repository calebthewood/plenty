import { ImageBackground, StyleSheet, View, Pressable, Text } from "react-native";
import { MarketFigure } from "../components/MarketFigure";
import { useAnimatedList } from "../customHooks/useAnimatedList";

{/* <MarketFigure bubbleImg={dnaImg} figureImg={biologistGirl} />,
<MarketFigure bubbleImg={kelpImg} figureImg={raincoatGirl} />,
<MarketFigure bubbleImg={mammothImg} figureImg={scientistBoy} /> */}

export function TheMarket({ navigation }) {
  const investors = [{
    figure: require('../../assets/figures/figure-girl-doctor-2.png'),
    idea: require('../../assets/misc/word-bubble-dna.png'),
    ideaDetail: "🧬 ➕ 💰 🟰 🧪",
    ideaTitle: "Scientific Breakthrough!",
    cost: ['⚫', '⚫',],
  }, {
    figure: require('../../assets/figures/figure-girl-water.png'),
    idea: require('../../assets/misc/word-bubble-kelp.png'),
    ideaDetail: "🪸 ➕ 💰 🟰 ♻️🟢",
    ideaTitle: "Kelp-based clign-wrap!",
    cost: ['⚫', '⚫', '⚫',],
  }, {
    figure: require('../../assets/figures/figure-arctic-boy.png'),
    idea: require('../../assets/misc/word-bubble-mammoth.png'),
    ideaDetail: "💡 ➕ 💰 🟰 🦣",
    ideaTitle: "Bring Back the Whooly Mammoth!",
    cost: ['⚫', '⚫', '⚫', '⚫',],
  }];

  const background = require('../../assets/landscape/market-landscape-1.png');
  const animatedValues = useAnimatedList();
  const resetFigures = animatedValues[3];
  const selected = animatedValues[4];

  return (
    <ImageBackground
      source={background}
      resizeMode="cover"
      style={styles.background}>
      <Pressable
        style={styles.figureReset}
        onPressIn={() => resetFigures(true)}
        onPressOut={() => resetFigures(false)}><Text>X</Text>
      </Pressable>

      {selected === null ? null :
        <View style={styles.ideaDetail}>
          <Text>{investors[selected].ideaTitle}</Text>
          <Text style={styles.tempDiagram}>{investors[selected].ideaDetail}</Text>
        </View>}

      {selected === null ? null :
        <View style={styles.costSection}>
          <Text style={styles.costTitle}>Cost</Text>
          <View style={styles.costBin} >
            {investors[selected].cost.map((item, i) => (
              <Text key={`${item}-${i}`} style={styles.costDiagram}>{item}</Text>))}
          </View>
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
  figureReset: {
    position: 'absolute',
    right: 20,
    bottom: 10,
    height: 30,
    width: 30,
    zIndex: 4
  },
  ideaDetail: {
    position: 'absolute',
    height: 140,
    width: 400,
    left: 10,
    top: 10,
    backgroundColor: 'white',
    opacity: .9,
    borderWidth: 9,
    borderRadius: 5,
    zIndex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tempDiagram: {
    fontSize: 40
  },
  costSection: {
    position: 'absolute',
    height: 260,
    width: 80,
    left: 420,
    top: 10,
    backgroundColor: 'white',
    opacity: .9,
    borderWidth: 9,
    borderRadius: 5,
    zIndex: 2,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  costTitle: {
    fontSize: 20,
  },
  costBin: {
    justifyContent: "space-evenly",
    height: 210,
  },
  costDiagram: {
    fontSize: 30,
  }
});
