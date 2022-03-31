import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text } from 'react-native';
import DayPicker from './DayPicker';

type props = {
  actData: {
    end?: string;
    mbId?: string;
    name?: string;
    short?: string;
    start?: string;
    url?: string;
  }[];
};

export default function Timetable({ actData }: props) {
  const [daySelected, setDaySelected] = useState('Wednesday');
  console.log(actData);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Timetable:</Text>
      <Text style={styles.text}>Filters:</Text>
      <DayPicker daySelected={daySelected} setDaySelected={setDaySelected}></DayPicker>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: '#81E1B8',
  },
  container: {
    flex: 1,
    backgroundColor: 'hsl(247, 56%, 18%)',
  },
  text: {
    color: 'white',
    textAlign: 'center',
  },
});
