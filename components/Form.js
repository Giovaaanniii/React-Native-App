import { StyleSheet, Text, SafeAreaView, TextInput, Button } from 'react-native';
import React, { useState } from "react";

export default function Form({addHandler}) {
    const [text, setValue] = useState('')
    const onChange = (text) => {
        setValue(text)
    }
  return (
    <SafeAreaView style={styles.main}>
        <TextInput style={styles.input} onChangeText={onChange} placeholder='Впишите задачу'/>
        <Button color = "#B87333" title="Добавить задачу" onPress={() => addHandler(text)}/>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
    input:{
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: "black",
        padding: 10,
        marginVertical:10,
        width: "60%",
        color: "white"
    },
    main:{
        marginTop:10,
        display: "flex",
        alignItems: "center",
    },
});