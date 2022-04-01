import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import EventGrid from './EventGrid';

const stages = ['Pyramid Stage', 'Other Stage', 'John Peel'];

export default function Stages() {
  return (
    <View style={styles.gridContainer}>
      {stages.map((stage, index) => (
        <View key={`${stage}${index}`} style={styles.stageRow}>
          <View style={styles.stageNameContainer}>
            <Text style={styles.text}>{stage}</Text>
          </View>
          <EventGrid stage={stage}></EventGrid>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  gridContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  stageRow: {
    marginTop: 0,
    flexDirection: 'row',
    backgroundColor: '#eb7db1',
    width: 100,
    alignContent: 'center',
  },
  text: {
    color: 'white',
    width: 60,
    fontSize: 14,
    textAlign: 'center',
  },
  stageNameContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    width: 100,
  },
});
