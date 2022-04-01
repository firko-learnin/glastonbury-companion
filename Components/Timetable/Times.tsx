import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const times = [
  '',
  '00:00',
  '01:00',
  '02:00',
  '03:00',
  '04:00',
  '05:00',
  '06:00',
  '07:00',
  '08:00',
  '09:00',
  '10:00',
  '11:00',
  '12:00',
  '13:00',
  '14:00',
  '15:00',
  '16:00',
  '17:00',
  '18:00',
  '19:00',
  '20:00',
  '21:00',
  '22:00',
  '23:00',
  '00:00',
];

export default function Times() {
  return (
    <View style={styles.timeRow}>
      {times.map((time, index) => (
        <View key={`${time}${index}`} style={styles.timeContainer}>
          <Text style={styles.text}>{time}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  timeRow: {
    flexDirection: 'row',
    backgroundColor: '#eb7db1',
    height: 40,
    alignItems: 'center',
    marginLeft: 0,
  },
  timeContainer: {
    width: 100,
  },
  text: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
  },
});
