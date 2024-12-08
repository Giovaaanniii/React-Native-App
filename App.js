import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, View, FlatList } from 'react-native';
import Header from "./components/Header.js";
import ListItem from "./components/Listitem.js";
import Form from './components/Form.js';

export default function App() {
  const [listOfItems, setListOfItems] = useState([
    {text: "Купить молоко", key: "1"},
    {text: "Помыть машину", key: "2"},
    {text: "Сходить в зал", key: "3"},
    {text: "Доделать работу", key: "4"}
  ])

  const addHandler = (text) => {
    setListOfItems((list) =>{
      return [
        { text: text, key: Math.random().toString(36).substring(7) },
        ...list
      ]
    })
  }

const deleteHandler = (key) =>{
  setListOfItems((list) => {
    return list.filter(listOfItems => listOfItems.key != key)
  })
}

  return(
    <SafeAreaView style={styles.container}>
      <Header/>
      <Form addHandler={addHandler}/>
      <View>
        <FlatList data={listOfItems} renderItem={({item}) => (
          <ListItem el={item} deleteHandler={deleteHandler}/>
        )}/>
      </View>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#008000',
    
  }
});
