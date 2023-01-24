import { useState, useRef, useEffect } from 'react';
import { View, StyleSheet, Text, Pressable, Animated } from 'react-native';
import { SpringToOrigin } from '../components/SpringToOrigin';

export function Wallet({ wallet }) {
  console.log("##### Wallet ");

  const [showing, setShowing] = useState(false);
  const walletAnim = useRef(new Animated.Value(90)).current;

  useEffect(() => {
    Animated.spring(walletAnim, {
      toValue: showing ? 5 : 90,
      duration: 200,
      useNativeDriver: true
    }).start();
  }, [showing]);


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


  function toggleWallet() {
    setShowing(!showing);
  }

  return (
    <Animated.View style={[
      styles.container,
      {
        transform: [{ translateX: walletAnim }],
      },
    ]}>
      <Pressable onPress={toggleWallet} style={styles.toggle}><Text style={styles.toggleIcon}>$   </Text></Pressable>
      <View style={{ alignItems: 'center', justifyContent: 'space-between', }}>
        {coins.map((coin) => <SpringToOrigin key={`coin-${coin}`} />)}
      </View>
    </Animated.View>
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
  toggle: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',

    height: 40,
    width: 50,
    top: 200,
    right: 30,
    backgroundColor: '#9b59b6',
    borderColor: '#6D214F',
    borderTopWidth: 2,
    borderLeftWidth: 4,
    borderRadius: 20,
  },
  toggleIcon: {
    color: 'gold',
    fontSize: 20,
  },
  hide: {
    fontSize: 28,
    color: '#6D214F',
    right: -200,
  }
});
