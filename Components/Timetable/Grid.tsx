import React from 'react';
import { ScrollView, StyleSheet, View, Text, SafeAreaView } from 'react-native';

export default function Grid() {
  return <SafeAreaView style={styles.container}></SafeAreaView>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  text: {
    color: 'white',
  },
});
