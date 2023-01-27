import { ImageBackground, View, Text, Pressable } from "react-native";

{/* <ImageBackground
source={icon}
resizeMode="contain"
style={{height: 70, width: 70}}/> */}

export function ReturnHome({ navigateHome }) {
  const icon = require('../../assets/landscape/demo-homescreen-round.png');
  return (
    <Pressable
      accessibilityLabel="Return to forest"
      onPress={navigateHome}
      style={{
        borderWidth: 2, borderRadius: 50,
        borderColor: 'grey',
        backgroundColor: 'white', opacity: .9,
        justifyContent: 'center', alignItems: 'center',
        top: -260, left: -290,
        height: 60, width: 60,
      }} >
      <Text style={{fontSize: 30, color: 'grey'}}>⇱</Text>

    </Pressable>
  );
}