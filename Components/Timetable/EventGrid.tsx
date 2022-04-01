import React from 'react';
import { ScrollView, StyleSheet, View, Text, SafeAreaView } from 'react-native';

type Props = {
  stage: string;
};

export default function EventGrid({ stage }: Props) {
  console.log(stage);
  const getHours = (): number[] => {
    let grid = [];
    for (let i = 0; i < 25; i++) {
      grid.push(i);
    }
    return grid;
  };
  const hours: number[] = getHours();
  return (
    <>
      {hours.map((time, index) => (
        <View key={`${stage}${time}${index}`} style={styles.container}>
          <Text style={styles.text}>
            {stage} - {time}
          </Text>
        </View>
      ))}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    backgroundColor: 'blue',
    borderColor: 'red',
    borderWidth: 1,
  },
  text: {
    color: 'white',
    textAlign: 'center',
  },
});
