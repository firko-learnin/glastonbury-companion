import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, ScrollView } from 'react-native';
import DayPicker from './DayPicker';
import Stages from './Stages';
import Times from './Times';

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
      <ScrollView
        nestedScrollEnabled
        horizontal
        style={styles.ScrollViewHorizontal}
        stickyHeaderIndices={[0]}
      >
        <ScrollView nestedScrollEnabled style={styles.verticalScrollView} stickyHeaderIndices={[0]}>
          <Times></Times>
          <ScrollView
            nestedScrollEnabled
            style={styles.verticalScrollView}
            stickyHeaderIndices={[0]}
          >
            <Stages></Stages>
          </ScrollView>
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'hsl(247, 56%, 18%)',
  },
  text: {
    color: 'white',
    textAlign: 'center',
  },
  verticalScrollView: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#eb7db1',
  },
  ScrollViewHorizontal: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'green',
  },
});
