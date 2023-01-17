import { ImageBackground, View, Text, Pressable } from "react-native";

/**
 * Renders: a brief instructional diagram before a game
 */
export function IntroDiagram({ navigateTo, navigateBack, diagram }) {
  return (
    <ImageBackground
      source={diagram}
      resizeMode="contain"
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F8EFBA',
      }}>
        <View style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '90%',
        }}>

          <Pressable style={{
            width: 60,
            height: 60,
            borderRadius: 50,
            borderWidth: 3,
            borderColor: '#b33939',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#ff7979'
          }}
            title='✗' onPress={navigateBack}>
            <Text style={{ fontSize: 40, color: '#b33939' }}>✗</Text>
          </Pressable>

          <Pressable style={{
            width: 60,
            height: 60,
            borderRadius: 50,
            borderWidth: 3,
            borderColor: '#30693D',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#BDD176'
          }}
            title='✓' onPress={navigateTo}>
            <Text style={{ fontSize: 40, color: '#30693D' }}>✓</Text>
          </Pressable>
        </View>
    </ImageBackground >);
}