import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, ScrollView } from 'react-native';
import DayPicker from './DayPicker';
import Stages from './Stages';
import Times from './Times';
import dayjs from 'dayjs';

// actData prop contains all acts for all of the stages
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

function filterByDay(actData: props['actData'], day: String) {
  // Convert the start date into a day of the week and return filtered data
  return actData.filter((act) => dayjs(act.start).format('dddd') === day);
}

export default function Timetable() {
  const [daySelected, setDaySelected] = useState('Friday');

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
            <Stages daySelected={daySelected}></Stages>
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
