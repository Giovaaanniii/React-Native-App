import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, View } from 'react-native';

export default function App() {

  return(
    <SafeAreaView style={styles.container}>
    
    <View  style={styles.box}>
      <View style={styles.box_1}>
        <Text>Hello</Text>
      </View>
      <View style={styles.box_2}>
        <Text>World</Text>
      </View>
      <View style={styles.box_3}>
        <Text>!!!</Text>
      </View>
    </View>

    <StatusBar style="auto" />
  </SafeAreaView>
  )
}
const simleStyle = {backgroundColor:"red", color: "blue"}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  box:{
    backgroundColor: "black",
    display:"flex",
    textAlign:"center",
    borderWidth:10,
    borderColor:"green",
    flexDirection:"column",
    justifyContent:"space-around",
    alignItems:"center"
  },
  box_1:{
    backgroundColor: "white",
    display:"flex",
    textAlign:"center",
    padding:20
  },
  box_2:{
    backgroundColor: "blue",
    padding:20
    
  },
  box_3:{
    backgroundColor: "red",
    padding:20
    
  }
});
