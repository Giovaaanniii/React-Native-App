import { StyleSheet, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import React from "react";

export default function ListItem({el, deleteHandler}) {
  return (
    <TouchableOpacity style={styles.touch} onPress={() => deleteHandler(el.key)}>
        <Text style={styles.text}>{el.text}</Text>
    </TouchableOpacity>
  );
}


const styles = StyleSheet.create({
    text:{
        padding:20,
        textAlign: "center",
        borderRadius: 5,
        backgroundColor: "white",
        borderWidth: 1,
        marginTop: 20,
        width: "60%",
        fontWeight: "bold", 
    },
    touch: {
        display: "flex",
        alignItems: "center"
    }
});