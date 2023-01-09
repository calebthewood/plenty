import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, SafeAreaView, Text } from 'react-native';
import { RotatingView } from './src/components/RotatingView';
import { BigButton } from './src/containers/BigButton';

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonsCol}>
        <BigButton style={styles.getMoneyBtn} btnLabel={"Get Money"} />
        <BigButton style={styles.useMoneyBtn} btnLabel={"Use Money"} />
      </View>
      <View style={styles.mainCol}>
        <Text>Main Display</Text>
      </View>
      <View style={styles.walletCol}>
        <Text>Wallet</Text>
      </View>
      <StatusBar style="auto" hidden={true} />
    </SafeAreaView >
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#b8e994", //green
    flexDirection: "row"
  },
  buttonsCol: {
    flex: 1,
    backgroundColor: "#82ccdd", //blue
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
  },
  getMoneyBtn: {

  },
  useMoneyBtn: {


  },
  mainCol: {
    flex: 4,
    backgroundColor: "#6a89cc" //livid
  },
  walletCol: {
    flex: 1,
    backgroundColor: "#f8c291" //Melon
  }
});
