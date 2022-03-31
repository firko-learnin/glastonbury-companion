import React from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import Times from './Times';

const stages = ['Pyramid Stage', 'Other Stage', 'John Peel'];

export default function Stages() {
  return (
    <View style={styles.container}>
      <View style={styles.stageColumn}>
        {stages.map((stage, index) => (
          <View style={styles.textContainer}>
            <Text key={`${stage}${index}`} style={styles.text}>
              {stage}
            </Text>
          </View>
        ))}
        {stages.map((stage, index) => (
          <View style={styles.textContainer}>
            <Text key={`${stage}${index}`} style={styles.text}>
              {stage}
            </Text>
          </View>
        ))}
        {stages.map((stage, index) => (
          <View style={styles.textContainer}>
            <Text key={`${stage}${index}`} style={styles.text}>
              {stage}
            </Text>
          </View>
        ))}
        {stages.map((stage, index) => (
          <View style={styles.textContainer}>
            <Text key={`${stage}${index}`} style={styles.text}>
              {stage}
            </Text>
          </View>
        ))}
        {stages.map((stage, index) => (
          <View style={styles.textContainer}>
            <Text key={`${stage}${index}`} style={styles.text}>
              {stage}
            </Text>
          </View>
        ))}
        {stages.map((stage, index) => (
          <View style={styles.textContainer}>
            <Text key={`${stage}${index}`} style={styles.text}>
              {stage}
            </Text>
          </View>
        ))}
      </View>
      <ScrollView
        nestedScrollEnabled
        horizontal
        style={styles.ScrollViewHorizontal}
        stickyHeaderIndices={[0]}
      >
        <Times></Times>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  stageColumn: {
    marginTop: 40,
    flexDirection: 'column',
    backgroundColor: '#eb7db1',
    width: 80,
  },
  text: {
    color: 'white',
    width: 60,
    fontSize: 14,
    textAlign: 'center',
  },
  textContainer: {
    width: 60,
    height: 60,
  },
  ScrollViewHorizontal: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'green',
  },
});
