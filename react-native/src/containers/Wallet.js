import { View, StyleSheet, Text, Pressable } from 'react-native';
import { SpringToOrigin } from '../components/SpringToOrigin';

export function Wallet({ wallet, showing, toggleWallet }) {
  console.log("##### Wallet ");

  function generateCoins() {
    const output = [];
    let count = 1;
    while (count <= wallet) {
      output.push(count);
      count += 1;
    }
    return output;
  };

  const coins = generateCoins();

  return (
    <View style={[styles.container, { transform: [{ translateX: showing ? 0 : 90 }] },]}>
      <View style={{ alignItems: 'center', justifyContent: 'space-between', top: 20, }}>
        {coins.map((coin) => <SpringToOrigin key={`coin-${coin}`} />)}
      <Pressable onPress={toggleWallet}><Text style={styles.hide}>➥</Text></Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    right: 0,
    height: '100%',
    width: 100,
    backgroundColor: '#9b59b6',
    zIndex: 3,
    borderLeftWidth: 5,
    borderTopWidth: 1,
    borderTopStartRadius: 50,
    borderColor: '#6D214F'
  },
  hide: {
    fontSize: 28,
    color: '#6D214F',
    right: -200,
  }
});
