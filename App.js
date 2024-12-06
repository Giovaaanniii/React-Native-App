import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, Button, Alert, Image, TouchableWithoutFeedback } from 'react-native';

export default function App() {
  const handleButtonPress = () => Alert.alert("Уведомление", "вы нажали на кнопку", [
    {text: "да", onPress:() => console.log("Yes")},
    {text: "Отмена", onPress:() => console.log("No")}
  ])
  const handleTextPress = () => console.log('text pressed');
  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={2} style={styles.text} onPress={handleTextPress}>Hello{"\n"}Hello</Text>
     
      <Button title={'Нажми на меня'} color='black' onPress={handleButtonPress}/>
      
      <TouchableWithoutFeedback onPress={handleTextPress}>
        <Image source={require('./assets/orig.png')} style={styles.img}/>
      </TouchableWithoutFeedback>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  text: {
    color: 'red',
  },
  img: {
    width: 100,
    height: 100,
  },
});
