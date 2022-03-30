import React, { useCallback, useRef } from 'react';
import { SafeAreaView, StyleSheet, View, Alert } from 'react-native';
import TimeTableView, { genTimeBlock } from 'react-native-timetable';
const events_data = [
  {
    title: 'Math',
    startTime: genTimeBlock('MON', 9),
    endTime: genTimeBlock('MON', 10, 50),
    location: 'Classroom 403',
    extra_descriptions: ['Kim', 'Lee'],
  },
  {
    title: 'Math',
    startTime: genTimeBlock('WED', 9),
    endTime: genTimeBlock('WED', 10, 50),
    location: 'Classroom 403',
    extra_descriptions: ['Kim', 'Lee'],
  },
  {
    title: 'Physics',
    startTime: genTimeBlock('MON', 11),
    endTime: genTimeBlock('MON', 11, 50),
    location: 'Lab 404',
    extra_descriptions: ['Einstein'],
  },
  {
    title: 'Physics',
    startTime: genTimeBlock('WED', 11),
    endTime: genTimeBlock('WED', 11, 50),
    location: 'Lab 404',
    extra_descriptions: ['Einstein'],
  },
  {
    title: 'Mandarin',
    startTime: genTimeBlock('TUE', 9),
    endTime: genTimeBlock('TUE', 10, 50),
    location: 'Language Center',
    extra_descriptions: ['Chen'],
  },
  {
    title: 'Japanese',
    startTime: genTimeBlock('FRI', 9),
    endTime: genTimeBlock('FRI', 10, 50),
    location: 'Language Center',
    extra_descriptions: ['Nakamura'],
  },
  {
    title: 'Club Activity',
    startTime: genTimeBlock('THU', 9),
    endTime: genTimeBlock('THU', 10, 50),
    location: 'Activity Center',
  },
  {
    title: 'Club Activity',
    startTime: genTimeBlock('FRI', 13, 30),
    endTime: genTimeBlock('FRI', 14, 50),
    location: 'Activity Center',
  },
];

export default function Timetable() {
  // Is this correct?
  const ref = useCallback((node) => {
    if (node !== null) {
      return node;
    }
  }, []);

  let timetable = { numOfDays: 0, pivotDate: '' };
  timetable.numOfDays = 5;
  const pivotDate = genTimeBlock('mon');
  const onEventPress = (evt: Event) => {
    Alert.alert('onEventPress', JSON.stringify(evt));
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <TimeTableView
          scrollViewRef={ref} // Is this correct?
          events={events_data}
          pivotTime={9}
          pivotEndTime={20}
          pivotDate={pivotDate}
          numberOfDays={timetable.numOfDays}
          onEventPress={(evt: Event) => onEventPress(evt)}
          headerStyle={styles.headerStyle}
          formatDateHeader="dddd"
          locale="en-GB"
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: '#81E1B8',
  },
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
});
function setHeight(height: any) {
  throw new Error('Function not implemented.');
}
