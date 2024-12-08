import { StyleSheet, Text, SafeAreaView, View } from 'react-native';
import React from "react";

export default function Header() {
  return (
    <SafeAreaView style={styles.main}>
        <Text style={styles.text}>Список дел</Text>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
    main: {
        height: 100,
        paddingTop: 60,
        backgroundColor: '#B87333',
        borderBottomWidth: 3,
    },
    text: {
        fontSize: 25,
        color: 'black',
        textAlign: "center",
        fontWeight: "bold"
    }
});