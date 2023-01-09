import { StatusBar } from 'expo-status-bar';
import { View, ImageBackground, StyleSheet, SafeAreaView, Text } from 'react-native';
import { RotatingView } from './src/components/RotatingView';
import { BigButton } from './src/containers/BigButton';


export default function App() {
  const image = { uri: "assets/forest-background.png" };
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={require('./assets/forest-background.png')} resizeMode="cover" style={styles.image}>
        <View style={styles.buttonsCol}>
          <BigButton style={styles.getMoneyBtn} btnLabel={"Get Money"} />
          <BigButton style={styles.useMoneyBtn} btnLabel={"Use Money"} />
        </View>
        <View style={styles.mainCol}>
          <Text style={styles.text}>Main Display</Text>
        </View>
        <View style={styles.walletCol}>
          <Text style={styles.text}>Wallet</Text>
        </View>
        <StatusBar style="auto" hidden={true} />
      </ImageBackground>
    </SafeAreaView >
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    background: "#00b894", //green
    borderWidth: 3,
    borderColor: "#d63031"
  },
  image: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center"
  },
  text: {
    fontSize: 18,
    backgroundColor: '#ff7675',
  },
  buttonsCol: {
    flex: 1,
    borderWidth: 5,
    borderColor: "#82ccdd", //blue
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
    backgroundColor: 'transparent'
  },
  mainCol: {
    flex: 5,
    borderWidth: 5,
    borderColor: "#6a89cc", //livid
    alignItems: 'center',
    justifyContent: 'center',
  },
  walletCol: {
    flex: 1,
    borderWidth: 5,
    borderColor: "#f8c291", //Melon
    alignItems: 'center',
    justifyContent: 'center',
  }
});
