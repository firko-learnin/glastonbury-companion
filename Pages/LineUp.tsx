import { StyleSheet, Text, SafeAreaView, ScrollView, StatusBar } from 'react-native';
import schedule from '../Data/schedule2019.json';
import Timetable from '../Components/Timetable/Timetable';

export default function LineUp() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Schedule</Text>
      <Timetable></Timetable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'hsl(247, 56%, 18%)',
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    alignItems: 'center',
    paddingBottom: '10%',
  },
  title: {
    textAlign: 'center',
    color: 'white',
    fontSize: 40,
  },
  text: {
    color: 'white',
  },
});
